import { ArrowRight } from "lucide-react";

import Button from "../common/Button";
import Magnetic from "../animations/Magnetic";

const DestinationCTA = () => {
  return (
    <section
      className="
        relative
        mt-28
        overflow-hidden
        rounded-[42px]
        border
        border-white/60
        bg-gradient-to-br
        from-primary
        via-sky-600
        to-cyan-600
        px-8
        py-20
        text-white
        shadow-[0_50px_120px_rgba(14,116,244,.25)]
        lg:px-20
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          -right-40
          -top-40
          h-96
          w-96
          rounded-full
          bg-white/10
          blur-[140px]
        "
      />

      <div
        className="
          absolute
          -left-32
          bottom-[-120px]
          h-80
          w-80
          rounded-full
          bg-cyan-300/20
          blur-[120px]
        "
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">

        {/* Badge */}

        <span
          className="
            inline-flex
            rounded-full
            border
            border-white/20
            bg-white/10
            px-5
            py-2
            text-sm
            font-medium
            uppercase
            tracking-[3px]
            backdrop-blur-xl
          "
        >
          Luxury Awaits
        </span>

        {/* Heading */}

        <h2
          className="
            mt-8
            font-heading
            text-5xl
            font-bold
            leading-tight
            lg:text-6xl
          "
        >
          Your next unforgettable
          <span className="block">
            journey begins today.
          </span>
        </h2>

        {/* Description */}

        <p
          className="
            mx-auto
            mt-8
            max-w-2xl
            text-lg
            leading-9
            text-white/80
          "
        >
          From tropical escapes to iconic cities, Flyon crafts
          journeys that combine comfort, exclusivity, and
          unforgettable memories.
        </p>

        {/* Button */}

        <div className="mt-12 flex justify-center">

          <Magnetic>

            <Button className="group bg-white text-primary hover:bg-slate-100">

              Plan My Journey

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
    </section>
  );
};

export default DestinationCTA;