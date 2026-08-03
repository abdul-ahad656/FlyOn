const CTABackground = () => {
  return (
    <>
      {/* Left Glow */}

      <div
        className="
          absolute
          -left-32
          top-0
          h-[320px]
          w-[320px]
          rounded-full
          bg-sky-300/20
          blur-[140px]
        "
      />

      {/* Right Glow */}

      <div
        className="
          absolute
          -right-24
          bottom-0
          h-[280px]
          w-[280px]
          rounded-full
          bg-primary/15
          blur-[120px]
        "
      />

      {/* Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
        "
        style={{
          backgroundImage: `
            linear-gradient(to right,#0f172a 1px,transparent 1px),
            linear-gradient(to bottom,#0f172a 1px,transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />
    </>
  );
};

export default CTABackground;