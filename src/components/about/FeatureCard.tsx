import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Props {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({
  icon,
  title,
  description,
}: Props) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.35,
      }}
      className="
        feature-card
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/60
        bg-white/70
        p-6
        shadow-lg
        backdrop-blur-xl
      "
    >
      {/* Hover Glow */}

      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
      </div>

      {/* Icon */}

      <div
        className="
          mb-6
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-primary/10
          text-primary
        "
      >
        {icon}
      </div>

      <h3 className="font-heading text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-text-light">
        {description}
      </p>

      <div
        className="
          mt-6
          inline-flex
          items-center
          gap-2
          font-medium
          text-primary
          transition-all
          duration-300
          group-hover:translate-x-1
        "
      >
        Learn More

        <ArrowUpRight size={18} />
      </div>
    </motion.div>
  );
};

export default FeatureCard;