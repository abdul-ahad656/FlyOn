import { useLayoutEffect } from "react";
import gsap from "gsap";

interface Props {
  glowRef: React.RefObject<HTMLDivElement | null>;
}

const FeaturedGlow = ({ glowRef }: Props) => {
  useLayoutEffect(() => {
    if (!glowRef.current) return;

    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      defaults: {
        ease: "sine.inOut",
      },
    });

    tl.to(glowRef.current, {
      scale: 1.08,
      opacity: 0.75,
      duration: 4,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      {/* Primary Glow */}

      <div
        ref={glowRef}
        className="
          absolute
          -left-20
          top-10
          h-[360px]
          w-[360px]
          rounded-full
          bg-sky-300/20
          blur-[140px]
          pointer-events-none
          will-change-transform
        "
      />

      {/* Secondary */}

      <div
        className="
          absolute
          right-[-80px]
          bottom-[-40px]
          h-[260px]
          w-[260px]
          rounded-full
          bg-primary/15
          blur-[120px]
          pointer-events-none
        "
      />

      {/* Ambient */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[180px]
          w-[180px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-300/10
          blur-[90px]
          pointer-events-none
        "
      />
    </>
  );
};

export default FeaturedGlow;