import { useState } from 'react';
import { Sun, Moon} from 'lucide-react';
import { NavButton } from './NavButton';
import { menuItems } from '../const/constants';

export const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 ">
        <div className={`md:rounded-full px-4 py-2 shadow-lg backdrop-blur-sm border ${
          darkMode 
            ? 'bg-gray-800/80 border-gray-700' 
            : 'bg-white/80 border-gray-200'
        }`}>
          <div className="flex items-center space-x-4">
            {menuItems.map((item) => (
                <NavButton button={item} darkMode={darkMode}/>
            ))}

            <div className={`h-8 w-px ${
              darkMode ? 'bg-gray-600' : 'bg-gray-300'
            }`}></div>

            <button 
              onClick={toggleDarkMode}
              className={`flex flex-col items-center space-y-1 p-2 rounded-full transition-all duration-200 hover:scale-110 ${
                darkMode 
                  ? 'hover:bg-gray-700 text-yellow-400' 
                  : 'hover:bg-gray-100 text-gray-600'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              <span className="text-xs font-medium">
                {darkMode ? 'Light' : 'Dark'}
              </span>
            </button>
          </div>
        </div>
      </nav>

    </div>
  );
};
