import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei';
import { Suspense } from 'react';
import FloatingCube from './FloatingCube';
import ErrorBoundary3D from './ErrorBoundary3D';

function LoadingFallback() {
  return (
    <div className="w-full h-[400px] md:h-[500px] flex items-center justify-center bg-gray-800/50 rounded-xl">
      <div className="text-center">
        <div className="text-4xl mb-4 animate-spin">⚛️</div>
        <p className="text-gray-400">Loading 3D Scene...</p>
      </div>
    </div>
  );
}

export default function Scene3DSelector() {
  return (
    <ErrorBoundary3D>
      <div className="space-y-4">
        {/* 3D Canvas */}
        <Suspense fallback={<LoadingFallback />}>
          <div className="w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden">
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
              
              {/* Tech Universe visualization */}
              <Suspense fallback={null}>
                <FloatingCube />
              </Suspense>
            </Canvas>
          </div>
        </Suspense>

        {/* Instructions */}
        <div className="text-center space-y-1">
          <p className="text-gray-400 text-sm">
            Drag to rotate • Scroll to zoom • Hover over icons
          </p>
          <p className="text-gray-300 text-xs">
            Interactive visualization of my core technologies connected in a network
          </p>
        </div>
      </div>
    </ErrorBoundary3D>
  );
}
