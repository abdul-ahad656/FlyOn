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
        items-start
      "
    >
      {/* Aim point — plane flies toward this element (never hardcoded coords) */}
      <div
        ref={targetRef}
        className="
          flight-landing-target
          pointer-events-none
          absolute
          left-[3.5rem]
          top-0
          h-2
          w-2
        "
        aria-hidden
      />

      {/* Vertical runway — plane parks directly above the wordmark */}
      <div
        className="
          flex
          w-full
          flex-col
          items-start
          pl-6
        "
      >
        <LogoReveal />
      </div>
    </div>
  );
});

LandingTarget.displayName = "LandingTarget";

export default LandingTarget;
