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
        -z-0
        overflow-hidden
      "
      aria-hidden="true"
    >
      {/* =========================================
          BASE ATMOSPHERE
      ========================================== */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-slate-950
          via-slate-950
          to-slate-900
        "
      />

      {/* =========================================
          BLUE AMBIENT LIGHT
      ========================================== */}

      <DestinationGlow glowRef={glowRef} />

      {/* =========================================
          PARTICLE FIELD
      ========================================== */}

      <DestinationParticles />

      {/* =========================================
          CINEMATIC VIGNETTE
      ========================================== */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(
            ellipse_at_center,
            transparent_20%,
            rgba(2,6,23,0.35)_65%,
            rgba(2,6,23,0.85)_100%
          )]
        "
      />

      {/* =========================================
          SUBTLE TOP LIGHT
      ========================================== */}

      <div
        className="
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-primary/[0.06]
          blur-[140px]
        "
      />

      {/* =========================================
          VERY SUBTLE GRAIN
      ========================================== */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.025]
          mix-blend-screen
          bg-[radial-gradient(
            circle_at_center,
            white_1px,
            transparent_1px
          )]
          [background-size:24px_24px]
        "
      />
    </div>
  );
};

export default DestinationBackground;