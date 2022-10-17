const Jugador = ({jugador}) => {
  return(
    <img alt="figura-jugador" className="w-[40%]" id={jugador} src={`../img/${jugador}.webp`} />
  )
}

export default Jugador