
export const Button = ({ title, hidden, margin }) => {

  
  return (
    <a href="#" className={`btn ${margin ? "mx-auto" : ""} btn-primary ${hidden ? "slider-reveal": "" }`}>
      <span className="text text-1 block">{title}</span>
      <span className="text text-2 block">{title}</span>
    </a>
  )
}
