const particles = Array.from(
  { length: 18 },
  (_, i) => ({
    id: i,
    size: 3 + Math.random() * 6,
    left: Math.random() * 100,
    top: Math.random() * 100,
    opacity: 0.04 + Math.random() * 0.08,
  })
);

const DestinationParticles = () => {
  return (
    <>
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="
            absolute
            rounded-full
            bg-white
            blur-sm
            pointer-events-none
          "
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            opacity: particle.opacity,
          }}
        />
      ))}
    </>
  );
};

export default DestinationParticles;