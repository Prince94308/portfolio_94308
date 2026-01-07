import React, { useEffect, useRef } from "react";

const ClickSound = () => {
    const audioContextRef = useRef(null);

    useEffect(() => {
        // Initialize AudioContext only after user interaction if strictly needed, 
        // but we can prep it. Browsers might block auto-init until interaction.
        const initAudio = () => {
            if (!audioContextRef.current) {
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                if (AudioContext) {
                    audioContextRef.current = new AudioContext();
                }
            }
        };

        const playPop = () => {
            initAudio();
            const ctx = audioContextRef.current;
            if (!ctx) return;

            // Check state and resume if suspended (common browser policy)
            if (ctx.state === 'suspended') {
                ctx.resume();
            }

            // Create oscillator and gain node
            const oscillator = ctx.createOscillator();
            const gainNode = ctx.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(ctx.destination);

            // Sound parameters for a "pop"
            // Quick pitch drop + quick volume decay
            const now = ctx.currentTime;

            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(600, now);             // Start freq
            oscillator.frequency.exponentialRampToValueAtTime(100, now + 0.1); // Drop quickly

            gainNode.gain.setValueAtTime(0.3, now);                    // Start volume (0.3 is decent, not too loud)
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.1); // Fade out

            oscillator.start(now);
            oscillator.stop(now + 0.15);
        };

        window.addEventListener('click', playPop);

        return () => {
            window.removeEventListener('click', playPop);
            if (audioContextRef.current) {
                audioContextRef.current.close();
            }
        };
    }, []);

    return null; // Logic only, no UI
};

export default ClickSound;
