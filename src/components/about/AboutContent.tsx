import { ArrowRight } from "lucide-react";

import Button from "../common/Button";
import Magnetic from "../animations/Magnetic";
import AboutFeatures from "./AboutFeatures";

const AboutContent = () => {
  return (
    <div>
      {/* Badge */}

      <div
        className="
          about-badge
          inline-flex
          rounded-full
          border
          border-primary/20
          bg-primary/5
          px-5
          py-2
          text-sm
          font-medium
          text-primary
        "
      >
        Luxury Travel Since 2010
      </div>

      {/* Heading */}

      <h2
        className="
          about-heading
          mt-8
          max-w-xl
          font-heading
          text-5xl
          font-bold
          leading-tight
          text-slate-900
          lg:text-6xl
        "
      >
        Luxury isn't just a destination.

        <span className="block text-primary">
          It's every moment of the journey.
        </span>
      </h2>

      {/* Description */}

      <p
        className="
          about-description
          mt-8
          max-w-xl
          text-lg
          leading-9
          text-text-light
        "
      >
        At Flyon, every itinerary is thoughtfully crafted to deliver
        unforgettable moments. From private aviation and luxury resorts
        to exclusive local experiences, we design journeys that feel
        effortless, personal, and extraordinary.
      </p>

      <AboutFeatures />

      <div className="about-button mt-12">
        <Magnetic>
          <Button className="group flex items-center">
            Discover Flyon

            <ArrowRight
              size={18}
              className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Button>
        </Magnetic>
      </div>
    </div>
  );
};

export default AboutContent;