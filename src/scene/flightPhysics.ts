// src/scene/flightPhysics.ts
// Pure math for the global flight path — no DOM, no GSAP.

import { cubicBezier, type Point } from "./bezier";
import { clamp, lerp } from "./helpers";
import { FLIGHT } from "./flightConfig";

export type FlightPhase = "idle" | "flying" | "landing" | "landed";

export interface FlightSample {
  x: number;
  y: number;
  rotation: number;
  bank: number;
  pitch: number;
  scale: number;
  /** 0 idle → 1 full cruise influence. */
  flightMix: number;
  /** 0 approach start → 1 touched down. */
  landMix: number;
  phase: FlightPhase;
  trailX: number;
  trailY: number;
}

export interface IdleSample {
  x: number;
  y: number;
  bank: number;
  scale: number;
  vibrate: number;
}

/** Aircraft-style ease: accelerate, cruise, decelerate into landing. */
export const flightEase = (t: number): number => {
  const p = clamp(t, 0, 1);

  if (p < 0.35) {
    const u = p / 0.35;
    return 0.4 * u * u;
  }

  const u = (p - 0.35) / 0.65;
  // Stronger ease-out into the gate
  return 0.4 + 0.6 * (1 - Math.pow(1 - u, 2.6));
};

/** Build a cubic path between live start/end (viewport space). */
export const buildFlightPath = (
  start: Point,
  end: Point,
  vw: number,
  vh: number
): [Point, Point, Point, Point] => {
  const c1 = {
    x: start.x + (end.x - start.x) * 0.22 + vw * FLIGHT.path.c1.x,
    y: start.y + (end.y - start.y) * 0.12 + vh * FLIGHT.path.c1.y,
  };

  const c2 = {
    x: start.x + (end.x - start.x) * 0.68 + vw * FLIGHT.path.c2.x,
    y: start.y + (end.y - start.y) * 0.55 + vh * FLIGHT.path.c2.y,
  };

  return [start, c1, c2, end];
};

export const sampleBezier = (
  t: number,
  path: [Point, Point, Point, Point]
): Point => cubicBezier(t, path[0], path[1], path[2], path[3]);

/** Tangent heading in degrees at progress t. */
export const sampleHeading = (
  t: number,
  path: [Point, Point, Point, Point]
): { angle: number; dx: number; dy: number } => {
  const t0 = clamp(t, 0, 0.999);
  const t1 = clamp(t + 0.004, 0.001, 1);
  const a = sampleBezier(t0, path);
  const b = sampleBezier(t1, path);
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  return {
    angle: (Math.atan2(dy, dx) * 180) / Math.PI,
    dx,
    dy,
  };
};

export const getIdleMotion = (time: number): IdleSample => {
  const m = FLIGHT.motion;

  return {
    x: Math.cos(time * m.floatSpeedX) * m.floatAmplitudeX,
    y: Math.sin(time * m.floatSpeedY) * m.floatAmplitudeY,
    bank: Math.sin(time * m.bankSpeed) * m.bankAmplitude,
    scale: 1 + Math.sin(time * m.breathSpeed) * m.breathAmplitude,
    vibrate: Math.sin(time * m.vibrationSpeed) * m.vibrationAmplitude,
  };
};

export const getFlightPhase = (progress: number): FlightPhase => {
  if (progress <= 0.02) return "idle";
  if (progress >= 0.98) return "landed";
  if (progress >= 1 - FLIGHT.physics.approachWindow) return "landing";
  return "flying";
};

let _smoothHeading = FLIGHT.start.rotation;
let _smoothBank = 0;

export const resetFlightPhysics = () => {
  _smoothHeading = FLIGHT.start.rotation;
  _smoothBank = 0;
};

/**
 * Resolve plane centre pose for a given scroll progress.
 * `start` / `end` are viewport-space centres from getBoundingClientRect.
 */
export const getFlightSample = (opts: {
  progress: number;
  time: number;
  start: Point;
  end: Point;
  planeWidth: number;
  planeHeight: number;
  mouseX: number;
  mouseY: number;
}): FlightSample => {
  const { progress, time, start, end, planeWidth, planeHeight, mouseX, mouseY } =
    opts;

  const vw = typeof window !== "undefined" ? window.innerWidth : 1280;
  const vh = typeof window !== "undefined" ? window.innerHeight : 800;

  const path = buildFlightPath(start, end, vw, vh);
  const eased = flightEase(progress);
  const pos = sampleBezier(eased, path);
  const { angle, dx, dy } = sampleHeading(eased, path);

  // Smooth heading (unwrap)
  let delta = angle - _smoothHeading;
  if (delta > 180) delta -= 360;
  if (delta < -180) delta += 360;
  _smoothHeading += delta * FLIGHT.physics.headingSmoothing;

  const flightMix = clamp(progress / FLIGHT.physics.idleBlend, 0, 1);
  const landMix = clamp(
    (progress - (1 - FLIGHT.physics.approachWindow)) /
      FLIGHT.physics.approachWindow,
    0,
    1
  );

  // Bank from lateral velocity; bleed off on approach
  const rawBank = clamp(dx * 90, -FLIGHT.physics.maxBank, FLIGHT.physics.maxBank);
  const targetBank = lerp(rawBank, 0, landMix) * flightMix;
  _smoothBank += (targetBank - _smoothBank) * FLIGHT.physics.bankSmoothing;

  const rawPitch = clamp(
    dy * 60,
    -FLIGHT.physics.maxPitch,
    FLIGHT.physics.maxPitch
  );
  const pitch = lerp(rawPitch, 0, landMix) * flightMix;

  const idle = getIdleMotion(time);
  const idleMix = 1 - flightMix;

  const turb =
    FLIGHT.physics.turbulence *
    flightMix *
    (1 - landMix) *
    (0.6 + 0.4 * Math.sin(time * 0.09));

  const turbX = Math.sin(time * 0.11) * turb;
  const turbY = Math.cos(time * 0.17) * turb * 0.85;

  // Landing settle + soft bounce
  let bounce = 0;
  const bounceWindow = FLIGHT.landing.bounceWindow;
  if (progress > 1 - bounceWindow) {
    const u = (progress - (1 - bounceWindow)) / bounceWindow;
    bounce =
      Math.sin(u * Math.PI) *
      FLIGHT.landing.bounceAmplitude *
      (1 - u);
  }

  const scale = lerp(
    FLIGHT.start.scale,
    FLIGHT.landing.scale,
    eased
  );

  const centreX =
    pos.x +
    idle.x * idleMix +
    mouseX * FLIGHT.motion.mouseStrengthX * idleMix +
    turbX +
    idle.vibrate * idleMix;

  const centreY =
    pos.y +
    idle.y * idleMix +
    mouseY * FLIGHT.motion.mouseStrengthY * idleMix +
    turbY -
    bounce;

  const rotation = lerp(
    FLIGHT.start.rotation + idle.bank * idleMix,
    lerp(_smoothHeading, FLIGHT.landing.rotation, landMix),
    flightMix
  );

  const bank = _smoothBank + idle.bank * idleMix;
  const finalScale = scale * lerp(idle.scale, 1, flightMix);

  // Top-left for GSAP (fixed layer origin 0,0)
  const x = centreX - planeWidth / 2;
  const y = centreY - planeHeight / 2;

  // Tail attachment (right side of right-facing SVG)
  const trailX = x + planeWidth * 0.88;
  const trailY = y + planeHeight * 0.5;

  return {
    x,
    y,
    rotation,
    bank,
    pitch,
    scale: finalScale,
    flightMix,
    landMix,
    phase: getFlightPhase(progress),
    trailX,
    trailY,
  };
};

/** Measure start centre from the Hero section using config ratios. */
export const measureHeroStart = (
  heroEl: HTMLElement
): Point => {
  const rect = heroEl.getBoundingClientRect();
  return {
    x: rect.left + rect.width * FLIGHT.start.x,
    y: rect.top + rect.height * FLIGHT.start.y,
  };
};

/** Landing centre: target rect + hover offset above it. */
export const measureLandingCentre = (
  targetEl: HTMLElement,
  planeHeight: number
): Point => {
  const rect = targetEl.getBoundingClientRect();
  return {
    x: rect.left + rect.width / 2,
    y:
      rect.top +
      rect.height / 2 -
      planeHeight * FLIGHT.landing.hoverOffsetY,
  };
};
