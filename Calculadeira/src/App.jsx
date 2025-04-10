import { useState } from 'react'
import './App.css'



function App() {
  const [numero, setNumero] = useState()
  const [numero2, setNumero2] = useState()
  const [resultado, setResultado] = useState()

  function soma(){

    numero + numero2
    
    }
    
    function subtracao(){
    
     setResultado(numero - numero2)
    
    }
    
    function divisao(){
      
      numero % numero2
    
    }
    
    function multiplicacao(){
    
      numero * numero2
      
    }

  return (
    <>
    <div className='parte-cima'>
    <h1>Calculadeira</h1>
    </div>    

    <div className='primeiro-input'>
     <input type="Number" value = {numero} onChange={}/>
     </div>

     <div className='sinais'> 
     <button onClick={soma}>+</button>
     <button onClick={subtracao}>-</button>
     <button onClick={divisao}>%</button>
     <button onClick={multiplicacao}>x</button>
     </div>

      <div className='segundo-input'>
     <input type="Number" value={numero2}/>
     </div>
     

     <div className='resultado'>
      {resultado}
     </div>

    </>
  )
}

export default App
