import ServicesGlow from "./ServicesGlow";
import ServicesGradient from "./ServicesGradient";
import ServicesGridPattern from "./ServicesGridPattern";
import ServicesNoise from "./ServicesNoise";

interface Props {
  backgroundRef: React.RefObject<HTMLDivElement | null>;
  glowRef: React.RefObject<HTMLDivElement | null>;
}

const ServicesBackground = ({
  backgroundRef,
  glowRef,
}: Props) => {
  return (
    <div
      className="
        absolute
        inset-0
        overflow-hidden
        -z-10
      "
    >
      <ServicesGradient />

      <ServicesGlow
        backgroundRef={backgroundRef}
        glowRef={glowRef}
      />

      <ServicesGridPattern />

      <ServicesNoise />
    </div>
  );
};

export default ServicesBackground;