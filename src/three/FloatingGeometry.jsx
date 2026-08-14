import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei';

export function FloatingGeometry({ mouse }) {
  const torusRef = useRef();
  const octaRef = useRef();
  const icoRef = useRef();
  const sphereRef = useRef();

  useFrame((state, delta) => {
    // Smooth mouse parallax rotation
    const targetX = (mouse.current.x * Math.PI) / 8;
    const targetY = (mouse.current.y * Math.PI) / 8;

    if (torusRef.current) {
      torusRef.current.rotation.x += delta * 0.3;
      torusRef.current.rotation.y += delta * 0.4;
      torusRef.current.rotation.x += (targetY - torusRef.current.rotation.x) * 0.05;
      torusRef.current.rotation.y += (targetX - torusRef.current.rotation.y) * 0.05;
    }

    if (octaRef.current) {
      octaRef.current.rotation.x -= delta * 0.2;
      octaRef.current.rotation.z += delta * 0.3;
    }

    if (icoRef.current) {
      icoRef.current.rotation.y += delta * 0.25;
    }
  });

  return (
    <group>
      {/* Central Cyber Torus Knot */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5} position={[2, 0.5, -1]}>
        <mesh ref={torusRef} scale={1.2}>
          <torusKnotGeometry args={[1, 0.3, 128, 32]} />
          <MeshDistortMaterial
            color="#00f0ff"
            roughness={0.1}
            metalness={0.8}
            distort={0.3}
            speed={2}
            emissive="#00f0ff"
            emissiveIntensity={0.2}
          />
        </mesh>
      </Float>

      {/* Floating Octahedron */}
      <Float speed={2.5} rotationIntensity={0.8} floatIntensity={2} position={[-2.5, 1.5, -2]}>
        <mesh ref={octaRef} scale={1.4}>
          <octahedronGeometry args={[1, 0]} />
          <MeshWobbleMaterial
            color="#8b5cf6"
            roughness={0.2}
            metalness={0.9}
            factor={0.4}
            speed={1.5}
            wireframe
          />
        </mesh>
      </Float>

      {/* Futuristic Wireframe Sphere */}
      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={1.2} position={[-3, -1.8, -1]}>
        <mesh ref={icoRef} scale={1.3}>
          <icosahedronGeometry args={[1, 2]} />
          <meshStandardMaterial
            color="#ec4899"
            wireframe
            emissive="#ec4899"
            emissiveIntensity={0.4}
          />
        </mesh>
      </Float>

      {/* Glowing Energy Core Sphere */}
      <Float speed={3} rotationIntensity={0.6} floatIntensity={1.8} position={[3, -2, -2]}>
        <mesh ref={sphereRef} scale={0.9}>
          <sphereGeometry args={[1, 32, 32]} />
          <MeshDistortMaterial
            color="#06b6d4"
            roughness={0.05}
            metalness={1}
            distort={0.5}
            speed={3}
          />
        </mesh>
      </Float>
    </group>
  );
}
