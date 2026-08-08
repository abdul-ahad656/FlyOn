export { default as DestinationScene } from './DestinationScene';
export { default as DestinationWorld } from './DestinationWorld';
export { default as CameraController } from './CameraController';
export { default as Environment } from './Environment';
export { default as Lighting } from './Lighting';
export { default as Fog } from './Fog';
export { default as PostFX } from './PostFX';

// Clouds
export { default as FloatingClouds } from './clouds/FloatingClouds';
export { default as Cloud } from './clouds/Cloud';

// Particles
export { default as FloatingParticles } from './particles/FloatingParticles';
export { default as Stars } from './particles/Stars';

// Cards
export { default as DestinationCard3D } from './cards/DestinationCard3D';
export { default as CardMaterial } from './cards/CardMaterial';


const World = () => {
  return (
    <div>
      <h1>this is world</h1>
    </div>
  );
}

export default World;
