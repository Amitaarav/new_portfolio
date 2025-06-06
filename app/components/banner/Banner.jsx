"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { FiDownload } from "react-icons/fi"
import BannerImg from "../../assets/man2.jpeg"
import Grains from "../../assets/grains.png"

const bgGrains = {
  backgroundImage: `url(${Grains.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}

export const Banner = () => {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div
        style={bgGrains}
        className="rounded-3xl bg-gray-950 bg-opacity-90 backdrop-blur-sm shadow-lg"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 md:p-12">
          {/* Left: Image */}
          <div className="flex justify-center">
            <Image
              src={BannerImg}
              alt="banner"
              width={400}
              height={500}
              className="rounded-xl border-2 border-gray-700 shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Banner info */}
          <div className="space-y-6 text-left max-w-xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              I am a Full Stack Developer and a Software Engineer
            </h1>
            <p className="text-white/60 text-sm sm:text-base leading-relaxed">
              I'm a B.Tech graduate from NIT Calicut, passionate about building scalable full-stack systems. I’ve engineered high-performance platforms using TypeScript, Next.js, Node.js, PostgreSQL, Redis, and Kafka, handling real-time data and 500K+ daily events. I focus on clean architecture, low-latency systems, and delivering impact through code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-800 via-red-900 to-gray-900 border-2 border-red-900 text-white font-semibold px-6 py-3 rounded-md"
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
        </div>
      </div>
    </section>
  )
}
