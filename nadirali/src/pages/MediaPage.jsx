import React from 'react'
import { Music, Volume2, Award, Play, Film, Image as ImageIcon } from 'lucide-react'

export default function MediaPage() {
  const audioTracks = [
    { title: 'The Last Post (Sovereign Bugle)', performer: 'Ceremonial Brass Soloist', key: 'Key of Bb', file: 'Meerut Bugle' },
    { title: 'Royal Fanfare for Buckingham Palace', performer: 'Trumpet Fanfare Ensemble', key: 'Key of Bb', file: 'Nickel Sterling Trumpet' },
    { title: 'Grand Marching Cadence', performer: 'Military Pipe & Brass Band', key: 'Full Band', file: 'Euphonium & 17″ Dhols' },
    { title: 'Symphonic Wind Adagio', performer: 'Concert Woodwind Soloist', key: 'Key of Eb', file: 'Nadir Ali Clarinet' }
  ]

  const mediaGallery = [
    { title: 'Hand-Hammering the Bell Flare', src: '/assets/nadir-ali-bugle-gi-tagged-indian-government.jpg', label: 'Artisan Technique' },
    { title: 'Faez Aftab Inspecting Monel Trumpet', src: '/assets/faez-aftab-nadir-ali-and-company.jpg', label: 'Executive Quality Check' },
    { title: 'Official Statement & Trademark Notice', src: '/assets/nadir-ali-official-statement.jpg', label: 'Foundry Notice' },
    { title: 'Precision Tuning & Valve Lapping', src: '/assets/Untitledjj.jpeg', label: 'Acoustic Bench' }
  ]

  return (
    <div className="w-full min-h-screen bg-[#0c0a09] text-white pt-28 pb-24">
      <div className="container max-w-5xl flex flex-col gap-16">
        
        {/* Header */}
        <div className="max-w-2xl flex flex-col gap-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
            Sound & Archival Gallery
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif text-[#fcf7f4]">
            The Resonance of Tradition
          </h1>
          <p className="text-base sm:text-lg text-white/70">
            Listen to recorded fanfare performances on authentic Nadir Ali horns and explore archival moments from our 140-year history.
          </p>
        </div>

        {/* Audio Recordings Showcase */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <Volume2 className="size-5 text-[#D4AF37]" />
            <h2 className="text-2xl font-serif text-white">Ceremonial Audio Profiles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {audioTracks.map((track, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-[#141210] p-5 flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-[#371506] text-[#D4AF37]">
                    <Music className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-serif text-white">{track.title}</h3>
                    <p className="text-xs text-white/50">{track.performer} • <span className="text-[#D4AF37]">{track.file}</span></p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-white/40 bg-white/5 px-2 py-1 rounded">
                    {track.key}
                  </span>
                  <button className="flex size-8 items-center justify-center rounded-full bg-[#D4AF37] text-black hover:bg-[#c49f27] transition-colors cursor-pointer" aria-label="Play sample">
                    <Play className="size-3.5 fill-black ml-0.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Archival Photography */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <ImageIcon className="size-5 text-[#D4AF37]" />
            <h2 className="text-2xl font-serif text-white">Archival Workshop Imagery</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {mediaGallery.map((item, i) => (
              <div key={i} className="group rounded-2xl border border-white/10 bg-[#141210] overflow-hidden flex flex-col shadow-xl">
                <div className="relative aspect-[16/10] overflow-hidden bg-black/60">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="rounded bg-black/70 backdrop-blur-md px-2 py-0.5 text-[10px] font-mono text-[#D4AF37] border border-white/10">
                      {item.label}
                    </span>
                  </div>
                </div>
                <div className="p-4 border-t border-white/10">
                  <h3 className="font-serif text-base text-white">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
