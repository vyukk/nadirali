import React, { useState } from 'react'
import { Database, Filter, PlayCircle, DollarSign, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    num: '01.',
    id: 'Connect',
    title: 'Connect',
    description: 'Integrate Amperos with your existing practice management and EHR systems.',
    icon: Database,
    preview: {
      title: 'EHR Two-Way Sync',
      badge: 'Active Connection',
      points: [
        'Automated 837/835 EDI ingestion',
        'Direct API integration with Epic, Athena, eCW, and NextGen',
        'Real-time payor clearinghouse status sync'
      ],
      codeSnippet: `// EHR Sync Stream
{
  "system": "Epic Systems / Athena",
  "status": "Connected (EDI 835/837)",
  "sync_rate": "Every 15 mins",
  "active_workqueue_claims": 1420
}`
    }
  },
  {
    num: '02.',
    id: 'Prioritize',
    title: 'Prioritize',
    description: 'Claims are automatically categorized and prioritized so the highest-impact work gets attention first.',
    icon: Filter,
    preview: {
      title: 'Dynamic Priority Matrix',
      badge: 'Smart Triage',
      points: [
        'Scored by collectability, dollar value, and filing deadline',
        'Grouped by denial root-cause codes (CO-16, PR-204, CO-50)',
        'Payor routing based on historical payor turnaround time'
      ],
      codeSnippet: `// Priority Engine
Claim #89201 -> Score: 98/100 [HIGH PRIORITY]
• Value: $14,250.00
• Filing Deadline: 12 days remaining
• Payor: BCBS (Expected Win: 89%)`
    }
  },
  {
    num: '03.',
    id: 'Work',
    title: 'Work',
    description: 'Autonomous AI agents and experienced billing specialists execute payor workflows and submit appeals.',
    icon: PlayCircle,
    preview: {
      title: 'Agentic Execution Engine',
      badge: 'In Progress',
      points: [
        'AI agents execute routine status queries and portal submissions',
        'Clinical RCM experts review high-complexity level 2 appeals',
        'All supporting documentation attached automatically'
      ],
      codeSnippet: `// Agent Action Log
[14:02:11] Logged into Availity portal
[14:02:14] Retrieved remittance voucher
[14:02:19] Generated clinical appeal packet
[14:02:22] Submitted electronic reconsideration`
    }
  },
  {
    num: '04.',
    id: 'Recover',
    title: 'Recover',
    description: 'Claims get paid faster and denied revenue is successfully captured.',
    icon: DollarSign,
    preview: {
      title: 'Cash Realization & Posting',
      badge: 'Payment Received',
      points: [
        'Average days in AR reduced by 40%',
        'Auto-posted into practice management system',
        'End-to-end transparent accounting audit trail'
      ],
      codeSnippet: `// Settlement Summary
Claim #89201 -> Status: RESOLVED & PAID
• Original Disputed Amount: $14,250.00
• Recovered Amount: $13,950.00 (97.9%)
• Total Days to Resolution: 6 days`
    }
  }
]

export default function MovingClaimsWorkflow() {
  const [activeStep, setActiveStep] = useState(0)
  const current = steps[activeStep]
  const Icon = current.icon

  return (
    <section data-section-theme="light" data-header-theme="dark" className="relative overflow-clip py-16 md:py-28 bg-[#fdfaf8]">
      <div className="container flex flex-col gap-y-0">
        
        {/* Dark Container Shell */}
        <div className="w-full overflow-hidden rounded-2xl bg-black p-6 md:p-12 text-white shadow-2xl border border-white/10">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch lg:justify-between lg:gap-12">
            
            {/* Left Steps Accordion */}
            <div className="flex w-full flex-col justify-between lg:max-w-[480px]">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif text-[#fcf7f4] leading-tight mb-8">
                  What if claims actually kept moving?
                </h2>

                <div className="flex flex-col gap-4">
                  {steps.map((step, idx) => (
                    <div
                      key={step.id}
                      className={`cursor-pointer rounded-xl p-4 transition-all duration-300 border ${
                        activeStep === idx
                          ? 'bg-white/10 border-white/20'
                          : 'bg-transparent border-transparent hover:bg-white/5'
                      }`}
                      onClick={() => setActiveStep(idx)}
                    >
                      <div className="flex items-center gap-4">
                        <span className={`text-sm font-mono tabular-nums ${activeStep === idx ? 'text-white' : 'text-white/40'}`}>
                          {step.num}
                        </span>
                        <span className={`text-xl sm:text-2xl font-serif ${activeStep === idx ? 'text-white' : 'text-white/60'}`}>
                          {step.title}
                        </span>
                      </div>

                      {activeStep === idx && (
                        <div className="mt-3 pl-8 animate-fadeIn">
                          <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Visual Console Simulation */}
            <div className="relative aspect-[680/600] w-full min-h-[340px] shrink-0 overflow-hidden rounded-xl bg-[#141210] p-6 lg:w-[min(100%,600px)] border border-white/10 flex flex-col justify-between">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <Icon className="size-5 text-amber-200" />
                  <span className="text-sm font-medium text-white">{current.preview.title}</span>
                </div>
                <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-mono text-emerald-400 border border-emerald-500/30">
                  {current.preview.badge}
                </span>
              </div>

              {/* Points */}
              <div className="my-4 space-y-2">
                {current.preview.points.map((pt, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-white/80">
                    <CheckCircle2 className="size-4 shrink-0 text-emerald-400" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              {/* Code Snippet / Terminal log */}
              <div className="rounded-lg bg-black/60 p-4 font-mono text-xs text-white/90 border border-white/5 overflow-x-auto">
                <pre className="whitespace-pre-wrap leading-relaxed text-emerald-300">
                  {current.preview.codeSnippet}
                </pre>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

