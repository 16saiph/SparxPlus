'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from '@/store/theme'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    document.documentElement.className = theme
    
    const colors = {
      dark: {
        '--bg-primary': '#0a0e27',
        '--bg-secondary': '#1a1f3a',
        '--bg-tertiary': '#252d47',
        '--border-color': '#3a4257',
        '--text-primary': '#e4e6eb',
        '--text-secondary': '#a0a9c3',
        '--accent-primary': '#8b5cf6',
        '--accent-secondary': '#06b6d4',
      },
      light: {
        '--bg-primary': '#f8fafc',
        '--bg-secondary': '#ffffff',
        '--bg-tertiary': '#f1f5f9',
        '--border-color': '#e2e8f0',
        '--text-primary': '#1e293b',
        '--text-secondary': '#64748b',
        '--accent-primary': '#8b5cf6',
        '--accent-secondary': '#06b6d4',
      },
      cherry: {
        '--bg-primary': '#fdf5f8',
        '--bg-secondary': '#fff9fb',
        '--bg-tertiary': '#ffe4f5',
        '--border-color': '#ffb3d9',
        '--text-primary': '#6b1b47',
        '--text-secondary': '#c41e78',
        '--accent-primary': '#e91e8c',
        '--accent-secondary': '#ff69b4',
      },
      forest: {
        '--bg-primary': '#0b2e1f',
        '--bg-secondary': '#1a4d35',
        '--bg-tertiary': '#2d6a52',
        '--border-color': '#4a8a6f',
        '--text-primary': '#d4f0e8',
        '--text-secondary': '#a0d5c7',
        '--accent-primary': '#10b981',
        '--accent-secondary': '#34d399',
      },
    } as const

    const root = document.documentElement.style
    const themeColors = colors[theme as keyof typeof colors] || colors.dark
    Object.entries(themeColors).forEach(([key, value]) => {
      root.setProperty(key, value)
    })
  }, [theme, mounted])

  if (!mounted) return <>{children}</>

  return <>{children}</>
}
