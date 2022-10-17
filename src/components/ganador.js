import { useContext } from "react"
import { JugadorContext } from "../context/valorJugadores"
import Jugador from "./jugador"

const Ganador = ({ganador}) => {

  const [jugador1, setJugador1, jugador2, setJugador2] = useContext(JugadorContext)

  const recargar = () => {
    window.location.reload()
  }

  let componenteGana

    if(ganador != '' && ganador != 'empate'){
      componenteGana=   <div className="grid grid-cols-1 justify-items-center content-around h-[60vh] sm:h-screen w-full sm:w-1/2 bg-gray-900 opacity-95 absolute z-20">
                          <span className="text-3xl lg:text-5xl text-center text-white font-bold ">{`¡${ganador} Gana!`}</span>
                          <div className="flex justify-center w-3/4">
                              <Jugador jugador={ganador} />
                          </div>
                          <div className="w-full  flex justify-center">
                            <img alt="figura-ganador" src='../img/reload.webp' className="w-[10%] hover:cursor-pointer" onClick={recargar} />
                          </div>
                        </div>
    }

    if(ganador != '' && ganador == 'empate'){
      componenteGana=   <div className="grid grid-cols-1 justify-items-center content-around h-[60vh] sm:h-screen w-full sm:w-1/2 bg-gray-900 opacity-95 absolute z-20">
                          <span className="text-3xl lg:text-5xl text-center text-white font-bold ">¡Esto es un empate!</span>
                          <div className="flex justify-around w-3/4">
                            <Jugador jugador={jugador1} />
                            <Jugador jugador={jugador2} />
                          </div>
                          <div className="w-full  flex justify-center">
                            <img alt="figura-ganador" src='../img/reload.webp' className="w-[10%] hover:cursor-pointer" onClick={recargar} />
                          </div>
                        </div>
    }

  return(
    <>
      {componenteGana}
    </>
  )
}

export default Ganador