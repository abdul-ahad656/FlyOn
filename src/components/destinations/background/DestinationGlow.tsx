interface Props {
  glowRef: React.RefObject<HTMLDivElement | null>;
}

const DestinationGlow = ({
  glowRef,
}: Props) => {
  return (
    <>
      {/* Main Glow */}

      <div
        ref={glowRef}
        className="
          absolute
          left-1/2
          top-1/2
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-primary/10
          blur-[180px]
          will-change-transform
        "
      />

      {/* Left Glow */}

      <div
        className="
          absolute
          left-[10%]
          top-[20%]
          h-[260px]
          w-[260px]
          rounded-full
          bg-sky-300/10
          blur-[120px]
        "
      />

      {/* Right Glow */}

      <div
        className="
          absolute
          right-[12%]
          bottom-[15%]
          h-[220px]
          w-[220px]
          rounded-full
          bg-cyan-300/10
          blur-[110px]
        "
      />
    </>
  );
};

export default DestinationGlow;