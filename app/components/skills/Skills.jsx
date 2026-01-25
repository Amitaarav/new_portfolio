"use client";

import { motion } from "framer-motion";
import { FaNodeJs, FaReact, FaDocker, FaJava, FaPython, FaAws, FaGithub, FaGitAlt, FaEthereum, FaWallet, FaAtom } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiPostgresql, SiMongodb, SiTailwindcss, SiSolidity, SiKubernetes, SiRedis, SiApachekafka, SiNextdotjs, SiPrisma, SiCplusplus, SiC, SiGoland, SiHtml5, SiCss3, SiRedux, SiWebrtc, SiPostman, SiTimescale, SiSolana } from "react-icons/si";
import { TbApi } from "react-icons/tb";

const skills = {
  "Programming Languages": [
    { name: "JavaScript", icon: <SiJavascript />, level: 95, color: "#F7DF1E" },
    { name: "TypeScript", icon: <SiTypescript />, level: 90, color: "#3178C6" },
    { name: "C++", icon: <SiCplusplus />, level: 85, color: "#00599C" },
    { name: "Python", icon: <FaPython />, level: 80, color: "#3776AB" },
    { name: "Java", icon: <FaJava />, level: 75, color: "#007396" },
    { name: "Golang", icon: <SiGoland />, level: 70, color: "#00ADD8" },
    { name: "SQL", icon: <SiPostgresql />, level: 85, color: "#336791" },
    { name: "C", icon: <SiC />, level: 60, color: "#A8B9CC" },
    { name: "Solidity", icon: <SiSolidity />, level: 65, color: "#363636" },
  ],
  Frontend: [
    { name: "React.js", icon: <FaReact />, level: 95, color: "#61DAFB" },
    { name: "Next.js", icon: <SiNextdotjs />, level: 90, color: "#000000" },
    { name: "Redux", icon: <SiRedux />, level: 85, color: "#764ABC" },
    { name: "Context API", icon: <FaReact />, level: 90, color: "#61DAFB" },
    { name: "Recoil", icon: <FaAtom />, level: 80, color: "#3578E5" },
    { name: "TailwindCSS", icon: <SiTailwindcss />, level: 95, color: "#06B6D4" },
    { name: "HTML", icon: <SiHtml5 />, level: 95, color: "#E34F26" },
    { name: "CSS", icon: <SiCss3 />, level: 90, color: "#1572B6" },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs />, level: 90, color: "#339933" },
    { name: "Express.js", icon: <FaNodeJs />, level: 90, color: "#000000" },
    { name: "REST APIs", icon: <TbApi />, level: 95, color: "#009688" },
    { name: "WebSockets", icon: <FaNodeJs />, level: 85, color: "#339933" },
    { name: "Kafka", icon: <SiApachekafka />, level: 80, color: "#231F20" },
    { name: "WebRTC", icon: <SiWebrtc />, level: 75, color: "#333333" },
    { name: "Prisma", icon: <SiPrisma />, level: 85, color: "#2D3748" },
    { name: "Postman", icon: <SiPostman />, level: 90, color: "#FF6C37" },
  ],
  Databases: [
    { name: "PostgreSQL", icon: <SiPostgresql />, level: 90, color: "#336791" },
    { name: "MongoDB", icon: <SiMongodb />, level: 90, color: "#47A248" },
    { name: "Redis", icon: <SiRedis />, level: 85, color: "#DC382D" },
    { name: "TimescaleDB", icon: <SiTimescale />, level: 75, color: "#FDC500" },
  ],
  "Cloud & DevOps": [
    { name: "AWS", icon: <FaAws />, level: 80, color: "#FF9900" },
    { name: "Docker", icon: <FaDocker />, level: 85, color: "#2496ED" },
    { name: "Kubernetes", icon: <SiKubernetes />, level: 75, color: "#326CE5" },
    { name: "Git", icon: <FaGitAlt />, level: 95, color: "#F05032" },
    { name: "GitHub", icon: <FaGithub />, level: 95, color: "#181717" },
    { name: "CI/CD", icon: <FaGithub />, level: 80, color: "#2088FF" },
  ],
  Blockchain: [
    { name: "Solana Web3.js", icon: <SiSolana />, level: 85, color: "#9945FF" },
    { name: "Ethers.js", icon: <FaEthereum />, level: 80, color: "#3C3C3D" },
    { name: "Wallet Adapter", icon: <FaWallet />, level: 85, color: "#ffffff" },
    { name: "Smart Contracts", icon: <SiSolidity />, level: 75, color: "#363636" },
    { name: "On-chain Tx", icon: <SiSolana />, level: 80, color: "#9945FF" },
  ],
};

const SkillCard = ({ name, icon, level, color }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="flex-1 min-w-[130px] bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-3 rounded-xl hover:border-red-900/50 transition-colors group flex flex-col items-center justify-center gap-2"
  >
    <div className="text-3xl transition-transform duration-300 group-hover:scale-110" style={{ color: color || '#fff' }}>
      {icon}
    </div>
    <span className="font-semibold text-gray-200 text-sm">{name}</span>

    {/* Minimal Progress Bar */}
    <div className="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden mt-1">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full rounded-full bg-gradient-to-r from-red-600 to-red-400"
      />
    </div>
  </motion.div>
);

export const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-red-600 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-600 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="relative mb-12 text-center">
          <p className="text-3xl lg:text-4xl tracking-widest uppercase font-bold text-white">
            Technical Skills
          </p>
          <p className="text-5xl lg:text-8xl text-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 uppercase font-extrabold whitespace-nowrap pointer-events-none">
            Expertise
          </p>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical stack and proficiency levels.
          </p>
        </div>

        {/* Horizontal Scroll Layout for All Categories */}
        <div className="flex flex-nowrap overflow-x-auto pb-8 gap-8 hide-scrollbar snap-x snap-mandatory">
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex-shrink-0 snap-start min-w-[300px] md:min-w-[400px] max-w-[400px]"
            >
              <h3 className="text-xl font-bold text-red-500 mb-6 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-4 md:hidden">
          <span className="text-xs text-gray-500 animate-pulse">Swipe to explore →</span>
        </div>
      </div>
    </section>
  );
};


