import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import InteractiveText from "./InteractiveText";
import TextType from "./TextType";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import resumePDF from "../assets/Resume-Prince.pdf";

// PDF Viewer Modal Component
const PDFModal = ({ isOpen, pdfUrl, onClose }) => {
    useEffect(() => {
        // Keyboard event handler
        const handleKeyDown = (e) => {
            if (e.key === "Escape" && isOpen) {
                onClose();
            }
        };

        // Prevent body scroll when modal is open
        if (isOpen) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.body.style.overflow = "unset";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-95 p-4 animate-fadeIn"
            onClick={onClose}
        >
            <div className="relative w-full max-w-5xl h-[90vh] flex items-center justify-center">
                {/* Exit Button Icon */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 md:top-6 md:right-6 z-[10000] bg-gradient-to-br from-red-500 to-red-700 text-white rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center hover:from-red-600 hover:to-red-800 transition-all duration-300 shadow-2xl hover:shadow-red-500/50 hover:scale-110 group"
                    aria-label="Close Resume"
                    title="Close (ESC)"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 md:h-7 md:w-7 group-hover:rotate-90 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                {/* PDF Viewer */}
                <iframe
                    src={pdfUrl}
                    className="w-full h-full rounded-lg shadow-2xl animate-zoomIn"
                    title="Resume PDF"
                    onClick={(e) => e.stopPropagation()}
                />
            </div>
        </div>
    );
};

const Hero = () => {
    const [isPDFModalOpen, setIsPDFModalOpen] = useState(false);

    const handleViewResume = () => {
        setIsPDFModalOpen(true);
    };

    const handleClosePDF = () => {
        setIsPDFModalOpen(false);
    };

    return (
        <section className={`relative w-full h-screen mx-auto`}>
            <div
                className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 pointer-events-none`}
            >
                <div className="flex flex-col justify-center items-start mt-5 z-10 pointer-events-auto max-w-2xl">
                    {/* Status Badge */}
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1d1836] border border-[#33E2E2]/30 shadow-[0_0_10px_rgba(51,226,226,0.2)] mb-6 w-fit">
                        <span className="text-xl">👋</span>
                        <p className="text-[#33E2E2] font-mono text-sm tracking-wide">
                            Hello, I'm available for work
                        </p>
                    </div>

                    {/* Main Heading */}
                    <div className={`${styles.heroHeadText} text-white-100 font-black flex flex-wrap gap-2`}>
                        <TextType
                            text={["Prince Kumar"]}
                            typingSpeed={100}
                            cursorCharacter="|"
                            loop={true}
                            textColors={['var(--white-100)']}
                            showCursor={true}
                        />
                    </div>

                    {/* Sub Heading */}
                    <div className={`${styles.heroSubText} mt-2 text-white-100 font-bold leading-tight flex flex-wrap gap-2`}>
                        <span className="text-[#33E2E2] flex gap-2">
                            <InteractiveText text="Mern" /> <InteractiveText text="Stack" />
                        </span>
                        <span className="text-[#E233E2]">
                            <InteractiveText text="Enthusiast" />
                        </span>
                        &
                        <span className="text-[#E233E2] flex gap-2">
                            <InteractiveText text="Java" /> <InteractiveText text="Developer" />
                        </span>
                    </div>

                    {/* Description */}
                    <p className="mt-6 text-secondary text-[16px] max-w-lg leading-[30px]">
                        I craft secure, scalable digital solutions that protect and perform. Specializing in penetration testing, secure architecture, and modern Enterprise  applications with <span className="text-[#33E2E2] font-bold">2+ years</span> of experience.
                    </p>

                    {/* Stats */}
                    <div className="flex flex-row gap-10 mt-10 border-t border-white-100/10 pt-6 w-[85%]">
                        <div className="flex flex-col items-center">
                            <h3 className="text-[#33E2E2] text-3xl font-bold">50+</h3>
                            <p className="text-secondary text-sm uppercase tracking-wider">Projects Completed</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h3 className="text-[#E233E2] text-3xl font-bold">8</h3>
                            <p className="text-secondary text-sm uppercase tracking-wider">Certifications</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h3 className="text-[#00FF9D] text-3xl font-bold">99%</h3>
                            <p className="text-secondary text-sm uppercase tracking-wider">Client Satisfaction</p>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-row gap-6 mt-10">
                        <button
                            onClick={handleViewResume}
                            className="bg-transparent border border-[#33E2E2] text-[#33E2E2] hover:bg-[#33E2E2]/10 font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 flex items-center gap-2"
                        >
                            <span>↓</span> View Resume
                        </button>
                    </div>
                </div>
            </div>

            <ComputersCanvas />

            <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
                <a href="#about">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className="w-3 h-3 rounded-full bg-secondary mb-1"
                        />
                    </div>
                </a>
            </div>

            {/* PDF Modal */}
            <PDFModal
                isOpen={isPDFModalOpen}
                pdfUrl={resumePDF}
                onClose={handleClosePDF}
            />
        </section>
    );
};

export default Hero;
