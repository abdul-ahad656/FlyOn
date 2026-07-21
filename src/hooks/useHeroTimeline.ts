import { useLayoutEffect } from "react";
import gsap from "gsap";

interface HeroTimelineProps {
  badgeRef: React.RefObject<HTMLDivElement | null>;
  headingRef: React.RefObject<HTMLDivElement | null>;
  descriptionRef: React.RefObject<HTMLParagraphElement | null>;
  buttonsRef: React.RefObject<HTMLDivElement | null>;
  statsRef: React.RefObject<HTMLDivElement | null>;

  planeRef: React.RefObject<HTMLDivElement | null>;
  glowRef: React.RefObject<HTMLDivElement | null>;
  trailRef: React.RefObject<SVGPathElement | null>;
  cloudRefs: React.RefObject<HTMLImageElement[]>;
}

const useHeroTimeline = ({
  badgeRef,
  headingRef,
  descriptionRef,
  buttonsRef,
  statsRef,
  planeRef,
  glowRef,
  trailRef,
  cloudRefs,
}: HeroTimelineProps) => {
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    //----------------------------------------
    // Initial States
    //----------------------------------------

    gsap.set(
      [
        badgeRef.current,
        headingRef.current,
        descriptionRef.current,
        buttonsRef.current,
        statsRef.current,
      ],
      {
        opacity: 0,
        y: 40,
      }
    );

    gsap.set(planeRef.current, {
      opacity: 0,
      x: 240,
      y: -140,
      rotate: -18,
      scale: 0.85,
    });

    gsap.set(glowRef.current, {
      opacity: 0,
      scale: 0.5,
    });

    gsap.set(cloudRefs.current, {
      opacity: 0,
      y: 50,
    });

    //----------------------------------------
    // Flight Trail
    //----------------------------------------

    if (trailRef.current) {
      const length = trailRef.current.getTotalLength();

      gsap.set(trailRef.current, {
        strokeDasharray: length,
        strokeDashoffset: length,
        opacity: 0,
      });
    }

    //----------------------------------------
    // Timeline
    //----------------------------------------

    tl

      //----------------------------------------
      // Glow
      //----------------------------------------

      .to(glowRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1.3,
      })

      //----------------------------------------
      // Clouds
      //----------------------------------------

      .to(
        cloudRefs.current,
        {
          opacity: 1,
          y: 0,
          stagger: 0.18,
          duration: 1,
        },
        "-=0.8"
      )

      //----------------------------------------
      // Plane
      //----------------------------------------

      .to(
        planeRef.current,
        {
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 0,
          scale: 1,
          duration: 1.8,
          ease: "power4.out",
        },
        "-=0.6"
      )

      //----------------------------------------
      // Flight Trail
      //----------------------------------------

      .to(
        trailRef.current,
        {
          strokeDashoffset: 0,
          opacity: 0.45,
          duration: 1.6,
        },
        "-=1.5"
      )

      //----------------------------------------
      // Badge
      //----------------------------------------

      .to(
        badgeRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
        },
        "-=1"
      )

      //----------------------------------------
      // Heading
      //----------------------------------------

      .to(
        headingRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
        },
        "-=0.45"
      )

      //----------------------------------------
      // Description
      //----------------------------------------

      .to(
        descriptionRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
        },
        "-=0.5"
      )

      //----------------------------------------
      // Buttons
      //----------------------------------------

      .to(
        buttonsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
        },
        "-=0.45"
      )

      //----------------------------------------
      // Stats
      //----------------------------------------

      .to(
        statsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
        },
        "-=0.45"
      );

    return () => {
      tl.kill();
    };
  }, []);
};

export default useHeroTimeline;