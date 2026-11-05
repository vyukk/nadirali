import React from 'react'

export default function TermsAndConditionsPage() {
  return (
    <div className="w-full min-h-screen bg-[#0c0a09] text-white pt-28 pb-24">
      <div className="container max-w-4xl flex flex-col gap-8">
        <h1 className="text-4xl sm:text-5xl font-serif text-[#fcf7f4]">Terms & Conditions</h1>
        <div className="prose prose-invert text-sm sm:text-base text-white/80 space-y-4">
          <p>
            Welcome to Nadir Ali & Company. By accessing our website or placing procurement orders for our musical instruments, you agree to these Terms and Conditions.
          </p>
          <h2 className="text-xl font-serif text-white pt-2">1. Intellectual Property & GI Tag</h2>
          <p>
            “Nadir Ali & Co.” is a registered trademark, and our Meerut Bugle is protected under the Geographical Indications of Goods (Registration and Protection) Act. Unauthorized reproduction of our maker’s stamp or counterfeit production is strictly prohibited under Indian law.
          </p>
          <h2 className="text-xl font-serif text-white pt-2">2. Procurement & Orders</h2>
          <p>
            Formal orders placed for institutional defense units, schools, and private musicians are subject to production schedules determined at our Meerut foundry.
          </p>
        </div>
      </div>
    </div>
  )
}
