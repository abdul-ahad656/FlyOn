import { useLayoutEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import type { DestinationCardRefs } from "../components/destinations/types";

gsap.registerPlugin(ScrollTrigger);

const useDestinationCard = ({
  cardRef,
  imageRef,
  glowRef,
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
      // Reveal
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
      // Glow Breathing
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
      // Hover Physics
      //--------------------------------------

      const rotation = {
        x: 0,
        y: 0,
      };

      const target = {
        x: 0,
        y: 0,
      };

      const mouse = {
        x: 0,
        y: 0,
      };

      const handleMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();

        const px =
          (e.clientX - rect.left) / rect.width;

        const py =
          (e.clientY - rect.top) / rect.height;

        target.y = (px - 0.5) * 8;
        target.x = (0.5 - py) * 8;

        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      };

      const reset = () => {
        target.x = 0;
        target.y = 0;
      };

      card.addEventListener(
        "mousemove",
        handleMove
      );

      card.addEventListener(
        "mouseleave",
        reset
      );

      //--------------------------------------
      // Hover Shadow
      //--------------------------------------

      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          boxShadow:
            "0 40px 90px rgba(15,23,42,.18)",
          duration: 0.4,
        });

        gsap.to(imageRef.current, {
          scale: 1.08,
          duration: 0.5,
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          boxShadow:
            "0 25px 70px rgba(15,23,42,.08)",
          duration: 0.4,
        });

        gsap.to(imageRef.current, {
          scale: 1,
          duration: 0.5,
        });
      });

      //--------------------------------------
      // Render Loop
      //--------------------------------------

      const tick = () => {
        rotation.x +=
          (target.x - rotation.x) * 0.08;

        rotation.y +=
          (target.y - rotation.y) * 0.08;

        gsap.set(card, {
          rotateX: rotation.x,
          rotateY: rotation.y,
          transformPerspective: 1200,
        });

        gsap.set(imageRef.current, {
          rotateX: rotation.x * 0.15,
          rotateY: rotation.y * 0.15,
        });

        gsap.set(glowRef.current, {
          x: (mouse.x - 150) * 0.08,
          y: (mouse.y - 100) * 0.08,
        });
      };

      gsap.ticker.add(tick);

      //--------------------------------------
      // Cleanup
      //--------------------------------------

      return () => {
        gsap.ticker.remove(tick);

        card.removeEventListener(
          "mousemove",
          handleMove
        );

        card.removeEventListener(
          "mouseleave",
          reset
        );
      };
    }, card);

    return () => ctx.revert();
  }, [
    cardRef,
    imageRef,
    glowRef,
    contentRef,
    titleRef,
    buttonRef,
  ]);
};

export default useDestinationCard;