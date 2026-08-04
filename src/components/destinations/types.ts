export interface Destination {
  id: number;
  title: string;
  country: string;
  image: string;
  duration: string;
  rating: number;
  price: string;
  featured?: boolean;
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