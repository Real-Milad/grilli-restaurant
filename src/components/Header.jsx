import logo from "../assets/logo.svg"
import { CgMenuRight } from "react-icons/cg"
import { MobileNavbar } from "./MobileNavbar";
import { useEffect, useRef, useState } from "react";

const navItems = ["Home", "Menu", "About Us", "Our Chefs", "Contact"];

export const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [scroll, setScroll] = useState(false)
  const headerRef = useRef(null)

  let lastScrollPos = 0

  const hideHeader = () => {
    const isScrollbottom = lastScrollPos < window.scrollY
    if (isScrollbottom) {
      headerRef.current.classList.add("hide")
    } else {
      headerRef.current.classList.remove("hide")
    }

    lastScrollPos = window.scrollY
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
      setScroll(true)
      hideHeader()
    } else {
      setScroll(false)
    }
  })



  useEffect(() => {
    if (toggleMenu) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [toggleMenu])

  return (
    <>
      <header ref={headerRef} className={`header flex justify-between items-center  px-5 md:py-20 lg:py-30 lg:px-15 ${scroll && "active"}`}>

        <div className="flex flex-1"> 
          <a href=""> <img src={logo} alt="Grili" width={170} height={60}/> </a>
        </div>

        <nav className="hidden flex-2 justify-center lg:flex">
          <ul className="flex-center gap-15">
            {navItems.map((item) => <li key={item}>
              <a href={item} className={`hover:text-gold-crayola uppercase tracking-widest md:text-[13px] xl:text-[15px] transition hover-underline pb-2 ${item === "Home" && "text-gold-crayola"}`}>{item}</a>
            </li>)}
          </ul>
        </nav>

        <div className="hidden lg:flex flex-1 justify-end">
          <a href="#" className=" hidden lg:flex py-3 px-15 bg-gold-crayola">
            <span className="hidden">Find A Table</span>
            <span className="text-black">Find A Table</span>
          </a>
        </div>

        <MobileNavbar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />

        <div className="flex justify-end flex-1 lg:hidden">
          <CgMenuRight onClick={() => setToggleMenu(true)} className="text-6xl cursor-pointer hover:text-gold-crayola transition"/>
        </div>

      </header>

      <div className={`fixed inset-0 bg-black-alpha-80 transition z-1 opacity-0 pointer-events-none ${toggleMenu && "opacity-100 pointer-events-auto"}`}></div>
    </>
  )
}
 