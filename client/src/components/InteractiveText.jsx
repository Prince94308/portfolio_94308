import React from "react";
import { motion } from "framer-motion";

const InteractiveText = ({ text = "", className = "" }) => {
    // Split text into characters
    const characters = text.split("");

    return (
        <div className={`flex flex-wrap ${className}`}>
            {characters.map((char, index) => (
                <InteractiveChar key={index} char={char} />
            ))}
        </div>
    );
};

const InteractiveChar = ({ char }) => {
    // Special handling for spaces to ensure they render and create gaps
    if (char === " ") {
        return <span className="w-2"> </span>;
    }

    // Neon colors palette
    const colors = ["#00c6ff", "#0072ff", "#33E2E2", "#E233E2", "#00FF9D", "#FFD700"];

    // Random initial color index
    const randomStartColor = colors[Math.floor(Math.random() * colors.length)];

    return (
        <motion.span
            className="inline-block cursor-pointer transition-colors duration-75"
            animate={{
                color: colors,
            }}
            transition={{
                duration: 4 + Math.random() * 4, // Random duration between 4s and 8s for slow, organic change
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                delay: Math.random() * 2, // Random start delay
            }}
            whileHover={{
                scale: 1.5,
                rotate: Math.random() * 20 - 10,
                textShadow: `0 0 8px ${randomStartColor}, 0 0 15px ${randomStartColor}`,
                y: -5,
                color: randomStartColor, // Snap to a specific bright color on hover
                transition: { duration: 0.2 } // Fast reaction on hover
            }}
            whileTap={{ scale: 0.9 }}
        >
            {char}
        </motion.span>
    );
};

export default InteractiveText;
