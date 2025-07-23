"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import CountUp from "react-countup";
import HeroImg3 from "../../assets/AmitHeronbg.png";
import Circle from "../../assets/circle.png";
import Wall from "../../assets/wall.jpg"
import { useInView } from "framer-motion"
import { useRef} from "react"

const wallBackground = {
    backgroundImage: `url(${Wall.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundOpacity: 0.5,   
}

const countUp = [
    { end: 20, label: "Projects Completed" },
    { end: 100, label: "Commits in 2024" },
    { end: 250, label: "DSA Problems Solved on Leetcode" }
]

const text = "Amit Kumar Gupta";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // delay between letters
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const HeroNext = () => {
    const statRef = countUp.map(() => useRef(null));
    const isInView = statRef.map((ref) => useInView(ref, { once: true }));
    return (
        <section style={wallBackground} className="bg-black text-white overflow-hidden">
            <div className="bg-gradient-to-r from-red-900/50 to-gray-950">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[650px] px-6 py-12 md:py-24 ml-10">
                    {/* Brand info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6"
                    >
                        <p className="text-3xl sm:text-4xl">Hello, I'm</p>
                         <motion.h1
                            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500  font-satisfies"
                            variants={container}
                            initial="hidden"
                            animate="visible"
                            id="hero-name-text"
                            >
                            {text.split("").map((char, index) => (
                                <motion.span key={index} variants={letter}>
                                {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </motion.h1>
                        <p className="text-gray-300 max-w-lg">
                            A Full-Stack Developer specializing in the MERN stack & Next.js, with a keen interest in DevOps, CI/CD, automation, and cloud infrastructure.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-red-800 via-red-900 to-gray-900 border-2 border-red-900 text-white font-semibold px-6 py-3 rounded-md transition-all duration-300"
                        >
                            Know More
                        </motion.button>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                            {countUp.map((stat, idx) => (
                                <motion.div
                                    ref={statRef[idx]}
                                    key={idx}
                                    whileHover={{ scale: 1.05 }}
                                    className="flex flex-col items-center bg-gradient-to-b from-red-800 to-gray-900 border-2 border-red-900 rounded-xl p-4 w-32"
                                >
                                    <p className="text-3xl font-bold">
                                        {isInView && (
                                                <CountUp end={stat.end} start={0} suffix="+" delay={0.3} enableScrollSpy scrollSpyOnce>
                                                {({countUpRef}) => <span ref={countUpRef}/>}    
                                                 </CountUp>
                                        )}
                                        
                                    </p>
                                    <p className="text-gray-300 text-sm text-center">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2 }}
                        className="flex justify-center items-center mt-10 md:mt-0 relative"
                    >
                        <div className="p-[2px] rounded-3xl bg-gradient-to-r from-red-800 via-red-900 to-gray-900 bg-[length:400%_400%] animate-shine">
  <div className="bg-black rounded-3xl overflow-hidden h-[500px] sm:h-[600px] flex items-end relative group shadow-red transition-transform duration-700 hover:scale-105">
    
    {/* Spinning circle */}
    <Image
      src={Circle}
      alt="circle"
      className="absolute w-[300px] sm:w-[500px] -top-4 left-1/2 -translate-x-1/2 -z-10 animate-spin group-hover:animate-pulse  transition duration-300"
    />
    
    {/* Hero image */}
    <Image
      src={HeroImg3}
      alt="hero image"
      className="w-[400px] sm:w-[500px] transition duration-300 group-hover:grayscale group-hover:scale-90"
    />

  </div>
</div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};
