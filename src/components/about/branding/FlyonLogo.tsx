import { forwardRef } from "react";

/**
 * Premium typographic Flyon wordmark — business-card inspired.
 * No image assets; serif title + tracked subtitle.
 */
const FlyonLogo = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="flyon-logo relative select-none"
      aria-label="Flyon Luxury Travel"
    >
      <div className="relative inline-block">
        <h2
          className="
            font-logo
            text-[2.75rem]
            font-semibold
            leading-none
            tracking-[-0.02em]
            text-primary
            sm:text-6xl
            lg:text-[4.25rem]
          "
        >
          Flyon
        </h2>

        <p
          className="
            absolute
            right-0
            top-full
            text-[9px]
            font-medium
            uppercase
            tracking-[0.42em]
            text-accent
            leading-none
            sm:text-[10px]
            sm:tracking-[0.48em]
          "
        >
          Luxury Travel
        </p>
      </div>
    </div>
  );
});

FlyonLogo.displayName = "FlyonLogo";

export default FlyonLogo;
