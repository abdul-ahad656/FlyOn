import { useRef } from "react";

import Container from "../common/Container";

import DestinationBackground from "./background/DestinationBackground";
import DestinationsHeader from "./DestinationsHeader";
import FeaturedDestination from "./feature/FeaturedDestination";
import DestinationGrid from "./DestinationGrid";
import DestinationCTA from "./DestinationCTA";
import { DestinationScene } from "./world";

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
        bg-slate-950
        py-32
        md:py-40
      "
    >
      {/* =========================================
          CINEMATIC BACKGROUND
      ========================================== */}

      <DestinationBackground
        backgroundRef={backgroundRef}
        glowRef={glowRef}
      />

      {/* =========================================
          DESTINATION CONTENT
      ========================================== */}

      <Container className="relative z-10">
        {/* Header */}

        <div ref={headerRef}>
          <DestinationsHeader />
        </div>

        {/* Featured Destination */}

        <div ref={featuredRef}>
          <FeaturedDestination />
        </div>

        {/* Destination Gallery */}

        <div ref={gridRef}>
          <DestinationGrid />
        </div>

        {/* CTA */}

        <div ref={ctaRef}>
          <DestinationCTA />
        </div>
      </Container>

      {/* =========================================
          3D WORLD LAYER

          Kept separate from normal DOM content so
          the Three.js scene can later become the
          cinematic transition layer.
      ========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
        "
        aria-hidden="true"
      >
        <DestinationScene />
      </div>
    </section>
  );
};

export default Destinations;