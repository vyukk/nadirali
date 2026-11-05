import React from 'react'

const institutionalClients = [
  'Indian Armed Forces',
  'Buckingham Palace Fanfare Corps',
  'American President’s Band',
  'King of Saudi Arabia Royal Guard',
  'Border Security Force (BSF)',
  'Delhi Police Central Band',
  'Central Reserve Police Force',
  'King of Jordan Ceremonial Corps',
  '150+ Allied Defense Ensembles'
]

export default function TrustedByMarquee() {
  return (
    <section data-section-theme="dark" className="relative overflow-clip pt-12 pb-16 md:pt-16 md:pb-24 bg-[#0c0a09]">
      <div className="container flex flex-col items-center text-center">
        <p className="text-xs sm:text-sm font-medium tracking-widest text-[#D4AF37]/80 uppercase mb-8 font-mono">
          EQUIPPING PREMIER MILITARY REGIMENTS, ROYAL ENSEMBLES & SYMPHONIES WORLDWIDE SINCE 1885
        </p>

        {/* Infinite Logo Marquee */}
        <div className="relative w-full overflow-hidden mask-gradient-x">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 md:w-32 bg-gradient-to-r from-[#0c0a09] to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 md:w-32 bg-gradient-to-l from-[#0c0a09] to-transparent"></div>

          <div className="flex w-max animate-marquee items-center gap-12 sm:gap-16 py-2">
            {[...institutionalClients, ...institutionalClients, ...institutionalClients].map((client, index) => (
              <div
                key={`${client}-${index}`}
                className="flex shrink-0 items-center gap-3 opacity-60 transition-opacity hover:opacity-100"
              >
                <span className="size-2 rounded-full bg-[#D4AF37]"></span>
                <span className="text-sm sm:text-base font-serif tracking-wide text-stone-200 uppercase whitespace-nowrap">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
