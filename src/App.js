import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./common/header/Header"
import Pages from "./pages/Pages"
import Data from "./components/Data"
import Cart from "./common/Cart/Cart"
import Footer from "./common/footer/Footer"
import Sdata from "./components/shops/Sdata"
import ProductGalery from "./components/ProductGalery/ProductGalery"

function App() {
 

  //passo 1 :
  const { productItems } = Data
  const { shopItems } = Sdata

  //passo 2 :
  const [CartItem, setCartItem] = useState([])

  //passo 4 :
  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)
    // se produtoSair chai já sair no carrinho, então funcionará fun() => setCartItem
    // ani inside => setCartItem será executado => map() ani yo map() chai cada carrinho ma
    // gayara verificar garxa se item.id ra produto.id chai combina com bhayo bhane
    // produtoExit produto chai display garxa
    // ani aumenta o produto de saída QTY em 1
    // se o artigo e o produto não corresponderem, então acrescentará novos artigos

    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      // mas se o produto não sair no carrinho, isso significa que se o cartão estiver vazio
      // então um novo produto é adicionado no carrinho e a sua qty é initalize a 1
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  // passo: 6
  const decreaseQty = (product) => {
    
    const productExit = CartItem.find((item) => item.id === product.id)

    // se o produto é de saída e a sua quantidade é 1, então executaremos um divertido setCartItem
    // dentro do setCartItem vamos executar um filtro para verificar se o item.id está de acordo com o product.id
    // se o item.id não coincide com o product.id então os itens são exibidos no carrinho
    // senão
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      // se o produto for de saída e a quantidade desse produto não for igual a 1
      // então irá executar a função de chamada setCartItem
      // dentro do setCartItem vamos executar o método do mapa
      // este mapa() verificará se o item.id corresponde ao produto.id, então temos de descer a qtd. do produto por 1
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  return (
    <>
      <Router>
        <Header CartItem={CartItem} />
        <Switch>
          <Route path='/' exact>
            <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />
          </Route>
          <Route path='/cart' exact>
            <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
          </Route>
          <Route path='/galeria' component={ProductGalery}>
          </Route>
        </Switch>
        <Footer />
      </Router>
  
    </>
  )


}



export default App
