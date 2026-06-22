import pattern from "../../assets/img-pattern.svg"
import service1 from "../../assets/service-1.jpg"
import service2 from "../../assets/service-2.jpg"
import service3 from "../../assets/service-3.jpg"
import { Subtitle } from "../shared/Subtitle"

import shape1 from "../../assets/shape-1.png"
import shape2 from "../../assets/shape-2.png"
import shape4 from "../../assets/shape-4.png"


const services = [
  {img: service1, title: "Breakfast"},
  {img: service2, title: "Appetizers"},
  {img: service3, title: "Drinks"},
]



export const Service = () => {

  return (
    <div className="bg-smoky-black-2 w-full pt-30 flex-center flex-col relative overflow-hidden">
      <Subtitle title="Flavors For Royalty" />
      <h1 className="font-Italianno text-7xl tracking-widest my-13 lg:text-8xl">We Offer Top Notch</h1>

      <p className="text-center w-150 mb-30">
        Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry lorem Ipsum has been the
        industrys standard dummy text ever.
      </p>

      <div className="flex-center flex-col gap-0 lg:gap-50 lg:flex-row">
        {services.map((item, index) => 
          <div className={`relative my-5 group ${(index === 0 || index === 2) && "lg:-translate-y-70"}`}>
            <div className="w-140 flex-center">
              <img src={pattern} alt="" className="w-70 absolute z-1 group-hover:rotate-y-180 transition duration-600 delay-200 mask-x-from-90% mask-y-from-95%"/>
              <div className="w-140 flex-center overflow-hidden relative">
                <img src={item.img} alt="" className="w-full object-cover z-2 group-hover:scale-105 transition duration-600"/>
                <div className="absolute top-0 left-0 bg-gradient-hover w-1/2 h-full skew-x-[-0.08turn] translate-x-[-180%] z-3 group-hover:skew-x-[-0.08turn] group-hover:translate-x-[275%] group-hover:transition group-hover:duration-800"></div>
              </div>
            </div>

            <div className="mt-20 flex-center flex-col mb-30">
              <h3 className="text-[22px] mb-2">{item.title}</h3>
              <a href="#" className="text-gold-crayola ">View Menu</a>
            </div>
          </div>
        )}
      </div>

      <img src={shape2} alt="" className="hidden md:block absolute top-45 right-0 w-80 lg:w-80 lg:top-10 animate-[move_4s_infinite]"/>
      <img src={shape1} alt="" className="hidden md:block absolute top-300 left-0 w-70 lg:w-100 lg:bottom-10 animate-[move_4s_infinite]" />
      <img src={shape4} alt="" className="hidden md:block lg:hidden absolute top-550 right-0 w-60 animate-[move_4s_infinite]" />
      <img src={shape2} alt="" className="hidden md:block lg:hidden absolute bottom-15 left-0 w-80 animate-[move_4s_infinite]"/>

    </div>
  )
}
