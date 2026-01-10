import React from "react";
import { Tilt } from "react-tilt";

const MagicCard = ({ children, className = "" }) => {
    return (
        <Tilt
            options={{
                max: 20,
                scale: 1.02,
                speed: 450,
                perspective: 1000,
            }}
            className={`relative rounded-2xl p-[1px] bg-gradient-to-b from-[#915EFF] to-transparent shadow-card transition-all duration-300 hover:shadow-[0_0_30px_#915EFF] group ${className}`}
        >
            {/* Moving Light Effect */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-50%] left-0 w-full h-[50%] bg-gradient-to-b from-transparent via-white/20 to-transparent animate-[meteor_3s_linear_infinite]" />
            </div>

            {/* Inner Content Card */}
            <div className="bg-tertiary/60 backdrop-blur-lg border border-white/10 rounded-2xl min-h-[280px] p-5 relative z-10 flex justify-evenly items-center flex-col h-full">
                {children}
            </div>

            <style>{`
                @keyframes meteor {
                    0% { transform: translateY(-100%); opacity: 0; }
                    50% { opacity: 1; }
                    100% { transform: translateY(400%); opacity: 0; }
                }
            `}</style>
        </Tilt>
    );
};

export default MagicCard;
