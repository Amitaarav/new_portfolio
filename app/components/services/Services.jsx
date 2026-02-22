"use client";

import RedBg from "../../assets/redbg2.png";
import { RiCodeBoxLine } from "react-icons/ri";         // Full-Stack Development
import { TbServerBolt } from "react-icons/tb";           // Backend Engineering
import { HiOutlineCloud } from "react-icons/hi";        // DevOps & Cloud Infrastructure
import { LuWorkflow } from "react-icons/lu";
import { SiSolana } from "react-icons/si";               // Web3 & Blockchain
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const bgStyle = {
  backgroundImage: `url(${RedBg.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const ServicesData = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    icon: <RiCodeBoxLine className="text-3xl" />,
    desc: "End-to-end development of scalable web platforms using Next.js and TypeScript. Specializing in high-performance responsive UIs, server-side rendering strategies, and robust state management.",
    delay: 0.2,
  },
  {
    id: 2,
    title: "Backend Engineering",
    icon: <TbServerBolt className="text-3xl" />,
    desc: "Architecting low-latency backend systems with Node.js, Go and Redis. Proficient in designing RESTful and GraphQL APIs, WebSocket services, and atomic transaction systems handling massive scale.",
    delay: 0.4,
  },
  {
    id: 3,
    title: "DevOps & Cloud Infrastructure",
    icon: <HiOutlineCloud className="text-3xl" />,
    desc: "Implementing secure CI/CD pipelines and container orchestration with Docker and Kubernetes. Expertise in AWS cloud architecture, automated deployments, and infrastructure as code.",
    delay: 0.6,
  },
  {
    id: 4,
    title: "System Architecture & Scale",
    icon: <LuWorkflow className="text-3xl" />,
    desc: "Designing resilient event-driven architectures using Kafka and Pub/Sub patterns. Focused on system reliability, fault tolerance, and optimizing data throughput for real-time applications process 100K+ daily events.",
    delay: 0.8,
  },
  {
    id: 5,
    title: "Web3 & Blockchain Engineering",
    icon: <SiSolana className="text-3xl" />,
    desc: "Building decentralized applications on Solana using Web3.js and Wallet Adapter. Expertise in wallet integration, secure on-chain transactions, transaction confirmation flows, message signing, and Web3 automation systems integrated with scalable backend architectures.",
    delay: 1.0,
  },
];


export const Services = () => {
  return (
    <section id="services" style={bgStyle} className="w-full relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black/80 to-black/60 z-0"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 py-16 md:py-24">
        {/* Top: Header & Description */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
          <div className="space-y-3">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-red-500 font-mono text-sm tracking-widest uppercase"
            >
              Features & Skills
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500"
            >
              Services
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-base md:text-lg leading-relaxed"
          >
            Leveraging deep expertise in Full-Stack engineering to build robust digital solutions. From architecting diverse real-time systems to optimizing cloud infrastructure, I deliver code that scales. My core focus remains on system performance, security, and maintainability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(220, 38, 38, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-xl shadow-red-900/20"
            >
              View My Work
            </motion.button>
            <motion.a
              href="/Amit_Gupta_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/20 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm flex items-center gap-2"
            >
              <FiDownload className="text-xl" />
              Resume
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom: Cards Grid (Balanced 5-card layout) */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {ServicesData.map((service) => (
            <div key={service.id} className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-2rem)] max-w-sm">
              <CardContainer className="inter-var w-full" containerClassName="py-0">
                <CardBody className="bg-gray-50/5 relative group/card hover:shadow-2xl hover:shadow-red-500/[0.1] border-white/[0.1] w-full h-auto rounded-3xl p-6 md:p-8 border hover:bg-white/[0.08] transition-all duration-500">
                  <CardItem
                    translateZ="50"
                    className="text-red-500 bg-red-500/10 p-3 rounded-2xl mb-4 group-hover/card:bg-red-600 group-hover/card:text-white transition-all duration-500"
                  >
                    {service.icon}
                  </CardItem>
                  <CardItem
                    translateZ="60"
                    className="text-xl font-bold text-white mb-2 group-hover/card:text-red-400 transition-colors"
                  >
                    {service.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="40"
                    className="text-gray-400 text-sm leading-relaxed"
                  >
                    {service.desc}
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
