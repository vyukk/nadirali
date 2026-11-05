import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { products, asset } from '../data/siteData'
import { Award, ArrowRight, CheckCircle2, ShieldCheck, Music } from 'lucide-react'
import InquireModal from './InquireModal'

export default function ProductCategory({ slug }) {
  const category = products[slug] || products.bugle
  const [selectedItem, setSelectedItem] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  const handleInquire = (item) => {
    setSelectedItem(item)
    setModalOpen(true)
  }

  const categoryDetails = {
    bugle: {
      tagline: 'The official Government of India Geographical Indication (GI) certified fanfare horn.',
      specs: 'Pure Copper & Hand-Spun Brass Bell • Key of Bb • Standard Regimental Military Taper'
    },
    trumpet: {
      tagline: 'Concert & ceremonial trumpets engineered for brilliance, projection, and quick piston action.',
      specs: 'Nickel Sterling Big Bell • Monel Pistons • Laser-Tuned A=440Hz Concert Pitch'
    },
    clarinet: {
      tagline: 'Precision woodwind instruments crafted for warmth, balance, and flexible dynamic range.',
      specs: 'Boehm 17-Key System • Rico & Vandoren Certified Reeds • Nickel Silver Keywork'
    },
    euphonium: {
      tagline: 'Deep, rich low-brass resonance designed for brass band formations and soloists.',
      specs: 'Compensating 3/4 Valve System • Hand-Beaten Dual Bell • Heavy-Gauge Tubing'
    },
    dhols: {
      tagline: 'High-impact military and ceremonial marching percussion built for durability in all weather.',
      specs: '17″ & 12″ Thap Dhols • P.T. Marching Snare • Genuine Seasoned Wood & Heavy Tension Lugs'
    },
    bags: {
      tagline: 'Custom protective flight gig bags designed specifically for Nadir Ali brass instruments.',
      specs: 'High-Density Foam Padding • Water-Resistant 1000D Cordura • Heavy-Duty Metal Hardware'
    },
    others: {
      tagline: 'Specialty brass accessories, French horns, pocket cornets, and marching ensembles.',
      specs: 'Handcrafted to Regimental Specifications • Custom Engraving Available'
    }
  }

  const details = categoryDetails[slug] || categoryDetails.bugle

  return (
    <div className="w-full min-h-screen bg-[#0c0a09] text-white pt-28 pb-24">
      <div className="container max-w-6xl flex flex-col gap-12">
        
        {/* Breadcrumb & Header */}
        <div className="flex flex-col gap-4 border-b border-white/10 pb-8">
          <div className="flex items-center gap-2 text-xs text-white/50 font-mono">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#D4AF37]">Instruments</span>
            <span>/</span>
            <span className="text-white capitalize">{category.title}</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl sm:text-5xl font-serif text-[#fcf7f4]">
                {category.title}
              </h1>
              <p className="text-sm sm:text-base text-white/70 max-w-xl mt-2 leading-relaxed">
                {details.tagline}
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#371506] px-4 py-1.5 text-xs text-[#D4AF37] w-max">
              <Award className="size-3.5" />
              <span>Handcrafted in Meerut</span>
            </div>
          </div>
        </div>

        {/* Layout: Sidebar + Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Sidebar */}
          <aside className="lg:col-span-3 rounded-2xl bg-[#141210] border border-white/10 p-6 flex flex-col gap-6 shadow-xl">
            <h3 className="font-serif text-lg text-white border-b border-white/10 pb-3">
              Instrument Range
            </h3>
            <div className="flex flex-col gap-1.5 text-sm">
              {Object.entries(products).map(([k, v]) => (
                <Link
                  key={k}
                  to={`/product-category/${k}/`}
                  className={`px-3 py-2 rounded-lg transition-colors capitalize ${
                    k === slug
                      ? 'bg-[#371506] text-[#D4AF37] font-semibold'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {v.title}
                </Link>
              ))}
            </div>

            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-xs text-white/60 space-y-2">
              <span className="font-medium text-white block">Need custom specifications?</span>
              <p>We supply custom finishes, engravings, and bulk outfits for defense corps and music academies.</p>
              <button
                onClick={() => handleInquire(category.title)}
                className="text-[#D4AF37] hover:underline font-medium block pt-1"
              >
                Inquire directly →
              </button>
            </div>
          </aside>

          {/* Product Cards Grid */}
          <div className="lg:col-span-9 flex flex-col gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {category.items.map((item) => (
                <article
                  key={item}
                  className="rounded-2xl bg-[#141210] border border-white/10 overflow-hidden flex flex-col justify-between shadow-xl transition-all duration-300 hover:border-[#D4AF37]/50 hover:bg-white/[0.03] group"
                >
                  {/* Photo container */}
                  <div className="relative aspect-[4/3] bg-black/40 flex items-center justify-center p-6 border-b border-white/10 overflow-hidden">
                    <img
                      src={asset(category.image)}
                      alt={item}
                      className="max-h-full max-w-full object-contain filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="rounded bg-black/60 backdrop-blur-md px-2 py-0.5 text-[10px] font-mono text-[#D4AF37] border border-white/10">
                        A=440Hz
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col gap-3 flex-1 justify-between">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-white/50">
                        {category.title}
                      </span>
                      <h2 className="text-lg font-serif text-white group-hover:text-amber-200 transition-colors mt-0.5">
                        {item}
                      </h2>
                      <p className="text-xs text-white/60 mt-1 line-clamp-2">
                        {details.specs}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <span className="text-xs text-[#D4AF37] font-mono">
                        Hand-Spun Brass
                      </span>
                      <button
                        onClick={() => handleInquire(item)}
                        className="rounded-lg bg-[#371506] hover:bg-[#4d1e09] px-3.5 py-1.5 text-xs font-semibold text-[#D4AF37] border border-[#D4AF37]/30 transition-colors cursor-pointer"
                      >
                        Inquire
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom Guarantee Banner */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="size-6 text-[#D4AF37] shrink-0" />
                <div>
                  <h4 className="text-sm font-medium text-white">Direct Meerut Foundry Authenticity Guarantee</h4>
                  <p className="text-xs text-white/60">Every instrument ships with embossed maker’s stamp and verified pitch tuning certificate.</p>
                </div>
              </div>
              <button
                onClick={() => handleInquire(`${category.title} Catalog`)}
                className="rounded-lg bg-[#D4AF37] px-4 py-2 text-xs font-semibold text-black hover:bg-[#c49f27] transition-colors whitespace-nowrap"
              >
                Request Full Price List
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Interactive Inquiry Modal */}
      <InquireModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultProduct={selectedItem || category.title}
      />
    </div>
  )
}
