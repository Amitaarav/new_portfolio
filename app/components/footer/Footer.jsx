"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaHeart } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contacts" },
];

const socialLinks = [
    {
        name: "GitHub",
        href: "https://github.com/Amitaarav",
        icon: FaGithub,
        hoverColor: "hover:bg-gray-700"
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/amitkrgupta8",
        icon: FaLinkedin,
        hoverColor: "hover:bg-blue-600"
    },
    {
        name: "LeetCode",
        href: "https://leetcode.com/u/amit_gupta_512/",
        icon: SiLeetcode,
        hoverColor: "hover:bg-yellow-600"
    },
    {
        name: "X",
        href: "https://x.com/AmitAarav1205",
        icon: FaXTwitter,
        hoverColor: "hover:bg-gray-800"
    },
];

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-300">
            {/* Main Footer Content */}
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                A
                            </div>
                            <h2 className="text-2xl font-bold text-white ml-3">Amit Gupta</h2>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Full-Stack Developer specializing in MERN stack, Next.js, Web3, and DevOps.
                            Building scalable applications with clean code and modern technologies.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-colors duration-300 ${social.hoverColor}`}
                                    aria-label={social.name}
                                >
                                    <social.icon className="text-white" size={18} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6 relative">
                            Quick Links
                            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-600 -mb-2"></span>
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-red-500 transition-colors duration-300 flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-red-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6 relative">
                            Contact Info
                            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-600 -mb-2"></span>
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="tel:+916392995549"
                                    className="flex items-center text-gray-400 hover:text-white transition-colors group"
                                >
                                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-3 group-hover:bg-red-600 transition-colors">
                                        <FaPhoneAlt size={14} />
                                    </div>
                                    <span>+91 6392995549</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:aaravamit555@gmail.com"
                                    className="flex items-center text-gray-400 hover:text-white transition-colors group"
                                >
                                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-3 group-hover:bg-red-600 transition-colors">
                                        <FaEnvelope size={14} />
                                    </div>
                                    <span>aaravamit555@gmail.com</span>
                                </a>
                            </li>
                            <li className="flex items-center text-gray-400">
                                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-3">
                                    <FaMapMarkerAlt size={14} />
                                </div>
                                <span>Uttar Pradesh, India</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter / CTA */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6 relative">
                            Let's Connect
                            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-600 -mb-2"></span>
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Interested in working together? Let's discuss your next project!
                        </p>
                        <motion.a
                            href="#contacts"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white font-medium px-6 py-3 rounded-lg hover:from-red-500 hover:to-red-600 transition-all duration-300"
                        >
                            Get In Touch
                        </motion.a>
                        <motion.a
                            href="/Amit_Gupta_Resume.pdf"
                            target="_blank"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-block mt-3 border-2 border-gray-700 text-gray-300 font-medium px-6 py-2.5 rounded-lg hover:border-red-600 hover:text-white transition-all duration-300"
                        >
                            Download Resume
                        </motion.a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm">
                            © {currentYear} Amit Kumar Gupta. All rights reserved.
                        </p>
                        <p className="text-gray-500 text-sm flex items-center gap-1">
                            Made with <FaHeart className="text-red-500 animate-pulse" size={12} /> using Next.js & Tailwind CSS
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
