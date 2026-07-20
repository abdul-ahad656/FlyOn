import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import Cloud1 from "../../assets/illustrations/cloud-1.svg";
import Cloud2 from "../../assets/illustrations/cloud-2.svg";
import Cloud3 from "../../assets/illustrations/cloud-3.svg";

const FloatingClouds = () => {
  const cloud1 = useRef<HTMLImageElement>(null);
  const cloud2 = useRef<HTMLImageElement>(null);
  const cloud3 = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.to(cloud1.current, {
        x: 80,
        y: -25,
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(cloud2.current, {
        x: -110,
        y: 18,
        duration: 24,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(cloud3.current, {
        x: 95,
        y: -15,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

    });

    return () => ctx.revert();

  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      <img
        ref={cloud1}
        src={Cloud1}
        alt=""
        className="
          absolute
          left-[6%]
          top-[14%]
          w-64
          opacity-70
          select-none
        "
      />

      <img
        ref={cloud2}
        src={Cloud2}
        alt=""
        className="
          absolute
          right-[8%]
          top-[12%]
          w-56
          opacity-60
          select-none
        "
      />

      <img
        ref={cloud3}
        src={Cloud3}
        alt=""
        className="
          absolute
          left-1/2
          top-[24%]
          w-44
          -translate-x-1/2
          opacity-40
          select-none
        "
      />

    </div>
  );
};

export default FloatingClouds;