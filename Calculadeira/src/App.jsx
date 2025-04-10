import { useState } from 'react'
import './App.css'



function App() {
  const [numero, setNumero] = useState()
  const [numero2, setNumero2] = useState()
  const [resultado, setResultado] = useState()

  function soma(){

    setResultado(Number(numero) + Number(numero2)) 
    
    }
    
    function subtracao(){
    
     setResultado(numero - numero2)
    
    }
    
    function divisao(){
      
     setResultado(numero / numero2)
    
    }
    
    function multiplicacao(){
    
     setResultado(numero * numero2)
      
    }

    function limpar(){

      setResultado("")
      

    }

  return (
    <>
    <div className='container'>

    <div className='parte-cima'>
    <h1>Calculadeira</h1>
    Faça a conta desejada
    </div>  

    <div className='parte-meio'>  

    
     <input type="Number" value = {numero} onChange={(event) => setNumero (event.target.value)}/>
     
     <div className='sinais'> 
     <button onClick={soma}>+</button>
     <button onClick={subtracao}>-</button>
     <button onClick={divisao}>%</button>
     <button onClick={multiplicacao}>x</button>
     <button onClick={limpar}>Limpar</button>
     </div>

   
     <input type="Number" value={numero2} onChange={(event) => setNumero2 (event.target.value)}/>
     

     </div>
    

     <div className='resultado'>
      {resultado}
     </div>

     </div>

    </>
  )
}

export default App
