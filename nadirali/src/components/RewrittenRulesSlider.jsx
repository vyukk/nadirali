import React, { useState } from 'react'

const slides = [
  {
    id: 0,
    title: '140+ Years of Acoustic Heritage',
    stat: '1885',
    statLabel: 'Founding year by Ali & Imam Baksh in Meerut',
    description: 'More than a century of master brass crafting, supplying ceremonial resonance to global heads of state, military corps, and concert halls.',
    image: '/assets/nadir-ali-bugle-gi-tagged-indian-government.jpg',
  },
  {
    id: 1,
    title: 'Armies in 150+ Countries Supplied',
    stat: '150+',
    statLabel: 'Countries supplied with sovereign military brass',
    description: 'Through historic partnerships like Boosey & Hawkes and direct defense allocations, our instruments echo across continents.',
    image: '/assets/faez-aftab-nadir-ali-and-company.jpg',
  },
  {
    id: 2,
    title: 'Govt. of India GI Tagged Protection',
    stat: 'GI Tag',
    statLabel: 'Statutory Geographical Indication conferred on Meerut Bugle',
    description: 'Statutory recognition celebrating the authentic metallurgical methods and acoustic heritage of Nadir Ali & Company.',
    image: '/assets/nadir-ali-official-statement.jpg',
  },
  {
    id: 3,
    title: 'Laser-Verified Concert Standard',
    stat: '440Hz',
    statLabel: 'Universal concert pitch standard tuned for every horn',
    description: 'Each horn is tested with digital stroboscopic tuning before packing, ensuring immediate flawless blend in band formations.',
    image: '/assets/Untitledjj.jpeg',
  },
  {
    id: 4,
    title: '4,500 Sq. Yards Master Foundry',
    stat: '80+',
    statLabel: 'Generational craftsmen at the historic Jali Kothi workshop',
    description: 'From raw sheet brass shearing to final electroplating and velvet casing, every step is executed under one historic roof.',
    image: '/assets/Untitled.jpeg',
  },
]

export default function RewrittenRulesSlider() {
  const [activeSlide, setActiveSlide] = useState(0)
  const current = slides[activeSlide]

  return (
    <section data-section-theme="light" className="relative overflow-clip py-16 md:py-32 bg-[#fdfaf8] text-black">
      <div className="container flex flex-col gap-10 lg:gap-14">
        
        {/* Top Header & Stat Spotlight */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 border-b border-black/10 pb-10">
          <div className="max-w-[500px]">
            <span className="text-xs font-mono uppercase tracking-widest text-[#371506]/70">
              The Standard of Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.12] tracking-[-0.02em] text-[#371506] font-serif mt-1">
              The rules of brass making, perfected across generations
            </h2>
            <p className="mt-4 text-base sm:text-lg text-black/70">
              Modern defense bands and symphony orchestras trust Nadir Ali for warmth, volume, and unmatched structural durability.
            </p>
          </div>

          {/* Current Stat highlight */}
          <div className="flex items-center gap-6 rounded-2xl bg-white border border-stone-200/80 p-6 shadow-sm">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#371506] font-semibold tabular-nums">
              {current.stat}
            </span>
            <div className="max-w-[180px]">
              <p className="text-sm font-medium text-[#371506]/90 leading-snug">
                {current.statLabel}
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Tab Switcher */}
        <div className="flex flex-wrap items-center gap-2 border-b border-black/5 pb-4">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setActiveSlide(idx)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeSlide === idx
                  ? 'bg-[#371506] text-[#D4AF37] shadow-sm'
                  : 'bg-stone-200/40 text-black/70 hover:bg-stone-200 hover:text-black'
              }`}
            >
              <span>{slide.title}</span>
            </button>
          ))}
        </div>

        {/* Slide Display Area */}
        <div className="relative overflow-hidden rounded-2xl border border-stone-200/80 bg-white p-6 lg:p-10 shadow-md">
          <div className="grid min-w-0 grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Description */}
            <div className="min-w-0 lg:col-span-5 flex flex-col gap-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#371506]/60">
                Heritage Landmark 0{activeSlide + 1} of 05
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#371506] leading-tight">
                {current.title}
              </h3>
              <p className="text-base sm:text-lg text-black/75 leading-relaxed">
                {current.description}
              </p>
              
              <div className="mt-4 flex items-center gap-4">
                <div className="flex gap-1.5">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveSlide(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeSlide === i ? 'w-8 bg-[#371506]' : 'w-2 bg-stone-300'
                      }`}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Photo Preview */}
            <div className="min-w-0 w-full overflow-hidden lg:col-span-7 flex justify-center items-center rounded-xl bg-[#fdfaf8] p-4 sm:p-6 border border-stone-200/50">
              <img
                src={current.image}
                alt={current.title}
                className="block h-[min(420px,70vw)] w-full max-w-full rounded-lg object-contain shadow-sm transition-all duration-300"
                loading="lazy"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
