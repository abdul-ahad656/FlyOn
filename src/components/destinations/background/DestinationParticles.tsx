interface Particle {
  id: number;
  size: number;
  left: number;
  top: number;
  opacity: number;
  blur: number;
}

const particles: Particle[] = Array.from(
  { length: 32 },
  (_, index) => {
    const seed = index * 37;

    return {
      id: index,

      size: 2 + (seed % 5),

      left: (seed * 17) % 100,

      top: (seed * 29) % 100,

      opacity: 0.035 + ((seed % 8) / 100),

      blur: index % 4 === 0 ? 2 : 1,
    };
  }
);

const DestinationParticles = () => {
  return (
    <div
      className="
        absolute
        inset-0
        hidden
        sm:block
      "
      aria-hidden="true"
    >
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="
            absolute
            rounded-full
            bg-white
          "
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            opacity: particle.opacity,
            filter: `blur(${particle.blur}px)`,
          }}
        />
      ))}
    </div>
  );
};

export default DestinationParticles;