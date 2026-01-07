import React from "react";

const SimpleLoader = () => {
    return (
        <div className="flex justify-center items-center h-full w-full absolute inset-0 bg-transparent pointer-events-none">
            <span className="canvas-loader border-white/20"></span>
        </div>
    );
};

export default SimpleLoader;
