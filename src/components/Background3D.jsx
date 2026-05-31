import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

function AnimatedSphere({ color, position, scale, speed }) {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(time * speed) * 0.5;
      meshRef.current.rotation.x = time * speed * 0.5;
      meshRef.current.rotation.y = time * speed * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 32, 32]} position={position} scale={scale}>
      <MeshDistortMaterial color={color} attach="material" distort={0.5} speed={2} roughness={0.2} metalness={0.8} />
    </Sphere>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 z-0 w-full h-full pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} />
        <AnimatedSphere color="#38bdf8" position={[-4, 2, -2]} scale={1.5} speed={0.5} />
        <AnimatedSphere color="#818cf8" position={[5, -3, -5]} scale={2} speed={0.3} />
        <AnimatedSphere color="#c084fc" position={[0, -5, -8]} scale={2.5} speed={0.2} />
      </Canvas>
    </div>
  );
}
