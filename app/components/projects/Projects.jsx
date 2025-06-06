"use client"
import React from 'react'
import Project1 from "../../assets/projects/p1.jpeg"
import Project2 from "../../assets/projects/p2.jpg"
import Project3 from "../../assets/Projects/p3.jpg"
import Image from 'next/image'
import { motion } from 'framer-motion'
const projects = [
    {
        id: 1,
        title: "Project 1",
        link: "#",
        desc: "Project 1 description",
        image: Project1,
        delay:0.8
    },
    {
        id: 2,
        title: "Project 2",
        link: "#",
        desc: "Project 2 description",
        image: Project2,
        delay:0.6
    },
    {
        id: 3,
        title: "Project 3",
        link: "#",
        desc: "Project 3 description",
        image: Project3,
        delay:0.4
    }
]
export const Projects = () => {
    return (
        <section className="bg-black text-white">
            <div className="container py-10 xl:py-20 ">
                
                    {/* Heading Title */}
                    <div className="relative">
                        <p className="text-3xl lg:text-4xl mb-30 tracking-widest text-center uppercase font-bold">
                            Projects
                        </p>
                        <p className="text-5xl lg:text:8xl text-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 uppercase font-extrabold">
                                
                                Projects
                        </p>
                    </div>
                    {/* Emmet Abriviation */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 m-10">
                            {
                                projects.map((project)=>{
                                    return (
                                        <div key={project.id} className="bg-black hover:shadow-red-500 hover:shadow-lg border-2 p-2 border-red-900 grid-cols-1 md:grid-cols-2 gap-10 hover:scale-105 transition-all duration-300 group space-y-5 rounded-xl">
                                            <Image
                                                src={project.image}
                                                alt="project image"
                                                className="w-full" 
                                                
                                            />
                                            <div className="space-y-2 p-4">
                                                <h1>
                                                {project.title}
                                                </h1>
                                                <p className="text-sm line-clamp-2 text-gray-200">
                                                    {project.desc}
                                                </p>
                                            </div>
                                            {/* Hidden button section */}
                                            <div className="hidden group-hover:flex justify-around items-center duration-300">
                                                <button className="border-2 border-white px-4 py-2 rounded-lg font-bold">
                                                    Live
                                                </button>
                                                <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-red-800 via-red-900 to-gray-900 border-2 border-red-900 text-white font-semibold px-4 py-2 rounded-md"
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