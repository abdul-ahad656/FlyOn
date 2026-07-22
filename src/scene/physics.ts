// src/scene/physics.ts

import { cubicBezier } from "./bezier";
import { HERO_SCENE } from "./config";

export interface PlaneState {
  x: number;
  y: number;
  rotation: number;
  bank: number;
  // Rear-engine attachment point in DOM pixels (for trail)
  trailX: number;
  trailY: number;
}

// Match the CSS class w-[410px] in Plane.tsx
export const PLANE_WIDTH = 410;
export const PLANE_HEIGHT = 170;

// Tracks previous heading for smooth banking interpolation
let _prevAngle = 0;
let _smoothBank = 0;

export const getPlaneState = (time: number): PlaneState => {
  const path = HERO_SCENE.flight.path;

  // Smooth looping progress
  const t = (time * HERO_SCENE.flight.speed) % 1;

  // Position slightly ahead used for heading
  const tAhead = Math.min(t + 0.003, 0.9999);

  // Current bezier position (centre of the plane)
  const current = cubicBezier(t, path[0], path[1], path[2], path[3]);
  const next    = cubicBezier(tAhead, path[0], path[1], path[2], path[3]);

  // Flight heading angle in degrees
  const dx = next.x - current.x;
  const dy = next.y - current.y;
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);

  // Smooth the angle change for cinematic rotation
  let delta = angle - _prevAngle;
  // Wrap delta to [-180, 180]
  if (delta > 180)  delta -= 360;
  if (delta < -180) delta += 360;
  _prevAngle += delta * 0.12;

  // Derive banking from horizontal acceleration (dx sign + magnitude)
  // Positive dx = turning right → bank right (positive degrees)
  const targetBank = Math.max(-10, Math.min(10, dx * 120));
  _smoothBank += (targetBank - _smoothBank) * 0.04;

  // Gentle atmospheric float (reduced amplitude)
  const floatY = Math.sin(time * 0.018) * 6;
  const floatX = Math.cos(time * 0.013) * 3;

  // Top-left corner of the plane div (GSAP x/y = CSS translate offset)
  const posX = current.x - PLANE_WIDTH  / 2 + floatX;
  const posY = current.y - PLANE_HEIGHT / 2 + floatY;

  // Rear of the plane (left edge of the image + small inset for engine)
  // Plane flies right-to-left visually; the tail is on the right end of the SVG.
  // For a right-facing plane the rear is approximately at (posX, posY + PLANE_HEIGHT/2).
  const trailX = posX + PLANE_WIDTH * 0.88;
  const trailY = posY + PLANE_HEIGHT * 0.50;

  return {
    x: posX,
    y: posY,
    rotation: _prevAngle,
    bank: _smoothBank,
    trailX,
    trailY,
  };
};