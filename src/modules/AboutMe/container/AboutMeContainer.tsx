import { Code2, GraduationCap, Heart, MapPin } from 'lucide-react';
import { useThemeStore } from '../../../core/storage/themeStorage';

export const AboutMeContainer = () => {
  const { darkMode } = useThemeStore();

  return (
    <section id="about" className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Sobre <span className="text-blue-600 dark:text-blue-400">Mí</span>
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Conoce más sobre mi journey en el mundo del desarrollo
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          
          {/* Información Personal */}
          <div className="space-y-6">
            <div>
              <h3 className={`text-3xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Hola, soy <span className="text-blue-600 dark:text-blue-400">Diego Alejandro Ortega</span>
              </h3>
              
              <div className="space-y-4">
                <p className={`text-lg leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Soy un <span className="font-semibold text-blue-600 dark:text-blue-400">desarrollador Cubano</span> apasionado por la programación web y la creación de soluciones digitales innovadoras.
                </p>

                <p className={`text-lg leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Mi journey en la informática comenzó con mi formación como <span className="font-semibold">Técnico Medio en Informática</span>, donde descubrí mi pasión por el desarrollo de software y la resolución de problemas mediante código.
                </p>

                <p className={`text-lg leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Lo que más me motiva es <span className="font-semibold">aprender constantemente</span>. Siempre estoy explorando nuevas tecnologías, frameworks y metodologías de trabajo para mantenerme actualizado en este campo que evoluciona tan rápidamente.
                </p>

                <p className={`text-lg leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Aunque aún no tengo experiencia laboral formal en el ámbito, he dedicado incontables horas a <span className="font-semibold">proyectos personales</span> y al autoaprendizaje, construciendo una base sólida en desarrollo full-stack.
                </p>
              </div>
            </div>

            {/* Estadísticas/Puntos destacados */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className={`text-center p-4 rounded-xl ${
                darkMode ? 'bg-gray-800' : 'bg-blue-50'
              }`}>
                <div className="flex justify-center mb-2">
                  <Code2 className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`} size={24} />
                </div>
                <h4 className={`font-bold text-lg ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Full Stack
                </h4>
                <p className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Developer
                </p>
              </div>

              <div className={`text-center p-4 rounded-xl ${
                darkMode ? 'bg-gray-800' : 'bg-green-50'
              }`}>
                <div className="flex justify-center mb-2">
                  <Heart className={`${darkMode ? 'text-green-400' : 'text-green-600'}`} size={24} />
                </div>
                <h4 className={`font-bold text-lg ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Apasionado
                </h4>
                <p className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Por aprender
                </p>
              </div>
            </div>
          </div>

          {/* Tarjeta de Información */}
          <div className={`rounded-2xl p-8 ${
            darkMode ? 'bg-gray-800' : 'bg-white shadow-xl'
          }`}>
            <h4 className={`text-2xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Mi Información
            </h4>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-full ${
                  darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-600'
                }`}>
                  <MapPin size={20} />
                </div>
                <div>
                  <p className={`font-medium ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>Nacionalidad</p>
                  <p className={darkMode ? 'text-white' : 'text-gray-900'}>Cubano</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-full ${
                  darkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-600'
                }`}>
                  <GraduationCap size={20} />
                </div>
                <div>
                  <p className={`font-medium ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>Formación</p>
                  <p className={darkMode ? 'text-white' : 'text-gray-900'}>Técnico Medio en Informática</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-full ${
                  darkMode ? 'bg-purple-900 text-purple-300' : 'bg-purple-100 text-purple-600'
                }`}>
                  <Code2 size={20} />
                </div>
                <div>
                  <p className={`font-medium ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>Enfoque</p>
                  <p className={darkMode ? 'text-white' : 'text-gray-900'}>Desarrollo Web Full Stack</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-full ${
                  darkMode ? 'bg-orange-900 text-orange-300' : 'bg-orange-100 text-orange-600'
                }`}>
                  <Heart size={20} />
                </div>
                <div>
                  <p className={`font-medium ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>Actitud</p>
                  <p className={darkMode ? 'text-white' : 'text-gray-900'}>Siempre aprendiendo</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className={`mt-8 p-4 rounded-xl ${
              darkMode ? 'bg-gray-700' : 'bg-gray-100'
            }`}>
              <p className={`text-center ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <span className="font-semibold">¿Tienes un proyecto?</span> ¡Hablemos y hagámoslo realidad juntos!
              </p>
            </div>
          </div>
        </div>

        {/* Sección de Valores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className={`text-center p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
            darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50 shadow-lg'
          }`}>
            <div className="flex justify-center mb-4">
              <div className={`p-3 rounded-full ${
                darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-600'
              }`}>
                <GraduationCap size={24} />
              </div>
            </div>
            <h4 className={`text-xl font-bold mb-3 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Auto-didacta
            </h4>
            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
              Aprendo constantemente por mi cuenta, explorando nuevas tecnologías y mejores prácticas.
            </p>
          </div>

          <div className={`text-center p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
            darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50 shadow-lg'
          }`}>
            <div className="flex justify-center mb-4">
              <div className={`p-3 rounded-full ${
                darkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-600'
              }`}>
                <Heart size={24} />
              </div>
            </div>
            <h4 className={`text-xl font-bold mb-3 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Pasión por el Código
            </h4>
            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
              Disfruto cada línea de código y me emociona crear soluciones que impacten positivamente.
            </p>
          </div>

          <div className={`text-center p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
            darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50 shadow-lg'
          }`}>
            <div className="flex justify-center mb-4">
              <div className={`p-3 rounded-full ${
                darkMode ? 'bg-purple-900 text-purple-300' : 'bg-purple-100 text-purple-600'
              }`}>
                <Code2 size={24} />
              </div>
            </div>
            <h4 className={`text-xl font-bold mb-3 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Enfoque en Soluciones
            </h4>
            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
              Me concentro en entender problemas y desarrollar soluciones efectivas y eficientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};