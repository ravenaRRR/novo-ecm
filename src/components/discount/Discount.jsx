import React from "react"
import Dcard from "./Dcard"




const Discount = () => {
  return (
    <>
      <section className='Discount background NewArrivals'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
            <i className='fa-solid fa-border-all'></i>
              <h2>Grandes Descontos</h2>
            </div>
            <div className='heading-right row '>
            <a href="/galeria">Ver Mais</a>
              <i className='fa-solid fa-caret-right'></i>
            </div>
          </div>
          <Dcard />
        </div>
      </section>
    </>
  )
}


export default Discount
