import { useEffect, useState } from "react"
import heroIcon from "../../assets/hero-icon.png"
import seperator from "../../assets/separator.svg"
import slider1 from "../../assets/hero-slider-1.jpg"
import slider2 from "../../assets/hero-slider-2.jpg"
import slider3 from "../../assets/hero-slider-3.jpg"

const slides = [
  {image: slider1, subtitle: 'Tradational & Hygine', title1: 'For The Love of', title2: 'Delicious Food' },
  {image: slider2, subtitle: 'delightful experience', title1: 'Flavors Inspired', title2: 'By the Seasons' },
  {image: slider3, subtitle: 'amazing & delicious', title1: 'Where a Flavor', title2: 'Tell a Story' }
]

export const Hero = () => {

  const [index, setIndex] = useState(0);

  function prev() {
    setIndex(index => index === 0 ? slides.length - 1 : index - 1);
  };
  
  function next() {
    setIndex(index => index === slides.length - 1 ? 0 : index + 1);
  };

  useEffect(() => {
    const interval = setInterval(next, 8000);
    return () => clearInterval(interval);
  }, [index]);


  return (
    <section className="relative py-32 min-h-screen z-1 text-center overflow-hidden">

      {slides.map((slide, i) =>
        <div className={`
          slider-item   w-full h-full grid absolute top-[50%] left-[50%] z-2
          -translate-1/2 place-content-center transition-all duration-1000
          ${index === i ? "active opacity-100 visible" : "opacity-0 invisible"}
        `}>

          <div className="w-full h-full absolute top-0 left-0 -z-1 pointer-events-none"> 
            <img src={slide.image} key={i} width={1880} height={950} className="w-full h-full object-cover"/>
          </div>

          <p className="slider-reveal text-[14px] relative font-bold tracking-[5px] uppercase text-gold-crayola mb-4">
            {slide.subtitle}
          </p>

          <img src={seperator} className="slider-reveal w-50 mx-auto mb-15"/>

          <h1 className="hero-title slider-reveal text-[50px] leading-20 tracking-[5px] font-Italianno mb-9">
            {slide.title1} <br /> {slide.title2}
          </h1>
          
          <p className="hero-text slider-reveal font-primary tracking-wider mb-10">
            Come with family & feel the joy of <br /> mouthwatering food
          </p>

          <a href="#" className="btn mx-auto btn-primary slider-reveal">
            <span className="text text-1">View Our Menu</span>
            <span className="text text-2">View Our Menu</span>
          </a>

        </div>
      )}

      <button className="slider-btn prev hidden">
        <ion-icon name="chevron-back"></ion-icon>
      </button>

      <button className="slider-btn next hidden">
        <ion-icon name="chevron-forward"></ion-icon>
      </button>

      <a href="#" className="
        absolute bottom-12 right-1/2 z-2 size-34 p-3 translate-x-1/2 bg-gold-crayola
        after:content-[''] after:absolute after:inset-0 after:border after:border-gold-crayola 
        after:animate-[spin_9s_infinite_linear]
      ">
        <img src={heroIcon} alt="booking-icon" width={40} height={40} className="mx-auto mb-2"/>

        <span className="text-[10px] leading-6 font-bold text-black uppercase tracking-wide">Book A Table</span> 
      </a>
      
    </section>
  )
}