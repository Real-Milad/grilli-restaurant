import pattern from "../../assets/form-pattern.png";

export const BookOnline = () => {


  return (
    <div className="flex flex-col w-[93%] bg-smoky-black-2 mx-auto mt-20 py-18 lg:flex-row lg:w-[80%] lg:py-0">

      <div className="px-7 md:px-0 lg:flex-2 lg:py-20 lg:px-15">
        <h2 className="text-6xl font-Story mb-3 lg:text-8xl">Online Reservation</h2>
        <p>Booking request <span className="text-gold-crayola">+88-123-123456</span> or fill out the order form</p>
        <div className="w-full mt-10 md:px-10">

          <div className="w-full flex-center flex-col md:flex-row md:gap-8">
            <input type="text" placeholder="Your Name" className="w-full"/>
            <input type="text" placeholder="Phone Number" className="w-full"/>
          </div>

          <div className="flex-center flex-col md:flex-row md:gap-8">
            <select className="w-full"> 
              <option value="">1 Person</option>
              <option value="">2 Person</option>
              <option value="">3 Person</option>
              <option value="">4 Person</option>
              <option value="">5 Person</option>
              <option value="">6 Person</option>
              <option value="">7 Person</option>
            </select>

            <input type="date" className="w-full"/>

            <input type="time" className="w-full"/>
          </div>

          <textarea name="" id="" placeholder="Message" className="w-full px-6 py-5 h-70"></textarea>

          <a href="#" className="btn1 w-full mx-auto btn-primary mb-20">
            <span className="text text-1">Book a Table</span>
            <span className="text text-2">Book a Table</span>
          </a>
        </div>
      </div>

      <div className="relative overflow-hidden text-center bg-[url(/form-pattern.png)] w-full py-20 lg:flex-1">

        <p className="font-secondary text-5xl mb-20 lg:text-8xl">Contact Us</p>

        <p className="contact-label tracking-wider text-[17px] mb-5">Booking Request</p>
        <a href="tel:+88123123456" className="body-1 contact-number hover-underline mb-7">+88-123-123456</a>

        <div className="size-6 border border-gold-crayola mx-auto rotate-45 mb-7"></div>

        <p>Location</p>
        <p className="text-neutral-400 mb-10">Restaurant St, Delicious City, <br /> London 9578, UK</p>

        <p>Lunch Time</p>
        <p className="text-neutral-400 mb-10">Monday to Sunday <br /> 11.00 am - 2.30pm</p>

        <p>Dinner Time</p>
        <p className="text-neutral-400 mb-10">Monday to Sunday <br /> 05.00 pm - 10.00pm</p>
      </div>

    </div>
  )
}