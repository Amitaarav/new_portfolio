import { CardCarousel } from "@/components/ui/card-carousel";
import { projects } from "../../../lib/projects";

export const ProjectCarousel = () => {
  return (
    <section className="bg-gradient-to-b from-black via-gray-900/50 to-black py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div>
            <div className="relative mb-8">
              <p className="text-3xl lg:text-4xl tracking-widest text-center uppercase font-bold text-white">
                Featured Work
              </p>
              <p className="text-5xl lg:text-8xl text-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 uppercase font-extrabold whitespace-nowrap">
                Featured Work
              </p>
            </div>
            <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
                A curated selection of high-impact web applications and scalable systems, showcasing my expertise in Full-Stack Engineering and Architectural Design.
            </p>
        </div>


        {/* Carousel */}
        <CardCarousel
          images={projects.map((project) => ({
            src: project.image,
            alt: project.title,
          }))}
          autoplayDelay={4000}
          showPagination={true}
          showNavigation={true}
        />
      </div>
    </section>
  );
};

