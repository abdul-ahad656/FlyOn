import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useFlight } from "../context/FlightContext";
import { FLIGHT } from "../scene/flightConfig";
import {
  getFlightSample,
  measureHeroStart,
  measureLandingCentre,
  resetFlightPhysics,
} from "../scene/flightPhysics";

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

    const writeTrail = (opacity: number) => {
      const pathStr = state.trailHistory
        .map(
          (p, i) =>
            `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`
        )
        .join(" ");

      if (trailRef.current) {
        trailRef.current.setAttribute("d", pathStr);
        trailRef.current.setAttribute("opacity", String(opacity));
      }

      if (trailGlowRef.current) {
        trailGlowRef.current.setAttribute("d", pathStr);
        trailGlowRef.current.setAttribute(
          "opacity",
          String(opacity * 0.36)
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

      const { width: planeW, height: planeH } = measurePlaneSize();

      const start = measureHeroStart(heroEl);

      // Fallback end if LandingTarget has not mounted yet
      const aboutRect = aboutEl.getBoundingClientRect();
      const end = landingEl
        ? measureLandingCentre(landingEl, planeH)
        : {
            x: aboutRect.left + aboutRect.width * 0.22,
            y: aboutRect.top + aboutRect.height * 0.22,
          };

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

      // Combined aircraft attitude
      const attitude = sample.rotation + sample.bank * 0.35 + sample.pitch * 0.25;

      setPlaneX(sample.x);
      setPlaneY(sample.y);
      setPlaneRot(attitude);
      setPlaneScale(sample.scale);

      if (engineGlow) {
        gsap.set(engineGlow, { opacity: sample.engineGlow });
      }

      if (setShadowX && setShadowY && setShadowScale && setShadowOpacity) {
        setShadowX(sample.x + planeW * 0.12);
        setShadowY(sample.y + planeH * 0.55);
        setShadowScale(0.7 + sample.flightMix * 0.15);
        setShadowOpacity(0.1 + sample.flightMix * 0.06);
      }

      // Contrail — only while airborne
      if (sample.flightMix > 0.05 && sample.landMix < 0.92) {
        state.trailHistory.push({ x: sample.trailX, y: sample.trailY });
        if (state.trailHistory.length > FLIGHT.trail.maxPoints) {
          state.trailHistory.shift();
        }
        state.trailOpacity = FLIGHT.trail.opacity * sample.flightMix;
        writeTrail(state.trailOpacity);
      } else if (sample.landMix >= 0.5 || sample.phase === "landed") {
        state.trailOpacity += (0 - state.trailOpacity) * 0.04;
        writeTrail(state.trailOpacity);
        if (state.trailOpacity < 0.02) {
          state.trailHistory.length = 0;
        }
      } else if (sample.phase === "idle") {
        state.trailHistory.length = 0;
        writeTrail(0);
      }

      // Logo reveal — triggered once as the plane enters final approach
      if (logoEl) {
        if (sample.landMix >= 0.55) {
          revealLogo();
        } else if (sample.flightMix < 0.35 || sample.phase === "idle") {
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
    };
  }, [planeRef, shadowRef, trailRef, trailGlowRef, landingEl, logoEl]);
};

export default useFlightDirector;
