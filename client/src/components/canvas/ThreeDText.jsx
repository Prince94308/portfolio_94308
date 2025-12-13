import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text3D } from "@react-three/drei";

const ThreeDText = ({ text, position, size, color, rotation = [0, 0, 0] }) => {
    const textRef = useRef();

    useFrame(({ clock }) => {
        if (textRef.current) {
            // Gentle floating animation
            textRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime()) * 0.1;
            // Slight rotation animation
            textRef.current.rotation.y = rotation[1] + Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
        }
    });

    return (
        <group position={position} rotation={rotation}>
            <Text3D
                ref={textRef}
                font="https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"
                size={size}
                height={0.2}
                curveSegments={12}
                bevelEnabled
                bevelThickness={0.02}
                bevelSize={0.02}
                bevelOffset={0}
                bevelSegments={5}
            >
                {text}
                <meshStandardMaterial color={color} />
            </Text3D>
        </group>
    );
};

export default ThreeDText;
