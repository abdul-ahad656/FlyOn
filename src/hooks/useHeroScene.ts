import { useEffect } from "react";
import gsap from "gsap";

import { HERO_SCENE } from "../scene/config";
import { getPlaneState } from "../scene/physics";
import type { HeroSceneRefs } from "../scene/types";

const useHeroScene = ({
  planeRef,
  shadowRef,
  glowRef,
  trailRef,
  cloudRefs,
}: HeroSceneRefs) => {
  useEffect(() => {
    //------------------------------------------
    // Scene State
    //------------------------------------------

    const scene = {
      time: 0,

      mouse: {
        x: 0,
        y: 0,
      },

      smoothMouse: {
        x: 0,
        y: 0,
      },
    };

    //------------------------------------------
    // Flight History
    //------------------------------------------

    const history: { x: number; y: number }[] = [];

    //------------------------------------------
    // Mouse
    //------------------------------------------

    const handleMove = (e: MouseEvent) => {
      scene.mouse.x =
        (e.clientX - window.innerWidth / 2) /
        window.innerWidth;

      scene.mouse.y =
        (e.clientY - window.innerHeight / 2) /
        window.innerHeight;
    };

    window.addEventListener("mousemove", handleMove);

    //------------------------------------------
    // Glow Pulse
    //------------------------------------------

    gsap.to(glowRef.current, {
      scale: HERO_SCENE.glow.pulseScale,
      duration: HERO_SCENE.glow.pulseSpeed,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    //------------------------------------------
    // Main Render Loop
    //------------------------------------------

    const tick = () => {
      scene.time += 1;

      //------------------------------------------
      // Smooth Mouse
      //------------------------------------------

      scene.smoothMouse.x +=
        (scene.mouse.x - scene.smoothMouse.x) *
        0.08;

      scene.smoothMouse.y +=
        (scene.mouse.y - scene.smoothMouse.y) *
        0.08;

      //------------------------------------------
      // Plane Physics
      //------------------------------------------

      const plane = getPlaneState(scene.time);

      // Mouse influence reduced ~50% from original (10px / 6px max drift)
      const planeX = plane.x + scene.smoothMouse.x * 10;
      const planeY = plane.y + scene.smoothMouse.y * 6;

      gsap.set(planeRef.current, {
        x: planeX,
        y: planeY,
        rotation: plane.rotation + plane.bank,
        transformOrigin: "50% 50%",
      });

      //------------------------------------------
      // Shadow
      //------------------------------------------

      gsap.set(shadowRef.current, {
        x: planeX + 20,
        y: planeY + 55,
        scale: 0.75,
        opacity: 0.12,
      });

      //------------------------------------------
      // Glow
      //------------------------------------------

      gsap.set(glowRef.current, {
        x: scene.smoothMouse.x * HERO_SCENE.glow.mouseStrength,
        y: scene.smoothMouse.y * HERO_SCENE.glow.mouseStrength,
      });

      //------------------------------------------
      // Clouds
      //------------------------------------------

      cloudRefs.current.forEach((cloud, i) => {
        const config = HERO_SCENE.clouds[i];

        if (!cloud || !config) return;

        gsap.set(cloud, {
          x:
            Math.sin(scene.time * 0.01 * config.speed) *
              config.amplitude +
            scene.smoothMouse.x * config.parallax * 60,

          y:
            Math.cos(scene.time * 0.008 * config.speed) *
            config.amplitude * 0.4,
        });
      });

      //------------------------------------------
      // Flight Trail
      //------------------------------------------

      // trailX/Y is computed from plane dimensions in physics.ts
      // — no magic hardcoded offsets needed
      history.push({
        x: plane.trailX + scene.smoothMouse.x * 10,
        y: plane.trailY + scene.smoothMouse.y * 6,
      });

      if (history.length > 70) {
        history.shift();
      }

      if (trailRef.current) {
        const pathStr = history
          .map((p, index) =>
            `${index === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`
          )
          .join(" ");

        trailRef.current.setAttribute("d", pathStr);

        // Also update the soft glow layer (sibling path with id="trail-glow")
        const glowPath = trailRef.current.previousElementSibling as SVGPathElement | null;
        if (glowPath) {
          glowPath.setAttribute("d", pathStr);
        }
      }
    };

    gsap.ticker.add(tick);

    //------------------------------------------
    // Cleanup
    //------------------------------------------

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMove
      );

      gsap.killTweensOf(glowRef.current);

      gsap.ticker.remove(tick);
    };
  }, [
    planeRef,
    shadowRef,
    glowRef,
    trailRef,
    cloudRefs,
  ]);
};

export default useHeroScene;