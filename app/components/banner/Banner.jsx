"use client"
import BannerImg from "../../assets/man2.jpeg"
import BannerImg2 from "../../assets/new_men2.png"
import Grains from "../../assets/grains.png"
import Image from "next/image"
import { motion } from "framer-motion"
import { FiDownload } from "react-icons/fi"

const bgGrains = {
    backgroundImage: `url(${Grains.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundOpacity: 0.5,
}

export const Banner = () => {
    return (
        <section className="bg-black text-white">
            <div className="container pb-10 w-[80%] mx-auto">
                <div style={bgGrains} className="bg-gray-950 rounded-3xl p-5 grid grid-cols-1 md:grid-cols-2 space-y-2 md:space-y-0 translate-y-36 md:gap-5">
                    {/* banner image */}
                        <div>
                            <Image
                            src={BannerImg}
                            alt="banner"
                            width={500}
                            height={600}
                            className="w-[300px] lg:w-[400px] rounded-xl border-2 border-gray-300 hover:scale-105 transition-all duration-300"
                            />
                        </div>
                    {/* Banner info */}
                    <div className="flex flex-col justify-center px-4 py-8 sm:px-8 md:py-12">
                        <div className="text-left space-y-7 lg:max-w-[400px]">
                            <h1 className="text-3xl lg:text-5xl font-bold">I am a Full Stack Developer and a Software Engineer</h1>
                            <p className="text-white/50 text-sm lg:text-base">I'm a B.Tech graduate from NIT Calicut, passionate about building scalable full-stack systems. I’ve engineered high-performance platforms using TypeScript, Next.js, Node.js, PostgreSQL, Redis, and Kafka, handling real-time data and 500K+ daily events. I focus on clean architecture, low-latency systems, and delivering impact through code.</p>
                            <div className="flex gap-4 justify-between">
                            <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto bg-gradient-to-r from-red-800 via-red-900 to-gray-900 border-2 border-red-900 text-white font-semibold px-6 py-3 rounded-md transition-all duration-300"
                                >
                                    Know More
                                </motion.button>
                                <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto border-2 text-white font-semibold px-6 py-3 rounded-md transition-all duration-300"
                            >
                                <div className="flex items-center gap-2">
                                    <FiDownload className="text-2xl font-semibold"/>
                                    Download CV
                                </div>
                            
                            </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
