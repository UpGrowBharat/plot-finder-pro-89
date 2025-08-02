import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { Points as ThreePoints } from 'three';

const AnimatedSphere = () => {
  const ref = useRef<ThreePoints>(null);
  
  // Generate random sphere points
  const sphere = new Float32Array(5000);
  for (let i = 0; i < sphere.length; i += 3) {
    const radius = 4;
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    
    sphere[i] = radius * Math.sin(phi) * Math.cos(theta);
    sphere[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
    sphere[i + 2] = radius * Math.cos(phi);
  }

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial 
          transparent 
          color="#10b981" 
          size={0.002} 
          sizeAttenuation={true} 
          depthWrite={false} 
        />
      </Points>
    </group>
  );
};

const AnimatedBackground3D = () => {
  return (
    <div className="absolute inset-0 opacity-30">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <AnimatedSphere />
      </Canvas>
    </div>
  );
};

export default AnimatedBackground3D;