const ServicesNoise = () => {
  return (
    <div
      className="
        absolute
        inset-0
        opacity-[0.025]
        mix-blend-overlay
        pointer-events-none
      "
      style={{
        backgroundImage:
          "url('/noise.png')",
        backgroundRepeat: "repeat",
      }}
    />
  );
};

export default ServicesNoise;