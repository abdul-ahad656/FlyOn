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
          top-[35%]
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-primary/[0.08]
          blur-[180px]
          will-change-transform
        "
      />

      {/* Upper left light */}

      <div
        className="
          absolute
          left-[-5%]
          top-[12%]
          h-[320px]
          w-[320px]
          rounded-full
          bg-sky-300/[0.08]
          blur-[130px]
        "
      />

      {/* Right light */}

      <div
        className="
          absolute
          right-[-5%]
          top-[38%]
          h-[360px]
          w-[360px]
          rounded-full
          bg-cyan-300/[0.07]
          blur-[140px]
        "
      />

      {/* Lower blue atmosphere */}

      <div
        className="
          absolute
          bottom-[8%]
          left-1/2
          h-[280px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-blue-300/[0.05]
          blur-[150px]
        "
      />
    </>
  );
};

export default DestinationGlow;