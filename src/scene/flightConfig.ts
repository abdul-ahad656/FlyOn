// src/scene/flightConfig.ts
// Tunable tokens for the global cinematic flight system.
// Positions use viewport/section ratios — never hardcoded pixels.

export const FLIGHT = {
  /** Idle hover origin inside #home (section-relative ratios). */
  start: {
    x: 0.72,
    y: 0.42,
    rotation: -8,
    scale: 1,
  },

  /** Relative bezier handles (multiples of viewport size) for aircraft-style arcs. */
  path: {
    c1: { x: -0.18, y: -0.22 },
    c2: { x: 0.08, y: -0.06 },
  },

  landing: {
    rotation: 0,
    scale: 0.78,
    /** Vertical offset above the measured landing target centre (plane half-height factor). */
    hoverOffsetY: 0.55,
    bounceAmplitude: 10,
    bounceWindow: 0.1,
  },

  plane: {
    /** Base visual width; actual size is measured from the DOM. */
    width: 420,
    mobileWidth: 260,
    tabletWidth: 340,
  },

  trail: {
    color: "#7DD3FC",
    glowColor: "#BAE6FD",
    width: 2.5,
    glowWidth: 6,
    maxPoints: 64,
    opacity: 0.5,
    fadeDuration: 1.4,
  },

  motion: {
    floatAmplitudeX: 5,
    floatAmplitudeY: 10,
    floatSpeedX: 0.013,
    floatSpeedY: 0.018,
    bankAmplitude: 4.5,
    bankSpeed: 0.015,
    breathAmplitude: 0.012,
    breathSpeed: 0.02,
    vibrationAmplitude: 0.35,
    vibrationSpeed: 0.85,
    mouseStrengthX: 14,
    mouseStrengthY: 9,
    mouseSmoothing: 0.08,
  },

  physics: {
    /** Scroll progress damping — higher = snappier. */
    progressSmoothing: 0.07,
    /** Heading / bank smoothing. */
    headingSmoothing: 0.14,
    bankSmoothing: 0.06,
    /** Max bank / pitch during cruise (degrees). */
    maxBank: 18,
    maxPitch: 8,
    /** Idle → flight blend window on scroll progress. */
    idleBlend: 0.08,
    /** Final approach window where speed/bank settle. */
    approachWindow: 0.18,
    turbulence: 1.4,
  },

  scroll: {
    /** ScrollTrigger mapping from Hero → About. */
    start: "top top",
    end: "bottom center",
    scrub: 1.15,
  },

  intro: {
    duration: 1.8,
    fromX: 120,
    fromY: -80,
    fromRotate: -16,
    fromScale: 0.88,
  },
} as const;

export type FlightConfig = typeof FLIGHT;
