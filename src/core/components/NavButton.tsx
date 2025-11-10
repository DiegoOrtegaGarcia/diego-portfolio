import type { navButtonProp } from "../types/type";
import { DynamicIcon } from 'lucide-react/dynamic';

export const NavButton=({button,darkMode}:navButtonProp)=>{
    return (
        <button 
        className={`flex flex-col items-center space-y-1 p-2 rounded-full transition-all duration-200 hover:scale-110 ${
                darkMode 
            ? 'hover:bg-gray-700 text-gray-300 hover:text-white' 
            : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
            }`}
        >
        <DynamicIcon name={button.icon} size={20} />
        <span className="text-xs font-medium">{button.label}</span>
      </button> 
);
}