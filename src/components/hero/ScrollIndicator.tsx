import { motion } from "framer-motion";
import { Mouse } from "lucide-react";

const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-10 left-1/2 z-30 -translate-x-1/2">
      <div className="flex flex-col items-center gap-3">

        <Mouse
          size={26}
          className="text-primary"
        />

        <div className="relative h-14 w-[2px] overflow-hidden rounded-full bg-primary/20">

          <motion.div
            className="absolute left-0 w-full rounded-full bg-primary"
            initial={{ y: -30 }}
            animate={{ y: 60 }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ height: 20 }}
          />

        </div>

        <span className="text-xs uppercase tracking-[4px] text-text-light">
          Scroll
        </span>

      </div>
    </div>
  );
};

export default ScrollIndicator;