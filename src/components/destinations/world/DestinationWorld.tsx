"use client";

import CameraController from "./CameraController";
import DestinationGallery from "./DestinationGallery";
import Environment from "./Environment";
import Fog from "./Fog";
import FloatingParticles from "../../destinations/world/particles/FloatingParticles";
import Lighting from "./Lighting";
import PostFX from "./PostFX";

const DestinationWorld = () => {
  return (
    <>
      <color
        attach="background"
        args={["#030712"]}
      />

      <Fog />

      <Lighting />

      <Environment />

      <FloatingParticles />

      <DestinationGallery />

      <CameraController />

      <PostFX />
    </>
  );
};

export default DestinationWorld;