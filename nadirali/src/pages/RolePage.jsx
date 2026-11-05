import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { CheckCircle2, TrendingUp, DollarSign, ArrowRight, ShieldCheck } from 'lucide-react'

export default function RolePage({ role = 'cfo', onRequestDemo }) {
  const content = {
    cfo: {
      title: 'For Chief Financial Officers',
      subtitle: 'Predictable cash flow, reduced days in AR, and lower operational collection costs.',
      highlights: [
        'Accelerate net cash collection cycle by an average of 42%',
        'Convert variable offshore agency fees into predictable, outcome-based ROI',
        'Eliminate revenue write-offs from untimely filing and unresolved denials',
        'Maintain real-time auditable compliance with SOC 2 Type II and HIPAA standards'
      ]
    },
    'vp-rcm': {
      title: 'For VPs of Revenue Cycle',
      subtitle: 'Empower your billing team with automated first-touch workflows and intelligent workqueues.',
      highlights: [
        'Automate 80%+ of repetitive status inquiries and clearinghouse portal lookups',
        'Arm certified coders with AI-generated clinical peer documentation for high-dollar appeals',
        'Prevent billing specialist burnout and reduce staff turnover across your RCM organization',
        'Direct two-way synchronization into Epic, Athena, eClinicalWorks, and NextGen'
      ]
    },
    'practice-administrator': {
      title: 'For Practice Administrators',
      subtitle: 'Streamline front-to-back collections so your clinical staff can focus on patients.',
      highlights: [
        'Eliminate the phone tag game with commercial and Medicare Advantage payors',
        'Get clear, transparent dashboards showing exactly where every stalled claim stands',
        'Quick onboarding with zero disruption to daily patient scheduling and billing operations',
        'Custom billing rule configurations tailored to your doctors and clinical protocols'
      ]
    }
  }

  const active = content[role] || content.cfo

  return (
    <div className="w-full min-h-screen bg-[#0c0a09] text-white pt-28 pb-24">
      <div className="container max-w-4xl flex flex-col gap-12">
        
        <div className="flex flex-col gap-5 border-b border-white/10 pb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-[#a39893]">
            Who We Serve
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif text-[#fcf7f4]">
            {active.title}
          </h1>
          <p className="text-lg sm:text-xl text-white/75 leading-relaxed">
            {active.subtitle}
          </p>
        </div>

        <div className="rounded-2xl bg-[#141210] border border-white/10 p-8 sm:p-12 flex flex-col gap-6 shadow-xl">
          <h2 className="text-2xl font-serif text-white">How Amperos Transforms Your Mandate</h2>
          
          <div className="space-y-4 pt-2">
            {active.highlights.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <CheckCircle2 className="size-5 shrink-0 text-emerald-400 mt-1" />
                <p className="text-base sm:text-lg text-white/80 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onRequestDemo ? onRequestDemo() : (window.location.href = '/request-a-demo')}
              className="rounded-lg bg-[#fff5f0] hover:bg-[#ffe8dc] px-6 py-3 text-sm font-semibold text-black transition-colors"
            >
              Request Tailored Strategy Session
            </button>
            <Link
              to="/roi"
              className="rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3 text-sm font-medium text-white transition-colors"
            >
              Calculate Your Practice ROI
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

