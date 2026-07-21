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

      const planeX =
  plane.x +
  scene.smoothMouse.x * 20;

const planeY =
  plane.y +
  scene.smoothMouse.y * 12;

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
        x: planeX + 35,
        y: planeY + 70,
        scale: 0.82,
        opacity: 0.18,
      });

      //------------------------------------------
      // Glow
      //------------------------------------------

      gsap.set(glowRef.current, {
        x:
          scene.smoothMouse.x *
          HERO_SCENE.glow.mouseStrength,

        y:
          scene.smoothMouse.y *
          HERO_SCENE.glow.mouseStrength,
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
            scene.smoothMouse.x *
              config.parallax *
              100,

          y:
            Math.cos(scene.time * 0.008 * config.speed) *
            config.amplitude *
            0.4,
        });
      });

      //------------------------------------------
      // Flight Trail
      //------------------------------------------

      history.push({
        x: plane.x + 260,
        y: plane.y + 95,
      });

      if (history.length > 90) {
        history.shift();
      }

      if (trailRef.current) {
        const path = history
          .map((p, index) =>
            `${index === 0 ? "M" : "L"} ${p.x} ${p.y}`
          )
          .join(" ");

        trailRef.current.setAttribute("d", path);
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