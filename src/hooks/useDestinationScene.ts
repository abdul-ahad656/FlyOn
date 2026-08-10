import { useLayoutEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import type {
  DestinationSceneRefs,
} from "../components/destinations/types";

gsap.registerPlugin(ScrollTrigger);

const useDestinationScene = ({
  sectionRef,
  backgroundRef,
  glowRef,
  headerRef,
  featuredRef,
  gridRef,
  ctaRef,
}: DestinationSceneRefs) => {
  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;

    const ctx = gsap.context(() => {
      //----------------------------------
      // Initial states
      //----------------------------------

      gsap.set(headerRef.current, {
        opacity: 0,
        y: 70,
      });

      gsap.set(featuredRef.current, {
        opacity: 0,
        y: 90,
        scale: 0.96,
      });

      gsap.set(gridRef.current, {
        opacity: 0,
        y: 80,
      });

      gsap.set(ctaRef.current, {
        opacity: 0,
        y: 60,
      });

      //----------------------------------
      // Main reveal
      //----------------------------------

      const reveal = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 72%",
          once: true,
        },
      });

      reveal
        .to(headerRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
        })

        .to(
          featuredRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.1,
            ease: "power3.out",
          },
          "-=0.35"
        )

        .to(
          gridRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.4"
        )

        .to(
          ctaRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
          },
          "-=0.35"
        );

      //----------------------------------
      // Background floating motion
      //----------------------------------

      gsap.to(backgroundRef.current, {
        y: -18,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      //----------------------------------
      // Main glow breathing
      //----------------------------------

      gsap.to(glowRef.current, {
        scale: 1.14,
        opacity: 0.72,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      //----------------------------------
      // Mouse parallax
      //----------------------------------

      const mouse = {
        x: 0,
        y: 0,
      };

      const smooth = {
        x: 0,
        y: 0,
      };

      const handleMouseMove = (
        event: MouseEvent
      ) => {
        mouse.x =
          (event.clientX -
            window.innerWidth / 2) /
          window.innerWidth;

        mouse.y =
          (event.clientY -
            window.innerHeight / 2) /
          window.innerHeight;
      };

      window.addEventListener(
        "mousemove",
        handleMouseMove,
        { passive: true }
      );

      //----------------------------------
      // Smooth render loop
      //----------------------------------

      const tick = () => {
        smooth.x +=
          (mouse.x - smooth.x) * 0.045;

        smooth.y +=
          (mouse.y - smooth.y) * 0.045;

        gsap.set(backgroundRef.current, {
          x: smooth.x * 14,
          y:
            smooth.y * 10 +
            Math.sin(
              gsap.ticker.time * 0.35
            ) *
              6,
        });

        gsap.set(glowRef.current, {
          x: smooth.x * 28,
          y: smooth.y * 20,
        });
      };

      gsap.ticker.add(tick);

      //----------------------------------
      // Cleanup
      //----------------------------------

      return () => {
        window.removeEventListener(
          "mousemove",
          handleMouseMove
        );

        gsap.ticker.remove(tick);
      };
    }, section);

    return () => {
      ctx.revert();
    };
  }, [
    sectionRef,
    backgroundRef,
    glowRef,
    headerRef,
    featuredRef,
    gridRef,
    ctaRef,
  ]);
};

export default useDestinationScene;