import { menu } from "../../data/data.js";
import { Subtitle } from "../shared/Subtitle";
import shape5 from "../../assets/shape-5.png"


export const Menu = () => {

  return (
    <section className="w-full py-25 px-6 flex-center flex-col gap-9 relative">

      <img src={shape5} alt="" className="absolute top-2 left-2 -z-1" />

      <Subtitle title="Special Selection"/>
      <h1 className="text-7xl tracking-wider text-center mt-10 mb-30 font-Story">Delicious Menu</h1>

      <div className="lg:grid lg:grid-cols-2 lg:gap-x-40">
        <div className="hidden lg:block absolute w-2 h-220 bg-gold-crayola/30 right-1/2"></div>
        {menu.map(item => 
          <div key={item.id} className="flex gap-5 md:mt-10 lg:pr-25 lg:mt-20 ">

            <div className="flex-1 md:flex md:justify-end md:mr-5 overflow-hidden">
              <img src={item.img} alt={item.title} className="w-50 md:w-60 lg:w-50 hover:scale-107 transition duration-500"/>
            </div>

            <div className="flex-2 relative">
              <span className="font-Story text-[22px] md:text-[25px] tracking-widest mr-7">{item.title}</span>

              {item.tag !== "" && <span className="bg-gold-crayola text-neutral-700 py-2 px-5 font-secondary font-bold mr-5">{item.tag}</span>}

              <p className="text-gold-crayola font-bold text-[22px] relative font-secondary mt-2 lg:absolute right-10 lg:inline price">{item.price}</p>

              <p className="text-neutral-400 text-[15px] md:text-[17px] md:pr-20 lg:mt-10">{item.info}</p>
            </div>

          </div>
        )}
      </div>

      <p className="text-[17px] my-8 lg:mt-25">
        During winter daily from 
        <span className="text-gold-crayola px-3">7:00 pm</span> 
        to 
        <span className="text-gold-crayola px-3">9:00 pm</span>
      </p>

      <a href="#" className="btn mx-auto btn-primary">
        <span className="text text-1">View All Menu</span>
        <span className="text text-2">View All Menu</span>
      </a>

    </section>
  )
}