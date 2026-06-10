const navItems = ["Home", "Menu", "About Us", "Our Chefs", "Contact"];

export const Navbar = () => {


  return (
    <ul className="navbar-list hidden justify-between items-center gap-15 lg:flex">
      {navItems.map(item => 
        <li className="">
          <a href={`#${item}`} className={`navbar-link group relative text-[19px] uppercase py-6 max-w hover-underline 
            ${item === "Home" && "active "}`}>

            <span className={`text-[14px] tracking-widest group-hover:text-gold-crayola transition
            ${item === "Home" && "text-gold-crayola"}`}>
            {item}</span>
          </a>
        </li>
      )}
    </ul>
  )
}
