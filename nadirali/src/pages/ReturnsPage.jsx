import React from 'react'

export default function ReturnsPage() {
  return (
    <div className="w-full min-h-screen bg-[#0c0a09] text-white pt-28 pb-24">
      <div className="container max-w-4xl flex flex-col gap-8">
        <h1 className="text-4xl sm:text-5xl font-serif text-[#fcf7f4]">Returns & Warranty Policy</h1>
        <div className="prose prose-invert text-sm sm:text-base text-white/80 space-y-4">
          <p>
            Every instrument crafted at Nadir Ali & Company is individually inspected, hand-lapped, and laser-tested for concert pitch (A=440Hz) before leaving our Meerut foundry.
          </p>
          <h2 className="text-xl font-serif text-white pt-2">Craftsmanship Warranty</h2>
          <p>
            All brass wind instruments carry a limited warranty covering manufacturing defects, valve casing alignment, and metallurgy integrity.
          </p>
          <h2 className="text-xl font-serif text-white pt-2">Return & Inspection Period</h2>
          <p>
            If an instrument arrives damaged during transit or fails to meet the documented acoustic specifications, notify our workshop within 14 days of receipt for repair, replacement, or adjustment.
          </p>
        </div>
      </div>
    </div>
  )
}
