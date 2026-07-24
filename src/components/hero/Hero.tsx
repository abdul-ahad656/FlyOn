import HeroBackground from "./HeroBackground";
import HeroScene from "./HeroScene";
import HeroContent from "./HeroContent";
import ScrollIndicator from "./ScrollIndicator";

import Container from "../common/Container";

import useHeroScene from "../../hooks/useHeroScene";
import useHeroTimeline from "../../hooks/useHeroTimeline";
import useHeroRefs from "../../hooks/useHeroRefs";

const Hero = () => {
  const refs = useHeroRefs();

  // Atmosphere only (glow + clouds) — plane is global
  useHeroScene({
    glowRef: refs.glowRef,
    cloudRefs: refs.cloudRefs,
  });

  useHeroTimeline({
    badgeRef: refs.badgeRef,
    headingRef: refs.headingRef,
    descriptionRef: refs.descriptionRef,
    buttonsRef: refs.buttonsRef,
    statsRef: refs.statsRef,
    glowRef: refs.glowRef,
    cloudRefs: refs.cloudRefs,
  });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-32"
    >
      <HeroBackground />

      <HeroScene glowRef={refs.glowRef} cloudRefs={refs.cloudRefs} />

      <Container className="flight-env-hero-content relative z-30">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <HeroContent
            badgeRef={refs.badgeRef}
            headingRef={refs.headingRef}
            descriptionRef={refs.descriptionRef}
            buttonsRef={refs.buttonsRef}
            statsRef={refs.statsRef}
          />

          {/* Visual runway for the global plane over the right column */}
          <div aria-hidden className="hidden min-h-[280px] lg:block" />
        </div>
      </Container>

      <ScrollIndicator />
    </section>
  );
};

export default Hero;
