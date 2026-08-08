"use client";

import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { FogExp2 } from "three";

const Fog = () => {
  const { scene } = useThree();

  useEffect(() => {
    const fog = new FogExp2(
      "#050914",
      0.018
    );

    scene.fog = fog;

    return () => {
      scene.fog = null;
    };
  }, [scene]);

  return null;
};

export default Fog;