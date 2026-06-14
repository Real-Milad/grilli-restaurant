import slider1 from "../../assets/hero-slider-1.jpg"
import slider2 from "../../assets/hero-slider-2.jpg"
import slider3 from "../../assets/hero-slider-3.jpg"
import heroIcon from "../../assets/hero-icon.png"
import seperator from "../../assets/separator.svg"
import { useEffect, useState } from "react"

const slides = [
  {image: slider1, subtitle: 'Tradational & Hygine', title1: 'For the love of', title2: 'delicious food' },
  {image: slider2, subtitle: 'delightful experience', title1: 'Flavors Inspired by', title2: 'the Seasons' },
  {image: slider3, subtitle: 'amazing & delicious', title1: 'Where every flavor', title2: 'tells a story' }
]



export const Hero = () => {
  const [index, setIndex] = useState(0);

    function prev() {
      setIndex(index => index === 0 
        ? slides.length - 1 
        : index - 1
      );
    };

    function next() {
      setIndex(index => index === slides.length - 1 
        ? 0 
        : index + 1
      );
    };

    useEffect(() => {
      const interval = setInterval(next, 8000);
      return () => clearInterval(interval);
    }, [index]);


    return (
      <section className="hero text-center">
        {slides.map((slide, i) => 
          <div className={`slider-item transition-all duration-1000 ${index === i ? "active opacity-100 visible" : "opacity-0 invisible"}`}>
            <div className="slider-bg"> 
              <img src={slide.image} key={i} width={1880} height={950} className="img-cover"/>
            </div>
            <p className="label-2 section-subtitle slider-reveal">{slide.subtitle}</p>
            <img src={seperator} className="hero-separator slider-reveal"/>
            <h1 className="display-1 hero-title slider-reveal">{slide.title1} <br /> {slide.title2}</h1>
            <p className="body-2 hero-text slider-reveal">Come with family & feel the joy of <br /> mouthwatering food</p>
            <a href="#" className="btn btn-primary slider-reveal">
              <span className="text text-1">View Our Menu</span>
              <span className="text text-2">View Our Menu</span>
            </a>
          </div>
        )}
        <button className="slider-btn prev">
        <ion-icon name="chevron-back"></ion-icon>
        </button>

        <button className="slider-btn next">
          <ion-icon name="chevron-forward"></ion-icon>
        </button>

        <a href="#" className="absolute bottom-12 right-1/2 z-2 size-34 p-3 translate-x-1/2 bg-gold-crayola
        after:content-[''] after:absolute after:inset-0 after:border after:border-gold-crayola 
        after:animate-[spin_9s_infinite_linear]">

          <img src={heroIcon} alt="booking-icon" width={40} height={40} className="mx-auto mb-2"/>
          <span className="text-[10px] leading-6 font-bold text-black uppercase tracking-wide">Book A Table</span> 
        </a>
      </section>
    )
  }




  // return (
    // <section className="hero text-center">

    //   <ul className="hero-slider">





        {/* {slides.map((slide, i) => 
          <li className={`slider-item transition-all duration-1000 ${index === i ? "opacity-100 visible" : "opacity-0 invisible"}`} key={slide.image}>
            <div className="slider-bg">
              <img src={slide.image} width={1880} height={950} className="img-cover"/>
            </div>
            <p className="label-2 section-subtitle slider-reveal">{slide.subtitle}</p>
            <img src={seperator} className="hero-separator slider-reveal"/>
            <h1 className="display-1 hero-title slider-reveal">{slide.title}</h1>
            <p className="body-2 hero-text slider-reveal">Come with family & feel the joy of <br /> mouthwatering food</p>
            <a href="#" className="btn btn-primary slider-reveal">
              <span className="text text-1">View Our Menu</span>
              <span className="text text-2">View Our Menu</span>
            </a>
          </li>
        )} */}

        {/* <li className="slider-item active">
          <div className="slider-bg">
            <img src={slider1} className="img-cover" width={1880} height={950}/>
          </div>
          <p className="label-2 section-subtitle slider-reveal">Tradational & Hygine</p>
          <img src={seperator} alt="" className="hero-separator slider-reveal" />
          <h1 className="display-1 hero-title slider-reveal">For the love of <br /> delicious food</h1>
          <p className="body-2 hero-text slider-reveal">Come with family & feel the joy of <br /> mouthwatering food</p>

          <a href="#" className="btn btn-primary slider-reveal">
            <span className="text text-1">View Our Menu</span>
            <span className="text text-2">View Our Menu</span>
          </a>        
        </li>

        <li className="slider-item">
          <div className="slider-bg">
            <img src={slider2} className="img-cover" width={1880} height={950}/>
          </div>
          <p className="label-2 section-subtitle slider-reveal">delightful experience</p>
          <img src={seperator} alt="" className="hero-separator slider-reveal" />
          <h1 className="display-1 hero-title slider-reveal">Flavors Inspired by <br /> the Seasons</h1>
          <p className="body-2 hero-text slider-reveal">Come with family & feel the joy of mouthwatering food</p>
          <a href="#" className="btn btn-primary slider-reveal">
            <span className="text text-1">View Our Menu</span>
            <span className="text text-2">View Our Menu</span>
          </a>        
        </li>

        <li className="slider-item">
          <div className="slider-bg">
            <img src={slider3} className="img-cover" width={1880} height={950}/>
          </div>
          <p className="label-2 section-subtitle slider-reveal">amazing & delicious</p>
          <img src={seperator} alt="" className="hero-separator slider-reveal" />
          <h1 className="display-1 hero-title slider-reveal">Where every flavor <br /> tells a story</h1>
          <p className="body-2 hero-text slider-reveal">Come with family & feel the joy of mouthwatering food</p>
          <a href="#" className="btn btn-primary slider-reveal">
            <span className="text text-1">View Our Menu</span> 
            <span className="text text-2">View Our Menu</span>
          </a>        
        </li> */}

      {/* </ul>

      <button className="slider-btn prev">
        <ion-icon name="chevron-back"></ion-icon>
      </button>

      <button className="slider-btn next">
        <ion-icon name="chevron-forward"></ion-icon>
      </button>

      <a href="#" className="absolute bottom-20 right-1/2 z-2 size-34 p-3 translate-x-1/2 bg-gold-crayola
      after:content-[''] after:absolute after:inset-0 after:border after:border-gold-crayola 
      after:animate-[spin_9s_infinite_linear]">

        <img src={heroIcon} alt="booking-icon" width={40} height={40} className="mx-auto mb-2"/>
        <span className="text-[10px] leading-6 font-bold text-black uppercase tracking-wide">Book A Table</span> 
      </a>
    </section> */
  // )
}
