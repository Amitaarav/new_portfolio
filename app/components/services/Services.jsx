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
              <p className="text-white/70 text-base md:text-lg leading-relaxed text-justify">
                Leveraging deep expertise in Full-Stack engineering to build robust digital solutions. From architecting diverse real-time systems to optimizing cloud infrastructure, I deliver code that scales. My core focus remains on system performance, security, and maintainability—ensuring your platform is built for growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-black font-semibold px-6 py-3 rounded-md shadow cursor-pointer"
                >
                  Know More
                </motion.button>
                <motion.a
                  href="/Amit_Gupta_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white font-semibold px-6 py-3 rounded-md cursor-pointer inline-block"
                >
                  <div className="flex items-center gap-2">
                    <FiDownload className="text-lg" />
                    Download CV
                  </div>
                </motion.a>
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
