import { useThemeStore } from "../../../core/storage/themeStorage";

const technologies = [
  { 
    name: "Vue", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    category: "Frontend"
  },
  { 
    name: "React", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: "Frontend"
  },
  { 
    name: "TypeScript", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    category: "Frontend"
  },
  { 
    name: "JavaScript", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    category: "Frontend"
  },
  { 
    name: "Tailwind CSS", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    category: "Frontend"
  },
  { 
    name: "CSS", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    category: "Frontend"
  },
  { 
    name: "HTML", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    category: "Frontend"
  },
  { 
    name: "Three.js", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
    category: "Frontend"
  },
  { 
    name: "PHP", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    category: "Backend"
  },
  { 
    name: "C#", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    category: "Backend"
  },
  { 
    name: "ASP.NET", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
    category: "Backend"
  },
  { 
    name: "Laravel", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
    category: "Backend"
  },
  { 
    name: "MySQL", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    category: "Database"
  },
  { 
    name: "MongoDB", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    category: "Database"
  },
  { 
    name: "Git", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    category: "Herramientas"
  },
  { 
    name: "Docker", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    category: "Herramientas"
  },
];

export const TechnologiesContainer = () => {
  const { darkMode } = useThemeStore();

  const categories = [...new Set(technologies.map(tech => tech.category))];

  return (
    <section id="technologies" className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Mi <span className="text-blue-600 dark:text-blue-400">Stack</span> Tecnológico
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Tecnologías que domino y utilizo para crear aplicaciones modernas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {categories.map(category => (
            <div
              key={category}
              className={`rounded-2xl p-6 shadow-xl border transition-all duration-300 hover:shadow-2xl ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
                  : 'bg-white border-gray-200 hover:border-gray-300'
              }`}
            >
              {/* Header de la Card */}
              <div className="text-center mb-6">
                <h3 className={`text-2xl font-bold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {category}
                </h3>
                <div className={`w-16 h-1 mx-auto mt-2 rounded-full ${
                  category === 'Frontend' ? 'bg-blue-500' :
                  category === 'Backend' ? 'bg-green-500' :
                  category === 'Database' ? 'bg-purple-500' : 'bg-orange-500'
                }`}></div>
              </div>

              {/* Grid de tecnologías dentro de la card */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {technologies
                  .filter(tech => tech.category === category)
                  .map(tech => (
                    <div
                      key={tech.name}
                      className={`flex flex-col items-center p-4 rounded-xl transition-all duration-300 transform hover:scale-105 group ${
                        darkMode 
                          ? 'bg-gray-700 hover:bg-gray-600' 
                          : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
                      }`}
                    >
                      <div className="w-12 h-12 mb-2 flex items-center justify-center">
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                        <div 
                          className="tech-fallback hidden text-lg font-bold"
                          style={{ display: 'none' }}
                        >
                          {tech.name.charAt(0)}
                        </div>
                      </div>
                      <span className={`text-xs font-medium text-center ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {tech.name}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};