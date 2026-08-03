import { motion } from "framer-motion";

import CTABackground from "./CTABackground";
import CTAButton from "./CTAButton";
import CTAStats from "./CTAStats";

const ServiceCTA = () => {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.9,
      }}
      viewport={{
        once: true,
      }}
      className="
        relative
        overflow-hidden
        rounded-[40px]
        border
        border-white/60
        bg-white/70
        px-12
        py-20
        shadow-[0_40px_120px_rgba(15,23,42,.08)]
        backdrop-blur-xl
      "
    >
      <CTABackground />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <span
          className="
            inline-flex
            rounded-full
            border
            border-primary/15
            bg-primary/5
            px-5
            py-2
            text-sm
            font-medium
            uppercase
            tracking-[3px]
            text-primary
          "
        >
          Start Your Journey
        </span>

        <h2
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
          Let's Create Your
          <span className="block text-primary">
            Dream Vacation
          </span>
        </h2>

        <p
          className="
            mx-auto
            mt-8
            max-w-2xl
            text-lg
            leading-9
            text-text-light
          "
        >
          From private jets to luxury resorts and
          handcrafted itineraries, Flyon creates
          journeys tailored entirely around you.
        </p>

        <CTAStats />

        <div className="mt-14">
          <CTAButton />
        </div>
      </div>
    </motion.section>
  );
};

export default ServiceCTA;