const Atmosphere = () => {
  return (
    <>
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-b
        from-sky-100/30
        via-transparent
        to-transparent
        "
      />

      <div
        className="
        absolute
        left-0
        right-0
        bottom-0
        h-72
        bg-gradient-to-t
        from-sky-200/30
        to-transparent
        "
      />

      <div
        className="
        absolute
        right-[18%]
        top-[35%]
        h-[420px]
        w-[420px]
        rounded-full
        bg-white/20
        blur-[120px]
        "
      />
    </>
  );
};

export default Atmosphere;