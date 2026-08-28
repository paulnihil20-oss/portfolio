import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeMode = 'editorial' | 'blueprint' | 'cyberpunk' | 'amber';

export interface ThemeConfig {
  id: ThemeMode;
  name: string;
  subtitle: string;
  accent: string;
  canvas: string;
  ink: string;
}

export const THEMES: Record<ThemeMode, ThemeConfig> = {
  editorial: {
    id: 'editorial',
    name: 'Editorial Swiss',
    subtitle: 'Linen Parchment & High-Contrast Cobalt',
    accent: '#2457FF',
    canvas: '#F4F3EF',
    ink: '#111111',
  },
  blueprint: {
    id: 'blueprint',
    name: 'Blueprint CAD',
    subtitle: 'Technical Drafting & Cyan Schematics',
    accent: '#00D2FF',
    canvas: '#0A192F',
    ink: '#E6F1FF',
  },
  cyberpunk: {
    id: 'cyberpunk',
    name: 'Matrix Phosphor',
    subtitle: 'Terminal Obsidian & Emerald Glow',
    accent: '#00FF66',
    canvas: '#0D1117',
    ink: '#58A6FF',
  },
  amber: {
    id: 'amber',
    name: 'Amber Monolith',
    subtitle: '1980s Retro Mainframe Workstation',
    accent: '#FF8800',
    canvas: '#1A140D',
    ink: '#FFB454',
  },
};

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  themeConfig: ThemeConfig;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('pn_theme') as ThemeMode;
      if (saved && THEMES[saved]) return saved;
    }
    return 'editorial';
  });

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('pn_theme', newTheme);
    }
  };

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('theme-editorial', 'theme-blueprint', 'theme-cyberpunk', 'theme-amber');
    root.classList.add(`theme-${theme}`);

    if (theme === 'blueprint') {
      root.style.setProperty('--color-canvas', '#0A192F');
      root.style.setProperty('--color-ink', '#E6F1FF');
      root.style.setProperty('--color-ink-muted', '#8892B0');
      root.style.setProperty('--color-rule', '#1E3A5F');
      root.style.setProperty('--color-cobalt', '#00D2FF');
    } else if (theme === 'cyberpunk') {
      root.style.setProperty('--color-canvas', '#0D1117');
      root.style.setProperty('--color-ink', '#58A6FF');
      root.style.setProperty('--color-ink-muted', '#8B949E');
      root.style.setProperty('--color-rule', '#30363D');
      root.style.setProperty('--color-cobalt', '#00FF66');
    } else if (theme === 'amber') {
      root.style.setProperty('--color-canvas', '#1A140D');
      root.style.setProperty('--color-ink', '#FFB454');
      root.style.setProperty('--color-ink-muted', '#B38850');
      root.style.setProperty('--color-rule', '#3D2C18');
      root.style.setProperty('--color-cobalt', '#FF8800');
    } else {
      // Default Editorial
      root.style.setProperty('--color-canvas', '#F4F3EF');
      root.style.setProperty('--color-ink', '#111111');
      root.style.setProperty('--color-ink-muted', '#555555');
      root.style.setProperty('--color-rule', '#B8B8B3');
      root.style.setProperty('--color-cobalt', '#2457FF');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeConfig: THEMES[theme] }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
