import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { FloatingGeometry } from './FloatingGeometry';
import { ParticleField } from './ParticleField';

export function CyberScene() {
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#00f0ff" />
        <pointLight position={[-10, -10, -5]} intensity={2} color="#8b5cf6" />
        <pointLight position={[5, -5, 5]} intensity={1} color="#ec4899" />
        <fog attach="fog" args={['#050816', 5, 18]} />

        <FloatingGeometry mouse={mouse} />
        <ParticleField count={900} />
      </Canvas>
    </div>
  );
}
