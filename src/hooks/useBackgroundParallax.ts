import { useEffect } from "react";
import gsap from "gsap";

export interface ParallaxLayer {
  element: HTMLDivElement | null;
  depth: number;
}

interface Props {
  layers: React.MutableRefObject<ParallaxLayer[]>;
}

const useBackgroundParallax = ({
  layers,
}: Props) => {
  useEffect(() => {
    const mouse = {
      x: 0,
      y: 0,
    };

    const smooth = {
      x: 0,
      y: 0,
    };

    const handleMove = (e: MouseEvent) => {
      mouse.x =
        (e.clientX - window.innerWidth / 2) /
        window.innerWidth;

      mouse.y =
        (e.clientY - window.innerHeight / 2) /
        window.innerHeight;
    };

    window.addEventListener("mousemove", handleMove);

    const tick = () => {
      smooth.x +=
        (mouse.x - smooth.x) * 0.08;

      smooth.y +=
        (mouse.y - smooth.y) * 0.08;

      layers.current.forEach((layer) => {
        if (!layer.element) return;

        gsap.set(layer.element, {
          x: smooth.x * layer.depth,
          y: smooth.y * layer.depth,
          force3D: true,
        });
      });
    };

    gsap.ticker.add(tick);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMove
      );

      gsap.ticker.remove(tick);
    };
  }, [layers]);
};

export default useBackgroundParallax;