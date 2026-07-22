// src/scene/config.ts

export const HERO_SCENE = {
  plane: {
    // Floating motion
    amplitudeX: 18,
    amplitudeY: 8,

    // Floating speed
    speed: 0.007,

    // Maximum bank angle
    rotation: 6,

    // Gentle breathing scale
    scale: 0.012,

    // Mouse influence (reduced ~50% from original)
    mouseStrength: 0.04,
  },

  glow: {
    // Reduced mouse drift — feels atmospheric not chasing
    mouseStrength: 8,
    pulseSpeed: 3.2,
    pulseScale: 1.04,
  },

  clouds: [
    {
      speed: 0.10,
      amplitude: 10,
      parallax: 0.05,
    },
    {
      speed: 0.07,
      amplitude: 14,
      parallax: 0.08,
    },
    {
      speed: 0.12,
      amplitude: 9,
      parallax: 0.04,
    },
  ],

  trail: {
    speed: 1,
  },

  flight: {
    // Cinematic pacing — slow enough to look elegant
    speed: 0.0022,

    // Bezier path constrained to right half of a ~1280px viewport.
    // The plane div is offset by GSAP x/y from top-left of the hero.
    // x range: 620–960 keeps the plane in the right column (>50% of 1280).
    // y range: 140–460 keeps it vertically centred in the hero.
    path: [
      { x: 920, y: 300 },
      { x: 780, y: 155 },
      { x: 640, y: 230 },
      { x: 750, y: 410 },
    ],
  },
};