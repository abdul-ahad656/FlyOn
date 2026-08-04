import { ArrowUpRight, Clock3, Star } from "lucide-react";

import type { Destination } from "./types";

interface Props {
  destination: Destination;
}

const DestinationCard = ({ destination }: Props) => {
  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/60
        bg-white
        shadow-[0_30px_80px_rgba(15,23,42,.08)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-[0_40px_100px_rgba(15,23,42,.14)]
      "
    >
      {/* Image */}

      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={destination.image}
          alt={destination.title}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

        {/* Rating */}

        <div
          className="
            absolute
            left-5
            top-5
            flex
            items-center
            gap-2
            rounded-full
            bg-white/90
            px-4
            py-2
            backdrop-blur-xl
          "
        >
          <Star
            size={16}
            className="fill-yellow-400 text-yellow-400"
          />

          <span className="text-sm font-medium">
            {destination.rating}
          </span>
        </div>
      </div>

      {/* Content */}

      <div className="p-7">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-text-light">
            <Clock3 size={16} />

            <span className="text-sm">
              {destination.duration}
            </span>
          </div>

          <ArrowUpRight
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
            size={18}
          />
        </div>

        <h3 className="mt-5 font-heading text-3xl font-bold">
          {destination.title}
        </h3>

        <p className="mt-2 text-text-light">
          {destination.country}
        </p>

        <div className="mt-8 flex items-end justify-between">
          <div>
            <p className="text-sm text-text-light">
              Starting From
            </p>

            <p className="mt-1 text-xl font-bold text-primary">
              {destination.price}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default DestinationCard;