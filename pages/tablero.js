import { useState } from "react"
import Cuadro from "./cuadro"

const colorOriginal = "select-none shadow-lg shadow-gray-500  active:shadow-gray-900 active:shadow-inner active:bg-indigo-700 font-bold px-4 py-2 text-2xl sm:text-3xl xl:text-5xl text-white flex justify-center items-center transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
const colorError = "select-none shadow-lg shadow-gray-500  active:shadow-gray-900 active:shadow-inner active:bg-red-600 font-bold px-4 py-2 text-2xl sm:text-3xl xl:text-5xl text-white flex justify-center items-center transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-red-600 focus:ring-opacity-80"

const Tablero = () => {
  const [cuadros, setCuadros] = useState(Array(9).fill(''))
  const [turno, setTurno] = useState('X')
  const [error, setError] = useState(colorOriginal)
  
  const pintaFigura = (indexItem) => {
    const misCuadritos = cuadros.slice()
    misCuadritos.splice(indexItem, 1, turno)
    setError(colorOriginal)

    if(cuadros[indexItem] != ''){

      setError(colorError)
      
    } else{

      setCuadros(misCuadritos)

      if(turno === 'X'){
        setTurno('O')
      } else{
        setTurno('X')
      }

      
    }
    
  }

  return (
    <div className="p-2 xl:p-5 grid grid-cols-3 gap-2 xl:gap-5 bg-blue-200 h-72 sm:h-screen">{/*Tablero responsivo */}
      {
        cuadros.map((item, indexItem) => {
          return <Cuadro key={indexItem} 
                         valor={item} 
                         color={error}
                         alHacerClick={() => pintaFigura(indexItem)} />
        })
      }
    </div>
  )
}
export default Tablero /*Se exporta el componente Tablero */