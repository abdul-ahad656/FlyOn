import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import Plane from "../../assets/illustrations/plane.svg";

const FloatingPlane = () => {
  const planeRef = useRef<HTMLImageElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const plane = planeRef.current;
    const shadow = shadowRef.current;

    if (!plane || !shadow) return;

    const tl = gsap.timeline();

    // Entrance Animation
    tl.fromTo(
      plane,
      {
        x: -350,
        y: 80,
        rotate: -15,
        scale: 0.9,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        opacity: 1,
        duration: 2.2,
        ease: "power4.out",
      }
    );

    tl.fromTo(
      shadow,
      {
        opacity: 0,
        scale: 0.6,
      },
      {
        opacity: 0.18,
        scale: 1,
        duration: 2,
      },
      "<"
    );

    // Floating Animation
    gsap.to(plane, {
      y: "-=18",
      rotate: 3,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Gentle Glide
    gsap.to(plane, {
      x: "+=25",
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Shadow Animation
    gsap.to(shadow, {
      scale: 0.88,
      opacity: 0.1,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Mouse Parallax
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / 35;
      const y = (e.clientY - window.innerHeight / 2) / 35;

      gsap.to(plane, {
        x,
        y,
        duration: 1.2,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      tl.kill();
    };
  }, []);

  return (
    <div className="relative flex h-full w-full items-center justify-center">

      {/* Glow */}

      <div className="absolute h-[320px] w-[320px] rounded-full bg-primary/10 blur-[120px]" />

      {/* Shadow */}

      <div
        ref={shadowRef}
        className="absolute bottom-24 h-10 w-72 rounded-full bg-black/10 blur-3xl"
      />

      {/* Plane */}

      <img
        ref={planeRef}
        src={Plane}
        alt="Plane"
        draggable={false}
        className="relative z-20 w-[620px] max-w-full select-none"
      />
    </div>
  );
};

export default FloatingPlane;