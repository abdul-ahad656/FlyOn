import { useRef } from "react";

import Container from "../common/Container";

import DestinationBackground from "./background/DestinationBackground";
import DestinationsHeader from "./DestinationsHeader";
import FeaturedDestination from "./feature/FeaturedDestination";
import DestinationGrid from "./DestinationGrid";
import DestinationCTA from "./DestinationCTA";

import useDestinationScene from "../../hooks/useDestinationScene";

const Destinations = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const backgroundRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const headerRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useDestinationScene({
    sectionRef,
    backgroundRef,
    glowRef,
    headerRef,
    featuredRef,
    gridRef,
    ctaRef,
  });

  return (
    <section
      ref={sectionRef}
      className="
        relative
        isolate
        overflow-hidden
        py-32
        md:py-40
        lg:py-48
      "
    >
      {/* Cinematic background */}

      <DestinationBackground
        backgroundRef={backgroundRef}
        glowRef={glowRef}
      />

      {/* Content */}

      <Container className="relative z-10">
        <div ref={headerRef}>
          <DestinationsHeader />
        </div>

        <div ref={featuredRef}>
          <FeaturedDestination />
        </div>

        <div ref={gridRef}>
          <DestinationGrid />
        </div>

        <div ref={ctaRef}>
          <DestinationCTA />
        </div>
      </Container>
    </section>
  );
};

export default Destinations;