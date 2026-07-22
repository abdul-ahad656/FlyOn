import { useRef } from "react";

import useBackgroundParallax, {
  type ParallaxLayer,
} from "../../../hooks/useBackgroundParallax";

import AboutGlow from "./AboutGlow";
import AboutGrid from "./AboutGrid";
import AboutParticles from "./AboutParticles";

const AboutBackground = () => {
  // Single shared ref for ALL parallax layers across child components:
  // [0-2] → AboutGlow blobs  [3] → AboutGrid
  const allLayers = useRef<ParallaxLayer[]>([]);

  // One mouse listener + one GSAP ticker drives everything
  useBackgroundParallax({ layers: allLayers });

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AboutGlow layersRef={allLayers} />

      <AboutGrid layersRef={allLayers} />

      <AboutParticles />
    </div>
  );
};

export default AboutBackground;