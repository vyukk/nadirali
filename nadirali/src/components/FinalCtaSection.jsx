import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Award, ShieldCheck, MapPin } from 'lucide-react'

export default function FinalCtaSection({ onRequestCatalog }) {
  return (
    <section data-section-theme="light" className="relative overflow-clip py-16 md:py-32 bg-[#fdfaf8] text-black">
      <div className="container flex flex-col gap-y-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 max-w-[1100px]">
          
          {/* Headline & CTAs */}
          <div className="flex flex-col gap-6 max-w-[680px]">
            <span className="text-xs font-mono uppercase tracking-widest text-[#371506]/70">
              Procurement & Custom Commissions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif leading-[1.12] text-[#371506]">
              Equip your band with India’s most celebrated brass
            </h2>
            <p className="text-base sm:text-lg text-black/75">
              From individual concert brass soloists to national military and police corps, we provide custom finishes, bespoke regimental engravings, and lifetime structural integrity.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onRequestCatalog ? onRequestCatalog() : (window.location.href = '/contact-us/')}
                className="group relative inline-flex items-center gap-2 justify-center cursor-pointer appearance-none overflow-hidden rounded-lg py-3 px-6 text-center whitespace-nowrap select-none transition-all duration-200 bg-[#371506] hover:bg-[#4d1e09] text-[#D4AF37] font-semibold text-[15px] shadow-sm active:scale-[0.98]"
              >
                <span>Request Official Catalog & Price List</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </button>

              <Link
                to="/contact-us/"
                className="group relative inline-flex items-center gap-2 justify-center cursor-pointer appearance-none overflow-hidden rounded-lg py-3 px-6 text-center whitespace-nowrap select-none transition-all duration-200 bg-stone-200/50 hover:bg-stone-200 text-[#371506] border border-stone-300 font-medium text-[15px] active:scale-[0.98]"
              >
                <MapPin className="size-4" />
                <span>Visit Meerut Workshop</span>
              </Link>
            </div>
          </div>

          {/* Heritage Certification Card */}
          <div className="flex flex-col gap-4 rounded-2xl bg-white border border-stone-200/80 p-6 sm:p-8 shadow-sm lg:w-[340px]">
            <span className="text-xs font-mono uppercase tracking-wider text-[#371506]/70">
              Official Certifications
            </span>
            <div className="flex items-center gap-4 py-2 border-y border-stone-100">
              <img
                src="/assets/nadir-logo-white-1.png"
                alt="Nadir Ali Crest"
                className="h-12 w-auto object-contain filter invert"
              />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-sm text-[#371506]">Government of India</span>
                <span className="text-xs text-[#D4AF37] font-mono font-medium">GI TAG REGISTRATION</span>
              </div>
            </div>
            <p className="text-xs text-black/60 leading-relaxed">
              Exporting to 150+ sovereign armed forces worldwide. Handcrafted since 1885 at Jali Kothi, Meerut, Uttar Pradesh, India.
            </p>
          </div>

        </div>

        {/* Subtle separator divider */}
        <div className="mx-auto h-px w-full bg-gradient-to-r from-transparent via-[#DBCCC5]/50 to-transparent pt-8"></div>
      </div>
    </section>
  )
}
