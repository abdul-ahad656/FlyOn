// import { useRef } from "react";

// import type { DestinationCardData } from "./types";

// import DestinationCardImage from "./DestinationCardImage";
// import DestinationCardContent from "./DestinationCardContent";

// import useDestinationCard from "../../hooks/useDestinationCard";

// interface Props {
//   destination: DestinationCardData;
// }

// const DestinationCard = ({
//   destination,
// }: Props) => {
//   const cardRef = useRef<HTMLDivElement>(null);

//   const imageRef = useRef<HTMLDivElement>(null);

//   const glowRef = useRef<HTMLDivElement>(null);

//   const spotlightRef = useRef<HTMLDivElement>(null);

//   const overlayRef = useRef<HTMLDivElement>(null);

//   const sweepRef = useRef<HTMLDivElement>(null);

//   const badgeRef = useRef<HTMLDivElement>(null);

//   const contentRef = useRef<HTMLDivElement>(null);

//   const titleRef = useRef<HTMLHeadingElement>(null);

//   const buttonRef = useRef<HTMLDivElement>(null);

//   useDestinationCard({
//     cardRef,
//     imageRef,
//     glowRef,
//     spotlightRef,
//     overlayRef,
//     sweepRef,
//     badgeRef,
//     contentRef,
//     titleRef,
//     buttonRef,
//   });

//   return (
//     <article
//       ref={cardRef}
//       className="
//         group
//         relative
//         overflow-hidden
//         rounded-[32px]
//         border
//         border-white/60
//         bg-white
//         shadow-[0_25px_70px_rgba(15,23,42,.08)]
//         transition-all
//         duration-500
//         will-change-transform
//         [transform-style:preserve-3d]
//       "
//     >
//       <DestinationCardImage
//         destination={destination}
//         imageRef={imageRef}
//         glowRef={glowRef}
//         spotlightRef={spotlightRef}
//         overlayRef={overlayRef}
//         sweepRef={sweepRef}
//         badgeRef={badgeRef}
//       />

//       <DestinationCardContent
//         destination={destination}
//         contentRef={contentRef}
//         titleRef={titleRef}
//         buttonRef={buttonRef}
//       />
//     </article>
//   );
// };

// export default DestinationCard;

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
  const cardRef = useRef<HTMLDivElement>(null);

  const imageRef = useRef<HTMLDivElement>(null);

  const glowRef = useRef<HTMLDivElement>(null);

  const spotlightRef = useRef<HTMLDivElement>(null);

  const overlayRef = useRef<HTMLDivElement>(null);

  const sweepRef = useRef<HTMLDivElement>(null);

  const badgeRef = useRef<HTMLDivElement>(null);

  const contentRef = useRef<HTMLDivElement>(null);

  const titleRef = useRef<HTMLHeadingElement>(null);

  const buttonRef = useRef<HTMLDivElement>(null);

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

  const height =
    variant === "featured"
      ? "min-h-[640px]"
      : variant === "side"
      ? "min-h-[308px]"
      : "min-h-[430px]";

  return (
    <article
      ref={cardRef}
      className={`
        group
        relative
        overflow-hidden
        rounded-[34px]
        border
        border-white/60
        bg-white
        shadow-[0_25px_70px_rgba(15,23,42,.08)]
        transition-all
        duration-500
        will-change-transform
        [transform-style:preserve-3d]
        ${height}
      `}
    >
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