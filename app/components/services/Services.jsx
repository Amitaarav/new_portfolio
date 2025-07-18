"use client";

import RedBg from "../../assets/redbg2.png";
import { RiCodeBoxLine } from "react-icons/ri";         // Full-Stack Development
import { TbServerBolt } from "react-icons/tb";           // Backend Engineering
import { HiOutlineCloud } from "react-icons/hi";        // DevOps & Cloud Infrastructure
import { LuWorkflow } from "react-icons/lu";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

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
    desc: "Built responsive full-stack apps using Next.js, TypeScript, PostgreSQL, and Redis. Delivered scalable UIs and optimized performance with SSR/SSG and state management via Redux.",
    delay: 0.2,
  },
  {
    id: 2,
    title: "Backend Engineering",
    icon: <TbServerBolt className="text-3xl" />,
    desc: "Engineered low-latency backends with Node.js, Express, Kafka, Redis and Prisma. Built REST APIs, WebSocket services, WebRTC, and database systems that scaled to 500K+ daily events.",
    delay: 0.4,
  },
  {
    id: 3,
    title: "DevOps & Cloud Infrastructure",
    icon: <HiOutlineCloud className="text-3xl" />,
    desc: "Proficient in Docker, AWS, Kubernetes, Linux and CI/CD. Designed resilient systems with 99.99% uptime and containerized microservices with secure deployments.",
    delay: 0.6,
  },
  {
    id: 4,
    title: "Software Engineering at Scale",
    icon: <LuWorkflow className="text-3xl" />,
    desc: "Skilled in building event-driven platforms and automation systems with Kafka, Redis(Pub/Sub), WebSockets and PostgreSQL. Delivered systems that process 100K+ events/day with 99.99% uptime reliably.",
    delay: 0.8,
  },
];


export const Services = () => {
  return (
    <section id="services" style={bgStyle} className="w-full scroll">
      <div className="bg-gradient-to-b from-gray-800 via-black/70 to-black/40 text-white pt-28 md:pt-40 pb-20">
        <div className="container mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Description */}
            <div className="space-y-8 max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">Services</h1>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                I’m a Full-Stack Developer from NIT Calicut with a strong focus on backend-heavy systems. I specialize in building scalable web platforms using TypeScript, Next.js, PostgreSQL, Redis, and Kafka. My work revolves around architecting real-time data pipelines, automation workflows, and high-performance APIs.
                Whether it’s handling 500K+ daily events or designing secure, cloud-native infrastructure, I bring clean code, low-latency execution, and system reliability to the core of every project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black font-semibold px-6 py-3 rounded-md shadow"
                >
                  Know More
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white font-semibold px-6 py-3 rounded-md"
                >
                  <div className="flex items-center gap-2">
                    <FiDownload className="text-lg" />
                    Download CV
                  </div>
                </motion.button>
              </div>
            </div>

            {/* Right: Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {ServicesData.map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: service.delay }}
                  viewport={{ once: true }}
                  className="p-6 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl space-y-4 hover:shadow-lg hover:shadow-red-900 transition-shadow"
                >
                  <div className="text-red-400 bg-white/20 p-3 rounded-full w-fit">{service.icon}</div>
                  <h2 className="text-xl font-semibold text-white">{service.title}</h2>
                  <p className="text-sm text-white/70">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
