import { motion } from "framer-motion";

const ServicesHeader = () => {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
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
        Premium Travel Services
      </motion.div>

      {/* Heading */}

      <motion.h2
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: .15,
          duration: .7,
        }}
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
        Crafted Experiences
        <span className="block text-primary">
          For Every Journey
        </span>
      </motion.h2>

      {/* Description */}

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: .3,
          duration: .7,
        }}
        className="
          mx-auto
          mt-8
          max-w-2xl
          text-lg
          leading-9
          text-text-light
        "
      >
        From private aviation and luxury resorts to curated
        itineraries and dedicated concierge services, every
        experience is thoughtfully designed to make travel
        effortless, elegant, and unforgettable.
      </motion.p>
    </div>
  );
};

export default ServicesHeader;