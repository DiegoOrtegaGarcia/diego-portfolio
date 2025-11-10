import foto from '../../../assets/foto.png';

export const HomeContainer = () => {
    const darkMode = true
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 shadow-2xl">
                <img 
                  src={foto}
                  alt="Diego - Desarrollador Full Stack"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMDA3N0ZGIi8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIzMCIgZmlsbD0iI0ZGRiIvPgo8cGF0aCBkPSJNNDAgMTYwQzQwIDE0MCA4MCAxMzAgMTAwIDEzMEMxMjAgMTMwIDE2MCAxNDAgMTYwIDE2MEg0MFoiIGZpbGw9IiNGRkYiLz4KPC9zdmc+';
                  }}
                />
              </div>
              
              <div className={`absolute -inset-4 rounded-full border-4 ${
                darkMode ? 'border-red-500' : 'border-red-700'
              } opacity-20 animate-pulse`}></div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="space-y-6">
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Soy <span className={`${darkMode ? 'text-red-500' : 'text-red-700'}`}>Diego</span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300">
                Desarrollador <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Full Stack</span>
              </h2>
              
              <p className={`text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Creo soluciones digitales innovadoras con las últimas tecnologías. 
                Apasionado por el desarrollo web y la experiencia de usuario.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
                <button className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 border-2 ${
                  darkMode 
                    ? 'border-red-500 text-red-500 hover:bg-red-500 hover:text-white' 
                    : 'border-red-700 text-red-700 hover:bg-red-700 hover:text-white'
                }`}>
                  Descargar CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
