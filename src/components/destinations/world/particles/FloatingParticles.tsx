"use client";

import { useMemo } from "react";

import { Points } from "three";

import { useFrame } from "@react-three/fiber";

const PARTICLE_COUNT = 500;

const FloatingParticles = () => {
  const positions = useMemo(() => {
    const data = new Float32Array(
      PARTICLE_COUNT * 3
    );

    for (
      let i = 0;
      i < PARTICLE_COUNT;
      i++
    ) {
      const i3 = i * 3;

      data[i3] =
        (Math.random() - 0.5) * 22;

      data[i3 + 1] =
        (Math.random() - 0.5) * 14;

      data[i3 + 2] =
        -Math.random() * 45;
    }

    return data;
  }, []);

  const pointsRef =
    useMemo<React.RefObject<Points | null>>(
      () => ({ current: null }),
      []
    );

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;

    pointsRef.current.rotation.y =
      clock.getElapsedTime() * 0.008;

    pointsRef.current.rotation.x =
      Math.sin(
        clock.getElapsedTime() * 0.05
      ) * 0.03;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[
            positions,
            3,
          ]}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.025}
        color="#93c5fd"
        transparent
        opacity={0.35}
        depthWrite={false}
      />
    </points>
  );
};

export default FloatingParticles;