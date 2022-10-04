import { useState } from "react"
import Ejercito from "./ejercito"

const ejercitos = ['Rohan', 'Gondor', 'Mordor', 'Isengard']

const Ejercitos = ({}) => {

  //const [cuadros, setCuadros] = useState(Array(9).fill([]))
  const [ejercito, setEjercito] = useState(Array(ejercitos.length).fill(''))

  return(
    <select className="w-4/5 ml-1 bg-gray-200 text-white font-bold text-2xl">
        {
          ejercito.map((item, itemIndex) => {
            return <Ejercito key={itemIndex}
                    ejercito = {ejercitos[itemIndex]} />
          })
        }
    </select>   
  )
}

export default Ejercitos