import foto from '../../../assets/foto.png';
import { Download, Sparkles } from 'lucide-react';
import { useThemeStore } from '../../../core/storage/themeStorage';
import { useHome } from '../hook/useHome';

export const HomeContainer = () => {
    const { darkMode } = useThemeStore();
    const {imageRef,titleRef,subtitleRef,descriptionRef,buttonsRef} = useHome()

    return (
        <section id="home" className="min-h-screen flex items-center justify-center py-16 px-4 relative overflow-hidden pt-25 md:pt-0">
            <div className="absolute inset-0 overflow-hidden">
                <div className={`absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-10 ${
                    darkMode ? 'bg-red-500' : 'bg-red-400'
                }`}></div>
                <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 ${
                    darkMode ? 'bg-blue-500' : 'bg-blue-400'
                }`}></div>
            </div>

            <div className="container mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
                    <div className="w-full lg:w-2/5 flex justify-center lg:justify-start order-2 lg:order-1">
                        <div className="relative group">
                            <div className="relative z-10 w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-8 shadow-2xl">
                                <img 
                                    ref={imageRef}
                                    src={foto}
                                    alt="Diego - Desarrollador Full Stack"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    onError={(e) => {
                                        e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMDA3N0ZGIi8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIzMCIgZmlsbD0iI0ZGRiIvPgo8cGF0aCBkPSJNNDAgMTYwQzQwIDE0MCA4MCAxMzAgMTAwIDEzMEMxMjAgMTMwIDE2MCAxNDAgMTYwIDE2MEg0MFoiIGZpbGw9IiNGRkYiLz4KPC9zdmc+';
                                    }}
                                />
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            </div>
                            <div className={`absolute -inset-6 rounded-3xl border-4 ${
                                darkMode ? 'border-red-500/30' : 'border-red-700/30'
                            } opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105`}></div>
                        </div>
                    </div>
                    <div className="w-full lg:w-3/5 text-center lg:text-left order-1 lg:order-2">
                        <div className="space-y-6 lg:space-y-8">
                            
                            <div ref={titleRef}>
                                <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold ${darkMode ? "text-white":"text-gray-800"} leading-tight`}>
                                    Hola, soy{' '}
                                    <span className={`relative inline-block ${
                                        darkMode ? 'text-red-400' : 'text-red-600'
                                    }`}>
                                        Diego
                                        <Sparkles className="absolute -top-4 -right-6 w-6 h-6 animate-pulse" 
                                            fill={darkMode ? "#f87171" : "#dc2626"} 
                                            stroke={darkMode ? "#f87171" : "#dc2626"}
                                        />
                                    </span>
                                </h1>
                            </div>

                            <div ref={subtitleRef}>
                                <h2 className={`text-2xl md:text-3xl lg:text-4xl font-semibold ${darkMode ? "text-gray-200":"text-gray-800"}`}>
                                    Desarrollador{' '}
                                    <span className={`relative ${
                                        darkMode ? 'text-blue-400' : 'text-blue-600'
                                    }`}>
                                        Full Stack
                                    </span>
                                </h2>
                            </div>                        
                            <div ref={descriptionRef}>
                                <p className={`text-xl md:text-2xl max-w-3xl mx-auto lg:mx-0 leading-relaxed ${
                                    darkMode ? 'text-gray-300' : 'text-gray-600'
                                }`}>
                                  <p>Apasionado por el desarrollo web y la experiencia de usuario.</p>
                                    Especializado en crear{' '}
                                    <span className={`font-semibold ${
                                        darkMode ? 'text-red-400' : 'text-red-600'
                                    }`}>
                                        experiencias digitales excepcionales
                                    </span>{' '}
                                    con tecnologías modernas. Combino diseño y código para dar vida a ideas innovadoras.
                                </p>
                            </div>                            
                            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-8">
                                <button className={`group relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 border-2 overflow-hidden ${
                                    darkMode 
                                        ? 'border-red-500 text-red-500 hover:bg-red-500 hover:text-white' 
                                        : 'border-red-700 text-red-700 hover:bg-red-700 hover:text-white'
                                }`}>
                                    <span className="relative z-10 flex items-center gap-2">
                                        <Download size={20} />
                                        Descargar CV
                                    </span>
                                    <div className={`absolute inset-0 bg-gradient-to-r ${
                                        darkMode 
                                            ? 'from-red-500 to-red-600' 
                                            : 'from-red-600 to-red-700'
                                    } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                                </button>                              
                            </div>                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};