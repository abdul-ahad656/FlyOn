interface Props {
  glowRef: React.RefObject<HTMLDivElement | null>;
}

const FeaturedGlow = ({ glowRef }: Props) => {
  return (
    <>
      {/* Main Glow */}

      <div
        ref={glowRef}
        className="
          absolute
          left-1/2
          top-1/2
          h-[650px]
          w-[650px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-sky-400/20
          blur-[180px]
          will-change-transform
        "
      />

      {/* Secondary */}

      <div
        className="
          absolute
          left-[20%]
          top-[25%]
          h-[260px]
          w-[260px]
          rounded-full
          bg-cyan-300/15
          blur-[120px]
        "
      />

      {/* Accent */}

      <div
        className="
          absolute
          right-[18%]
          bottom-[20%]
          h-[180px]
          w-[180px]
          rounded-full
          bg-white/10
          blur-[90px]
        "
      />
    </>
  );
};

export default FeaturedGlow;