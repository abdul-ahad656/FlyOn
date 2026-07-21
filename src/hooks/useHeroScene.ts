import { useEffect } from "react";
import gsap from "gsap";

import { HERO_SCENE } from "../scene/config";
import type { HeroSceneRefs } from "../scene/types";

const useHeroScene = ({
  planeRef,
  shadowRef,
  glowRef,
  trailRef,
  cloudRefs,
}: HeroSceneRefs) => {
  useEffect(() => {
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

    //------------------------------------------------
    // Mouse
    //------------------------------------------------

    const handleMove = (e: MouseEvent) => {
      scene.mouse.x =
        (e.clientX - window.innerWidth / 2) /
        window.innerWidth;

      scene.mouse.y =
        (e.clientY - window.innerHeight / 2) /
        window.innerHeight;
    };

    window.addEventListener("mousemove", handleMove);

    //------------------------------------------------
    // Trail
    //------------------------------------------------

    if (trailRef.current) {
      const length =
        trailRef.current.getTotalLength();

      trailRef.current.style.strokeDasharray =
        `${length}`;

      trailRef.current.style.strokeDashoffset =
        `${length}`;
    }

    //------------------------------------------------
    // Glow breathing
    //------------------------------------------------

    gsap.to(glowRef.current, {
      scale: HERO_SCENE.glow.pulseScale,

      duration: HERO_SCENE.glow.pulseSpeed,

      repeat: -1,

      yoyo: true,

      ease: "sine.inOut",
    });

    //------------------------------------------------
    // Main Engine
    //------------------------------------------------

    const tick = () => {
      scene.time += HERO_SCENE.plane.speed;

      scene.smoothMouse.x +=
        (scene.mouse.x - scene.smoothMouse.x) *
        0.08;

      scene.smoothMouse.y +=
        (scene.mouse.y - scene.smoothMouse.y) *
        0.08;

      //------------------------------------------
      // Plane
      //------------------------------------------

      const px =
        Math.sin(scene.time) *
        HERO_SCENE.plane.amplitudeX;

      const py =
        Math.sin(scene.time * 2) *
        HERO_SCENE.plane.amplitudeY;

      const rotation =
        Math.sin(scene.time) *
        HERO_SCENE.plane.rotation;

      const scale =
        1 +
        Math.cos(scene.time * 2) *
          HERO_SCENE.plane.scale;

      gsap.set(planeRef.current, {
        x:
          px +
          scene.smoothMouse.x *
            HERO_SCENE.plane.mouseStrength *
            100,

        y:
          py +
          scene.smoothMouse.y *
            HERO_SCENE.plane.mouseStrength *
            100,

        rotation,

        scale,
      });

      //------------------------------------------
      // Shadow
      //------------------------------------------

      gsap.set(shadowRef.current, {
        x: px * 0.55,

        y: py * 0.35,

        scale: 1 - py / 120,

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
        const config =
          HERO_SCENE.clouds[i];

        if (!cloud || !config) return;

        gsap.set(cloud, {
          x:
            Math.sin(
              scene.time * config.speed
            ) * config.amplitude +
            scene.smoothMouse.x *
              config.parallax *
              100,

          y:
            Math.cos(
              scene.time * config.speed
            ) *
            (config.amplitude * 0.5),
        });
      });

      //------------------------------------------
      // Trail
      //------------------------------------------

      if (trailRef.current) {
        const length =
          trailRef.current.getTotalLength();

        const progress =
          (Math.sin(scene.time * 0.5) + 1) /
          2;

        gsap.set(trailRef.current, {
          strokeDashoffset:
            length -
            length * progress,
        });
      }
    };

    gsap.ticker.add(tick);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMove
      );

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