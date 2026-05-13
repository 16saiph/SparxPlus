'use client'

import { DashboardLayout } from '@/components/DashboardLayout'
import { useTheme, ThemeType } from '@/store/theme'
import { Check } from 'lucide-react'

const themes: Array<{ id: ThemeType; name: string; description: string; preview: string }> = [
  {
    id: 'dark',
    name: 'Dark',
    description: 'Deep black background with purple accents. The default hacker aesthetic.',
    preview: 'bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a]',
  },
  {
    id: 'light',
    name: 'Light',
    description: 'Clean white background with purple accents. Perfect for daytime use.',
    preview: 'bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9]',
  },
  {
    id: 'cherry',
    name: 'Cherry',
    description: 'Soft pink background with bright pink accents. Sweet and modern.',
    preview: 'bg-gradient-to-br from-[#fdf5f8] to-[#ffe4f5]',
  },
  {
    id: 'forest',
    name: 'Forest',
    description: 'Deep green background with bright green accents. Natural and calm.',
    preview: 'bg-gradient-to-br from-[#0b2e1f] to-[#2d6a52]',
  },
]

export default function SettingsPage() {
  const { theme, setTheme } = useTheme()

  return (
    <DashboardLayout>
      <div className="max-w-2xl">
        <h1
          className="text-4xl font-black mb-8"
          style={{ color: 'var(--text-primary)' }}
        >
          Settings
        </h1>

        {/* Theme Selection */}
        <div>
          <h2
            className="text-2xl font-bold mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            Appearance
          </h2>

          <p
            className="mb-6"
            style={{ color: 'var(--text-secondary)' }}
          >
            Choose your preferred theme. Changes apply instantly across the entire platform.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {themes.map((themeOption) => (
              <button
                key={themeOption.id}
                onClick={() => setTheme(themeOption.id)}
                className={`text-left p-4 rounded-xl border-2 transition-all ${
                  theme === themeOption.id ? 'border-2' : 'border-2 opacity-60'
                }`}
                style={{
                  borderColor:
                    theme === themeOption.id ? 'var(--accent-primary)' : 'var(--border-color)',
                  backgroundColor: 'var(--bg-secondary)',
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3
                    className="text-lg font-bold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {themeOption.name}
                  </h3>
                  {theme === themeOption.id && (
                    <div
                      className="p-1 rounded"
                      style={{ backgroundColor: 'var(--accent-primary)' }}
                    >
                      <Check size={18} style={{ color: 'white' }} />
                    </div>
                  )}
                </div>

                <p
                  className="text-sm mb-4"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {themeOption.description}
                </p>

                <div className={`w-full h-24 rounded-lg ${themeOption.preview}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Account Settings */}
        <div className="mt-12 border-t pt-12" style={{ borderColor: 'var(--border-color)' }}>
          <h2
            className="text-2xl font-bold mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            Account Settings
          </h2>

          <div className="space-y-4">
            <div
              className="p-4 rounded-xl border"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-color)',
              }}
            >
              <label
                className="block text-sm font-semibold mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                Email Address
              </label>
              <input
                type="email"
                value="user@example.com"
                disabled
                className="w-full px-4 py-2 rounded-lg border"
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-secondary)',
                }}
              />
            </div>

            <div
              className="p-4 rounded-xl border"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-color)',
              }}
            >
              <label
                className="block text-sm font-semibold mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                Password
              </label>
              <button
                className="px-4 py-2 rounded-lg border"
                style={{
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-secondary)',
                }}
              >
                Change Password
              </button>
            </div>

            <div
              className="p-4 rounded-xl border"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-color)',
              }}
            >
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4" />
                <span
                  className="text-sm"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Email notifications for completed assignments
                </span>
              </label>
            </div>

            <div
              className="p-4 rounded-xl border"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-color)',
              }}
            >
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" className="w-4 h-4" />
                <span
                  className="text-sm"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Two-factor authentication
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="mt-12 border-t pt-12" style={{ borderColor: 'var(--border-color)' }}>
          <h2
            className="text-2xl font-bold mb-6"
            style={{ color: '#ef4444' }}
          >
            Danger Zone
          </h2>

          <button
            className="px-6 py-3 rounded-lg font-semibold border"
            style={{
              borderColor: '#ef4444',
              color: '#ef4444',
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
            }}
          >
            Delete Account
          </button>
        </div>
      </div>
    </DashboardLayout>
  )
}
