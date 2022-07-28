import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { angleToRadians } from "../utils/angle";
import { Environment } from "@react-three/drei/core";
import * as THREE from "three";
import gsap from "gsap";

const ThreeScene = () => {
  // code to move the camera around
  const orbitControlsRef = useRef(null);
  useFrame((state) => {
    // console.log(state.mouse);
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse;

      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(90));
      orbitControlsRef.current.setPolarAngle((y + 1) * angleToRadians(90 - 30));
      orbitControlsRef.current.update();
    }
  });

  useEffect(() => {
    if (!!orbitControlsRef.current) {
      //   console.log(orbitControlsRef.current);
      //   console.log(orbitControlsRef.current);
    }
  }, [orbitControlsRef.current]);

  // Animation
  const ballRef = useRef(null);
  useEffect(() => {
    if (!!ballRef.current) {
      //   console.log(ballRef.current)
      // Position Animation X axis motion
      const timeline = gsap.timeline();
      gsap.to(ballRef.current.position, {
        x: 1,
        duration: 1,
        ease: "power2.out",
      });

      // y axis
      //   gsap.to(ballRef.current.position, {
      //     y: 0.5,
      //     duration: 0.75,
      //     ease: "power2.in",
      //   }, '>+=3');
      //   gsap.to(ballRef.current.position, {
      //     y: 0.5,
      //     duration: 0.75,
      //     ease: "power2.in",
      //   }, '<');
      timeline.to(
        ballRef.current.position,
        {
          y: 0.5,
          duration: 1,
          ease: "bounce.out",
        },
        "<"
      );
    //   const coefficient = 0.8;
        // for (let i = 1; i <= 4; i++) {
        //     // going up
        //     timeline.to(
        //         ballRef.current.position,
        //         {
        //             y: Math.pow(coefficient, i) * 1.5,
        //             duration: 0.2,
        //             ease: "power2.out",
        //         },
        //         ">"
        //     );

        //     // comig back down
     
        //     timeline.to(
        //         ballRef.current.position,
        //         {
        //             y: 0.5,
        //             duration: 0.2,
        //             ease: "power2.in",
        //         },
        //         ">"
        //     );
        // }

      // play();
      timeline.play();
    }
  }, [ballRef.current]);
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

      <mesh rotation={[-angleToRadians(90), 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#1ea3d8" />
      </mesh>
      {/* ambient light */}
      <ambientLight args={["#ffffff", 0.25]} />

      {/* Directional Light */}
      {/* <directionalLight args={["#ffffff", 1]} position={[-3, 1, 0]} /> */}

      {/* Point Light */}
      {/* <pointLight args={["#ffffff", 1]} position={[-3, 1, 0]} /> */}

      {/* Spotlight Light */}
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
