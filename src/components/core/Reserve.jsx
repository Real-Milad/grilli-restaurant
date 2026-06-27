import seperator from "../../assets/separator.svg"
import avatar from "../../assets/testi-avatar.jpg";
import background from "../../assets/testimonial-bg.jpg";
import { BookOnline } from "./BookOnline";


export const Reserve = () => {

  return (
    <section className="relative z-0">
      <div className="text-center">
        <img src={background} alt="background" className="h-300 object-cover lg:w-full"/>

        <div className="absolute top-30 text-center z-0 lg:w-full">
          <p className="text-9xl">”</p>

          <p className="text-[24px] font-secondary px-8 mb-15 lg:text-8xl lg:px-60">
            I wanted to thank you for inviting me down for that amazing
            dinner the other night. The food was extraordinary.
          </p>

          <img src={seperator} alt="seperator" className="w-60 mx-auto mb-15" />

          <img src={avatar} alt="avatar" className="mx-auto rounded-full mb-5" />

          <p className="text-gold-crayola text-[19px] font-bold font-Story tracking-[4px]">Sam Jhonson</p>

          <BookOnline />
        </div>

      </div>

    </section>
  )
}