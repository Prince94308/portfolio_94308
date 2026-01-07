import React, { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Vector3 } from 'three';

const LightningBolt = ({ start, end, segments = 20, offset = 0.5 }) => {
    const lineRef = useRef();

    // Create geometry for the lightning bolt
    const geometry = useMemo(() => {
        const points = [];
        const step = new Vector3().subVectors(end, start).divideScalar(segments);

        let currentPos = start.clone();
        points.push(currentPos.clone());

        for (let i = 0; i < segments - 1; i++) {
            currentPos.add(step);
            // Add random offset for "jagged" look
            const randomOffset = new Vector3(
                (Math.random() - 0.5) * offset,
                (Math.random() - 0.5) * offset,
                (Math.random() - 0.5) * offset
            );
            points.push(currentPos.clone().add(randomOffset));
        }
        points.push(end.clone());

        return new THREE.BufferGeometry().setFromPoints(points);
    }, [start, end, segments, offset]); // Re-generate on prop change

    useFrame(() => {
        if (lineRef.current) {
            // Flicker effect: random opacity
            lineRef.current.material.opacity = Math.random() > 0.5 ? 1 : 0;

            if (Math.random() > 0.9) {
                // Regenerate positions occasionally for "moving" lightning
                const points = [];
                const step = new Vector3().subVectors(end, start).divideScalar(segments);
                let currentPos = start.clone();
                points.push(currentPos.clone());
                for (let i = 0; i < segments - 1; i++) {
                    currentPos.add(step);
                    const randomOffset = new Vector3(
                        (Math.random() - 0.5) * offset,
                        (Math.random() - 0.5) * offset,
                        (Math.random() - 0.5) * offset
                    );
                    points.push(currentPos.clone().add(randomOffset));
                }
                points.push(end.clone());
                lineRef.current.geometry.setFromPoints(points);
            }
        }
    });

    return (
        <line ref={lineRef} geometry={geometry}>
            <lineBasicMaterial color="#5dade2" linewidth={2} transparent opacity={0.8} />
        </line>
    );
};

const Lightning = () => {
    const [bolts, setBolts] = useState([]);

    const handleStrike = (point) => {
        const newBolt = {
            id: Date.now() + Math.random(), // Ensure unique ID
            start: new Vector3((Math.random() - 0.5) * 10, 5, (Math.random() - 0.5) * 5),
            end: point,
        };
        setBolts((prev) => [...prev, newBolt]);

        // Remove bolt after some time
        setTimeout(() => {
            setBolts((prev) => prev.filter(b => b.id !== newBolt.id));
        }, 300);
    };

    useFrame(() => {
        // Random strikes occasionally
        if (Math.random() > 0.99) { // Reduced frequency
            const x = (Math.random() - 0.5) * 20;
            const z = (Math.random() - 0.5) * 10;
            handleStrike(new Vector3(x, -2, z));
        }
    });

    return (
        <group>
            {/* Invisible plane to catch clicks */}
            <mesh visible={false} onClick={(e) => handleStrike(e.point)}>
                <planeGeometry args={[100, 100]} />
                <meshBasicMaterial />
            </mesh>
            <pointLight position={[0, 0, 0]} intensity={2} color="#5dade2" distance={10} />
            {bolts.map((bolt) => (
                <LightningBolt key={bolt.id} start={bolt.start} end={bolt.end} />
            ))}
        </group>
    );
};

export default Lightning;
