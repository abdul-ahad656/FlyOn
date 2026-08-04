import { useLayoutEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import type { DestinationSceneRefs } from "../components/destinations/types";

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

    const ctx = gsap.context(() => {
      //---------------------------------
      // Initial State
      //---------------------------------

      gsap.set(headerRef.current, {
        opacity: 0,
        y: 70,
      });

      gsap.set(featuredRef.current, {
        opacity: 0,
        y: 90,
        scale: .96,
      });

      gsap.set(gridRef.current, {
        opacity: 0,
        y: 80,
      });

      gsap.set(ctaRef.current, {
        opacity: 0,
        y: 60,
      });

      //---------------------------------
      // Reveal Timeline
      //---------------------------------

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });

      tl.to(headerRef.current, {
        opacity: 1,
        y: 0,
        duration: .8,
        ease: "power3.out",
      })

      .to(
        featuredRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
        },
        "-=.35"
      )

      .to(
        gridRef.current,
        {
          opacity: 1,
          y: 0,
          duration: .8,
          ease: "power3.out",
        },
        "-=.3"
      )

      .to(
        ctaRef.current,
        {
          opacity: 1,
          y: 0,
          duration: .8,
        },
        "-=.35"
      );

      //---------------------------------
      // Floating Background
      //---------------------------------

      gsap.to(backgroundRef.current, {
        y: -20,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      //---------------------------------
      // Glow
      //---------------------------------

      gsap.to(glowRef.current, {
        scale: 1.15,
        opacity: .75,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      //---------------------------------
      // Mouse Parallax
      //---------------------------------

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

      window.addEventListener("mousemove", handleMove);

      const tick = () => {
        smooth.x += (mouse.x - smooth.x) * .08;
        smooth.y += (mouse.y - smooth.y) * .08;

        gsap.set(backgroundRef.current, {
          x: smooth.x * 18,
          y:
            smooth.y * 14 +
            Math.sin(gsap.ticker.time * .5) * 8,
        });

        gsap.set(glowRef.current, {
          x: smooth.x * 30,
          y: smooth.y * 24,
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
    gridRef,
    ctaRef,
    backgroundRef,
    glowRef,
  ]);
};

export default useDestinationScene;