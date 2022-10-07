import Ejercito from "./ejercito"

const Ejercitos = ({ejercitos, index}) => {
  return(
    <select id={index} className="p-2 w-4/5 grid col-span-2 bg-gray-500 text-white font-bold text-2xl">
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