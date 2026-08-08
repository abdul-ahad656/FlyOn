"use client";

import { useRef } from "react";

import { DirectionalLight, PointLight } from "three";

const Lighting = () => {
  const directionalRef =
    useRef<DirectionalLight>(null);

  const rimLightRef =
    useRef<PointLight>(null);

  return (
    <>
      {/* General ambient illumination */}

      <ambientLight intensity={0.35} />

      {/* Main directional light */}

      <directionalLight
        ref={directionalRef}
        position={[5, 8, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.1}
        shadow-camera-far={100}
      />

      {/* Subtle blue atmospheric rim */}

      <pointLight
        ref={rimLightRef}
        position={[-8, 4, -12]}
        intensity={18}
        distance={40}
        decay={2}
        color="#4d7cff"
      />
    </>
  );
};

export default Lighting;