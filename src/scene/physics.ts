// src/scene/physics.ts

import { cubicBezier } from "./bezier";
import { HERO_SCENE } from "./config";

export interface PlaneState {
  x: number;
  y: number;
  rotation: number;
  bank: number;
}

const PLANE_WIDTH = 430;
const PLANE_HEIGHT = 180;

export const getPlaneState = (time: number): PlaneState => {
  const path = HERO_SCENE.flight.path;

  // Smooth looping progress
  const t = (time * HERO_SCENE.flight.speed) % 1;

  // Current position
  const current = cubicBezier(
    t,
    path[0],
    path[1],
    path[2],
    path[3]
  );

  // Slightly ahead to calculate heading
  const next = cubicBezier(
    Math.min(t + 0.002, 1),
    path[0],
    path[1],
    path[2],
    path[3]
  );

  // Flight direction
  const angle =
    Math.atan2(
      next.y - current.y,
      next.x - current.x
    ) *
    (180 / Math.PI);

  // Gentle hovering
  const floatY = Math.sin(time * 1.8) * 8;
  const floatX = Math.cos(time * 1.2) * 4;

  // Gentle banking
  const bank = Math.sin(time * 2) * 3;

  return {
    x: current.x - PLANE_WIDTH / 2 + floatX,
    y: current.y - PLANE_HEIGHT / 2 + floatY,
    rotation: angle,
    bank,
  };
};