import Jugador from "./jugador"

const Ganador = ({ganador}) => {

  let componenteGana

    if(ganador != ''){
      componenteGana=   <div className="grid grid-cols-1 justify-items-center content-around h-full sm:h-screen w-full sm:w-1/2 bg-gray-900 opacity-95 absolute z-20">
                          <span className="text-5xl text-white font-bold ">{`¡${ganador} Gana!`}</span>
                          <div className="flex justify-center w-3/4">
                              <Jugador jugador={ganador} />
                          </div>
                          <div className="w-full h-full flex justify-center">
                            <button className="bg-white py-2 w-2/5 rounded-md text-2xl font-bold ">Reiniciar</button> 
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