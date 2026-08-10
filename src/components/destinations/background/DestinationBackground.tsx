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
      className="
        pointer-events-none
        absolute
        inset-0
        overflow-hidden
      "
    >
      {/* Deep atmospheric background */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_50%_15%,rgba(56,189,248,0.08),transparent_35%)]
        "
      />

      {/* Secondary atmosphere */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_85%_70%,rgba(34,211,238,0.05),transparent_30%)]
        "
      />

      {/* Glows */}

      <DestinationGlow glowRef={glowRef} />

      {/* Particles */}

      <DestinationParticles />

      {/* Subtle vignette */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(
            ellipse_at_center,
            transparent_35%,
            rgba(2,6,23,0.28)_100%
          )]
        "
      />

      {/* Top atmospheric fade */}

      <div
        className="
          absolute
          inset-x-0
          top-0
          h-40
          bg-gradient-to-b
          from-slate-950
          to-transparent
        "
      />

      {/* Bottom atmospheric fade */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-40
          bg-gradient-to-t
          from-slate-950
          to-transparent
        "
      />
    </div>
  );
};

export default DestinationBackground;