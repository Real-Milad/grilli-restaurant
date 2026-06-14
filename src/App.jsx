import { Header } from "./components/core/Header"
import { Hero } from "./components/core/Hero"
import { Preload } from "./components/core/Preload"

export const App = () => {

  return (
    <div>
      {/* <Preload /> */}
      <Header />
      
      <Hero />
    </div>
  )
}