import { services } from "../../data/servicesData";
import ServiceCard from "./ServiceCard";

const ServiceGrid = () => {
  return (
    <div
      className="
        mt-20
        grid
        gap-8
        md:grid-cols-2
        xl:grid-cols-3
      "
    >
      {services.map((service, index) => (
        <ServiceCard
          key={service.title}
          service={service}
          index={index}
        />
      ))}
    </div>
  );
};

export default ServiceGrid;