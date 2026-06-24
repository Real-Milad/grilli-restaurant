import { About } from "./components/core/About"
import { Header } from "./components/core/Header"
import { Hero } from "./components/core/Hero"
import { Menu } from "./components/core/Menu"
import { Preload } from "./components/core/Preload"
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
    </div>
  )
}