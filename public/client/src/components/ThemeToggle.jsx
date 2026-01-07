import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={`relative inline-flex items-center justify-center p-2 rounded-full transition-colors duration-300 w-10 h-10
        ${theme === 'dark' ? 'bg-black-100 hover:bg-black-200 text-yellow-400' : 'bg-white hover:bg-gray-100 shadow-md text-orange-500'}
        border border-white/10
      `}
            aria-label="Toggle Theme"
        >
            <div className="relative w-full h-full flex items-center justify-center">
                <motion.div
                    initial={false}
                    animate={{
                        scale: theme === 'dark' ? 1 : 0,
                        rotate: theme === 'dark' ? 0 : 90,
                        opacity: theme === 'dark' ? 1 : 0
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <FaMoon className="text-xl" />
                </motion.div>

                <motion.div
                    initial={false}
                    animate={{
                        scale: theme === 'light' ? 1 : 0,
                        rotate: theme === 'light' ? 0 : -90,
                        opacity: theme === 'light' ? 1 : 0
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <FaSun className="text-xl" />
                </motion.div>
            </div>
        </button>
    );
};

export default ThemeToggle;
