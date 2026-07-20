import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HeroBackground = () => {
  const gradientRef = useRef<HTMLDivElement>(null);
  const blobOneRef = useRef<HTMLDivElement>(null);
  const blobTwoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animated background gradient
    gsap.to(gradientRef.current, {
      backgroundPosition: "200% 50%",
      duration: 18,
      ease: "none",
      repeat: -1,
      yoyo: true,
    });

    // Floating Blob 1
    gsap.to(blobOneRef.current, {
      x: 80,
      y: 50,
      scale: 1.1,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Floating Blob 2
    gsap.to(blobTwoRef.current, {
      x: -70,
      y: -40,
      scale: 0.9,
      duration: 12,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <>
      {/* Main Animated Gradient */}
      <div
        ref={gradientRef}
        className="
          absolute
          inset-0
          -z-50
          bg-[length:250%_250%]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              135deg,
              #F8F9FA 0%,
              #EEF8FB 30%,
              #D9EEF5 55%,
              #F8F9FA 100%
            )
          `,
        }}
      />

      {/* Radial Light */}
      <div
        className="
          absolute
          left-1/2
          top-1/3
          -z-40
          h-[700px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-[#005D78]/10
          blur-[140px]
        "
      />

      {/* Blob One */}
      <div
        ref={blobOneRef}
        className="
          absolute
          left-[-150px]
          top-[120px]
          -z-30
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#0B6A88]/20
          blur-[120px]
        "
      />

      {/* Blob Two */}
      <div
        ref={blobTwoRef}
        className="
          absolute
          bottom-[-120px]
          right-[-120px]
          -z-30
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#D8B56D]/20
          blur-[130px]
        "
      />

      {/* Top Fade */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          -z-20
          h-40
          bg-gradient-to-b
          from-white/40
          to-transparent
        "
      />

      {/* Bottom Fade */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          -z-20
          h-60
          bg-gradient-to-t
          from-white
          to-transparent
        "
      />

      {/* Noise Overlay */}
      <div
        className="
          absolute
          inset-0
          -z-10
          opacity-[0.04]
          mix-blend-overlay
        "
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,0,0,.3) 1px, transparent 0)",
          backgroundSize: "18px 18px",
        }}
      />
    </>
  );
};

export default HeroBackground;