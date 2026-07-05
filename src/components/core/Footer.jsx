import footerBg from "../../assets/footer-bg.jpg"
import footerSide from "../../assets/footer-form-pattern.svg";
import footerPattern from "../../assets/form-pattern.png"
import logo from "../../assets/logo.svg"
import seperator from "../../assets/separator.svg"



export const Footer = () => {


  return (

    <div className="bg-[url(/footer-bg.jpg)] bg-no-repeat text-[16px] md:text-[20px] bg-cover bg-center pt-30 px-10 pb-25 md:px-25 lg:grid lg:grid-cols-3 relative lg:pb-60">

      <div className="bg-[url(/form-pattern.png)] relative text-center bg-neutral-900/70 overflow-hidden py-20 px-15 lg:col-start-2 lg:row-start-1">
        <img src={logo} alt="" className=" mx-auto mb-20" />
        <img src={footerSide} alt="" className="w-6 absolute top-0 left-0" />
        <img src={footerSide} alt="" className="w-6 absolute top-0 right-0" />
        <p className="text-[16px] text-neutral-400 px-5 leading-9 mb-5">Restaurant St, Delicious City, London 9578, UK</p>
        <a href="#" className="text-neutral-400 hover:text-gold-crayola transition duration-200 mb-5">booking@grilli.com</a>
        <p className="text-neutral-400 hover:text-gold-crayola transition duration-200">Booking Request : +88-123-123456</p>
        <p className="text-neutral-400">Open : 09:00 am - 01:00 pm</p>
        <img src={seperator} alt="" className="w-50 mx-auto my-10" />
        <h3 className="font-secondary text-4xl">Get News & Offers</h3>
        <p className="text-neutral-400 mb-10">Subscribe us & Get <span className="text-gold-crayola">25% Off</span>.</p>

        <input type="email" placeholder="Your Email" className="mx-auto w-full outline-0 md:mt-10 md:w-150"/>

        <a href="#" className="btn mx-auto btn-primary w-full ">
          <span className="text text-1">Subscribe</span>
          <span className="text text-2">Subscribe</span>
        </a>
      </div>

      <div className="flex flex-col justify-center items-center mt-20 gap-5   lg:col-start-1 lg:row-start-1">
        <a className="hover:text-gold-crayola uppercase text-[14px] tracking-[4px] text-neutral-300 transition hover-underline pb-2">Home</a>
        <a className="hover:text-gold-crayola uppercase text-[14px] tracking-[4px] text-neutral-300 transition hover-underline pb-2">Menu</a>
        <a className="hover:text-gold-crayola uppercase text-[14px] tracking-[4px] text-neutral-300 transition hover-underline pb-2">About Us</a>
        <a className="hover:text-gold-crayola uppercase text-[14px] tracking-[4px] text-neutral-300 transition hover-underline pb-2">Our Chefs</a>
        <a className="hover:text-gold-crayola uppercase text-[14px] tracking-[4px] text-neutral-300 transition hover-underline pb-2">Contact</a>
      </div>

      <div className="flex flex-col justify-center items-center mt-30 mb-30 gap-5  lg:col-start-3 lg:row-start-1 lg:mt-40">
        <a className="hover:text-gold-crayola uppercase text-[14px] tracking-[4px] text-neutral-300 transition hover-underline pb-2">FaceBook</a>
        <a className="hover:text-gold-crayola uppercase text-[14px] tracking-[4px] text-neutral-300 transition hover-underline pb-2">Instagram</a>
        <a className="hover:text-gold-crayola uppercase text-[14px] tracking-[4px] text-neutral-300 transition hover-underline pb-2">Twitter</a>
        <a className="hover:text-gold-crayola uppercase text-[14px] tracking-[4px] text-neutral-300 transition hover-underline pb-2">Youtube</a>
        <a className="hover:text-gold-crayola uppercase text-[14px] tracking-[4px] text-neutral-300 transition hover-underline pb-2">Google Map</a>
      </div>

      <p className="text-center w-100 md:w-200 absolute bottom-20 left-1/2 translate-x-[-50%] text-neutral-500">© 2026 Grilli. All Rights Reserved | Crafted by <span className="text-gold-crayola">Real-Milad</span></p>
      
      
    </div>

  )
}
