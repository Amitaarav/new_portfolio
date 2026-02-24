"use client";

import { motion } from "framer-motion";
import { FaNodeJs, FaReact, FaDocker, FaJava, FaPython, FaAws, FaGithub, FaGitAlt, FaEthereum, FaWallet, FaAtom } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiPostgresql, SiMongodb, SiTailwindcss, SiSolidity, SiKubernetes, SiRedis, SiApachekafka, SiNextdotjs, SiPrisma, SiCplusplus, SiC, SiGoland, SiHtml5, SiCss3, SiRedux, SiWebrtc, SiPostman, SiTimescale, SiSolana } from "react-icons/si";
import { TbApi } from "react-icons/tb";

const skills = {
  "Programming & Logic": {
    items: [
      { name: "JavaScript", icon: <SiJavascript />, level: 95, color: "#F7DF1E" },
      { name: "TypeScript", icon: <SiTypescript />, level: 90, color: "#3178C6" },
      { name: "C++", icon: <SiCplusplus />, level: 85, color: "#00599C" },
      { name: "Python", icon: <FaPython />, level: 80, color: "#3776AB" },
      { name: "SQL", icon: <SiPostgresql />, level: 85, color: "#336791" },
      { name: "Go", icon: <SiGoland />, level: 70, color: "#00ADD8" },
      { name: "C", icon: <SiC />, level: 60, color: "#A8B9CC" },
      { name: "Java", icon: <FaJava />, level: 75, color: "#007396" },
    ],
    className: "md:col-span-2 lg:col-span-2 row-span-2"
  },
  "Frontend Craft": {
    items: [
      { name: "React.js", icon: <FaReact />, level: 95, color: "#61DAFB" },
      { name: "Next.js", icon: <SiNextdotjs />, level: 90, color: "#ffffff" },
      { name: "Redux", icon: <SiRedux />, level: 85, color: "#764ABC" },
      { name: "Tailwind", icon: <SiTailwindcss />, level: 95, color: "#06B6D4" },
      { name: "HTML5/CSS3", icon: <SiHtml5 />, level: 95, color: "#E34F26" },
      { name: "Recoil", icon: <FaAtom />, level: 80, color: "#3578E5" },
    ],
    className: "md:col-span-1 lg:col-span-1"
  },
  "Backend & Systems": {
    items: [
      { name: "Node.js", icon: <FaNodeJs />, level: 90, color: "#339933" },
      { name: "Kafka", icon: <SiApachekafka />, level: 80, color: "#ffffff" },
      { name: "Prisma", icon: <SiPrisma />, level: 85, color: "#2D3748" },
      { name: "WebRTC", icon: <SiWebrtc />, level: 75, color: "#ffffff" },
      { name: "WebSockets", icon: <FaNodeJs />, level: 85, color: "#339933" },
      { name: "REST APIs", icon: <TbApi />, level: 95, color: "#009688" },
    ],
    className: "md:col-span-1 lg:col-span-1"
  },
  "Storage Solutions": {
    items: [
      { name: "Postgres", icon: <SiPostgresql />, level: 90, color: "#336791" },
      { name: "MongoDB", icon: <SiMongodb />, level: 90, color: "#47A248" },
      { name: "Redis", icon: <SiRedis />, level: 85, color: "#DC382D" },
      { name: "Timescale", icon: <SiTimescale />, level: 75, color: "#FDC500" },
    ],
    className: "md:col-span-1"
  },
  "DevOps & Cloud": {
    items: [
      { name: "AWS", icon: <FaAws />, level: 80, color: "#FF9900" },
      { name: "Docker", icon: <FaDocker />, level: 85, color: "#2496ED" },
      { name: "Kubernetes", icon: <SiKubernetes />, level: 75, color: "#326CE5" },
      { name: "CI/CD", icon: <FaGitAlt />, level: 80, color: "#F05032" },
    ],
    className: "md:col-span-1"
  },
  "Web3 & Blockchain": {
    items: [
      { name: "Solana", icon: <SiSolana />, level: 85, color: "#9945FF" },
      { name: "Solidity", icon: <SiSolidity />, level: 75, color: "#ffffff" },
      { name: "Ethers.js", icon: <FaEthereum />, level: 80, color: "#3C3C3D" },
      { name: "Anchor", icon: <SiSolana />, level: 80, color: "#9945FF" },
    ],
    className: "md:col-span-2 lg:col-span-1"
  },
};

const BentoCard = ({ title, items, className }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`bg-gray-900/40 backdrop-blur-xl border border-white/5 p-8 rounded-[2.5rem] group hover:border-red-500/40 transition-all duration-700 shadow-2xl flex flex-col ${className}`}
  >
    <div className="flex items-center justify-between mb-8">
      <h3 className="text-2xl font-bold text-white flex items-center gap-3">
        <span className="w-2 h-8 bg-red-600 rounded-full" />
        {title}
      </h3>
      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-red-600/20 group-hover:rotate-12 transition-all duration-500">
        <Code size={18} className="text-gray-400 group-hover:text-red-500" />
      </div>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 flex-grow">
      {items.map((skill, idx) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.05 }}
          className="flex flex-col items-center gap-3 group/skill relative"
        >
          <div
            className="text-4xl p-4 rounded-3xl bg-black/40 border border-white/5 group-hover/skill:bg-white/5 group-hover/skill:border-red-500/30 group-hover/skill:-translate-y-2 transition-all duration-500 relative z-10"
            style={{ color: skill.color }}
          >
            {skill.icon}
          </div>
          <span className="text-xs font-semibold text-gray-400 group-hover/skill:text-white transition-colors text-center">
            {skill.name}
          </span>

          <div className="w-full bg-white/5 rounded-full h-1 mt-auto overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1.5, ease: "circOut" }}
              className="h-full rounded-full bg-gradient-to-r from-red-600 to-red-400"
            />
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

// Minimal local Code icon since lucide-react might not be imported here
const Code = ({ size, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-red-900/10 rounded-full blur-[150px] opacity-50" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-900/10 rounded-full blur-[150px] opacity-30" />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-red-900/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-12 h-[1px] bg-red-600" />
            <span className="text-red-500 font-mono tracking-widest text-sm uppercase">Technical Capacity</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            My Tech Stack <span className="text-red-600">.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            A curated selection of technologies I've mastered to build high-performance,
            scalable, and secure digital ecosystems.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, { items, className }], idx) => (
            <BentoCard
              key={category}
              title={category}
              items={items}
              className={className}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


