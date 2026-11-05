import React from 'react'
import HeroSection from '../components/HeroSection'
import TrustedByMarquee from '../components/TrustedByMarquee'
import CraftsmanshipCards from '../components/CraftsmanshipCards'
import RewrittenRulesSlider from '../components/RewrittenRulesSlider'
import HeritageTestimonial from '../components/HeritageTestimonial'
import CraftingProcessSteps from '../components/CraftingProcessSteps'
import InstrumentsBentoGrid from '../components/InstrumentsBentoGrid'
import AuthenticityNotice from '../components/AuthenticityNotice'
import FinalCtaSection from '../components/FinalCtaSection'

export default function HomePage({ onRequestCatalog }) {
  return (
    <div className="w-full min-h-screen bg-[#0c0a09]">
      {/* 1. Hero Section with Interactive Instrument Switcher */}
      <HeroSection onRequestCatalog={onRequestCatalog} />

      {/* 2. Institutional Military & Ceremonial Marquee */}
      <TrustedByMarquee />

      {/* 3. Craftsmanship & Metallurgy Feature Cards */}
      <CraftsmanshipCards />

      {/* 4. Rewritten Rules Heritage Slider with 140-Year Milestones */}
      <RewrittenRulesSlider />

      {/* 5. Leadership Perspective Testimonial (Faez Aftab) */}
      <HeritageTestimonial />

      {/* 6. Step-by-Step Crafting Process from Raw Brass to Concert Hall */}
      <CraftingProcessSteps />

      {/* 7. Bento Grid of Instrument Categories */}
      <InstrumentsBentoGrid />

      {/* 8. Official GI Tag Trademark & Anti-Counterfeit Notice */}
      <AuthenticityNotice />

      {/* 9. Final Call to Action & Workshop Booking */}
      <FinalCtaSection onRequestCatalog={onRequestCatalog} />
    </div>
  )
}
