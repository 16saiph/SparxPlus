'use client'

import { ArrowRight } from 'lucide-react'

const steps = [
  {
    number: 1,
    title: 'Connect Your Account',
    description: 'Link your school homework platform account securely',
  },
  {
    number: 2,
    title: 'Select Assignment',
    description: 'Choose the homework you want to complete',
  },
  {
    number: 3,
    title: 'AI Solves It',
    description: 'Our AI reads and solves each question instantly',
  },
  {
    number: 4,
    title: 'Auto Submit',
    description: 'Answers are automatically filled and submitted',
  },
  {
    number: 5,
    title: 'Track Progress',
    description: 'Monitor your homework completion in real-time',
  },
]

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
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
            How It Works
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Just 5 simple steps to automate your homework.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div key={index}>
              <div
                className="flex gap-4 p-6 rounded-xl border glow mb-0"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderColor: 'var(--border-color)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg"
                  style={{
                    backgroundColor: 'var(--accent-primary)',
                    color: 'white',
                  }}
                >
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3
                    className="text-lg font-bold mb-1"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    {step.description}
                  </p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="flex justify-center py-2">
                  <ArrowRight
                    size={24}
                    className="rotate-90"
                    style={{ color: 'var(--accent-secondary)' }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
