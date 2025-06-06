import { Navbar } from "./components/navbar/Navbar";
import { HeroNext } from "./components/hero/HeroNext";
import { Banner } from "./components/banner/Banner";
import { Services } from "./components/services/Services";
import { Projects } from "./components/projects/Projects";
import { ContactForm } from "./components/contactForm/ContactForm";
import { Footer } from "./components/footer/Footer";
const page = () => {
  return (
    <main>
      <Navbar />
      <HeroNext />
      <Banner />
      <Services />
      <Projects />
      <ContactForm />
      <Footer />
    </main>
  )
}

export default page;