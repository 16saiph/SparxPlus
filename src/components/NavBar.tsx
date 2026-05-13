'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav
      className="fixed w-full z-50 top-0 border-b"
      style={{
        backgroundColor: 'rgba(var(--bg-primary-rgb), 0.9)',
        backdropFilter: 'blur(10px)',
        borderColor: 'var(--border-color)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg glow"
              style={{
                backgroundColor: 'var(--accent-primary)',
                color: 'white',
              }}
            >
              SP
            </div>
            <span
              className="text-xl font-bold hidden sm:block"
              style={{ color: 'var(--text-primary)' }}
            >
              SparxPlus
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className="text-sm hover:opacity-70"
              style={{ color: 'var(--text-secondary)' }}
            >
              Features
            </Link>
            <Link
              href="#platforms"
              className="text-sm hover:opacity-70"
              style={{ color: 'var(--text-secondary)' }}
            >
              Platforms
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm hover:opacity-70"
              style={{ color: 'var(--text-secondary)' }}
            >
              How It Works
            </Link>
            <Link
              href="#pricing"
              className="text-sm hover:opacity-70"
              style={{ color: 'var(--text-secondary)' }}
            >
              Pricing
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/auth/login"
              className="text-sm px-4 py-2 rounded-lg hover:opacity-70"
              style={{ color: 'var(--text-secondary)' }}
            >
              Log in
            </Link>
            <Link
              href="/auth/signup"
              className="text-sm px-6 py-2 rounded-lg font-semibold glow hover:scale-105 transition-transform"
              style={{
                backgroundColor: 'var(--accent-primary)',
                color: 'white',
              }}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            style={{ color: 'var(--text-primary)' }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="md:hidden pb-4 border-t"
            style={{ borderColor: 'var(--border-color)' }}
          >
            <div className="space-y-3 pt-4">
              <Link
                href="#features"
                className="block text-sm px-4 py-2 rounded"
                style={{ color: 'var(--text-secondary)' }}
              >
                Features
              </Link>
              <Link
                href="#platforms"
                className="block text-sm px-4 py-2 rounded"
                style={{ color: 'var(--text-secondary)' }}
              >
                Platforms
              </Link>
              <Link
                href="#how-it-works"
                className="block text-sm px-4 py-2 rounded"
                style={{ color: 'var(--text-secondary)' }}
              >
                How It Works
              </Link>
              <Link
                href="#pricing"
                className="block text-sm px-4 py-2 rounded"
                style={{ color: 'var(--text-secondary)' }}
              >
                Pricing
              </Link>
              <Link
                href="/auth/login"
                className="block text-sm px-4 py-2 rounded"
                style={{ color: 'var(--text-secondary)' }}
              >
                Log in
              </Link>
              <Link
                href="/auth/signup"
                className="block text-sm px-4 py-2 rounded font-semibold"
                style={{
                  backgroundColor: 'var(--accent-primary)',
                  color: 'white',
                }}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
