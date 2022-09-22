import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Tablero from "./tablero";

const Totito = () => {
  return (
    <div classNamee="container mx-auto ">
      <div className="sm:grid grid-cols-2 w-screen h-screen bg-blue-400">
        <Tablero className="m-5 p-2"/>
      </div>
    </div>
  )
}

export default Totito