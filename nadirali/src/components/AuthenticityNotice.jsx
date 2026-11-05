import React from 'react'
import { Link } from 'react-router-dom'
import { ShieldAlert, Award, CheckCircle2, ArrowRight } from 'lucide-react'

export default function AuthenticityNotice() {
  return (
    <section data-section-theme="light" data-header-theme="dark" className="relative overflow-clip py-12 md:py-20 bg-[#fdfaf8]">
      <div className="container flex flex-col gap-y-0">
        
        {/* Dark Box Container */}
        <div className="relative overflow-hidden rounded-2xl bg-black px-6 py-10 sm:px-12 sm:py-16 text-white shadow-2xl border border-white/10">
          <div className="relative z-10 flex flex-col gap-8 md:gap-10">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 pb-6">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-red-500/20 text-red-400 border border-red-500/30">
                  <ShieldAlert className="size-5" />
                </span>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-red-400">
                    Official Trademark & GI Notice
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif text-[#fcf7f4]">
                    Protecting 140 Years of Sovereign Heritage
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#371506] px-4 py-1.5 text-xs text-[#D4AF37]">
                <Award className="size-4" />
                <span>GI Registration No. Confirmed</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-white/80">
              <div className="rounded-xl border border-white/10 bg-white/5 p-5 flex flex-col gap-2">
                <h3 className="font-serif text-base text-white font-medium flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-[#D4AF37]" />
                  <span>Embossed Maker’s Mark</span>
                </h3>
                <p className="text-xs text-white/60 leading-relaxed">
                  Every authentic horn is hand-stamped on the bell with “Nadir Ali & Co. Meerut (India)” alongside the registered GI seal.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-5 flex flex-col gap-2">
                <h3 className="font-serif text-base text-white font-medium flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-[#D4AF37]" />
                  <span>Serial & Hologram Verification</span>
                </h3>
                <p className="text-xs text-white/60 leading-relaxed">
                  Each instrument comes with an official certificate of authenticity signed by Managing Director Faez Aftab.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-5 flex flex-col gap-2">
                <h3 className="font-serif text-base text-white font-medium flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-[#D4AF37]" />
                  <span>Anti-Counterfeit Enforcement</span>
                </h3>
                <p className="text-xs text-white/60 leading-relaxed">
                  State police recently raided unauthorized counterfeit factories attempting to misuse the Nadir Ali brand in Meerut.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-4 text-xs text-white/50">
              <span>Always procure directly through our registered sales office or authorized defense supply distributors.</span>
              <Link to="/news/" className="text-[#D4AF37] hover:underline flex items-center gap-1 font-medium">
                <span>Read the official police statement</span>
                <ArrowRight className="size-3" />
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

