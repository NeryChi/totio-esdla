import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

/*Se importan los componentes y Hooks necesarios*/
import { useState } from 'react';
import Tablero from "./componentes/tablero";
import Eleccion from './componentes/eleccion';

let jugador1
let jugador2

const Totito = () => {

  const[interfaz, setInterfaz] = useState(<Eleccion cambioJugador={() => cambioJugador()} 
                                                    cambioInterfaz={() => cambioInterfaz()} />)

  const cambioJugador = () => {
    jugador1 = document.getElementById('ejercitosUno').value
    jugador2 = document.getElementById('ejercitosDos').value
  }

  const cambioInterfaz = () => {

    if(jugador1 != '' && jugador2 != ''){
      setInterfaz(<Tablero jugador1={jugador1} jugador2={jugador2} />)
    } else{
      alert('Elige a tus ejercitos')
    }
    
  }

  return (
    <>
      {interfaz}
    </>
  )
}

export default Totito /*Se exporta el componente Totito */