"use client";

import {
  useFrame,
} from "@react-three/fiber";

import {
  RefObject,
} from "react";

import {
  Group,
} from "three";

interface Props {
  groupRef: RefObject<Group | null>;

  index: number;
}

const useDestinationFloating = ({
  groupRef,
  index,
}: Props) => {
  useFrame(({ clock }) => {
    if (!groupRef.current) return;

    const time =
      clock.getElapsedTime();

    const offset =
      index * 1.37;

    groupRef.current.position.y +=
      Math.sin(time * 0.35 + offset) *
      0.0008;

    groupRef.current.rotation.z +=
      Math.sin(time * 0.22 + offset) *
      0.00008;

    groupRef.current.rotation.x =
      Math.sin(time * 0.18 + offset) *
      0.006;
  });
};

export default useDestinationFloating;