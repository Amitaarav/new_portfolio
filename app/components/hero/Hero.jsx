"use client"
import { motion } from "framer-motion";
import HeroImg from "../../assets/red-man.png"
import HeroImg2 from "../../assets/new_men.png"
import Image from "next/image";
import Circle from "../../assets/circle.png"
import Wall from "../../assets/wall.jpg"
import CountUp from "react-countup";
const wallBackground = {
    backgroundImage: `url(${Wall.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundOpacity: 0.5,   
}
const heroText = {
    initial: {
        opacity: 0,
        y: 75,
    },
}
export const Hero = () => {
    return (
        <section style={wallBackground} className=" bg-black text-white">
            <div className="bg-gradient-to-r from-red-900/50 to-gray-950">
                <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
                    {/* Brand info */}
                    <div className="flex flex-col justify-center md:text-left items-center md:items-start ml-20">
                        <div className="text-center md:text-left space-y-6">
                            <p className="text-4xl">Hello, I'm</p>
                            <p className="text-5xl font-extrabold lg:text-7xl">Amit Kumar Gupta</p>
                            <p className="text-gray-300">I'm a Full-Stack Developer specializing in the MERN stack & Next.js, with a keen interest in DevOps, CI/CD, automation, and cloud infrastructure. Passionate about building scalable web applications and optimizing deployment pipelines for efficiency.</p>
                            <button className="bg-gradient-to-r from-red-800 via-red-900 to-gray-900 border-2 border-red-900 text-white font-semibold px-4 py-2 rounded-md transition-all duration-300 cursor-pointer">Know More</button>
                            {/* Stats Section */}
                            <div className="flex gap-4">
                                    <div className="flex flex-col items-center bg-gradient-to-b from-red-800 to-gray-900 gap-2 border-2 border-red-900 rounded-xl p-4">
                                        <p className="text-4xl font-bold">
                                            <CountUp end={100} start={0} suffix="+" delay={1.4} enableScrollSpy />
                                        </p>
                                        <p className="text-gray-300 font-sm">Years of Experience</p>
                                    </div>
                                    <div className="flex flex-col items-center bg-gradient-to-b from-red-800 to-gray-900 gap-2 border-2 border-red-900 rounded-xl p-4">
                                        <p className="text-4xl font-bold">
                                        <CountUp end={199} start={0} suffix="+" delay={1.4} enableScrollSpy />
                                        </p>
                                        <p className="text-gray-300 font-sm">Years of Experience</p>
                                    </div>
                                    <div className="flex flex-col items-center bg-gradient-to-b from-red-800 to-gray-900 gap-2 border-2 border-red-900 rounded-xl p-4">
                                        <p className="text-4xl font-bold">
                                        <CountUp end={50} start={0} suffix="+" delay={1.4} enableScrollSpy />
                                        </p>
                                        <p className="text-gray-300 font-sm">clients</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                    
                {/* Hero Image */}
                <div className="flex justify-center md:justify-end items-center relative">
                    <div className="p-[2px] rounded-3xl bg-gradient-to-r from-red-800 via-red-900 to-gray-900 bg-[length:400%_400%] animate-shine">
                        <div className="bg-black rounded-3xl overflow-hidden h-[500px] flex items-end relative group shadow-red-shadow transition-transform duration-700 hover:scale-105">
                        
                        <Image
                            src={Circle}
                            alt="circle"
                            className="absolute top-4 -left-0 -z-10 animate-spin group-hover:animate-pulse transition duration-300"
                        />
                        
                        <Image
                            src={HeroImg2}
                            alt="hero image"
                            className="w-[400px] relative transition duration-300 group-hover:grayscale group-hover:scale-90"
                        />
                        
                        </div>
                    </div>
                    </div>

            </div>
        </div>
        </section>
    )
}