import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Link {
  label: string;
  href: string;
}

interface Props {
  title: string;
  color: string;
  textColor: string;
  links: Link[];
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const NavCard = ({
  title,
  color,
  textColor,
  links,
}: Props) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -10,
        scale: 1.025,
      }}
      transition={{
        duration: 0.35,
      }}
      className="group relative overflow-hidden rounded-[26px] p-8 shadow-lg"
      style={{
        background: color,
        color: textColor,
      }}
    >
      {/* Animated Glow */}

      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

      {/* Glass Overlay */}

      <div className="pointer-events-none absolute inset-0 rounded-[26px] border border-white/20" />

      {/* Decorative Gradient */}

      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-white/0 via-white/70 to-white/0 opacity-70" />

      {/* Title */}

      <div className="relative z-10">
        <p className="mb-2 text-xs uppercase tracking-[5px] opacity-70">
          Flyon
        </p>

        <h2 className="mb-8 text-3xl font-heading font-bold">
          {title}
        </h2>

        <div className="space-y-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group/link flex items-center justify-between rounded-lg px-1 py-2 transition-all duration-300 hover:bg-white/10"
            >
              <span className="text-[15px] font-medium">
                {link.label}
              </span>

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Decoration */}

      <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-white/5 blur-2xl" />
    </motion.div>
  );
};

export default NavCard;