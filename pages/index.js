import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

/*Se importan los componentes y Hooks necesarios*/
import { useState, useContext } from 'react';
import Tablero from "./componentes/tablero";
import Eleccion from './componentes/eleccion';
import JugadorProvider from './componentes/Context/valorJugadores'


const Totito = () => {

  const[interfaz, setInterfaz] = useState(<Eleccion cambioInterfaz={() => cambioInterfaz()} />)

  const cambioInterfaz = () => {
    let fondos = ['lotr1', 'lotr2', 'lotr3', 'lotr4', 'lotr5', 'lotr6']
    let rand = Math.floor(Math.random()*fondos.length)
    setInterfaz(<Tablero fondo = { fondos[rand] } />)
  }

  return (
    <JugadorProvider>
      {interfaz}
    </JugadorProvider>
  )
}

export default Totito /*Se exporta el componente Totito */