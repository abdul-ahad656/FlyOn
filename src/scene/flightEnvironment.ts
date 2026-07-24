// src/scene/flightEnvironment.ts
// Subtle environment + camera offsets driven by aircraft state.

import gsap from "gsap";

import { lerp } from "./helpers";
import { FLIGHT } from "./flightConfig";
import type { FlightEnvironmentOffsets } from "./flightRuntime";
import type { FlightPhase } from "./flightPhysics";

export const computeEnvironmentOffsets = (opts: {
  flightMix: number;
  landMix: number;
  velocity: number;
  phase: FlightPhase;
  time: number;
}): FlightEnvironmentOffsets => {
  const { flightMix, landMix, velocity, time } = opts;
  const env = FLIGHT.environment;
  const cam = FLIGHT.camera;

  const active = flightMix * (1 - landMix * 0.6);
  const vel = Math.min(velocity * 14, 1);

  const cloudShiftX =
    active * env.cloudStrengthX * vel +
    Math.sin(time * 0.008) * env.cloudIdleDrift * (1 - flightMix);

  const cloudShiftY =
    active * env.cloudStrengthY * vel * 0.6 +
    Math.cos(time * 0.006) * env.cloudIdleDrift * 0.4 * (1 - flightMix);

  const heroBgShiftX = active * cam.heroBgParallaxX * vel;
  const heroBgShiftY = active * cam.heroBgParallaxY * vel;

  const heroGlowShiftX = active * env.glowStrengthX * vel;
  const heroGlowShiftY = active * env.glowStrengthY * vel;

  const aboutGlowShiftY =
    lerp(0, env.aboutGlowLift * vel, landMix) +
    active * env.aboutGlowFollow * 0.3;

  const particleDrift = active * env.particleDrift * vel;

  const heroContentShiftX = active * cam.heroContentShiftX * vel;
  const heroContentShiftY =
    active * cam.heroContentShiftY * vel -
    landMix * cam.heroContentSettle * 0.3;

  const aboutLiftY =
    lerp(0, cam.aboutLiftY, landMix) +
    active * cam.aboutLiftFollow * vel * -1;

  return {
    cloudShiftX,
    cloudShiftY,
    heroBgShiftX,
    heroBgShiftY,
    heroGlowShiftX,
    heroGlowShiftY,
    aboutGlowShiftY,
    particleDrift,
    heroContentShiftX,
    heroContentShiftY,
    aboutLiftY,
  };
};

export type EnvironmentTargets = {
  heroContent: HTMLElement | null;
  heroBg: HTMLElement | null;
  heroGlow: HTMLElement | null;
  aboutContainer: HTMLElement | null;
  aboutGlows: HTMLElement[];
  particles: HTMLElement[];
  clouds: HTMLElement[];
};

export const queryEnvironmentTargets = (): EnvironmentTargets => {
  const hero = document.getElementById("home");
  const about = document.getElementById("about");

  return {
    heroContent: hero?.querySelector(".flight-env-hero-content") ?? null,
    heroBg: hero?.querySelector(".flight-env-hero-bg") ?? null,
    heroGlow: hero?.querySelector(".hero-glow") ?? null,
    aboutContainer: about?.querySelector(".flight-env-about-content") ?? null,
    aboutGlows: about
      ? Array.from(about.querySelectorAll(".about-glow"))
      : [],
    particles: hero
      ? Array.from(hero.querySelectorAll(".flight-env-particle"))
      : [],
    clouds: hero
      ? Array.from(hero.querySelectorAll(".flight-env-cloud"))
      : [],
  };
};

/** Apply environment offsets each tick. Cloud/glow flight drift is composed in useHeroScene. */
export const applyEnvironmentOffsets = (
  targets: EnvironmentTargets,
  offsets: FlightEnvironmentOffsets
) => {
  if (targets.heroContent) {
    gsap.set(targets.heroContent, {
      x: offsets.heroContentShiftX,
      y: offsets.heroContentShiftY,
      force3D: true,
    });
  }

  if (targets.heroBg) {
    gsap.set(targets.heroBg, {
      x: offsets.heroBgShiftX,
      y: offsets.heroBgShiftY,
      force3D: true,
    });
  }

  if (targets.aboutContainer) {
    gsap.set(targets.aboutContainer, {
      y: offsets.aboutLiftY,
      force3D: true,
    });
  }

  targets.aboutGlows.forEach((el, i) => {
    const factor = 0.6 + i * 0.15;
    gsap.set(el, {
      y: offsets.aboutGlowShiftY * factor,
      force3D: true,
    });
  });

  if (Math.abs(offsets.particleDrift) > 0.01) {
    targets.particles.forEach((el, i) => {
      const drift = offsets.particleDrift * (0.5 + (i % 5) * 0.1);
      gsap.set(el, {
        x: drift * 0.3,
        y: drift * -0.15,
        force3D: true,
      });
    });
  }
};
