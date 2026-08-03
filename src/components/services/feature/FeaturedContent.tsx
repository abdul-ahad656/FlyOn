import { ArrowRight } from "lucide-react";

import Button from "../../common/Button";
import Magnetic from "../../animations/Magnetic";

import FeaturedFeatures from "./FeaturedFeatures";
import FeaturedStats from "./FeaturedStats";

interface Props {
  contentRef: React.RefObject<HTMLDivElement | null>;

  headingRef: React.RefObject<HTMLHeadingElement | null>;

  descriptionRef: React.RefObject<HTMLParagraphElement | null>;

  featuresRef: React.RefObject<HTMLDivElement | null>;

  statsRef: React.RefObject<HTMLDivElement | null>;

  buttonRef: React.RefObject<HTMLDivElement | null>;
}

const FeaturedContent = ({
  contentRef,
  headingRef,
  descriptionRef,
  featuresRef,
  statsRef,
  buttonRef,
}: Props) => {
  return (
    <div
      ref={contentRef}
      className="
        flex
        flex-col
        justify-center
        px-12
        py-16
        lg:px-16
      "
    >
      {/* Badge */}

      <span
        className="
          inline-flex
          w-fit
          rounded-full
          border
          border-primary/20
          bg-primary/5
          px-5
          py-2
          text-sm
          font-medium
          uppercase
          tracking-[2px]
          text-primary
        "
      >
        Premium Experience
      </span>

      {/* Heading */}

      <h2
        ref={headingRef}
        className="
          mt-8
          font-heading
          text-5xl
          font-bold
          leading-tight
          text-slate-900
          lg:text-6xl
        "
      >
        Travel

        <span className="block text-primary">
          Without Limits
        </span>
      </h2>

      {/* Description */}

      <p
        ref={descriptionRef}
        className="
          mt-8
          max-w-xl
          text-lg
          leading-9
          text-text-light
        "
      >
        Experience private aviation with personalized routes,
        luxury cabins, flexible schedules, and dedicated
        concierge services crafted around your lifestyle.
      </p>

      {/* Features */}

      <div
        ref={featuresRef}
        className="mt-10"
      >
        <FeaturedFeatures />
      </div>

      {/* Stats */}

      <div
        ref={statsRef}
        className="mt-12"
      >
        <FeaturedStats />
      </div>

      {/* CTA */}

      <div
        ref={buttonRef}
        className="mt-12"
      >
        <Magnetic>
          <Button className="group flex items-center">
            Explore Service

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
  );
};

export default FeaturedContent;

