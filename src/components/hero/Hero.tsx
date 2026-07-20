import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import FloatingPlane from "./FloatingPlane";
import FloatingClouds from "./FloatingClouds";
import FloatingParticles from "./FloatingParticles";
import ScrollIndicator from "./ScrollIndicator";
import FlightPath from "./FlightPath";

import Container from "../common/Container";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-32"
    >
      {/* Background */}
      <HeroBackground />

      {/* Floating Elements */}
      <FloatingClouds />
      <FloatingParticles />

      <Container className="relative z-20">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}
          <HeroContent />

          {/* RIGHT */}
          <div className="relative hidden h-[700px] items-center justify-center lg:flex">

            {/* Flight Route */}

            <FlightPath />

            {/* Plane */}

            <FloatingPlane />

          </div>

        </div>
      </Container>

      {/* Scroll Indicator */}

      <ScrollIndicator />

    </section>
  );
};

export default Hero;