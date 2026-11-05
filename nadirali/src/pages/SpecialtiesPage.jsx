import React from 'react'
import { Link } from 'react-router-dom'
import { Activity, Stethoscope, Eye, Heart, Brain, Bone, Sparkles, Syringe, ShieldAlert, ArrowRight } from 'lucide-react'

export default function SpecialtiesPage({ onRequestDemo }) {
  const specialtiesList = [
    {
      id: 'orthopedics',
      name: 'Orthopedics & Sports Medicine',
      icon: Bone,
      challenge: 'Multi-component surgical bundling (NCCI edits), bilateral modifier disputes, and unlisted joint procedure denials.',
      solution: 'Automated operative note scanning, automated modifier 59/X{EPSU} attachment, and prompt peer-to-peer prep.'
    },
    {
      id: 'dme-hme',
      name: 'Durable Medical Equipment (DME / HME)',
      icon: Activity,
      challenge: 'Complex CMNs, proof of delivery discrepancies, and rental cap expiration tracking across Medicare and commercial payors.',
      solution: 'Continuous documentation auditing and automated prior authorization lifecycle monitoring.'
    },
    {
      id: 'cardiology',
      name: 'Cardiology & Interventional Vascular',
      icon: Heart,
      challenge: 'High-dollar catheterization claims, medical necessity criteria for rhythm monitors, and complex imaging unbundling.',
      solution: 'Targeted clinical citations and immediate payor portal query for diagnostic pre-approvals.'
    },
    {
      id: 'behavioral-health',
      name: 'Behavioral Health & Telehealth',
      icon: Brain,
      challenge: 'Parity Act non-compliance, rolling unit limits, state Medicaid telehealth modifier restrictions, and session length challenges.',
      solution: 'Real-time benefit re-verification and state-specific telehealth billing rule enforcement.'
    },
    {
      id: 'ophthalmology',
      name: 'Ophthalmology & Retina Care',
      icon: Eye,
      challenge: 'High-cost intravitreal injection denials (Avastin/Eylea/Lucentis), bilateral surgery payment reductions, and laser bundling.',
      solution: 'NDC-to-CPT crosswalk verification, invoice margin preservation, and rapid electronic reconsiderations.'
    },
    {
      id: 'anesthesiology',
      name: 'Anesthesiology & Pain Management',
      icon: Stethoscope,
      challenge: 'Base and physical status unit reductions, concurrency calculations, and surgeon diagnosis mismatches.',
      solution: 'Automated anesthesia record audit against surgical operative notes and instantaneous cross-matching.'
    },
    {
      id: 'dermatology',
      name: 'Dermatology & Mohs Surgery',
      icon: Sparkles,
      challenge: 'Biopsy vs excision bundling, multiple lesion repair calculation denials, and cosmetic vs medically necessary disputes.',
      solution: 'Pathology report cross-referencing and automated photographic documentation submission.'
    },
    {
      id: 'urology',
      name: 'Urology & Men\'s Health',
      icon: Syringe,
      challenge: 'In-office cystoscopy and ultrasound bundling, prior authorizations for prostate procedures, and global surgery period claims.',
      solution: 'Automated global period lookups and instant appeal letter generation.'
    },
  ]

  return (
    <div className="w-full min-h-screen bg-[#0c0a09] text-white pt-28 pb-20">
      <div className="container max-w-6xl flex flex-col gap-16">
        
        {/* Header */}
        <div className="max-w-3xl flex flex-col gap-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#a39893]">
            Healthcare Specialties
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#fcf7f4]">
            Specialized RCM Intelligence for Every Clinical Field
          </h1>
          <p className="text-base sm:text-lg text-white/75 leading-relaxed">
            Generic billing algorithms fail when faced with specialty-specific nuances. Amperos adapts to the exact coding guidelines, payor rules, and documentation standards of your specialty.
          </p>
        </div>

        {/* Grid of Specialties */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specialtiesList.map((spec) => {
            const Icon = spec.icon
            return (
              <div
                key={spec.id}
                id={spec.id}
                className="rounded-2xl bg-[#141210] border border-white/10 p-8 flex flex-col justify-between shadow-xl scroll-mt-28"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-[#371506] text-amber-200">
                      <Icon className="size-5" />
                    </span>
                    <h2 className="text-2xl font-serif text-white">{spec.name}</h2>
                  </div>

                  <div className="space-y-4 text-sm mt-4">
                    <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-4">
                      <span className="text-xs font-semibold text-red-400 uppercase tracking-wider block mb-1">
                        Common Denial Bottlenecks
                      </span>
                      <p className="text-white/80 leading-relaxed">{spec.challenge}</p>
                    </div>

                    <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-4">
                      <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-1">
                        Amperos Solution
                      </span>
                      <p className="text-white/80 leading-relaxed">{spec.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex justify-between items-center">
                  <button
                    onClick={() => onRequestDemo ? onRequestDemo() : (window.location.href = '/request-a-demo')}
                    className="text-xs font-medium text-amber-200 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>Request {spec.name} Demo</span>
                    <ArrowRight className="size-3.5" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Banner */}
        <div className="rounded-2xl bg-[#141210] border border-white/10 p-8 sm:p-12 text-center flex flex-col items-center gap-6">
          <h2 className="text-2xl sm:text-3xl font-serif text-white">
            Don't see your specific medical sub-specialty?
          </h2>
          <p className="max-w-lg text-sm text-white/70">
            Amperos supports multi-specialty health groups and custom payor contracts. We can configure custom rule engines for your clinical protocols in days.
          </p>
          <button
            onClick={() => onRequestDemo ? onRequestDemo() : (window.location.href = '/request-a-demo')}
            className="rounded-lg bg-[#fff5f0] hover:bg-[#ffe8dc] px-6 py-3 text-sm font-semibold text-black transition-colors"
          >
            Speak with an RCM Architect
          </button>
        </div>

      </div>
    </div>
  )
}

