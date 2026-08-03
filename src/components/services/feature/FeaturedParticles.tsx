import { useMemo } from "react";

const FeaturedParticles = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 6,
        duration: 5 + Math.random() * 4,
        size: 4 + Math.random() * 5,
      })),
    []
  );

  return (
    <>
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="absolute rounded-full bg-white/40"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: particle.size,
            height: particle.size,
            animation: `floatParticle ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
          }}
        />
      ))}
    </>
  );
};

export default FeaturedParticles;