import { ExternalLink, Github } from 'lucide-react';
import foto from '../../../assets/fondo.jpg';
import { useThemeStore } from '../../../core/storage/themeStorage';

const projectsData = [
  {
    id: '1',
    title: 'Gestion de ventas',
    description: 'Aplicacion empresarial que permite la gestion de ventas de un negocio',
    longDescription: 'Una aplicación de gestion completa con carrito de compras, sistema de autenticación, administrarion de clientes y productos. Desarrollada con React, Node.js y MongoDB.',
    image: foto,
    technologies: ['React', 'Laravel', 'MySQl', 'Typescript'],
    githubUrl: 'https://github.com/tuusuario/ecommerce',
    liveUrl: 'https://mi-ecommerce.com',
    featured: true,
    category: 'Full Stack'
  },
  {
    id: '2',
    title: 'App de Tareas',
    description: 'Aplicación de gestión de tareas con drag & drop',
    longDescription: 'Una aplicación web responsive para gestión de tareas personales y de equipo. Incluye funcionalidades de arrastrar y soltar, categorías, fechas de vencimiento y notificaciones.',
    image: foto,
    technologies: ['React', 'TypeScript', 'Tailwind', 'Firebase'],
    githubUrl: 'https://github.com/tuusuario/task-app',
    liveUrl: 'https://mitaskapp.com',
    featured: true,
    category: 'Frontend'
  },
  {
    id: '3',
    title: 'Dashboard Analytics',
    description: 'Panel de control con gráficos y métricas en tiempo real',
    longDescription: 'Dashboard interactivo para visualización de datos con gráficos dinámicos, tablas paginadas y filtros avanzados. Conexión con APIs REST y WebSockets para datos en tiempo real.',
    image: foto,
    technologies: ['React', 'D3.js', 'Socket.io', 'Python', 'PostgreSQL'],
    githubUrl: 'https://github.com/tuusuario/dashboard',
    liveUrl: 'https://midashboard.com',
    featured: false,
    category: 'Full Stack'
  },
  {
    id: '4',
    title: 'Portfolio Personal',
    description: 'Sitio web personal responsive y moderno',
    longDescription: 'Portfolio personal desarrollado con las últimas tecnologías web. Diseño moderno, optimizado para SEO y completamente responsive.',
    image: foto,
    technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Vite'],
    githubUrl: 'https://github.com/tuusuario/portfolio',
    liveUrl: 'https://miportfolio.com',
    featured: false,
    category: 'Frontend'
  }
];


export const ProjectsContainer = () => {
  const { darkMode } = useThemeStore();

  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Mis <span className="text-blue-600 dark:text-blue-400">Proyectos</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Descubre algunos de mis trabajos más recientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projectsData.map(project => (
            <div
              key={project.id}
              className={`rounded-xl overflow-hidden shadow-lg border transition-all duration-300 hover:shadow-xl ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700' 
                  : 'bg-white border-gray-200'
              }`}
            >
              {/* Contenedor de imagen más grande */}
              <div className="h-64 overflow-hidden"> {/* Cambiado de h-48 a h-64 */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="flex items-center gap-2 px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};