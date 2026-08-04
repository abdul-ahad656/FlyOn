import { ArrowRight, Clock3, MapPin, Star } from "lucide-react";

import Button from "../../common/Button";
import Magnetic from "../../animations/Magnetic";

interface Props {
  overlayRef: React.RefObject<HTMLDivElement | null>;

  headingRef: React.RefObject<HTMLHeadingElement | null>;

  descriptionRef: React.RefObject<HTMLParagraphElement | null>;

  statsRef: React.RefObject<HTMLDivElement | null>;

  buttonRef: React.RefObject<HTMLDivElement | null>;
}

const FeaturedOverlay = ({
  overlayRef,
  headingRef,
  descriptionRef,
  statsRef,
  buttonRef,
}: Props) => {
  return (
    <div
      ref={overlayRef}
      className="
        absolute
        left-10
        bottom-10
        z-30
        max-w-[560px]
        rounded-[36px]
        border
        border-white/20
        bg-white/10
        p-10
        text-white
        shadow-[0_30px_80px_rgba(0,0,0,.18)]
        backdrop-blur-2xl
        will-change-transform
      "
    >
      {/* Badge */}

      <div
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-white/15
          bg-white/10
          px-4
          py-2
        "
      >
        <Star
          size={15}
          className="fill-yellow-400 text-yellow-400"
        />

        <span className="text-sm font-medium tracking-wide">
          Featured Destination
        </span>
      </div>

      {/* Heading */}

      <h2
        ref={headingRef}
        className="
          mt-7
          font-heading
          text-5xl
          font-bold
          leading-tight
        "
      >
        Maldives
      </h2>

      {/* Description */}

      <p
        ref={descriptionRef}
        className="
          mt-6
          leading-8
          text-white/80
        "
      >
        Discover crystal-clear lagoons,
        private overwater villas,
        sunset cruises, gourmet dining,
        and unforgettable luxury
        experiences curated exclusively
        by Flyon.
      </p>

      {/* Stats */}

      <div
        ref={statsRef}
        className="
          mt-8
          grid
          grid-cols-3
          gap-4
        "
      >
        <div
          className="
            rounded-2xl
            bg-white/10
            p-4
          "
        >
          <Clock3
            size={18}
            className="mb-3"
          />

          <p className="text-sm text-white/70">
            Duration
          </p>

          <h4 className="mt-1 font-semibold">
            7 Days
          </h4>
        </div>

        <div
          className="
            rounded-2xl
            bg-white/10
            p-4
          "
        >
          <MapPin
            size={18}
            className="mb-3"
          />

          <p className="text-sm text-white/70">
            Location
          </p>

          <h4 className="mt-1 font-semibold">
            Indian Ocean
          </h4>
        </div>

        <div
          className="
            rounded-2xl
            bg-white/10
            p-4
          "
        >
          <Star
            size={18}
            className="mb-3 fill-yellow-400 text-yellow-400"
          />

          <p className="text-sm text-white/70">
            Rating
          </p>

          <h4 className="mt-1 font-semibold">
            4.9 / 5
          </h4>
        </div>
      </div>

      {/* Price */}

      <div className="mt-8 flex items-end justify-between">
        <div>
          <p className="text-sm text-white/60">
            Starting From
          </p>

          <h3 className="mt-1 text-3xl font-bold">
            $4,900
          </h3>
        </div>

        <div
          ref={buttonRef}
        >
          <Magnetic>
            <Button
              className="
                group
                flex
                items-center
                bg-white
                text-slate-900
                hover:bg-slate-100
              "
            >
              Explore

              <ArrowRight
                size={18}
                className="
                  ml-2
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Button>
          </Magnetic>
        </div>
      </div>
    </div>
  );
};

export default FeaturedOverlay;