import React from "react";
import { angleToRadians } from "../utils/angle";

const ThreeScene = () => {
  return (
    //  Ball
    <>
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* ambient light */}
      <ambientLight args={["#ffffff", 1]}  />
          <mesh rotation={[(angleToRadians(90)),0,0]}>
        <planeGeometry args={[7, 7]} />
        <meshStandardMaterial color="#1ea3d8" />
      </mesh>
    </>
  );
};

export default ThreeScene;
