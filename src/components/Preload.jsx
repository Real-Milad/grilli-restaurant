import { useState } from "react"

export const Preload = () => {
  const [load, setLoad] = useState(false)

  window.addEventListener("load", () => {
    setTimeout(() => {
      setLoad(true)
      document.body.classList.add('laoded')
    }, 3000)
  })

  return (
    <div className={`preload flex-center ${ load && 'loaded' }`}>
      <div className="circle"></div>
      <p className="text">Grilli</p>
    </div>
  )
}
