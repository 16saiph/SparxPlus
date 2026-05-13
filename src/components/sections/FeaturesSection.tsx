'use client'

import { Zap, Brain, Cpu, BarChart3, Lock, Smartphone } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI Question Solving',
    description: 'Instantly solve math problems, comprehension questions, vocabulary, and more using advanced AI models.',
  },
  {
    icon: Cpu,
    title: 'Browser Automation',
    description: 'Automatically interact with homework platforms, fill in answers, and submit assignments.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Get answers in seconds. No more manual question-by-question solving.',
  },
  {
    icon: BarChart3,
    title: 'Progress Tracking',
    description: 'Monitor your homework completion, track solved tasks, and manage your workload.',
  },
  {
    icon: Lock,
    title: 'Secure & Private',
    description: 'Your data is encrypted. We never store your credentials or personal information.',
  },
  {
    icon: Smartphone,
    title: 'Cross-Platform',
    description: 'Works seamlessly on all devices. Desktop, tablet, or mobile.',
  },
]

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-black mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Powerful Features
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Everything you need to automate and accelerate your homework completion.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-6 rounded-xl border glow hover:scale-105 transition-transform duration-300 group"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderColor: 'var(--border-color)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:animate-pulse"
                  style={{
                    backgroundColor: 'rgba(var(--accent-primary-rgb), 0.1)',
                  }}
                >
                  <Icon
                    size={24}
                    style={{ color: 'var(--accent-primary)' }}
                  />
                </div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {feature.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
