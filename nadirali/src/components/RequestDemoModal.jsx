import React, { useState } from 'react'
import { X, CheckCircle2, ShieldCheck, Calendar, ArrowRight } from 'lucide-react'

export default function RequestDemoModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    specialty: 'Orthopedics',
    claimsVolume: '1,000 - 5,000 / mo',
    notes: ''
  })

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md modal-overlay">
      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl bg-[#141210] border border-white/10 text-white p-6 sm:p-8 shadow-2xl modal-content">
        
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
              <span className="text-xs uppercase font-mono tracking-wider text-[#a39893]">
                Experience Amperos
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#fcf7f4] mt-1">
                Request a Live Demo
              </h2>
              <p className="text-sm text-white/70 mt-1">
                See how agentic AI resolves denials and speeds up insurance recovery for your specialty.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Dr. Sarah Jenkins"
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/30 focus:border-white/40 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">Work Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sjenkins@practice.com"
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/30 focus:border-white/40 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">Organization / Practice</label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Summit Health Partners"
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/30 focus:border-white/40 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">Primary Specialty</label>
                  <select
                    value={formData.specialty}
                    onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-[#1c1917] px-3 py-2 text-sm text-white focus:border-white/40 focus:outline-none"
                  >
                    <option value="Orthopedics">Orthopedics</option>
                    <option value="DME / HME">DME / HME</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Behavioral Health">Behavioral Health</option>
                    <option value="Ophthalmology">Ophthalmology</option>
                    <option value="Anesthesiology">Anesthesiology</option>
                    <option value="Dermatology">Dermatology</option>
                    <option value="Urology">Urology</option>
                    <option value="Multi-Specialty">Multi-Specialty Clinic</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-white/80 mb-1">Monthly Claim Volume</label>
                <select
                  value={formData.claimsVolume}
                  onChange={(e) => setFormData({ ...formData, claimsVolume: e.target.value })}
                  className="w-full rounded-lg border border-white/10 bg-[#1c1917] px-3 py-2 text-sm text-white focus:border-white/40 focus:outline-none"
                >
                  <option value="Under 1,000 / mo">&lt; 1,000 claims / mo</option>
                  <option value="1,000 - 5,000 / mo">1,000 - 5,000 claims / mo</option>
                  <option value="5,000 - 20,000 / mo">5,000 - 20,000 claims / mo</option>
                  <option value="Over 20,000 / mo">&gt; 20,000 claims / mo</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-white/80 mb-1">Notes / Current AR Challenges (Optional)</label>
                <textarea
                  rows="2"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Tell us about specific payor denials or staffing backlog..."
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/30 focus:border-white/40 focus:outline-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#fff5f0] hover:bg-[#ffe8dc] py-3 text-center text-sm font-semibold text-black transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Schedule Tailored Demo</span>
                  <ArrowRight className="size-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 pt-2 text-xs text-white/50">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="size-3.5 text-emerald-400" />
                  <span>HIPAA & SOC 2 Compliant</span>
                </div>
                <span>•</span>
                <span>No commitment required</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center flex flex-col items-center gap-4">
            <div className="flex size-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <CheckCircle2 className="size-8" />
            </div>
            <h3 className="text-2xl font-serif text-white">
              Demo Request Confirmed!
            </h3>
            <p className="max-w-sm text-sm text-white/70">
              Thank you, <span className="text-white font-medium">{formData.name}</span>. An Amperos RCM specialist has been assigned to your practice (<span className="text-white">{formData.organization}</span>) and will send a calendar invite shortly.
            </p>
            <button
              onClick={() => {
                setSubmitted(false)
                onClose()
              }}
              className="mt-4 rounded-lg bg-white/10 hover:bg-white/20 px-6 py-2.5 text-sm font-medium text-white transition-colors"
            >
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  )
}

