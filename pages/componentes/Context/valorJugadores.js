import { createContext, useState } from "react";

export const JugadorContext = createContext()

const JugadorProvider = ({ children }) => {

  const [jugador1, setJugador1] = useState('...')
  const [jugador2, setJugador2] = useState('...')

  return(
    <JugadorContext.Provider value={[jugador1, setJugador1, jugador2, setJugador2]} >
      { children }
    </JugadorContext.Provider>
  )
}

export default JugadorProvider