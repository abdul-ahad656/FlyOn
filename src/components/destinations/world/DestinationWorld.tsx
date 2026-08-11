"use client";

import CameraController from "./CameraController";
import DestinationGallery from "./DestinationGallery";
import Environment from "./Environment";
import Fog from "./Fog";
import Lighting from "./Lighting";
import PostFX from "./PostFX";

const DestinationWorld = () => {
  return (
    <>
      {/* ===================================================== */}
      {/* WORLD BACKGROUND                                      */}
      {/* ===================================================== */}

      <color
        attach="background"
        args={["#050914"]}
      />

      {/* ===================================================== */}
      {/* ATMOSPHERE                                            */}
      {/* ===================================================== */}

      <Fog />

      {/* ===================================================== */}
      {/* LIGHTING                                              */}
      {/* ===================================================== */}

      <Lighting />

      <Environment />

      {/* ===================================================== */}
      {/* CAMERA                                                */}
      {/* ===================================================== */}

      <CameraController />

      {/* ===================================================== */}
      {/* DESTINATION GALLERY                                   */}
      {/* ===================================================== */}

      <DestinationGallery />

      {/* ===================================================== */}
      {/* POST PROCESSING                                       */}
      {/* ===================================================== */}

      <PostFX />
    </>
  );
};

export default DestinationWorld;