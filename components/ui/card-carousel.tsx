"use client"

import React from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { projects } from "../../lib/projects"
import { motion } from "framer-motion"
import { SparklesIcon } from "lucide-react"
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules"

import { Badge } from "@/components/ui/badge"

interface CarouselProps {
  images: { src: string; alt: string }[]
  autoplayDelay?: number
  showPagination?: boolean
  showNavigation?: boolean
}

export const CardCarousel: React.FC<CarouselProps> = ({
  images,
  autoplayDelay = 1500,
  showPagination = true,
  showNavigation = true,
}) => {
  const css = `
  .swiper {
    width: 100%;
    padding-bottom: 50px;
  }
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    /* height: 300px; */
    /* margin: 20px; */
  }
  
  .swiper-slide img {
    display: block;
    width: 200%;
  }
  
  
  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }
  .swiper-3d .swiper-slide-shadow-right{
    background: none;
  }
  `
  return (
    <section className="w-ace-y-4">
      <style>{css}</style>
      <div className="mx-auto w-full max-w-4xl rounded-[24px] border border-black/5 p-2 shadow-sm md:rounded-t-[44px] ">
        <div className="relative mx-auto flex w-full flex-col rounded-[24px] border border-black/5 p-2 shadow-sm md:items-start md:gap-8 md:rounded-b-[20px] md:rounded-t-[40px] md:p-2">
          <div className="flex w-full items-center justify-center gap-4">
            <div className="w-full ">
              <Swiper
                spaceBetween={50}
                autoplay={{
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                pagination={showPagination}
                navigation={
                  showNavigation
                    ? {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                      }
                    : undefined
                }
                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
              >
                {projects.map((project) => (
                  <SwiperSlide key={project.id}>
                    <div className="size-full rounded-3xl bg-black p-8 h-100px">
                      <Image
                        src={project.image}
                        width={500}
                        height={500}
                        className="size-full rounded-xl"
                        alt={project.title}
                        onClick={()=>
                          window.open(project.link, "_blank")
                        }
                      />
                      <div className="mt-2 flex flex-col items-start">
                        <h3 className="text-lg font-semibold text-orange-700 dark:text-white">
                          {project.title}
                        </h3>
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
                                                                                  className="inline-block bg-gradient-to-r from-gray-800 to-red-700 text-gray-300 text-sm px-3 py-1 rounded-full shadow-md cursor-default transition-colors duration-300 font-semibold"
                                                                                >
                                                                                  {item.trim()}
                                                                                </motion.span>
                                                                              ))}
                                                                            </div>
                      
                        
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
