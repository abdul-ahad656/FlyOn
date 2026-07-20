import { motion } from "framer-motion";
import Counter from "../animations/Counter";

const stats = [
  {
    end: 18,
    suffix: "K+",
    label: "Happy Travelers",
  },
  {
    end: 60,
    suffix: "+",
    label: "Destinations",
  },
  {
    end: 15,
    suffix: "",
    label: "Years Experience",
  },
];

const HeroStats = () => {
  return (
    <div className="mt-16 grid grid-cols-3 gap-8">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: i * 0.2,
            duration: 0.8,
          }}
          className="relative"
        >
          <h2 className="font-heading text-4xl font-bold text-primary lg:text-5xl">
            <Counter
              end={stat.end}
              suffix={stat.suffix}
            />
          </h2>

          <p className="mt-2 text-sm text-text-light">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default HeroStats;