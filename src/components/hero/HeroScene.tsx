import Clouds from "./scene/Clouds";
import SunGlow from "./scene/SunGlow";
import Atmosphere from "./scene/Atmosphere";

interface Props {
  glowRef: React.RefObject<HTMLDivElement | null>;
  cloudRefs: React.RefObject<HTMLImageElement[]>;
}

/**
 * Hero atmosphere only — the aircraft lives in the global FlightDirector.
 */
const HeroScene = ({ glowRef, cloudRefs }: Props) => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <Atmosphere />
      <SunGlow ref={glowRef} />
      <Clouds refs={cloudRefs} />
    </div>
  );
};

export default HeroScene;
