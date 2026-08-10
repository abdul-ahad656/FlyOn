import { ArrowUpRight, Star } from "lucide-react";

import Button from "../common/Button";
import Magnetic from "../animations/Magnetic";

import type { DestinationCardData } from "./types";

interface Props {
  destination: DestinationCardData;

  variant: "featured" | "side" | "bottom";

  contentRef: React.RefObject<HTMLDivElement | null>;

  titleRef: React.RefObject<HTMLHeadingElement | null>;

  buttonRef: React.RefObject<HTMLDivElement | null>;
}

const DestinationCardContent = ({
  destination,
  contentRef,
  titleRef,
  buttonRef,
}: Props) => {
  return (
    <div
      ref={contentRef}
      className="
        relative
        flex
        flex-col
        px-8
        pt-7
        pb-8
      " 
    >
      {/* Top Meta */}

      <div
        className="
          flex
          items-center
          justify-between
        "
      >
        <span
          className="
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.22em]
            text-primary
          "
        >
          {destination.country}
        </span>

        <div
          className="
            flex
            items-center
            gap-1.5
            rounded-full
            bg-slate-100
            px-3
            py-1
          "
        >
          <Star
            size={13}
            className="fill-amber-400 text-amber-400"
          />

          <span
            className="
              text-xs
              font-semibold
              text-slate-700
            "
          >
            {destination.rating}
          </span>
        </div>
      </div>

      {/* Title */}

      <h3
        ref={titleRef}
        className="
          mt-5
          font-heading
          text-[34px]
          font-bold
          leading-tight
          tracking-tight
          text-slate-900
        "
      >
        {destination.title}
      </h3>

      {/* Description */}

      <p
        className="
          mt-5
          max-w-[90%]
          text-[15px]
          leading-7
          text-slate-500
        "
      >
        {destination.description}
      </p>

      {/* Divider */}

      <div
        className="
          my-8
          h-px
          bg-slate-100
        "
      />

      {/* Footer */}

      <div
        className="
          flex
          items-end
          justify-between
        "
      >
        <div>
          <p
            className="
              text-xs
              uppercase
              tracking-[0.18em]
              text-slate-400
            "
          >
            From
          </p>

          <h4
            className="
              mt-2
              text-3xl
              font-bold
              tracking-tight
              text-slate-900
            "
          >
            {destination.price}
          </h4>

          <p
            className="
              mt-2
              text-sm
              text-slate-400
            "
          >
            {destination.duration}
          </p>
        </div>

        <div ref={buttonRef}>
          <Magnetic>
            <Button
              className="
                group
                rounded-full
                px-6
                py-3
                text-sm
              "
            >
              Explore

              <ArrowUpRight
                size={18}
                className="
                  ml-2
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </Button>
          </Magnetic>
        </div>
      </div>
    </div>
  );
};

export default DestinationCardContent;