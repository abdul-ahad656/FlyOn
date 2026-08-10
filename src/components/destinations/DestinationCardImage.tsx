import type { DestinationCardData } from "./types";

interface Props {
  destination: DestinationCardData;

  variant: "featured" | "side" | "bottom";

  imageRef: React.RefObject<HTMLDivElement | null>;

  glowRef: React.RefObject<HTMLDivElement | null>;

  spotlightRef: React.RefObject<HTMLDivElement | null>;

  badgeRef: React.RefObject<HTMLDivElement | null>;

  overlayRef: React.RefObject<HTMLDivElement | null>;

  sweepRef: React.RefObject<HTMLDivElement | null>;
}

const DestinationCardImage = ({
  destination,
  variant,
  imageRef,
  glowRef,
  spotlightRef,
  badgeRef,
  overlayRef,
  sweepRef,
}: Props) => {
  // =========================================
  // Variant Configuration
  // =========================================

  const imageHeight = {
    featured: `
      h-[420px]
      sm:h-[460px]
      lg:h-[500px]
    `,

    side: `
      h-[220px]
      sm:h-[240px]
      lg:h-[250px]
    `,

    bottom: `
      h-[230px]
      sm:h-[250px]
      lg:h-[270px]
    `,
  };

  const titleSize = {
    featured: `
      text-3xl
      lg:text-4xl
    `,

    side: `
      text-2xl
    `,

    bottom: `
      text-2xl
      lg:text-[26px]
    `,
  };

  // =========================================
  // Render
  // =========================================

  return (
    <div
      className={`
        relative
        overflow-hidden
        ${imageHeight[variant]}
      `}
    >
      {/* =====================================
          AMBIENT GLOW
      ===================================== */}

      <div
        ref={glowRef}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          z-10
          h-60
          w-60
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-primary/20
          blur-[110px]
          will-change-transform
        "
      />

      {/* =====================================
          CURSOR SPOTLIGHT
      ===================================== */}

      <div
        ref={spotlightRef}
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          z-30
          h-64
          w-64
          rounded-full
          bg-white/20
          opacity-0
          blur-3xl
          will-change-transform
        "
      />

      {/* =====================================
          IMAGE
      ===================================== */}

      <div
        ref={imageRef}
        className="
          relative
          h-full
          w-full
          overflow-hidden
          will-change-transform
        "
      >
        <img
          src={destination.image}
          alt={destination.title}
          draggable={false}
          loading={variant === "featured" ? "eager" : "lazy"}
          className="
            h-full
            w-full
            select-none
            object-cover
            pointer-events-none
            will-change-transform
          "
        />

        {/* ===================================
            CINEMATIC GRADIENT
        =================================== */}

        <div
          ref={overlayRef}
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-slate-950/85
            via-slate-900/25
            to-transparent
            will-change-transform
          "
        />

        {/* ===================================
            SOFT VIGNETTE
        =================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(
              circle_at_center,
              transparent_35%,
              rgba(2,6,23,0.18)_100%
            )]
          "
        />

        {/* ===================================
            NOISE
        =================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.025]
            mix-blend-overlay
            bg-[radial-gradient(
              circle_at_center,
              white_1px,
              transparent_1px
            )]
            [background-size:22px_22px]
          "
        />

        {/* ===================================
            LUXURY LIGHT SWEEP
        =================================== */}

        <div
          ref={sweepRef}
          className="
            pointer-events-none
            absolute
            inset-y-0
            -left-1/2
            z-20
            w-40
            rotate-12
            bg-gradient-to-r
            from-transparent
            via-white/30
            to-transparent
            blur-xl
            will-change-transform
          "
        />

        {/* ===================================
            DESTINATION BADGE
        =================================== */}

        <div
          ref={badgeRef}
          className="
            absolute
            left-5
            top-5
            z-20
            rounded-full
            border
            border-white/20
            bg-white/10
            px-4
            py-2
            backdrop-blur-xl
            will-change-transform
          "
        >
          <span
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[2.5px]
              text-white
              sm:text-xs
            "
          >
            Luxury Escape
          </span>
        </div>

        {/* ===================================
            DESTINATION INFORMATION
        =================================== */}

        <div
          className="
            absolute
            bottom-5
            left-5
            right-5
            z-20
            flex
            items-end
            justify-between
            gap-4
          "
        >
          {/* Destination */}

          <div className="min-w-0">
            <h3
              className={`
                font-heading
                font-bold
                leading-tight
                text-white
                ${titleSize[variant]}
              `}
            >
              {destination.title}
            </h3>

            <p
              className="
                mt-1
                text-sm
                text-white/70
              "
            >
              {destination.country}
            </p>
          </div>

          {/* Duration */}

          <div
            className="
              shrink-0
              rounded-full
              border
              border-white/10
              bg-white/10
              px-4
              py-2
              backdrop-blur-xl
            "
          >
            <span
              className="
                text-xs
                font-medium
                text-white
                sm:text-sm
              "
            >
              {destination.duration}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCardImage;