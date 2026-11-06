import { Link } from 'react-router-dom'
import { ArrowRight, Award } from 'lucide-react'

export default function HeritageTestimonial() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f5f1ea] bg-gradient-to-b from-[#f5f1ea] to-white py-16 md:py-28">
      <div className="container flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        
        {/* Left Testimonial Content */}
        <div className="flex w-full flex-col justify-between lg:w-1/2 lg:max-w-[580px]">
          
          <div className="flex items-center gap-2 mb-6">
            <span className="flex size-6 items-center justify-center rounded-full bg-[#c89524] text-[#17120e]">
              <Award className="size-3.5" />
            </span>
            <span className="text-xs uppercase font-mono tracking-widest text-[#4c4037] font-medium">
              Leadership Perspective • Meerut
            </span>
          </div>

          <div className="flex flex-col gap-8">
            {/* Emblem */}
            <div className="h-10 max-w-[240px]">
              <img
                src="/assets/nadir-motto.png"
                alt="Nadir Ali Emblem"
                className="h-full w-auto object-contain filter"
              />
            </div>

            {/* Blockquote */}
            <blockquote className="text-2xl sm:text-3xl lg:text-[34px] font-serif leading-[1.2] text-[#181411]">
              "It all started in 1885 when Ali, a musician in the British Army, and his cousin Imam Baksh began crafting instruments at Jali Kothi. Today, every cut, fold, and polish honors their uncompromising standards."
            </blockquote>

            {/* Signature & Title */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="font-['rollerscript',cursive] text-3xl sm:text-4xl text-[#9a6b13] -rotate-6 inline-block">
                  Faez
                </span>
                <span className="font-['rollerscript',cursive] text-3xl sm:text-4xl text-[#9a6b13] -rotate-6 inline-block ml-1">
                  Aftab
                </span>
              </div>
              <span className="text-sm sm:text-base text-[#4c4037] border-l border-[#9a6b13]/40 pl-4">
                Managing Director, Nadir Ali & Co.
              </span>
            </div>

            {/* Read Story Link */}
            <div className="pt-2">
              <Link
                to="/about-us/"
                className="group inline-flex items-center gap-2 rounded-lg border border-[#241c16] bg-[#241c16] px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-[#4a3828] hover:border-[#4a3828]"
              >
                <span>Read Faez Aftab's full biography</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>
        </div>

        {/* Right Headshot / Portrait Image */}
        <div className="w-full lg:w-1/2 lg:max-w-[540px]">
          <div className="relative aspect-[4/4.5] w-full overflow-hidden rounded-2xl bg-[#e6ded2] shadow-xl border border-[#c7b9a7]">
            <img
              src="/assets/faez-aftab-nadir-ali-and-company.jpg"
              alt="Faez Aftab with handcrafted trumpet"
              className="h-full w-full object-cover object-top"
              loading="lazy"
            />
            {/* Halftone texture overlay */}
            <div
              className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-25"
              style={{
                backgroundImage: 'url(/images/halftone-light.png)',
                backgroundRepeat: 'repeat',
                backgroundSize: '8px 8px'
              }}
            ></div>
          </div>
        </div>

      </div>
    </section>
  )
}

