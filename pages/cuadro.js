const Cuadro = ({valor, alHacerClick, color, cuadroRef}) => {
  return(
    <button className={color}
            ref={cuadroRef}
            onClick={() => alHacerClick()}>
      {valor}
    </button>
  )
}

export default Cuadro