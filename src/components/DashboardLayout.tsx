'use client'

import { useState } from 'react'
import { LogOut, Settings, Menu, X } from 'lucide-react'
import Link from 'next/link'

export function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div
      className="flex h-screen"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 fixed md:relative w-64 h-full border-r transition-transform z-40`}
        style={{
          backgroundColor: 'var(--bg-secondary)',
          borderColor: 'var(--border-color)',
        }}
      >
        <div className="p-6 border-b" style={{ borderColor: 'var(--border-color)' }}>
          <Link href="/" className="flex items-center space-x-2">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg"
              style={{
                backgroundColor: 'var(--accent-primary)',
                color: 'white',
              }}
            >
              SP
            </div>
            <span
              className="text-lg font-bold"
              style={{ color: 'var(--text-primary)' }}
            >
              SparxPlus
            </span>
          </Link>
        </div>

        <nav className="p-4 space-y-2">
          <Link
            href="/dashboard"
            className="w-full text-left px-4 py-3 rounded-lg hover:opacity-70 transition-opacity"
            style={{
              backgroundColor: 'var(--accent-primary)',
              color: 'white',
            }}
          >
            Dashboard
          </Link>
          <Link
            href="/dashboard/assignments"
            className="w-full text-left px-4 py-3 rounded-lg hover:opacity-70 transition-opacity"
            style={{ color: 'var(--text-primary)' }}
          >
            Assignments
          </Link>
          <Link
            href="/dashboard/platforms"
            className="w-full text-left px-4 py-3 rounded-lg hover:opacity-70 transition-opacity"
            style={{ color: 'var(--text-primary)' }}
          >
            Connected Platforms
          </Link>
          <Link
            href="/dashboard/history"
            className="w-full text-left px-4 py-3 rounded-lg hover:opacity-70 transition-opacity"
            style={{ color: 'var(--text-primary)' }}
          >
            History
          </Link>
        </nav>

        <div className="absolute bottom-0 w-full border-t p-4" style={{ borderColor: 'var(--border-color)' }}>
          <Link
            href="/dashboard/settings"
            className="flex items-center space-x-2 w-full px-4 py-3 rounded-lg hover:opacity-70 transition-opacity mb-2"
            style={{ color: 'var(--text-primary)' }}
          >
            <Settings size={20} />
            <span>Settings</span>
          </Link>
          <button
            className="flex items-center space-x-2 w-full px-4 py-3 rounded-lg hover:opacity-70 transition-opacity"
            style={{ color: 'var(--text-secondary)' }}
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div
          className="border-b p-4 flex items-center justify-between"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderColor: 'var(--border-color)',
          }}
        >
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden"
            style={{ color: 'var(--text-primary)' }}
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="flex items-center space-x-4 ml-auto">
            <Link
              href="/dashboard/settings"
              className="p-2 rounded-lg hover:opacity-70"
              style={{
                backgroundColor: 'var(--bg-primary)',
              }}
            >
              <Settings size={20} style={{ color: 'var(--text-primary)' }} />
            </Link>
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center font-bold"
              style={{
                backgroundColor: 'var(--accent-primary)',
                color: 'white',
              }}
            >
              U
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-6">
          {children}
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}
