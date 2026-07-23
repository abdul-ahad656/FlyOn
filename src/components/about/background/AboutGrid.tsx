import type { ParallaxLayer } from "../../../hooks/useBackgroundParallax";

interface Props {
  layersRef: React.MutableRefObject<ParallaxLayer[]>;
  // Index offset so AboutGrid's div is stored after AboutGlow's 3 layers
  offset?: number;
}

const AboutGrid = ({ layersRef, offset = 3 }: Props) => {
  return (
    <div
      ref={(el) => {
        layersRef.current[offset] = { element: el, depth: 8 };
      }}
      className="
        about-grid
        absolute
        inset-0
        opacity-[0.04]
        pointer-events-none
        will-change-transform
      "
      style={{
        backgroundImage: `
          linear-gradient(to right,#0f172a 1px,transparent 1px),
          linear-gradient(to bottom,#0f172a 1px,transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />
  );
};

export default AboutGrid;