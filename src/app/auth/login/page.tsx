'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function LoginPage() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 mb-8 justify-center group">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg glow"
            style={{
              backgroundColor: 'var(--accent-primary)',
              color: 'white',
            }}
          >
            SP
          </div>
          <span
            className="text-2xl font-bold"
            style={{ color: 'var(--text-primary)' }}
          >
            SparxPlus
          </span>
        </Link>

        {/* Card */}
        <div
          className="rounded-xl border p-8 glow"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderColor: 'var(--border-color)',
          }}
        >
          <div className="mb-6">
            <h1
              className="text-3xl font-black mb-2"
              style={{ color: 'var(--text-primary)' }}
            >
              Welcome Back
            </h1>
            <p
              className="text-sm"
              style={{ color: 'var(--text-secondary)' }}
            >
              Log in to your SparxPlus account
            </p>
          </div>

          <form className="space-y-4">
            <div>
              <label
                className="block text-sm font-semibold mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg border focus:outline-none"
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-primary)',
                }}
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  className="text-sm font-semibold"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Password
                </label>
                <Link
                  href="#"
                  className="text-xs"
                  style={{ color: 'var(--accent-secondary)' }}
                >
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg border focus:outline-none"
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-primary)',
                }}
              />
            </div>

            <div className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4 rounded" defaultChecked />
              <span
                className="text-sm"
                style={{ color: 'var(--text-secondary)' }}
              >
                Keep me logged in
              </span>
            </div>

            <button
              className="w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-bold text-lg glow hover:scale-105 transition-transform mt-6"
              style={{
                backgroundColor: 'var(--accent-primary)',
                color: 'white',
              }}
            >
              <span>Sign In</span>
              <ArrowRight size={20} />
            </button>
          </form>

          <div className="mt-6 pt-6 border-t" style={{ borderColor: 'var(--border-color)' }}>
            <p
              className="text-center text-sm"
              style={{ color: 'var(--text-secondary)' }}
            >
              Don&apos;t have an account?{' '}
              <Link
                href="/auth/signup"
                className="font-semibold"
                style={{ color: 'var(--accent-primary)' }}
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
