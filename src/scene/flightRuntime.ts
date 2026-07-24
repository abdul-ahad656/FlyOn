// src/scene/flightRuntime.ts
// Mutable runtime bus — written by FlightDirector, read by environment hooks.
// No React state; zero rerenders.

import type { FlightPhase, FlightSample } from "./flightPhysics";

export interface FlightEnvironmentOffsets {
  cloudShiftX: number;
  cloudShiftY: number;
  heroBgShiftX: number;
  heroBgShiftY: number;
  heroGlowShiftX: number;
  heroGlowShiftY: number;
  aboutGlowShiftY: number;
  particleDrift: number;
  heroContentShiftX: number;
  heroContentShiftY: number;
  aboutLiftY: number;
}

export interface FlightRuntime {
  sample: FlightSample | null;
  velocity: number;
  smoothVelocity: number;
  phase: FlightPhase;
  flightMix: number;
  landMix: number;
  engineGlow: number;
  trailOpacity: number;
  environment: FlightEnvironmentOffsets;
}

const defaultEnvironment = (): FlightEnvironmentOffsets => ({
  cloudShiftX: 0,
  cloudShiftY: 0,
  heroBgShiftX: 0,
  heroBgShiftY: 0,
  heroGlowShiftX: 0,
  heroGlowShiftY: 0,
  aboutGlowShiftY: 0,
  particleDrift: 0,
  heroContentShiftX: 0,
  heroContentShiftY: 0,
  aboutLiftY: 0,
});

export const flightRuntime: FlightRuntime = {
  sample: null,
  velocity: 0,
  smoothVelocity: 0,
  phase: "idle",
  flightMix: 0,
  landMix: 0,
  engineGlow: 0,
  trailOpacity: 0,
  environment: defaultEnvironment(),
};

export const resetFlightRuntime = () => {
  flightRuntime.sample = null;
  flightRuntime.velocity = 0;
  flightRuntime.smoothVelocity = 0;
  flightRuntime.phase = "idle";
  flightRuntime.flightMix = 0;
  flightRuntime.landMix = 0;
  flightRuntime.engineGlow = 0;
  flightRuntime.trailOpacity = 0;
  flightRuntime.environment = defaultEnvironment();
};

export const publishFlightRuntime = (partial: Partial<FlightRuntime>) => {
  Object.assign(flightRuntime, partial);
};
