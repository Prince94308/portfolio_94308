import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { certifications } from "../constants";
import MagicCard from "./MagicCard";
import WaveBackground from "./WaveBackground";

// Certificate Image Modal Component
const CertificateModal = ({ isOpen, imageUrl, onClose, certName }) => {
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
            <div className="relative max-w-4xl max-h-[85vh] w-full flex items-center justify-center">
                {/* Back Button Icon */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 md:top-6 md:right-6 z-[10000] bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-2xl hover:shadow-purple-500/50 hover:scale-110 group"
                    aria-label="Back"
                    title="Back (ESC)"
                >
                    <svg
                        xmlns=""
                        className="h-6 w-6 md:h-7 md:w-7 group-hover:-translate-x-1 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                    </svg>
                </button>

                {/* Certificate Image */}
                <img
                    src={imageUrl}
                    alt={certName}
                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-zoomIn hover:shadow-[#FF00FF]/30 transition-shadow duration-300"
                    onClick={(e) => e.stopPropagation()}
                />
            </div>
        </div>
    );
};

const CertificationCard = ({ cert, onViewCertificate }) => {
    return (
        <MagicCard className="w-full sm:w-[360px]">
            <div className="w-full flex flex-col items-center relative overflow-hidden">
                <WaveBackground color="#FF00FF" opacity={0.12} />
                {cert.certificateImage && (
                    <img
                        src={cert.certificateImage}
                        alt={cert.name}
                        className="w-full h-[180px] object-cover rounded-t-lg mb-4 shadow-[0_0_20px_rgba(255,0,255,0.3)] border-2 border-[#FF00FF]/50 hover:shadow-[0_0_30px_rgba(255,0,255,0.5)] transition-all duration-300 relative z-10"
                    />
                )}
                <h3 className="text-white text-[20px] font-bold text-center min-h-[60px] flex items-center relative z-10">{cert.name}</h3>
                <p className="text-secondary text-[14px] mt-2 relative z-10">{cert.issuer}</p>
                <p className="text-secondary text-[12px] relative z-10">{cert.date}</p>

                {cert.certificateImage && (
                    <div className="mt-4 relative z-10">
                        <button
                            onClick={() => onViewCertificate(cert)}
                            className="bg-gradient-to-r from-[#FF00FF] to-[#915EFF] py-2 px-6 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:shadow-lg hover:shadow-[#FF00FF]/50 transition-all"
                        >
                            🏆 View Certificate
                        </button>
                    </div>
                )}
            </div>
        </MagicCard>
    );
};

const Certifications = () => {
    const [selectedCert, setSelectedCert] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleViewCertificate = (cert) => {
        setSelectedCert(cert);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedCert(null), 300);
    };

    return (
        <>
            <motion.div>
                <p className={`${styles.sectionSubText} text-center`}>
                    My Credentials
                </p>
                <h2 className={`${styles.sectionHeadText} text-center text-[#FF00FF]`}>
                    Certifications.
                </h2>
            </motion.div>

            <div className="mt-20 flex flex-wrap gap-7 justify-center">
                {certifications.map((cert, index) => (
                    <CertificationCard
                        key={`cert-${index}`}
                        cert={cert}
                        onViewCertificate={handleViewCertificate}
                    />
                ))}
            </div>

            {/* Certificate Modal */}
            <CertificateModal
                isOpen={isModalOpen}
                imageUrl={selectedCert?.certificateImage}
                certName={selectedCert?.name}
                onClose={handleCloseModal}
            />
        </>
    );
};

export default SectionWrapper(Certifications, "certifications");
