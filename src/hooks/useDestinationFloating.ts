"use client";

import { useFrame } from "@react-three/fiber";
import type { RefObject } from "react";
import type { Group } from "three";

interface Props {
  groupRef: RefObject<Group | null>;

  index: number;

  basePosition: [
    number,
    number,
    number
  ];

  baseRotation: [
    number,
    number,
    number
  ];
}

const useDestinationFloating = ({
  groupRef,
  index,
  basePosition,
  baseRotation,
}: Props) => {
  useFrame(({ clock }) => {
    const group = groupRef.current;

    if (!group) return;

    const time =
      clock.getElapsedTime();

    const offset = index * 1.37;

    /*
     * Floating
     */
    group.position.y =
      basePosition[1] +
      Math.sin(
        time * 0.35 + offset
      ) *
        0.08;

    /*
     * Gentle X rotation
     */
    group.rotation.x =
      baseRotation[0] +
      Math.sin(
        time * 0.18 + offset
      ) *
        0.006;

    /*
     * Gentle Z rotation
     */
    group.rotation.z =
      baseRotation[2] +
      Math.sin(
        time * 0.22 + offset
      ) *
        0.008;
  });
};

export default useDestinationFloating;