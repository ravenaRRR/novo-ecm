import React from "react"
import Home from "../components/MainPage/Home"
import FlashDeals from "../components/flashDeals/FlashDeals"
import NewArrivals from "../components/newarrivals/NewArrivals"
import Discount from "../components/parte_Categorias/Discount"
import Shop from "../components/shops/Shop"
import Wrapper from "../components/wrapper/Wrapper"

const Pages = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <>
      <Home CartItem={CartItem} /> 
      <br></br>
      <br></br>
      <br></br>
       <Discount />
       <br></br>
       <br></br>
       <br></br>
      <FlashDeals productItems={productItems} addToCart={addToCart} />
     
      <NewArrivals />
    
      <Shop shopItems={shopItems} addToCart={addToCart} />
     
      <Wrapper />
    </>
  )
}

export default Pages
