"use client";

import { Environment as DreiEnvironment } from "@react-three/drei";

const Environment = () => {
  return (
    <DreiEnvironment
      preset="night"
      environmentIntensity={0.35}
      background={false}
    />
  );
};

export default Environment;