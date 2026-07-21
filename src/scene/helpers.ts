export const lerp = (
  start: number,
  end: number,
  amount: number
) => start + (end - start) * amount;

export const clamp = (
  value: number,
  min: number,
  max: number
) => Math.min(max, Math.max(min, value));

export const mapRange = (
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
) =>
  ((value - inMin) * (outMax - outMin)) /
    (inMax - inMin) +
  outMin;