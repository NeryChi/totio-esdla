import Ejercito from "./ejercito"
const Ejercitos = ({ejercitos, index, limpiarAlerta}) => {
  return(
    <select onChange={() => limpiarAlerta()} id={index} className="border-8 rounded-md border-gray-500 w-4/5 sm:w-[25%] grid col-span-4 bg-gray-500 text-white font-bold text-2xl">
        {
          ejercitos.map((item, itemIndex) => {
            return <Ejercito key={itemIndex}
                    ejercito = {ejercitos[itemIndex]} />
          })
        }
    </select>   
  )
}

export default Ejercitos