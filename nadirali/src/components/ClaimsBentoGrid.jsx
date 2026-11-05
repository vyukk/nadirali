import React from 'react'

export default function ClaimsBentoGrid() {
  return (
    <section data-section-theme="light" className="relative overflow-clip py-16 md:py-28 bg-[#fdfaf8] text-black">
      <div className="container flex flex-col gap-y-12 md:gap-y-16">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-[640px] mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif leading-[1.15] text-[#371506]">
            Where claims get organized, prioritized, and progressed
          </h2>
          <p className="mt-4 text-base sm:text-lg text-black/70">
            A unified intelligence platform that surfaces insights, prevents revenue leakage, and automates high-volume collections.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="flex flex-col gap-6">
          
          {/* Top Bento Card: Intelligence & Insights (Full Width) */}
          <article className="relative flex flex-col lg:flex-row lg:items-stretch overflow-hidden rounded-2xl bg-white border border-stone-200/80 shadow-md">
            
            {/* Left Content */}
            <div className="flex w-full lg:max-w-[460px] shrink-0 flex-col justify-center p-8 sm:p-12">
              <span className="text-xs font-mono uppercase tracking-wider text-[#371506]/60 mb-2">
                Predictive Analytics
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#371506] mb-3">
                Intelligence & insights
              </h3>
              <p className="text-base sm:text-lg text-black/70 leading-relaxed">
                Analytics identify patterns across payors, denials, and workflows to help teams uncover root causes, improve processes, and recover more revenue.
              </p>
            </div>

            {/* Right Graphic */}
            <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-[#fdfaf8] p-6 lg:p-8">
              <img
                src="/local-pages/home/images/intelligence-insights.svg"
                alt="Intelligence & insights"
                className="max-h-[380px] w-auto max-w-full object-contain"
                loading="lazy"
              />
            </div>

            {/* Paper Tear Decorative Graphic */}
            <img
              src="/images/papertears-top-right-card.png"
              alt="Paper tear decorative element"
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-0 z-10 w-[min(100%,220px)] lg:w-[280px] select-none"
              loading="lazy"
            />
          </article>

          {/* Bottom 2 Bento Cards (Grid 2-col) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 2: Structured workqueues */}
            <article className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-stone-200/80 shadow-md transition-all hover:shadow-lg">
              <div className="relative flex items-center justify-center bg-[#fdfaf8] p-6 sm:p-8 min-h-[260px] border-b border-stone-100">
                <img
                  src="/local-pages/home/images/structured-workqueues.svg"
                  alt="Structured workqueues"
                  className="max-h-[240px] w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-8">
                <span className="text-xs font-mono uppercase tracking-wider text-[#371506]/60 mb-1 block">
                  Workflow Optimization
                </span>
                <h3 className="text-2xl font-serif text-[#371506] mb-2">
                  Structured workqueues
                </h3>
                <p className="text-base text-black/70 leading-relaxed">
                  Claims are automatically categorized and prioritized so the highest-impact work gets attention first.
                </p>
              </div>
            </article>

            {/* Card 3: Unified financial data */}
            <article className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-stone-200/80 shadow-md transition-all hover:shadow-lg">
              <div className="relative flex items-center justify-center bg-[#fdfaf8] p-6 sm:p-8 min-h-[260px] border-b border-stone-100">
                <img
                  src="/local-pages/home/images/unified-financial-data.svg"
                  alt="Unified financial data"
                  className="max-h-[240px] w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-8">
                <span className="text-xs font-mono uppercase tracking-wider text-[#371506]/60 mb-1 block">
                  Single Source of Truth
                </span>
                <h3 className="text-2xl font-serif text-[#371506] mb-2">
                  Unified financial data
                </h3>
                <p className="text-base text-black/70 leading-relaxed">
                  Amperos connects claims, payor interactions, and collections activity into a single system.
                </p>
              </div>
            </article>

          </div>

        </div>

      </div>
    </section>
  )
}

