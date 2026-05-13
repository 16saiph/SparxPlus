import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type ThemeType = 'dark' | 'light' | 'cherry' | 'forest'

interface ThemeStore {
  theme: ThemeType
  setTheme: (theme: ThemeType) => void
}

export const useTheme = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: 'dark',
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: 'theme-storage',
    }
  )
)

const themeClasses = {
  dark: 'dark',
  light: 'light',
  cherry: 'cherry',
  forest: 'forest',
}

export const getThemeColors = (theme: ThemeType) => {
  const colors: Record<ThemeType, Record<string, string>> = {
    dark: {
      bg: '#0a0e27',
      surface: '#1a1f3a',
      surfaceAlt: '#252d47',
      border: '#3a4257',
      text: '#e4e6eb',
      textMuted: '#a0a9c3',
      primary: '#8b5cf6',
      accent: '#06b6d4',
    },
    light: {
      bg: '#f8fafc',
      surface: '#ffffff',
      surfaceAlt: '#f1f5f9',
      border: '#e2e8f0',
      text: '#1e293b',
      textMuted: '#64748b',
      primary: '#8b5cf6',
      accent: '#06b6d4',
    },
    cherry: {
      bg: '#fdf5f8',
      surface: '#fff9fb',
      surfaceAlt: '#ffe4f5',
      border: '#ffb3d9',
      text: '#6b1b47',
      textMuted: '#c41e78',
      primary: '#e91e8c',
      accent: '#ff69b4',
    },
    forest: {
      bg: '#0b2e1f',
      surface: '#1a4d35',
      surfaceAlt: '#2d6a52',
      border: '#4a8a6f',
      text: '#d4f0e8',
      textMuted: '#a0d5c7',
      primary: '#10b981',
      accent: '#34d399',
    },
  }
  return colors[theme]
}
