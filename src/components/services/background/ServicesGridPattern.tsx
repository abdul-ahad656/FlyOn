const ServicesGridPattern = () => {
  return (
    <div
      className="
        absolute
        inset-0
        opacity-[0.045]
        pointer-events-none
      "
      style={{
        backgroundImage: `
          linear-gradient(to right, #0f172a 1px, transparent 1px),
          linear-gradient(to bottom, #0f172a 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
      }}
    />
  );
};

export default ServicesGridPattern;