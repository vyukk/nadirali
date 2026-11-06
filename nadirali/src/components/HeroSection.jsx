import { Link } from 'react-router-dom'
import { ArrowRight, Award } from 'lucide-react'
import heroInstruments from '../data/heroData'

export default function HeroSection() {
  const current = heroInstruments[0]

  return (
    <section data-section-theme="dark" className="relative overflow-clip pt-0 pb-0 bg-[#0c0a09]">
      <div className="container-wide flex flex-col gap-y-0 transition-all duration-275">
        <article className="relative w-full">
          <div className="relative mx-auto flex w-full flex-col overflow-visible rounded-none md:block md:min-h-[580px] md:overflow-hidden md:rounded-2xl lg:min-h-[660px] xl:min-h-[720px] transition-all duration-300 border border-white/[0.06] shadow-2xl">
            
            {/* Left Content Container */}
            <div className="container hero-content relative z-10 order-1 flex min-w-0 flex-col justify-center bg-transparent pt-10 pb-6 md:absolute md:inset-0 md:order-0 md:py-0">
              <div className="flex w-full min-w-0 max-w-[620px] flex-col gap-6 md:max-w-[460px] lg:max-w-[620px] lg:gap-8">
                
                {/* GI Tag Eyebrow Banner */}
                <Link
                  to="/news/"
                  className="group inline-flex w-full min-w-0 max-w-full items-center gap-3 rounded-md outline-offset-4 transition-all hover:opacity-95"
                >
                  <span className="inline-flex gap-1.5 items-center justify-center rounded-md border px-2.5 py-1 border-[#D4AF37]/40 bg-[#371506]/50 text-[#D4AF37] text-xs font-medium tracking-wide uppercase">
                    <Award className="size-3.5" />
                    <span>GI Tagged</span>
                  </span>
                  <div
                    role="marquee"
                    aria-label="Government of India Recognizes Meerut Bugle with Official Geographical Indication (GI) Tag"
                    className="relative isolate min-h-[1.25em] overflow-hidden w-0 min-w-0 flex-1"
                  >
                    <span className="whitespace-nowrap text-white/90 text-xs sm:text-sm tracking-[-0.01em] group-hover:text-white transition-colors">
                      A Timeless Sound Recognized: Meerut Bugle Earns Geographical Indication (GI) Tag
                    </span>
                  </div>
                  <ArrowRight className="size-3.5 shrink-0 text-white/70 group-hover:translate-x-1 group-hover:text-[#D4AF37] transition-all" />
                </Link>

                {/* Hero Title & Description */}
                <div className="flex flex-col gap-4 lg:gap-6">
                  <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-normal leading-[1.08] tracking-[-0.02em] text-[#fcf7f4] font-serif">
                    A new standard for handcrafted brass instruments
                  </h1>
                  <p className="text-base sm:text-lg lg:text-[19px] font-normal leading-relaxed text-white/80 max-w-[530px]">
                    For over 140 years, Nadir Ali & Co. has equipped military corps, royal ceremonial bands, and concert soloists worldwide with uncompromising acoustics and sovereign craftsmanship.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    to="/product-category/trumpet/"
                    className="hero-primary-cta group relative inline-flex items-center gap-2 justify-center cursor-pointer appearance-none overflow-hidden rounded-lg py-3 px-5 text-center whitespace-nowrap select-none transition-all duration-200 bg-[#D4AF37] hover:bg-[#c49f27] active:scale-[0.98] text-black font-semibold text-[14px] shadow-lg shadow-[#D4AF37]/15"
                  >
                    <span>Explore The Collection</span>
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>

                  <Link
                    to="/nadir-ali-2/"
                    className="hero-secondary-cta group relative inline-flex items-center gap-2 justify-center cursor-pointer appearance-none overflow-hidden rounded-lg py-3 px-5 text-center whitespace-nowrap select-none transition-all duration-200 bg-white/5 text-white border border-stone-200/30 hover:bg-[#371506] hover:border-[#D4AF37]/50 active:scale-[0.98] font-medium text-[14px]"
                  >
                    <span>Our 140-Year Heritage</span>
                  </Link>
                </div>

              </div>
            </div>

            {/* Right Side: High-Resolution Heritage Instrument Photography */}
            <div className="hidden relative z-0 order-2 w-screen max-w-[100vw] shrink-0 -translate-x-1/2 left-1/2 md:w-full md:max-w-none md:translate-x-0 max-md:-mt-4 md:absolute md:inset-0 md:order-0 md:h-full md:min-h-0">
              
              {/* Mobile top gradient */}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 z-2 h-32 bg-gradient-to-b from-black via-black/70 to-transparent md:hidden"
                aria-hidden="true"
              ></div>

              {/* Instrument Image with Smooth Fade */}
              <div className="relative z-0 isolate h-[min(28rem,60vh)] min-h-72 w-full overflow-hidden rounded-none md:absolute md:inset-0 md:h-full md:min-h-0">
                <img
                  src={current.src}
                  alt={current.title}
                  className="h-full w-full object-cover object-center md:object-right transition-all duration-700 filter brightness-90"
                />

                {/* Halftone texture overlay */}
                <div
                  className="pointer-events-none absolute inset-0 z-1 mix-blend-overlay opacity-60"
                  style={{
                    backgroundImage: 'url(/images/halftone-dark.png)',
                    backgroundRepeat: 'repeat',
                    backgroundSize: '8px 8px'
                  }}
                  aria-hidden="true"
                ></div>

                {/* Dark vignettes */}
                <div
                  className="pointer-events-none absolute inset-0 z-2 hidden bg-gradient-to-r from-[#0c0a09] via-[#0c0a09]/75 to-transparent to-60% md:block"
                  aria-hidden="true"
                ></div>
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-2 h-28 bg-gradient-to-t from-[#0c0a09] to-transparent"
                  aria-hidden="true"
                ></div>
              </div>

              {/* Floating Acoustic Specification Telemetry Console */}
              <div className="absolute right-6 bottom-8 z-10 hidden lg:block w-[340px] xl:w-[380px] rounded-2xl border border-[#D4AF37]/30 bg-[#141210]/90 p-5 shadow-2xl backdrop-blur-2xl animate-fadeIn">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="relative flex size-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                      <span className="relative inline-flex rounded-full size-2.5 bg-[#D4AF37]"></span>
                    </span>
                    <span className="text-[11px] font-mono text-[#D4AF37] font-semibold tracking-wide">
                      MASTER ACOUSTIC SPEC
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-white/50">
                    Handcrafted
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/60">Instrument:</span>
                    <span className="text-xs font-serif font-medium text-white">{current.title}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/60">Metallurgy:</span>
                    <span className="text-xs text-white/90">{current.material}</span>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs text-white/60">Pitch Certification:</span>
                    <span className="text-sm font-mono font-bold text-amber-200">{current.pitch}</span>
                  </div>
                </div>

                <div className="mt-3.5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px]">
                  <span className="text-amber-200 font-medium flex items-center gap-1">
                    <Award className="size-3" />
                    <span>{current.badge}</span>
                  </span>
                  <span className="text-white/50 truncate max-w-[160px]">{current.detail}</span>
                </div>
              </div>

            </div>

          </div>
        </article>
      </div>
    </section>
  )
}
