import seperator from "../../assets/separator.svg"

export const Subtitle = ({ title }) => {

  return (
    <div className="flex-center flex-col">
      <p className="text-[15px] font-bold tracking-[5px] uppercase mb-5 text-gold-crayola">{title}</p>
      <img src={seperator} className="w-50"/>
    </div>
  )
}
