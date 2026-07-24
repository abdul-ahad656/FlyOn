import { forwardRef } from "react";

import { FLIGHT } from "../../scene/flightConfig";

interface FlightTrailProps {
  glowRef: React.RefObject<SVGPathElement | null>;
}

/**
 * Fixed SVG contrail drawn while the aircraft is in flight.
 * Path `d` is mutated via refs from the single GSAP ticker — no React state.
 */
const FlightTrail = forwardRef<SVGPathElement, FlightTrailProps>(
  ({ glowRef }, ref) => {
    return (
      <svg
        className="pointer-events-none fixed inset-0 z-[89] h-full w-full overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="flight-trail-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={FLIGHT.trail.color} stopOpacity="0" />
            <stop offset="35%" stopColor={FLIGHT.trail.color} stopOpacity="0.25" />
            <stop offset="100%" stopColor={FLIGHT.trail.color} stopOpacity="0.85" />
          </linearGradient>
          <filter
            id="flight-trail-blur"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feGaussianBlur stdDeviation="1.6" />
          </filter>
        </defs>

        <path
          ref={glowRef}
          d=""
          fill="none"
          stroke={FLIGHT.trail.glowColor}
          strokeWidth={FLIGHT.trail.glowWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.18"
          filter="url(#flight-trail-blur)"
        />

        <path
          ref={ref}
          d=""
          fill="none"
          stroke="url(#flight-trail-gradient)"
          strokeWidth={FLIGHT.trail.width}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={FLIGHT.trail.opacity}
        />
      </svg>
    );
  }
);

FlightTrail.displayName = "FlightTrail";

export default FlightTrail;
