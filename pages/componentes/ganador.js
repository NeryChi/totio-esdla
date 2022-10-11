import Jugador from "./jugador"

const Ganador = ({ganador}) => {

  const recargar = () => {
    window.location.reload()
  }

  let componenteGana

    if(ganador != ''){
      componenteGana=   <div className="grid grid-cols-1 justify-items-center content-around h-[60vh] sm:h-screen w-full sm:w-1/2 bg-gray-900 opacity-95 absolute z-20">
                          <span className="text-5xl text-white font-bold ">{`¡${ganador} Gana!`}</span>
                          <div className="flex justify-center w-3/4">
                              <Jugador jugador={ganador} />
                          </div>
                          <div className="w-full  flex justify-center">
                            <img src='../img/reload.png' className="w-[10%] hover:cursor-pointer" onClick={recargar} />
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