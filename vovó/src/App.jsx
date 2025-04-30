import { useState } from 'react'
import './App.css'

function App() {
  const [inputAntigo, setInputAntigo] = useState('')
  const [inputNovo, setInputNovo] = useState('')
  const [resultado, setResultado] = useState()

  function calcularAumento(){
    let antigo = Number(inputAntigo)
    let novo = Number(inputNovo)
    let diferenca = novo - antigo

    let percentual = (diferenca/antigo)*100

    setResultado(percentual)
  }

  return (
    <>
    <div>
      <label htmlFor="">Valor Antigo</label>
      <input type="Number" 
      value={inputAntigo}
      onChange={(e) => setInputAntigo(e.target.value)}
      />
      </div>

      <div>
      <label htmlFor="">Valor Novo</label>
      <input type="Number" 
      value={inputNovo}
      onChange={(e) => setInputNovo(e.target.value)}
      />
      </div>
      <button onClick={calcularAumento}>Calcular aumento</button>

      <div>
       aumento: {resultado.toFixed(2)}%
      </div>

    </>
  )
}

export default App
