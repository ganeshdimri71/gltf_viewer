import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { angleToRadians } from "../utils/angle";
import { Environment, useTexture } from "@react-three/drei/core";
import * as THREE from "three";
import gsap from "gsap";
import { Model } from "../utils/Model";

const ThreeScene = () => {
  // const colorTextureMap=useTexture()
  const orbitControlsRef = useRef(null);
  const ballRef = useRef(null);
  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse;

      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(90));
      orbitControlsRef.current.setPolarAngle((y + 1) * angleToRadians(90 - 30));
      orbitControlsRef.current.update();
    }
  });

  useEffect(() => {
    if (!!orbitControlsRef.current) {
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
      <mesh position={[-2, 1.5, 0]} castShadow ref={ballRef}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#ffffff" metalness={0.6} roughness={0.2} />
      </mesh>

      {/* Car */}
      <Model  />

      <mesh rotation={[-angleToRadians(90), 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#1ea3d8" />
      </mesh>
      {/* ambient light */}
      <ambientLight args={["#ffffff", 0.25]} />

      <spotLight
        args={["#ffffff", 1.5, 7, angleToRadians(45), 0.4]}
        position={[-3, 1, 0]}
        castShadow
      />

      {/* Enviroment */}
      <Environment background files={null}>
        <mesh>
          <sphereGeometry args={[50, 100, 100]} />
          <meshBasicMaterial side={THREE.BackSide} color="#2280cc" />
        </mesh>
      </Environment>
    </>
  );
};

export default ThreeScene;
