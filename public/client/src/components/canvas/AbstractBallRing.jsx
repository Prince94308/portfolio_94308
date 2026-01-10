import React, { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, Float, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "../Loader";

const AbstractRing = () => {
    const groupRef = useRef();

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.2;
            groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
        }
    });

    const spheres = useMemo(() => {
        const list = [];
        const radius = 1.8; // Reduced radius
        const items = 50;

        for (let i = 0; i < items; i++) {
            const theta = (i / items) * Math.PI * 2;
            const offsetRadius = Math.random() * 0.6; // Reduced offset
            const offsetAngle = Math.random() * Math.PI * 2;

            const x = (radius + offsetRadius * Math.cos(offsetAngle)) * Math.cos(theta);
            const y = (radius + offsetRadius * Math.cos(offsetAngle)) * Math.sin(theta);
            const z = offsetRadius * Math.sin(offsetAngle) + (Math.random() - 0.5) * 0.5;

            const scale = 0.2 + Math.random() * 0.4; // Reduced scale

            // Material variants - Professional Dark Metallic
            const type = Math.random();
            let color, roughness, metalness, transmission, opacity;

            if (type > 0.7) {
                // Platinum/Silver (Clear Visible Accent)
                color = "#E0E0E0";
                roughness = 0.1;
                metalness = 1.0;
                transmission = 0;
                opacity = 1;
            } else if (type > 0.4) {
                // Deep Midnight Blue
                color = "#0F172A";
                roughness = 0.2;
                metalness = 0.9;
                transmission = 0;
                opacity = 1;
            } else {
                // Obsidian/Dark Grey
                color = "#333333";
                roughness = 0.1;
                metalness = 0.8;
                transmission = 0;
                opacity = 1;
            }

            list.push({ position: [x, y, z], scale, color, roughness, metalness, transmission, opacity });
        }
        return list;
    }, []);

    return (
        <group ref={groupRef} rotation={[0, 0, Math.PI / 4]} scale={0.7}>
            <ambientLight intensity={1.5} />
            <pointLight position={[10, 10, 10]} intensity={4} color="#ffffff" />
            <pointLight position={[-10, -10, -10]} intensity={2} color="#33 E2E2" />
            <spotLight position={[0, 10, 0]} intensity={3} penumbra={1} />

            {spheres.map((s, i) => (
                <Float key={i} speed={2} rotationIntensity={1} floatIntensity={1} floatingRange={[-0.1, 0.1]}>
                    <mesh position={s.position} scale={s.scale}>
                        <sphereGeometry args={[1, 32, 32]} />
                        <meshPhysicalMaterial
                            color={s.color}
                            roughness={s.roughness}
                            metalness={s.metalness}
                            transmission={s.transmission}
                            opacity={s.opacity}
                            clearcoat={1} // High gloss
                            clearcoatRoughness={0}
                        />
                    </mesh>
                </Float>
            ))}
        </group>
    );
};

const AbstractBallRingCanvas = () => {
    return (
        <Canvas
            shadows
            dpr={[1, 2]}
            camera={{ position: [0, 0, 8], fov: 45 }}
            gl={{ preserveDrawingBuffer: true, alpha: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    autoRotate
                    autoRotateSpeed={1}
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <AbstractRing />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default AbstractBallRingCanvas;
