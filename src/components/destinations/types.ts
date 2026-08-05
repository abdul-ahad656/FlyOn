export interface DestinationCardData {
  id: number;

  featured: boolean;

  title: string;

  country: string;

  image: string;

  duration: string;

  rating: number;

  price: string;

  description: string;
}

export interface DestinationSceneRefs {
  sectionRef: React.RefObject<HTMLElement | null>;

  backgroundRef: React.RefObject<HTMLDivElement | null>;

  glowRef: React.RefObject<HTMLDivElement | null>;

  headerRef: React.RefObject<HTMLDivElement | null>;

  featuredRef: React.RefObject<HTMLDivElement | null>;

  gridRef: React.RefObject<HTMLDivElement | null>;

  ctaRef: React.RefObject<HTMLDivElement | null>;
}

export interface FeaturedDestinationRefs {
  sectionRef: React.RefObject<HTMLDivElement | null>;

  imageRef: React.RefObject<HTMLDivElement | null>;

  overlayRef: React.RefObject<HTMLDivElement | null>;

  headingRef: React.RefObject<HTMLHeadingElement | null>;

  descriptionRef: React.RefObject<HTMLParagraphElement | null>;

  statsRef: React.RefObject<HTMLDivElement | null>;

  buttonRef: React.RefObject<HTMLDivElement | null>;

  glowRef: React.RefObject<HTMLDivElement | null>;

  sweepRef: React.RefObject<HTMLDivElement | null>;

  cardRef: React.RefObject<HTMLDivElement | null>;
}

export interface DestinationCardRefs {
  cardRef: React.RefObject<HTMLDivElement | null>;

  imageRef: React.RefObject<HTMLDivElement | null>;

  glowRef: React.RefObject<HTMLDivElement | null>;

  spotlightRef: React.RefObject<HTMLDivElement | null>;

  contentRef: React.RefObject<HTMLDivElement | null>;

  titleRef: React.RefObject<HTMLHeadingElement | null>;

  buttonRef: React.RefObject<HTMLDivElement | null>;
}