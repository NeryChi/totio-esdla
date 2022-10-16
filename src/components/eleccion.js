import Ejercitos from './ejercitos';
import { useContext } from 'react';
import { JugadorContext } from '../context/valorJugadores';
import { AudioContexto } from '../context/valorAudio';

const ejercitos = ['...', 'Rohan', 'Gondor', 'Mordor', 'Isengard']
let visible = 'animate-spin-slow opacity-[100%] select-none drop-shadow-md text-white text-2xl lg:text-3xl italic col-span-3 sm:col-span-1 sm:w-[80%] sm:justify-items-start'
const botonNormal = 'grid col-span-2 flex justify-center bg-white py-2 w-[15vh] sm:w-[30vh] h-[6.5vh] sm:h-[10vh] rounded-md text-[2.5vh] sm:text-[4vh] font-bold'
const botonError = 'grid col-span-2 flex justify-center bg-red-600 py-2 w-[15vh] sm:w-[30vh] h-[6.5vh] sm:h-[10vh] rounded-md text-[2.5vh] sm:text-[4vh] font-bold text-white'


const Eleccion = ({cambioInterfaz}) => {

  let [jugador1, setJugador1, jugador2, setJugador2] = useContext(JugadorContext)
  const [sonidos, opening, canciones, alertas] = useContext(AudioContexto)
  
  const cambiarJugador = () => {
    setJugador1(document.getElementById('ejercitosUno').value)
    setJugador2(document.getElementById('ejercitosDos').value)
    
  }

  const cambiarInterfaz = () => {
    if(jugador1 != '...' && jugador2 != '...'){
      if(jugador1 != jugador2){
        new Audio(alertas[2]).play()
        document.getElementById('opening').pause()
        cambioInterfaz()

      }else{
        new Audio(alertas[1]).play()
        document.getElementById('alerta').innerHTML = 'Elige ejercitos diferentes'
        document.getElementById('boton').className = botonError
      }
      
    } else{
      new Audio(alertas[1]).play()
      document.getElementById('alerta').innerHTML = 'Elige a tus ejercitos'
      document.getElementById('boton').className = botonError
    }
  }

  const limpiarAlerta = () => {
    new Audio(alertas[2]).play()
    document.getElementById('alerta').innerHTML = ''
    document.getElementById('boton').className = botonNormal
  }

  return(
    <div>
      <img alt='fondo-gollum' className='h-screen w-screen object-cover absolute -z-10' src='../img/gollum.svg' />
      <img alt='niebla' className='w-screen h-screen object-cover absolute -z-10 opacity-25' src='../img/niebla.gif'/>
      <div className="grid grid-cols-2 w-screen h-screen bg-transparent justify-items-center ">
        <h1 className='select-none mt-10 drop-shadow-md font-aniron grid col-span-2 flex justify-center text-white font-bold text-2xl text-center lg:text-5xl'>¡Elige a tus ejercitos precioso!</h1>
        <div className="mt-[30vh] sm:mt-[10vh] lg:mt-[30vh] h-1/4 w-[90%] grid col-span-2 justify-items-center sm:justify-items-start sm:grid-cols-5 gap-2 ">
          <h1 className="select-none text-white font-bold font-aniron text-full lg:text-2xl">Jugador 1</h1>
          <Ejercitos  ejercitos = {ejercitos} 
                      index="ejercitosUno"
                      limpiarAlerta = {() => limpiarAlerta()} />
                      
          <h1 className="select-none text-white font-bold font-aniron text-full lg:text-2xl">Jugador 2</h1>
          <Ejercitos  ejercitos = {ejercitos} 
                      index="ejercitosDos"
                      limpiarAlerta = {() => limpiarAlerta()} />
          
          
        </div>
        <h1 id='alerta' className={visible}></h1>
        <button id='boton' onMouseUp={() => cambiarInterfaz()} onMouseDown={() => cambiarJugador()} className={botonNormal}>Jugar →</button>
      </div>
      <audio id='opening' autoPlay loop src={opening}></audio>
    </div>
  )
}


export default Eleccion