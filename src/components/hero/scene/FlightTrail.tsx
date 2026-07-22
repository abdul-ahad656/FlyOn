import { forwardRef } from "react";

const FlightTrail = forwardRef<SVGPathElement>((_, ref) => {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="trail-blur">
          <feGaussianBlur stdDeviation="1.2" />
        </filter>
      </defs>

      {/* Soft glow layer behind the trail */}
      <path
        d=""
        id="trail-glow"
        stroke="#7DD3FC"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        opacity="0.15"
        filter="url(#trail-blur)"
      />

      {/* Sharp trail line */}
      <path
        ref={ref}
        d=""
        stroke="#BAE6FD"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
});

FlightTrail.displayName = "FlightTrail";

export default FlightTrail;