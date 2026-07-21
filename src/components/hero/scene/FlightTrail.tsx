import { forwardRef } from "react";

const FlightTrail = forwardRef<SVGPathElement>((_, ref) => {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1600 900"
      preserveAspectRatio="none"
    >
      <path
        ref={ref}
        d="
        M1080 650
        C980 560,
        860 500,
        720 420

        S470 260,
        280 160
        "
        stroke="#0EA5E9"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity=".45"
        strokeDasharray="12 12"
      />
    </svg>
  );
});

FlightTrail.displayName = "FlightTrail";

export default FlightTrail;