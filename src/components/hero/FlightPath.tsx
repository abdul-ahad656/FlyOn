import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const FlightPath = () => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;

    if (!path) return;

    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 3,
      ease: "power2.out",
    });

    gsap.to(path, {
      strokeDashoffset: -length,
      repeat: -1,
      duration: 18,
      ease: "none",
    });
  }, []);

  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 900 700"
      fill="none"
    >
      <path
        ref={pathRef}
        d="
          M120 520
          C220 420
          340 450
          470 340
          C610 250
          700 260
          800 150
        "
        stroke="#005D78"
        strokeWidth="2"
        strokeLinecap="round"
        opacity=".2"
      />
    </svg>
  );
};

export default FlightPath;