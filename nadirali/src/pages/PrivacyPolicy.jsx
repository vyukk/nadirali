import React from 'react'

export default function PrivacyPolicy() {
  return (
    <div className="w-full min-h-screen bg-[#0c0a09] text-white pt-28 pb-24">
      <div className="container max-w-4xl flex flex-col gap-8">
        <h1 className="text-4xl sm:text-5xl font-serif text-[#fcf7f4]">Privacy Policy</h1>
        <div className="prose prose-invert text-sm sm:text-base text-white/80 space-y-4">
          <p>
            Nadir Ali & Company (“we”, “our”, or “us”) respects your privacy. This policy explains how we handle your personal information when you visit our website or submit an inquiry for handcrafted musical instruments.
          </p>
          <h2 className="text-xl font-serif text-white pt-2">Information We Collect</h2>
          <p>
            We collect information you provide directly, such as your name, organizational affiliation, email address, and shipping details for order fulfillment and catalog dispatch.
          </p>
          <h2 className="text-xl font-serif text-white pt-2">Use of Information</h2>
          <p>
            Your information is used solely to respond to inquiries, fulfill instrument orders, coordinate delivery logistics, and provide authentic certification details. We never sell or share your data with third-party advertisers.
          </p>
          <h2 className="text-xl font-serif text-white pt-2">Contact Us</h2>
          <p>
            If you have questions about our privacy practices, contact us at info@nadiralico.in or write to Nadir Ali & Co., Jali Kothi, Meerut – 250002, Uttar Pradesh, India.
          </p>
        </div>
      </div>
    </div>
  )
}
