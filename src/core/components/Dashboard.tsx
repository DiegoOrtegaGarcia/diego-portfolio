import { Sun, Moon } from 'lucide-react';
import { NavButton } from './NavButton';
import { menuItems } from '../const/constants';
import { useThemeStore } from '../storage/themeStorage';
import { useDashboard } from '../hooks/useDashboard';

export const Dashboard = () => {
  const { darkMode, toggleDarkMode } = useThemeStore();
  const {navRef,addToButtonsRef,separatorRef,themeButtonRef}= useDashboard();

  return (
    <div className={`transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <nav 
        ref={navRef}
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
      >
        <div className={`rounded-2xl px-6 py-3 shadow-2xl backdrop-blur-xl border transition-all duration-500 hover:shadow-xl ${
          darkMode 
            ? 'bg-gray-900/60 border-gray-600/50 hover:bg-gray-900/80 hover:border-gray-500/70' 
            : 'bg-white/70 border-gray-200/50 hover:bg-white/80 hover:border-gray-300/70'
        }`}>
          <div className="flex items-center space-x-4">
            {menuItems.map((item) => (
              <div key={item.id} ref={addToButtonsRef}>
                <NavButton button={item} darkMode={darkMode} />
              </div>
            ))}

            <div 
              ref={separatorRef}
              className={`h-8 w-px ${
                darkMode ? 'bg-gray-600' : 'bg-gray-300'
              }`}
            ></div>

            <button 
              ref={themeButtonRef}
              onClick={toggleDarkMode}
              className={`relative flex items-center justify-center p-3 rounded-xl transition-all duration-300 group ${
                darkMode 
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 hover:from-yellow-900/30 hover:to-orange-900/20 text-yellow-300' 
                  : 'bg-gradient-to-br from-gray-100 to-gray-50 hover:from-blue-100 hover:to-purple-100 text-gray-700'
              } shadow-lg hover:shadow-xl hover:scale-105 active:scale-95`}
            >
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                darkMode ? 'via-yellow-400/10' : 'via-blue-400/10'
              }`}></div>
              
              {darkMode ? 
                <Sun size={18} className="relative z-10" /> : 
                <Moon size={18} className="relative z-10" />
              }
              <span className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded-md text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                darkMode 
                  ? 'bg-gray-700 text-yellow-300' 
                  : 'bg-white text-gray-700 shadow-md'
              }`}>
                {darkMode ? 'Modo claro' : 'Modo oscuro'}
              </span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};