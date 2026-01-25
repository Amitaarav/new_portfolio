"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const toggleVisibility = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;

            setScrollProgress(progress);
            setIsVisible(scrollTop > 300);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    transition={{ duration: 0.3 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 group"
                    aria-label="Scroll to top"
                >
                    {/* Progress Ring */}
                    <div className="relative w-14 h-14">
                        <svg className="w-14 h-14 transform -rotate-90">
                            {/* Background circle */}
                            <circle
                                cx="28"
                                cy="28"
                                r="24"
                                stroke="currentColor"
                                strokeWidth="3"
                                fill="none"
                                className="text-gray-700"
                            />
                            {/* Progress circle */}
                            <circle
                                cx="28"
                                cy="28"
                                r="24"
                                stroke="currentColor"
                                strokeWidth="3"
                                fill="none"
                                strokeDasharray={150.8}
                                strokeDashoffset={150.8 - (scrollProgress / 100) * 150.8}
                                strokeLinecap="round"
                                className="text-red-500 transition-all duration-150"
                            />
                        </svg>

                        {/* Button Center */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-red-500/50 transition-all duration-300 group-hover:scale-110">
                                <FaArrowUp className="text-white text-sm group-hover:-translate-y-0.5 transition-transform duration-300" />
                            </div>
                        </div>
                    </div>

                    {/* Tooltip */}
                    <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                        Back to top
                    </span>
                </motion.button>
            )}
        </AnimatePresence>
    );
};
