import { forwardRef } from "react";

const FlightTrail = forwardRef<SVGPathElement>((_, ref) => {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1600 900"
    >
      <path
        ref={ref}
        d=""
        stroke="#0EA5E9"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity=".45"
      />
    </svg>
  );
});

FlightTrail.displayName = "FlightTrail";

export default FlightTrail;