"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { FiDownload } from "react-icons/fi"
import Amit from "../../assets/AmitBanner.jpg"
import Grains from "../../assets/grains.png"
import { CardItem, CardBody, CardContainer } from "../../../components/ui/3d-card"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { Button } from "../../../components/ui/moving-button"
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

          <CardContainer>
            <CardBody className="bg-gray-800 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl border">
              <CardItem translateZ="100" className="w-full">
                <Image
                  src={Amit}
                  alt="banner"
                  width={400}
                  height={500}
                  className="h-120 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                />
              </CardItem>
            </CardBody>
          </CardContainer>


          {/* Banner info */}
          <div className="space-y-6 text-left max-w-xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Building Scalable Digital Solutions
            </h1>
            <p className="text-white/60 text-sm sm:text-base leading-relaxed">
              Full-Stack Developer & B.Tech graduate from NIT Calicut. I specialize in engineering high-performance platforms using Next.js, Node.js, and Cloud Native technologies. Experienced in architecting low-latency systems handling 500K+ daily events with heavy focus on clean code and system reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 cursor-pointer"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Know More
              </Button>
              <a href="/Amit_Gupta_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white font-semibold px-6 py-3 rounded-md flex items-center gap-2 cursor-pointer"
                >
                  <FiDownload className="text-lg" />
                  Download CV
                </motion.button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </section>
  )
}
