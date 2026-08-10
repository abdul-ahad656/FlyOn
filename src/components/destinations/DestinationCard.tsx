import { useRef } from "react";

import type { DestinationCardData } from "./types";

import DestinationCardImage from "./DestinationCardImage";
import DestinationCardContent from "./DestinationCardContent";

import useDestinationCard from "../../hooks/useDestinationCard";

interface Props {
  destination: DestinationCardData;

  variant: "featured" | "side" | "bottom";
}

const DestinationCard = ({
  destination,
  variant,
}: Props) => {
  // =========================================
  // Refs
  // =========================================

  const cardRef =
    useRef<HTMLDivElement>(null);

  const imageRef =
    useRef<HTMLDivElement>(null);

  const glowRef =
    useRef<HTMLDivElement>(null);

  const spotlightRef =
    useRef<HTMLDivElement>(null);

  const overlayRef =
    useRef<HTMLDivElement>(null);

  const sweepRef =
    useRef<HTMLDivElement>(null);

  const badgeRef =
    useRef<HTMLDivElement>(null);

  const contentRef =
    useRef<HTMLDivElement>(null);

  const titleRef =
    useRef<HTMLHeadingElement>(null);

  const buttonRef =
    useRef<HTMLDivElement>(null);

  // =========================================
  // Animation
  // =========================================

  useDestinationCard({
    cardRef,
    imageRef,
    glowRef,
    spotlightRef,
    overlayRef,
    sweepRef,
    badgeRef,
    contentRef,
    titleRef,
    buttonRef,
  });

  // =========================================
  // Variant Configuration
  // =========================================

  const variantClasses = {
    featured: `
      min-h-[640px]
      lg:min-h-[680px]
    `,

    side: `
      min-h-[308px]
      lg:min-h-[327px]
    `,

    bottom: `
      min-h-[430px]
      lg:min-h-[460px]
    `,
  };

  // =========================================
  // Render
  // =========================================

  return (
    <article
      ref={cardRef}
      data-variant={variant}
      className={`
        group
        relative
        overflow-hidden

        rounded-[34px]

        border
        border-white/60

        bg-white

        shadow-[0_25px_70px_rgba(15,23,42,.08)]

        transition-shadow
        duration-500

        will-change-transform

        [transform-style:preserve-3d]

        ${variantClasses[variant]}
      `}
    >
      {/* =====================================
          IMAGE
      ===================================== */}

      <DestinationCardImage
        destination={destination}
        variant={variant}
        imageRef={imageRef}
        glowRef={glowRef}
        spotlightRef={spotlightRef}
        overlayRef={overlayRef}
        sweepRef={sweepRef}
        badgeRef={badgeRef}
      />

      {/* =====================================
          CONTENT
      ===================================== */}

      <DestinationCardContent
        destination={destination}
        variant={variant}
        contentRef={contentRef}
        titleRef={titleRef}
        buttonRef={buttonRef}
      />
    </article>
  );
};

export default DestinationCard;