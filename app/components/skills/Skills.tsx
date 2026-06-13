"use client";

import { motion } from "framer-motion";
import {
  FaNodeJs, FaReact, FaDocker, FaJava, FaPython,
  FaAws, FaGitAlt, FaEthereum, FaAtom,
} from "react-icons/fa";
import {
  SiTypescript, SiJavascript, SiPostgresql, SiMongodb,
  SiTailwindcss, SiSolidity, SiKubernetes, SiRedis,
  SiApachekafka, SiNextdotjs, SiPrisma, SiCplusplus,
  SiC, SiGoland, SiHtml5, SiRedux, SiWebrtc,
  SiTimescale, SiSolana,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const ACCENT = "#d53333ff";

const skills: Record<
  string,
  {
    items: { name: string; icon: React.ReactNode; color: string }[];
    className?: string;
  }
> = {
  "Programming & Logic": {
    items: [
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
      { name: "C++",        icon: <SiCplusplus />,  color: "#00599C" },
      { name: "Python",     icon: <FaPython />,      color: "#3776AB" },
      { name: "SQL",        icon: <SiPostgresql />,  color: "#336791" },
      { name: "Go",         icon: <SiGoland />,      color: "#00ADD8" },
      { name: "C",          icon: <SiC />,           color: "#A8B9CC" },
      { name: "Java",       icon: <FaJava />,        color: "#007396" },
    ],
    className: "md:col-span-2 row-span-2",
  },
  "Frontend": {
    items: [
      { name: "React.js",   icon: <FaReact />,       color: "#61DAFB" },
      { name: "Next.js",    icon: <SiNextdotjs />,   color: "#ffffff" },
      { name: "Redux",      icon: <SiRedux />,       color: "#764ABC" },
      { name: "Tailwind",   icon: <SiTailwindcss />, color: "#06B6D4" },
      { name: "HTML5/CSS3", icon: <SiHtml5 />,       color: "#E34F26" },
      { name: "Recoil",     icon: <FaAtom />,        color: "#3578E5" },
    ],
  },
  "Backend & Systems": {
    items: [
      { name: "Node.js",    icon: <FaNodeJs />,      color: "#339933" },
      { name: "Kafka",      icon: <SiApachekafka />, color: "#ffffff" },
      { name: "Prisma",     icon: <SiPrisma />,      color: "#ffffff" },
      { name: "WebRTC",     icon: <SiWebrtc />,      color: "#ffffff" },
      { name: "WebSockets", icon: <FaNodeJs />,      color: "#339933" },
      { name: "REST APIs",  icon: <TbApi />,         color: "#009688" },
    ],
  },
  "Storage": {
    items: [
      { name: "Postgres",  icon: <SiPostgresql />, color: "#336791" },
      { name: "MongoDB",   icon: <SiMongodb />,    color: "#47A248" },
      { name: "Redis",     icon: <SiRedis />,      color: "#DC382D" },
      { name: "Timescale", icon: <SiTimescale />,  color: "#FDC500" },
    ],
  },
  "DevOps & Cloud": {
    items: [
      { name: "AWS",        icon: <FaAws />,        color: "#FF9900" },
      { name: "Docker",     icon: <FaDocker />,     color: "#2496ED" },
      { name: "Kubernetes", icon: <SiKubernetes />, color: "#326CE5" },
      { name: "CI/CD",      icon: <FaGitAlt />,     color: "#F05032" },
    ],
  },
  "Web3 & Blockchain": {
    items: [
      { name: "Solana",    icon: <SiSolana />,   color: "#9945FF" },
      { name: "Solidity",  icon: <SiSolidity />, color: "#a0aec0" },
      { name: "Ethers.js", icon: <FaEthereum />, color: "#627EEA" },
      { name: "Anchor",    icon: <SiSolana />,   color: "#9945FF" },
    ],
    className: "md:col-span-2",
  },
};

const BentoCard = ({
  title,
  items,
  className,
  index,
}: {
  title: string;
  items: { name: string; icon: React.ReactNode; color: string }[];
  className?: string;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
    className={`group relative flex flex-col bg-[#0d0d0d] border border-white/[0.06]
      rounded-2xl p-4 hover:border-red-500/25 transition-all duration-400 ${className ?? ""}`}
  >
    {/* top-edge glow */}
    <div className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-2xl
      bg-gradient-to-r from-transparent via-red-500/30 to-transparent
      opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    {/* header */}
    <div className="flex items-center gap-2 mb-3">
      <span className="block w-[2px] h-4 rounded-full flex-shrink-0" style={{ background: ACCENT }} />
      <h3 className="text-xs font-semibold text-white/60 tracking-wider uppercase">{title}</h3>
    </div>

    {/* skills */}
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 flex-grow">
      {items.map((skill, idx) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.06 + idx * 0.03 }}
          className="group/skill flex flex-col items-center gap-1"
        >
          <div
            className="text-xl p-2 rounded-lg w-full flex justify-center
              bg-white/[0.03] border border-white/[0.05]
              group-hover/skill:bg-white/[0.07] group-hover/skill:border-red-500/20
              group-hover/skill:-translate-y-0.5
              transition-all duration-300"
            style={{ color: skill.color }}
          >
            {skill.icon}
          </div>
          <span className="text-[10px] text-white/35 group-hover/skill:text-white/60
            transition-colors text-center leading-tight w-full truncate">
            {skill.name}
          </span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export const Skills = () => (
  <section id="skills" className="relative py-20 bg-[#080808] text-white overflow-hidden">

    {/* ambient blobs */}
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-900/10 rounded-full blur-[100px]" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-900/[0.08] rounded-full blur-[100px]" />
    </div>

    <div className="relative z-10 container mx-auto px-6">

      {/* heading */}
      <div className="mb-10">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-3"
        >
          <span className="w-6 h-px" style={{ background: ACCENT }} />
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase" style={{ color: ACCENT }}>
            Technical Capacity
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="text-3xl md:text-4xl font-bold tracking-tight"
        >
          My Tech Stack<span style={{ color: ACCENT }}>.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.14 }}
          className="mt-2 text-white/35 text-sm max-w-xl leading-relaxed"
        >
          Technologies I've mastered to build high-performance, scalable, and secure systems.
        </motion.p>
      </div>

      {/* bento grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {Object.entries(skills).map(([category, { items, className }], idx) => (
          <BentoCard
            key={category}
            title={category}
            items={items}
            className={className}
            index={idx}
          />
        ))}
      </div>

    </div>
  </section>
);