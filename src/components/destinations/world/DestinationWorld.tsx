"use client";

import CameraController from "./CameraController";
import Environment from "./Environment";
import Fog from "./Fog";
import Lighting from "./Lighting";
import PostFX from "./PostFX";

const DestinationWorld = () => {
  return (
    <>
      <color
        attach="background"
        args={["#050914"]}
      />

      <Fog />

      <Lighting />

      <Environment />

      <CameraController />

      <PostFX />
    </>
  );
};

export default DestinationWorld;