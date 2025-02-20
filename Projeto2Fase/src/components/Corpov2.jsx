import './Corpo.css'
function Corpo(){
    function alertarUsuario(){
        alert("kung fu panda")
    }
    return(
        <div className = "Container-corpo">
             <h1>Desbravando o React</h1>
            <p>Vamos começar a nossa aventura</p>
            <button onClick={alertarUsuario}>kung fu panda</button>
            <img className='imagem' src="./kung-fu-panda.jpg "alt="" />
            {222}

        </div>
    )
}
export default Corpo;