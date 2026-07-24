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
  /** Engine glow intensity 0–1. */
  engineGlow: number;
}

export interface IdleSample {
  x: number;
  y: number;
  bank: number;
  scale: number;
  vibrate: number;
}

/** Document Y → viewport Y for `position: fixed` transforms. */
export const documentToViewport = (point: Point): Point => ({
  x: point.x,
  y: point.y - (typeof window !== "undefined" ? window.scrollY : 0),
});

/** Aircraft-style ease: accelerate, cruise, decelerate into landing. */
export const flightEase = (t: number): number => {
  const p = clamp(t, 0, 1);

  if (p < 0.35) {
    const u = p / 0.35;
    return 0.4 * u * u;
  }

  const u = (p - 0.35) / 0.65;
  return 0.4 + 0.6 * (1 - Math.pow(1 - u, 2.6));
};

/**
 * Build a cubic path in document space between start and end.
 * Handles are chord-relative so the arc stays on-screen.
 */
export const buildFlightPath = (
  start: Point,
  end: Point
): [Point, Point, Point, Point] => {
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const len = Math.hypot(dx, dy) || 1;

  // Perpendicular unit vector — positive arc bows left of the flight direction
  const nx = -dy / len;
  const ny = dx / len;
  const arc = len * 0.18;

  const c1 = {
    x: start.x + dx * 0.18 + nx * arc * FLIGHT.path.arc1,
    y: start.y + dy * 0.12 + ny * arc * FLIGHT.path.arc1,
  };

  const c2 = {
    x: start.x + dx * 0.72 + nx * arc * FLIGHT.path.arc2,
    y: start.y + dy * 0.62 + ny * arc * FLIGHT.path.arc2,
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
 * Resolve plane pose for scroll progress.
 * Path is computed in document space (stable while scrolling),
 * then converted to viewport space for the fixed plane layer.
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

  const path = buildFlightPath(start, end);
  const eased = flightEase(progress);
  const pos = sampleBezier(eased, path);
  const { angle, dx, dy } = sampleHeading(eased, path);

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

  const isLanded = progress >= 0.98;
  const isApproach = landMix > 0;

  let landingOffsetY = 0;
  const { overshootAmplitude, overshootWindow, bounceAmplitude, bounceWindow } =
    FLIGHT.landing;

  if (isApproach && !isLanded) {
    const overshootStart = 1 - overshootWindow - bounceWindow;

    if (progress > overshootStart && progress <= overshootStart + overshootWindow) {
      const u =
        (progress - overshootStart) / Math.max(overshootWindow, 0.0001);
      landingOffsetY = Math.sin(u * Math.PI * 0.5) * overshootAmplitude;
    } else if (progress > overshootStart + overshootWindow) {
      const u =
        (progress - overshootStart - overshootWindow) /
        Math.max(bounceWindow, 0.0001);
      landingOffsetY =
        overshootAmplitude * (1 - u) +
        Math.sin(u * Math.PI) * bounceAmplitude * (1 - u);
    }
  }

  const scale = lerp(FLIGHT.start.scale, FLIGHT.landing.scale, eased);

  const centreDoc = {
    x:
      pos.x +
      idle.x * idleMix * (isLanded ? 0 : 1) +
      mouseX * FLIGHT.motion.mouseStrengthX * idleMix +
      turbX +
      idle.vibrate * idleMix,
    y:
      pos.y +
      idle.y * idleMix * (isLanded ? 0 : 1) +
      mouseY * FLIGHT.motion.mouseStrengthY * idleMix +
      turbY +
      landingOffsetY,
  };

  const centre = documentToViewport(centreDoc);

  const rotation = lerp(
    FLIGHT.start.rotation + idle.bank * idleMix,
    lerp(_smoothHeading, FLIGHT.landing.rotation, landMix),
    flightMix
  );

  const bank = (_smoothBank + idle.bank * idleMix) * (isLanded ? 0 : 1);
  const finalScale = scale * lerp(idle.scale, 1, flightMix);

  const engineGlow = isLanded
    ? 0
    : clamp(1 - landMix * 1.15, 0, 1) * flightMix;

  const x = centre.x - planeWidth / 2;
  const y = centre.y - planeHeight / 2;

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
    engineGlow,
  };
};

/** Hero idle origin in document space (stable on the page). */
export const measureHeroStart = (heroEl: HTMLElement): Point => {
  const rect = heroEl.getBoundingClientRect();
  const scrollY = window.scrollY;

  const xRatio =
    window.innerWidth < 640
      ? 0.55
      : window.innerWidth < 1024
        ? 0.62
        : FLIGHT.start.x;

  return {
    x: rect.left + rect.width * xRatio,
    y: rect.top + scrollY + rect.height * FLIGHT.start.y,
  };
};

/** Landing aim point in document space (stable on the page). */
export const measureLandingCentre = (
  targetEl: HTMLElement,
  planeHeight: number
): Point => {
  const rect = targetEl.getBoundingClientRect();
  const scrollY = window.scrollY;

  return {
    x: rect.left + rect.width / 2,
    y:
      rect.top +
      scrollY +
      rect.height / 2 -
      planeHeight * FLIGHT.landing.hoverOffsetY,
  };
};
