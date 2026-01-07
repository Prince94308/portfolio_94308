import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const FootballCursor = () => {
    const cursorRef = useRef(null);
    const fireRef = useRef(null);
    const pos = useRef({ x: 0, y: 0 });
    const mouse = useRef({ x: 0, y: 0 });
    const speed = 0.15; // Follow speed (0.1 to 1)

    useEffect(() => {
        // Disable on touch devices
        const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouch) return;

        // Initial position outside screen or center
        pos.current = { x: -100, y: -100 };

        const updateMouse = (e) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };

        window.addEventListener("mousemove", updateMouse);

        // GSAP setters for performance
        const xSet = gsap.quickSetter(cursorRef.current, "x", "px");
        const ySet = gsap.quickSetter(cursorRef.current, "y", "px");
        const rotSet = gsap.quickSetter(fireRef.current, "rotation", "deg");

        const loop = () => {
            const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

            const dx = mouse.current.x - pos.current.x;
            const dy = mouse.current.y - pos.current.y;

            pos.current.x += dx * dt;
            pos.current.y += dy * dt;

            xSet(pos.current.x);
            ySet(pos.current.y);

            // Calculate rotation for the fire trail
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Only rotate if there's significant movement to avoid jitter
            if (dist > 0.1) {
                const angle = Math.atan2(dy, dx) * (180 / Math.PI);
                // Fire trails *behind*, so we rotate opposite to movement.
                // If moving 0 deg (RIGHT), fire points 180 deg (LEFT).
                rotSet(angle + 180);
            }
        };

        gsap.ticker.add(loop);

        return () => {
            window.removeEventListener("mousemove", updateMouse);
            gsap.ticker.remove(loop);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 pointer-events-none z-[99999] hidden md:block"
            style={{
                transform: "translate3d(-100px, -100px, 0)" // Initial off-screen
            }}
        >
            {/* Container centered on the cursor coordinate */}
            <div className="relative -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12">

                {/* Fire Container - Rotating Wrapper */}
                <div ref={fireRef} className="absolute inset-0 flex items-center justify-center origin-center">
                    {/* 
                    Fire Visuals 
                    Drawn extending to the RIGHT (0deg default).
                    When rotated 180 (trailing), it will extend LEFT.
                 */}

                    {/* Outer Glow/Trail */}
                    <div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-40 h-2 
                                 bg-gradient-to-r from-orange-500 via-red-500 to-transparent 
                                 rounded-r-full blur-[2px] opacity-80"
                    ></div>

                    {/* Inner Hot Core */}
                    <div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-32 h-0.5 
                                 bg-yellow-200 
                                 rounded-r-full blur-[1px] opacity-90"
                    ></div>

                    {/* Extra particles or flicker suggestions could go here */}
                </div>

                {/* Football Icon - Stays upright or could assume rotation if desired */}
                {/* To keep the ball upright while tail rotates, we simply don't put it in the rotated container. */}
                <div className="relative z-10 text-2xl drop-shadow-lg filter">
                    ⚽
                </div>
            </div>
        </div>
    );
};

export default FootballCursor;
