"use client";

import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

const CameraController = () => {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(
      0,
      0,
      6
    );

    camera.lookAt(
      0,
      0,
      -12
    );

    camera.updateProjectionMatrix();
  }, [camera]);

  return null;
};

export default CameraController;