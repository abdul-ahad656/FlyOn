// src/scene/flightConfig.ts
// Tunable tokens for the global cinematic flight system.
// Positions use viewport/section ratios — never hardcoded pixels.

export const FLIGHT = {
  /** Idle hover origin inside #home (section-relative ratios). */
  start: {
    x: 0.68,
    y: 0.38,
    rotation: -8,
    scale: 1,
  },

  /** Chord-relative arc strength (multipliers on path length). */
  path: {
    arc1: 0.35,
    arc2: -0.12,
  },

  landing: {
    rotation: 0,
    scale: 0.78,
    /** Vertical offset above the measured landing target centre (plane half-height factor). */
    hoverOffsetY: 0.1,
    /** Single overshoot past the gate before bounce settle. */
    overshootAmplitude: 16,
    overshootWindow: 0.06,
    bounceAmplitude: 8,
    bounceWindow: 0.09,
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
    maxPoints: 72,
    opacity: 0.42,
    fadeDuration: 1.4,
    fadeRate: 0.035,
    waveAmplitude: 2.2,
  },

  dynamics: {
    velocityDamping: 0.11,
    pitchDamping: 0.09,
    bankDamping: 0.07,
    accelReference: 0.016,
    accelGlowBoost: 0.42,
    landingGlowFade: 1.15,
    idleGlowSpeed: 0.032,
    idleGlowBreath: 0.14,
    wingFrequency: 0.21,
    wingAmplitude: 0.5,
    engineFrequency: 0.62,
    engineAmplitude: 0.24,
    bankVisualWeight: 0.36,
    pitchVisualWeight: 0.2,
    accelScaleBoost: 0.65,
  },

  environment: {
    cloudStrengthX: 16,
    cloudStrengthY: 9,
    cloudIdleDrift: 1.8,
    glowStrengthX: 10,
    glowStrengthY: 7,
    aboutGlowLift: -7,
    aboutGlowFollow: 5,
    particleDrift: 12,
  },

  camera: {
    heroBgParallaxX: 7,
    heroBgParallaxY: 4,
    heroContentShiftX: -5,
    heroContentShiftY: 3,
    heroContentSettle: 2.5,
    aboutLiftY: -8,
    aboutLiftFollow: 3.5,
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
    end: "top 32%",
    scrub: 0.85,
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
