// src/scene/flightDynamics.ts
// Velocity, damping, momentum, and micro-motion layer on top of flightPhysics.

import { clamp } from "./helpers";
import { FLIGHT } from "./flightConfig";
import type { FlightSample } from "./flightPhysics";

export interface DynamicsState {
  smoothVelocity: number;
  smoothPitch: number;
  smoothBank: number;
  prevProgress: number;
}

export interface EnhancedMotion {
  sample: FlightSample;
  velocity: number;
  wingVibration: number;
  engineVibration: number;
  engineGlow: number;
  engineScale: number;
}

export const createDynamicsState = (): DynamicsState => ({
  smoothVelocity: 0,
  smoothPitch: 0,
  smoothBank: 0,
  prevProgress: 0,
});

export const resetDynamicsState = (state: DynamicsState) => {
  state.smoothVelocity = 0;
  state.smoothPitch = 0;
  state.smoothBank = 0;
  state.prevProgress = 0;
};

/**
 * Adds velocity interpolation, damping, momentum, and micro-vibrations.
 */
export const enhanceFlightMotion = (
  state: DynamicsState,
  sample: FlightSample,
  progress: number,
  time: number
): EnhancedMotion => {
  const d = FLIGHT.dynamics;

  const rawVelocity = Math.abs(progress - state.prevProgress);
  state.prevProgress = progress;

  state.smoothVelocity +=
    (rawVelocity - state.smoothVelocity) * d.velocityDamping;

  const velocity = state.smoothVelocity;
  const accelBoost = clamp(velocity / d.accelReference, 0, 1);
  const cruiseFactor = sample.flightMix * (1 - sample.landMix * 0.85);

  state.smoothPitch +=
    (sample.pitch - state.smoothPitch) * d.pitchDamping;
  state.smoothBank +=
    (sample.bank - state.smoothBank) * d.bankDamping;

  const wingVibration =
    Math.sin(time * d.wingFrequency) *
    d.wingAmplitude *
    cruiseFactor *
    (0.35 + velocity * 8);

  const engineVibration =
    Math.sin(time * d.engineFrequency) *
    d.engineAmplitude *
    (sample.phase === "idle"
      ? 0.4 + Math.sin(time * 0.04) * 0.15
      : cruiseFactor * (0.5 + accelBoost * 0.5));

  const idleBreath =
    sample.phase === "idle"
      ? 0.42 + Math.sin(time * d.idleGlowSpeed) * d.idleGlowBreath
      : 0;

  const cruiseGlow = cruiseFactor * (0.55 + accelBoost * d.accelGlowBoost);
  const landingFade =
    sample.landMix > 0
      ? clamp(1 - sample.landMix * d.landingGlowFade, 0, 1)
      : 1;

  const engineGlow = clamp(
    (idleBreath + cruiseGlow) * landingFade,
    0,
    1
  );

  const engineScale =
    sample.phase === "idle"
      ? 1 + Math.sin(time * d.idleGlowSpeed) * 0.18
      : 1 + accelBoost * 0.35 * cruiseFactor;

  const microX = wingVibration * 0.35 + engineVibration * 0.25;
  const microY = engineVibration * 0.4 + wingVibration * 0.2;

  const enhancedSample: FlightSample = {
    ...sample,
    x: sample.x + microX,
    y: sample.y + microY,
    pitch: state.smoothPitch,
    bank: state.smoothBank,
    engineGlow,
  };

  return {
    sample: enhancedSample,
    velocity,
    wingVibration,
    engineVibration,
    engineGlow,
    engineScale,
  };
};

/** Attitude with damped bank / pitch and subtle wing flex. */
export const composeAttitude = (
  motion: EnhancedMotion
): number => {
  const { sample, wingVibration } = motion;
  return (
    sample.rotation +
    sample.bank * FLIGHT.dynamics.bankVisualWeight +
    sample.pitch * FLIGHT.dynamics.pitchVisualWeight +
    wingVibration * 0.12
  );
};

/** Momentum-based scale nudge during acceleration. */
export const composeScale = (
  motion: EnhancedMotion
): number => {
  const boost =
    1 + motion.velocity * FLIGHT.dynamics.accelScaleBoost * motion.sample.flightMix;
  return motion.sample.scale * clamp(boost, 1, 1.04);
};
