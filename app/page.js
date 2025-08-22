
import { Navbar } from "./components/navbar/Navbar";
import { Banner } from "./components/banner/Banner";
import { Services } from "./components/services/Services";
import { Projects } from "./components/projects/Projects";
import { ContactForm } from "./components/contactForm/ContactForm";
import { Footer } from "./components/footer/Footer";
import { HeroNext } from "./components/hero/HeroNext";
import { Skills } from "./components/skills/Skills";
import { ProjectCaousel } from "./components/projects/ProjectCaousel";
// import { ProjectSwipCard } from "./components/projects/ProjectSwipCard";
const page = () => {
  return (
    <main>
      <Navbar />
      <HeroNext />
      <Banner />
      <Services />
      {/* <ProjectSwipCard/> */}
      <Projects />
      <ProjectCaousel />
      <Skills />
      <ContactForm />
      <Footer />
    </main>
  )
}
export default page;