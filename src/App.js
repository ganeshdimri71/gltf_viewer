import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import "./App.css";
import ThreeScene from "./component/ThreeScene";

const App = () => {
  return (
    <Canvas id="three-canvas-container" shadows>
      <Suspense fallback={null}>
        <ThreeScene />
      </Suspense>
    </Canvas>
  );
};

export default App;
