import { Navbar } from "./components/navbar/Navbar";
import { Hero } from "./components/hero/Hero";
import { HeroNext } from "./components/hero/HeroNext";
import { Banner } from "./components/banner/Banner";
const page = () => {
  return (
    <main>
      <Navbar />
      <HeroNext />
      <Banner />
    </main>
  )
}

export default page;