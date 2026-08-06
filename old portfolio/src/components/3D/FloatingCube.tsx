import { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Billboard, Sphere, Torus, Points, PointMaterial } from '@react-three/drei';
import { Group } from 'three';
import * as THREE from 'three';

const techStack = [
  { name: 'React',      color: '#61DAFB', orbit: 2.2, speed: 0.5,  phase: 0,    icon: '⚛' },
  { name: 'TypeScript', color: '#3178C6', orbit: 2.2, speed: 0.5,  phase: 2.09, icon: 'TS' },
  { name: 'Python',     color: '#FFD43B', orbit: 2.2, speed: 0.5,  phase: 4.18, icon: '🐍' },
  { name: 'Node.js',    color: '#68A063', orbit: 3.4, speed: -0.35, phase: 0,    icon: '⬡' },
  { name: 'JavaScript', color: '#F7DF1E', orbit: 3.4, speed: -0.35, phase: 1.57, icon: 'JS' },
  { name: 'PostgreSQL', color: '#4169E1', orbit: 3.4, speed: -0.35, phase: 3.14, icon: '🗄' },
  { name: 'YOLOv8',    color: '#FF6B6B', orbit: 3.4, speed: -0.35, phase: 4.71, icon: '👁' },
];

/* ─── Orbital ring plane ─────────────────────────────────────── */
function OrbitalRing({ radius, rotX = 0, rotZ = 0, color }: {
  radius: number; rotX?: number; rotZ?: number; color: string;
}) {
  return (
    <mesh rotation={[rotX, 0, rotZ]}>
      <Torus args={[radius, 0.008, 2, 120]}>
        <meshBasicMaterial color={color} transparent opacity={0.22} />
      </Torus>
    </mesh>
  );
}

/* ─── Individual tech node ───────────────────────────────────── */
function TechNode({ name, color, orbit, speed, phase, icon }: {
  name: string; color: string; orbit: number; speed: number; phase: number; icon: string;
}) {
  const groupRef = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime() * speed + phase;
    groupRef.current.position.x = Math.cos(t) * orbit;
    groupRef.current.position.z = Math.sin(t) * orbit;
    groupRef.current.position.y = Math.sin(t * 0.5) * 0.3;
  });

  const scale = hovered ? 1.5 : 1;

  return (
    <group ref={groupRef} scale={[scale, scale, scale]}>
      {/* Glowing sphere node */}
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.18, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 2.5 : 1.2}
          metalness={0.3}
          roughness={0.2}
        />
      </mesh>

      {/* Outer glow halo */}
      <mesh>
        <sphereGeometry args={[0.28, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={hovered ? 0.14 : 0.06} />
      </mesh>

      {/* Icon + Label always face camera */}
      <Billboard follow lockX={false} lockY={false} lockZ={false}>
        <Text
          position={[0, 0.02, 0]}
          fontSize={0.21}
          color={color}
          anchorX="center"
          anchorY="middle"
        >
          {icon}
        </Text>
        <Text
          position={[0, -0.42, 0]}
          fontSize={0.16}
          color="white"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.01}
          outlineColor="#000000"
        >
          {name}
        </Text>
      </Billboard>
    </group>
  );
}

/* ─── Inner particle cloud ───────────────────────────────────── */
function CentreParticles() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const p = new Float32Array(500 * 3);
    for (let i = 0; i < 500; i++) {
      const r = 0.9 + Math.random() * 1.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      p[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      p[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      p[i * 3 + 2] = r * Math.cos(phi);
    }
    return p;
  }, []);

  useFrame((s) => {
    if (ref.current) {
      ref.current.rotation.y = s.clock.getElapsedTime() * 0.15;
      ref.current.rotation.x = s.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#a78bfa" size={0.055} sizeAttenuation depthWrite={false} opacity={0.7} />
    </Points>
  );
}

/* ─── Main exported component ────────────────────────────────── */
export default function FloatingCube() {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.07;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Lights */}
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={2} color="#06b6d4" />
      <pointLight position={[-5, -5, -5]} intensity={1.2} color="#8b5cf6" />
      <pointLight position={[0, 8, 0]} intensity={0.8} color="#ec4899" />

      {/* Central core sphere */}
      <mesh>
        <Sphere args={[0.55, 64, 64]}>
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#0891b2"
            emissiveIntensity={1.0}
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.92}
          />
        </Sphere>
      </mesh>
      {/* Wireframe shell */}
      <mesh>
        <Sphere args={[0.72, 32, 32]}>
          <meshBasicMaterial color="#22d3ee" transparent opacity={0.08} wireframe />
        </Sphere>
      </mesh>

      {/* Inner particles */}
      <CentreParticles />

      {/* Orbital ring guides */}
      <OrbitalRing radius={2.2} rotX={Math.PI / 2} color="#06b6d4" />
      <OrbitalRing radius={3.4} rotX={Math.PI / 2} rotZ={0.35} color="#8b5cf6" />

      {/* Tech planet nodes */}
      {techStack.map((tech) => (
        <TechNode key={tech.name} {...tech} />
      ))}
    </group>
  );
}
