import type { RefObject } from "react";

/** Atmosphere refs still owned by the Hero scene. */
export interface HeroSceneRefs {
  glowRef: RefObject<HTMLDivElement | null>;
  cloudRefs: RefObject<HTMLImageElement[]>;
}
