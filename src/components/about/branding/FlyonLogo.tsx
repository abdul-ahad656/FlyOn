import { forwardRef } from "react";

/**
 * Premium typographic Flyon wordmark — business-card inspired.
 * No image assets; serif title + tracked subtitle.
 */
const FlyonLogo = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="flyon-logo relative select-none text-center"
      aria-label="Flyon Luxury Travel"
    >
      <div className="relative inline-block">
        {/* Decorative plane mark — sits above the "F" */}
        <svg
          className="
            pointer-events-none
            absolute
            -top-7
            left-0
            h-5
            w-5
            -rotate-[24deg]
            text-accent
            sm:-top-8
            sm:h-6
            sm:w-6
          "
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
        </svg>

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
      </div>

      <p
        className="
          mt-4
          text-[10px]
          font-medium
          uppercase
          tracking-[0.42em]
          text-accent
          sm:text-[11px]
          sm:tracking-[0.48em]
        "
      >
        Luxury Travel
      </p>
    </div>
  );
});

FlyonLogo.displayName = "FlyonLogo";

export default FlyonLogo;
