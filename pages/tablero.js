import { useState, useRef } from "react"
import Cuadro from "./cuadro"
import Jugador from "./jugador"
import Ejercitos from "./ejercitos"

const colorOriginal = "select-none shadow-lg shadow-gray-500  active:shadow-gray-900 active:shadow-inner active:bg-indigo-700 font-bold px-4 py-2 text-2xl sm:text-3xl xl:text-5xl text-white flex justify-center items-center transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
const colorError = "select-none shadow-lg shadow-gray-500  active:shadow-gray-900 active:shadow-inner active:bg-red-600 font-bold px-4 py-2 text-2xl sm:text-3xl xl:text-5xl text-white flex justify-center items-center transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-500 "

let jugador1 = "Mordor"
let jugador2 = "Gondor"

const Tablero = () => {
  const [cuadros, setCuadros] = useState(Array(9).fill([]))
  const [turno, setTurno] = useState(<Jugador jugador = {jugador1} />)

  //Utilizo el Hook useRef() para tener un control del estilo de mis componenetes directamente desde el Dom 
  //sin afectar a mis demas componentes. El parametro que se le pasa es en forma de arreglo porque necesito
  //usarlo en compoenentes generados a partir de un array
  let cuadroRef = useRef([])
  //Preparo el current con un array
  cuadroRef.current = []
  
  const pintaFigura = (indexItem) => {
    const misCuadritos = cuadros.slice()
    misCuadritos.splice(indexItem, 1, turno)

    //Utilizo este bucle para limpiar los colores de los botones con el estilo #colorError
    for(let index = 0; index < cuadros.length ; index++){
      //Le doy a todos los botones su aspecto original a traves de u Hook #useRef()
      cuadroRef.current[index].className = colorOriginal
    }

    if(cuadros[indexItem] != ''){

      cuadroRef.current[indexItem].className = colorError
      
    } else{
      setCuadros(misCuadritos)

      if(turno.props?.jugador === jugador2){
        setTurno(<Jugador jugador = {jugador1} />)
        
      } else{
        setTurno(<Jugador jugador = {jugador2} />)

      }
    }
  }

  const calcularGanador = (myTablero) => {
    const jugadasGanadoras = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for(let indiceJugada = 0; indiceJugada < jugadasGanadoras.length; indiceJugada++){
      const [a, b, c] = jugadasGanadoras[indiceJugada];
      
      if(myTablero[a].props?.jugador && myTablero[a].props?.jugador === myTablero[b].props?.jugador && myTablero[a].props?.jugador === myTablero[c].props?.jugador){
        return myTablero[a].props?.jugador;
      }
    }
    return ""
  }

  //Con esta funcion guardo mis referencias en un array cada vez que se crea un componente
  const aggRefs = (el) => {
    //identifico si el elemento existe y si la posicion del array ya tiene uno, si no lo tiene se ejecuta la condicional
    if(el && !cuadroRef.current.includes(el)){
      //ingreso el elemento en array del current
      cuadroRef.current.push(el)
    }
  }

  return (
    <>
      <div className="p-2 xl:p-5 grid grid-cols-3 gap-2 xl:gap-5 bg-blue-200 h-72 sm:h-screen">{/*Tablero responsivo */}
      {
        cuadros.map((item, indexItem) => {
          return <Cuadro key={indexItem} 
                         valor={item} 
                         color={colorOriginal}
                         cuadroRef = {aggRefs}
                         id={indexItem}
                         alHacerClick={() => pintaFigura(indexItem, item)} />
        })
      }
      </div>
      <div className="w-full flex">
        <div className="w-full z-10">
          <h1 className="w-full text-center mt-5 text-3xl md:text-4xl font-bold text-white">TOTITO <br/>The Lord Of The Rings</h1>
          <br/>
          <br/>
          <div className="grid grid-cols-2 gap-2">
            <h1 className="ml-5 text-white font-bold text-2xl">Jugador 1</h1>
            <Ejercitos />
            <h1 className="ml-5 text-white font-bold text-2xl">Jugador 2</h1>
            <Ejercitos />
          </div>
          <br/>
          <br/>
          <span className="ml-5 text-xl md:text-2xl font-bold text-white">{'El ganador es: ' + calcularGanador(cuadros)}</span>
        </div>
        <img className="h-full w-full md:w-1/2 md:h-screen object-cover absolute z-0" src="../img/lotr.jpg" />
      </div>
    </>
    
  )
}
export default Tablero /*Se exporta el componente Tablero */