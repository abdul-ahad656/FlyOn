import { useLayoutEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import type { DestinationCardRefs } from "../components/destinations/types";

gsap.registerPlugin(ScrollTrigger);

const useDestinationCard = ({
  cardRef,
  imageRef,
  glowRef,
  spotlightRef,
  overlayRef,
  sweepRef,
  badgeRef,
  contentRef,
  titleRef,
  buttonRef,
}: DestinationCardRefs) => {
  useLayoutEffect(() => {
    if (!cardRef.current) return;

    const card = cardRef.current;

    const ctx = gsap.context(() => {
      //--------------------------------------
      // Initial State
      //--------------------------------------

      gsap.set(card, {
        opacity: 0,
        y: 70,
        scale: 0.94,
      });

      gsap.set(imageRef.current, {
        scale: 1.08,
      });

      gsap.set(
        [
          titleRef.current,
          contentRef.current,
          buttonRef.current,
        ],
        {
          opacity: 0,
          y: 25,
        }
      );

      //--------------------------------------
      // Reveal Animation
      //--------------------------------------

      gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          once: true,
        },
      })
        .to(card, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
        })
        .to(
          imageRef.current,
          {
            scale: 1,
            duration: 1.8,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .to(
          [
            titleRef.current,
            contentRef.current,
            buttonRef.current,
          ],
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power2.out",
          },
          "-=1.1"
        );

      //--------------------------------------
      // Ambient Glow
      //--------------------------------------

      gsap.to(glowRef.current, {
        scale: 1.18,
        opacity: 0.8,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      //--------------------------------------
      // Ken Burns
      //--------------------------------------

      gsap.to(imageRef.current, {
        scale: 1.12,
        duration: 22,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(imageRef.current, {
        x: 12,
        y: -8,
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      //--------------------------------------
      // Floating Badge
      //--------------------------------------

      gsap.to(badgeRef.current, {
        y: -8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      //--------------------------------------
      // Overlay Breathing
      //--------------------------------------

      gsap.to(overlayRef.current, {
        opacity: 0.92,
        scale: 1.04,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      //--------------------------------------
      // Luxury Sweep
      //--------------------------------------

      gsap.set(sweepRef.current, {
        xPercent: -180,
      });

      gsap.to(sweepRef.current, {
        xPercent: 220,
        duration: 2.2,
        repeat: -1,
        repeatDelay: 7,
        ease: "power1.inOut",
      });

      //--------------------------------------
      // Premium Hover Physics
      //--------------------------------------

      const state = {
        rotationX: 0,
        rotationY: 0,

        targetRotationX: 0,
        targetRotationY: 0,

        glowX: 0,
        glowY: 0,

        targetGlowX: 0,
        targetGlowY: 0,
      };

      const handleMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();

        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        state.targetRotationY = (x - 0.5) * 10;
        state.targetRotationX = (0.5 - y) * 10;

        state.targetGlowX = e.clientX - rect.left;
        state.targetGlowY = e.clientY - rect.top;
      };

      const handleEnter = () => {
        gsap.to(card, {
          boxShadow:
            "0 60px 120px rgba(15,23,42,.18)",
          duration: 0.45,
          ease: "power2.out",
        });

        gsap.to(spotlightRef.current, {
          opacity: 0.8,
          duration: 0.35,
        });
      };

      const handleLeave = () => {
        state.targetRotationX = 0;
        state.targetRotationY = 0;

        gsap.to(card, {
          boxShadow:
            "0 25px 70px rgba(15,23,42,.08)",
          duration: 0.45,
          ease: "power2.out",
        });

        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.45,
        });
      };

      card.addEventListener("mousemove", handleMove);
      card.addEventListener("mouseenter", handleEnter);
      card.addEventListener("mouseleave", handleLeave);

      //--------------------------------------
      // Render Loop
      //--------------------------------------

      const tick = () => {
        state.rotationX +=
          (state.targetRotationX - state.rotationX) * 0.08;

        state.rotationY +=
          (state.targetRotationY - state.rotationY) * 0.08;

        state.glowX +=
          (state.targetGlowX - state.glowX) * 0.12;

        state.glowY +=
          (state.targetGlowY - state.glowY) * 0.12;

        gsap.set(card, {
          rotateX: state.rotationX,
          rotateY: state.rotationY,
          transformPerspective: 1600,
        });

        gsap.set(contentRef.current, {
          rotateX: state.rotationX * 0.45,
          rotateY: state.rotationY * 0.45,
          z: 50,
        });

        gsap.set(glowRef.current, {
          x: (state.glowX - 150) * 0.12,
          y: (state.glowY - 120) * 0.12,
        });

        gsap.set(spotlightRef.current, {
          x: state.glowX - 120,
          y: state.glowY - 120,
        });
      };

      gsap.ticker.add(tick);

      //--------------------------------------
      // Cleanup
      //--------------------------------------

      return () => {
        gsap.ticker.remove(tick);

        card.removeEventListener("mousemove", handleMove);
        card.removeEventListener("mouseenter", handleEnter);
        card.removeEventListener("mouseleave", handleLeave);
      };
    }, card);

    return () => ctx.revert();
  }, [
    cardRef,
    imageRef,
    glowRef,
    spotlightRef,
    overlayRef,
    sweepRef,
    badgeRef,
    contentRef,
    titleRef,
    buttonRef,
  ]);
};

export default useDestinationCard;