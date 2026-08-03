const ServicesGradient = () => {
  return (
    <>
      {/* Base Gradient */}

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

      {/* Top Glow */}

      <div
        className="
          absolute
          inset-x-0
          top-0
          h-[500px]
          bg-gradient-to-b
          from-sky-100/60
          via-transparent
          to-transparent
        "
      />

      {/* Bottom Glow */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-[420px]
          bg-gradient-to-t
          from-primary/5
          via-transparent
          to-transparent
        "
      />
    </>
  );
};

export default ServicesGradient;