import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

interface Props {
  dividerRef: React.RefObject<HTMLDivElement | null>;
}

const ServicesDivider = ({
  dividerRef,
}: Props) => {
  const lineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!lineRef.current) return;

    gsap.set(lineRef.current, {
      scaleX: 0,
      transformOrigin: "center center",
    });

    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 2,
    });

    tl.to(lineRef.current, {
      scaleX: 1,
      duration: 1.4,
      ease: "power3.out",
    });

    tl.to(
      lineRef.current,
      {
        opacity: .55,
        duration: 1.2,
        ease: "sine.inOut",
      },
      0
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={dividerRef}
      className="
        relative
        my-24
        flex
        justify-center
      "
    >
      <div
        ref={lineRef}
        className="
          relative
          h-px
          w-full
          max-w-5xl
          overflow-hidden
          rounded-full
        "
      >
        {/* Main Gradient */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-transparent
            via-primary
            to-transparent
          "
        />

        {/* Glow */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-transparent
            via-sky-300/70
            to-transparent
            blur-lg
          "
        />
      </div>

      {/* Center Orb */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-4
          w-4
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-primary
          shadow-[0_0_30px_rgba(14,165,233,.8)]
        "
      />
    </div>
  );
};

export default ServicesDivider;