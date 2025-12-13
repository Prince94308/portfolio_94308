import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
    Float,
    OrbitControls,
    Preload,
    Text,
} from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

// Technology colors mapping
const techColors = {
    'html': '#E34F26',
    'css': '#1572B6',
    'javascript': '#F7DF1E',
    'typescript': '#3178C6',
    'reactjs': '#61DAFB',
    'redux': '#764ABC',
    'tailwind': '#06B6D4',
    'nodejs': '#339933',
    'mongodb': '#47A248',
    'threejs': '#000000',
    'git': '#F05032',
    'figma': '#F24E1E',
    'docker': '#2496ED',
};

const Ball = ({ icon, name, position, index }) => {
    const groupRef = useRef();
    const meshRef = useRef();
    const [isFollowing, setIsFollowing] = useState(false);
    const [targetPosition, setTargetPosition] = useState(new THREE.Vector3(...position));

    // Orbital animation parameters
    const orbitRadius = useRef(0.3 + Math.random() * 0.5);
    const orbitSpeed = useRef(0.5 + Math.random() * 0.5);
    const orbitPhase = useRef(Math.random() * Math.PI * 2);
    const orbitHeight = useRef(Math.random() * 0.3);
    const basePosition = new THREE.Vector3(...position);

    const techColor = techColors[icon] || '#915EFF';

    useFrame((state, delta) => {
        if (!groupRef.current || !meshRef.current) return;

        if (isFollowing) {
            // Smoothly follow target position
            groupRef.current.position.lerp(targetPosition, 0.05);
        } else {
            // Pendulum/Orbital motion in 3D space
            const time = state.clock.elapsedTime * orbitSpeed.current + orbitPhase.current;

            groupRef.current.position.x = basePosition.x + Math.cos(time) * orbitRadius.current;
            groupRef.current.position.y = basePosition.y + Math.sin(time * 0.7) * orbitHeight.current;
            groupRef.current.position.z = basePosition.z + Math.sin(time) * orbitRadius.current * 0.5;
        }

        // Continuous rotation
        meshRef.current.rotation.x += delta * 0.3;
        meshRef.current.rotation.y += delta * 0.5;

        // Pulsing scale effect when following
        if (isFollowing) {
            const scale = 1.2 + Math.sin(state.clock.elapsedTime * 3) * 0.1;
            meshRef.current.scale.setScalar(scale);
        } else {
            meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
        }
    });

    const handleClick = (event) => {
        event.stopPropagation();
        setIsFollowing(!isFollowing);
    };

    const handlePointerMove = (event) => {
        if (isFollowing) {
            // Convert mouse position to 3D coordinates
            const x = (event.clientX / window.innerWidth) * 20 - 10;
            const y = -(event.clientY / window.innerHeight) * 20 + 10;

            setTargetPosition(new THREE.Vector3(x, y, 0));
        }
    };

    return (
        <group
            ref={groupRef}
            onClick={handleClick}
            onPointerMove={handlePointerMove}
        >
            <Float speed={1.75} rotationIntensity={0.5} floatIntensity={0.5}>
                <mesh ref={meshRef} castShadow receiveShadow>
                    <icosahedronGeometry args={[2.5, 2]} />
                    <meshStandardMaterial
                        color={techColor}
                        emissive={techColor}
                        emissiveIntensity={isFollowing ? 0.8 : 0.3}
                        metalness={0.8}
                        roughness={0.2}
                        transparent
                        opacity={isFollowing ? 1 : 0.9}
                    />

                    {/* Technology name text */}
                    <Text
                        position={[0, 0, 2.7]}
                        fontSize={0.6}
                        color="white"
                        anchorX="center"
                        anchorY="middle"
                        outlineWidth={0.05}
                        outlineColor="#000000"
                    >
                        {name}
                    </Text>
                </mesh>

                {/* Glow effect */}
                <pointLight
                    color={techColor}
                    intensity={isFollowing ? 3 : 1.5}
                    distance={6}
                />
            </Float>
        </group>
    );
};

// Single canvas with all balls
const BallCanvas = ({ technologies }) => {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        // Check if mobile device
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    // Calculate grid positions for balls
    const getPosition = (index) => {
        const cols = isMobile ? 2 : 5; // 2 columns on mobile, 5 on desktop
        const row = Math.floor(index / cols);
        const col = index % cols;
        const spacingX = isMobile ? 7 : 6;
        const spacingY = isMobile ? 7 : 6;

        return [
            (col - (cols - 1) / 2) * spacingX,
            -(row - 1) * spacingY,
            0
        ];
    };

    // Filter technologies for mobile (show fewer on small screens for performance)
    const displayTechnologies = isMobile ? technologies.slice(0, 8) : technologies;

    return (
        <Canvas
            frameloop='always'
            dpr={[1, isMobile ? 1 : 1.5]}
            gl={{
                preserveDrawingBuffer: true,
                antialias: false,
                powerPreference: "high-performance"
            }}
            camera={{
                position: [0, 0, isMobile ? 20 : 25],
                fov: isMobile ? 60 : 50
            }}
            style={{ height: isMobile ? '500px' : '600px' }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    enableRotate={false}
                />
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <directionalLight position={[-5, -5, -5]} intensity={0.5} />

                {displayTechnologies.map((tech, index) => (
                    <Ball
                        key={tech.name}
                        icon={tech.icon}
                        name={tech.name}
                        position={getPosition(index)}
                        index={index}
                    />
                ))}
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default BallCanvas;
