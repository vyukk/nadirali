import React from 'react'

export default function NadirAliLogo({ className = "h-8 w-auto", showSubtitle = true }) {
  return (
    <div className="flex items-center gap-3">
      {/* Crest Logo */}
      <img
        src="/assets/nadir-logo-white-1.png"
        alt="Nadir Ali & Co. Crest"
        className="h-9 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(212,175,55,0.2)]"
      />
      <div className="flex flex-col">
        <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#fcf7f4] leading-tight">
          NADIR ALI & CO.
        </span>
        {showSubtitle && (
          <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase">
            ESTABLISHED 1885 • MEERUT
          </span>
        )}
      </div>
    </div>
  )
}

