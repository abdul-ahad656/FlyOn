import { motion } from "framer-motion";
import { Compass, Globe2, Plane } from "lucide-react";

const stats = [
  {
    icon: Globe2,
    value: "60+",
    label: "Destinations",
  },
  {
    icon: Plane,
    value: "18K+",
    label: "Luxury Trips",
  },
  {
    icon: Compass,
    value: "4.9★",
    label: "Traveler Rating",
  },
];

const DestinationsHeader = () => {
  return (
    <div className="mx-auto max-w-6xl">
      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .6 }}
        className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-5 py-2"
      >
        <span className="text-sm font-medium uppercase tracking-[2px] text-primary">
          Curated Destinations
        </span>
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
        className="mt-8 max-w-3xl font-heading text-5xl font-bold leading-tight text-slate-900 lg:text-6xl"
      >
        Discover destinations
        <span className="block text-primary">
          crafted for unforgettable journeys.
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
        className="mt-8 max-w-2xl text-lg leading-9 text-text-light"
      >
        Every destination in our collection has been carefully selected for
        exceptional experiences, world-class hospitality, and breathtaking
        landscapes that redefine luxury travel.
      </motion.p>

      {/* Stats */}

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: .45,
          duration: .7,
        }}
        className="mt-14 grid gap-5 md:grid-cols-3"
      >
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="
                group
                rounded-3xl
                border
                border-white/60
                bg-white/70
                p-7
                shadow-[0_20px_60px_rgba(15,23,42,.06)]
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-[0_30px_80px_rgba(15,23,42,.12)]
              "
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon size={24} />
              </div>

              <h3 className="mt-6 font-heading text-3xl font-bold text-slate-900">
                {item.value}
              </h3>

              <p className="mt-2 text-text-light">
                {item.label}
              </p>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default DestinationsHeader;