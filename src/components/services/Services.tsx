import { useRef } from "react";

import Container from "../common/Container";

import ServiceBackground from "./background/ServiceBackground";
import ServicesHeader from "./ServicesHeader";
import FeaturedService from "./FeaturedService";
import ServiceGrid from "./ServiceGrid";
import ServicesDivider from "./divider/ServicesDivider";
import ServiceCTA from "./ServiceCTA";

import useServicesScene from "../../hooks/useServicesScene";

const Services = () => {
  // Section

  const sectionRef = useRef<HTMLElement>(null);

  // Scene

  const headerRef = useRef<HTMLDivElement>(null);

  const featuredRef = useRef<HTMLDivElement>(null);

  const dividerRef = useRef<HTMLDivElement>(null);

  const gridRef = useRef<HTMLDivElement>(null);

  const ctaRef = useRef<HTMLDivElement>(null);

  // Background

  const backgroundRef =
    useRef<HTMLDivElement>(null);

  const glowRef =
    useRef<HTMLDivElement>(null);

  useServicesScene({
    sectionRef,
    headerRef,
    featuredRef,
    dividerRef,
    gridRef,
    ctaRef,
    backgroundRef,
    glowRef,
  });

  return (
    <section
      id="services"
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        py-36
      "
    >
      <ServiceBackground
        backgroundRef={backgroundRef}
        glowRef={glowRef}
      />

      <Container className="relative z-10">
        <div ref={headerRef}>
          <ServicesHeader />
        </div>

        <div ref={featuredRef}>
          <FeaturedService />
        </div>

        <ServicesDivider
          dividerRef={dividerRef}
        />

        <div ref={gridRef}>
          <ServiceGrid />
        </div>

        <div
          ref={ctaRef}
          className="mt-32"
        >
          <ServiceCTA />
        </div>
      </Container>
    </section>
  );
};

export default Services;