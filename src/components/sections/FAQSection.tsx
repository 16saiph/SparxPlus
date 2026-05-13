'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Is using SparxPlus allowed by schools?',
    answer: 'SparxPlus operates in a grey area. While we use legitimate automation techniques, schools may consider it against their terms of service. Users are responsible for understanding their school\'s policy.',
  },
  {
    question: 'How accurate is the AI solving?',
    answer: 'Our AI achieves 95%+ accuracy on most subjects. For math, we use symbolic solvers combined with LLMs. For comprehension, we use advanced NLP. Accuracy varies by question type.',
  },
  {
    question: 'Is my data safe and private?',
    answer: 'Yes. We use enterprise-grade encryption for all data. We never store your passwords or sell your information. All communications are encrypted end-to-end.',
  },
  {
    question: 'Can I use SparxPlus on mobile?',
    answer: 'Yes, our dashboard is fully responsive and works on all devices. However, automated solving works best on desktop due to browser automation limitations.',
  },
  {
    question: 'What if the AI gets an answer wrong?',
    answer: 'You can always review and edit answers before submission. We also have a feedback system to improve our AI over time.',
  },
  {
    question: 'Can I get a refund?',
    answer: 'Yes, we offer a 30-day money-back guarantee if you\'re not satisfied. No questions asked.',
  },
  {
    question: 'How do you handle anti-bot detection?',
    answer: 'We use advanced techniques including randomized timing, realistic user behavior simulation, and browser fingerprinting to avoid detection.',
  },
  {
    question: 'What platforms do you support?',
    answer: 'We support Sparx Maths, Sparx Reader, Tassomai, Carousel Learning, and Bedrock Learning. We\'re constantly adding more platforms.',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      id="faq"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl sm:text-5xl font-black mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Frequently Asked Questions
          </h2>
          <p
            className="text-lg"
            style={{ color: 'var(--text-secondary)' }}
          >
            Have questions? We have answers.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg border overflow-hidden transition-all"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-color)',
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 hover:opacity-70 transition-opacity"
              >
                <h3
                  className="text-lg font-semibold text-left"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {faq.question}
                </h3>
                <ChevronDown
                  size={20}
                  style={{
                    color: 'var(--accent-primary)',
                    transform:
                      openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s',
                  }}
                />
              </button>

              {openIndex === index && (
                <div
                  className="px-4 pb-4 border-t"
                  style={{ borderColor: 'var(--border-color)' }}
                >
                  <p style={{ color: 'var(--text-secondary)' }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
