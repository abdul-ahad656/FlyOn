// src/scene/flightTickExtensions.ts
// Registry for post-physics tick hooks — keeps a single GSAP ticker.

import type { EnhancedMotion } from "./flightDynamics";
import type { FlightEnvironmentOffsets } from "./flightRuntime";

export interface FlightTickContext {
  time: number;
  progress: number;
  motion: EnhancedMotion;
  environment: FlightEnvironmentOffsets;
  trailOpacity: number;
}

type FlightTickExtension = (ctx: FlightTickContext) => void;

const extensions = new Set<FlightTickExtension>();

export const registerFlightTickExtension = (
  fn: FlightTickExtension
): (() => void) => {
  extensions.add(fn);
  return () => extensions.delete(fn);
};

export const runFlightTickExtensions = (ctx: FlightTickContext) => {
  extensions.forEach((fn) => fn(ctx));
};
