"use client";

import { useFrame } from "@react-three/fiber";
import type { RefObject } from "react";
import type { Group } from "three";

interface Props {
  groupRef: RefObject<Group | null>;

  index: number;

  basePosition: [number, number, number];

  baseRotation: [number, number, number];
}

/**
 * Adds subtle procedural floating motion to a destination card.
 *
 * Important:
 * The animation is calculated from the original transform every frame.
 * This prevents positional/rotational drift caused by accumulating values.
 */
const useDestinationFloating = ({
  groupRef,
  index,
  basePosition,
  baseRotation,
}: Props) => {
  useFrame(({ clock }) => {
    const group = groupRef.current;

    if (!group) return;

    const time = clock.getElapsedTime();

    /**
     * Unique phase offset per destination.
     * This prevents every card from moving in sync.
     */
    const offset = index * 1.37;

    /**
     * Very slow vertical floating.
     */
    const floatingY =
      Math.sin(time * 0.35 + offset) * 0.035;

    /**
     * Extremely subtle rotational movement.
     */
    const rotationX =
      Math.sin(time * 0.18 + offset) * 0.006;

    const rotationY =
      Math.cos(time * 0.15 + offset) * 0.004;

    const rotationZ =
      Math.sin(time * 0.22 + offset) * 0.006;

    /**
     * Calculate from the original transform.
     * Never use += here.
     */
    group.position.set(
      basePosition[0],
      basePosition[1] + floatingY,
      basePosition[2]
    );

    group.rotation.set(
      baseRotation[0] + rotationX,
      baseRotation[1] + rotationY,
      baseRotation[2] + rotationZ
    );
  });
};

export default useDestinationFloating;