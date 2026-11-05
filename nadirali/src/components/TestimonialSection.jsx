import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const testimonials = [
  {
    logo: '/local-pages/home/logos/boulder-care-logo.svg',
    quote: '"Boulder Care is expanding rapidly to reach more patients who are in critical need. The reality is that we need to adapt our operations for scale in the modern age."',
    firstName: 'Mitzi',
    lastName: 'Yue',
    role: 'SVP of Finance, Boulder Care',
    link: '/blog/boulder-care-a-leading-telehealth-substance-use-disorder-platform-engages-amperos-to-automate-denial-and-collections-work-with-ai-agents',
    image: '/local-pages/home/people/mitzi-yue-headshot.png',
  },
  {
    logo: '/local-pages/home/logos/providence-anesthesiology-associates.svg',
    quote: '"Amperos allows our billing operations to run without the usual staffing bottlenecks. Claims move through payers with clarity and precision."',
    firstName: 'David',
    lastName: 'Reynolds',
    role: 'Chief Financial Officer, Providence Anesthesia',
    link: '/blog/case-study-providence-anesthesia',
    image: '/local-pages/home/people/mitzi-yue-headshot.png',
  }
]

export default function TestimonialSection() {
  const [activeIdx, setActiveIdx] = useState(0)
  const current = testimonials[activeIdx]

  return (
    <section className="relative w-full overflow-hidden bg-[#fdfaf8] bg-gradient-to-b from-[#fdfaf8] to-white py-16 md:py-28">
      <div className="container flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        
        {/* Left Testimonial Content */}
        <div className="flex w-full flex-col justify-between lg:w-1/2 lg:max-w-[580px]">
          
          {/* Pagination Indicators */}
          <div className="flex items-center gap-2 mb-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`cursor-pointer rounded-sm transition-all duration-300 h-1.5 ${
                  activeIdx === i ? 'w-6 bg-[#371506]' : 'w-2 bg-[#371506]/30'
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>

          <div className="flex flex-col gap-8">
            {/* Logo */}
            <div className="h-9 max-w-[220px]">
              <img
                src={current.logo}
                alt={current.role}
                className="h-full w-auto object-contain filter"
              />
            </div>

            {/* Blockquote */}
            <blockquote className="text-2xl sm:text-3xl lg:text-[34px] font-serif leading-[1.2] text-[#371506]">
              {current.quote}
            </blockquote>

            {/* Signature & Title */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="font-['rollerscript',cursive] text-3xl sm:text-4xl text-[#371506] -rotate-6 inline-block">
                  {current.firstName}
                </span>
                <span className="font-['rollerscript',cursive] text-3xl sm:text-4xl text-[#371506] -rotate-6 inline-block ml-1">
                  {current.lastName}
                </span>
              </div>
              <span className="text-sm sm:text-base text-[#371506]/70 border-l border-[#371506]/20 pl-4">
                {current.role}
              </span>
            </div>

            {/* Read Story Link */}
            <div className="pt-2">
              <Link
                to={current.link}
                className="group inline-flex items-center gap-2 rounded-lg border border-[#371506]/20 bg-white px-4 py-2.5 text-sm font-medium text-[#371506] shadow-sm transition-all hover:bg-[#371506]/5 hover:border-[#371506]/40"
              >
                <span>Read their story</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>
        </div>

        {/* Right Headshot / Portrait Image */}
        <div className="w-full lg:w-1/2 lg:max-w-[540px]">
          <div className="relative aspect-[4/4.5] w-full overflow-hidden rounded-2xl bg-black/5 shadow-xl border border-stone-200/60">
            <img
              src={current.image}
              alt={`${current.firstName} ${current.lastName}`}
              className="h-full w-full object-cover object-top"
              loading="lazy"
            />
            {/* Halftone texture overlay */}
            <div
              className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-30"
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

