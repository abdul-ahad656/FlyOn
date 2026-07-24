import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import { useFlight } from "../../../context/FlightContext";
import FlyonLogo from "./FlyonLogo";

/**
 * Wraps FlyonLogo and registers it with FlightContext.
 * Hidden until FlightDirector triggers the landing reveal tween.
 */
const LogoReveal = () => {
  const { setLogoEl } = useFlight();
  const logoRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = logoRef.current;
    if (!el) return;

    setLogoEl(el);

    gsap.set(el, {
      opacity: 0,
      y: 20,
    });

    return () => {
      setLogoEl(null);
      gsap.killTweensOf(el);
    };
  }, [setLogoEl]);

  return (
    <div className="logo-reveal">
      <FlyonLogo ref={logoRef} />
    </div>
  );
};

export default LogoReveal;
