import { createContext, useContext, useState } from "react";

export const JugadorContext = createContext()
export const usarContexto = () => useContext(JugadorContext)

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