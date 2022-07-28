import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { angleToRadians } from "../utils/angle";

const ThreeScene = () => {
  const orbitControlsRef = useRef(null);
  useFrame((state) => {
    // console.log(state.mouse);
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse;

      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(90));
      orbitControlsRef.current.setPolarAngle(
        (y + 1) * angleToRadians(90 - 30)
      );
      orbitControlsRef.current.update();
    }
  });

  useEffect(() => {
    if (!!orbitControlsRef.current) {
      //   console.log(orbitControlsRef.current);
      //   console.log(orbitControlsRef.current);
    }
  }, [orbitControlsRef.current]);
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 1, 5]} />
      <OrbitControls
        ref={orbitControlsRef}
        minPolarAngle={angleToRadians(60)}
        maxPolarAngle={angleToRadians(80)}
        //   autoRotate={true}
        // enableDamping={false}
      />
      {/* Ball */}
      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      <mesh rotation={[-angleToRadians(90), 0, 0]}>
        <planeGeometry args={[7, 7]} />
        <meshStandardMaterial color="#1ea3d8" />
      </mesh>
      {/* ambient light */}
      <ambientLight args={["#ffffff", 1]} />
    </>
  );
};

export default ThreeScene;
