import { motion } from "framer-motion";

import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";
import TrustBadge from "./TrustBadge";

const HeroContent = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
      }}
      className="relative z-20 max-w-2xl"
    >
      <TrustBadge />

      <h1
        className="
        mt-8
        font-heading
        text-6xl
        font-bold
        leading-tight
        text-secondary
        xl:text-7xl
      "
      >
        Fly Beyond{" "}
        <span className="text-primary">
          Ordinary.
        </span>
      </h1>

      <p
        className="
        mt-8
        max-w-xl
        text-lg
        leading-8
        text-text-light
      "
      >
        Discover handcrafted luxury journeys, unforgettable destinations,
        and premium travel experiences tailored for modern explorers.
      </p>

      <HeroButtons />

      <HeroStats />
    </motion.div>
  );
};

export default HeroContent;