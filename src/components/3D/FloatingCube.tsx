import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Billboard } from '@react-three/drei';
import { Group } from 'three';

const techStack = [
  { name: 'React', color: '#61DAFB', position: [0, 2, 0] as [number, number, number] },
  { name: 'TypeScript', color: '#3178C6', position: [2, 0, 0] as [number, number, number] },
  { name: 'Python', color: '#3776AB', position: [0, -2, 0] as [number, number, number] },
  { name: 'Node.js', color: '#339933', position: [-2, 0, 0] as [number, number, number] },
  { name: 'JavaScript', color: '#F7DF1E', position: [0, 0, 2] as [number, number, number] },
  { name: 'PostgreSQL', color: '#4169E1', position: [0, 0, -2] as [number, number, number] },
];

function TechIcon({ name, color, position }: { name: string; color: string; position: [number, number, number] }) {
  const groupRef = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (groupRef.current) {
      const scale = hovered ? 1.4 : 1 + Math.sin(state.clock.getElapsedTime() * 2) * 0.1;
      groupRef.current.scale.x = groupRef.current.scale.y = groupRef.current.scale.z = scale;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Icon as text (emoji/symbol representation) */}
      <Billboard follow={true} lockX={false} lockY={false} lockZ={false}>
        <Text
          position={[0, 0, 0.01]}
          fontSize={0.5}
          color={color}
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.03}
          outlineColor="#000000"
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          {name === 'React' ? '⚛️' : 
           name === 'TypeScript' ? 'TS' :
           name === 'Python' ? '🐍' :
           name === 'Node.js' ? '📗' :
           name === 'JavaScript' ? 'JS' :
           '🗄️'}
        </Text>
      </Billboard>

      {/* Label */}
      <Billboard follow={true} lockX={false} lockY={false} lockZ={false}>
        <Text
          position={[0, -0.7, 0]}
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.01}
          outlineColor="#000000"
        >
          {name}
        </Text>
      </Billboard>

      {/* Glow ring when hovered */}
      {hovered && (
        <mesh rotation={[0, 0, 0]}>
          <ringGeometry args={[0.5, 0.55, 32]} />
          <meshBasicMaterial color={color} transparent opacity={0.6} />
        </mesh>
      )}
    </group>
  );
}

function ConnectingLines() {
  return (
    <group>
      {techStack.map((tech, i) => {
        const points = new Float32Array([0, 0, 0, ...tech.position]);
        return (
          <line key={i}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={2}
                array={points}
                itemSize={3}
                args={[points, 3]}
              />
            </bufferGeometry>
            <lineBasicMaterial color="#06b6d4" opacity={0.3} transparent />
          </line>
        );
      })}
    </group>
  );
}

export default function FloatingCube() {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Center core */}
      <mesh>
        <icosahedronGeometry args={[0.5, 1]} />
        <meshStandardMaterial
          color="#8b5cf6"
          metalness={0.8}
          roughness={0.2}
          wireframe
          emissive="#8b5cf6"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Pulsing inner sphere */}
      <mesh>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial
          color="#a78bfa"
          metalness={0.5}
          roughness={0.3}
          transparent
          opacity={0.6}
          emissive="#a78bfa"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Connecting lines */}
      <ConnectingLines />

      {/* Tech icons */}
      {techStack.map((tech, index) => (
        <TechIcon
          key={index}
          name={tech.name}
          color={tech.color}
          position={tech.position}
        />
      ))}
    </group>
  );
}
