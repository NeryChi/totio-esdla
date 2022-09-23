import { useState } from "react"
import Cuadro from "./cuadro"

const Tablero = () => {
  const [cuadros, setCuadros] = useState(Array(9).fill(''))
  const [turno, setTurno] = useState('X')

  const pintaFigura = (indexItem) => {
    const misCuadritos = cuadros.slice()
    misCuadritos.splice(indexItem, 1, turno)
    setCuadros(misCuadritos)
    if(turno === 'X'){
      setTurno('O')
    } else{
      setTurno('X')
    }
  }
  return (
    <div className="p-2 xl:p-5 grid grid-cols-3 gap-2 xl:gap-5 bg-blue-200 h-72 sm:h-screen">{/*Tablero responsivo */}
      {
        cuadros.map((item, indexItem) => {
          return <Cuadro key={indexItem} 
                         valor={item} 
                         alHacerClick={() => pintaFigura(indexItem)} />
        })
      }
    </div>
  )
}
export default Tablero /*Se exporta el componente Tablero */