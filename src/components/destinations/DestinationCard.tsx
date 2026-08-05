import { useRef } from "react";

import type { DestinationCardData } from "./types";

import DestinationCardImage from "./DestinationCardImage";
import DestinationCardContent from "./DestinationCardContent";

import useDestinationCard from "../../hooks/useDestinationCard";

interface Props {
  destination: DestinationCardData;
}

const DestinationCard = ({
  destination,
}: Props) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const imageRef = useRef<HTMLDivElement>(null);

  const glowRef = useRef<HTMLDivElement>(null);

  const spotlightRef = useRef<HTMLDivElement>(null);

  const contentRef = useRef<HTMLDivElement>(null);

  const titleRef = useRef<HTMLHeadingElement>(null);

  const buttonRef = useRef<HTMLDivElement>(null);

  useDestinationCard({
    cardRef,
    imageRef,
    glowRef,
    spotlightRef,
    contentRef,
    titleRef,
    buttonRef,
  });

  return (
    <article
      ref={cardRef}
      className="
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/60
        bg-white
        shadow-[0_25px_70px_rgba(15,23,42,.08)]
        transition-all
        duration-500
        will-change-transform
        [transform-style:preserve-3d]
      "
    >
      <DestinationCardImage
        destination={destination}
        imageRef={imageRef}
        glowRef={glowRef}
        spotlightRef={spotlightRef}
      />

      <DestinationCardContent
        destination={destination}
        contentRef={contentRef}
        titleRef={titleRef}
        buttonRef={buttonRef}
      />
    </article>
  );
};

export default DestinationCard;