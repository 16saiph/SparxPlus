'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ArrowRight, Zap, Brain, Cpu, BarChart3, Lock, Smartphone } from 'lucide-react'
import { NavBar } from '@/components/NavBar'
import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { PlatformsSection } from '@/components/sections/PlatformsSection'
import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { PricingSection } from '@/components/sections/PricingSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <NavBar />
      <HeroSection />
      <FeaturesSection />
      <PlatformsSection />
      <HowItWorksSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
