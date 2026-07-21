import Plane from "./scene/Plane";
import Clouds from "./scene/Clouds";
import SunGlow from "./scene/SunGlow";
import FlightTrail from "./scene/FlightTrail";
import Atmosphere from "./scene/Atmosphere";

interface Props {
  planeRef: React.RefObject<HTMLDivElement | null>;
  shadowRef: React.RefObject<HTMLDivElement | null>;
  glowRef: React.RefObject<HTMLDivElement | null>;
  trailRef: React.RefObject<SVGPathElement | null>;
  cloudRefs: React.RefObject<HTMLImageElement[]>;
}

const HeroScene = ({
  planeRef,
  shadowRef,
  glowRef,
  trailRef,
  cloudRefs,
}: Props) => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <Atmosphere />

      <SunGlow ref={glowRef} />

      <Clouds refs={cloudRefs} />

      <FlightTrail ref={trailRef} />

      <Plane
        ref={planeRef}
        shadowRef={shadowRef}
      />
    </div>
  );
};

export default HeroScene;