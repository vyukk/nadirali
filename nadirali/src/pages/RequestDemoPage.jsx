import React, { useState } from 'react'
import { ShieldCheck, CheckCircle2, ArrowRight, Lock, Award, HeartHandshake } from 'lucide-react'

export default function RequestDemoPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    specialty: 'Orthopedics',
    claimsVolume: '1,000 - 5,000 / mo',
    notes: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="w-full min-h-screen bg-[#0c0a09] text-white pt-28 pb-24">
      <div className="container max-w-5xl flex flex-col gap-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#a39893]">
              Schedule a Demonstration
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif text-[#fcf7f4] leading-[1.12]">
              See Amperos in action on your claim workflows
            </h1>
            <p className="text-base text-white/70 leading-relaxed">
              In this 30-minute tailored session, we’ll demonstrate how our agentic AI models navigate payor portals, adjudicate denials, and integrate with your EHR.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="size-5 shrink-0 text-emerald-400 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-white">Live AI Agent Simulation</h4>
                  <p className="text-xs text-white/60">Watch autonomous agents resolve real denial scenarios.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="size-5 shrink-0 text-emerald-400 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-white">Custom EHR Integration Architecture</h4>
                  <p className="text-xs text-white/60">Understand API connectivity with Epic, Athena, eCW, or NextGen.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="size-5 shrink-0 text-emerald-400 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-white">Unrecovered AR Audit</h4>
                  <p className="text-xs text-white/60">Preliminary analysis of cash upside tailored to your payor mix.</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <img src="/assets/badges/soc2.png" alt="SOC 2" className="h-12 w-auto object-contain" />
              <img src="/assets/badges/hipaa.png" alt="HIPAA" className="h-12 w-auto object-contain" />
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7 rounded-2xl bg-[#141210] border border-white/10 p-8 shadow-2xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-2xl font-serif text-white mb-4">Book Your Session</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe, MD"
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-white/30 focus:border-white/40 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jdoe@clinic.com"
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-white/30 focus:border-white/40 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1">Practice / Health Group *</label>
                    <input
                      type="text"
                      required
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="Northwest Medical Group"
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-white/30 focus:border-white/40 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 000-0000"
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-white/30 focus:border-white/40 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1">Primary Medical Specialty</label>
                    <select
                      value={formData.specialty}
                      onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                      className="w-full rounded-lg border border-white/10 bg-[#1c1917] px-3 py-2.5 text-sm text-white focus:border-white/40 focus:outline-none"
                    >
                      <option value="Orthopedics">Orthopedics</option>
                      <option value="DME / HME">DME / HME</option>
                      <option value="Cardiology">Cardiology</option>
                      <option value="Behavioral Health">Behavioral Health</option>
                      <option value="Ophthalmology">Ophthalmology</option>
                      <option value="Anesthesiology">Anesthesiology</option>
                      <option value="Dermatology">Dermatology</option>
                      <option value="Urology">Urology</option>
                      <option value="Multi-Specialty">Multi-Specialty</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1">Monthly Claim Volume</label>
                    <select
                      value={formData.claimsVolume}
                      onChange={(e) => setFormData({ ...formData, claimsVolume: e.target.value })}
                      className="w-full rounded-lg border border-white/10 bg-[#1c1917] px-3 py-2.5 text-sm text-white focus:border-white/40 focus:outline-none"
                    >
                      <option value="Under 1,000 / mo">&lt; 1,000 / mo</option>
                      <option value="1,000 - 5,000 / mo">1,000 - 5,000 / mo</option>
                      <option value="5,000 - 20,000 / mo">5,000 - 20,000 / mo</option>
                      <option value="Over 20,000 / mo">&gt; 20,000 / mo</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">Specific AR Needs / Details</label>
                  <textarea
                    rows="3"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Describe your current billing challenges, payer mix, or EHR..."
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-white/30 focus:border-white/40 focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#fff5f0] hover:bg-[#ffe8dc] py-3 text-center text-sm font-semibold text-black transition-colors flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <span>Submit Demo Request</span>
                  <ArrowRight className="size-4" />
                </button>
              </form>
            ) : (
              <div className="py-12 text-center flex flex-col items-center gap-4">
                <div className="flex size-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <CheckCircle2 className="size-10" />
                </div>
                <h3 className="text-3xl font-serif text-white">We've Received Your Request!</h3>
                <p className="max-w-md text-sm text-white/70">
                  Thank you, <span className="text-white font-medium">{formData.name}</span>. An Amperos healthcare solutions consultant will review your information and reach out within 1 business day with calendar options.
                </p>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  )
}

