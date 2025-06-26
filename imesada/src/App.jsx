import { useState } from 'react'
import './App.css'

function App() {
  const [valorInput, setValorInput] = useState()
  const [valorNome, setValorNome] = useState('')   // MUDANÇA 2: Inicializado com string vazia
  const [valorTotal, setValorTotal] = useState(0)
  const [extrato, setExtrato] = useState([])
  const [mostrarExtrato, setMostrarExtrato] = useState(false)

  function credito() {
    setValorTotal(valorTotal + Number(valorInput))
    setExtrato([...extrato, {  // MUDANÇA 3: Adiciona ao array existente
      nome: valorNome,
      valor: Number(valorInput),
      tipo: 'Crédito'
    }])
  }

  function debito() {
    setValorTotal(valorTotal - Number(valorInput))
    setExtrato([...extrato, {  // MUDANÇA 4: Adiciona ao array existente
      nome: valorNome,
      valor: Number(valorInput),
      tipo: 'Débito'
    }])
  }

  function alterarExtrato() {
    setMostrarExtrato(!mostrarExtrato)
  }

  return (
    <div className='body'>

      <div className='div-central'>

        <div className='div-cima'>
          <h1>iMesada</h1>
          <h2>Controlinho Financeiro</h2>
        </div>
        

        <div className='div-input'>
          <h3>💰Saldo R$:{valorTotal.toFixed(2)}</h3>

          <input 
            type="text" 
            className='input-nome-mesada' 
            value={valorNome} 
            onChange={(e) => setValorNome(e.target.value)}
          />

          <input 
            type="number" 
            className='input-imesada'
            value={valorInput} 
            onChange={(e) => setValorInput(e.target.value)}
          />
        </div>


        <div className='botoes'>
          <button onClick={credito} className='botao-credito'>Crédito</button>
          <button onClick={debito} className='botao-debito'>Débito</button>
        </div>

      </div>
      
      <button onClick={alterarExtrato} className="botao-extrato">Extrato</button>

      {/* MUDANÇA 5: Extrato corrigido */}
      {mostrarExtrato && (
        <div className="extrato">
          {extrato.map((item, index) => (
            <div key={index} className={`transacao ${item.tipo.toLowerCase()}`}>
              <p>{item.nome}: R$ {item.valor.toFixed(2)} ({item.tipo})</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default App