import DestinationGlow from "./DestinationGlow";
import DestinationParticles from "./DestinationParticles";

interface Props {
  backgroundRef: React.RefObject<HTMLDivElement | null>;
  glowRef: React.RefObject<HTMLDivElement | null>;
}

const DestinationBackground = ({
  backgroundRef,
  glowRef,
}: Props) => {
  return (
    <div
      ref={backgroundRef}
      className="absolute inset-0 overflow-hidden"
    >
      <DestinationGlow glowRef={glowRef} />

      <DestinationParticles />
    </div>
  );
};

export default DestinationBackground;