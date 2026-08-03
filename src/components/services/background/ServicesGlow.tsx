interface Props {
  backgroundRef?: React.RefObject<HTMLDivElement | null>;
  glowRef?: React.RefObject<HTMLDivElement | null>;
}

const ServicesGlow = ({
  backgroundRef,
  glowRef,
}: Props) => {
  return (
    <div
      ref={backgroundRef}
      className="
        absolute
        inset-0
        overflow-hidden
        pointer-events-none
      "
    >
      {/* Main */}

      <div
        ref={glowRef}
        className="
          absolute
          left-[-180px]
          top-[120px]
          h-[520px]
          w-[520px]
          rounded-full
          bg-sky-300/20
          blur-[180px]
          will-change-transform
        "
      />

      {/* Right */}

      <div
        className="
          absolute
          right-[-220px]
          top-[240px]
          h-[460px]
          w-[460px]
          rounded-full
          bg-primary/15
          blur-[170px]
        "
      />

      {/* Bottom */}

      <div
        className="
          absolute
          bottom-[-180px]
          left-1/2
          h-[420px]
          w-[420px]
          -translate-x-1/2
          rounded-full
          bg-cyan-300/10
          blur-[160px]
        "
      />
    </div>
  );
};

export default ServicesGlow;