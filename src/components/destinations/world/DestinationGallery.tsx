"use client";

import { useMemo } from "react";

import DestinationPlane from "./DestinationPlane";

import { destinations } from "../data";

const DestinationGallery = () => {
  const galleryItems = useMemo(
    () => [
      {
        id: destinations[0].id,
        destination: destinations[0],
        position: [-2.8, 1.2, -5],
        rotation: [0.04, -0.12, -0.06],
        scale: 1.15,
      },
      {
        id: destinations[1].id,
        destination: destinations[1],
        position: [2.7, 1.8, -11],
        rotation: [-0.08, 0.18, 0.08],
        scale: 0.85,
      },
      {
        id: destinations[2].id,
        destination: destinations[2],
        position: [-3.2, -1.8, -16],
        rotation: [0.08, -0.16, -0.04],
        scale: 0.9,
      },
      {
        id: destinations[3].id,
        destination: destinations[3],
        position: [3.1, -1.2, -21],
        rotation: [-0.05, 0.14, 0.06],
        scale: 1,
      },
      {
        id: destinations[4].id,
        destination: destinations[4],
        position: [-2.4, 1.5, -27],
        rotation: [0.06, -0.1, -0.05],
        scale: 0.95,
      },
      {
        id: destinations[5].id,
        destination: destinations[5],
        position: [2.8, -1.6, -33],
        rotation: [-0.06, 0.12, 0.05],
        scale: 1.05,
      },
    ],
    []
  );

  return (
    <group>
      {galleryItems.map((item) => (
        <DestinationPlane
          key={item.id}
          destination={item.destination}
          position={item.position as [number, number, number]}
          rotation={item.rotation as [number, number, number]}
          scale={item.scale}
          index={galleryItems.indexOf(item)}
        />
      ))}
    </group>
  );
};

export default DestinationGallery;