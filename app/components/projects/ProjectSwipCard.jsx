"use client"
import { projects } from "../../../lib/projects"
import CardSwipe from "./card-swipe"
export const ProjectSwipCard = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center my-20 bg-gray-900">
            <div className="relative">
                        <p className="text-3xl lg:text-4xl mb-30 tracking-widest text-center uppercase font-bold">
                            Projects
                        </p>
                        <p className="text-5xl lg:text:8xl text-white/10 absolute top-0.5 -right-1/2  z-10 uppercase font-extrabold">
                                
                                Projects
                        </p>
                </div>
                {
                    projects.map((project) => (
                    <div
                        key={project.id}>
                        <CardSwipe
                        images={[{ src: project.image, alt: project.title }]}
                        autoplayDelay={1000}
                        slideShadows={true}
                        title={project.title}
                        tech={project.tech}
                        desc={project.desc}
                        live={project.link}
                        github={project.gitHub}
                        delay={project.delay}
                    />
                    </div>                                  
                    ))
                }       
        </div>
    )
}