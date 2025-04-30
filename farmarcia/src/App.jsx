import { useState } from 'react'
import './App.css'

function App() {
  

  return (
    <>

      <header className='header'>

      <img src="/img/farmarcia.webp" alt="" className='logo'/>

      <div className='links'>
      <a href="#Lojas">Loja</a>
      <a href="#Sobre">Senhas</a>
      <a href="#Contato">Contato</a>
      </div>

      </header>

      <div className='container'> 


      <div className='esquerda'>

        <img src="/img/farmarcia-logo-pq.webp" alt="" className='foto-esquerda'/>
      
       
        <div className='texto1'>
          <p>É com grande alegria que anunciamos uma nova fase em nossa história: a nossa farmácia mudou! Agora, com uma nova identidade visual, um novo nome e sob uma nova direção, iniciamos um novo capítulo com o mesmo compromisso de sempre: cuidar da sua saúde com atenção, carinho e qualidade.</p>
          
          <div className='texto2'>
           <p>Esperamos por você!
Venha fazer parte desse novo começo com a gente.
Sua saúde é a nossa prioridade — ontem, hoje e sempre.</p>
          </div>
        </div>

      </div>



      <div className='direita'>
      <img src="/img/ChatGPT Image 29 de abr. de 2025, 21_59_53.png" alt="" className='foto-direita'/>
      </div>

      </div>

      <div className='baixo'>
      
      </div>

      
    </>
  )
}

export default App
