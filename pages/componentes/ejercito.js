import { contextoAudio } from './Context/valorAudio';

const Ejercito = ({ejercito}) => {
  const [sonidos, opening, canciones, alertas] = contextoAudio()
  
  return(
    <option  className="ml-1 text-white font-bold text-2xl">
      {ejercito}
    </option> 
  )
}

export default Ejercito