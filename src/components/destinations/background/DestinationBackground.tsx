const DestinationBackground = ({
  backgroundRef,
  glowRef,
}: Props) => {
  return (
    <div
      ref={backgroundRef}
      className="absolute inset-0 overflow-hidden"
    >
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
          bg-primary/10
          blur-[180px]
        "
      />
    </div>
  );
};

export default DestinationBackground;