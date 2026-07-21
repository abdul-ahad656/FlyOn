import { forwardRef } from "react";

const HeroDescription = forwardRef<HTMLParagraphElement>((_, ref) => {
  return (
    <p
      ref={ref}
      className="mt-8 max-w-xl text-lg leading-8 text-text-light"
    >
      Discover hand-crafted journeys designed with elegance,
      comfort and unforgettable experiences across the world's
      most breathtaking destinations.
    </p>
  );
});

HeroDescription.displayName = "HeroDescription";

export default HeroDescription;