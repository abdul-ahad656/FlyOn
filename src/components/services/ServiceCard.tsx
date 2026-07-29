import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

import Magnetic from "../animations/Magnetic";
import ServiceIcon from "./ServiceIcon";
import ServiceGlow from "./ServiceGlow";
import ServiceBorder from "./ServiceBorder";
import ServiceSpotlight from "./ServiceSpotlight";

interface Props {
  index: number;

  service: {
    number: string;
    title: string;
    description: string;
    icon: LucideIcon;
  };
}

const ServiceCard = ({
  service,
  index,
}: Props) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        delay: index * 0.08,
        duration: 0.75,
        ease: "easeOut",
      }}
    >
      <Magnetic strength={0.12}>
        <ServiceSpotlight>
          <div
            className="
              group
              relative
              flex
              h-[360px]
              flex-col
              overflow-hidden
              rounded-[30px]
              border
              border-slate-200/70
              bg-white/80
              p-8
              backdrop-blur-xl
              transition-all
              duration-500
              hover:-translate-y-2
              hover:shadow-[0_40px_100px_rgba(15,23,42,.12)]
            "
          >
            <ServiceGlow />

            <ServiceBorder />

            {/* Number */}

            <span
              className="
                absolute
                right-8
                top-7
                font-heading
                text-5xl
                font-bold
                text-slate-200
                transition-all
                duration-500
                group-hover:text-primary/15
              "
            >
              {service.number}
            </span>

            {/* Icon */}

            <ServiceIcon icon={Icon} />

            {/* Title */}

            <h3
              className="
                mt-8
                font-heading
                text-2xl
                font-semibold
                leading-tight
                text-slate-900
              "
            >
              {service.title}
            </h3>

            {/* Description */}

            <p
              className="
                mt-5
                leading-8
                text-text-light
              "
            >
              {service.description}
            </p>

            <div className="flex-grow" />

            {/* Footer */}

            <div
              className="
                flex
                items-center
                justify-between
              "
            >
              <span
                className="
                  font-medium
                  text-primary
                "
              >
                Learn More
              </span>

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-primary/10
                  text-primary
                  transition-all
                  duration-500
                  group-hover:bg-primary
                  group-hover:text-white
                  group-hover:rotate-45
                "
              >
                <ArrowUpRight size={20} />
              </div>
            </div>

            {/* Bottom Line */}

            <div
              className="
                absolute
                bottom-0
                left-0
                h-[3px]
                w-0
                bg-primary
                transition-all
                duration-700
                group-hover:w-full
              "
            />
          </div>
        </ServiceSpotlight>
      </Magnetic>
    </motion.div>
  );
};

export default ServiceCard;