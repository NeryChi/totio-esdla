const Cuadro = ({valor, alHacerClick, color}) => {
  return(
    <button className={color}
            onClick={() => alHacerClick()}>
      {valor}
    </button>
  )
}

export default Cuadro