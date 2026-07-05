import logo from "../../assets/logo.svg"

const navItems = ["Home", "Menu", "About Us", "Our Chefs", "Contact"];


export const MobileNavbar = ({toggleMenu, setToggleMenu}) => {

  return (
    <nav className={`navbar fixed bg-eerie-black-3 top-0 -left-145 bottom-0 max-w-145 w-full px-12 pb-12 overflow-auto invisible z-10 translate-0 duration-500 ${toggleMenu && "visible translate-x-145"}`}>

      <button className=" absolute top-10 right-10 text-[20px] border border-white grid place-items-center rounded-full p-2 hover:text-gold-crayola hover:border-gold-crayola transition duration-500 " onClick={() => setToggleMenu(false)}>
        <ion-icon name="close-outline"></ion-icon>
      </button>

      <a href="#" className="logo max-w-max mx-auto mb-14 mt-35"> 
        <img src={logo} alt="Grili" width={160} height={50}/>
      </a>


      <ul className="navbar-list border-be border-be-white-alpha-20 mb-24">
        {navItems.map(item => <li key={item} className="navbar-item border-t border-t-white-alpha-20">

          <a href={`#${item}`} className={`after:block  group relative transition duration-500 text-[19px] uppercase py-6 max-w 
            ${item === "Home" && "active"}`}>

            <div className={`separator absolute top-1/2 left-0 -mt-1 group-hover:opacity-100 
            transition-all duration-300 ${item === "Home" ? "opacity-100" : "opacity-0"}`}></div>

            <span className={`text-[14px] tracking-widest group-hover:text-gold-crayola transition block
            ${item === "Home" ? "text-gold-crayola ml-5 translate-x-5" : "group-hover:translate-x-10"}`}>
            {item}</span>
          </a>

        </li>)}
      </ul>

      <div className="text-center">
        <p className="headline-1 navbar-title text-center mb-9 tracking-wider text-6xl text-gold-crayola">Visit Us</p>
        <address className="body-4 text-neutral-400/80 font-bold tracking-wide text-[17px]">Restaurant St, Delicious City <br /> London 9578, UK</address>
        <p className="body-4 navbar-text text-neutral-400/80 font-bold tracking-wide text-[17px] mt-8">Open: 9.30 am - 2.30pm</p>
        <a href="mailto:booking@grilli.com" className="sidebar-link text-neutral-400/80 font-bold tracking-wide text-[17px] mt-2">booking@grilli.com</a>
        <div className="separator mx-auto my-10"></div>
        <p className="contact-label tracking-wider text-[17px] mb-5">Booking Request</p>
        <a href="tel:+88123123456" className="text-[19px] font-bold contact-number hover-underline">+88-123-123456</a>
      </div>

    </nav>
  )
}
