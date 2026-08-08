"use client";

import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

const CameraController = () => {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 1.5, 8);

    camera.rotation.set(0, 0, 0);

    camera.lookAt(0, 0, -20);

    camera.updateProjectionMatrix();
  }, [camera]);

  return null;
};

export default CameraController;