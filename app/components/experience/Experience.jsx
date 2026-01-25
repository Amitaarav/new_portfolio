"use client";

import { motion } from "framer-motion";
import { HiOutlineBriefcase } from "react-icons/hi";
import { IoCalendarOutline } from "react-icons/io5";

const experienceData = [
    {
        id: 1,
        role: "Junior Software Engineer",
        company: "Tedekstra",
        duration: "Nov 2025 – Present",
        type: "Full-time",
        tech: ["Node.js", "TypeScript", "NestJS", "Express.js", "React.js", "Next.js", "Zustand", "React Query", "Axios", "Azure"],
        achievements: [
            "Developed scalable CRM backend services using NestJS and TypeScript, leveraging modular architecture and dependency injection to improve code maintainability and reduce feature development time by 25%.",
            "Built and optimized frontend CRM dashboards with React.js and Next.js, using Zustand for state management and React Query for efficient server-state caching, reducing data fetch latency by 35%.",
            "Standardized API communication with Axios and DTO-based validation, improving error handling consistency and reducing redundant network requests by 30%.",
        ],
        delay: 0.2,
    },
    {
        id: 2,
        role: "Fullstack Engineer",
        company: "Milanam",
        duration: "Sep 2025 – Nov 2025",
        type: "Internship",
        tech: ["Node.js", "Express.js", "TypeScript", "MongoDB", "Mongoose", "Turborepo", "Docker", "JWT"],
        achievements: [
            "Spearheaded development of a service marketplace platform in a monorepo setup, reducing build times by 30% and streamlining collaboration across frontend (React + Vite) and backend (Express.js + TypeScript).",
            "Led delivery of post creation and provider assignment workflows, enabling clients to publish requests and assign providers, projected to support 10K+ monthly service interactions.",
        ],
        delay: 0.4,
    },
];

export const Experience = () => {
    return (
        <section id="experience" className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 scroll">
            <div className="container mx-auto px-4 md:px-10">
                {/* Section Header */}
                <div >
                    <div className="relative">
                        <p className="text-3xl lg:text-4xl tracking-widest text-center uppercase font-bold">
                            Experience
                        </p>
                        <p className="text-5xl lg:text-8xl text-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 uppercase font-extrabold whitespace-nowrap">
                            Experience
                        </p>
                    </div>
                    
                    <p className="text-center text-gray-400 m-4 max-w-2xl mx-auto">
                        My professional journey in building enterprise-grade software, featuring key roles in backend development, system architecture, and scalable full-stack engineering.
                    </p>
                </div>
                
                {/* Timeline */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-600 via-red-800 to-gray-900 rounded-full" />

                    {experienceData.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: exp.delay }}
                            viewport={{ once: true }}
                            className={`relative flex flex-col md:flex-row items-start mb-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-red-600 rounded-full border-4 border-gray-900 z-10" />

                            {/* Card */}
                            <div
                                className={`ml-8 md:ml-0 md:w-[45%] ${index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                                    }`}
                            >
                                <div className="bg-gray-900/80 backdrop-blur-sm border border-red-900/30 rounded-2xl p-6 hover:shadow-lg hover:shadow-red-900/20 transition-all duration-300 hover:scale-[1.02]">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                            <div className="flex items-center gap-2 mt-1">
                                                <HiOutlineBriefcase className="text-red-500" />
                                                <span className="text-red-400 font-semibold">{exp.company}</span>
                                                <span className="text-xs bg-red-900/50 text-red-300 px-2 py-0.5 rounded-full">
                                                    {exp.type}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Duration */}
                                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                                        <IoCalendarOutline className="text-red-500" />
                                        <span>{exp.duration}</span>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {exp.tech.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="text-xs bg-gradient-to-r from-gray-800 to-red-900/50 text-gray-300 px-2 py-1 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Achievements */}
                                    <ul className="space-y-2">
                                        {exp.achievements.map((achievement, idx) => (
                                            <li
                                                key={idx}
                                                className="text-sm text-gray-300 flex items-start gap-2"
                                            >
                                                <span className="text-red-500 mt-1">▹</span>
                                                <span>{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
