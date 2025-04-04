import { useState } from 'react'
import './App.css'
import Evento from './components/Evento'

function App() {
  const[inputUsername, setInputUsername] = useState('')
  const[inputSenha, setInputSenha] = useState('')
  const[erro,setErro] = useState(false)
  const[acerto, setAcerto] = useState(false)

  function efetuarLogin(){
    if(inputUsername == "Ygor" && inputSenha == "12345"){
      // alert("Seja bem vindo gostosão")
      setAcerto(true)
    }
    else{
      // alert("Vish, fez o L")
      setErro(true)
    }
  }
  
  return (
    <div className='container-app'>
      <h1>inputs controlados</h1>
      <label htmlFor="">Username</label>
      <input type="text" 
      value={inputUsername}
      onChange={() => setInputUsername(event.target.value)}
      />

      <label htmlFor="">Senha</label>
      <input type="password" 
      value={inputSenha}
      onChange={(event) => setInputSenha(event.target.value)}
      />
      
      {erro && 
      <span className='msg-erro'>Credencias Inválidas</span>
      }
      {acerto && 
      <span className='msg-acerto'>Credencias Válidas</span>
      }
      <button onClick={efetuarLogin}>Login</button>

      <Evento />

    </div>
  )
}

export default App
