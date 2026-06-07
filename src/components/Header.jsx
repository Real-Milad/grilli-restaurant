import { useState } from "react"
import logo from "../assets/logo.svg"

export const Header = () => {
  const [header, setHeader] = useState(true)

  return (
    <header className={`header ${header ? "py-5 bg-eerie-black-4 border-white-alpha-15" : "-translate-y-full transition delay-300"} fixed top-0 left-0 w-full bg-transparent py-10 z-4 border-b border-b-transparent transition duration-300`}>
      <div className="container px-5 flex justify-between items-center gap-2 ">

        {/* Header Logo */}
        <a href="#" className="logo"> 
          <img src={logo} alt="Grili" width={200} />
        </a>

        {/* Navbar Mid & Navbar Mobile Screen */}
        <nav className="navbar">
          {/* Close Menu Button */}
          <button className="close-btn">
            <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
          </button>

          {/* Logo Toggle Menu */}
          <a href="#" className="logo"> 
            <img src={logo} alt="Grili" width={160} height={50}/>
          </a>

          {/* Navbar Menu */}
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#home" className="navbar-link hover-underline after:content-[''] active">
                <div className="separator"></div>
                <span className="span">Home</span>
              </a>
            </li>

            <li className="navbar-item">
              <a href="#menu" className="navbar-link hover-underline active">
                <div className="separator"></div>
                <span className="span">Menus</span>
              </a>
            </li>

            <li className="navbar-item">
              <a href="#about" className="navbar-link hover-underline active">
                <div className="separator"></div>
                <span className="span">About Us</span>
              </a>
            </li>

            <li className="navbar-item">
              <a href="#chef" className="navbar-link hover-underline active">
                <div className="separator"></div>
                <span className="span">Our Chefs</span>
              </a>
            </li>

            <li className="navbar-item">
              <a href="#contact" className="navbar-link hover-underline active">
                <div className="separator"></div>
                <span className="span">Contact</span>
              </a>
            </li>
          </ul>

          {/* Navbar Menu Information */}
          <div className="tex-center">
            <p className="headline-1 navbar-title">Visit Us</p>
            <address className="body-4">Restaurant St, Delicious City <br /> London 9578, UK</address>
            <p className="body-4 navbar-text">Open: 9.30 am - 2.30pm</p>
            <a href="mailto:booking@grilli.com" className="sidebar-link">booking@grilli.com</a>
            <div className="separator"></div>
            <p className="contact-label">Booking Request</p>
            <a href="tel:+88123123456" className="body-1 contact-number hover-underline">+88-123-123456</a>
          </div>
        </nav>

        {/* Book Button */}
        <a href="#" className="btn btn-secondary">
          <span className="text text-1">Find A Table</span>
          <span className="text text-2">Find A Table</span>
        </a>

        {/* Toggle Menu Open */}
        <button className="nav-open-btn p-3 pr-0">
          <span className="line line-1 w-18 h-1 bg-white my-3 origin-left animate-[menuBtn_400ms_ease_alternate_infinite]"></span>
          <span className="line line-2 w-18 h-1 bg-white my-3 origin-left animate-[menuBtn_400ms_ease_alternate_infinite]"></span>
          <span className="line line-3 w-18 h-1 bg-white my-3 origin-left animate-[menuBtn_400ms_ease_alternate_infinite]"></span>
        </button>

        <div className="overlay"></div>

      </div>
    </header>
  )
}
