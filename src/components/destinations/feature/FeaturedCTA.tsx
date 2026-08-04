import { ArrowRight } from "lucide-react";

import Button from "../../common/Button";
import Magnetic from "../../animations/Magnetic";

const FeaturedCTA = () => {
  return (
    <div className="mt-10">
      <Magnetic>
        <Button className="group flex items-center">
          Explore Destination

          <ArrowRight
            size={18}
            className="
              ml-2
              transition-transform
              duration-300
              group-hover:translate-x-1
              "
            />
        </Button>
      </Magnetic>
    </div>
  );
};

export default FeaturedCTA;