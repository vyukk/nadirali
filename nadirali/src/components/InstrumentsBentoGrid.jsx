import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Award } from 'lucide-react'

export default function InstrumentsBentoGrid() {
  return (
    <section data-section-theme="light" className="relative overflow-clip py-16 md:py-28 bg-[#fdfaf8] text-black">
      <div className="container flex flex-col gap-y-12 md:gap-y-16">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-[680px] mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-[#371506]/70 mb-2">
            The Instrument Catalog
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif leading-[1.15] text-[#371506]">
            Instruments organized by acoustic power & ensemble discipline
          </h2>
          <p className="mt-4 text-base sm:text-lg text-black/70">
            From the crisp ceremonial calls of the Indian Army to symphonic wind concertos, explore our master categories.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="flex flex-col gap-6">
          
          {/* Top Bento Card: The GI-Tagged Bugle (Full Width) */}
          <article className="relative flex flex-col lg:flex-row lg:items-stretch overflow-hidden rounded-2xl bg-white border border-stone-200/80 shadow-md">
            
            {/* Left Content */}
            <div className="flex w-full lg:max-w-[480px] shrink-0 flex-col justify-center p-8 sm:p-12">
              <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#371506] mb-2 font-medium">
                <Award className="size-4 text-[#D4AF37]" />
                <span>Geographical Indication Protected</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#371506] mb-3">
                The Sovereign Meerut Bugle
              </h3>
              <p className="text-base sm:text-lg text-black/70 leading-relaxed mb-6">
                Official GI Tag recognition awarded by the Government of India. Celebrated for its cutting clarity, hand-spun bell flare, and unyielding military durability.
              </p>
              <div>
                <Link
                  to="/product-category/bugle/"
                  className="group inline-flex items-center gap-2 rounded-lg bg-[#371506] px-5 py-2.5 text-sm font-semibold text-[#D4AF37] hover:bg-[#4d1e09] transition-colors"
                >
                  <span>Explore Bugle Specifications</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Photo */}
            <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-[#fdfaf8] p-6 lg:p-8">
              <img
                src="/assets/nadir-ali-bugle-gi-tagged-indian-government.jpg"
                alt="GI Tagged Meerut Bugle"
                className="max-h-[380px] w-auto max-w-full object-contain rounded-xl shadow-sm"
                loading="lazy"
              />
            </div>

            {/* Paper Tear Decorative Graphic */}
            <img
              src="/images/papertears-top-right-card.png"
              alt="Decorative tear"
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-0 z-10 w-[min(100%,200px)] lg:w-[260px] select-none"
              loading="lazy"
            />
          </article>

          {/* Bottom 2 Bento Cards (Grid 2-col) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 2: Concert Trumpets & Cornets */}
            <article className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-stone-200/80 shadow-md transition-all hover:shadow-lg">
              <div className="relative flex items-center justify-center bg-[#fdfaf8] p-6 sm:p-8 min-h-[260px] border-b border-stone-100">
                <img
                  src="/assets/faez-aftab-nadir-ali-and-company.jpg"
                  alt="Trumpets & Cornets"
                  className="max-h-[240px] w-auto max-w-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-8">
                <span className="text-xs font-mono uppercase tracking-wider text-[#371506]/60 mb-1 block">
                  Concert Grade Brass
                </span>
                <h3 className="text-2xl font-serif text-[#371506] mb-2">
                  Trumpets & Cornets
                </h3>
                <p className="text-base text-black/70 leading-relaxed mb-4">
                  Built with hand-lapped monel valves, nickel sterling big bells, and water keys for chamber soloists and marching bands.
                </p>
                <Link
                  to="/product-category/trumpet/"
                  className="text-sm font-semibold text-[#371506] hover:text-[#D4AF37] flex items-center gap-1 transition-colors"
                >
                  <span>View Trumpet Models</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </article>

            {/* Card 3: Heavy Marching Brass & Dhols */}
            <article className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-stone-200/80 shadow-md transition-all hover:shadow-lg">
              <div className="relative flex items-center justify-center bg-[#fdfaf8] p-6 sm:p-8 min-h-[260px] border-b border-stone-100">
                <img
                  src="/assets/nadir-ali-official-statement.jpg"
                  alt="Euphoniums and Dhols"
                  className="max-h-[240px] w-auto max-w-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-8">
                <span className="text-xs font-mono uppercase tracking-wider text-[#371506]/60 mb-1 block">
                  Low Brass & Percussion
                </span>
                <h3 className="text-2xl font-serif text-[#371506] mb-2">
                  Euphoniums, Horns & Dhols
                </h3>
                <p className="text-base text-black/70 leading-relaxed mb-4">
                  Rich harmonic floor provided by compensating euphoniums, marching french horns, and heavy-duty 17″ & 12″ Thap Dhols.
                </p>
                <Link
                  to="/product-category/euphonium/"
                  className="text-sm font-semibold text-[#371506] hover:text-[#D4AF37] flex items-center gap-1 transition-colors"
                >
                  <span>View Low Brass & Dhols</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </article>

          </div>

        </div>

      </div>
    </section>
  )
}

