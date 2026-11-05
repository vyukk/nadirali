import React from 'react'
import { Link } from 'react-router-dom'
import { Award, Clock, Users, Globe2, ShieldCheck, ArrowRight, Building, CheckCircle2 } from 'lucide-react'

export default function AboutUsPage({ onRequestCatalog }) {
  const stats = [
    { label: 'Founding Year', value: '1885', desc: '140+ years of uninterrupted brass craftsmanship' },
    { label: 'Master Smiths', value: '80+', desc: 'Multi-generational artisans under one roof' },
    { label: 'Countries Supplied', value: '150+', desc: 'Defense bands and concert ensembles globally' },
    { label: 'Foundry Area', value: '4,500', desc: 'Square yards at historic Jali Kothi, Meerut' },
  ]

  const milestones = [
    {
      year: '1885',
      title: 'The Inception by Ali & Imam Baksh',
      desc: 'Ali, a distinguished musician in the British Army, partnered with his cousin Imam Baksh to import fine brass instruments to India, establishing the foundation of sovereign brass craftsmanship.'
    },
    {
      year: '1911',
      title: 'Foundry at Jali Kothi, Meerut',
      desc: 'The family initiated full-scale indigenous manufacturing at Jali Kothi (Kothi Atanas), developing in-house metallurgy, hand-spinning bell techniques, and precision valve lapping.'
    },
    {
      year: '1997',
      title: 'Boosey & Hawkes Joint Venture',
      desc: 'Nadir Ali partnered with legendary British instrument manufacturer Boosey & Hawkes, constructing a premier export unit in Gulaothi and supplying defense corps across 150 nations.'
    },
    {
      year: 'Present',
      title: 'Government of India GI Tag Recognition',
      desc: 'Under the leadership of Managing Director Faez Aftab, the Meerut Bugle was conferred the official Geographical Indication (GI) Tag, certifying Nadir Ali & Co. as an authentic national treasure.'
    }
  ]

  return (
    <div className="w-full min-h-screen bg-[#0c0a09] text-white pt-28 pb-24">
      <div className="container max-w-5xl flex flex-col gap-16">
        
        {/* Header */}
        <div className="max-w-3xl flex flex-col gap-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
            Our Heritage & Story
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#fcf7f4] leading-[1.1]">
            Music, made with history since 1885
          </h1>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
            From the barracks of the 19th-century British Army to the royal fanfare corps of Buckingham Palace, discover the story of India’s most celebrated brass instrument foundry.
          </p>
        </div>

        {/* 4 Big Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-[#141210] p-6 flex flex-col gap-1 shadow-lg">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#D4AF37]">
                {s.value}
              </span>
              <span className="text-sm font-medium text-white mt-1">{s.label}</span>
              <span className="text-xs text-white/50">{s.desc}</span>
            </div>
          ))}
        </div>

        {/* Lead Narrative with Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6 text-base sm:text-lg text-white/80 leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-serif text-white">
              The Jali Kothi Foundry Guild
            </h2>
            <p>
              The factory was named Nadir Ali & Co. and spans across 4,500 square yards in Meerut, employing over 80 master artisans. Every single stage—from shearing raw brass sheets to hammer-beating bells over iron mandrels, precision valve honing, soldering, silver electroplating, and velvet packing—is conducted by hand under our roof.
            </p>
            <p>
              In 1997, the company entered into an international joint venture with Boosey & Hawkes, a 150-year-old British institution, establishing a specialized export unit in Gulaothi. Through this network, Nadir Ali instruments were commissioned for the armies of approximately 150 countries.
            </p>
            <div className="rounded-xl border border-[#D4AF37]/30 bg-[#371506]/30 p-5 text-sm text-stone-200">
              <p className="font-serif italic text-base text-amber-100">
                "Our instruments have been supplied to the American President’s Band, the Fan Fare Trumpet Corps, Buckingham Palace, the King of Saudi Arabia, and the King of Jordan."
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="/assets/nadir-ali-official-statement.jpg"
              alt="Nadir Ali workshop and craftsmanship statement"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Managing Director Faez Aftab Section */}
        <div className="rounded-2xl border border-white/10 bg-[#141210] p-8 sm:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 relative aspect-[4/4.5] rounded-xl overflow-hidden border border-white/10">
              <img
                src="/assets/faez-aftab-nadir-ali-and-company.jpg"
                alt="Faez Aftab, Managing Director"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="lg:col-span-8 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="flex size-6 items-center justify-center rounded-full bg-[#371506] text-[#D4AF37]">
                  <Award className="size-3.5" />
                </span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
                  Managing Director Profile
                </span>
              </div>
              <h2 className="text-3xl font-serif text-white">Faez Aftab</h2>
              <p className="text-sm font-medium text-amber-200">Owner & Managing Director, Nadir Ali & Company</p>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                As part of the modern executive generation leading the historic brand, Faez Aftab has orchestrated comprehensive administrative modernizations, digitized workflows, and expanded direct exports to Europe, North America, and the Middle East.
              </p>
              <p className="text-sm text-white/70 leading-relaxed">
                Under his leadership, Nadir Ali & Co. has strengthened partnerships with the Indian Armed Forces, state police bands, paramilitary forces, and music conservatories worldwide while achieving official Geographical Indication (GI) protection.
              </p>
            </div>
          </div>
        </div>

        {/* Historical Timeline */}
        <div className="flex flex-col gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
              Chronicle of Excellence
            </span>
            <h2 className="text-3xl font-serif text-white mt-1">140 Years in the Making</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {milestones.map((m, idx) => (
              <div key={idx} className="rounded-xl border border-white/10 bg-white/[0.02] p-6 flex flex-col gap-2">
                <span className="font-mono text-xl font-bold text-[#D4AF37]">{m.year}</span>
                <h3 className="font-serif text-lg font-medium text-white">{m.title}</h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl bg-[#371506] p-8 sm:p-12 text-center flex flex-col items-center gap-6">
          <h2 className="text-2xl sm:text-3xl font-serif text-white max-w-lg">
            Experience the sovereign tone of Nadir Ali & Co.
          </h2>
          <button
            onClick={() => onRequestCatalog ? onRequestCatalog() : (window.location.href = '/contact-us/')}
            className="rounded-lg bg-[#D4AF37] hover:bg-[#c49f27] px-8 py-3.5 text-sm font-semibold text-black transition-colors"
          >
            Request Official Catalog & Procurement Spec
          </button>
        </div>

      </div>
    </div>
  )
}
