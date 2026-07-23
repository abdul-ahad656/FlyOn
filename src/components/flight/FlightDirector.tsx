import { useRef } from "react";

import GlobalPlane from "./GlobalPlane";

const FlightDirector = () => {
  const planeRef =
    useRef<HTMLDivElement>(null);

  return (
    <>
      <GlobalPlane ref={planeRef} />
    </>
  );
};

export default FlightDirector;