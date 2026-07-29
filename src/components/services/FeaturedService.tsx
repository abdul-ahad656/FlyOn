import { useRef } from "react";

import FeaturedImage from "./FeaturedImage";
import FeaturedContent from "./FeaturedContent";
import useFeaturedService from "../../hooks/useFeaturedService";

const FeaturedService = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const sweepRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useFeaturedService({
  sectionRef,
  imageRef,
  contentRef,
  headingRef,
  descriptionRef,
  featuresRef,
  statsRef,
  buttonRef,
  glowRef,
  sweepRef,
});
   return (
    <section
      ref={sectionRef}
      className="
        relative
        mt-24
        overflow-hidden
        rounded-[42px]
        border
        border-white/60
        bg-white/80
        shadow-[0_50px_120px_rgba(15,23,42,.10)]
        backdrop-blur-xl
      "
    >
      <div className="grid lg:grid-cols-2">
        <FeaturedImage
          imageRef={imageRef}
          glowRef={glowRef}
          sweepRef={sweepRef}
        />

        <FeaturedContent
          contentRef={contentRef}
          headingRef={headingRef}
          descriptionRef={descriptionRef}
          featuresRef={featuresRef}
          statsRef={statsRef}
          buttonRef={buttonRef}
        />
      </div>
    </section>
  );
};

export default FeaturedService;