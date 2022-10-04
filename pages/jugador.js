const Jugador = ({jugador}) => {
  return(
    <img className="w-2/5" id={jugador} src={`../img/${jugador}.png`} />
  )
}

export default Jugador