import { useState } from "react";

export const Preload = () => {
  const [load, setLoad] = useState(false);

  
  // Closed Preload Screen After Window Loaded \\
  window.addEventListener("load", () => {
    setTimeout(() => {
      setLoad(true);
      document.body.classList.add('laoded');
    }, 3000);
  });


  return (
    <div className={`
      fixed inset-0 flex-center flex-col bg-gold-crayola duration-400
      z-10 ${load && "delay-500 duration-900 translate-y-full"}`}>

      {/* Loading Circle */}
      <div className={`
        size-45 mb-11 border-3 rounded-circle duration-250 animate-spin
        border-[#ecdbbd] border-t-[#b59763] ${load && "opacity-0"}
      `}></div>

      {/* Loading Text */}
      <p className={`
        text-[90px] font-bold font-gwen leading-60 tracking-[16px] ps-4
        text-transparent bg-size-[500%] bg-clip-text bg-loading-text 
        animate-[loadingText_2s_linear_infinite] duration-250 
        ${ load && "opacity-0" }
      `}>Grilli</p>

    </div>
  );
};