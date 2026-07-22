import { useRef } from "react";

import Container from "../common/Container";
import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";
import useAboutReveal from "../../hooks/useAboutReveal";
import AboutBackground from "./background/AboutBackground";


const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useAboutReveal(sectionRef);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden py-32"
    >
      <AboutBackground />

      <Container className="relative z-10">
        <div className="grid items-center gap-24 lg:grid-cols-2">
          <AboutContent />

          <AboutImage />
        </div>
      </Container>
    </section>
  );
};

export default About;