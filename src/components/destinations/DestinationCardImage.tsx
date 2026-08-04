import type { DestinationCardData } from "./types";

interface Props {
  destination: DestinationCardData;

  imageRef: React.RefObject<HTMLDivElement | null>;

  glowRef: React.RefObject<HTMLDivElement | null>;
}

const DestinationCardImage = ({
  destination,
  imageRef,
  glowRef,
}: Props) => {
  return (
    <div
      className="
        relative
        h-72
        overflow-hidden
      "
    >
      {/* Glow */}

      <div
        ref={glowRef}
        className="
          absolute
          left-1/2
          top-1/2
          z-10
          h-56
          w-56
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-primary/20
          blur-[90px]
          will-change-transform
        "
      />

      {/* Image */}

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
          src={destination.image}
          alt={destination.title}
          draggable={false}
          className="
            h-full
            w-full
            object-cover
            select-none
            pointer-events-none
          "
        />

        {/* Luxury Gradient */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-slate-950/80
            via-slate-900/15
            to-transparent
          "
        />

        {/* Noise Texture */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
            mix-blend-overlay
            bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)]
            [background-size:22px_22px]
          "
        />

        {/* Light Sweep */}

        <div
          className="
            absolute
            inset-y-0
            -left-1/2
            w-32
            rotate-12
            bg-gradient-to-r
            from-transparent
            via-white/35
            to-transparent
            blur-xl
            transition-transform
            duration-[1800ms]
            ease-out
            group-hover:translate-x-[420px]
          "
        />

        {/* Featured Badge */}

        <div
          className="
            absolute
            left-5
            top-5
            rounded-full
            border
            border-white/20
            bg-white/10
            px-4
            py-2
            backdrop-blur-xl
          "
        >
          <span
            className="
              text-xs
              uppercase
              tracking-[2px]
              text-white
            "
          >
            Luxury Escape
          </span>
        </div>

        {/* Bottom Destination Info */}

        <div
          className="
            absolute
            bottom-5
            left-5
            right-5
            flex
            items-end
            justify-between
          "
        >
          <div>
            <h3
              className="
                text-2xl
                font-bold
                text-white
              "
            >
              {destination.title}
            </h3>

            <p className="text-white/75">
              {destination.country}
            </p>
          </div>

          <div
            className="
              rounded-full
              bg-white/15
              px-4
              py-2
              backdrop-blur-xl
            "
          >
            <span
              className="
                text-sm
                font-medium
                text-white
              "
            >
              {destination.duration}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCardImage;