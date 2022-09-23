const Tablero = () => {
  return (
    <div className="p-2 xl:p-5 grid grid-cols-3 gap-2 xl:gap-5 bg-blue-200 h-72 sm:h-screen">{/*Tablero responsivo */}

      {/**Primeros 3 botones del juego 1, 2, y 3 */}
      <div className="select-none shadow-lg shadow-gray-500  active:shadow-gray-900 active:shadow-inner active:bg-indigo-600 font-bold px-4 py-2 font-medium text-2xl sm:text-3xl xl:text-5xl text-white flex justify-center items-center transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">1</div>
      <div className="select-none shadow-lg shadow-gray-500  active:shadow-gray-900 active:shadow-inner active:bg-indigo-600 font-bold px-4 py-2 font-medium text-2xl sm:text-3xl xl:text-5xl text-white flex justify-center items-center transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">2</div>
      <div className="select-none shadow-lg shadow-gray-500  active:shadow-gray-900 active:shadow-inner active:bg-indigo-600 font-bold px-4 py-2 font-medium text-2xl sm:text-3xl xl:text-5xl text-white flex justify-center items-center transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">3</div>

      {/**Siguientes 3 botones del juego 4, 5, y 6 */}
      <div className="select-none shadow-lg shadow-gray-500  active:shadow-gray-900 active:shadow-inner active:bg-indigo-600 font-bold px-4 py-2 font-medium text-2xl sm:text-3xl xl:text-5xl text-white flex justify-center items-center transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">4</div>
      <div className="select-none shadow-lg shadow-gray-500  active:shadow-gray-900 active:shadow-inner active:bg-indigo-600 font-bold px-4 py-2 font-medium text-2xl sm:text-3xl xl:text-5xl text-white flex justify-center items-center transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">5</div>
      <div className="select-none shadow-lg shadow-gray-500  active:shadow-gray-900 active:shadow-inner active:bg-indigo-600 font-bold px-4 py-2 font-medium text-2xl sm:text-3xl xl:text-5xl text-white flex justify-center items-center transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">6</div>

      {/**Ultimos 3 botones del juego 7, 8, y 9 */}
      <div className="select-none shadow-lg shadow-gray-500  active:shadow-gray-900 active:shadow-inner active:bg-indigo-600 font-bold px-4 py-2 font-medium text-2xl sm:text-3xl xl:text-5xl text-white flex justify-center items-center transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">7</div>
      <div className="select-none shadow-lg shadow-gray-500  active:shadow-gray-900 active:shadow-inner active:bg-indigo-600 font-bold px-4 py-2 font-medium text-2xl sm:text-3xl xl:text-5xl text-white flex justify-center items-center transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">8</div>
      <div className="select-none shadow-lg shadow-gray-500  active:shadow-gray-900 active:shadow-inner active:bg-indigo-600 font-bold px-4 py-2 font-medium text-2xl sm:text-3xl xl:text-5xl text-white flex justify-center items-center transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">9</div>
    </div>
  )
}
export default Tablero /*Se exporta el componente Tablero */