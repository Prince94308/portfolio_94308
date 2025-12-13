import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { navLinks } from "../constants";
// import { logo, menu, close } from "../assets"; 
// Using text for logo and simple svg for menu/close for now as assets are missing

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);

    const socialLinks = [
        { icon: FaLinkedin, url: "https://www.linkedin.com/in/prince-kumar-a3a671284/", color: "#0077B5" }, // Placeholder URL
        { icon: FaGithub, url: "https://github.com/Prince94308", color: "#ffffff" },       // Placeholder URL
        { icon: FaInstagram, url: "https://www.instagram.com/theravionexbolt/?hl=en", color: "#E1306C" }  // Placeholder URL
    ];

    return (
        <nav
            className={`w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    {/* <img src={logo} alt="logo" className="w-9 h-9 object-contain" /> */}
                    <p className="text-white text-[18px] font-bold cursor-pointer flex">
                        <span className="text-[#00FFFF]">P</span>
                        <span className="text-[#E233E2]">r</span>
                        <span className="text-[#FF00FF]">i</span>
                        <span className="text-[#00FF9D]">n</span>
                        <span className="text-[#FFD700]">c</span>
                        <span className="text-[#00FFFF]">e</span>
                        &nbsp;
                        <span className="text-[#E233E2]">K</span>
                        <span className="text-[#FF00FF]">u</span>
                        <span className="text-[#00FF9D]">m</span>
                        <span className="text-[#FFD700]">a</span>
                        <span className="text-[#00FFFF]">r</span>
                    </p>
                </Link>
                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {navLinks.map((link) => (
                        <motion.li
                            key={link.id}
                            className={`${active === link.title ? "text-white" : "text-secondary"
                                } text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(link.title)}
                            whileHover={{
                                scale: 1.2,
                                color: link.color || '#33E2E2', // Use unique color from constants
                                y: -5,
                                textShadow: `0px 0px 8px ${link.color || 'rgb(51, 226, 226)'}` // Matching glow
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                            <a href={link.id ? `#${link.id}` : "/"}>{link.title}</a>
                        </motion.li>
                    ))}
                </ul>

                {/* Social Icons (Desktop) */}
                <div className="hidden sm:flex flex-row gap-5">
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-2xl cursor-pointer"
                            whileHover={{
                                scale: 1.2,
                                color: social.color,
                                y: -3
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <social.icon />
                        </motion.a>
                    ))}
                </div>

                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <div
                        className="w-[28px] h-[28px] object-contain cursor-pointer flex flex-col justify-center gap-1"
                        onClick={() => setToggle(!toggle)}
                    >
                        {/* Hamburger / Close Icon Placeholder */}
                        <div className={`h-0.5 w-full bg-white transition-all ${toggle ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                        <div className={`h-0.5 w-full bg-white transition-all ${toggle ? 'opacity-0' : ''}`}></div>
                        <div className={`h-0.5 w-full bg-white transition-all ${toggle ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
                    </div>

                    <div
                        className={`${!toggle ? "hidden" : "flex"
                            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                    >
                        <ul className="list-none flex justify-end items-start flex-col gap-4">
                            {navLinks.map((link) => (
                                <li
                                    key={link.id}
                                    className={`${active === link.title ? "text-white" : "text-secondary"
                                        } font-poppins font-medium cursor-pointer text-[16px]`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(link.title);
                                    }}
                                >
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                            {/* Social Icons (Mobile) */}
                            <div className="flex flex-row gap-4 mt-2 border-t border-gray-600 pt-2 w-full justify-center">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white text-xl"
                                    >
                                        <social.icon />
                                    </a>
                                ))}
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
