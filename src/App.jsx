import { Hero } from "./components/core/Hero";
import { Menu } from "./components/core/Menu";
import { About } from "./components/core/About";
import { Event } from "./components/core/Event";
import { Header } from "./components/core/Header";
import { Footer } from "./components/core/Footer";
import { Service } from "./components/core/Service";
import { Special } from "./components/core/Special";
import { Preload } from "./components/core/Preload";
import { Reserve } from "./components/core/Reserve";
import { Features } from "./components/core/Features";

export const App = () => {
  
  return (
    <div>
      <Preload />
      <Header />
      <Hero />
      <Service />
      <About />
      <Special />
      <Menu />
      <Reserve />
      <Features />
      <Event />
      <Footer />
    </div>
  )
}