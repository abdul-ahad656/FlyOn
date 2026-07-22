import { useEffect } from "react";
import gsap from "gsap";

interface Props {
  imageRef: React.RefObject<HTMLDivElement | null>;
  cardsRef: React.MutableRefObject<HTMLDivElement[]>;
  tagsRef: React.MutableRefObject<HTMLDivElement[]>;
}

const useAboutAnimation = ({
  imageRef,
  cardsRef,
  tagsRef,
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

    //-----------------------------------------
    // Mouse
    //-----------------------------------------

    const handleMove = (e: MouseEvent) => {
      mouse.x =
        (e.clientX - window.innerWidth / 2) /
        window.innerWidth;

      mouse.y =
        (e.clientY - window.innerHeight / 2) /
        window.innerHeight;
    };

    window.addEventListener(
      "mousemove",
      handleMove
    );

    //-----------------------------------------
    // Floating Loop
    //-----------------------------------------

    let time = 0;

    const tick = () => {
      time += 0.015;

      smooth.x +=
        (mouse.x - smooth.x) * 0.08;

      smooth.y +=
        (mouse.y - smooth.y) * 0.08;

      //---------------------------------------
      // Main Image
      //---------------------------------------

      if (imageRef.current) {
        gsap.set(imageRef.current, {
          x: smooth.x * 25,
          y: smooth.y * 18,

          rotationY: smooth.x * 6,

          rotationX: -smooth.y * 6,

          transformPerspective: 1200,

          transformOrigin: "center center",
        });
      }

      //---------------------------------------
      // Floating Cards
      //---------------------------------------

      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        gsap.set(card, {
          y:
            Math.sin(time + i) * 10,

          x:
            Math.cos(time + i) * 4,
        });
      });

      //---------------------------------------
      // Destination Tags
      //---------------------------------------

      tagsRef.current.forEach((tag, i) => {
        if (!tag) return;

        gsap.set(tag, {
          y:
            Math.cos(time + i) * 12,

          x:
            Math.sin(time + i) * 5,
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
  }, []);
};

export default useAboutAnimation;