"use client";

import {
  EffectComposer,
  Bloom,
  Noise,
  Vignette,
} from "@react-three/postprocessing";

const PostFX = () => {
  return (
    <EffectComposer multisampling={4}>
      <Bloom
        intensity={0.35}
        luminanceThreshold={1}
        luminanceSmoothing={0.7}
        mipmapBlur
      />

      <Noise
        premultiply
        opacity={0.025}
      />

      <Vignette
        eskil={false}
        offset={0.25}
        darkness={0.55}
      />
    </EffectComposer>
  );
};

export default PostFX;