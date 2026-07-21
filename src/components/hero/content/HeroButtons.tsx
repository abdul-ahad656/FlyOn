import { forwardRef } from "react";
import { ArrowRight, Play } from "lucide-react";

import Button from "../../common/Button";
import Magnetic from "../../animations/Magnetic";

const HeroButtons = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="mt-10 flex flex-wrap gap-5"
    >
      <Magnetic>
        <Button className="group">
          Explore Tours

          <ArrowRight
            className="ml-2 transition-transform group-hover:translate-x-1"
            size={18}
          />
        </Button>
      </Magnetic>

      <Magnetic>
        <button className="flex items-center gap-3 rounded-full border border-slate-300 bg-white/70 px-7 py-4 backdrop-blur-xl transition hover:bg-white">
          <Play size={18} fill="currentColor" />

          Watch Reel
        </button>
      </Magnetic>
    </div>
  );
});

HeroButtons.displayName = "HeroButtons";

export default HeroButtons;