import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative w-full bg-gradient-to-b from-[#050816] to-[#0a0c1f] border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Top Section - Brand & Description */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
                    {/* Brand Column */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-white text-[24px] font-bold">
                            Prince <span className="text-[#00FFFF]">Kumar</span>
                        </h3>
                        <p className="text-secondary text-[14px] leading-relaxed">
                            Full Stack Developer & Java Enthusiast specializing in secure, scalable digital solutions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white text-[18px] font-semibold">Quick Links</h4>
                        <div className="flex flex-col gap-2">
                            <a href="#about" className="text-secondary hover:text-[#00FFFF] transition-colors duration-300">About</a>
                            <a href="#work" className="text-secondary hover:text-[#E233E2] transition-colors duration-300">Work</a>
                            <a href="#education" className="text-secondary hover:text-[#FFD700] transition-colors duration-300">Education</a>
                            <a href="#projects" className="text-secondary hover:text-[#00FF9D] transition-colors duration-300">Projects</a>
                            <a href="#certifications" className="text-secondary hover:text-[#FF00FF] transition-colors duration-300">Certifications</a>
                            <a href="#contact" className="text-secondary hover:text-[#FF4500] transition-colors duration-300">Contact</a>
                        </div>
                    </div>

                    {/* Contact & Social */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white text-[18px] font-semibold">Connect With Me</h4>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/prince94308"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full border-2 border-white/20 flex items-center justify-center text-white hover:border-[#00FFFF] hover:text-[#00FFFF] hover:scale-110 transition-all duration-300"
                                aria-label="GitHub"
                            >
                                <FaGithub className="text-[20px]" />
                            </a>
                            <a
                                href="https://linkedin.com/in/prince-kumar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full border-2 border-white/20 flex items-center justify-center text-white hover:border-[#0077B5] hover:text-[#0077B5] hover:scale-110 transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin className="text-[20px]" />
                            </a>
                            <a
                                href="https://twitter.com/prince94308"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full border-2 border-white/20 flex items-center justify-center text-white hover:border-[#1DA1F2] hover:text-[#1DA1F2] hover:scale-110 transition-all duration-300"
                                aria-label="Twitter"
                            >
                                <FaTwitter className="text-[20px]" />
                            </a>
                            <a
                                href="mailto:princekumar.com"
                                className="w-10 h-10 rounded-full border-2 border-white/20 flex items-center justify-center text-white hover:border-[#FF4500] hover:text-[#FF4500] hover:scale-110 transition-all duration-300"
                                aria-label="Email"
                            >
                                <FaEnvelope className="text-[20px]" />
                            </a>
                        </div>
                        <p className="text-secondary text-[14px] mt-2">
                            <FaEnvelope className="inline mr-2" />
                            princekumar9162126@gmail.com
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6"></div>

                {/* Bottom Section - Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-secondary text-[14px] flex items-center gap-2">
                        © {currentYear} Prince Kumar. Made with <FaHeart className="text-red-500 animate-pulse" /> and dedication.
                    </p>
                    <p className="text-secondary text-[14px]">
                        All Rights Reserved.
                    </p>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00FFFF] via-[#E233E2] to-[#FF00FF] opacity-50"></div>
        </footer>
    );
};

export default Footer;
