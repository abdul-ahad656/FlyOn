import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      gsap.to(glowRef.current, {
        x: e.clientX - 180,
        y: e.clientY - 180,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-0
        h-[360px]
        w-[360px]
        rounded-full
        bg-primary/10
        blur-[140px]
      "
    />
  );
};

export default CursorGlow;