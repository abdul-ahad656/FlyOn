interface Props {
  glowRef: React.RefObject<HTMLDivElement | null>;
}

const DestinationGlow = ({ glowRef }: Props) => {
  return (
    <>
      {/* Main atmospheric glow */}

      <div
        ref={glowRef}
        className="
          absolute
          left-1/2
          top-[38%]
          h-[650px]
          w-[650px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-sky-400/[0.07]
          blur-[180px]
          will-change-transform
        "
      />

      {/* Upper-left glow */}

      <div
        className="
          absolute
          left-[-8%]
          top-[18%]
          h-[320px]
          w-[320px]
          rounded-full
          bg-blue-500/[0.06]
          blur-[140px]
        "
      />

      {/* Right atmospheric glow */}

      <div
        className="
          absolute
          right-[-5%]
          top-[38%]
          h-[360px]
          w-[360px]
          rounded-full
          bg-cyan-400/[0.055]
          blur-[150px]
        "
      />

      {/* Lower glow */}

      <div
        className="
          absolute
          bottom-[-5%]
          left-[30%]
          h-[300px]
          w-[300px]
          rounded-full
          bg-indigo-500/[0.045]
          blur-[150px]
        "
      />

      {/* Tiny light source */}

      <div
        className="
          absolute
          left-[50%]
          top-[22%]
          h-2
          w-2
          -translate-x-1/2
          rounded-full
          bg-sky-300/30
          blur-[2px]
        "
      />
    </>
  );
};

export default DestinationGlow;