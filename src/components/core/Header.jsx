import logo from "../../assets/logo.svg";
import { CgMenuRight } from "react-icons/cg"
import { useEffect, useRef, useState } from "react";
import { MobileNavbar } from "../sub/MobileNavbar";

const navItems = ["Home", "Menu", "About Us", "Our Chefs", "Contact"];

export const Header = () => {
  const [scroll, setScroll] = useState(false);
  const headRef = useRef(null)
  const [toggleMenu, setToggleMenu] = useState(false);

  let lastScrollPos = 0;

  const hideHeader = () => {
    const isScrollbottom = lastScrollPos < window.scrollY;

    isScrollbottom 
    ? headRef.current.style.transform = "translateY(-100%)"
    : headRef.current.style.transform = "translateY(0)"

    lastScrollPos = window.scrollY;
  };

  window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
      setScroll(true) 
      hideHeader()
    } else {
      setScroll(false)
    }
  });

  useEffect(() => {
    toggleMenu
    ? document.body.style.overflow = "hidden"
    : document.body.style.overflow = "auto";
    
    return () => document.body.style.overflow = "auto";
  }, [toggleMenu]);



  return (
    <>
      <header ref={headRef} className={`
        fixed top-0 left-0 w-full z-10 transition-all duration-600 flex justify-between items-center 
        px-5 md:px-12 lg:px-20  
        ${scroll ? "py-8 md:py-12 lg:py-12 bg-eerie-black-4" : "py-15 md:py-20 lg:py-30 bg-transparent"}
      `}>


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


        <div className="flex justify-end flex-1 lg:hidden">
          <CgMenuRight onClick={() => setToggleMenu(true)} className="text-6xl cursor-pointer hover:text-gold-crayola transition"/>
        </div>

      </header>

      <MobileNavbar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <div className={`overlay fixed inset-0 bg-black-alpha-80 transition z-2 opacity-0 pointer-events-none ${toggleMenu && "opacity-100 pointer-events-auto"}`}></div>
    </>
  )
}
 