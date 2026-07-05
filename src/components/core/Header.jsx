import logo from "../../assets/logo.svg";
import { CgMenuRight } from "react-icons/cg"
import { MobileNavbar } from "../sub/MobileNavbar";
import { useEffect, useRef, useState } from "react";
import { Button } from "../shared/Button";

const navItems = ["Home", "Menu", "About", "Chefs", "Contact"];

export const Header = () => {
  const headRef = useRef(null)
  const [scroll, setScroll] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  
  // Calculate
  let lastScrollPos = 0;
  const hideHeader = () => {
    const isScrollbottom = lastScrollPos < window.scrollY;
    isScrollbottom 
    ? headRef.current.style.transform = "translateY(-100%)"
    : headRef.current.style.transform = "translateY(0)"
    lastScrollPos = window.scrollY;
  };
  
  // Scroll Hide Navbar
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 50) {
        setScroll(true) 
        hideHeader()
      } else {
        setScroll(false)
      }
    });
  }, [scroll])
  
  // Remove or Add OverFlow
  useEffect(() => {
    document.body.classList.toggle("menu-open", toggleMenu);
  }, [toggleMenu]);



  return (
    <>
      <header 
        ref={headRef} 
        className={`fixed top-0 left-0 w-full z-10 transition-all duration-600 
        flex justify-between items-center px-5 md:px-12 lg:px-20 
        ${scroll ? "py-8 md:py-10 lg:py-8 bg-eerie-black-4" : "py-15 md:py-20 lg:py-30 bg-transparent"}`}
      >

        {/* Grilli Logo */}
        <div className="flex flex-1"> 
          <a href="#"> 
            <img src={logo} alt="Grilli logo" width={170} height={60}/> 
          </a>
        </div>

        {/* Navbar Items large Screen */}
        <nav className="hidden flex-2 justify-center lg:flex">
          <ul className="flex-center gap-15">
            {navItems.map(item => 
              <li key={item}>
                <a href={`#${item}`} className={`
                  uppercase tracking-widest md:text-[13px] xl:text-[15px] transition hover-underline pb-4 hover:text-gold-crayola 
                  ${item === "Home" && "text-gold-crayola"}`}>
                  {item}
                </a>
              </li>
            )}
          </ul>
        </nav>

        {/* Large Screen Button */}
        <div className="flex-1 justify-end hidden lg:flex">
          <Button title="Find a Table" hidden={false} margin={false} />
        </div>

        {/* Hamberger Menu Button */}
        <div className="flex justify-end flex-1 lg:hidden">
          <CgMenuRight onClick={ () => setToggleMenu(true) } 
            className="text-6xl cursor-pointer duration-300 hover:text-gold-crayola"
          />
        </div>

      </header>

      {/* Mobile Menu Component */}
      <MobileNavbar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />

      {/* Overlay */}
      <div onClick={() => setToggleMenu(false)} className={`
        fixed inset-0 transition duration-500 opacity-0 z-3 bg-black-alpha-80 invisible
        ${toggleMenu && "opacity-100 visible"}
      `}></div>

    </>
  )
}
 