import { useState } from 'react'
import './App.css'
import Conversao from './components/Conversao'
import Conversao2 from './components/Conversao2'
import Aviso from './components/Aviso'
import AnoBissexto from './components/AnoBissexto'

function App() {
  const[usuario, setUsuario] = useState("Juca")
  const [senha, setSenha] = useState()
  // função para mudar o nome
  const[nome, setNome] = useState("Lebron")
 
  function lerNome(){
    let respostanome = prompt("Digite o nome (vou ignorar): ")
    setNome(respostanome)
  }
  function lerUsuario(){
    let resposta = prompt("Dgite o novo usuário:")
    setUsuario(resposta)

    let pw = prompt("Digite a nova senha: ")
    let pw2 = prompt("Confirme a senha: ")
    if(pw == pw2){
      setSenha(pw)
    }
    else{
      alert("As senhas são diferentes")
    }
  }

  return (
    <>
     <AnoBissexto />
      <Aviso />
      <Conversao />
      <Conversao2 />
    

     <h1>ESTADOS</h1>
     Nome: {nome}
     <div>
     Usuário: {usuario} <br />
     senha: {senha}
     </div>
     <button onClick={lerNome}>Trocar nome</button>
     <button onClick={lerUsuario}>Trocar usuário</button>
    </>
  )
}

export default App
