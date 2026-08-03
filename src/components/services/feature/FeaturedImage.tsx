import FeaturedGlow from "./FeaturedGlow";
import FeaturedParticles from "./FeaturedParticles";

import jetImage from "../../../assets/services/private-jet.jpeg";

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
    <div className="relative overflow-hidden min-h-[680px]">

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
          src={jetImage}
          alt="Private Jet"
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
            from-slate-950/35
            via-transparent
            to-transparent
          "
        />

        {/* Light Sweep */}

        <div
          ref={sweepRef}
          className="
            absolute
            inset-y-0
            -left-1/2
            w-40
            rotate-12
            bg-gradient-to-r
            from-transparent
            via-white/30
            to-transparent
            blur-xl
          "
        />

        {/* Glass Badge */}

        <div
          className="
            absolute
            bottom-8
            left-8
            rounded-full
            border
            border-white/20
            bg-white/10
            px-5
            py-3
            backdrop-blur-xl
          "
        >
          <p className="text-sm uppercase tracking-[3px] text-white">
            Featured Service
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedImage;