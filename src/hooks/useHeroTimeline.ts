import { useLayoutEffect } from "react";
import gsap from "gsap";

interface HeroTimelineProps {
  badgeRef: React.RefObject<HTMLDivElement | null>;
  headingRef: React.RefObject<HTMLDivElement | null>;
  descriptionRef: React.RefObject<HTMLParagraphElement | null>;
  buttonsRef: React.RefObject<HTMLDivElement | null>;
  statsRef: React.RefObject<HTMLDivElement | null>;
  glowRef: React.RefObject<HTMLDivElement | null>;
  cloudRefs: React.RefObject<HTMLImageElement[]>;
}

const useHeroTimeline = ({
  badgeRef,
  headingRef,
  descriptionRef,
  buttonsRef,
  statsRef,
  glowRef,
  cloudRefs,
}: HeroTimelineProps) => {
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

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

    gsap.set(glowRef.current, {
      opacity: 0,
      scale: 0.5,
    });

    gsap.set(cloudRefs.current, {
      opacity: 0,
      y: 50,
    });

    tl.to(glowRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1.3,
    })
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
      .to(
        badgeRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
        },
        "-=0.6"
      )
      .to(
        headingRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
        },
        "-=0.45"
      )
      .to(
        descriptionRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
        },
        "-=0.5"
      )
      .to(
        buttonsRef.current,
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
      );

    return () => {
      tl.kill();
    };
  }, [
    badgeRef,
    headingRef,
    descriptionRef,
    buttonsRef,
    statsRef,
    glowRef,
    cloudRefs,
  ]);
};

export default useHeroTimeline;
