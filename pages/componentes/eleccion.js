import Ejercitos from './ejercitos';
import { usarContexto } from './Context/valorJugadores';

const ejercitos = ['...', 'Rohan', 'Gondor', 'Mordor', 'Isengard']

const Eleccion = ({cambioInterfaz}) => {

  let [jugador1, setJugador1, jugador2, setJugador2] = usarContexto()
  
  const cambiarJugador = () => {
    setJugador1(document.getElementById('ejercitosUno').value)
    setJugador2(document.getElementById('ejercitosDos').value)
  }

  const cambiarInterfaz = () => {
    if(jugador1 != '...' && jugador2 != '...'){
      cambioInterfaz()
    } else{
      alert('Elige tus ejercitos')
    }
  }

  return(
    <div>
      <img className='h-screen w-screen object-cover absolute -z-10' src='../img/gollum.svg' />
    <div className="grid grid-cols-2 w-screen h-screen bg-transparent justify-items-center content-around">
      
      {/*Se llama al componente Tablero */}
      <h1 className='font-aniron grid col-span-2 flex justify-center text-white font-bold text-2xl text-center lg:text-5xl'>¡Elige a tus ejercitos precioso!</h1>
      <div className="h-1/4 w-11/12 grid col-span-2 grid-cols-3 gap-2 justify-items-center">
        <h1 className="text-white font-bold font-aniron text-2xl">Jugador 1</h1>
        <Ejercitos  ejercitos = {ejercitos} 
                    index="ejercitosUno" />
        <h1 className="text-white font-bold font-aniron text-2xl">Jugador 2</h1>
        <Ejercitos  ejercitos = {ejercitos} 
                    index="ejercitosDos" />
    </div>
      <button onMouseUp={() => cambiarInterfaz()} onMouseDown={() => cambiarJugador()} className='grid col-span-2 flex justify-center bg-white py-2 w-[25%] rounded-md text-2xl font-bold'>Jugar →</button>
    </div>
  </div>
  )
}

export default Eleccion