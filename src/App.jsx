import { About } from "./components/core/About"
import { BookOnline } from "./components/core/BookOnline"
import { Event } from "./components/core/Event"
import { Features } from "./components/core/Features"
import { Footer } from "./components/core/Footer"
import { Header } from "./components/core/Header"
import { Hero } from "./components/core/Hero"
import { Menu } from "./components/core/Menu"
import { Preload } from "./components/core/Preload"
import { Reserve } from "./components/core/Reserve"
import { Service } from "./components/core/Service"
import { Special } from "./components/core/Special"

export const App = () => {

  return (
    <div>
      {/* <Preload /> */}
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