import { createContext, useContext} from "react";
import sonido0 from '../../../public/sounds/0.mp3'
import sonido1 from '../../../public/sounds/1.mp3'
import sonido2 from '../../../public/sounds/2.mp3'
import sonido3 from '../../../public/sounds/3.mp3'
import opening from '../../../public/sounds/opening.mp3'
import comunidad from '../../../public/sounds/comunidad.mp3'
import isengard from '../../../public/sounds/isengard.mp3'
import nazgoul from '../../../public/sounds/nazgoul.mp3'


export const AudioContexto = createContext()
export const contextoAudio = () => useContext(AudioContexto)

const AudioProvider = ({ children }) => {

  const sonidos = [sonido0, sonido1, sonido2, sonido3]
  const canciones = [comunidad, isengard, nazgoul]

  return(
    <AudioContexto.Provider value={[sonidos, opening, canciones]} >
      { children }
    </AudioContexto.Provider>
  )
}

export default AudioProvider