// src/scene/flightTrail.ts
// Dynamic contrail path builder — smooth curves, turbulence wave, progressive draw.

import { FLIGHT } from "./flightConfig";

export interface TrailPoint {
  x: number;
  y: number;
}

/** Smooth quadratic path through trail history with subtle turbulence wave. */
export const buildContrailPath = (
  points: TrailPoint[],
  time: number,
  velocity: number,
  flightMix: number
): string => {
  if (points.length < 2) return "";

  const waveAmp =
    FLIGHT.trail.waveAmplitude *
    flightMix *
    (0.4 + Math.min(velocity * 12, 1) * 0.6);

  const waved: TrailPoint[] = points.map((p, i) => {
    const t = i / Math.max(points.length - 1, 1);
    const fade = t * t;
    return {
      x: p.x + Math.sin(time * 0.09 + i * 0.45) * waveAmp * fade,
      y: p.y + Math.cos(time * 0.11 + i * 0.38) * waveAmp * 0.7 * fade,
    };
  });

  if (waved.length === 2) {
    return `M ${waved[0].x.toFixed(1)} ${waved[0].y.toFixed(1)} L ${waved[1].x.toFixed(1)} ${waved[1].y.toFixed(1)}`;
  }

  let path = `M ${waved[0].x.toFixed(1)} ${waved[0].y.toFixed(1)}`;

  for (let i = 1; i < waved.length - 1; i++) {
    const curr = waved[i];
    const next = waved[i + 1];
    const cpx = curr.x;
    const cpy = curr.y;
    const midX = (curr.x + next.x) / 2;
    const midY = (curr.y + next.y) / 2;
    path += ` Q ${cpx.toFixed(1)} ${cpy.toFixed(1)} ${midX.toFixed(1)} ${midY.toFixed(1)}`;
  }

  const last = waved[waved.length - 1];
  const prev = waved[waved.length - 2];
  path += ` Q ${prev.x.toFixed(1)} ${prev.y.toFixed(1)} ${last.x.toFixed(1)} ${last.y.toFixed(1)}`;

  return path;
};

export const computeTrailOpacity = (
  baseOpacity: number,
  flightMix: number,
  landMix: number,
  phase: string
): number => {
  if (phase === "idle") return 0;

  if (landMix >= 0.5 || phase === "landed") {
    return baseOpacity * clampFade(1 - landMix * 1.2);
  }

  return baseOpacity * flightMix * FLIGHT.trail.opacity;
};

const clampFade = (v: number) => Math.max(0, Math.min(1, v));

export const shouldDrawTrail = (
  flightMix: number,
  landMix: number
): boolean => flightMix > 0.05 && landMix < 0.92;

export const fadeTrailOpacity = (current: number): number =>
  current + (0 - current) * FLIGHT.trail.fadeRate;
