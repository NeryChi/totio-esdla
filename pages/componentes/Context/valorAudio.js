import { createContext, useContext} from "react";
import sonido0 from '../../../public/sounds/0.mp3'
import sonido1 from '../../../public/sounds/1.mp3'
import sonido2 from '../../../public/sounds/2.mp3'
import sonido3 from '../../../public/sounds/3.mp3'
import opening from '../../../public/sounds/opening.mp3'

export const AudioContexto = createContext()
export const contextoAudio = () => useContext(AudioContexto)

const AudioProvider = ({ children }) => {

  const sonidos = [sonido0, sonido1, sonido2, sonido3]
  
  const playOpening = () => {
    ///new Audio(opening).play()
  }

  const pauseOpening = () => {
    //new Audio(opening).pause()
  }


  return(
    <AudioContexto.Provider value={[sonidos, opening, playOpening, pauseOpening]} >
      { children }
    </AudioContexto.Provider>
  )
}

export default AudioProvider