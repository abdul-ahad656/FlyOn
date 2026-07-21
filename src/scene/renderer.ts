import gsap from "gsap";

export const createRenderer = () => {
  return {
    planeX: gsap.quickSetter(".plane", "x", "px"),
    planeY: gsap.quickSetter(".plane", "y", "px"),
    planeRotation: gsap.quickSetter(".plane", "rotation"),

    shadowX: gsap.quickSetter(".plane-shadow", "x", "px"),
    shadowY: gsap.quickSetter(".plane-shadow", "y", "px"),

    glowX: gsap.quickSetter(".hero-glow", "x", "px"),
    glowY: gsap.quickSetter(".hero-glow", "y", "px"),
  };
};