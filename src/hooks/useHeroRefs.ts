import { useRef } from "react";

const useHeroRefs = () => {
  return {
    badgeRef: useRef<HTMLDivElement>(null),
    headingRef: useRef<HTMLDivElement>(null),
    descriptionRef: useRef<HTMLParagraphElement>(null),
    buttonsRef: useRef<HTMLDivElement>(null),
    statsRef: useRef<HTMLDivElement>(null),
    sceneRef: useRef<HTMLDivElement>(null),
    glowRef: useRef<HTMLDivElement>(null),
    cloudRefs: useRef<HTMLImageElement[]>([]),
  };
};

export default useHeroRefs;
