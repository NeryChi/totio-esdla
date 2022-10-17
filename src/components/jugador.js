const Jugador = ({jugador}) => {
  return(
    <img alt="figura-jugador" className="w-[50%]" id={jugador} src={`../img/${jugador}.webp`} />
  )
}

export default Jugador