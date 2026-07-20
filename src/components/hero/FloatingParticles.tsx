import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const FloatingParticles = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!particlesRef.current) return;

    const particles =
      particlesRef.current.querySelectorAll(".particle");

    particles.forEach((particle, index) => {
      gsap.to(particle, {
        y: -40 - index * 5,
        x: Math.random() * 30 - 15,
        opacity: 0.15,
        duration: 4 + Math.random() * 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.15,
      });

      gsap.to(particle, {
        scale: 1.3,
        duration: 2 + Math.random(),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <div
      ref={particlesRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {[...Array(18)].map((_, i) => (
        <span
          key={i}
          className="particle absolute rounded-full bg-primary/20"
          style={{
            width: `${4 + Math.random() * 6}px`,
            height: `${4 + Math.random() * 6}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;