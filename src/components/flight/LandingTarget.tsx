import { useLayoutEffect, useRef } from "react";

import { useFlight } from "../../context/FlightContext";

/**
 * Invisible / brand landing pad inside About.
 * Registers itself so the flight director can measure destination
 * with getBoundingClientRect — no hardcoded coordinates.
 *
 * Visual: Flyon wordmark fades in as the plane settles (driven by GSAP).
 */
const LandingTarget = () => {
  const { setLandingEl, setLogoEl } = useFlight();
  const targetRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    setLandingEl(targetRef.current);
    setLogoEl(logoRef.current);

    return () => {
      setLandingEl(null);
      setLogoEl(null);
    };
  }, [setLandingEl, setLogoEl]);

  return (
    <div
      className="
        flight-landing
        relative
        mb-10
        inline-flex
        flex-col
        items-center
      "
    >
      {/* Aim point — plane centres above this marker */}
      <div
        ref={targetRef}
        className="flight-landing-target relative h-3 w-3"
        aria-hidden
      >
        <span
          className="
            absolute
            inset-0
            rounded-full
            bg-accent/30
            opacity-0
          "
        />
      </div>

      <div
        ref={logoRef}
        className="flight-landing-logo mt-6 text-center"
        style={{ opacity: 0 }}
      >
        <p
          className="
            font-heading
            text-4xl
            font-bold
            tracking-tight
            text-primary
            sm:text-5xl
          "
        >
          Flyon
        </p>
        <p
          className="
            mt-1
            text-[11px]
            font-medium
            uppercase
            tracking-[0.35em]
            text-accent
          "
        >
          Luxury Travel
        </p>
      </div>
    </div>
  );
};

export default LandingTarget;
