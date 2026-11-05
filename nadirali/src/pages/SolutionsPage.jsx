import React from 'react'
import { Link } from 'react-router-dom'
import { Check, X, Shield, Cpu, RefreshCw, Zap, ArrowRight } from 'lucide-react'

export default function SolutionsPage({ onRequestDemo }) {
  const comparison = [
    { feature: 'Autonomous Status Checks', traditional: 'Manual weekly phone calls', inhouse: 'Limited staff bandwidth', amperos: 'Automated 24/7 API & portal polling' },
    { feature: 'Turnaround on First Denial', traditional: '30 - 60 days', inhouse: '14 - 30 days', amperos: '< 24 hours auto-resubmission' },
    { feature: 'Complex Clinical Appeals', traditional: 'Generic template letters', inhouse: 'Time-consuming manual drafting', amperos: 'AI-assisted with clinical peer citations' },
    { feature: 'Integration with Practice EHR', traditional: 'Manual spreadsheets & batch emails', inhouse: 'Direct in EHR', amperos: 'Bi-directional live API & EDI sync' },
    { feature: 'Transparency & Audit Logs', traditional: 'Black box monthly report', inhouse: 'Scattered internal notes', amperos: 'Full real-time dashboard & action logs' },
  ]

  return (
    <div className="w-full min-h-screen bg-[#0c0a09] text-white pt-28 pb-20">
      <div className="container max-w-6xl flex flex-col gap-16">
        
        {/* Hero */}
        <div className="max-w-3xl flex flex-col gap-5">
          <span className="text-xs font-mono uppercase tracking-widest text-[#a39893]">
            Solutions Overview
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#fcf7f4] leading-[1.1]">
            End-to-End Insurance Recovery, Powered by Agentic AI
          </h1>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
            Move insurance claims forward from submission to payment without the friction, delays, and overhead of traditional call centers.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => onRequestDemo ? onRequestDemo() : (window.location.href = '/request-a-demo')}
              className="rounded-lg bg-[#fff5f0] hover:bg-[#ffe8dc] px-6 py-3 text-sm font-semibold text-black transition-colors"
            >
              Request a Demo
            </button>
            <Link
              to="/roi"
              className="rounded-lg border border-stone-200/30 bg-white/5 hover:bg-[#371506] px-6 py-3 text-sm font-medium text-white transition-colors"
            >
              Calculate Your ROI
            </Link>
          </div>
        </div>

        {/* 3 Pillars of Solution */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-2xl bg-[#141210] border border-white/10 p-8 flex flex-col gap-4">
            <div className="flex size-12 items-center justify-center rounded-xl bg-[#371506] text-amber-200">
              <Zap className="size-6" />
            </div>
            <h3 className="text-2xl font-serif text-white">First-Touch Automation</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Autonomous agents check claim status across major and regional payor portals daily, identifying denials the moment they are adjudicated.
            </p>
          </div>

          <div className="rounded-2xl bg-[#141210] border border-white/10 p-8 flex flex-col gap-4">
            <div className="flex size-12 items-center justify-center rounded-xl bg-[#371506] text-amber-200">
              <Shield className="size-6" />
            </div>
            <h3 className="text-2xl font-serif text-white">Complex Denial Resolution</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              When claims face medical necessity or prior authorization disputes, our specialized RCM clinicians craft comprehensive, evidence-backed appeal packets.
            </p>
          </div>

          <div className="rounded-2xl bg-[#141210] border border-white/10 p-8 flex flex-col gap-4">
            <div className="flex size-12 items-center justify-center rounded-xl bg-[#371506] text-amber-200">
              <RefreshCw className="size-6" />
            </div>
            <h3 className="text-2xl font-serif text-white">Continuous EHR Sync</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Every note, update, and dollar collected is synced seamlessly back into your EHR/PM system, maintaining a single clean ledger of truth.
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-3xl font-serif text-white">How Amperos Compares</h2>
            <p className="text-sm text-white/70 mt-1">Why modern specialty practices are replacing traditional outsourced billing agencies.</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#141210]">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-white/10 bg-white/5 text-xs uppercase tracking-wider text-white/60">
                <tr>
                  <th className="p-4 sm:p-5">Capability</th>
                  <th className="p-4 sm:p-5">Traditional Agencies</th>
                  <th className="p-4 sm:p-5">In-House Staff Only</th>
                  <th className="p-4 sm:p-5 text-amber-200 font-bold">Amperos Agentic AI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {comparison.map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.02]">
                    <td className="p-4 sm:p-5 font-medium text-white">{row.feature}</td>
                    <td className="p-4 sm:p-5 text-white/60">{row.traditional}</td>
                    <td className="p-4 sm:p-5 text-white/60">{row.inhouse}</td>
                    <td className="p-4 sm:p-5 text-emerald-400 font-medium">{row.amperos}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="rounded-2xl bg-[#371506] p-8 sm:p-12 text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl sm:text-4xl font-serif text-white max-w-xl">
            Ready to upgrade your insurance collections?
          </h2>
          <button
            onClick={() => onRequestDemo ? onRequestDemo() : (window.location.href = '/request-a-demo')}
            className="rounded-lg bg-[#fff5f0] hover:bg-[#ffe8dc] px-8 py-3.5 text-sm font-semibold text-black transition-colors"
          >
            Schedule a Walkthrough
          </button>
        </div>

      </div>
    </div>
  )
}

