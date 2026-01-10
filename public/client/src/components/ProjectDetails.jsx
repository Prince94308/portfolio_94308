
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { projects } from "../constants";
import { Navbar, Footer } from "./";
import { SectionWrapper } from "../hoc";

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="h-screen flex items-center justify-center bg-primary text-white">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
                    <Link to="/" className="text-blue-500 hover:text-blue-400">
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-primary min-h-screen relative z-0">
            <div className="bg-cover bg-no-repeat bg-center">
                <Navbar />
            </div>

            <div className="pt-28 px-6 md:px-16 max-w-7xl mx-auto pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link to="/#projects" className="text-secondary hover:text-white mb-6 inline-block">
                        &larr; Back to Projects
                    </Link>

                    <div className="bg-tertiary p-8 rounded-2xl">
                        <div className="flex flex-col md:flex-row gap-10">
                            <div className="w-full md:w-1/2">
                                <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 flex flex-col justify-center">
                                <h1 className={`${styles.sectionHeadText} text-[#00FF9D]`}>{project.name}</h1>
                                <p className="mt-4 text-secondary text-[17px] leading-[30px]">
                                    {project.detailed_description || project.description}
                                </p>

                                <div className="mt-8">
                                    <h3 className="text-white font-bold text-[20px] mb-3">Tech Stack & Tools</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span key={tag.name} className={`px-4 py-2 rounded-full text-sm border border-opacity-20 ${tag.color} bg-black bg-opacity-30`}>
                                                {tag.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-8 flex gap-4">
                                    <a
                                        href={project.source_code_link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="bg-[#00FF9D] text-primary font-bold py-3 px-8 rounded-xl hover:bg-white transition-colors"
                                    >
                                        View Source Code
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16">
                            <h2 className="text-white font-bold text-[30px] mb-6">Project Overview</h2>
                            <div className="text-secondary text-[16px] leading-[28px] space-y-4">
                                {/* If we have really long description separate from 'detailed_description', use it here. 
                        For now, assuming detailed_description is distinct. */}
                                <p>
                                    This project was built to address specific challenges in the domain of {project.name}.
                                    It leverages modern web technologies to ensure performance, scalability, and an excellent user experience.
                                    The architecture is designed to be modular and maintainable, following best practices in software engineering.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
};

export default ProjectDetails;
