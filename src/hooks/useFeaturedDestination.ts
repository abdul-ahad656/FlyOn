import { useLayoutEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import type { FeaturedDestinationRefs } from "../components/destinations/types";

gsap.registerPlugin(ScrollTrigger);

const useFeaturedDestination = ({
  sectionRef,
  imageRef,
  overlayRef,
  headingRef,
  descriptionRef,
  statsRef,
  buttonRef,
  glowRef,
  sweepRef,
  cardRef
}: FeaturedDestinationRefs) => {
  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      //----------------------------------
      // Initial State
      //----------------------------------

      gsap.set(sectionRef.current, {
        opacity: 0,
        y: 80,
        scale: 0.96,
        transformPerspective: 1400,
      });

      gsap.set(imageRef.current, {
        scale: 1.08,
      });

      gsap.set(overlayRef.current, {
        opacity: 0,
        y: 60,
      });

      gsap.set(
        [
          headingRef.current,
          descriptionRef.current,
          statsRef.current,
          buttonRef.current,
        ],
        {
          opacity: 0,
          y: 35,
        }
      );

      //----------------------------------
      // Reveal Timeline
      //----------------------------------

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
        duration: 1,
        ease: "power3.out",
      })

        .to(
          imageRef.current,
          {
            scale: 1,
            duration: 2,
            ease: "power2.out",
          },
          "-=0.7"
        )

        .to(
          overlayRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=1.4"
        )

        .to(
          headingRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "-=0.45"
        )

        .to(
          descriptionRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
          },
          "-=0.4"
        )

        .to(
          statsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.35"
        )

        .to(
          buttonRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.35"
        );

      //----------------------------------
      // Ken Burns
      //----------------------------------

      gsap.to(imageRef.current, {
        scale: 1.14,
        duration: 24,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      //----------------------------------
      // Floating Image
      //----------------------------------

      gsap.to(imageRef.current, {
        y: -14,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      //----------------------------------
      // Glow Breathing
      //----------------------------------

      gsap.to(glowRef.current, {
        scale: 1.18,
        opacity: 0.75,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      //----------------------------------
      // Light Sweep
      //----------------------------------

      gsap.set(sweepRef.current, {
        xPercent: -180,
      });

      gsap.to(sweepRef.current, {
        xPercent: 220,
        duration: 2,
        repeat: -1,
        repeatDelay: 8,
        ease: "power1.inOut",
      });

            //----------------------------------
      // Hover Physics
      //----------------------------------

      const rotation = {
        x: 0,
        y: 0,
      };

      const targetRotation = {
        x: 0,
        y: 0,
      };

      const handleCardMove = (e: MouseEvent) => {
        if (!cardRef.current) return;

        const rect =
          cardRef.current.getBoundingClientRect();

        const x =
          (e.clientX - rect.left) / rect.width;

        const y =
          (e.clientY - rect.top) / rect.height;

        targetRotation.y = (x - 0.5) * 10;

        targetRotation.x = (0.5 - y) * 10;
      };

      const handleCardLeave = () => {
        targetRotation.x = 0;
        targetRotation.y = 0;
      };

      cardRef.current?.addEventListener(
        "mousemove",
        handleCardMove
      );

      cardRef.current?.addEventListener(
        "mouseleave",
        handleCardLeave
      );



      //----------------------------------
      // Mouse Parallax
      //----------------------------------

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
        //----------------------------------
        // Mouse Parallax
        //----------------------------------

        smooth.x +=
          (mouse.x - smooth.x) * 0.08;

        smooth.y +=
          (mouse.y - smooth.y) * 0.08;

        //----------------------------------
        // Hover Rotation
        //----------------------------------

        rotation.x +=
          (targetRotation.x - rotation.x) *
          0.08;

        rotation.y +=
          (targetRotation.y - rotation.y) *
          0.08;

        //----------------------------------
        // Card
        //----------------------------------

        gsap.set(cardRef.current, {
          rotateX: rotation.x,
          rotateY: rotation.y,
          transformPerspective: 1400,
          transformStyle: "preserve-3d",
        });

        //----------------------------------
        // Image
        //----------------------------------

        gsap.set(imageRef.current, {
          x: smooth.x * 12,
          rotateX: rotation.x * 0.2,
          rotateY: rotation.y * 0.2,
        });

        //----------------------------------
        // Overlay
        //----------------------------------

        gsap.set(overlayRef.current, {
          x: smooth.x * 8,
          y: smooth.y * 6,
          rotateX: rotation.x * 0.6,
          rotateY: rotation.y * 0.6,
          z: 40,
        });

        //----------------------------------
        // Glow
        //----------------------------------

        gsap.set(glowRef.current, {
          x: smooth.x * 25,
          y: smooth.y * 18,
        });
      };

      //----------------------------------
      // Cleanup
      //----------------------------------

      return () => {
        window.removeEventListener(
          "mousemove",
          handleMove
        );

        cardRef.current?.removeEventListener(
          "mousemove",
          handleCardMove
        );

        cardRef.current?.removeEventListener(
          "mouseleave",
          handleCardLeave
        );

        gsap.ticker.remove(tick);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, [
    sectionRef,
    cardRef,
    imageRef,
    overlayRef,
    headingRef,
    descriptionRef,
    statsRef,
    buttonRef,
    glowRef,
    sweepRef,
  ]);
};

export default useFeaturedDestination;