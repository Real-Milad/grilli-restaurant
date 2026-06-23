import specialBanner from "../../assets/special-dish-banner.jpg";
import badge from "../../assets/badge-1.png"
import seperator from "../../assets/separator.svg"
import shape6 from "../../assets/shape-6.png"
import shape9 from "../../assets/shape-9.png"


export const Special = () => {

  return (
    <section className="bg-smoky-black-1 w-full flex-center flex-col gap-40 pb-30 lg:flex-row lg:pb-0 lg:h-screen relative">

      <img src={shape9} alt="" className="absolute -bottom-60 right-10" />
      <img src={shape6} alt="" className="absolute top-20 right-0 w-200 max-lg:hidden"/>

      <div className="flex-1 w-full object-cover">
        <img src={specialBanner} alt="special banner" className=""/>
      </div>

      <div className="flex-1 text-center lg:text-left relative">
        <img src={badge} alt="badge" className="mx-auto mb-10 lg:mx-0 lg:absolute lg:top-3 lg:-left-20 animate-bounce"/>

        <div className="flex-center flex-col lg:items-start">
          <p className="text-[15px] font-bold tracking-[5px] uppercase mb-5 text-gold-crayola">Special Dish</p>

          <img src={seperator} className="w-50"/>
        </div>

        <h1 className="font-Italianno text-8xl tracking-wider my-10 md:text-9xl lg:text-[90px]">Lobster Tortellini</h1>

        <p className="px-8 text-[16px] mb-20 md:px-40 lg:px-0 lg:pr-70">
          Lorem Ipsum is simply dummy text of the printingand typesetting 
          industry lorem Ipsum has been the industrys standard dummy text
          ever since the when an unknown printer took a galley of type.
        </p>

        <div className="flex-center gap-20 mb-20 lg:justify-start">
          <p className="text-neutral-500 line-through text-[20px] tracking-wider">$40.00</p>
          <p className="text-gold-crayola font-bold text-[25px] tracking-wider">$20.00</p>
        </div>

        <a href="#" className="btn mx-auto btn-primary lg:mx-0">
          <span className="text text-1">View Our Menu</span>
          <span className="text text-2">View Our Menu</span>
        </a>

      </div>
      
    </section>
  )
}