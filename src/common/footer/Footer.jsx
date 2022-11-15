import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>Ad Soluções em Tecnologia</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
           
            </div>
           
          

          <div className='box'>
            <h2>Links Úteis</h2>
            <ul>
              <li>Categorias</li>
              <li>Perfil</li>
              <li>Meu carrinho</li>
              <li>Produtos</li>
              <li>Política de Privacidade</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Formas de Pagamento</h2>
            <ul>
              <li>Pix </li>
              <li>Pag Seguro</li>
              <li>Paypal </li>
              <li>Cartão de Crédito e Débito</li>
              <li>Moip </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Atendimento</h2>
            <ul>
              <li>Lins...70...bairro...rua...</li>
              <li>Email: adsolucoes.help@gmail.com</li>
              <li>Telefone: 1111111111 </li>
            </ul>
          </div>
          <span>Copyright AD Soluões em Tecnologia. <br/>Todos os direitos reservados </span>
         </div>
      </footer>
    </>
  )
}

export default Footer
