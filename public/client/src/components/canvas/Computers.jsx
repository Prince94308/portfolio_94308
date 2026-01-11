import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";
import AnimatedSpheres from "./AnimatedSpheres";

// Robot component with proper sitting pose
const Robot = ({ position }) => {
    const robotRef = useRef();
    const leftHandRef = useRef();
    const rightHandRef = useRef();

    useFrame((state) => {
        if (robotRef.current) {
            // Subtle breathing animation
            robotRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.02;
        }

        // Typing animation for hands
        if (leftHandRef.current && rightHandRef.current) {
            const typingSpeed = state.clock.elapsedTime * 3;
            leftHandRef.current.position.y = 0.68 + Math.sin(typingSpeed) * 0.03;
            rightHandRef.current.position.y = 0.68 + Math.sin(typingSpeed + Math.PI) * 0.03;
        }
    });

    return (
        <group ref={robotRef} position={position} rotation={[0, Math.PI, 0]}>
            {/* Head */}
            <mesh position={[0, 1.15, -0.05]} castShadow>
                <boxGeometry args={[0.45, 0.45, 0.45]} />
                <meshStandardMaterial
                    color="#4A90E2"
                    metalness={0.9}
                    roughness={0.1}
                    envMapIntensity={1.5}
                />
            </mesh>

            {/* Eyes with glow */}
            <mesh position={[-0.12, 1.18, 0.18]}>
                <sphereGeometry args={[0.07, 20, 20]} />
                <meshStandardMaterial
                    color="#00FF00"
                    emissive="#00FF00"
                    emissiveIntensity={1.2}
                    metalness={0.5}
                />
            </mesh>
            <mesh position={[0.12, 1.18, 0.18]}>
                <sphereGeometry args={[0.07, 20, 20]} />
                <meshStandardMaterial
                    color="#00FF00"
                    emissive="#00FF00"
                    emissiveIntensity={1.2}
                    metalness={0.5}
                />
            </mesh>

            {/* Antenna */}
            <mesh position={[0, 1.45, -0.05]} castShadow>
                <cylinderGeometry args={[0.025, 0.025, 0.25, 16]} />
                <meshStandardMaterial
                    color="#FFD700"
                    metalness={0.95}
                    roughness={0.05}
                />
            </mesh>
            <mesh position={[0, 1.6, -0.05]}>
                <sphereGeometry args={[0.06, 20, 20]} />
                <meshStandardMaterial
                    color="#FF6B6B"
                    emissive="#FF6B6B"
                    emissiveIntensity={0.8}
                />
            </mesh>

            {/* Body - slightly leaning forward */}
            <mesh position={[0, 0.75, 0.05]} rotation={[0.1, 0, 0]} castShadow>
                <boxGeometry args={[0.55, 0.65, 0.45]} />
                <meshStandardMaterial
                    color="#5DADE2"
                    metalness={0.85}
                    roughness={0.15}
                />
            </mesh>

            {/* Chest light with stronger glow */}
            <mesh position={[0, 0.8, 0.28]}>
                <circleGeometry args={[0.1, 24]} />
                <meshStandardMaterial
                    color="#00FFB3"
                    emissive="#00FFB3"
                    emissiveIntensity={1.0}
                />
            </mesh>
            <pointLight position={[0, 0.8, 0.3]} color="#00FFB3" intensity={1.5} distance={1} />

            {/* Upper Arms - angled down toward keyboard */}
            <mesh position={[-0.4, 0.85, 0.05]} rotation={[0.6, 0, 0]} castShadow>
                <cylinderGeometry args={[0.09, 0.09, 0.35, 16]} />
                <meshStandardMaterial
                    color="#4A90E2"
                    metalness={0.9}
                    roughness={0.1}
                />
            </mesh>
            <mesh position={[0.4, 0.85, 0.05]} rotation={[0.6, 0, 0]} castShadow>
                <cylinderGeometry args={[0.09, 0.09, 0.35, 16]} />
                <meshStandardMaterial
                    color="#4A90E2"
                    metalness={0.9}
                    roughness={0.1}
                />
            </mesh>

            {/* Forearms - extending to keyboard */}
            <mesh position={[-0.4, 0.68, 0.2]} rotation={[-0.3, 0, 0]} castShadow>
                <cylinderGeometry args={[0.07, 0.07, 0.3, 16]} />
                <meshStandardMaterial
                    color="#3A7BC8"
                    metalness={0.85}
                    roughness={0.15}
                />
            </mesh>
            <mesh position={[0.4, 0.68, 0.2]} rotation={[-0.3, 0, 0]} castShadow>
                <cylinderGeometry args={[0.07, 0.07, 0.3, 16]} />
                <meshStandardMaterial
                    color="#3A7BC8"
                    metalness={0.85}
                    roughness={0.15}
                />
            </mesh>

            {/* Hands - positioned over keyboard with animation refs */}
            <mesh ref={leftHandRef} position={[-0.3, 0.68, 0.35]} castShadow>
                <sphereGeometry args={[0.08, 20, 20]} />
                <meshStandardMaterial
                    color="#FFD700"
                    metalness={0.95}
                    roughness={0.05}
                />
            </mesh>
            <mesh ref={rightHandRef} position={[0.3, 0.68, 0.35]} castShadow>
                <sphereGeometry args={[0.08, 20, 20]} />
                <meshStandardMaterial
                    color="#FFD700"
                    metalness={0.95}
                    roughness={0.05}
                />
            </mesh>

            {/* Upper Legs - bent sitting position */}
            <mesh position={[-0.15, 0.55, 0]} rotation={[1.3, 0, 0]} castShadow>
                <cylinderGeometry args={[0.1, 0.1, 0.4, 16]} />
                <meshStandardMaterial
                    color="#3A7BC8"
                    metalness={0.8}
                    roughness={0.2}
                />
            </mesh>
            <mesh position={[0.15, 0.55, 0]} rotation={[1.3, 0, 0]} castShadow>
                <cylinderGeometry args={[0.1, 0.1, 0.4, 16]} />
                <meshStandardMaterial
                    color="#3A7BC8"
                    metalness={0.8}
                    roughness={0.2}
                />
            </mesh>

            {/* Lower Legs - vertical down to floor */}
            <mesh position={[-0.15, 0.25, 0.25]} rotation={[0, 0, 0]} castShadow>
                <cylinderGeometry args={[0.09, 0.09, 0.3, 16]} />
                <meshStandardMaterial
                    color="#2A5FAA"
                    metalness={0.75}
                    roughness={0.25}
                />
            </mesh>
            <mesh position={[0.15, 0.25, 0.25]} rotation={[0, 0, 0]} castShadow>
                <cylinderGeometry args={[0.09, 0.09, 0.3, 16]} />
                <meshStandardMaterial
                    color="#2A5FAA"
                    metalness={0.75}
                    roughness={0.25}
                />
            </mesh>

            {/* Feet - on floor */}
            <mesh position={[-0.15, 0.05, 0.35]} castShadow>
                <boxGeometry args={[0.13, 0.07, 0.2]} />
                <meshStandardMaterial
                    color="#FFD700"
                    metalness={0.95}
                    roughness={0.05}
                />
            </mesh>
            <mesh position={[0.15, 0.05, 0.35]} castShadow>
                <boxGeometry args={[0.13, 0.07, 0.2]} />
                <meshStandardMaterial
                    color="#FFD700"
                    metalness={0.95}
                    roughness={0.05}
                />
            </mesh>
        </group>
    );
};

// Desk component
const Desk = ({ position }) => {
    return (
        <group position={position}>
            {/* Table top */}
            <mesh position={[0, 0.6, 0]} receiveShadow castShadow>
                <boxGeometry args={[1.6, 0.08, 0.8]} />
                <meshStandardMaterial color="#D4A574" roughness={0.7} />
            </mesh>

            {/* Legs */}
            <mesh position={[-0.7, 0.3, -0.35]} castShadow>
                <boxGeometry args={[0.08, 0.6, 0.08]} />
                <meshStandardMaterial color="#A67C52" />
            </mesh>
            <mesh position={[0.7, 0.3, -0.35]} castShadow>
                <boxGeometry args={[0.08, 0.6, 0.08]} />
                <meshStandardMaterial color="#A67C52" />
            </mesh>
            <mesh position={[-0.7, 0.3, 0.35]} castShadow>
                <boxGeometry args={[0.08, 0.6, 0.08]} />
                <meshStandardMaterial color="#A67C52" />
            </mesh>
            <mesh position={[0.7, 0.3, 0.35]} castShadow>
                <boxGeometry args={[0.08, 0.6, 0.08]} />
                <meshStandardMaterial color="#A67C52" />
            </mesh>
        </group>
    );
};

// Chair component
const Chair = ({ position }) => {
    return (
        <group position={position}>
            {/* Seat */}
            <mesh position={[0, 0.5, 0]} castShadow>
                <cylinderGeometry args={[0.25, 0.25, 0.08, 32]} />
                <meshStandardMaterial color="#3A3A3A" roughness={0.6} />
            </mesh>

            {/* Backrest */}
            <mesh position={[0, 0.75, -0.22]} castShadow>
                <boxGeometry args={[0.4, 0.5, 0.08]} />
                <meshStandardMaterial color="#4A4A4A" roughness={0.6} />
            </mesh>

            {/* Center pole */}
            <mesh position={[0, 0.25, 0]}>
                <cylinderGeometry args={[0.04, 0.04, 0.3, 16]} />
                <meshStandardMaterial color="#2A2A2A" metalness={0.7} />
            </mesh>

            {/* Base - 5 legs */}
            {[0, 1, 2, 3, 4].map((i) => {
                const angle = (i * Math.PI * 2) / 5;
                return (
                    <mesh
                        key={i}
                        position={[Math.cos(angle) * 0.2, 0.05, Math.sin(angle) * 0.2]}
                        rotation={[0, angle, 0]}
                    >
                        <boxGeometry args={[0.25, 0.04, 0.04]} />
                        <meshStandardMaterial color="#2A2A2A" metalness={0.7} />
                    </mesh>
                );
            })}

            {/* Wheels */}
            {[0, 1, 2, 3, 4].map((i) => {
                const angle = (i * Math.PI * 2) / 5;
                return (
                    <mesh
                        key={`wheel-${i}`}
                        position={[Math.cos(angle) * 0.28, 0.03, Math.sin(angle) * 0.28]}
                    >
                        <sphereGeometry args={[0.04, 16, 16]} />
                        <meshStandardMaterial color="#FFD700" metalness={0.6} />
                    </mesh>
                );
            })}
        </group>
    );
};

// Monitor component
const Monitor = ({ position }) => {
    const screenRef = useRef();

    useFrame((state) => {
        if (screenRef.current) {
            // Subtle screen glow animation
            const intensity = 0.5 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
            screenRef.current.material.emissiveIntensity = intensity;
        }
    });

    return (
        <group position={position}>
            {/* Screen */}
            <mesh ref={screenRef} position={[0, 0.25, 0]} castShadow>
                <boxGeometry args={[0.6, 0.4, 0.05]} />
                <meshStandardMaterial
                    color="#1a1a1a"
                    emissive="#00c6ff"
                    emissiveIntensity={0.5}
                    roughness={0.1}
                    metalness={0.8}
                />
            </mesh>

            {/* Stand */}
            <mesh position={[0, 0.03, 0]}>
                <cylinderGeometry args={[0.03, 0.03, 0.15, 16]} />
                <meshStandardMaterial color="#CCCCCC" metalness={0.8} />
            </mesh>

            {/* Base */}
            <mesh position={[0, -0.05, 0]} receiveShadow>
                <cylinderGeometry args={[0.15, 0.15, 0.02, 32]} />
                <meshStandardMaterial color="#AAAAAA" metalness={0.7} />
            </mesh>
        </group>
    );
};

// Keyboard component
const Keyboard = ({ position }) => {
    return (
        <group position={position}>
            <mesh castShadow receiveShadow>
                <boxGeometry args={[0.45, 0.03, 0.15]} />
                <meshStandardMaterial color="#2C2C2C" roughness={0.4} metalness={0.3} />
            </mesh>

            {/* Keys */}
            {Array.from({ length: 8 }).map((_, i) => (
                <mesh key={i} position={[-0.18 + i * 0.05, 0.02, 0]}>
                    <boxGeometry args={[0.04, 0.01, 0.04]} />
                    <meshStandardMaterial color="#E0E0E0" roughness={0.5} />
                </mesh>
            ))}
        </group>
    );
};

// Mouse component
const Mouse = ({ position }) => {
    return (
        <group position={position}>
            <mesh castShadow>
                <boxGeometry args={[0.06, 0.03, 0.09]} />
                <meshStandardMaterial color="#3A3A3A" roughness={0.3} metalness={0.4} />
            </mesh>
            <mesh position={[0, 0.016, 0]}>
                <sphereGeometry args={[0.005, 8, 8]} />
                <meshStandardMaterial color="#FF0000" emissive="#FF0000" emissiveIntensity={0.8} />
            </mesh>
        </group>
    );
};

// Main workspace scene with animated spheres
const RobotWorkspace = ({ isMobile }) => {
    const scale = isMobile ? 0.8 : 1.5; // Smaller scale for mobile/tablet
    const position = isMobile ? [0, -1, 0] : [0, 0, 0]; // Adjust position for mobile

    return (
        <group scale={[scale, scale, scale]} position={position}>
            {/* Enhanced Lighting */}
            <ambientLight intensity={0.3} />

            {/* Main directional light */}
            <directionalLight
                position={[5, 10, 5]}
                intensity={1.2}
                castShadow
                shadow-mapSize={[2048, 2048]}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
            />

            {/* Colored accent lights */}
            <pointLight position={[-5, 5, 5]} intensity={0.8} color="#00c6ff" distance={15} />
            <pointLight position={[5, 5, -5]} intensity={0.8} color="#E233E2" distance={15} />
            <pointLight position={[0, 8, 0]} intensity={0.6} color="#FFD700" distance={12} />

            {/* Spotlight on robot for dramatic effect */}
            <spotLight
                position={[0, 6, 3]}
                angle={0.4}
                penumbra={0.5}
                intensity={1.5}
                castShadow
                target-position={[0, 0.8, 0.8]}
                color="#ffffff"
            />

            {/* Rim light for depth */}
            <directionalLight position={[-8, 3, -5]} intensity={0.4} color="#4A90E2" />

            {/* Scene components */}
            <Desk position={[0, 0, 0]} />
            <Chair position={[0, 0, 0.8]} />
            <Robot position={[0, 0.5, 0.5]} />
            <Monitor position={[0, 0.64, -0.2]} />
            <Keyboard position={[0, 0.66, 0.2]} />
            <Mouse position={[0.3, 0.66, 0.25]} />

            {/* Animated Colorful Spheres */}
            <AnimatedSpheres />

            {/* Floor with reflection */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
                <planeGeometry args={[20, 20]} />
                <meshStandardMaterial
                    color="#0d0d1a"
                    roughness={0.6}
                    metalness={0.3}
                />
            </mesh>
        </group>
    );
};


const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Add a listener for changes to the screen size
        // Changed to 1024px to include tablets
        const mediaQuery = window.matchMedia("(max-width: 1024px)");

        // Set the initial value of the `isMobile` state variable
        setIsMobile(mediaQuery.matches);

        // Define a callback function to handle changes to the media query
        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        // Add the callback function as a listener for changes to the media query
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        // Remove the listener when the component is unmounted
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <Canvas
            frameloop="always"
            shadows
            dpr={[1, 2]}
            camera={{ position: [4, 1.75, 5], fov: 65 }}
            gl={{
                preserveDrawingBuffer: true,
                alpha: true,  // Enable transparency
                antialias: true
            }}
            style={{
                position: 'absolute',
                // Responsive styles
                right: isMobile ? '0%' : '0%',
                left: isMobile ? '0%' : 'auto',
                top: isMobile ? 'auto' : '10%',
                bottom: 0,
                width: isMobile ? '100%' : '48%',
                height: isMobile ? '60%' : '100%',
                pointerEvents: 'auto',
                background: 'transparent'
            }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={true}
                    autoRotate={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={0}
                />
                <RobotWorkspace isMobile={isMobile} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default ComputersCanvas;

