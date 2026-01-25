"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import type { Swiper as SwiperType } from "swiper"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { projects } from "../../lib/projects"
import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt, FaPlay } from "react-icons/fa"
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules"

interface CarouselProps {
  images: { src: string; alt: string }[]
  autoplayDelay?: number
  showPagination?: boolean
  showNavigation?: boolean
}

export const CardCarousel: React.FC<CarouselProps> = ({
  images,
  autoplayDelay = 3000,
  showPagination = true,
  showNavigation = true,
}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)

  const css = `
  .swiper {
    width: 100%;
    padding-bottom: 60px;
  }
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 380px;
    transition: all 0.3s ease;
  }
  
  .swiper-slide-active {
    transform: scale(1.05);
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
    border-radius: 12px;
  }
  
  .swiper-3d .swiper-slide-shadow-left,
  .swiper-3d .swiper-slide-shadow-right {
    background: none;
  }

  .swiper-pagination-bullet {
    background: #dc2626;
    opacity: 0.5;
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
    background: #dc2626;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #dc2626;
    background: rgba(0, 0, 0, 0.5);
    padding: 30px 20px;
    border-radius: 8px;
  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    background: rgba(220, 38, 38, 0.3);
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 20px;
    font-weight: bold;
  }
  `

  return (
    <section className="w-full py-8">
      <style>{css}</style>

      {/* Project Counter */}
      <div className="flex justify-center mb-6">
        <div className="bg-gray-900/80 backdrop-blur-sm border border-red-900/30 rounded-full px-6 py-2">
          <span className="text-red-500 font-bold text-lg">{activeIndex + 1}</span>
          <span className="text-gray-400 mx-2">/</span>
          <span className="text-gray-400">{projects.length}</span>
          <span className="text-gray-500 ml-2 text-sm">Projects</span>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4">
        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: autoplayDelay,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2,
            slideShadows: false,
          }}
          pagination={showPagination ? { clickable: true } : false}
          navigation={showNavigation}
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <motion.div
                className="bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-md rounded-2xl border border-red-900/20 overflow-hidden shadow-xl hover:shadow-red-900/30 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                {/* Project Image */}
                <div className="relative group overflow-hidden">
                  <Image
                    src={project.image}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    alt={project.title}
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex gap-3">
                      {project.link !== "#" && (
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => window.open(project.link, "_blank")}
                          className="bg-green-600 hover:bg-green-500 text-white p-3 rounded-full shadow-lg"
                          title="Live Demo"
                        >
                          <FaExternalLinkAlt size={16} />
                        </motion.button>
                      )}
                      {project.demo !== "#" && (
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => window.open(project.demo, "_blank")}
                          className="bg-red-600 hover:bg-red-500 text-white p-3 rounded-full shadow-lg"
                          title="Watch Demo"
                        >
                          <FaPlay size={16} />
                        </motion.button>
                      )}
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.open(project.gitHub, "_blank")}
                        className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full shadow-lg"
                        title="View Code"
                      >
                        <FaGithub size={16} />
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-5">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.desc}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.split(",").slice(0, 4).map((item, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gradient-to-r from-gray-800 to-red-900/50 text-gray-300 px-2 py-1 rounded-full"
                      >
                        {item.trim()}
                      </span>
                    ))}
                    {project.tech.split(",").length > 4 && (
                      <span className="text-xs text-gray-500">
                        +{project.tech.split(",").length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {project.link !== "#" && (
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => window.open(project.link, "_blank")}
                        className="flex-1 bg-green-600 hover:bg-green-500 text-white text-sm font-medium py-2 px-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
                      >
                        <FaExternalLinkAlt size={12} />
                        Live
                      </motion.button>
                    )}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => window.open(project.gitHub, "_blank")}
                      className="flex-1 bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium py-2 px-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
                    >
                      <FaGithub size={14} />
                      Code
                    </motion.button>
                    {project.demo !== "#" && (
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => window.open(project.demo, "_blank")}
                        className="flex-1 bg-red-600 hover:bg-red-500 text-white text-sm font-medium py-2 px-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
                      >
                        <FaPlay size={12} />
                        Demo
                      </motion.button>
                    )}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

