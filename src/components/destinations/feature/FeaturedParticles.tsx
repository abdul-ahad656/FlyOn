const particles = Array.from(
  { length: 12 },
  (_, i) => ({
    id: i,
    size: 4 + Math.random() * 8,
    left: Math.random() * 100,
    top: Math.random() * 100,
    opacity: 0.05 + Math.random() * 0.08,
  })
);

const FeaturedParticles = () => {
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

export default FeaturedParticles;