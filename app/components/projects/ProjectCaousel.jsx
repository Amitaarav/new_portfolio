import { CardCarousel } from "@/components/ui/card-carousel";
import { projects } from "../../../lib/projects";
export const ProjectCaousel = () => {
  return (
    <div className="pt-40">
        <div className="relative">
                        <p className="text-3xl lg:text-4xl mb-30 tracking-widest text-center uppercase font-bold">
                            Projects
                        </p>
                        <p className="text-5xl lg:text:8xl text-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 uppercase font-extrabold">
                                
                                Projects
                        </p>
        </div>
      <CardCarousel
        images={projects.map((project) => ({
            src: project.image,
            alt: project.title,
          }))
        }
        autoplayDelay={2000}
        showPagination={true}
        showNavigation={true}
      />
    </div>
  )
}
