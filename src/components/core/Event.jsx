import { eventData } from "../../data/data"
import { Subtitle } from "../shared/Subtitle"

export const Event = () => {


  return (
    <div className="bg-smoky-black-1 pt-30 pb-30">
      <Subtitle title="Recent Updates"/>
      <h3 className="text-5xl font-Story text-center mt-12 tracking-widest md:text-7xl lg:text-8xl">Upcoming Event</h3>

      <div className="flex flex-col items-center gap-20 w-full px-10 md:px-50 lg:flex-row">
        {eventData.map(item => 
          <div className="relative w-full group overflow-hidden mt-20">
            <img src={item.img} alt={item.title} className="w-full group-hover:scale-105 transition duration-700" />

            <div className="absolute z-1 bottom-0 left-0 w-full text-center bg-eerie-black-1/50">
              <p className="text-gold-crayola font-Story text-5xl tracking-widest my-5">{item.title}</p>
              <p className="font-secondary text-4xl px-9 mb-5">Flavour so good you’ll try to eat with your eyes.</p>
            </div>

            <p className="absolute z-1 top-10 left-10 bg-eerie-black-3 px-5 text-[13px] text-gold-crayola font-bold tracking-widest">{item.date}</p>

            <div className="absolute top-0 left-0 bg-gradient-hover w-1/2 h-full skew-x-[-0.08turn] translate-x-[-180%] z-3 group-hover:skew-x-[-0.08turn] group-hover:translate-x-[275%] group-hover:transition group-hover:duration-1000 "></div>
          </div>
        )}
      </div>

      <a href="#" className="btn mx-auto btn-primary mt-20">
        <span className="text text-1">View Our Menu</span>
        <span className="text text-2">View Our Menu</span>
      </a>

    </div>
  )
}
