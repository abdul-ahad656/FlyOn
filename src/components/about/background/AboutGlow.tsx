import { useLayoutEffect } from "react";
import gsap from "gsap";

import type { ParallaxLayer } from "../../../hooks/useBackgroundParallax";

interface Props {
  layersRef: React.MutableRefObject<ParallaxLayer[]>;
}

const AboutGlow = ({ layersRef }: Props) => {
  useLayoutEffect(() => {
    const el0 = layersRef.current[0]?.element;
    const el1 = layersRef.current[1]?.element;
    const el2 = layersRef.current[2]?.element;

    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      defaults: {
        ease: "sine.inOut",
      },
    });

    if (el0) {
      tl.to(
        el0,
        {
          x: "+=70",
          y: "+=45",
          duration: 9,
        },
        0
      );
    }

    if (el1) {
      tl.to(
        el1,
        {
          x: "-=60",
          y: "+=35",
          duration: 11,
        },
        0
      );
    }

    if (el2) {
      tl.to(
        el2,
        {
          x: "+=45",
          y: "-=55",
          duration: 10,
        },
        0
      );
    }

    return () => {
      tl.kill();
    };
  }, [layersRef]);

  return (
    <>
      <div
        ref={(el) => {
          layersRef.current[0] = {
            element: el,
            depth: 18,
          };
        }}
        className="
          absolute
          left-[-180px]
          top-[-140px]
          h-[520px]
          w-[520px]
          rounded-full
          bg-sky-300/20
          blur-[170px]
          will-change-transform
        "
      />

      <div
        ref={(el) => {
          layersRef.current[1] = {
            element: el,
            depth: 35,
          };
        }}
        className="
          absolute
          right-[-150px]
          top-[18%]
          h-[460px]
          w-[460px]
          rounded-full
          bg-primary/15
          blur-[160px]
          will-change-transform
        "
      />

      <div
        ref={(el) => {
          layersRef.current[2] = {
            element: el,
            depth: 55,
          };
        }}
        className="
          absolute
          bottom-[-220px]
          left-[35%]
          h-[380px]
          w-[380px]
          rounded-full
          bg-cyan-300/15
          blur-[150px]
          will-change-transform
        "
      />
    </>
  );
};

export default AboutGlow;