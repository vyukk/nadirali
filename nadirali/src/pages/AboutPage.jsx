import React from 'react'
import { Link } from 'react-router-dom'
import { Award, Users, HeartHandshake, Sparkles, Briefcase, ArrowRight } from 'lucide-react'

export default function AboutPage({ onRequestDemo }) {
  const leadership = [
    { name: 'Alex Thompson', role: 'Chief Executive Officer', bio: 'Former healthcare tech executive and RCM systems engineer with 15+ years scaling revenue cycle operations.' },
    { name: 'Elena Rostova, MD', role: 'Chief Medical Officer', bio: 'Board-certified clinician specializing in utilization review and payor medical policy adjudication.' },
    { name: 'Marcus Chen', role: 'Head of AI & Engineering', bio: 'Previously leading autonomous workflow automation at top fintech and health data infrastructure companies.' },
    { name: 'Rachel Vance', role: 'VP of RCM Operations', bio: 'Certified Professional Coder (CPC) and former health system billing director overseeing $500M+ in annual claims.' },
  ]

  const openPositions = [
    { title: 'Senior AI Engineer — Agentic Workflows', team: 'Engineering', location: 'San Francisco, CA / Remote' },
    { title: 'Lead RCM Denial Specialist (Surgical)', team: 'Operations', location: 'Remote (US)' },
    { title: 'Healthcare Solutions Architect', team: 'Sales & Customer Success', location: 'Remote (US)' },
  ]

  return (
    <div className="w-full min-h-screen bg-[#0c0a09] text-white pt-28 pb-20">
      <div className="container max-w-6xl flex flex-col gap-20">
        
        {/* Hero */}
        <div className="max-w-3xl flex flex-col gap-5">
          <span className="text-xs font-mono uppercase tracking-widest text-[#a39893]">
            About Amperos
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#fcf7f4] leading-[1.1]">
            We believe healthcare providers deserve to be paid for the care they provide.
          </h1>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
            Billions of dollars in valid medical claims are unjustly delayed or written off each year due to administrative friction. Amperos exists to eliminate this burden so clinicians can focus on patient care.
          </p>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-2xl bg-[#141210] border border-white/10 p-8 flex flex-col gap-4">
            <div className="flex size-12 items-center justify-center rounded-xl bg-[#371506] text-amber-200">
              <Sparkles className="size-6" />
            </div>
            <h3 className="text-2xl font-serif text-white">AI-Native Speed</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              We replace tedious manual phone calls and fax trees with autonomous agents that work 24/7 with zero burnout.
            </p>
          </div>

          <div className="rounded-2xl bg-[#141210] border border-white/10 p-8 flex flex-col gap-4">
            <div className="flex size-12 items-center justify-center rounded-xl bg-[#371506] text-amber-200">
              <Users className="size-6" />
            </div>
            <h3 className="text-2xl font-serif text-white">Human Expertise</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Our seasoned billing specialists and certified coders supervise every automated workflow, providing nuanced guidance on complex appeals.
            </p>
          </div>

          <div className="rounded-2xl bg-[#141210] border border-white/10 p-8 flex flex-col gap-4">
            <div className="flex size-12 items-center justify-center rounded-xl bg-[#371506] text-amber-200">
              <HeartHandshake className="size-6" />
            </div>
            <h3 className="text-2xl font-serif text-white">Total Transparency</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              No black-box monthly excuses. You have 100% visibility into every payor interaction, denial code, and recovered dollar.
            </p>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-3xl font-serif text-white">Leadership Team</h2>
            <p className="text-sm text-white/70 mt-1">Bridging artificial intelligence with deep healthcare revenue cycle expertise.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((member) => (
              <div key={member.name} className="rounded-xl bg-[#141210] border border-white/10 p-6 flex flex-col gap-3">
                <div className="size-14 rounded-full bg-[#371506] flex items-center justify-center text-xl font-serif font-bold text-amber-200">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-lg font-serif text-white">{member.name}</h3>
                  <p className="text-xs text-amber-200/80 font-medium">{member.role}</p>
                </div>
                <p className="text-xs text-white/70 leading-relaxed mt-2">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Careers Section */}
        <div id="careers" className="rounded-2xl bg-[#141210] border border-white/10 p-8 sm:p-12 scroll-mt-28 flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#a39893]">
                Join Our Mission
              </span>
              <h2 className="text-3xl font-serif text-white mt-1">Open Opportunities</h2>
              <p className="text-sm text-white/70 mt-1">Help us solve one of the largest challenges in modern American healthcare.</p>
            </div>
            <a
              href="mailto:careers@amperos.com"
              className="text-sm font-medium text-amber-200 hover:text-white flex items-center gap-1.5"
            >
              <span>careers@amperos.com</span>
              <ArrowRight className="size-4" />
            </a>
          </div>

          <div className="flex flex-col divide-y divide-white/5">
            {openPositions.map((job, idx) => (
              <div key={idx} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-base font-medium text-white">{job.title}</h4>
                  <div className="flex items-center gap-3 text-xs text-white/50 mt-1">
                    <span>{job.team}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                  </div>
                </div>
                <a
                  href={`mailto:careers@amperos.com?subject=Application for ${job.title}`}
                  className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-xs font-medium text-white hover:bg-white/10 transition-colors w-max"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

