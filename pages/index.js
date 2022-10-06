import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

/*Se importa el archivo Tablero.js que contiene el componente Tablero*/
import Tablero from "./tablero";

const Totito = () => {

  console.log(Tablero())

  return (
    <>
      {/*La razon de agregar un div demas es para dividire el juego en dos secciones y que este se comporte de forma responsiva */}
      <div className="sm:grid sm:grid-cols-2 w-screen h-screen bg-indigo-700">
        {/*Se llama al componente Tablero */}
        <Tablero />
      </div>
    </>
  )
}

export default Totito /*Se exporta el componente Totito */