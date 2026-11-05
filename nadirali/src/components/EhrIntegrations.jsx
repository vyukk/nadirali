import React from 'react'

const integrations = [
  { name: 'eClinicalWorks', logo: '/local-pages/home/logos/eclinicalworks.svg', desc: 'Native API & Clearinghouse' },
  { name: 'Athenahealth', logo: '/local-pages/home/logos/athenahealth.svg', desc: 'Certified Marketplace Partner' },
  { name: 'NextGen', logo: '/local-pages/home/logos/nextgen.svg', desc: 'Direct EDI 835/837' },
  { name: 'Epic', logo: '/local-pages/home/logos/epic.svg', desc: 'App Orchard & FHIR Sync' },
  { name: 'ModMed', logo: '/local-pages/home/logos/modmed.svg', desc: 'Specialty EHR Bridge' },
  { name: 'Dentrix', logo: '/local-pages/home/logos/dentrix.svg', desc: 'Medical-Dental Cross-Coding' },
]

export default function EhrIntegrations() {
  return (
    <section data-section-theme="light" data-header-theme="dark" className="relative overflow-clip py-12 md:py-20 bg-[#fdfaf8]">
      <div className="container flex flex-col gap-y-0">
        
        {/* Dark Box Container */}
        <div className="relative overflow-hidden rounded-2xl bg-black px-6 py-10 sm:px-12 sm:py-16 text-white shadow-2xl border border-white/10">
          <div className="relative z-10 flex flex-col gap-10 md:gap-14">
            
            <div className="max-w-[480px]">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#fcf7f4]">
                Works alongside your everyday workflows
              </h2>
              <p className="mt-3 text-sm sm:text-base text-white/70">
                Amperos operates directly inside and alongside your existing practice management systems without requiring workflow overhauls.
              </p>
            </div>

            {/* Grid of integrations */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
              {integrations.map((item) => (
                <div key={item.name} className="flex flex-col items-center sm:items-start gap-3 group">
                  <div className="flex size-20 sm:size-24 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20 shadow-md">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="max-h-10 max-w-full object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-sm font-medium text-stone-200">{item.name}</p>
                    <p className="text-xs text-white/50">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

