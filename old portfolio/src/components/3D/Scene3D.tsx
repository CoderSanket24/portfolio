import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei';
import FloatingCube from './FloatingCube';

export default function Scene3D() {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <OrbitControls 
          enableZoom={true} 
          autoRotate 
          autoRotateSpeed={0.5}
          minDistance={5}
          maxDistance={15}
        />
        
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
        <pointLight position={[10, -10, 5]} intensity={0.5} color="#06b6d4" />
        <spotLight position={[0, 10, 0]} intensity={0.5} color="#3b82f6" />
        
        {/* Stars background */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        {/* Main component */}
        <FloatingCube />
      </Canvas>
    </div>
  );
}
