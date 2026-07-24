import { useEffect } from "react";
import gsap from "gsap";

import { HERO_SCENE } from "../scene/config";
import { flightRuntime } from "../scene/flightRuntime";
import type { HeroSceneRefs } from "../scene/types";

/**
 * Hero atmosphere loop — glow pulse + cloud drift.
 * Aircraft motion moved to useFlightDirector.
 */
const useHeroScene = ({ glowRef, cloudRefs }: HeroSceneRefs) => {
  useEffect(() => {
    const scene = {
      time: 0,
      mouse: { x: 0, y: 0 },
      smoothMouse: { x: 0, y: 0 },
    };

    const handleMove = (e: MouseEvent) => {
      scene.mouse.x =
        (e.clientX - window.innerWidth / 2) / window.innerWidth;
      scene.mouse.y =
        (e.clientY - window.innerHeight / 2) / window.innerHeight;
    };

    window.addEventListener("mousemove", handleMove, { passive: true });

    gsap.to(glowRef.current, {
      scale: HERO_SCENE.glow.pulseScale,
      duration: HERO_SCENE.glow.pulseSpeed,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    const tick = () => {
      scene.time += 1;

      scene.smoothMouse.x +=
        (scene.mouse.x - scene.smoothMouse.x) * 0.08;
      scene.smoothMouse.y +=
        (scene.mouse.y - scene.smoothMouse.y) * 0.08;

      gsap.set(glowRef.current, {
        x:
          scene.smoothMouse.x * HERO_SCENE.glow.mouseStrength +
          flightRuntime.environment.heroGlowShiftX,
        y:
          scene.smoothMouse.y * HERO_SCENE.glow.mouseStrength +
          flightRuntime.environment.heroGlowShiftY,
      });

      cloudRefs.current.forEach((cloud, i) => {
        const config = HERO_SCENE.clouds[i];
        if (!cloud || !config) return;

        gsap.set(cloud, {
          x:
            Math.sin(scene.time * 0.01 * config.speed) * config.amplitude +
            scene.smoothMouse.x * config.parallax * 60 +
            flightRuntime.environment.cloudShiftX,
          y:
            Math.cos(scene.time * 0.008 * config.speed) *
              config.amplitude *
              0.4 +
            flightRuntime.environment.cloudShiftY,
          force3D: true,
        });
      });
    };

    gsap.ticker.add(tick);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      gsap.killTweensOf(glowRef.current);
      gsap.ticker.remove(tick);
    };
  }, [glowRef, cloudRefs]);
};

export default useHeroScene;
