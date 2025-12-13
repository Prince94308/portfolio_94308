import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { education } from "../constants";
import MagicCard from "./MagicCard";
import WaveBackground from "./WaveBackground";

const EducationCard = ({ education }) => (
    <MagicCard className="w-full">
        <div className="relative flex flex-col items-center justify-center w-full overflow-hidden">
            <WaveBackground color="#FFD700" opacity={0.12} />
            {/* CGPA Badge in the top-right corner */}
            {education.CGPA && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black px-4 py-2 rounded-bl-lg rounded-tr-lg font-bold text-[16px] shadow-lg z-20">
                    CGPA: {education.CGPA}
                </div>
            )}
            {/* Percentage Badge in the top-right corner */}
            {education.Percentage && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-[#00FFFF] to-[#0099CC] text-black px-4 py-2 rounded-bl-lg rounded-tr-lg font-bold text-[16px] shadow-lg z-20">
                    {education.Percentage}
                </div>
            )}

            <h3 className="text-white text-[24px] font-bold text-center mt-8 relative z-10">{education.school_name}</h3>
            <p className="text-secondary text-[16px] font-semibold text-center mt-2 relative z-10">
                {education.degree}
            </p>
            <p className="text-secondary text-[14px] text-center mb-4 relative z-10">
                {education.date}
            </p>
            <ul className="mt-5 list-disc ml-5 space-y-2 text-left w-full relative z-10">
                {education.points.map((point, index) => (
                    <li
                        key={`education-point-${index}`}
                        className="text-white-100 text-[14px] pl-1 tracking-wider"
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </div>
    </MagicCard>
);

const Education = () => {
    return (
        <>
            <motion.div>
                <p className={`${styles.sectionSubText} text-center`}>
                    What I have studied so far
                </p>
                <h2 className={`${styles.sectionHeadText} text-center text-[#FFD700]`}>
                    Education.
                </h2>
            </motion.div>

            <div className="mt-20 flex flex-col gap-10">
                {education.map((edu, index) => (
                    <EducationCard key={`education-${index}`} education={edu} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Education, "education");
