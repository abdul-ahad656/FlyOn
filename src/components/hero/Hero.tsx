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

  // Continuous physics engine
  useHeroScene({
    planeRef: refs.planeRef,
    shadowRef: refs.shadowRef,
    glowRef: refs.glowRef,
    trailRef: refs.trailRef,
    cloudRefs: refs.cloudRefs,
  });

  // Intro cinematic timeline
  useHeroTimeline({
    badgeRef: refs.badgeRef,
    headingRef: refs.headingRef,
    descriptionRef: refs.descriptionRef,
    buttonsRef: refs.buttonsRef,
    statsRef: refs.statsRef,

    planeRef: refs.planeRef,
    glowRef: refs.glowRef,
    trailRef: refs.trailRef,
    cloudRefs: refs.cloudRefs,
  });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-32"
    >
      <HeroBackground />

      <HeroScene
        planeRef={refs.planeRef}
        shadowRef={refs.shadowRef}
        glowRef={refs.glowRef}
        trailRef={refs.trailRef}
        cloudRefs={refs.cloudRefs}
      />

      <Container className="relative z-30">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <HeroContent
            badgeRef={refs.badgeRef}
            headingRef={refs.headingRef}
            descriptionRef={refs.descriptionRef}
            buttonsRef={refs.buttonsRef}
            statsRef={refs.statsRef}
          />

          <div />
        </div>
      </Container>

      <ScrollIndicator />
    </section>
  );
};

export default Hero;