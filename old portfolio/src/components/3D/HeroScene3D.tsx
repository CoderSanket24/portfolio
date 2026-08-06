import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Sphere, Torus, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

/* ─── Particle Galaxy ─────────────────────────────────────────── */
function ParticleField({ count = 3000 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 12 + Math.random() * 20;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.04;
      ref.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.02) * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#60a5fa"
        size={0.04}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  );
}

/* ─── Inner Glowing Particles (closer, brighter) ────────────── */
function InnerParticles({ count = 800 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3 + Math.random() * 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = -state.clock.getElapsedTime() * 0.08;
      ref.current.rotation.z = state.clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#a78bfa"
        size={0.07}
        sizeAttenuation
        depthWrite={false}
        opacity={0.85}
      />
    </Points>
  );
}

/* ─── Central Glowing Sphere ─────────────────────────────────── */
function CentralSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <Sphere args={[1.6, 64, 64]}>
          <MeshDistortMaterial
            color="#06b6d4"
            attach="material"
            distort={0.35}
            speed={2}
            roughness={0.1}
            metalness={0.8}
            emissive="#0e7490"
            emissiveIntensity={0.4}
            transparent
            opacity={0.85}
          />
        </Sphere>
      </mesh>
    </Float>
  );
}

/* ─── Orbiting Torus Rings ───────────────────────────────────── */
function OrbitRing({
  radius,
  tubeRadius,
  color,
  speed,
  rotX = 0,
  rotZ = 0,
}: {
  radius: number;
  tubeRadius: number;
  color: string;
  speed: number;
  rotX?: number;
  rotZ?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * speed;
    }
  });

  return (
    <mesh ref={ref} rotation={[rotX, 0, rotZ]}>
      <Torus args={[radius, tubeRadius, 2, 100]}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.8}
          transparent
          opacity={0.4}
          wireframe={false}
        />
      </Torus>
    </mesh>
  );
}

/* ─── Floating Geometric Shapes ──────────────────────────────── */
function FloatingGeo() {
  const group1 = useRef<THREE.Group>(null);
  const group2 = useRef<THREE.Group>(null);
  const group3 = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group1.current) {
      group1.current.rotation.x = t * 0.4;
      group1.current.rotation.y = t * 0.25;
      group1.current.position.x = Math.sin(t * 0.3) * 4;
      group1.current.position.y = Math.cos(t * 0.2) * 2 + 1;
    }
    if (group2.current) {
      group2.current.rotation.x = -t * 0.3;
      group2.current.rotation.z = t * 0.35;
      group2.current.position.x = -Math.sin(t * 0.25) * 4;
      group2.current.position.y = -Math.cos(t * 0.3) * 2 - 1;
    }
    if (group3.current) {
      group3.current.rotation.y = t * 0.5;
      group3.current.rotation.z = t * 0.2;
      group3.current.position.x = Math.cos(t * 0.2) * 3;
      group3.current.position.z = Math.sin(t * 0.3) * 2 - 1;
    }
  });

  return (
    <>
      {/* Octahedron top-right */}
      <group ref={group1} position={[4, 1, -2]}>
        <mesh>
          <octahedronGeometry args={[0.6, 0]} />
          <meshStandardMaterial
            color="#8b5cf6"
            emissive="#7c3aed"
            emissiveIntensity={0.5}
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.8}
          />
        </mesh>
      </group>

      {/* Icosahedron bottom-left */}
      <group ref={group2} position={[-4, -1, -1]}>
        <mesh>
          <icosahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial
            color="#ec4899"
            emissive="#db2777"
            emissiveIntensity={0.5}
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.75}
          />
        </mesh>
      </group>

      {/* Tetrahedron floating */}
      <group ref={group3} position={[2, -2, -3]}>
        <mesh>
          <tetrahedronGeometry args={[0.7, 0]} />
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#0891b2"
            emissiveIntensity={0.6}
            metalness={0.8}
            roughness={0.2}
            transparent
            opacity={0.8}
          />
        </mesh>
      </group>
    </>
  );
}

/* ─── Camera Mouse Parallax ──────────────────────────────────── */
function CameraRig({ mouse }: { mouse: { x: number; y: number } }) {
  useFrame((state) => {
    state.camera.position.x += (mouse.x * 2 - state.camera.position.x) * 0.03;
    state.camera.position.y += (-mouse.y * 2 - state.camera.position.y) * 0.03;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

/* ─── Main Scene ─────────────────────────────────────────────── */
export default function HeroScene3D({ mouse }: { mouse: { x: number; y: number } }) {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#06b6d4" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#8b5cf6" />
      <pointLight position={[0, 10, -5]} intensity={0.8} color="#ec4899" />
      <spotLight
        position={[0, 8, 0]}
        intensity={2}
        color="#60a5fa"
        angle={0.4}
        penumbra={0.8}
      />

      {/* Camera parallax */}
      <CameraRig mouse={mouse} />

      {/* Central hero sphere */}
      <CentralSphere />

      {/* Orbital torus rings */}
      <OrbitRing radius={2.5} tubeRadius={0.012} color="#06b6d4" speed={0.4} rotX={Math.PI / 3} />
      <OrbitRing radius={3.2} tubeRadius={0.01} color="#8b5cf6" speed={-0.3} rotZ={Math.PI / 4} />
      <OrbitRing radius={4.0} tubeRadius={0.008} color="#ec4899" speed={0.2} rotX={Math.PI / 6} rotZ={Math.PI / 3} />

      {/* Floating geometric shapes */}
      <FloatingGeo />

      {/* Particle systems */}
      <InnerParticles count={600} />
      <ParticleField count={2500} />
    </>
  );
}
