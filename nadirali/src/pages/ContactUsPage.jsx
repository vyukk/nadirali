import React, { useState } from 'react'
import { MapPin, Phone, Mail, Clock, CheckCircle2, ArrowRight, Award } from 'lucide-react'

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    subject: 'Bulk Procurement & Defense Band Quote',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="w-full min-h-screen bg-[#0c0a09] text-white pt-28 pb-24">
      <div className="container max-w-5xl flex flex-col gap-16">
        
        {/* Header */}
        <div className="max-w-2xl flex flex-col gap-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
            Workshop & Direct Sales
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif text-[#fcf7f4]">
            Contact Nadir Ali & Company
          </h1>
          <p className="text-base sm:text-lg text-white/70">
            Reach out to our master craftsman desk in Meerut for institutional inquiries, custom regimental engravings, or workshop visits.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Details */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="rounded-2xl border border-white/10 bg-[#141210] p-6 sm:p-8 flex flex-col gap-6 shadow-xl">
              <h2 className="text-2xl font-serif text-white">Workshop & Head Office</h2>

              <div className="space-y-4 text-sm text-white/80">
                <div className="flex items-start gap-3">
                  <MapPin className="size-5 shrink-0 text-[#D4AF37] mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Manufacturing Facility</span>
                    <span className="text-xs text-white/60">Jali Kothi (Kothi Atanas), Meerut – 250002, Uttar Pradesh, India</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="size-5 shrink-0 text-[#D4AF37] mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Telephone</span>
                    <span className="text-xs text-white/60">+91 121 251 1885 / +91 98370 12345</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="size-5 shrink-0 text-[#D4AF37] mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Email Dispatch</span>
                    <span className="text-xs text-white/60">info@nadiralico.in / sales@nadiralico.in</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="size-5 shrink-0 text-[#D4AF37] mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Working Hours</span>
                    <span className="text-xs text-white/60">Monday to Saturday: 9:00 AM – 6:00 PM IST</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-[#D4AF37] font-mono">
                <Award className="size-4 shrink-0" />
                <span>Geographical Indication (GI) Registered Unit</span>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7 rounded-2xl bg-[#141210] border border-white/10 p-8 shadow-2xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-2xl font-serif text-white mb-2">Direct Message to Foundry</h2>
                <p className="text-xs text-white/60 mb-4">We reply to all formal military, organizational, and personal musician inquiries within 24 hours.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Col. / Dr. / Mr. Name"
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
                      placeholder="name@domain.com"
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/30 focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1">Organization / Regiment</label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="Military, Police, or School"
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/30 focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1">Contact Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91..."
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/30 focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">Inquiry Purpose</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-[#1c1917] px-3 py-2 text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                  >
                    <option value="Bulk Procurement & Defense Band Quote">Bulk Procurement & Defense Band Quote</option>
                    <option value="Individual Instrument Commission">Individual Instrument Commission</option>
                    <option value="Meerut Workshop Visit Appointment">Meerut Workshop Visit Appointment</option>
                    <option value="Export / International Distribution">Export / International Distribution</option>
                    <option value="Authenticity & GI Tag Verification">Authenticity & GI Tag Verification</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">Message / Requirements *</label>
                  <textarea
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details on quantities, timeline, or custom requirements..."
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/30 focus:border-[#D4AF37] focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#D4AF37] hover:bg-[#c49f27] py-3 text-center text-sm font-semibold text-black transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#D4AF37]/20"
                >
                  <span>Transmit Inquiry to Workshop</span>
                  <ArrowRight className="size-4" />
                </button>
              </form>
            ) : (
              <div className="py-12 text-center flex flex-col items-center gap-4">
                <div className="flex size-14 items-center justify-center rounded-full bg-[#371506] text-[#D4AF37] border border-[#D4AF37]/30">
                  <CheckCircle2 className="size-8" />
                </div>
                <h3 className="text-2xl font-serif text-white">Message Transmitted</h3>
                <p className="max-w-md text-sm text-white/70">
                  Thank you, <span className="text-white font-medium">{formData.name}</span>. Your message has been routed to our Managing Director desk at Jali Kothi, Meerut. We will be in touch shortly.
                </p>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  )
}
