"use client"
import React,{useState, useRef} from 'react'
import MoneyTxn from "../../assets/projects/MoneyTXN.png"
import VectorFlow from "../../assets/projects/Vector.png"
import TriggerHub from "../../assets/projects/TriggerHub3.png"
import NetflixGPT from "../../assets/projects/NetflixGPT.png"
import Blog from "../../assets/projects/Blog.png"
import Exchange from "../../assets/projects/Exchange.png"
import Artistly from "../../assets/projects/Artistly.png"
import Stream from "../../assets/projects/Stream.png"
import Vettedge from "../../assets/projects/Vettedge.png"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from 'next/image'
import { motion } from 'framer-motion'
const projects = [
    {
        id: 1,
        title: "MoneyTXN (Fullstack)",
        link: "#",
        demo:"https://youtu.be/kPnwJ3iTnn8",
        tech:"TypeScript, Next.js, Node.js, PostgreSQL, Tailwind CSS, Zod, NextAuth.js",
        desc: "A secure fintech payment platform enabling atomic P2P and merchant transactions. Implements role-based auth via NextAuth.js, and a webhook-driven bank on-ramp system handling 10K+ events with SQL locks and Prisma transactions to ensure zero double-spend.",
        image: MoneyTxn,
        gitHub:"https://github.com/Amitaarav/MoneyTxn",
        delay:0.8
    },
    {
        id: 2,
        title: "TriggerHub: Workflow Automation (Fullstack)",
        link: "#",
        demo:"https://youtu.be/jo1lq8KTzI4",
        tech:"Tech: Node.js, Next.js, TypeScript, Postgres, Kafka, ReactFlow",
        desc: "An event-driven automation platform to handle high-volume webhooks and task workflows. Features a visual React Flow UI for building workflows, secure user auth, and Kafka-based pipelines ensuring 99.99% message reliability across 100K+ daily events.",
        gitHub:"https://github.com/Amitaarav/TriggerHub",
        image: TriggerHub,
        delay:0.4
    },
    {
        id: 3,
        title:"NetflixGPT: AI-Powered Movie Discovery (Frontend + Firebase authentication)",
        link: "#",
        demo:"#",
        tech: "Tech: React, Redux Toolkit, Firebase, TMDb API, Tailwind CSS",
        desc: "An immersive, AI-driven movie streaming UI inspired by Netflix. NetflixGPT combines real-time recommendations, smart multilingual search powered by GPT, and dynamic video playback. Features include Firebase authentication, personalized movie lists, auto-playing trailers, and responsive design — all deployed seamlessly on Firebase Hosting. Users can discover movies in 10+ languages, with GPT-powered suggestions based on natural language queries.",
        gitHub:"https://github.com/Amitaarav/NetflixGPT",
        image: NetflixGPT,
        delay:0.2

    },
    {
        id: 4,
        title:"BlogSphere: Secure Full-Stack Blog Platform (Fullstack)",
        link: "#",
        demo:"#",
        tech: "Tech: Hono (Edge), Prisma Accelerate, JWT, React, Vite, Redux, Tailwind CSS",
        desc: "BlogSphere is a blazing-fast, secure blogging platform built using Cloudflare Workers with the Hono web framework and Prisma Client with Accelerate for edge-optimized data access. It enables seamless authentication, blog publishing, image upload stubs, and protected routes—all integrated with a modular frontend powered by React 18, Redux Toolkit, and Jodit Rich Text Editor.",
        gitHub:"https://github.com/Amitaarav/BlogWeb",
        image: Blog,
        delay:0.2

    },
    {
        id: 5,
        title: " Real-Time Exchange Platform (Backend)",
        link: "#",
        demo:"#",
        tech:"Tech: TypeScript, Express.js, Redis, WebSockets, TimescaleDB",
        desc: "Built a scalable crypto trading platform supporting 10K+ orders/sec with sub-50ms latency. Leveraged Redis Pub/Sub for trade matching and WebSocket-based live market feeds, integrated with TimescaleDB-powered analytics dashboards.",
        gitHub:"https://github.com/Amitaarav/exchange-app",
        image: Exchange,
        delay:0.6
    },
    {
        id: 6,
        title: " Vector Shift workflow automation (Fullstack)",
        link: "#",
        demo:"https://youtu.be/l8Y3n6ZQrgo",
        tech:"Tech: JavaScript, Reactjs, React-flow, Fast-API",
        desc: "A full-stack workflow automation tool designed to analyze and visualize graph-based systems. The application dynamically renders node-link diagrams using React Flow, allowing users to build custom workflows. It features backend integration via FastAPI to count and manage nodes and edges, enabling real-time updates, data persistence, and process validation. Optimized for scalability and modularity in handling complex graph structures.",
        gitHub:"https://github.com/Amitaarav/vectorshift-workflow",
        image: VectorFlow,
        delay:0.6
    },
    {
        id: 7,
        title: " Vector Shift workflow automation (Fullstack)",
        link: "https://artistly-com-abof.vercel.app/",
        demo:"#",
        tech:"Tech: Next.js (App Router), React, Tailwind CSS, shadcn/ui, React Hook Form, Zod, Context API",
        desc: "Artistly is a mobile-responsive frontend demo of a performing artist booking platform, developed as part of a frontend assessment. Built with modern React tooling and UI libraries, the app offers a polished and scalable foundation for integrating into a full-stack platform.",
        gitHub:"https://github.com/Amitaarav/artistly.com",
        image: Artistly,
        delay:0.6
    },
        {
        id: 8,
        title: " Stream Deduplication Service (Backend)",
        link: "#",
        demo:"#",
        tech:"Tech:  Java 11, Maven, JUnit 5, Mockito, SOLID Principles, Strategy & Factory Design Patterns",
        desc: "A scalable and modular backend service built in Java to solve streamer duplication across multiple 17LIVE sections. The system ensures that no top-3 streamer appears in the top positions of more than one section, improving content diversity and user experience. Designed with clean architecture principles and optimized for flexibility, the service is ready for real-world deployment.",
        gitHub:"https://github.com/Amitaarav/17LiveAssignment-1",
        image: Stream,
        delay:0.6
    },
        {
        id: 9,
        title: " User Access Management System (Fullstack)",
        link: "#",
        demo:"#",
        tech:"Tech:  Node.js, Express.js, PostgreSQL, TypeORM, JWT, TypeScript, React, Tailwind CSS, React Hook Form, Context API, Vite",
        desc: "A full-fledged system designed to securely manage user access to internal software tools and services with robust authentication, role-based authorization, and audit logging. Built with clean architecture and enterprise-grade security practices.",
        gitHub:"https://github.com/Amitaarav/Software-Access-Manager",
        image: Stream,
        delay:0.6
    },
    {
        id: 10,
        title: "Vettedge : Modular AI Web App (Frontend)",
        link: "https://vettedge.vercel.app/",
        demo:"#",
        tech: "Tech: Next.js 13 App Router, React 19, Tailwind CSS, Framer Motion, Lucide",
        desc: "Designed a modular, scalable, and responsive frontend platform to showcase enterprise-grade AI and professional service components. Implemented animated and dynamic UI using Framer Motion, Tailwind CSS, and reusable component architecture. Includes service modules like TalentPersona, DeepVet, EnterpriseGrade, etc., with structured component directories.",
        gitHub: "https://github.com/Amitaarav/skillsCapital",
        image: Vettedge,
        delay: 0.5
    }
    
]
export const Projects = () => {
    const [showMore, setShowMore] = useState(false);
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if(scrollRef.current) {
            const { scrollLeft } = scrollRef.current;
            const distance = 300;
            scrollRef.current.scrollTo({
                left: direction === "left" ? scrollLeft - distance : scrollLeft + distance,
                behavior: "smooth",
        
            })
        }
    }
    return (
        <section id="projects" className="bg-black text-white scroll">
            <div className="container py-10 xl:py-24 ">
                
                    {/* Heading Title */}
                    <div className="relative">
                        <p className="text-3xl lg:text-4xl mb-30 tracking-widest text-center uppercase font-bold">
                            Projects
                        </p>
                        <p className="text-5xl lg:text:8xl text-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 uppercase font-extrabold">
                                
                                Projects
                        </p>
                    </div>

                    <div className="flex justify-between items-center mb-4 px-6">
                        <button onClick={() => scroll("left")}>
                            <ChevronLeft className="w-12 h-12 text-red-500 hover:scale-110 transition" />
                        </button>

                        <button onClick={() => scroll("right")}>
                            <ChevronRight className="w-12 h-12 text-red-500 hover:scale-110 transition" />
                        </button>
                    </div>

                    {/* Emmet Abriviation */}
                        <div 
                        ref={scrollRef}
                        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-thumb-red-800 scroll-track-transparent hide-scrollbar py-8 space-x-3 ml-10 mr-10">

                            {
                                projects.map((project)=>{
                                    return (
                                        <div key={project.id} className="w-[calc(100%/1)] sm:w-[calc(100%/2)]  md:w-[calc(100%/3)] bg-black snap-start flex-shrink-0 hover:shadow-red-500 hover:shadow-lg border-2 p-2 border-red-900 hover:scale-105 transition-all duration-300 group space-y-5 rounded-xl scrollbar-none">
                                            <Image
                                                src={project.image}
                                                alt="project image"
                                                className="w-full rounded-t-md hover: transition-all ease-in-out delay-100 duration-300" 
                                                
                                            />
                                            <div className="space-y-2 p-4">
                                                <h1 className='text-2xl font-semibold text-orange-700'>
                                                {project.title}
                                                </h1>
                                                <h2 className="text-sm text-gray-400 font-medium">
                                                    {project.tech}
                                                </h2>
                                                <p className="text-md line-clamp-2 text-gray-200">
                                                    {showMore ? project.desc: `${project.desc.substring(0, 100)}...`}
                                                    <button
                                                    onClick={()=> setShowMore(prev => !prev)}
                                                    >
                                                        { showMore ? 'Show Less' : 'Show More'}
                                                    </button>
                                                </p>
                                            </div>
                                            {/* Hidden button section */}
                                            <div className="hidden group-hover:flex justify-around items-center duration-300">
                                                <button className="bg-green-600 border-2 border-white px-4 py-2 rounded-lg font-bold hover:cursor-pointer"

                                                onClick={() => window.open(project.link, "_blank")}>
                                                    Live
                                                </button>
                                                <button className="border-2 border-white px-4 py-2 rounded-lg font-bold hover:cursor-pointer"

                                                onClick={() => window.open(project.demo, "_blank")}>
                                                    Demo
                                                </button>
                                                <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="bg-gradient-to-r from-red-800 via-red-900 to-gray-900 border-2 border-red-900 text-white font-semibold px-4 py-2 rounded-md"
                                                onClick={() => window.open(project.gitHub, "_blank")}
                                                >
                                                View Code
                                            </motion.button>
                                            </div>
                                        </div>

                                    )
                                })
                            }
                        </div>
            </div>
        </section>
    )
}