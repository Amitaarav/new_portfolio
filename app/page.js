
import { Navbar } from "./components/navbar/Navbar";
import { Banner } from "./components/banner/Banner";
import { Services } from "./components/services/Services";
import { Experience } from "./components/experience/Experience";
import { Projects } from "./components/projects/Projects";
import { ContactForm } from "./components/contactForm/ContactForm";
import { Footer } from "./components/footer/Footer";
import { HeroNext } from "./components/hero/HeroNext";
import { Skills } from "./components/skills/Skills";
import { ProjectCarousel } from "./components/projects/ProjectCarousel";
import { ScrollToTop } from "./components/ui/ScrollToTop";

const page = () => {
  return (
    <main>
      <Navbar />
      <HeroNext />
      <Banner />
      <Services />
      <Experience />
      {/* <Projects /> */}
      <ProjectCarousel />
      <Skills />
      <ContactForm />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
export default page;