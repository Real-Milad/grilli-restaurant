import { feature } from "../../data/data"
import { Subtitle } from "../shared/Subtitle"

export const Features = () => {
  
  return (
    <div className="w-full mt-540 px-10 pb-20 md:mt-390 lg:mt-220 lg:px-50">

      <Subtitle title="Why Choose Us"/>

      <h3 className="text-center mt-10 text-6xl font-Story tracking-wider mb-20">Our Strength</h3>

      <div className="md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-4">
        {feature.map((item, index) => 
          <div className={`group text-center rounded-2xl mb-20 py-8 px-8 ${index === 0 || index === 2 ? "bg-eerie-black-2" : "bg-smoky-black-1"}`}>
            <img src={item.img} alt={item.title} className="group-hover:animate-[feature_500ms] mx-auto mb-10"/>
            <h3 className="mb-10 font-Story text-5xl">{item.title}</h3>
            <p className="text-[14px] text-neutral-400">{item.info}</p>
          </div>
        )}
      </div>

    </div>
  )
}
