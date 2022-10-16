import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

/*Se importan los componentes y Hooks necesarios*/
import { useState, useContext } from 'react';
import Tablero from "../components/tablero";
import Eleccion from '../components/eleccion';
import JugadorProvider from '../context/valorJugadores'
import AudioProvider from '../context/valorAudio';

const Totito = () => {

  const[interfaz, setInterfaz] = useState(
    <div className='bg-zinc-900 w-screen h-screen flex justify-center items-center'>
      <img alt='niebla-home' className='select-none w-screen h-screen object-cover opacity-[10%]' src='../img/niebla.gif'/>
      <img alt='grabado-home' onClick={() => eleccion()} className='select-none cursor-pointer h-[30vh] hover:h-[35vh] duration-300 transform absolute animate-pulse z-10' src='../img/grabado.png' />
    </div>
  )

  const eleccion = () => {
    setInterfaz(<Eleccion cambioInterfaz={() => cambioInterfaz()} />)
  }

  const cambioInterfaz = () => {
    let fondos = ['lotr0', 'lotr1', 'lotr2', 'lotr3', 'lotr4', 'lotr5', 'lotr6', 'lotr7', 'lotr8', 'lotr9', 'lotr10']
    let rand = Math.floor(Math.random()*fondos.length)
    setInterfaz(<Tablero fondo = { fondos[rand] } />)
  }

  return (
    <JugadorProvider>
      <AudioProvider>
        {interfaz}
      </AudioProvider>
    </JugadorProvider>
  )
}

export default Totito /*Se exporta el componente Totito */