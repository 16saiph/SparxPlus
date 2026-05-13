'use client'

import { CheckCircle } from 'lucide-react'

const platforms = [
  'Sparx Maths',
  'Sparx Reader',
  'Tassomai',
  'Carousel Learning',
  'Bedrock Learning',
  'And many more...',
]

export function PlatformsSection() {
  return (
    <section
      id="platforms"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-black mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Supported Platforms
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            We support all major UK school homework and learning systems.
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 p-4 rounded-lg border glow"
              style={{
                backgroundColor: 'var(--bg-primary)',
                borderColor: 'var(--border-color)',
              }}
            >
              <CheckCircle
                size={20}
                style={{ color: 'var(--accent-primary)' }}
              />
              <span style={{ color: 'var(--text-primary)' }}>
                {platform}
              </span>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center">
          <p
            className="text-sm max-w-xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Can&apos;t find your platform? We&apos;re constantly adding more. Contact us to request support for your homework system.
          </p>
        </div>
      </div>
    </section>
  )
}
