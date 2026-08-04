import { useRef } from "react";

import FeaturedImage from "./FeaturedImage";
import FeaturedOverlay from "./FeaturedOverlay";

import useFeaturedDestination from "../../../hooks/useFeaturedDestination";

const FeaturedDestination = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const imageRef = useRef<HTMLDivElement>(null);

  const overlayRef = useRef<HTMLDivElement>(null);

  const headingRef = useRef<HTMLHeadingElement>(null);

  const descriptionRef = useRef<HTMLParagraphElement>(null);

  const statsRef = useRef<HTMLDivElement>(null);

  const buttonRef = useRef<HTMLDivElement>(null);

  const glowRef = useRef<HTMLDivElement>(null);

  const sweepRef = useRef<HTMLDivElement>(null);

  const cardRef = useRef<HTMLDivElement>(null);

  useFeaturedDestination({
    sectionRef,
    imageRef,
    overlayRef,
    headingRef,
    descriptionRef,
    statsRef,
    buttonRef,
    glowRef,
    sweepRef,
    cardRef
  });

  return (
    <section>
      <div
        ref={cardRef}
        className="
            relative
            overflow-hidden
            rounded-[42px]
            will-change-transform
            [transform-style:preserve-3d]
        "
      >
    
      <FeaturedImage
        imageRef={imageRef}
        glowRef={glowRef}
        sweepRef={sweepRef}
      />

      <FeaturedOverlay
        overlayRef={overlayRef}
        headingRef={headingRef}
        descriptionRef={descriptionRef}
        statsRef={statsRef}
        buttonRef={buttonRef}
      />
      
      
      </div>
    </section>
  );
};

export default FeaturedDestination;