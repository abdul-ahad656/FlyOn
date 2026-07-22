import { useRef } from "react";

import FloatingInfoCard from "./FloatingInfoCard";
import DestinationTag from "./DestinationTag";

import luxuryImage from "../../assets/about/luxury-resort.jpeg";

import useAboutAnimation from "../../hooks/useAboutAnimation";

const AboutImage = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  const cardsRef = useRef<HTMLDivElement[]>([]);

  const tagsRef = useRef<HTMLDivElement[]>([]);

  useAboutAnimation({
    imageRef,
    cardsRef,
    tagsRef,
  });

  return (
    <div className="relative mx-auto w-full max-w-[620px]">
      {/* Main Image */}

      <div
        ref={imageRef}
        className="
          about-image
          relative
          overflow-hidden
          rounded-[36px]
          border
          border-white/60
          bg-white
          shadow-[0_40px_100px_rgba(15,23,42,.12)]
          will-change-transform
          [transform-style:preserve-3d]"
      >
        <img
          src={luxuryImage}
          alt="Luxury Resort"
          className="
            aspect-[4/5]
            h-full
            w-full
            object-cover
            select-none
            pointer-events-none
          "
          draggable={false}
        />

        {/* Gradient */}

        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />

        {/* Bottom Content */}

        <div className="absolute bottom-8 left-8">
          <p className="text-sm uppercase tracking-[3px] text-white/80">
            Featured Destination
          </p>

          <h3 className="mt-2 font-heading text-4xl font-bold text-white">
            Maldives
          </h3>
        </div>
      </div>

      {/* Floating Cards */}

      <div
        ref={(el) => {
          if (el) cardsRef.current[0] = el;
        }}
        className="absolute -left-12 top-10"
      >
        <FloatingInfoCard
          value="60+"
          label="Destinations"
        />
      </div>

      <div
        ref={(el) => {
          if (el) cardsRef.current[1] = el;
        }}
        className="absolute -bottom-8 right-0"
      >
        <FloatingInfoCard
          value="18K+"
          label="Happy Travelers"
        />
      </div>

      {/* Destination Tags */}

      <div
        ref={(el) => {
          if (el) tagsRef.current[0] = el;
        }}
        className="absolute -right-10 top-20"
      >
        <DestinationTag
          city="Dubai"
          country="UAE"
        />
      </div>

      <div
        ref={(el) => {
          if (el) tagsRef.current[1] = el;
        }}
        className="absolute -left-12 bottom-28"
      >
        <DestinationTag
          city="Kyoto"
          country="Japan"
        />
      </div>
    </div>
  );
};

export default AboutImage;