import { useState } from 'react'
import './App.css'

function App() {
  const[numero, setNumero] = useState()
  const[resultado, setResultado] = useState()

  function sortear(){
    let mensagem = ""
    for(let i = 0; i < numero; i++){
      mensagem += 'Ho'
    }
    mensagem = mensagem + "!"
    setResultado(mensagem)
  }
  
  function limpar(){
    setResultado("")
    setNumero("")
  }

  return (
    <>
    <div className='container'>

     <div className='parte-cima'>
      <h1>Sorteio do Noel</h1>
      <p>Papai noel irá sortear um papel e falará uma pá de "Ho!"</p>
     </div>

     <div className='parte-meio'>
      <input type="Number" 
      value = {numero} 
      onChange={(e) => setNumero(e.target.value)}
          />

      <button onClick={sortear}>Sortear</button>
      <button onClick={limpar}>🗑️</button>
     </div>

     <div className='parte-baixo'>
      {resultado}
     </div>

     </div>

    </>
  )
}

export default App
