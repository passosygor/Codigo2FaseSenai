import {useState} from 'react'
import './Conversao2.css'

function Conversao2() {
    const [km, setKm] = useState(0)
    const [milha, setMilha] = useState(0)
    const [legua, setLegua] = useState(0)
    function converterKmParaMilha(){
        let entrada = Number(prompt("KM: "))
        setMilha((entrada * 0.621371).toFixed(5))
        setKm(entrada)
        setLegua((entrada * 0.207124).toFixed(5))
    }

  return (
    <div className="container-conversao2">
        <h2>KM ➡️ Milha ➡️ Léguas</h2>
        <button onClick={converterKmParaMilha}>Converter</button>
        <p>
            Valor original: KM: {km}
        </p>
        <p>
            Valor convertido: MI: {milha}
        </p>
        <p>
            Valor convertido: Légs: {legua}
        </p>
    </div>
  )
}

export default Conversao2
