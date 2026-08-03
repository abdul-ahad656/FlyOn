import { useLayoutEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import type { FeaturedServiceRefs } from "../components/services/types";

gsap.registerPlugin(ScrollTrigger);

const useFeaturedService = ({
  sectionRef,

  imageRef,

  headingRef,

  descriptionRef,

  featuresRef,

  statsRef,

  buttonRef,

  glowRef,

  sweepRef,
}: FeaturedServiceRefs) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      //--------------------------------------
      // Initial State
      //--------------------------------------

      gsap.set(sectionRef.current, {
        opacity: 0,
        y: 70,
        scale: 0.96,
        rotateX: 6,
        transformPerspective: 1200,
      });

      gsap.set(imageRef.current, {
        scale: 1.12,
      });

      gsap.set(
        [
          headingRef.current,
          descriptionRef.current,
          featuresRef.current,
          statsRef.current,
          buttonRef.current,
        ],
        {
          opacity: 0,
          y: 40,
        }
      );

      //--------------------------------------
      // Reveal Timeline
      //--------------------------------------

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,

          start: "top 72%",

          once: true,
        },
      });

      tl.to(sectionRef.current, {
        opacity: 1,

        y: 0,

        scale: 1,

        rotateX: 0,

        duration: 1,

        ease: "power3.out",
      })

        .to(
          imageRef.current,
          {
            scale: 1,

            duration: 2.2,

            ease: "power2.out",
          },
          "-=0.7"
        )

        .to(
          headingRef.current,
          {
            opacity: 1,

            y: 0,

            duration: 0.8,
          },
          "-=1.5"
        )

        .to(
          descriptionRef.current,
          {
            opacity: 1,

            y: 0,

            duration: 0.7,
          },
          "-=0.55"
        )

        .to(
          featuresRef.current,
          {
            opacity: 1,

            y: 0,

            duration: 0.7,
          },
          "-=0.45"
        )

        .to(
          statsRef.current,
          {
            opacity: 1,

            y: 0,

            duration: 0.7,
          },
          "-=0.45"
        )

        .to(
          buttonRef.current,
          {
            opacity: 1,

            y: 0,

            duration: 0.7,
          },
          "-=0.4"
        );

      //--------------------------------------
      // Floating Image
      //--------------------------------------

      gsap.to(imageRef.current, {
        y: -12,

        duration: 4,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut",
      });

      //--------------------------------------
      // Glow Breathing
      //--------------------------------------

      gsap.to(glowRef.current, {
        scale: 1.12,

        opacity: 0.8,

        duration: 3,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut",
      });

      //--------------------------------------
      // Light Sweep
      //--------------------------------------

      gsap.set(sweepRef.current, {
        xPercent: -160,
      });

      gsap.to(sweepRef.current, {
        xPercent: 220,

        duration: 2,

        repeat: -1,

        repeatDelay: 6,

        ease: "power1.inOut",
      });

      //--------------------------------------
      // Mouse Parallax
      //--------------------------------------

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

        gsap.set(imageRef.current, {
          x: smooth.x * 12,

          y:
            smooth.y * 8 +
            Math.sin(gsap.ticker.time) * 4,
        });

        gsap.set(glowRef.current, {
          x: smooth.x * 25,

          y: smooth.y * 20,
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
  }, []);
};

export default useFeaturedService;