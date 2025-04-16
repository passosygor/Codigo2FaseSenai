import { useState } from 'react'
import './App.css'

function App() {
  const[alcool, setAlcool] = useState(0)
  const[inputalcool, setInputalcool] = useState("")
  const[gasolina, setGasolina] = useState(0)
  const[inputgasolina, setInputgasolina] = useState("")
  const[diesel, setDiesel] = useState(0)
  const[inputdiesel, setInputdiesel] = useState("")
  

  function abastecerDiesel(){
    setAlcool(alcool + Number(inputalcool))
    setGasolina(gasolina + Number(inputgasolina))
    setDiesel(diesel + Number(inputdiesel))
   }


  return (
    <>
      <div className='container'>

        <div className='parte-cima'>
          <h1>Posto de Gasolina</h1>
          <p>Escolha seu combustivel</p>
        </div>

        <div className='inputs'>
          <input type="Number" placeholder='Álcool' value={inputalcool} onChange={(e) => setInputalcool(e.target.value)}/> 
          Litros de Álcoll: {alcool}
          <input type="Number" placeholder='Gasolina' value={inputgasolina} onChange={(e) => setInputgasolina(e.target.value)}/> 
          Litros de Gasolina: {gasolina}
          <input type="Number" placeholder='Diesel' value={inputdiesel} onChange={(e) => setInputdiesel(e.target.value)}/> 
          Litros de Diesel: {diesel}
          <button onClick={abastecerDiesel}>Abastecer</button>
        </div>

      </div>
    </>
  )
}

export default App
