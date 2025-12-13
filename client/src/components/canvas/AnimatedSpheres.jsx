import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const AnimatedSphere = ({ position, color, size, speed }) => {
    const meshRef = useRef();
    const initialY = position[1];

    useFrame((state) => {
        if (meshRef.current) {
            // Floating animation
            meshRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime * speed) * 0.3;

            // Rotation
            meshRef.current.rotation.x += 0.01 * speed;
            meshRef.current.rotation.y += 0.01 * speed;

            // Pulsing effect
            const scale = 1 + Math.sin(state.clock.elapsedTime * speed * 2) * 0.1;
            meshRef.current.scale.set(scale, scale, scale);
        }
    });

    return (
        <mesh ref={meshRef} position={position}>
            <icosahedronGeometry args={[size, 1]} />
            <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={0.5}
                metalness={0.8}
                roughness={0.2}
                transparent
                opacity={0.8}
            />
            {/* Glow effect */}
            <pointLight color={color} intensity={2} distance={size * 4} />
        </mesh>
    );
};

const AnimatedSpheres = () => {
    const spheres = [
        { position: [-2, 2, -2], color: '#FF6B9D', size: 0.3, speed: 0.8 },
        { position: [3, 1.5, -1], color: '#00FFB3', size: 0.25, speed: 1.2 },
        { position: [-1.5, 3, 1], color: '#4A90E2', size: 0.35, speed: 0.6 },
        { position: [2.5, 2.5, 0], color: '#FFD700', size: 0.2, speed: 1.5 },
        { position: [1, 3.5, -1.5], color: '#E233E2', size: 0.4, speed: 0.9 },
        { position: [-2.5, 1, 0.5], color: '#00c6ff', size: 0.3, speed: 1.1 },
        { position: [0.5, 2, 2], color: '#FF6B6B', size: 0.28, speed: 1.3 },
        { position: [-3, 3, -0.5], color: '#00FF9D', size: 0.22, speed: 0.7 },
    ];

    return (
        <group>
            {spheres.map((sphere, index) => (
                <AnimatedSphere
                    key={index}
                    position={sphere.position}
                    color={sphere.color}
                    size={sphere.size}
                    speed={sphere.speed}
                />
            ))}
        </group>
    );
};

export default AnimatedSpheres;
