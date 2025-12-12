'use client';

import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '@/data/portfolio';
import { useThemeStore } from '@/lib/themeStore';

type Props = {
  project: Project;
  addToProjectsRef: (el: HTMLDivElement | null) => void;
};

export function ProjectCard({ project, addToProjectsRef }: Props) {
  const { darkMode } = useThemeStore();

  return (
    <div
      ref={addToProjectsRef}
      className={`group relative rounded-2xl overflow-hidden shadow-2xl border-2 transition-all duration-500 hover:scale-105 ${
        darkMode
          ? 'bg-gray-800/50 border-gray-700 hover:border-blue-500/50'
          : 'bg-white/80 border-gray-200 hover:border-blue-400/50'
      } backdrop-blur-sm`}
      style={{
        transform: 'scale(0.3) rotate(180deg)',
        opacity: 0,
        borderRadius: '50% 50% 0% 0%',
        clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
      }}
    >
      <div className="absolute top-4 right-4 z-20">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm border ${
            darkMode
              ? 'bg-gray-700/80 border-gray-600 text-gray-200'
              : 'bg-white/80 border-gray-300 text-gray-700'
          }`}
        >
          {project.category}
        </span>
      </div>

      <div className="relative h-72 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transform group-hover:scale-110 transition-transform duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          <div className="text-center p-6">
            <h3 className="text-2xl font-bold text-white mb-4">Tecnologías</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        <h3 className={` ${darkMode ? 'text-gray-100' : 'text-gray-950'} text-2xl font-bold  mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}>
          {project.title}
        </h3>

        <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
          {project.description}
        </p>

        <div className="lg:hidden flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-blue-100 dark:bg-blue-900/90 text-blue-800 dark:text-blue-200 rounded text-sm border border-blue-200 dark:border-blue-800"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-sm">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        <div className="flex gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border ${
                darkMode
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-700'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-100'
              } group/github`}
            >
              <Github size={18} />
              <span>Code</span>
              <div className="w-0 group-hover/github:w-4 h-0.5 bg-current transition-all duration-300" />
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl group/live"
            >
              <ExternalLink size={18} />
              <span>Live Demo</span>
              <div className="w-0 group-hover/live:w-4 h-0.5 bg-white transition-all duration-300" />
            </a>
          )}
        </div>
      </div>

      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
          darkMode ? 'via-blue-400/5' : 'via-blue-600/5'
        }`}
      />
    </div>
  );
}
