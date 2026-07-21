import type { RefObject } from "react";

export interface HeroSceneRefs {
  planeRef: RefObject<HTMLDivElement | null>;

  shadowRef: RefObject<HTMLDivElement | null>;

  glowRef: RefObject<HTMLDivElement | null>;

  trailRef: RefObject<SVGPathElement | null>;

  cloudRefs: RefObject<HTMLImageElement[]>;
}