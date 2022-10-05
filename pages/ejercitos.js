import Ejercito from "./ejercito"

const ejercitos = ['Rohan', 'Gondor', 'Mordor', 'Isengard']

const Ejercitos = () => {
  return(
    <select className="p-2 w-4/5 ml-1 bg-gray-500 text-white font-bold text-2xl">
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