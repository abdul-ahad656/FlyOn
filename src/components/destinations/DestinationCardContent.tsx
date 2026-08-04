import { ArrowRight, Star } from "lucide-react";

import Button from "../common/Button";
import Magnetic from "../animations/Magnetic";

import type { DestinationCardData } from "./types";

interface Props {
  destination: DestinationCardData;

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
        p-7
      "
    >
      {/* Country */}

      <span
        className="
          text-xs
          font-semibold
          uppercase
          tracking-[2px]
          text-primary
        "
      >
        {destination.country}
      </span>

      {/* Title */}

      <h3
        ref={titleRef}
        className="
          mt-3
          font-heading
          text-3xl
          font-bold
          text-slate-900
        "
      >
        {destination.title}
      </h3>

      {/* Description */}

      <p
        className="
          mt-5
          leading-8
          text-text-light
        "
      >
        {destination.description}
      </p>

      {/* Divider */}

      <div className="my-7 h-px bg-slate-200" />

      {/* Bottom */}

      <div
        className="
          flex
          items-center
          justify-between
        "
      >
        {/* Rating + Price */}

        <div>
          <div
            className="
              flex
              items-center
              gap-1
            "
          >
            <Star
              size={15}
              className="
                fill-yellow-400
                text-yellow-400
              "
            />

            <span className="font-medium">
              4.9
            </span>

            <span className="text-slate-400">
              (428)
            </span>
          </div>

          <div className="mt-3">
            <p className="text-sm text-slate-500">
              Starting From
            </p>

            <h4
              className="
                mt-1
                text-2xl
                font-bold
                text-slate-900
              "
            >
              {destination.price}
            </h4>
          </div>
        </div>

        {/* CTA */}

        <div ref={buttonRef}>
          <Magnetic>
            <Button
              className="
                group
                flex
                items-center
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

export default DestinationCardContent;