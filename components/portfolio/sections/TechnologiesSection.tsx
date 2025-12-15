'use client';

/* eslint-disable @next/next/no-img-element */

import { useThemeStore } from '@/lib/themeStore';
import { useTechnologies } from '../hooks/useTechnologies';

export function TechnologiesSection() {
  const { darkMode } = useThemeStore();
  const {
    sectionRef,
    titleRef,
    subtitleRef,
    categories,
    addToCategoryCardsRef,
    getCategoryGradient,
    technologies,
    addToTechItemsRef,
  } = useTechnologies();

  return (
    <section
      id="technologies"
      ref={sectionRef}
      className={`min-h-screen py-20 px-4 relative overflow-hidden scroll-mt-24 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-10 left-10 w-64 h-64 rounded-full blur-3xl opacity-10 ${
            darkMode ? 'bg-blue-500' : 'bg-blue-400'
          }`}
        />
        <div
          className={`absolute bottom-10 right-10 w-80 h-80 rounded-full blur-3xl opacity-10 ${
            darkMode ? 'bg-purple-500' : 'bg-purple-400'
          }`}
        />
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-5 ${
            darkMode ? 'bg-green-500' : 'bg-green-400'
          }`}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 ref={titleRef} className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? "text-white": "text-gray-950"}`}>
            Mi <span className="text-blue-600 dark:text-blue-400">Stack</span> Tecnológico
          </h2>
          <p ref={subtitleRef} className="text-xl text-gray-600 dark:text-gray-500 max-w-2xl mx-auto">
            Tecnologías que domino y utilizo para crear aplicaciones modernas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {categories.map((category) => (
            <div
              key={category}
              ref={addToCategoryCardsRef}
              className={`group relative rounded-3xl p-8 transition-all duration-500 hover:scale-105 backdrop-blur-sm border ${
                darkMode
                  ? 'bg-gray-800/80 border-gray-700 hover:border-gray-600 hover:bg-gray-800/90'
                  : 'bg-white/80 border-gray-200 hover:border-gray-300 hover:bg-white/90'
              }`}
            >
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${getCategoryGradient(category)} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className={`w-8 h-0.5 rounded-full bg-gradient-to-r ${getCategoryGradient(category)}`} />
                    <h3
                      className={`text-2xl font-bold bg-gradient-to-r ${getCategoryGradient(category)} bg-clip-text text-transparent`}
                    >
                      {category}
                    </h3>
                    <div className={`w-8 h-0.5 rounded-full bg-gradient-to-l ${getCategoryGradient(category)}`} />
                  </div>

                  <div className={`w-20 h-1 mx-auto rounded-full bg-gradient-to-r ${getCategoryGradient(category)}`} />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {technologies
                    .filter((tech) => tech.category === category)
                    .map((tech) => (
                      <div
                        key={tech.name}
                        ref={addToTechItemsRef}
                        className={`group/tech relative flex flex-col items-center p-4 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 ${
                          darkMode
                            ? 'bg-gray-700/50 hover:bg-gray-700 border border-gray-600/50 hover:border-gray-500'
                            : 'bg-gray-50/80 hover:bg-white border border-gray-200/80 hover:border-gray-300'
                        } backdrop-blur-sm`}
                      >
                        <div
                          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tech.color} opacity-0 group-hover/tech:opacity-10 transition-opacity duration-300`}
                        />

                        <div className="relative z-10 w-14 h-14 mb-3 flex items-center justify-center">
                          <div
                            className={`absolute inset-0 rounded-xl bg-gradient-to-br ${tech.color} opacity-20 group-hover/tech:opacity-30 transition-opacity duration-300`}
                          />
                          {/* Mantengo <img> porque son SVG remotos; next/image requiere configuración adicional */}
                          <img
                            src={tech.logo}
                            alt={tech.name}
                            width={32}
                            height={32}
                            loading="lazy"
                            decoding="async"
                            className="w-8 h-8 object-contain group-hover/tech:scale-125 transition-transform duration-300 filter drop-shadow-lg"
                          />
                        </div>

                        <span
                          className={`text-xs font-semibold text-center relative z-10 ${
                            darkMode ? 'text-gray-300' : 'text-gray-700'
                          } group-hover/tech:text-transparent group-hover/tech:bg-gradient-to-r group-hover/tech:from-gray-700 group-hover/tech:to-gray-900 group-hover/tech:dark:from-gray-300 group-hover/tech:dark:to-gray-100 group-hover/tech:bg-clip-text`}
                        >
                          {tech.name}
                        </span>

                        <div
                          className={`absolute -top-12 opacity-0 group-hover/tech:opacity-100 group-hover/tech:-translate-y-2 transition-all duration-300 pointer-events-none z-20 ${
                            darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
                          } px-3 py-2 rounded-lg shadow-xl border text-sm font-medium whitespace-nowrap`}
                        >
                          {tech.name}
                          <div
                            className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 ${
                              darkMode ? 'bg-gray-800' : 'bg-white'
                            } border-b border-r`}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${getCategoryGradient(category)} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
              >
                <div className={`absolute inset-[2px] rounded-3xl ${darkMode ? 'bg-gray-900' : 'bg-white'}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
