import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function CyberGrid() {
  const gridRef = useRef<THREE.GridHelper>(null);

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.5 - 2;
    }
  });

  return (
    <>
      <gridHelper ref={gridRef} args={[20, 20, '#00ffff', '#004d4d']} rotation={[0, 0, 0]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0099ff" />
    </>
  );
}
