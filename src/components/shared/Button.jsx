
export const Button = ({ title }) => {

  
  return (
    <a href="#" className="relative text-gold-crayola text-[14px] font-bold uppercase tracking-widest max-w-max border-2 border-gold-crayola px-20 py-5 overflow-hidden z-1 mx-auto btn-primary slider-reveal
    before:content-[''] before:absolute before:bottom-full before:left-1/2 before:-translate-x-1/2 before:w-[200%] before:h-[200%] before:rounded-full before:bg-gold-crayola before:transition before:duration-500 before:z-[-1] before:hover:bottom-[-50%]
    ">

      <span className="text text-1">{title}</span>
      <span className="text text-2 hidden">{title}</span>
    </a>
  )
}
