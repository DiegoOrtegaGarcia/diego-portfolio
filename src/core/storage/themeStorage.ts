// stores/themeStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeState {
  darkMode: boolean;
  toggleDarkMode: () => void;
  setDarkMode: (mode: boolean) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      darkMode: false,
      
      toggleDarkMode: () => {
        set((state) => ({ darkMode: !state.darkMode }));
      },
      
      setDarkMode: (mode: boolean) => {
        set({ darkMode: mode });
      },
    }),
    {
      name: 'theme-storage',
    }
  )
);