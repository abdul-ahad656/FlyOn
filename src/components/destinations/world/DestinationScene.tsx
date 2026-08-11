"use client";

import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";

import { ACESFilmicToneMapping } from "three";

import DestinationWorld from "./DestinationWorld";

interface Props {
  className?: string;
}

const DestinationScene = ({
  className = "",
}: Props) => {
  return (
    <div
      className={`
        absolute
        inset-0
        h-full
        w-full
        ${className}
      `}
      aria-hidden="true"
    >
      <Canvas
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          toneMapping: ACESFilmicToneMapping,
          toneMappingExposure: 1,
        }}
        camera={{
          position: [0, 1.5, 8],
          fov: 45,
          near: 0.1,
          far: 500,
        }}
        frameloop="always"
      >
        <Suspense fallback={null}>
          <DestinationWorld />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default DestinationScene;