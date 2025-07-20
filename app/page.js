
import { Navbar } from "./components/navbar/Navbar";
import dynamic from "next/dynamic";
import { Banner } from "./components/banner/Banner";
import { Services } from "./components/services/Services";
import { Projects } from "./components/projects/Projects";
import { ContactForm } from "./components/contactForm/ContactForm";
import { Footer } from "./components/footer/Footer";
import { HeroNext } from "./components/hero/HeroNext";
import { Skills } from "./components/skills/Skills";
const page = () => {
  return (
    <main>
      <Navbar />
      <HeroNext />
      <Banner />
      <Services />
      <Projects />
      <Skills />
      <ContactForm />
      <Footer />
    </main>
  )
}

export default page;