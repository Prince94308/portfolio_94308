import React, { useState, useEffect } from "react";
// import Tilt from "react-tilt"; // Skipping for now, using simple div
import { motion } from "framer-motion";

import { styles } from "../styles";
import { skills as initialSkills } from "../constants";
import { SectionWrapper } from "../hoc";
import myProfileImg from "../assets/prince.jpg";
import MagicCard from "./MagicCard";
import WaveBackground from "./WaveBackground";
import { FaCode, FaServer, FaShieldAlt, FaCloud, FaLaptopCode, FaEdit, FaCheck, FaTimes, FaPlus, FaTrash, FaCodeBranch } from "react-icons/fa";

import "./Card.css";

// Map string icons to components
const IconMap = {
    FaLaptopCode: FaLaptopCode,
    FaServer: FaServer,
    FaShieldAlt: FaShieldAlt,
    FaCloud: FaCloud,
    FaCodeBranch: FaCodeBranch,
    FaCode: FaCode
};

const SkillCard = ({ index, title, icon, color, skills, onUpdate }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editedSkills, setEditedSkills] = useState(skills);

    const IconComponent = IconMap[icon] || FaCode;

    // Determine which skills to show (in view mode)
    const displayedSkills = isExpanded ? skills : skills.slice(0, 3);
    const remainingCount = skills.length - 3;

    // Reset edited skills when edit mode is toggled or skills prop changes
    useEffect(() => {
        setEditedSkills(skills);
    }, [skills, isEditing]);

    const handleSave = () => {
        onUpdate(title, editedSkills);
        setIsEditing(false);
    };

    const handleSkillChange = (idx, field, value) => {
        const newSkills = [...editedSkills];
        newSkills[idx] = { ...newSkills[idx], [field]: value };
        setEditedSkills(newSkills);
    };

    const handleDeleteSkill = (idx) => {
        const newSkills = editedSkills.filter((_, i) => i !== idx);
        setEditedSkills(newSkills);
    };

    const handleAddSkill = () => {
        setEditedSkills([...editedSkills, { name: "New Skill", level: "50%" }]);
    };

    if (isEditing) {
        return (
            <div className="technology-card editing" style={{ borderColor: color }}>
                <div className="card-header">
                    <div className="icon-container" style={{ color: color }}>
                        <IconComponent />
                    </div>
                    <h3 className="card-title">{title}</h3>
                    <div className="edit-actions">
                        <button onClick={handleSave} className="action-btn save-btn" title="Save">
                            <FaCheck />
                        </button>
                        <button onClick={() => setIsEditing(false)} className="action-btn cancel-btn" title="Cancel">
                            <FaTimes />
                        </button>
                    </div>
                </div>

                <div className="skill-list editing-list">
                    {editedSkills.map((skill, idx) => (
                        <div key={idx} className="skill-edit-row">
                            <input
                                type="text"
                                value={skill.name}
                                onChange={(e) => handleSkillChange(idx, 'name', e.target.value)}
                                className="edit-input name-input"
                                placeholder="Skill Name"
                            />
                            <input
                                type="text"
                                value={skill.level}
                                onChange={(e) => handleSkillChange(idx, 'level', e.target.value)}
                                className="edit-input level-input"
                                placeholder="Level"
                            />
                            <button onClick={() => handleDeleteSkill(idx)} className="delete-btn" title="Delete">
                                <FaTrash />
                            </button>
                        </div>
                    ))}
                    <button onClick={handleAddSkill} className="add-skill-btn" style={{ color: color, borderColor: color }}>
                        <FaPlus /> Add Skill
                    </button>
                </div>
            </div>
        );
    }

    return (
        <MagicCard className="w-full sm:w-[360px]">
            <div className="technology-card relative overflow-hidden" style={{ borderColor: color }}>
                <WaveBackground color={color} opacity={0.15} />
                <div className="card-header relative z-10">
                    <div className="icon-container" style={{ color: color }}>
                        <IconComponent />
                    </div>
                    <h3 className="card-title">{title}</h3>
                    <button
                        onClick={() => setIsEditing(true)}
                        className="edit-icon-btn"
                        style={{ color: color }}
                        title="Edit Skills"
                    >
                        <FaEdit />
                    </button>
                </div>

                <div className="skill-list relative z-10">
                    {displayedSkills.map((skill, idx) => (
                        <div key={idx} className="skill-item">
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-proficiency" style={{ color: color }}>{skill.level}</span>
                        </div>
                    ))}
                </div>

                <div className="card-footer relative z-10">
                    {!isExpanded && remainingCount > 0 && (
                        <p className="more-info">+{remainingCount} more</p>
                    )}
                    {skills.length > 3 && (
                        <button
                            className="expand-button"
                            onClick={() => setIsExpanded(!isExpanded)}
                            style={{ color: color }}
                        >
                            {isExpanded ? "Collapse" : "Click to expand"}
                        </button>
                    )}
                </div>
            </div>
        </MagicCard>
    );
};

const About = () => {
    const [skillsData, setSkillsData] = useState(initialSkills);

    // Load data from localStorage on mount
    /* useEffect(() => {
        const storedSkills = localStorage.getItem('portfolio_skills');
        if (storedSkills) {
            try {
                setSkillsData(JSON.parse(storedSkills));
            } catch (error) {
                console.error("Failed to parse skills from local storage", error);
            }
        }
    }, []); */

    // Save data to localStorage whenever it changes
    const updateSkillCategory = (categoryTitle, updatedSkills) => {
        const newSkillsData = skillsData.map(category => {
            if (category.title === categoryTitle) {
                return { ...category, skills: updatedSkills };
            }
            return category;
        });

        setSkillsData(newSkillsData);
        localStorage.setItem('portfolio_skills', JSON.stringify(newSkillsData));
    };

    return (
        <>
            <motion.div>
                <h2 className={`${styles.sectionHeadText} text-[#00FFFF]`}>Overview.</h2>
            </motion.div>

            {/* Horizontal Magic Card Layout for Profile */}
            <MagicCard className="mt-10 flex flex-col md:flex-row gap-10 items-center justify-center w-full p-8 relative overflow-hidden group">
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#00FFFF] rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

                {/* Left: Image (Local) */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
                    <img
                        src={myProfileImg}
                        alt="Prince Kumar"
                        className="rounded-xl object-cover w-full h-full shadow-[0_0_20px_rgba(0,255,255,0.3)] border-2 border-[#00FFFF]/50"
                    />
                </div>

                {/* Right: Content */}
                <div className="flex-1 flex flex-col gap-5 z-10">
                    <div>
                        <h3 className="text-white text-[40px] font-bold tracking-wider">
                            I'm <span className="text-[#00FFFF]">Prince Kumar</span>
                        </h3>
                        <div className="mt-2 text-[20px] font-semibold flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <FaCode className="text-[#E233E2]" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] animate-pulse">
                                    &lt; Full Stack Developer /&gt;
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='text-secondary text-[16px] leading-[30px] text-justify md:text-left flex flex-col gap-4'>
                        <p>
                            I am a Full Stack Developer with 2+ years of experience in building scalable, high-performance web applications and enterprise websites. My technical expertise spans the MERN Stack (MongoDB, Express.js, React.js, Node.js) and Java-based backend development.
                        </p>
                        <p>
                            I specialize in implementing robust authentication systems and developing applications with enterprise-grade standards, focusing on performance, scalability, and maintainability.
                        </p>
                        <p>
                            Beyond coding, I actively participate in hackathons, contribute to open-source projects, and explore key advancements in cloud technologies to stay ahead of the curve.
                        </p>
                    </div>
                </div>
            </MagicCard>

            {/* Skills Title */}
            <div className="w-full flex justify-center mt-20 mb-10">
                <motion.div className="text-center">
                    <h2 className="text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] via-[#E233E2] to-[#FFD700]">
                        Skills & Technology Arsenal
                    </h2>
                    <p className="text-secondary mt-4 max-w-2xl mx-auto">
                        Explore my comprehensive technology stack and expertise across cybersecurity, development, and cloud technologies.
                    </p>
                </motion.div>
            </div>

            {/* Skill Cards Grid */}
            <div className='flex flex-wrap gap-10 justify-center'>
                {skillsData.map((skill, index) => (
                    <SkillCard
                        key={skill.title}
                        index={index}
                        {...skill}
                        onUpdate={updateSkillCategory}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
