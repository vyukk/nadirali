import React from 'react'
import { news, asset } from '../data/siteData'
import { Calendar, Award, ArrowRight, ShieldAlert } from 'lucide-react'

export default function News() {
  return (
    <div className="w-full min-h-screen bg-[#0c0a09] text-white pt-28 pb-24">
      <div className="container max-w-5xl flex flex-col gap-12">
        
        {/* Header */}
        <div className="max-w-2xl flex flex-col gap-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
            Official Announcements & Events
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif text-[#fcf7f4]">
            News & Heritage Dispatches
          </h1>
          <p className="text-base sm:text-lg text-white/70">
            Read official press releases, government GI Tag announcements, and heritage developments from Nadir Ali & Company.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {news.map((item, idx) => (
            <article
              key={idx}
              className="rounded-2xl bg-[#141210] border border-white/10 overflow-hidden flex flex-col justify-between shadow-xl transition-all duration-300 hover:border-[#D4AF37]/50 hover:bg-white/[0.03] group"
            >
              <div className="relative aspect-[16/10] bg-black/40 overflow-hidden">
                <img
                  src={asset(item.image)}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-8 flex flex-col justify-between flex-1 gap-6">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-mono mb-3">
                    <Calendar className="size-3.5" />
                    <span>{item.date}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-serif text-white group-hover:text-amber-200 transition-colors leading-snug">
                    {item.title}
                  </h2>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                  <span>Official Release</span>
                  <span className="text-[#D4AF37] font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Read dispatch</span>
                    <ArrowRight className="size-3.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  )
}
