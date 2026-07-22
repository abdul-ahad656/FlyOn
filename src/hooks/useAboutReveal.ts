import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useAboutReveal = (
  container: React.RefObject<HTMLDivElement | null>
) => {
  useLayoutEffect(() => {
    if (!container.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
          once: true,
        },
        defaults: {
          ease: "power3.out",
          duration: 0.8,
        },
      });

      tl.from(".about-badge", {
        opacity: 0,
        y: 30,
      })
        .from(
          ".about-heading",
          {
            opacity: 0,
            y: 45,
          },
          "-=0.45"
        )
        .from(
          ".about-description",
          {
            opacity: 0,
            y: 30,
          },
          "-=0.45"
        )
        .from(
          ".feature-card",
          {
            opacity: 0,
            y: 40,
            stagger: 0.12,
          },
          "-=0.35"
        )
        .from(
          ".about-button",
          {
            opacity: 0,
            y: 25,
          },
          "-=0.25"
        )
        .from(
          ".about-image",
          {
            opacity: 0,
            scale: 0.92,
          },
          "-=0.35"
        );
    }, container);

    return () => ctx.revert();
  }, [container]);
};

export default useAboutReveal;