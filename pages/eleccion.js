import Ejercitos from './ejercitos';

const ejercitos = ['', 'Rohan', 'Gondor', 'Mordor', 'Isengard']

const Eleccion = ({cambioInterfaz, cambioJugador}) => {
  return(
    <div className="sm:grid sm:grid-cols-2 w-screen h-screen bg-gray-700 justify-items-center content-around">
      {/*Se llama al componente Tablero */}
      <h1 className='grid col-span-2 flex justify-center'>Elige a tus ejercitos</h1>
      <div className="h-1/4 w-4/5 grid col-span-2 grid-cols-2 gap-2  flex justify-center">
        <h1 className="ml-5 text-white font-bold text-2xl">Jugador 1</h1>
        <Ejercitos  ejercitos = {ejercitos} 
                    index="ejercitosUno" />
        <h1 className="ml-5 text-white font-bold text-2xl">Jugador 2</h1>
        <Ejercitos  ejercitos = {ejercitos} 
                    index="ejercitosDos" />
    </div>
    <button onMouseOver={() => cambioJugador()} onClick={() => cambioInterfaz()} className='grid col-span-2 flex justify-center bg-white py-2 w-2/5 rounded-md text-2xl font-bold'>Jugar</button>
</div>
  )
}

export default Eleccion