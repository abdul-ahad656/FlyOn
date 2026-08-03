import { useLayoutEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import type { ServicesSceneRefs } from "../components/services/types";

gsap.registerPlugin(ScrollTrigger);

const useServicesScene = ({
  sectionRef,
  headerRef,
  featuredRef,
  dividerRef,
  gridRef,
  ctaRef,
  backgroundRef,
  glowRef,
}: ServicesSceneRefs) => {
  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      //---------------------------------------
      // Initial State
      //---------------------------------------

      gsap.set(headerRef.current, {
        opacity: 0,
        y: 60,
      });

      gsap.set(featuredRef.current, {
        opacity: 0,
        y: 70,
        scale: 0.96,
      });

      gsap.set(dividerRef.current, {
        scaleX: 0,
        transformOrigin: "center center",
      });

      gsap.set(gridRef.current, {
        opacity: 0,
        y: 80,
      });

      gsap.set(ctaRef.current, {
        opacity: 0,
        y: 50,
      });

      //---------------------------------------
      // Main Timeline
      //---------------------------------------

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,

          start: "top 72%",

          once: true,
        },
      });

      tl.to(headerRef.current, {
        opacity: 1,
        y: 0,
        duration: .8,
        ease: "power3.out",
      })

      .to(featuredRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
      }, "-=.4")

      .to(dividerRef.current, {
        scaleX: 1,
        duration: .8,
        ease: "power2.out",
      }, "-=.2")

      .to(gridRef.current, {
        opacity: 1,
        y: 0,
        duration: .8,
      }, "-=.2")

      .to(ctaRef.current, {
        opacity: 1,
        y: 0,
        duration: .8,
      }, "-=.35");

      //---------------------------------------
      // Floating Background
      //---------------------------------------

      gsap.to(backgroundRef.current, {
        y: -18,

        duration: 7,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut",
      });

      //---------------------------------------
      // Glow Breathing
      //---------------------------------------

      gsap.to(glowRef.current, {
        scale: 1.12,

        opacity: .75,

        duration: 4,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut",
      });

      //---------------------------------------
      // Mouse Parallax
      //---------------------------------------

      const mouse = {
        x: 0,
        y: 0,
      };

      const smooth = {
        x: 0,
        y: 0,
      };

      const handleMove = (e: MouseEvent) => {
        mouse.x =
          (e.clientX - window.innerWidth / 2) /
          window.innerWidth;

        mouse.y =
          (e.clientY - window.innerHeight / 2) /
          window.innerHeight;
      };

      window.addEventListener(
        "mousemove",
        handleMove
      );

      const tick = () => {
        smooth.x +=
          (mouse.x - smooth.x) * 0.08;

        smooth.y +=
          (mouse.y - smooth.y) * 0.08;

        gsap.set(backgroundRef.current, {
          x: smooth.x * 12,
          y:
            smooth.y * 12 +
            Math.sin(gsap.ticker.time * .6) * 6,
        });

        gsap.set(glowRef.current, {
          x: smooth.x * 24,
          y: smooth.y * 18,
        });

        gsap.set(gridRef.current, {
          x: smooth.x * 8,
          y: smooth.y * 6,
        });
      };

      gsap.ticker.add(tick);

      return () => {
        window.removeEventListener(
          "mousemove",
          handleMove
        );

        gsap.ticker.remove(tick);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, [
    sectionRef,
    headerRef,
    featuredRef,
    dividerRef,
    gridRef,
    ctaRef,
    backgroundRef,
    glowRef,
  ]);
};

export default useServicesScene;