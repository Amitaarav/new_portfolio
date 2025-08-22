"use client"

import React, {useState} from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css/effect-cards"
import { EffectCards } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-coverflow"
import { SparklesIcon } from "lucide-react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { projects } from "@/lib/projects"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

interface CarouselProps {
  images: { src: string; alt: string }[]
  autoplayDelay?: number
  slideShadows: boolean
  title: string
  tech: string
  desc: string
  live: string
  github: string
  link?: string
  gitHub?: string
  className?: string
}

export const CardSwipe: React.FC<CarouselProps> = ({
  images,
  autoplayDelay = 1500,
  slideShadows = false,
  title,
  tech,
  desc,
  live,
  github,
}) => {
  const css = `
  .swiper {
    width: 50%;
    padding-bottom: 50px;
  }
  
  .swiper-slide {
   display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
  }
  
  `

  const [showMore, setShowMore] = useState(false)
  return (
    <section className="w-ace-y-4">
      <style>{css}</style>
      <div className="mx-auto w-full max-w-4xl rounded-[24px] border border-black/5 p-2 shadow-sm md:rounded-t-[44px]">
        <div className="relative mx-auto flex w-full flex-col rounded-[24px] border border-black/5 p-2 shadow-sm md:items-start md:gap-8 md:rounded-b-[20px] md:rounded-t-[40px] md:p-2">
          
          <div className="flex w-full items-center justify-center gap-4">
            <div className="sm:w-70% w-full rounded-[24px] bg-black pt-4">
              <Swiper
                autoplay={{
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                }}
                effect={"cards"}
                grabCursor={true}
                loop={true}
                slidesPerView={"auto"}
                rewind={true}
                cardsEffect={{
                  slideShadows: slideShadows,
                }}
                modules={[EffectCards, Autoplay, Pagination, Navigation]}
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="size-full rounded-3xl">
                      <Image
                        src={image.src}
                        width={1000}
                        height={600}
                        className="size-full rounded-xl"
                        alt={image.alt}
                      />
                    </div>
                  </SwiperSlide>
                ))}
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="size-full rounded-3xl">
                      <Image
                        src={image.src}
                        width={200}
                        height={200}
                        className="size-full rounded-xl"
                        alt={image.alt}
                      />
                    </div>
                  </SwiperSlide>
                ))}
                <div className="space-y-2 p-4 bg-gray-950 rounded-xl">
                                                <h1 className='text-2xl font-semibold text-orange-700'>
                                                {title}
                                                </h1>
                                                <div className="flex flex-wrap mt-2 gap-2">
                                                  {tech.split(",").map((item, index) => (
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
                                                      className="inline-block bg-gradient-to-r from-gray-800 to-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full shadow-md cursor-default transition-colors duration-300"
                                                    >
                                                      {item.trim()}
                                                    </motion.span>
                                                  ))}
                                                </div>
                                                <p className="text-md line-clamp-2 text-gray-200">
                                                    {showMore ? desc: `${desc.substring(0, 200)}...`}
                                                    <button
                                                    onClick={()=> setShowMore(prev => !prev)}
                                                    >
                                                        { showMore ? 'Show Less' : 'Show More'}
                                                    </button>
                                
                                                </p>
                                                <div className="flex items-center justify-between mt-4">
                                                    <button className="bg-green-600 border-2 border-white px-4 py-2 rounded-lg font-bold hover:cursor-pointer"
                                                        onClick={() => window.open(live, "_blank")}>
                                                        Live
                                                    </button>
                                                    <motion.button
                                                                whileHover={{ scale: 1.05 }}
                                                                whileTap={{ scale: 0.95 }}
                                                                className="bg-gradient-to-r from-red-800 via-red-900 to-gray-900 border-2 border-red-900 text-white font-semibold px-4 py-2 rounded-md"
                                                                onClick={() => window.open(github, "_blank")}
                                                                >
                                                           View Code
                                                    </motion.button>
                                                </div>
                                            </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
