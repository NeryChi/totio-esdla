import { createContext } from "react";
import sonido0 from '../../public/sounds/0.mp3'
import sonido1 from '../../public/sounds/1.mp3'
import sonido2 from '../../public/sounds/2.mp3'
import opening from '../../public/sounds/opening.mp3'
import comunidad from '../../public/sounds/comunidad.mp3'
import isengard from '../../public/sounds/isengard.mp3'
import nazgoul from '../../public/sounds/nazgoul.mp3'
import cambio from '../../public/sounds/cambio.mp3'
import error from '../../public/sounds/error.mp3'
import eleccion from '../../public/sounds/eleccion.mp3'


export const AudioContexto = createContext()

const AudioProvider = ({ children }) => {

  const sonidos = [sonido0, sonido1, sonido2]
  const alertas = [cambio, error, eleccion]
  const canciones = [comunidad, isengard, nazgoul]

  return(
    <AudioContexto.Provider value={[sonidos, opening, canciones, alertas]} >
      { children }
    </AudioContexto.Provider>
  )
}

export default AudioProvider