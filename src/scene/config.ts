// src/scene/config.ts

export const HERO_SCENE = {
  plane: {
    amplitudeX: 45,
    amplitudeY: 18,
    speed: 0.009,
    rotation: 4,
    scale: 0.03,
    mouseStrength: 0.12,
  },

  glow: {
    mouseStrength: 25,
    pulseSpeed: 2,
    pulseScale: 1.08,
  },

  clouds: [
    {
      speed: 0.18,
      amplitude: 20,
      parallax: 0.15,
    },
    {
      speed: 0.13,
      amplitude: 28,
      parallax: 0.22,
    },
    {
      speed: 0.22,
      amplitude: 16,
      parallax: 0.12,
    },
  ],

  trail: {
    speed: 2,
  },

  flight: {
    speed:0.00018,
    path:[

      {x:1300,y:520},

      {x:1100,y:300},

      {x:650,y:420},

      {x:420,y:150}

    ]

  }
};