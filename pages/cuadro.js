const Cuadro = ({valor, alHacerClick}) => {
  return(
    <button className="select-none shadow-lg shadow-gray-500  active:shadow-gray-900 active:shadow-inner active:bg-indigo-700 font-bold px-4 py-2 text-2xl sm:text-3xl xl:text-5xl text-white flex justify-center items-center transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            onClick={() => alHacerClick()}>
      {valor}
    </button>
  )
}

export default Cuadro