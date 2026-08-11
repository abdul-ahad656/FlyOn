"use client";

import { useRef } from "react";

import {
  RoundedBox,
  Text,
  useTexture,
} from "@react-three/drei";

import type { Group, Mesh } from "three";

import type { DestinationCardData } from "../types";

import useDestinationFloating from "../../../hooks/useDestinationFloating";

interface Props {
  destination: DestinationCardData;

  position: [number, number, number];

  rotation: [number, number, number];

  scale: number;

  index: number;
}

const DestinationPlane = ({
  destination,
  position,
  rotation,
  scale,
  index,
}: Props) => {
  const groupRef = useRef<Group>(null);

  const imageRef = useRef<Mesh>(null);

  const texture = useTexture(destination.image);

  useDestinationFloating({
    groupRef,
    index,
    basePosition: position,
    baseRotation: rotation,
  });

  return (
    <group
      ref={groupRef}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      {/* ===================================================== */}
      {/* GLASS CARD                                            */}
      {/* ===================================================== */}

      <RoundedBox
        args={[3.8, 2.45, 0.08]}
        radius={0.16}
        smoothness={6}
        castShadow
        receiveShadow
      >
        <meshPhysicalMaterial
          color="#ffffff"
          roughness={0.22}
          metalness={0.05}
          transmission={0.05}
          thickness={0.2}
          transparent
          opacity={0.96}
        />
      </RoundedBox>

      {/* ===================================================== */}
      {/* DESTINATION IMAGE                                     */}
      {/* ===================================================== */}

      <mesh
        ref={imageRef}
        position={[0, 0, 0.065]}
      >
        <planeGeometry args={[3.62, 2.27]} />

        <meshBasicMaterial
          map={texture}
          toneMapped={false}
        />
      </mesh>

      {/* ===================================================== */}
      {/* CINEMATIC DARK GRADIENT                               */}
      {/* ===================================================== */}

      <mesh
        position={[0, -0.55, 0.075]}
      >
        <planeGeometry args={[3.62, 1.15]} />

        <meshBasicMaterial
          color="#020617"
          transparent
          opacity={0.58}
          depthWrite={false}
        />
      </mesh>

      {/* ===================================================== */}
      {/* DESTINATION TITLE                                     */}
      {/* ===================================================== */}

      <Text
        position={[-1.55, -0.78, 0.09]}
        anchorX="left"
        anchorY="middle"
        fontSize={0.22}
        maxWidth={2.5}
        color="#ffffff"
      >
        {destination.title}
      </Text>

      {/* ===================================================== */}
      {/* COUNTRY                                               */}
      {/* ===================================================== */}

      <Text
        position={[-1.55, -1.02, 0.09]}
        anchorX="left"
        anchorY="middle"
        fontSize={0.1}
        color="#cbd5e1"
        letterSpacing={0.08}
      >
        {destination.country.toUpperCase()}
      </Text>

      {/* ===================================================== */}
      {/* DURATION                                              */}
      {/* ===================================================== */}

      <Text
        position={[1.5, -1.02, 0.09]}
        anchorX="right"
        anchorY="middle"
        fontSize={0.1}
        color="#cbd5e1"
      >
        {destination.duration}
      </Text>
    </group>
  );
};

export default DestinationPlane;