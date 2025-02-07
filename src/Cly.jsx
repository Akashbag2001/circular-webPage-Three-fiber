import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";
function Cly() {
  let tex = useTexture("./imageNew.png");
  let clyRef = useRef();
  useFrame((state, delta) => {
    clyRef.current.rotation.y += delta;
  });

  return (
    <group rotation={[0, 1.4, 0.5]}>
      <mesh ref={clyRef} >
        <cylinderGeometry args={[2, 2, 2, 60, 60, true]} />
        <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

export default Cly;
