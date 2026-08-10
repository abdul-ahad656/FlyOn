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
        -z-10
        overflow-hidden
      "
    >
      {/* Base atmosphere */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-slate-50
          via-white
          to-slate-50
        "
      />

      {/* Main ambient glow */}

      <DestinationGlow glowRef={glowRef} />

      {/* Floating particles */}

      <DestinationParticles />

      {/* Top cinematic fade */}

      <div
        className="
          absolute
          inset-x-0
          top-0
          h-48
          bg-gradient-to-b
          from-white
          to-transparent
        "
      />

      {/* Bottom cinematic fade */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-48
          bg-gradient-to-t
          from-slate-50
          to-transparent
        "
      />

      {/* Very subtle vignette */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_30%,rgba(15,23,42,0.035)_100%)]
        "
      />
    </div>
  );
};

export default DestinationBackground;