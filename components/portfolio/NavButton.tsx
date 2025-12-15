'use client';

import type { MenuItem } from '@/data/portfolio';
import { DynamicIcon } from 'lucide-react/dynamic';

type Props = {
  button: MenuItem;
  darkMode: boolean;
};

export function NavButton({ button, darkMode }: Props) {
  const onClick = () => {
    const el = document.getElementById(button.id);
    if (!el) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-col items-center space-y-1 p-2 rounded-full transition-all duration-200 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 ${
        darkMode
          ? 'hover:bg-gray-700 text-gray-300 hover:text-white'
          : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
      }`}
      aria-label={`Ir a ${button.label}`}
    >
      <DynamicIcon name={button.icon} size={20} />
      <span className="text-xs font-medium">{button.label}</span>
    </button>
  );
}
