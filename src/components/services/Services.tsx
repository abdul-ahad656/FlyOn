import Container from "../common/Container";

import ServiceBackground from "./ServiceBackground";
import ServicesHeader from "./ServicesHeader";
import FeaturedService from "./FeaturedService";
import ServiceGrid from "./ServiceGrid";

const Services = () => {
  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        py-36
      "
    >
      <ServiceBackground />

      <Container className="relative z-10">
        <ServicesHeader />

        <FeaturedService />

        <ServiceGrid />
      </Container>
    </section>
  );
};

export default Services;