// src/scene/config.ts

export const HERO_SCENE = {
  plane: {
    // Floating motion
    amplitudeX: 22,
    amplitudeY: 10,

    // Floating speed
    speed: 0.008,

    // Maximum bank angle
    rotation: 8,

    // Gentle breathing scale
    scale: 0.015,

    // Mouse influence
    mouseStrength: 0.08,
  },

  glow: {
    mouseStrength: 18,
    pulseSpeed: 2.4,
    pulseScale: 1.05,
  },

  clouds: [
    {
      speed: 0.12,
      amplitude: 14,
      parallax: 0.10,
    },
    {
      speed: 0.08,
      amplitude: 18,
      parallax: 0.16,
    },
    {
      speed: 0.15,
      amplitude: 12,
      parallax: 0.08,
    },
  ],

  trail: {
    speed: 1,
  },

  flight: {
    // VERY IMPORTANT
    speed: 0.003,

    // Designed for a ~700px hero scene
    path: [
      { x: 540, y: 380 },
      { x: 500, y: 250 },
      { x: 330, y: 180 },
      { x: 180, y: 280 },
    ],
  },
};