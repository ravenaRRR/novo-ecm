import React from "react"
import "./style.css"

const Wrapper = () => {
  const data = [
    {
      cover: <i class='fa-solid fa-truck-fast'></i>,
      title: "entrega mundial",
      decs: "Oferecemos preços competitivos nos nossos mais de 100 milhões de produtos qualquer gama.",
    },
    {
      cover: <i class='fa-solid fa-id-card'></i>,
      title: "pagamento seguro",
      decs: "Oferecemos preços competitivos nos nossos mais de 100 milhões de produtos qualquer gama.",
    },
    {
      cover: <i class='fa-solid fa-shield'></i>,
      title: "compra com confidência ",
      decs: "Oferecemos preços competitivos nos nossos mais de 100 milhões de produtos qualquer gama.",
    },
    {
      cover: <i class='fa-solid fa-headset'></i>,
      title: " Suporte 24/7",
      decs: "Oferecemos preços competitivos nos nossos mais de 100 milhões de produtos qualquer gama.",
    },
  ]
  return (
    <>
      <section className='wrapper background'>
        <div className='container grid2'>
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
