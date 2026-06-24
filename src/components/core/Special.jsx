import { specialImages } from "../../data/imgData";
const {badge, seperator, shape6, shape9, specialBanner} = specialImages;

export const Special = () => {

  return (
    <section className="w-full flex-center flex-col gap-40 pb-30 relative bg-smoky-black-1   lg:flex-row lg:pb-0 lg:h-screen">

      <img src={shape9} alt="" className="hidden absolute -bottom-60 right-10 lg:block"/>
      <img src={shape6} alt="" className="hidden absolute top-20 right-0 w-200 lg:block"/>

      <div className="flex-1 w-full object-cover">
        <img src={specialBanner} alt="special banner"/>
      </div>

      <div className="flex-1 text-center lg:text-left relative">
        <img src={badge} alt="badge" className="mx-auto mb-10 lg:mx-0 lg:absolute lg:top-3 lg:-left-20 animate-bounce"/>

        <div className="flex-center flex-col lg:items-start">
          <p className="text-[15px] font-bold tracking-[5px] uppercase mb-5 text-gold-crayola">Special Dish</p>

          <img src={seperator} className="w-50"/>
        </div>

        <h1 className="font-Story text-7xl tracking-widest my-10 md:text-8xl lg:text-[90px]">Lobster Tortellini</h1>

        <p className="px-8 text-[16px] mb-20 md:px-40 lg:px-0 lg:pr-70">
          Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been
          the industrys standard dummy textever since the when an unknown printer took a galley of type.
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