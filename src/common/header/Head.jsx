import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> +55 3456 0000</label>
            <i className='fa fa-envelope'></i>
            <label> exemplo@gmail.com</label>
          </div>
          <div className='right row RText'>
            <label>Atendimento</label>
            <label>Precisa de ajuda?</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
