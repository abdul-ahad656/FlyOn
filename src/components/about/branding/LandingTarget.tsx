import { forwardRef, useLayoutEffect, useRef } from "react";

import { useFlight } from "../../../context/FlightContext";
import LogoReveal from "./LogoReveal";

/**
 * Landing pad for the global plane.
 * Exposes a DOM ref measured each frame by FlightDirector via getBoundingClientRect().
 */
const LandingTarget = forwardRef<HTMLDivElement>((_, ref) => {
  const { setLandingEl } = useFlight();
  const targetRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    setLandingEl(targetRef.current);

    return () => {
      setLandingEl(null);
    };
  }, [setLandingEl]);

  return (
    <div
      ref={ref}
      className="
        about-branding
        relative
        mb-12
        flex
        flex-col
        items-center
        sm:items-start
      "
    >
      {/* Aim point — plane flies toward this element (never hardcoded coords) */}
      <div
        ref={targetRef}
        className="
          flight-landing-target
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-2
          w-2
          -translate-x-1/2
          sm:left-[3.5rem]
          sm:translate-x-0
        "
        aria-hidden
      />

      {/* Vertical runway — plane parks above the wordmark */}
      <div
        className="
          flex
          w-full
          flex-col
          items-center
          pt-14
          sm:items-start
          sm:pl-6
          sm:pt-16
          md:pt-[4.5rem]
        "
      >
        <LogoReveal />
      </div>
    </div>
  );
});

LandingTarget.displayName = "LandingTarget";

export default LandingTarget;
