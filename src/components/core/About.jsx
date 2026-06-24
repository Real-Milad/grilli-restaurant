import { Button } from "../shared/Button"
import { Subtitle } from "../shared/Subtitle"

import abs from "../../assets/about-abs-image.jpg";
import banner from "../../assets/about-banner.jpg";
import badge1 from "../../assets/badge-2.png";
import badge2 from "../../assets/badge-2-bg.png";
import pattern from "../../assets/img-pattern.svg";
import shape3 from "../../assets/shape-3.png"
import { useRef } from "react";

export const About = () => {
  const bannerRef = useRef(null)
  const imgRef = useRef(null)

  let x, y
  window.addEventListener("mousemove", (event) => {
    x = (event.clientX / window.innerWidth * 10) - 5;
    y = (event.clientY / window.innerHeight * 10) - 5;

    x = x - (x * 2)
    y = y - (y * 2)

    x = x * Number(bannerRef.current.dataset.parallaxSpeed)
    x = x * Number(imgRef.current.dataset.parallaxSpeed)

    y = y * Number(bannerRef.current.dataset.parallaxSpeed)
    y = y * Number(imgRef.current.dataset.parallaxSpeed)
    bannerRef.current.style.transform = `translate3d(${x}px, ${y}px, 0px)`;
    imgRef.current.style.transform = `translate3d(${x}px, ${y}px, 0px)`;
  })

  return (
    <section className="w-full flex-center flex-col gap-10 text-center bg-eerie-black-1 py-25 lg:flex-row lg:px-20">

      <div className="flex-1">
        <Subtitle title="Our Story"/>

        <h1 className="text-6xl tracking-wide font-Story mt-20 mb-15 md:text-8xl lg:text-8xl">Every Flavor Tells a Story</h1>

        <p className="px-8 text-[17px] mb-15 md:px-35 md:text-[18px]">
          Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has 
          been the industrys standard dummy text ever since the when an unknown printer took a galley 
          of type and scrambled it to make a type specimen book It has survived not only five.
        </p>

        <p className="font-bold">Book Through Call</p>

        <a href="tel:+88123123456" className="body-1 contact-number hover-underline mb-10">+88-123-123456</a>

        <a href="#" className="btn mx-auto btn-primary">
          <span className="text text-1">Read More</span>
          <span className="text text-2">Read More</span>
        </a>
        <img src={shape3} alt="" className="hidden lg:block" />
      </div>


      <div className="flex-1 w-full flex-center py-50 relative pr-15 overflow-hidden">
        <img ref={bannerRef} data-parallax-speed="1" src={banner} alt="" className="w-150 pl-22 pb-20 md:w-250 md:translate-x-15 lg:w-270"/>

        <div ref={imgRef} data-parallax-speed="1.75" className="reletive absolute bottom-35 left-10 z-5 flex-center md:left-20 lg:left-30">
          <img src={abs} alt="" className="z-5 w-80 md:w-110 lg:w-125"/>
          <img src={pattern} alt="" className="w-35 absolute md:w-50 lg:w-55"/>
        </div>

        <img src={badge1} alt="" className="absolute top-20 right-5 z-1 md:right-13 lg:right-30"/>
        <img src={badge2} alt="" className="absolute top-20 right-5 z-1 md:right-13 lg:right-30 animate-[spin_12s_infinite_linear]"/>
      </div>
      
    </section>
  )
}