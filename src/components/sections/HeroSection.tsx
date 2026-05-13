'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useTheme } from '@/store/theme'

export function HeroSection() {
  const { theme } = useTheme()

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl animate-float"
          style={{
            backgroundColor: 'var(--accent-primary)',
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl animate-float"
          style={{
            backgroundColor: 'var(--accent-secondary)',
            animationDelay: '1s',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border mb-6 glow"
          style={{
            backgroundColor: 'rgba(var(--accent-primary-rgb), 0.1)',
            borderColor: 'var(--border-color)',
          }}
        >
          <Sparkles size={16} style={{ color: 'var(--accent-primary)' }} />
          <span
            className="text-sm font-semibold"
            style={{ color: 'var(--accent-primary)' }}
          >
            AI-Powered Homework Automation
          </span>
        </div>

        {/* Main Headline */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight"
          style={{ color: 'var(--text-primary)' }}
        >
          Complete Homework{' '}
          <span className="gradient-text">Instantly</span>
        </h1>

        {/* Subheading */}
        <p
          className="text-lg sm:text-xl max-w-2xl mx-auto mb-8"
          style={{ color: 'var(--text-secondary)' }}
        >
          Stop solving homework manually. Let AI handle the questions instantly and automate large parts of the process with intelligent browser automation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/auth/signup"
            className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-lg font-bold text-lg glow hover:scale-105 transition-transform"
            style={{
              backgroundColor: 'var(--accent-primary)',
              color: 'white',
            }}
          >
            <span>Start Solving</span>
            <ArrowRight size={20} />
          </Link>
          <Link
            href="#features"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-bold text-lg border hover:opacity-70 transition-opacity"
            style={{
              borderColor: 'var(--border-color)',
              color: 'var(--text-primary)',
            }}
          >
            Learn More
          </Link>
        </div>

        {/* Dashboard Preview */}
        <div
          className="rounded-xl border overflow-hidden glow"
          style={{
            borderColor: 'var(--border-color)',
            backgroundColor: 'rgba(26, 31, 58, 0.4)',
          }}
        >
          <div
            className="aspect-video bg-gradient-to-br flex items-center justify-center relative"
            style={{
              backgroundColor: 'var(--bg-secondary)',
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div
                  className="text-4xl font-bold gradient-text"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  Dashboard Preview
                </div>
                <p style={{ color: 'var(--text-secondary)' }}>
                  [Dashboard visualization will appear here]
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
