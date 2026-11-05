import React, { useState } from 'react'

const pillars = [
  {
    id: 'moving',
    title: 'Collections that keep moving',
    description: 'AI agents work claims end-to-end, while Amperos RCM experts provide oversight and guidance for resolution.',
    bgImage: '/local-pages/home/backgrounds/collections-that-keep-moving.png',
    svgGraphic: '/local-pages/home/images/collections-that-keep-moving.svg',
    tag: 'Continuous Progression',
  },
  {
    id: 'visibility',
    title: 'Complete visibility',
    description: 'Every interaction, update, and decision is captured and summarized so teams always know the status of every claim.',
    bgImage: '/local-pages/home/backgrounds/complete-visibility.png',
    svgGraphic: '/local-pages/home/images/complete-visibility.svg',
    tag: 'Auditable Audit Trail',
  },
  {
    id: 'consistency',
    title: 'Consistent execution',
    description: 'Workflows run reliably across claims, reducing the operational variability that often slows collections.',
    bgImage: '/local-pages/home/backgrounds/consistent-execution.png',
    svgGraphic: '/local-pages/home/images/consistent-execution.svg',
    tag: 'Standardized SOPs',
  },
  {
    id: 'ownership',
    title: 'Ownership through resolution',
    description: "Claims aren't just worked. They're pursued through to outcome, with clear accountability for payment.",
    bgImage: '/local-pages/home/backgrounds/ownership-through-resolution.png',
    svgGraphic: '/local-pages/home/images/ownership-through-resolution.svg',
    tag: 'Guaranteed Resolution',
  },
]

export default function AiNativePillars() {
  const [activeTab, setActiveTab] = useState(0)
  const current = pillars[activeTab]

  return (
    <section data-section-theme="light" className="relative overflow-clip py-16 md:py-32 bg-white text-black">
      <div className="container flex flex-col gap-10 md:gap-14">
        
        {/* Section Header */}
        <div className="max-w-[620px]">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.12] tracking-[-0.02em] text-[#371506] font-serif">
            AI-native collections backed by RCM experts
          </h2>
          <p className="mt-4 text-base sm:text-lg text-black/70">
            A dual-engine approach combining autonomous AI agents with seasoned billing professionals.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 border-b border-black/10 pb-4">
          {pillars.map((pillar, idx) => (
            <button
              key={pillar.id}
              onClick={() => setActiveTab(idx)}
              className={`rounded-xl p-3.5 text-left transition-all duration-200 cursor-pointer ${
                activeTab === idx
                  ? 'bg-[#371506] text-white shadow-md'
                  : 'bg-[#fdfaf8] text-black/80 hover:bg-stone-100'
              }`}
            >
              <span className="block text-xs font-mono uppercase tracking-wider opacity-60">
                0{idx + 1}
              </span>
              <span className="block text-sm sm:text-base font-medium mt-1">
                {pillar.title}
              </span>
            </button>
          ))}
        </div>

        {/* Active Pillar Featured Display */}
        <div className="relative overflow-hidden rounded-2xl border border-stone-200/80 bg-[#fdfaf8] p-6 lg:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Description Column */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <span className="inline-block w-max rounded-full border border-[#371506]/20 bg-[#371506]/5 px-3 py-1 text-xs font-medium text-[#371506]">
                {current.tag}
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#371506] leading-tight">
                {current.title}
              </h3>
              <p className="text-base sm:text-lg text-black/75 leading-relaxed">
                {current.description}
              </p>
            </div>

            {/* Visual Graphic Column */}
            <div className="lg:col-span-7 relative flex justify-center items-center rounded-xl bg-white p-6 shadow-sm border border-stone-200/60 overflow-hidden min-h-[300px]">
              {/* Background preview image if available */}
              <img
                src={current.svgGraphic}
                alt={current.title}
                className="max-h-[360px] w-auto max-w-full object-contain relative z-10 transition-transform duration-300"
                loading="lazy"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

