"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { FaNodeJs, FaReact, FaDocker, FaJava, FaPython, FaAws, FaGithub, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiPostgresql, SiMongodb, SiTailwindcss,SiSolidity, SiKubernetes, SiRedis, SiApachekafka, SiNextdotjs, SiPrisma, SiCplusplus, SiC, SiGoland, SiJest, SiCypress, SiHtml5, SiCss3 } from "react-icons/si";

const skills = {
  Languages: [
    { name: "C", icon: <SiC /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "Java", icon: <FaJava /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Golang", icon: <SiGoland /> },
    { name: "SQL", icon: <SiPostgresql /> },
    { name: "Solidity", icon: <SiSolidity /> },
  ],
  Frontend: [
    { name: "React.js", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Redux", icon: <FaReact /> },
    { name: "TailwindCSS", icon: <SiTailwindcss /> },
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <FaNodeJs /> },
    { name: "Kafka", icon: <SiApachekafka /> },
    { name: "WebSockets", icon: <FaNodeJs /> },
    { name: "REST APIs", icon: <FaNodeJs /> },
  ],
  Databases: [
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Redis", icon: <SiRedis /> },
    { name: "Prisma", icon: <SiPrisma /> },
  ],
  DevOps: [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Kubernetes", icon: <SiKubernetes /> },
    { name: "AWS", icon: <FaAws /> },
  ],
  Testing: [
    { name: "Jest", icon: <SiJest /> },
    { name: "Cypress", icon: <SiCypress /> },
  ],
};

export const Skills = () => {
  return (
    <section id="skills" className="py-12 px-4 sm:px-10 bg-black text-white">
      <div className="relative">
                        <p className="text-3xl lg:text-4xl mb-30 mt-12 tracking-widest text-center uppercase font-bold">
                            Skills
                        </p>
                        <p className="text-5xl lg:text:8xl text-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 uppercase font-extrabold">
                                
                                Skills
                        </p>
                    </div>

      <div className="space-y-12">
        {Object.entries(skills).map(([category, items], idx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6, type: "spring" }}
            className="hide-scrollbar"
          >
            <h3 className="text-2xl font-semibold mb-4">{category}</h3>

            <div className="overflow-x-auto p-4 pl-0 hide-scrollbar">
              <div className="flex gap-4 px-1 w-max">
                {items.map(({ name, icon }) => (
                  <motion.div
                    key={name}
                    whileHover={{ scale: 1.08 }}
                    className="min-w-[150px] bg-gradient-to-r to-gray-900 from-red-800   hover:bg-gray-200 text-gray-200 p-2 rounded-xl shadow-sm transition-all duration-200 flex flex-col items-center justify-center"
                  >
                    <div className="text-3xl mb-2 text-gray-100">{icon}</div>
                    <span className="text-sm font-medium text-center">{name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

