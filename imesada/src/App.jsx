import { useState } from 'react'

import './App.css'

function App() {
  const[valorInput, setValorInput] = useState()
  const[valorTotal, setValorTotal] = useState(0)

  function credito(){
    setValorTotal(valorTotal + Number(valorInput))
  }

  function debito(){
    setValorTotal(valorTotal - Number(valorInput))
  }

  return (
    <>
      <div className='body'>

      <div className='div-central'>

       <div className='div-cima'>
        <h1>Imesada</h1>
        <h4>Controlinho Financeiro</h4>
       </div>

        <div className='div-input'>
        Saldo R$:{valorTotal.toFixed(2)}
        <input type="Number" className='input-imesada' 
        value={valorInput} 
        onChange={(e) => setValorInput(e.target.value)}/>
        </div>

        <div className='botoes'>
          <button onClick={credito} className='botao-credito'>Crédito</button>
          <button onClick={debito} className='botao-debito'>Débito</button>
        </div>

      </div>

      </div>
    </>
  )
}

export default App
