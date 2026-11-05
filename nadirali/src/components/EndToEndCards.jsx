import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight, ShieldCheck, Cpu, RefreshCw, Layers } from 'lucide-react'

export default function EndToEndCards() {
  const [activeTab, setActiveTab] = useState(0)

  const features = [
    {
      eyebrow: 'End-to-end insurance recovery',
      title: 'Outsource your insurance collections, from start to finish',
      description: 'Amperos manages the full insurance collections process, from follow-up to complex denials.',
      link: '/end-to-end-insurance-recovery',
      icon: Layers,
      preview: {
        title: 'Active Insurance Claims Pipeline',
        stats: [
          { label: 'Follow-ups Completed', val: '14,892', change: '+38% vs benchmark' },
          { label: 'Avg Resolution Time', val: '4.2 Days', change: '65% faster' },
          { label: 'Clean Claim Rate', val: '98.4%', change: 'Top quartile' }
        ],
        claims: [
          { id: 'CLM-84920', payor: 'UnitedHealthcare', service: 'Total Knee Arthroplasty', amount: '$4,850.00', status: 'Paid in Full', badge: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
          { id: 'CLM-84921', payor: 'Blue Cross Blue Shield', service: 'C-Section Delivery', amount: '$6,200.00', status: 'Appeal Accepted', badge: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
          { id: 'CLM-84922', payor: 'Aetna Medicare Adv.', service: 'Complex Spine Fusion', amount: '$12,400.00', status: 'Auto-Progressing', badge: 'bg-amber-500/20 text-amber-400 border-amber-500/30' }
        ]
      }
    },
    {
      eyebrow: 'First-touch automation',
      title: 'Offload repetitive payor workflows',
      description: 'Empower your team to focus on higher-value work by assigning Amperos to first-touch denials, resubmissions, and status checks.',
      link: '/end-to-end-insurance-recovery',
      icon: Cpu,
      preview: {
        title: 'Autonomous Payor Agent Queue',
        stats: [
          { label: 'Payor Portal Checks', val: '28,400/wk', change: 'Zero human touch' },
          { label: 'Auto-Resubmission', val: '99.1%', change: 'Same-day turnaround' },
          { label: 'Time Saved', val: '180 hrs/mo', change: 'Per billing specialist' }
        ],
        claims: [
          { id: 'AUT-1029', payor: 'Cigna Health', service: 'Eligibility Re-check', amount: '$1,840.00', status: 'Verified & Cleared', badge: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
          { id: 'AUT-1030', payor: 'Humana', service: 'Missing Modifier 25', amount: '$740.00', status: 'Corrected & Sent', badge: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
          { id: 'AUT-1031', payor: 'Medicare Part B', service: 'Timely Filing Check', amount: '$3,150.00', status: 'Confirmed Active', badge: 'bg-purple-500/20 text-purple-400 border-purple-500/30' }
        ]
      }
    },
    {
      eyebrow: 'Complex denial resolution',
      title: 'Bring expertise to the hardest claims',
      description: 'Resolve challenging denials and appeals with specialized RCM experts backed by AI intelligence.',
      link: '/end-to-end-insurance-recovery',
      icon: ShieldCheck,
      preview: {
        title: 'Specialized Denial Resolution Matrix',
        stats: [
          { label: 'Appeal Win Rate', val: '78.2%', change: 'Industry avg: 41%' },
          { label: 'Recovered From Dead AR', val: '$2.4M', change: 'Prior 90+ days' },
          { label: 'Clinical Review Time', val: '2.5 hrs', change: 'Down from 12 days' }
        ],
        claims: [
          { id: 'DNL-5591', payor: 'UHC Commercial', service: 'Prior Auth Dispute', amount: '$8,920.00', status: 'Clinical Appeal Won', badge: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
          { id: 'DNL-5592', payor: 'Anthem Blue Cross', service: 'Medical Necessity LOMN', amount: '$15,400.00', status: 'Level 2 Overturned', badge: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
          { id: 'DNL-5593', payor: 'Optum Health', service: 'Bundling Review (NCCI)', amount: '$4,280.00', status: 'Unbundled & Repaid', badge: 'bg-blue-500/20 text-blue-400 border-blue-500/30' }
        ]
      }
    },
    {
      eyebrow: 'Customizable workflows',
      title: 'Adapt collections to your organization',
      description: 'Tailor collections strategies to your practice\'s rules, payor contracts, and specialty requirements.',
      link: '/specialties',
      icon: RefreshCw,
      preview: {
        title: 'Custom Organization Rules Engine',
        stats: [
          { label: 'Practice Rules Loaded', val: '142 rules', change: 'Active in production' },
          { label: 'Payor Contract Rules', val: '38 payors', change: 'Fee schedules verified' },
          { label: 'Custom Routing', val: '100% Sync', change: 'Bidirectional EHR' }
        ],
        claims: [
          { id: 'RUL-701', payor: 'Kaiser Permanente', service: 'Orthopedic Rule #12', amount: 'Automated Tier 1', status: 'Active Policy', badge: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
          { id: 'RUL-702', payor: 'BCBS Highmark', service: 'High-Dollar Escalate >$10k', amount: 'Lead Specialist Alert', status: 'Active Policy', badge: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
          { id: 'RUL-703', payor: 'Medicaid State Plan', service: 'Expedited Filing Window', amount: '72hr Auto-Submit', status: 'Active Policy', badge: 'bg-blue-500/20 text-blue-400 border-blue-500/30' }
        ]
      }
    }
  ]

  return (
    <section id="features" className="relative overflow-clip pt-4 pb-16 md:pb-32 bg-[#0c0a09] text-white">
      <div className="container flex flex-col gap-y-12 md:gap-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4 max-w-[620px]">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.12] tracking-[-0.02em] text-white font-serif">
            Amperos works your claims end-to-end, from submission to payment
          </h2>
          <p className="text-base sm:text-lg text-white/70">
            Combine intelligent autonomous workflows with experienced RCM specialists to eliminate backlogs and unlock revenue.
          </p>
        </div>

        {/* Feature List */}
        <div className="flex flex-col divide-y divide-white/10">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div key={idx} className="flex flex-col py-10 lg:py-16 md:gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
                
                {/* Left Text */}
                <div className="flex w-full max-w-[480px] shrink-0 flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <span className="flex size-7 items-center justify-center rounded-md bg-[#371506] text-amber-200">
                      <Icon className="size-4" />
                    </span>
                    <p className="text-xs uppercase tracking-widest text-[#a39893] font-medium">
                      {feature.eyebrow}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <h3 className="text-2xl sm:text-3xl font-normal leading-[1.2] text-stone-100 font-serif">
                      {feature.title}
                    </h3>
                    <p className="text-base sm:text-lg text-stone-300/80 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="pt-2">
                      <Link
                        to={feature.link}
                        className="group inline-flex items-center gap-2 rounded-lg border border-stone-200/30 bg-[#371506]/30 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#371506] hover:border-[#371506]"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Right Interactive Mockup Card */}
                <div className="mt-8 lg:mt-0 relative min-h-[300px] w-full shrink-0 md:min-h-[380px] lg:max-w-[680px] lg:flex-1">
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#141210] p-6 shadow-2xl backdrop-blur-xl">
                    
                    {/* Header bar */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                      <div className="flex items-center gap-2">
                        <span className="size-3 rounded-full bg-red-500/80"></span>
                        <span className="size-3 rounded-full bg-amber-500/80"></span>
                        <span className="size-3 rounded-full bg-emerald-500/80"></span>
                        <span className="ml-2 text-xs font-mono text-white/50">{feature.preview.title}</span>
                      </div>
                      <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-400 border border-emerald-500/20">
                        Live System
                      </span>
                    </div>

                    {/* Quick Metric Tiles */}
                    <div className="grid grid-cols-3 gap-3 mb-5">
                      {feature.preview.stats.map((s, i) => (
                        <div key={i} className="rounded-lg border border-white/5 bg-white/3 p-3">
                          <p className="text-xs text-white/50">{s.label}</p>
                          <p className="text-lg font-semibold text-white mt-0.5">{s.val}</p>
                          <p className="text-[11px] text-emerald-400 font-medium">{s.change}</p>
                        </div>
                      ))}
                    </div>

                    {/* Claims List Table */}
                    <div className="space-y-2.5">
                      {feature.preview.claims.map((claim, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] p-3 transition-colors hover:bg-white/[0.05]"
                        >
                          <div className="flex flex-col">
                            <span className="text-xs font-mono text-white/40">{claim.id}</span>
                            <span className="text-sm font-medium text-white">{claim.service}</span>
                            <span className="text-xs text-white/60">{claim.payor}</span>
                          </div>
                          <div className="flex flex-col items-end gap-1.5">
                            <span className="text-sm font-semibold text-[#fcf7f4] font-mono">{claim.amount}</span>
                            <span className={`rounded-sm border px-2 py-0.5 text-[11px] font-medium ${claim.badge}`}>
                              {claim.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

