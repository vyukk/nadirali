import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Hammer, Award, Sparkles, Sliders, ShieldCheck } from 'lucide-react'

export default function CraftsmanshipCards() {
  const pillars = [
    {
      eyebrow: '0.6mm High-Tensile Bell Brass',
      title: 'Master Metallurgy & Hand-Beating',
      description: 'From shearing raw 70/30 resonance brass to hand-hammering over custom iron mandrels, our smiths shape bells that yield extraordinary acoustic resonance.',
      link: '/nadir-ali-2/',
      icon: Hammer,
      specs: [
        { label: 'Bell Alloy', val: '70% Copper / 30% Zinc' },
        { label: 'Forming Technique', val: 'Hand-Spun & Annealed' },
        { label: 'Wall Thickness', val: '0.6mm Consistent Gauge' }
      ]
    },
    // {
    //   eyebrow: 'Microscopic Tolerances',
    //   title: 'Acoustic Valve Honing & Tuning',
    //   description: 'Pistons and slide tubes are hand-lapped with micro-abrasives to guarantee airtight compression, lightning valve response, and laser-verified concert pitch.',
    //   link: '/product-category/trumpet/',
    //   icon: Sliders,
    //   specs: [
    //     { label: 'Piston Material', val: 'Nickel Sterling / Monel' },
    //     { label: 'Tuning Standard', val: 'Concert A=440Hz' },
    //     { label: 'Compression Seal', val: '99.8% Leak-Free Honing' }
    //   ]
    // },
    // {
    //   eyebrow: 'Geographical Indication Certified',
    //   title: 'Government of India GI Tagged Heritage',
    //   description: 'The Government of India has conferred the coveted GI Tag to the Meerut Bugle, enshrining Nadir Ali & Co. as the undisputed sovereign makers of Indian military brass.',
    //   link: '/news/',
    //   icon: Award,
    //   specs: [
    //     { label: 'GI Certification', val: 'Meerut Brass Instruments' },
    //     { label: 'Recognized Heritage', val: 'Founded 1885 (140+ Years)' },
    //     { label: 'Authenticity Seal', val: 'Govt. Registered GI Mark' }
    //   ]
    // },
    // {
    //   eyebrow: 'Bespoke Plating & Engraving',
    //   title: 'Custom Regimental Corps Insignia',
    //   description: 'Mirror-polished gold lacquer, heavy sterling silver electroplating, and custom hand-chiseled regimental emblems tailored to world armed forces and royal guards.',
    //   link: '/contact-us/',
    //   icon: ShieldCheck,
    //   specs: [
    //     { label: 'Finish Options', val: 'Silver Plate, Gold Lacquer, Raw' },
    //     { label: 'Regimental Crests', val: 'Hand-Chiseled & Etched' },
    //     { label: 'Global Defense Export', val: 'Armies in 150+ Countries' }
    //   ]
    // }
  ]

  return (
    <section className="relative overflow-clip pt-4 pb-16 md:pb-32 bg-[#0c0a09] text-white">
      <div className="container flex flex-col gap-y-12 md:gap-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4 max-w-[660px]">
          <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
            Sovereign Craftsmanship
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.12] tracking-[-0.02em] text-[#fcf7f4] font-serif">
            Nadir Ali crafts every instrument end-to-end, from raw brass to concert hall
          </h2>
          <p className="text-base sm:text-lg text-white/70">
            Across 4,500 square yards at Jali Kothi, 80 master artisans preserve multi-generational metalworking traditions with zero automated shortcuts.
          </p>
        </div>

        {/* Feature List */}
        <div className="flex flex-col divide-y divide-white/10">
          {pillars.map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={idx} className="flex flex-col py-10 lg:py-16 md:gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
                
                {/* Left Text */}
                <div className="flex w-full max-w-[480px] shrink-0 flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <span className="flex size-7 items-center justify-center rounded-md bg-[#371506] text-[#D4AF37]">
                      <Icon className="size-4" />
                    </span>
                    <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-medium font-mono">
                      {item.eyebrow}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <h3 className="text-2xl sm:text-3xl font-normal leading-[1.2] text-stone-100 font-serif">
                      {item.title}
                    </h3>
                    <p className="text-base sm:text-lg text-stone-300/80 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="pt-2">
                      <Link
                        to={item.link}
                        className="group inline-flex items-center gap-2 rounded-lg border border-[#D4AF37]/30 bg-[#371506]/30 px-4 py-2 text-sm font-medium text-[#D4AF37] transition-colors hover:bg-[#371506] hover:border-[#D4AF37]"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Right Specification Box */}
                <div className="mt-8 lg:mt-0 relative w-full shrink-0 lg:max-w-[620px] lg:flex-1">
                  <div className="rounded-2xl border border-white/10 bg-[#141210] p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                      <span className="text-xs font-mono uppercase tracking-wider text-white/50">
                        Workshop Benchmark Spec
                      </span>
                      <span className="spec-badge rounded-full bg-[#371506] px-2.5 py-0.5 text-xs font-medium text-[#D4AF37] border border-[#D4AF37]/20">
                        Acoustic Standard
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {item.specs.map((s, i) => (
                        <div key={i} className="spec-tile rounded-xl border border-white/5 bg-white/[0.02] p-4">
                          <p className="text-xs text-white/40">{s.label}</p>
                          <p className="spec-tile-value text-sm sm:text-base font-serif font-medium text-stone-100 mt-1">
                            {s.val}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

