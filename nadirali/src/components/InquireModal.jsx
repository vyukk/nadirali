import React, { useState } from 'react'
import { X, CheckCircle2, Award, Download, ArrowRight } from 'lucide-react'

export default function InquireModal({ isOpen, onClose, defaultProduct = 'Bugle' }) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    ensembleType: 'Military / Police Corps',
    product: defaultProduct,
    message: ''
  })

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md modal-overlay">
      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl bg-[#141210] border border-[#D4AF37]/30 text-white p-6 sm:p-8 shadow-2xl modal-content">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-1.5 text-white/50 hover:bg-white/10 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="size-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="text-xs uppercase font-mono tracking-wider text-[#D4AF37]">
                Official Instrument Catalog & Quote
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#fcf7f4] mt-1">
                Inquire & Order Catalog
              </h2>
              <p className="text-sm text-white/70 mt-1">
                Request our complete brass catalog, institutional pricing, and regimental engraving options.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Bandmaster / Musician Name"
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/30 focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="bandmaster@regiment.gov"
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/30 focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">Regiment / Ensemble Name</label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Central Reserve Police Brass"
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/30 focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">Ensemble Classification</label>
                  <select
                    value={formData.ensembleType}
                    onChange={(e) => setFormData({ ...formData, ensembleType: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-[#1c1917] px-3 py-2 text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                  >
                    <option value="Military / Police Corps">Military / Police Corps</option>
                    <option value="School / College Band">School / College Marching Band</option>
                    <option value="Orchestral Soloist">Concert / Orchestral Soloist</option>
                    <option value="Ceremonial Brass Band">Ceremonial Brass Band</option>
                    <option value="International Distributor">International Distributor</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-white/80 mb-1">Instrument Focus</label>
                <select
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className="w-full rounded-lg border border-white/10 bg-[#1c1917] px-3 py-2 text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                >
                  <option value="Bugle">Bugle (GI Tagged Meerut Copper & Brass)</option>
                  <option value="Trumpet">Trumpet (Nickel Sterling Big Bell / Monel)</option>
                  <option value="Clarinet">Clarinet (Eb / Bb Soloist Reeds)</option>
                  <option value="Euphonium">Euphonium & French Horn (Compensating)</option>
                  <option value="Dhols">Dhols (17″ & 12″ Marching Percussion)</option>
                  <option value="Bags">Padded Flight Bags & Instrument Cases</option>
                  <option value="Complete Band Package">Complete 25 - 50 Piece Band Outfit</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-white/80 mb-1">Notes / Custom Requirements (Optional)</label>
                <textarea
                  rows="2"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Quantity, custom regimental engraving, finish preference..."
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/30 focus:border-[#D4AF37] focus:outline-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#D4AF37] hover:bg-[#c49f27] py-3 text-center text-sm font-semibold text-black transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#D4AF37]/20"
                >
                  <span>Submit Inquiry & Download Catalog</span>
                  <ArrowRight className="size-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 pt-2 text-xs text-white/50 font-mono">
                <div className="flex items-center gap-1.5 text-amber-200">
                  <Award className="size-3.5" />
                  <span>Govt. of India GI Tag Protected</span>
                </div>
                <span>•</span>
                <span>Direct Workshop Pricing</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center flex flex-col items-center gap-4">
            <div className="flex size-14 items-center justify-center rounded-full bg-[#371506] text-[#D4AF37] border border-[#D4AF37]/40">
              <CheckCircle2 className="size-8" />
            </div>
            <h3 className="text-2xl font-serif text-white">
              Inquiry Dispatched Successfully!
            </h3>
            <p className="max-w-sm text-sm text-white/70">
              Thank you, <span className="text-white font-medium">{formData.name}</span>. The master craftsman desk at our Meerut foundry has received your inquiry for <span className="text-[#D4AF37]">{formData.product}</span>. Our catalog and formal estimate will be sent to your email.
            </p>
            <button
              onClick={() => {
                setSubmitted(false)
                onClose()
              }}
              className="mt-4 rounded-lg bg-[#D4AF37] px-6 py-2.5 text-sm font-semibold text-black transition-colors"
            >
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  )
}

