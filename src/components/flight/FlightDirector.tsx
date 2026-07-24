import { useRef } from "react";

import GlobalPlane from "./GlobalPlane";
import FlightTrail from "./FlightTrail";
import useFlightDirector from "../../hooks/useFlightDirector";

/**
 * Page-level flight orchestrator.
 * Renders the single GlobalPlane + contrail and drives scroll-synced flight.
 * Mount once inside FlightProvider (see Home).
 */
const FlightDirector = () => {
  const planeRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<SVGPathElement>(null);
  const trailGlowRef = useRef<SVGPathElement>(null);

  useFlightDirector({
    planeRef,
    shadowRef,
    trailRef,
    trailGlowRef,
  });

  return (
    <>
      <FlightTrail ref={trailRef} glowRef={trailGlowRef} />
      <GlobalPlane ref={planeRef} shadowRef={shadowRef} />
    </>
  );
};

export default FlightDirector;
