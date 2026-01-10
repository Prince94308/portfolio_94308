import React, { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Preload, useTexture } from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "../Loader";

const TapeItem = ({ text, position, color }) => {
    return (
        <group position={position}>
            {/* 3D Text */}
            <Text
                color="#ffffff"
                fontSize={0.8}
                anchorX="center"
                anchorY="middle"
                position={[0, 0, 0.06]}
                outlineWidth={0.02}
                outlineColor={color}
            >
                {text}
            </Text>

            {/* Carbon Tape Segment */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[4.8, 1.5, 0.1]} />
                <meshStandardMaterial
                    color="#151515"
                    roughness={0.4}
                    metalness={0.8}
                />
            </mesh>

            {/* Top and Bottom Borders for "Tape" look */}
            <mesh position={[0, 0.7, 0.02]}>
                <boxGeometry args={[4.8, 0.1, 0.1]} />
                <meshStandardMaterial color="#333" emissive="#333" />
            </mesh>
            <mesh position={[0, -0.7, 0.02]}>
                <boxGeometry args={[4.8, 0.1, 0.1]} />
                <meshStandardMaterial color="#333" emissive="#333" />
            </mesh>
        </group>
    );
};

const CarouselCanvas = ({ technologies }) => {
    // Add colors to technologies for variety if needed, or use a map
    const techColors = useMemo(() => ({
        'html': '#E34F26',
        'css': '#1572B6',
        'javascript': '#F7DF1E',
        'typescript': '#3178C6',
        'reactjs': '#61DAFB',
        'redux': '#764ABC',
        'tailwind': '#06B6D4',
        'nodejs': '#339933',
        'mongodb': '#47A248',
        'threejs': '#ffffff',
        'git': '#F05032',
        'figma': '#F24E1E',
        'docker': '#2496ED',
    }), []);

    const Tape = () => {
        const groupRef = useRef();
        const speed = 1.5;

        // Duplicate list for infinite scroll effect (3 sets should be enough)
        const items = useMemo(() => [...technologies, ...technologies, ...technologies], [technologies]);
        const itemWidth = 5.0; // Width of one items + gap
        const totalWidth = technologies.length * itemWidth;

        useFrame((state, delta) => {
            if (groupRef.current) {
                groupRef.current.position.x -= delta * speed;

                // Seamless loop: when first set moves out, reset to 0
                if (groupRef.current.position.x <= -totalWidth) {
                    groupRef.current.position.x = 0;
                }
            }
        });

        return (
            <group ref={groupRef}>
                {items.map((tech, i) => (
                    <TapeItem
                        key={`${tech.name}-${i}`}
                        text={tech.name}
                        position={[i * itemWidth, 0, 0]}
                        color={techColors[tech.icon] || '#915EFF'}
                    />
                ))}
            </group>
        )
    }

    return (
        <Canvas
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{ position: [0, 0, 10], fov: 35 }}
            style={{ height: '300px' }} // Reduced height for the tape
        >
            <Suspense fallback={<CanvasLoader />}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={1} />

                {/* Center the tape vertically and tilt slightly for 3D effect if desired */}
                <group position={[0, 0, 0]} rotation={[0.1, 0, 0]}>
                    <Tape />
                </group>
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default CarouselCanvas;
