import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useFlight } from "../context/FlightContext";
import { FLIGHT } from "../scene/flightConfig";
import {
  composeAttitude,
  composeScale,
  createDynamicsState,
  enhanceFlightMotion,
  resetDynamicsState,
} from "../scene/flightDynamics";
import {
  computeEnvironmentOffsets,
} from "../scene/flightEnvironment";
import {
  getFlightSample,
  measureHeroStart,
  measureLandingCentre,
  resetFlightPhysics,
} from "../scene/flightPhysics";
import { publishFlightRuntime, resetFlightRuntime } from "../scene/flightRuntime";
import {
  buildContrailPath,
  fadeTrailOpacity,
  shouldDrawTrail,
} from "../scene/flightTrail";
import { runFlightTickExtensions } from "../scene/flightTickExtensions";

gsap.registerPlugin(ScrollTrigger);

interface FlightDirectorRefs {
  planeRef: React.RefObject<HTMLDivElement | null>;
  shadowRef: React.RefObject<HTMLDivElement | null>;
  trailRef: React.RefObject<SVGPathElement | null>;
  trailGlowRef: React.RefObject<SVGPathElement | null>;
}

/**
 * Single GSAP ticker + ScrollTrigger scrub that owns the global plane.
 * Idle float in Hero → cubic flight → dynamic landing on LandingTarget.
 */
const useFlightDirector = ({
  planeRef,
  shadowRef,
  trailRef,
  trailGlowRef,
}: FlightDirectorRefs) => {
  const { landingEl, logoEl } = useFlight();

  useLayoutEffect(() => {
    const plane = planeRef.current;
    const shadow = shadowRef.current;
    if (!plane) return;

    const heroEl = document.getElementById("home");
    const aboutEl = document.getElementById("about");
    if (!heroEl || !aboutEl) return;

    resetFlightPhysics();
    resetFlightRuntime();

    const dynamics = createDynamicsState();

    const setPlaneX = gsap.quickSetter(plane, "x", "px");
    const setPlaneY = gsap.quickSetter(plane, "y", "px");
    const setPlaneRot = gsap.quickSetter(plane, "rotation", "deg");
    const setPlaneScale = gsap.quickSetter(plane, "scale");

    const setShadowX = shadow
      ? gsap.quickSetter(shadow, "x", "px")
      : null;
    const setShadowY = shadow
      ? gsap.quickSetter(shadow, "y", "px")
      : null;
    const setShadowScale = shadow
      ? gsap.quickSetter(shadow, "scale")
      : null;
    const setShadowOpacity = shadow
      ? gsap.quickSetter(shadow, "opacity")
      : null;

    const state: {
      time: number;
      targetProgress: number;
      smoothProgress: number;
      mouse: { x: number; y: number };
      smoothMouse: { x: number; y: number };
      trailHistory: { x: number; y: number }[];
      trailOpacity: number;
      logoRevealed: boolean;
    } = {
      time: 0,
      targetProgress: 0,
      smoothProgress: 0,
      mouse: { x: 0, y: 0 },
      smoothMouse: { x: 0, y: 0 },
      trailHistory: [],
      trailOpacity: FLIGHT.trail.opacity,
      logoRevealed: false,
    };

    let logoRevealTween: gsap.core.Tween | null = null;

    const engineGlow = plane.querySelector(
      ".global-plane-engine"
    ) as HTMLElement | null;

    const engineHalo = plane.querySelector(
      ".global-plane-engine-halo"
    ) as HTMLElement | null;

    const resetLogo = () => {
      logoRevealTween?.kill();
      logoRevealTween = null;
      state.logoRevealed = false;

      if (logoEl) {
        gsap.set(logoEl, { opacity: 0, y: 20 });
      }
    };

    const revealLogo = () => {
      if (!logoEl || state.logoRevealed) return;

      state.logoRevealed = true;
      logoRevealTween = gsap.to(logoEl, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        overwrite: true,
      });
    };

    //------------------------------------------
    // Intro — plane arrives into idle hover
    //------------------------------------------

    // Position is owned by the ticker from frame 1 — intro only reveals.
    gsap.set(plane, {
      opacity: 0,
      transformOrigin: "50% 50%",
    });

    if (shadow) {
      gsap.set(shadow, { opacity: 0 });
    }

    if (logoEl) {
      gsap.set(logoEl, { opacity: 0, y: 20 });
    }

    const intro = gsap.to(plane, {
      opacity: 1,
      duration: FLIGHT.intro.duration,
      ease: "power3.out",
    });

    if (shadow) {
      gsap.to(shadow, {
        opacity: 0.14,
        duration: FLIGHT.intro.duration * 0.75,
        delay: 0.25,
        ease: "power2.out",
      });
    }

    //------------------------------------------
    // Scroll → flight progress
    //------------------------------------------

    const trigger = ScrollTrigger.create({
      trigger: heroEl,
      endTrigger: aboutEl,
      start: FLIGHT.scroll.start,
      end: FLIGHT.scroll.end,
      scrub: FLIGHT.scroll.scrub,
      onUpdate: (self) => {
        state.targetProgress = self.progress;
      },
    });

    //------------------------------------------
    // Mouse parallax (idle only — applied in physics)
    //------------------------------------------

    const onMove = (e: MouseEvent) => {
      state.mouse.x =
        (e.clientX - window.innerWidth / 2) / window.innerWidth;
      state.mouse.y =
        (e.clientY - window.innerHeight / 2) / window.innerHeight;
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    const measurePlaneSize = () => {
      const img = plane.querySelector(
        ".global-plane-img"
      ) as HTMLImageElement | null;
      const rect = (img ?? plane).getBoundingClientRect();
      // getBoundingClientRect includes current transform — use offset size when available
      const width = img?.offsetWidth || rect.width || FLIGHT.plane.width;
      const height =
        img?.offsetHeight ||
        rect.height ||
        FLIGHT.plane.width * (276 / 502);
      return { width, height };
    };

    const writeTrail = (opacity: number, velocity: number, flightMix: number) => {
      const pathStr = buildContrailPath(
        state.trailHistory,
        state.time,
        velocity,
        flightMix
      );

      if (trailRef.current) {
        trailRef.current.setAttribute("d", pathStr);
        trailRef.current.setAttribute("opacity", String(opacity));
      }

      if (trailGlowRef.current) {
        trailGlowRef.current.setAttribute("d", pathStr);
        trailGlowRef.current.setAttribute(
          "opacity",
          String(opacity * 0.32)
        );
      }
    };

    //------------------------------------------
    // ONE ticker — plane, shadow, trail, logo
    //------------------------------------------

    const tick = () => {
      state.time += 1;

      state.smoothMouse.x +=
        (state.mouse.x - state.smoothMouse.x) *
        FLIGHT.motion.mouseSmoothing;
      state.smoothMouse.y +=
        (state.mouse.y - state.smoothMouse.y) *
        FLIGHT.motion.mouseSmoothing;

      state.smoothProgress +=
        (state.targetProgress - state.smoothProgress) *
        FLIGHT.physics.progressSmoothing;

      const start = measureHeroStart(heroEl);

      const { width: planeW, height: planeH } = measurePlaneSize();

      const end = landingEl
        ? measureLandingCentre(landingEl, planeH)
        : (() => {
            const aboutRect = aboutEl.getBoundingClientRect();
            const scrollY = window.scrollY;
            return {
              x: aboutRect.left + aboutRect.width * 0.22,
              y: aboutRect.top + scrollY + aboutRect.height * 0.18,
            };
          })();

      const sample = getFlightSample({
        progress: state.smoothProgress,
        time: state.time,
        start,
        end,
        planeWidth: planeW,
        planeHeight: planeH,
        mouseX: state.smoothMouse.x,
        mouseY: state.smoothMouse.y,
      });

      const motion = enhanceFlightMotion(
        dynamics,
        sample,
        state.smoothProgress,
        state.time
      );

      const attitude = composeAttitude(motion);
      const scale = composeScale(motion);
      const { sample: enhanced } = motion;

      setPlaneX(enhanced.x);
      setPlaneY(enhanced.y);
      setPlaneRot(attitude);
      setPlaneScale(scale);

      if (engineGlow) {
        gsap.set(engineGlow, {
          opacity: motion.engineGlow * 0.85,
          scale: motion.engineScale,
          force3D: true,
        });
      }

      if (engineHalo) {
        gsap.set(engineHalo, {
          opacity: motion.engineGlow * 0.35,
          scale: 1.6 + motion.engineGlow * 0.5,
          force3D: true,
        });
      }

      if (setShadowX && setShadowY && setShadowScale && setShadowOpacity) {
        setShadowX(enhanced.x + planeW * 0.12);
        setShadowY(enhanced.y + planeH * 0.55);
        setShadowScale(0.7 + enhanced.flightMix * 0.15);
        setShadowOpacity(0.1 + enhanced.flightMix * 0.06);
      }

      if (shouldDrawTrail(enhanced.flightMix, enhanced.landMix)) {
        state.trailHistory.push({ x: enhanced.trailX, y: enhanced.trailY });
        if (state.trailHistory.length > FLIGHT.trail.maxPoints) {
          state.trailHistory.shift();
        }
        state.trailOpacity =
          FLIGHT.trail.opacity * enhanced.flightMix * (1 - enhanced.landMix * 0.4);
        writeTrail(state.trailOpacity, motion.velocity, enhanced.flightMix);
      } else if (enhanced.landMix >= 0.5 || enhanced.phase === "landed") {
        state.trailOpacity = fadeTrailOpacity(state.trailOpacity);
        writeTrail(state.trailOpacity, motion.velocity, enhanced.flightMix);
        if (state.trailOpacity < 0.02) {
          state.trailHistory.length = 0;
        }
      } else if (enhanced.phase === "idle") {
        state.trailHistory.length = 0;
        writeTrail(0, 0, 0);
      }

      const environment = computeEnvironmentOffsets({
        flightMix: enhanced.flightMix,
        landMix: enhanced.landMix,
        velocity: motion.velocity,
        phase: enhanced.phase,
        time: state.time,
      });

      publishFlightRuntime({
        sample: enhanced,
        velocity: motion.velocity,
        smoothVelocity: dynamics.smoothVelocity,
        phase: enhanced.phase,
        flightMix: enhanced.flightMix,
        landMix: enhanced.landMix,
        engineGlow: motion.engineGlow,
        trailOpacity: state.trailOpacity,
        environment,
      });

      runFlightTickExtensions({
        time: state.time,
        progress: state.smoothProgress,
        motion,
        environment,
        trailOpacity: state.trailOpacity,
      });

      if (logoEl) {
        if (enhanced.landMix >= 0.55) {
          revealLogo();
        } else if (enhanced.flightMix < 0.35 || enhanced.phase === "idle") {
          resetLogo();
        }
      }
    };

    gsap.ticker.add(tick);

    const onResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", onResize);

    return () => {
      intro.kill();
      logoRevealTween?.kill();
      trigger.kill();
      gsap.ticker.remove(tick);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      gsap.killTweensOf(plane);
      if (shadow) gsap.killTweensOf(shadow);
      if (logoEl) gsap.killTweensOf(logoEl);
      if (engineGlow) gsap.killTweensOf(engineGlow);
      if (engineHalo) gsap.killTweensOf(engineHalo);
      resetDynamicsState(dynamics);
      resetFlightRuntime();
    };
  }, [planeRef, shadowRef, trailRef, trailGlowRef, landingEl, logoEl]);
};

export default useFlightDirector;
