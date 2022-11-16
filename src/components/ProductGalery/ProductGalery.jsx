import "./PG.css"
import React from "react"

const ProductGalery = () => {

    const data = [
      {
        
        cateName: "Descontos",
      },
      {
       
        cateName: "Mais Vendidos",
      },
      {
      
        cateName: "Categoria",
      },
      {
        
        cateName: "Preço",
      },
      {
      
        cateName: "Marcas",
      },
      {
    
        cateName: <div className='rate'>
        <i className='fa fa-star'></i>
        <i className='fa fa-star'></i>
        <i className='fa fa-star'></i>
        <i className='fa fa-star'></i>
        <i className='fa fa-star'></i>
      </div>
      
      },
    ]
    return (
      <>

        <div className='categorypg'>
          <div className='chead d_flex'>
            <h1>Filtrar Por: </h1>
          
          </div>
          {data.map((value, index) => {
            return (
              <div className='box f_flex' key={index}>
         
                <span>{value.cateName}</span>
              </div>
            )
          })}
          <div className='box box2'>
            <button>Limpar Filtros </button>
          </div>
        </div>
    

    </>
      
    )
 
  }


  
  export default ProductGalery
  

  