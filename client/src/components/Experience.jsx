import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import MagicCard from "./MagicCard";

const ExperienceCard = ({ experience }) => {
    return (
        <div className="flex flex-col sm:flex-row gap-4 w-full">
            {/* Timeline Line & Dot */}
            <div className="flex flex-col items-center justify-center sm:mx-0 mx-auto">
                <div className="w-5 h-5 rounded-full bg-[#915EFF] border-4 border-[#1d1836]" />
                <div className="w-1 sm:h-full h-40 violet-gradient" />
            </div>

            {/* Content Card with MagicCard wrapper */}
            <MagicCard className="w-full relative bg-[#1d1836] border-b-4 border-r-4 border-[#232631]">
                {/* Arrow */}
                <div className="absolute left-[-10px] top-6 w-0 h-0 border-t-[10px] border-t-transparent border-r-[10px] border-r-[#1d1836] border-b-[10px] border-b-transparent sm:block hidden z-10" />

                <div className="flex justify-between items-center w-full">
                    <div>
                        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
                        <p
                            className='text-secondary text-[16px] font-semibold'
                            style={{ margin: 0 }}
                        >
                            {experience.company_name}
                        </p>
                    </div>
                    <div className="text-secondary text-[12px] font-semibold">
                        {experience.date}
                    </div>
                </div>

                <ul className='mt-5 list-disc ml-5 space-y-2'>
                    {experience.points.map((point, index) => (
                        <li
                            key={`experience-point-${index}`}
                            className='text-white-100 text-[14px] pl-1 tracking-wider'
                        >
                            {point}
                        </li>
                    ))}
                </ul>
            </MagicCard>
        </div>
    );
};

const Experience = () => {
    return (
        <>
            <motion.div>
                <p className={`${styles.sectionSubText} text-center`}>
                    What I have done so far
                </p>
                <h2 className={`${styles.sectionHeadText} text-center text-[#E233E2]`}>
                    Work Experience.
                </h2>
            </motion.div>

            <div className='mt-20 flex flex-col gap-10'>
                {experiences.map((experience, index) => (
                    <ExperienceCard
                        key={`experience-${index}`}
                        experience={experience}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "work");
