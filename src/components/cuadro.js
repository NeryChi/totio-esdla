const Cuadro = ({valor, alHacerClick, color, cuadroRef, id}) => {
  return(
    <button className={color} 
            id={id}
            ref={cuadroRef}
            onClick={() => alHacerClick()}>
            <img alt="base-jugador" src='../img/tablero.webp' className='absolute h-full select-none -z-10' />
            {valor}
    </button>
  )
}

export default Cuadro