import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

/*Se importa el archivo Tablero.js que contiene el componente Tablero*/
import Tablero from "./tablero";
import Ejercitos from './ejercitos';

const ejercitos = ['', 'Rohan', 'Gondor', 'Mordor', 'Isengard']

let jugador1
let jugador2
let interfaz

const Totito = () => {

  interfaz = <div className="sm:grid sm:grid-cols-2 w-screen h-screen bg-gray-700 justify-items-center content-around">
  {/*Se llama al componente Tablero */}
    <h1 className='grid col-span-2 flex justify-center'>Elige a tus ejercitos</h1>
    <div className="h-1/4 w-4/5 grid col-span-2 grid-cols-2 gap-2  flex justify-center">
      <h1 className="ml-5 text-white font-bold text-2xl">Jugador 1</h1>
      <Ejercitos  ejercitos = {ejercitos} 
                  index="ejercitosUno" />
      <h1 className="ml-5 text-white font-bold text-2xl">Jugador 2</h1>
      <Ejercitos  ejercitos = {ejercitos} 
                  index="ejercitosDos" />
    </div>
    <button onMouseOver={() => cambioJugador()} onClick={<Tablero />} className='grid col-span-2 flex justify-center bg-white py-2 w-2/5 rounded-md text-2xl font-bold'>Jugar</button>
</div>

  const cambioJugador = () => {
    jugador1 = document.getElementById('ejercitosUno').value
    jugador2 = document.getElementById('ejercitosDos').value
    console.log(jugador1 + jugador2)
  }

  

  return (
    <>
      {/*La razon de agregar un div demas es para dividire el juego en dos secciones y que este se comporte de forma responsiva */}
      {interfaz}
    </>
  )
}

export default Totito /*Se exporta el componente Totito */