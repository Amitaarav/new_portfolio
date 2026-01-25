"use client"
import React, { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from 'next/image'
import { motion } from 'framer-motion'
import { projects } from "../../../lib/projects"
import { CardItem, CardBody, CardContainer } from "../../../components/ui/3d-card"
export const Projects = () => {
    const [showMore, setShowMore] = useState(false);
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
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

                {/* <div className="flex justify-between items-center mb-4 px-6">
                        <button onClick={() => scroll("left")}>
                            <ChevronLeft className="w-12 h-12 text-red-500 hover:scale-110 transition" />
                        </button>

                        <button onClick={() => scroll("right")}>
                            <ChevronRight className="w-12 h-12 text-red-500 hover:scale-110 transition" />
                        </button>
                    </div> */}

                {/* Emmet Abriviation */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto snap-x snap-mandatory scrollbar-thumb-red-800 scroll-track-transparent hide-scrollbar py-8 space-x-3 ml-10 mr-10">

                    {
                        projects.map((project) => {
                            return (
                                <div key={project.id} className="w-[calc(100%/1)] sm:w-[calc(100%/2)]  md:w-[calc(100%/3)] bg-black snap-start flex-shrink-0 hover:shadow-red-500 hover:shadow-lg border-2 p-2 border-red-900 hover:scale-105 transition-all duration-300 group space-y-5 rounded-xl scrollbar-none">
                                    <Image
                                        src={project.image}
                                        alt="project image"
                                        className="w-full rounded-t-md hover: transition-all ease-in-out delay-100 duration-300"

                                    />
                                    {/* <CardContainer className="p-4">
                                                    <CardBody className="bg-gray-800 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl border">
                                                        <CardItem translateZ="100" className="w-full">
                                                              <Image
                                                                src={project.image}
                                                                alt={project.title}
                                                                width={400}
                                                                height={200}
                                                                className="h-50 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                                              />
                                                        </CardItem>
                                                    </CardBody>
                                            </CardContainer>                  */}
                                    <div className="space-y-2 p-4">
                                        <h1 className='text-2xl font-semibold text-orange-700'>
                                            {project.title}
                                        </h1>
                                        <div className="flex flex-wrap mt-2 gap-2">
                                            {project.tech.split(",").map((item, index) => (
                                                <motion.span
                                                    key={index}
                                                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                                    whileHover={{
                                                        scale: 1.15,
                                                        rotate: -2,
                                                        backgroundColor: "#c2410c", // orange-700
                                                        color: "#fff",
                                                    }}
                                                    className="inline-block bg-gradient-to-r from-gray-800 to-red-800 text-gray-300 text-xs px-3 py-1 rounded-full shadow-md cursor-default transition-colors duration-300"
                                                >
                                                    {item.trim()}
                                                </motion.span>
                                            ))}
                                        </div>
                                        <p className="text-md line-clamp-2 text-gray-200">
                                            {showMore ? project.desc : `${project.desc.substring(0, 200)}...`}
                                            <button
                                                onClick={() => setShowMore(prev => !prev)}
                                            >
                                                {showMore ? 'Show Less' : 'Show More'}
                                            </button>

                                        </p>
                                    </div>
                                    {/* Action buttons - always visible for mobile */}
                                    <div className="flex justify-around items-center duration-300 pb-4">
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
