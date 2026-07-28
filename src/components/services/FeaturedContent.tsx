import Button from "../common/Button";
import Magnetic from "../animations/Magnetic";

import FeaturedStats from "./FeaturedStats";
import FeaturedFeatures from "./FeaturedFeatures";

import { ArrowRight } from "lucide-react";

const FeaturedContent = () => {
  return (
    <div className="flex flex-col justify-center p-14">

      <p className="font-medium uppercase tracking-[3px] text-primary">
        Private Jet Charter
      </p>

      <h2 className="mt-5 font-heading text-5xl font-bold leading-tight">
        Travel
        <span className="block text-primary">
          Without Limits
        </span>
      </h2>

      <p className="mt-8 text-lg leading-9 text-text-light">
        Experience private aviation with personalized routes,
        luxury cabins, flexible schedules, and dedicated
        concierge service designed around your lifestyle.
      </p>

      <FeaturedFeatures />

      <FeaturedStats />

      <div className="mt-10">

        <Magnetic>

          <Button className="group flex items-center">

            Explore Service

            <ArrowRight
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