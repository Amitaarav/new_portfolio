"use client";

import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "./ThemeProvider";

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative p-2 rounded-full bg-gray-800 dark:bg-gray-700 border-2 border-red-900/50 hover:border-red-500 transition-colors duration-300"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
            <motion.div
                initial={false}
                animate={{ rotate: theme === "dark" ? 0 : 180 }}
                transition={{ duration: 0.3 }}
            >
                {theme === "dark" ? (
                    <FiMoon className="w-5 h-5 text-yellow-400" />
                ) : (
                    <FiSun className="w-5 h-5 text-yellow-500" />
                )}
            </motion.div>
        </motion.button>
    );
};
