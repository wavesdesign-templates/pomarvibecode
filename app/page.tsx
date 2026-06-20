import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/sections/Hero";
import { Story } from "@/components/sections/Story";
import { Principles } from "@/components/sections/Principles";
import { Offerings } from "@/components/sections/Offerings";
import { Growers } from "@/components/sections/Growers";
import { HarvestBox } from "@/components/sections/HarvestBox";
import { Menu } from "@/components/sections/Menu";
import { Visit } from "@/components/sections/Visit";
import { Team } from "@/components/sections/Team";
import { Testimonials } from "@/components/sections/Testimonials";
import { Newsletter } from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Story />
        <Principles />
        <Offerings />
        <Growers />
        <HarvestBox />
        <Menu />
        <Visit />
        <Team />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
