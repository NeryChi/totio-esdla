const Cuadro = ({valor, alHacerClick, color, cuadroRef, id}) => {
  return(
    <button className={color}
            id={id}
            ref={cuadroRef}
            onClick={() => alHacerClick()}>
      {valor}
    </button>
  )
}

export default Cuadro