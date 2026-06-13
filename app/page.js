
import { Navbar } from "./components/navbar/Navbar";
import { Banner } from "./components/banner/Banner";
import { Experience } from "./components/experience/Experience";
import { ContactForm } from "./components/contactForm/ContactForm";
import { Footer } from "./components/footer/Footer";
import { HeroNext } from "./components/hero/HeroNext";
import { Skills } from "./components/skills/Skills";
import { ProjectCarousel } from "./components/projects/ProjectCarousel";
import { ScrollToTop } from "./components/ui/ScrollToTop";
import { Services } from "./components/services/Services";
import { LiveStats } from "./components/stats/LiveStats";
import { AchievementSystem } from "./components/gamification/AchievementSystem";
const page = () => {
  return (
    <main>
      <Navbar />
      <HeroNext />
      <Services />
      <LiveStats />
      <Experience />
      <ProjectCarousel />
      <Skills />
      <AchievementSystem/>
      <ContactForm />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
export default page;