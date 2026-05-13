'use client'

import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: 'Free',
    price: '£0',
    description: 'Perfect for trying it out',
    features: [
      '5 homework assignments/month',
      'Basic AI solving',
      'Single platform support',
      'Email support',
      'Limited browser automation',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '£9.99',
    period: '/month',
    description: 'For serious students',
    features: [
      'Unlimited assignments',
      'Advanced AI solving',
      'All platform support',
      'Priority support',
      'Full browser automation',
      'Progress analytics',
      'Custom schedules',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Team',
    price: '£19.99',
    period: '/month',
    description: 'For study groups',
    features: [
      'Everything in Pro',
      'Up to 5 users',
      'Team dashboard',
      'Shared assignments',
      'Admin controls',
      'Volume discounts',
      '24/7 phone support',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section
      id="pricing"
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
            Simple, Transparent Pricing
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Choose the plan that works for you. Always flexible, no hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl border overflow-hidden transition-transform hover:scale-105 ${
                plan.highlighted ? 'ring-2 relative' : ''
              }`}
              style={{
                backgroundColor: plan.highlighted
                  ? 'var(--bg-primary)'
                  : 'var(--bg-tertiary)',
                borderColor: plan.highlighted
                  ? 'var(--accent-primary)'
                  : 'var(--border-color)',
                outlineColor: plan.highlighted ? 'var(--accent-primary)' : 'transparent',
              }}
            >
              {plan.highlighted && (
                <div
                  className="text-center text-sm font-bold py-2 px-4"
                  style={{
                    backgroundColor: 'var(--accent-primary)',
                    color: 'white',
                  }}
                >
                  MOST POPULAR
                </div>
              )}

              <div className="p-8">
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {plan.name}
                </h3>
                <p
                  className="text-sm mb-4"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span
                    className="text-4xl font-black"
                    style={{ color: 'var(--accent-primary)' }}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span
                      className="text-sm ml-2"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {plan.period}
                    </span>
                  )}
                </div>

                <Link
                  href="/auth/signup"
                  className={`w-full inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-bold mb-6 transition-all ${
                    plan.highlighted ? 'glow' : ''
                  }`}
                  style={{
                    backgroundColor: plan.highlighted
                      ? 'var(--accent-primary)'
                      : 'transparent',
                    color: plan.highlighted
                      ? 'white'
                      : 'var(--text-primary)',
                    border: plan.highlighted
                      ? 'none'
                      : `1px solid var(--border-color)`,
                  }}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight size={16} />
                </Link>

                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check
                        size={20}
                        style={{ color: 'var(--accent-secondary)' }}
                        className="flex-shrink-0 mt-0.5"
                      />
                      <span
                        className="text-sm"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
