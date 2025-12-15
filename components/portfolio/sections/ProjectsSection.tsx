'use client';

import { Zap } from 'lucide-react';
import { useThemeStore } from '@/lib/themeStore';
import { projects } from '@/data/portfolio';
import { useProjects } from '../hooks/useProjects';
import { ProjectCard } from '../ProjectCard';

export function ProjectsSection() {
  const { darkMode } = useThemeStore();
  const { sectionRef, subtitleRef, titleRef, addToProjectsRef } = useProjects();

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen py-20 px-4 relative overflow-hidden scroll-mt-24"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-10 left-10 w-64 h-64 rounded-full blur-3xl opacity-5 ${
            darkMode ? 'bg-blue-500' : 'bg-blue-400'
          }`}
        />
        <div
          className={`absolute bottom-10 right-10 w-80 h-80 rounded-full blur-3xl opacity-5 ${
            darkMode ? 'bg-purple-500' : 'bg-purple-400'
          }`}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <div
              className={`w-12 h-0.5 rounded-full ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}
            />
            <Zap className={`w-6 h-6 ${darkMode ? 'text-yellow-400' : 'text-yellow-500'}`} />
            <div
              className={`w-12 h-0.5 rounded-full ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}
            />
          </div>

          <h2 ref={titleRef} className={`text-5xl md:text-6xl font-bold mb-6 ${darkMode ? "text-white": "text-gray-950"}`}>
            Mis <span className="text-blue-600 dark:text-blue-400">Proyectos</span>
          </h2>

          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-500 dark:text-gray-500 max-w-3xl mx-auto leading-relaxed"
          >
            Descubre mis trabajos donde combino{' '}
            <span className={`font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              creatividad
            </span>{' '}
            y{' '}
            <span className={`font-semibold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
              tecnología
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} addToProjectsRef={addToProjectsRef} />
          ))}
        </div>

        <div className="text-center mt-16">
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-6`}>
            ¿Interesado en trabajar juntos?
          </p>
          <a
            href="https://github.com/DiegoOrtegaGarcia"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 border-2 inline-block ${
              darkMode
                ? 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
                : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
            }`}
          >
            Ver Más Proyectos
          </a>
        </div>
      </div>
    </section>
  );
}
