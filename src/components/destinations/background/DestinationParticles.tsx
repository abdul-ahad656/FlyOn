const particles = Array.from(
  { length: 28 },
  (_, index) => {
    const x =
      ((index * 37) % 100) + 0.5;

    const y =
      ((index * 61) % 100) + 0.5;

    const size =
      2 + ((index * 7) % 4);

    const opacity =
      0.035 + ((index * 13) % 8) / 100;

    return {
      id: index,
      x,
      y,
      size,
      opacity,
    };
  }
);

const DestinationParticles = () => {
  return (
    <div
      className="
        absolute
        inset-0
        overflow-hidden
      "
    >
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="
            absolute
            rounded-full
            bg-slate-400
            blur-[1px]
          "
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default DestinationParticles;