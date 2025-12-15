'use client';

import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { useThemeStore } from '@/lib/themeStore';

type Props = {
  children: ReactNode;
};

export default function ThemeClassProvider({ children }: Props) {
  const darkMode = useThemeStore((s) => s.darkMode);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [darkMode]);

  return children;
}
