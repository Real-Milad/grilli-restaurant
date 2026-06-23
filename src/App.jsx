import { About } from "./components/core/About"
import { Header } from "./components/core/Header"
import { Hero } from "./components/core/Hero"
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
      <div className="w-full h-screen bg-neutral-500"></div>
    </div>
  )
}