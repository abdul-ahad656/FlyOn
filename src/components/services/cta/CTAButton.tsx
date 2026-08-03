import { ArrowRight } from "lucide-react";

import Button from "../../common/Button";
import Magnetic from "../../animations/Magnetic";

const CTAButton = () => {
  return (
    <Magnetic strength={0.18}>
      <Button
        className="
          group
          flex
          items-center
          justify-center
          px-10
          py-5
        "
      >
        Book Free Consultation

        <ArrowRight
          size={18}
          className="
            ml-3
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />
      </Button>
    </Magnetic>
  );
};

export default CTAButton;