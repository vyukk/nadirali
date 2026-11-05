import React from 'react'
import { Link } from 'react-router-dom'
import { ShieldCheck, Lock } from 'lucide-react'

export default function LegalPage({ type = 'privacy' }) {
  const isPrivacy = type === 'privacy'

  return (
    <div className="w-full min-h-screen bg-[#0c0a09] text-white pt-28 pb-24">
      <div className="container max-w-4xl flex flex-col gap-10">
        
        <div className="flex flex-col gap-4 border-b border-white/10 pb-8">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-200">
            <Lock className="size-3.5" />
            <span>Compliance & Legal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif text-[#fcf7f4]">
            {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
          </h1>
          <p className="text-sm text-white/60">
            Last Updated: November 2026 • Amperos Health Inc.
          </p>
        </div>

        <div className="prose prose-invert max-w-none text-sm sm:text-base leading-relaxed text-white/80 space-y-6">
          {isPrivacy ? (
            <>
              <p>
                Amperos Health Inc. (“Amperos”, “we”, “us”, or “our”) is committed to maintaining robust privacy protections for the individuals and healthcare provider organizations that utilize our services. This Privacy Policy details how we collect, store, safeguard, and use Protected Health Information (PHI) and organizational billing data.
              </p>
              <h2 className="text-xl font-serif text-white pt-2">1. HIPAA and Business Associate Agreement (BAA)</h2>
              <p>
                In providing autonomous insurance recovery and revenue cycle management services to healthcare entities, Amperos functions as a Business Associate under the Health Insurance Portability and Accountability Act of 1996 (HIPAA) and the Health Information Technology for Economic and Clinical Health Act (HITECH). Amperos executes standardized Business Associate Agreements with all covered entities prior to the transmission of any electronic PHI (ePHI).
              </p>
              <h2 className="text-xl font-serif text-white pt-2">2. Information We Collect</h2>
              <p>
                We process information solely for the purposes of adjudicating insurance claims, submitting appeals, checking payor eligibility, and providing analytics back to our client practices. All data is encrypted in transit using TLS 1.3 and at rest using AES-256 bit encryption keys managed in compliance with SOC 2 Type II controls.
              </p>
              <h2 className="text-xl font-serif text-white pt-2">3. Zero Third-Party Sale of Data</h2>
              <p>
                Amperos never sells, licenses, or monetizes client healthcare data, patient records, or proprietary fee schedules to third-party advertisers or brokers.
              </p>
            </>
          ) : (
            <>
              <p>
                These Terms of Service govern your access to and use of the Amperos website, platforms, APIs, and associated revenue cycle software services provided by Amperos Health Inc.
              </p>
              <h2 className="text-xl font-serif text-white pt-2">1. Authorized Healthcare Entity Use</h2>
              <p>
                Amperos services are intended strictly for licensed healthcare providers, medical practices, health systems, and authorized billing administrators. By accessing the service, you represent that you have legal authority to bind your organization.
              </p>
              <h2 className="text-xl font-serif text-white pt-2">2. Security and System Integrity</h2>
              <p>
                You agree not to bypass, disable, or tamper with security features of the platform or attempt unauthorized access to clearinghouse connections or other client account environments.
              </p>
              <h2 className="text-xl font-serif text-white pt-2">3. Intellectual Property</h2>
              <p>
                All proprietary algorithmic workflows, agent models, user interface designs, and documentation remain the exclusive intellectual property of Amperos Health Inc.
              </p>
            </>
          )}
        </div>

      </div>
    </div>
  )
}

