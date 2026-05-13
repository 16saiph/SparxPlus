'use client'

import Link from 'next/link'
import { Github, Twitter, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderColor: 'var(--border-color)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
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
            <p
              className="text-sm"
              style={{ color: 'var(--text-secondary)' }}
            >
              AI-powered homework automation for modern students.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4
              className="font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Product
            </h4>
            <ul className="space-y-2">
              {['Features', 'Pricing', 'Security', 'Blog'].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm hover:opacity-70"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className="font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Company
            </h4>
            <ul className="space-y-2">
              {['About', 'Contact', 'Careers', 'Press'].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm hover:opacity-70"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4
              className="font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Legal
            </h4>
            <ul className="space-y-2">
              {['Privacy', 'Terms', 'Cookies', 'Disclaimer'].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm hover:opacity-70"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className="border-t pt-8 flex flex-col sm:flex-row items-center justify-between"
          style={{ borderColor: 'var(--border-color)' }}
        >
          <p
            className="text-sm"
            style={{ color: 'var(--text-secondary)' }}
          >
            © 2024 SparxPlus. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <Link
              href="#"
              className="p-2 rounded-lg hover:opacity-70 transition-opacity"
              style={{
                backgroundColor: 'var(--bg-primary)',
                color: 'var(--accent-primary)',
              }}
            >
              <Github size={20} />
            </Link>
            <Link
              href="#"
              className="p-2 rounded-lg hover:opacity-70 transition-opacity"
              style={{
                backgroundColor: 'var(--bg-primary)',
                color: 'var(--accent-primary)',
              }}
            >
              <Twitter size={20} />
            </Link>
            <Link
              href="#"
              className="p-2 rounded-lg hover:opacity-70 transition-opacity"
              style={{
                backgroundColor: 'var(--bg-primary)',
                color: 'var(--accent-primary)',
              }}
            >
              <Mail size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
