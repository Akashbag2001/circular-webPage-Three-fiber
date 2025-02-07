import { Canvas, useFrame } from "@react-three/fiber";
import "./style.css";
import { OrbitControls, Text } from "@react-three/drei";
import Cly from "./cly";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";
import { useRef } from "react";

function MovingText() {
  const textRef = useRef();

  // Animation loop to move text
  useFrame(({ clock }) => {
    if (textRef.current) {
      textRef.current.position.x = ((clock.getElapsedTime() * 2) % 20) - 10; // Adjust speed and range
    }
  });

  return (
    <Text
      ref={textRef}
      fontSize={0.5}
      color="white"
      position={[0, -1, 0]} // Adjust the position based on the scene
      anchorX="center"
      anchorY="middle"
      maxWidth={10}
      outlineWidth={0.03}
      outlineColor="#000000"
    >
      Welcome To my Web-page :)
    </Text>
  );
}

function App() {
  return (
    <div className=" w-full h-full scroll-smooth relative">
      <Canvas flat camera={{ fov: 65 }} className="h-80vh">
        <OrbitControls />
        <ambientLight />
        <Cly />
        <EffectComposer>
          <Bloom
            intensity={12.0} // The bloom intensity.
            luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
            mipmapBlur={false} // Enables or disables mipmap blur.
          />
        </EffectComposer>
        <MovingText />
        {/* <ToneMapping adaptive/> */}
      </Canvas>
      {/* <Canvas className="bg-black absolute top-[100px]">
        <OrbitControls />
        <ambientLight />
        <MovingText />
        <EffectComposer>
          <Bloom
            intensity={0.3} // The bloom intensity.
            luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
            mipmapBlur={false} // Enables or disables mipmap blur.
          />
        </EffectComposer>
      </Canvas> */}

      {/* <div className="w-full bg-black  flex justify-center items-center font-bold">
        <span className="text-white text-[30px] font-mono">Welcome To my Web-page :{")"}</span>
      </div> */}
    </div>
  );
}

export default App;
