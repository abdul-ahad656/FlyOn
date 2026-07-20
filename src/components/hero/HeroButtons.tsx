import Button from "../common/Button";
import Magnetic from "../animations/Magnetic";
import { ArrowRight, Play } from "lucide-react";

const HeroButtons = () => {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-5">
      {/* Primary Button */}
      <Magnetic>
        <Button className="group flex items-center gap-2 px-8 py-4 text-black">
          Explore Tours

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Button>
      </Magnetic>
    </div>
  );
};

export default HeroButtons;