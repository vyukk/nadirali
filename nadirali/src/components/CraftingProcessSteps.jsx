import React, { useState } from 'react'
import { Hammer, Sparkles, Sliders, CheckCircle2, ShieldCheck, Flame } from 'lucide-react'

const steps = [
  {
    num: '01.',
    id: 'Alloy',
    title: 'Alloy Selection & Pattern Cut',
    description: 'High-tensile 70/30 resonance brass sheets sheared to historic millimeter patterns.',
    icon: Flame,
    preview: {
      title: 'Metallurgy & Shearing Protocol',
      badge: 'Step 1 • Raw Material',
      points: [
        'Pure 70% Copper / 30% Zinc acoustic resonance brass',
        'Hand-sheared against British-era iron templets',
        'Metallurgical grain integrity verified before bending'
      ],
      codeSnippet: `// Brass Gauge Specification
Alloy: CuZn30 (Acoustic Grade)
Tensile Strength: 380 N/mm²
Sheet Thickness: 0.60mm uniform
Inspection: Certified zero porosity`
    }
  },
  {
    num: '02.',
    id: 'Hammering',
    title: 'Hand-Hammering & Annealing',
    description: 'Beaten over steel mandrels and repeatedly fire-annealed for projection and harmonic depth.',
    icon: Hammer,
    preview: {
      title: 'Mandrel Forming & Thermal Tempering',
      badge: 'Step 2 • Forge Shaping',
      points: [
        'Over 2,000 hand-hammer strikes per bell flare',
        'Open-flame charcoal annealing releases crystal stress',
        'Seamless brazing seam hand-hammered invisible'
      ],
      codeSnippet: `// Anvil & Mandrel Log
Bell Diameter: 125mm / 4.92"
Annealing Temp: 580°C (Dull Cherry Red)
Hammer Density: 40 strikes / sq. cm
Acoustic Flare: True parabolic taper`
    }
  },
  {
    num: '03.',
    id: 'Lapping',
    title: 'Valve Honing & Hand Lapping',
    description: 'Monel pistons and slide tubes hand-lapped with micro-abrasives for airtight compression.',
    icon: Sliders,
    preview: {
      title: 'Piston Compression Matrix',
      badge: 'Step 3 • Precision Assembly',
      points: [
        'Airtight valve casing clearance within 0.015mm',
        'Micro-diamond paste hand-lapping for fast action',
        'Laser-aligned windway ports for smooth airflow'
      ],
      codeSnippet: `// Valve Tolerances
Piston Clearance: 0.012 - 0.018mm
Compression Test: 0.98 bar sustained
Spring Tension: 110g stainless phosphor bronze
Valve Guides: High-durability nylon/brass`
    }
  },
  {
    num: '04.',
    id: 'Voicing',
    title: 'Acoustic Voicing & Final Buff',
    description: 'Concert pitch laser tuning, mirror silver or gold lacquer plating, and regal packaging.',
    icon: Sparkles,
    preview: {
      title: 'Concert Tuning & Final Certification',
      badge: 'Step 4 • Master Inspection',
      points: [
        'Tested against Peterson digital stroboscopic tuner',
        'Concert pitch A=440Hz verified across full 3 octaves',
        'GI Tag seal embossed and dispatched in flight case'
      ],
      codeSnippet: `// Final Quality Inspection
Intonation Standard: A=440Hz ± 1 cent
Harmonic Spectrum: Full military overtone
Finish: Heavy Electroplate Silver / Mirror Gold
Inspector Seal: Meerut Jali Kothi Master Guild`
    }
  }
]

export default function CraftingProcessSteps() {
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
                <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] block mb-2">
                  The Foundry Guild
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif text-[#fcf7f4] leading-tight mb-8">
                  How an instrument takes breath: From raw sheet to sovereign sound
                </h2>

                <div className="flex flex-col gap-4">
                  {steps.map((step, idx) => (
                    <div
                      key={step.id}
                      className={`cursor-pointer rounded-xl p-4 transition-all duration-300 border ${
                        activeStep === idx
                          ? 'bg-white/10 border-[#D4AF37]/30'
                          : 'bg-transparent border-transparent hover:bg-white/5'
                      }`}
                      onClick={() => setActiveStep(idx)}
                    >
                      <div className="flex items-center gap-4">
                        <span className={`text-sm font-mono tabular-nums ${activeStep === idx ? 'text-[#D4AF37]' : 'text-white/40'}`}>
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

            {/* Right Visual Console */}
            <div className="relative aspect-[680/600] w-full min-h-[340px] shrink-0 overflow-hidden rounded-xl bg-[#141210] p-6 lg:w-[min(100%,600px)] border border-white/10 flex flex-col justify-between">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <Icon className="size-5 text-[#D4AF37]" />
                  <span className="text-sm font-medium text-white">{current.preview.title}</span>
                </div>
                <span className="rounded-full bg-[#371506] px-2.5 py-0.5 text-xs font-mono text-[#D4AF37] border border-[#D4AF37]/30">
                  {current.preview.badge}
                </span>
              </div>

              {/* Points */}
              <div className="my-4 space-y-2">
                {current.preview.points.map((pt, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-white/80">
                    <CheckCircle2 className="size-4 shrink-0 text-[#D4AF37]" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              {/* Code Snippet / Technical log */}
              <div className="rounded-lg bg-black/60 p-4 font-mono text-xs text-white/90 border border-white/5 overflow-x-auto">
                <pre className="whitespace-pre-wrap leading-relaxed text-amber-200">
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

