import FeaturedGlow from "./FeaturedGlow";
import FeaturedParticles from "./FeaturedParticles";

import featuredImage from "../../../assets/destinations/maldives.jpeg";

interface Props {
  imageRef: React.RefObject<HTMLDivElement | null>;
  glowRef: React.RefObject<HTMLDivElement | null>;
  sweepRef: React.RefObject<HTMLDivElement | null>;
}

const FeaturedImage = ({
  imageRef,
  glowRef,
  sweepRef,
}: Props) => {
  return (
    <div
      className="
        relative
        overflow-hidden
        h-[720px]
      "
    >
      <FeaturedGlow glowRef={glowRef} />

      <FeaturedParticles />

      <div
        ref={imageRef}
        className="
          relative
          h-full
          overflow-hidden
          will-change-transform
        "
      >
        <img
          src={featuredImage}
          alt="Maldives"
          draggable={false}
          className="
            h-full
            w-full
            object-cover
            select-none
            pointer-events-none
          "
        />

        {/* Dark Gradient */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-slate-950/75
            via-slate-900/20
            to-transparent
          "
        />

        {/* Noise */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
            mix-blend-overlay
            bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)]
            [background-size:24px_24px]
          "
        />

        {/* Light Sweep */}

        <div
          ref={sweepRef}
          className="
            absolute
            inset-y-0
            -left-1/2
            w-44
            rotate-12
            bg-gradient-to-r
            from-transparent
            via-white/35
            to-transparent
            blur-xl
            will-change-transform
          "
        />

        {/* Glass Badge */}

        <div
          className="
            absolute
            left-10
            bottom-10
            rounded-3xl
            border
            border-white/20
            bg-white/10
            px-6
            py-5
            backdrop-blur-2xl
          "
        >
          <p
            className="
              text-xs
              uppercase
              tracking-[3px]
              text-white/70
            "
          >
            Featured Destination
          </p>

          <h4
            className="
              mt-2
              text-2xl
              font-bold
              text-white
            "
          >
            Maldives
          </h4>

          <p className="mt-1 text-white/80">
            Luxury Island Escape
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedImage;