const Jugador = ({jugador}) => {
  return(
    <img alt="figura-jugador" className="w-[30%]" id={jugador} src={`../img/${jugador}.webp`} />
  )
}

export default Jugador