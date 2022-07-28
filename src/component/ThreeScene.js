import { PerspectiveCamera } from "@react-three/drei";
import React from "react";
import { angleToRadians } from "../utils/angle";

const ThreeScene = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 1, 5]} />
      {/* Ball */}
      <mesh position={[0,0.5,0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      <mesh rotation={[-(angleToRadians(90)), 0, 0]}>
        <planeGeometry args={[7, 7]} />
        <meshStandardMaterial color="#1ea3d8" />
      </mesh>
      {/* ambient light */}
      <ambientLight args={["#ffffff", 1]} />
    </>
  );
};

export default ThreeScene;
