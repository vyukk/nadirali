import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react'

export default function CaseStudyPage({ onRequestDemo }) {
  return (
    <div className="w-full min-h-screen bg-[#0c0a09] text-white pt-28 pb-24">
      <div className="container max-w-4xl flex flex-col gap-12">
        
        {/* Breadcrumb */}
        <div>
          <Link to="/blog" className="inline-flex items-center gap-2 text-xs text-white/60 hover:text-white transition-colors">
            <ArrowLeft className="size-3.5" />
            <span>Back to Case Studies</span>
          </Link>
        </div>

        {/* Title & Metadata */}
        <div className="flex flex-col gap-5 border-b border-white/10 pb-10">
          <div className="flex items-center gap-3">
            <span className="rounded-sm border border-stone-200/30 px-2 py-0.5 text-xs font-medium text-stone-200 uppercase">
              Case Study
            </span>
            <span className="text-xs text-white/50">Published October 2026</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#fcf7f4] leading-[1.15]">
            How Providence Anesthesia is positioning for growth with Amperos's agentic workforce
          </h1>

          <div className="flex items-center gap-4 text-sm text-white/70">
            <span>David Reynolds, Chief Financial Officer</span>
            <span>•</span>
            <span>Providence Anesthesiology Associates</span>
          </div>
        </div>

        {/* Executive Metrics Highlight */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 rounded-2xl bg-[#141210] border border-white/10 p-6 sm:p-8">
          <div>
            <span className="text-xs text-white/50 uppercase tracking-wider block">AR Days Reduction</span>
            <span className="text-3xl sm:text-4xl font-serif text-emerald-400 font-bold block mt-1">42%</span>
            <span className="text-xs text-white/60 mt-1 block">From 56 to 32.5 days average</span>
          </div>
          <div>
            <span className="text-xs text-white/50 uppercase tracking-wider block">Denial Recovery Rate</span>
            <span className="text-3xl sm:text-4xl font-serif text-emerald-400 font-bold block mt-1">+26%</span>
            <span className="text-xs text-white/60 mt-1 block">Surpassing traditional agency benchmarks</span>
          </div>
          <div>
            <span className="text-xs text-white/50 uppercase tracking-wider block">Manual Hours Saved</span>
            <span className="text-3xl sm:text-4xl font-serif text-emerald-400 font-bold block mt-1">210 hrs/mo</span>
            <span className="text-xs text-white/60 mt-1 block">Reallocated to strategic growth</span>
          </div>
        </div>

        {/* Article Body */}
        <div className="prose prose-invert max-w-none text-base sm:text-lg leading-relaxed text-stone-300 space-y-6">
          <h2 className="text-2xl font-serif text-white">The Challenge</h2>
          <p>
            Providence Anesthesiology Associates is one of the premier clinical anesthesia practices in the Southeast, supporting tens of thousands of surgical procedures annually across multiple hospital networks and ambulatory surgery centers.
          </p>
          <p>
            However, increasing scrutiny from commercial payers regarding concurrency documentation, physical status units, and medical necessity led to an unsustainable backlog in outstanding claims. Traditional offshore billing vendors were failing to resolve complex denials within filing limits.
          </p>

          <h2 className="text-2xl font-serif text-white pt-4">The Solution</h2>
          <p>
            Providence partnered with Amperos to deploy autonomous AI agents across their primary payer clearinghouses and portals. Amperos immediately took over first-touch status verification, automatically attaching required clinical records and resolving routine billing discrepancies within 24 hours of adjudication.
          </p>
          <p>
            For high-complexity Level 2 appeals, Amperos’s certified anesthesia coders collaborated directly with the AI engine to draft evidence-based appeals citing surgical records and national anesthesia guidelines.
          </p>

          <blockquote className="rounded-xl border-l-4 border-amber-200 bg-white/5 p-6 font-serif italic text-xl text-[#fcf7f4]">
            "Amperos operates with the precision of our best in-house specialists, but at a scale and speed that no human team could match. They have unlocked millions in cash flow that was previously trapped in payor queues."
            <footer className="text-xs not-italic font-sans text-white/60 mt-2">— David Reynolds, CFO</footer>
          </blockquote>

          <h2 className="text-2xl font-serif text-white pt-4">The Results</h2>
          <p>
            Within 90 days of onboarding, Providence witnessed a 42% decrease in average days in AR and reclaimed over $1.8M in stalled reimbursements. The billing team has since redirected its focus toward payer contracting and regional expansion.
          </p>
        </div>

        {/* CTA Banner */}
        <div className="mt-8 rounded-2xl bg-[#371506] p-8 text-center flex flex-col items-center gap-4">
          <h3 className="text-2xl font-serif text-white">
            Achieve similar results for your anesthesia or surgical group
          </h3>
          <button
            onClick={() => onRequestDemo ? onRequestDemo() : (window.location.href = '/request-a-demo')}
            className="rounded-lg bg-[#fff5f0] hover:bg-[#ffe8dc] px-6 py-3 text-sm font-semibold text-black transition-colors"
          >
            Request a Practice Consultation
          </button>
        </div>

      </div>
    </div>
  )
}

