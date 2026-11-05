import React from 'react'
import { Link } from 'react-router-dom'
import NadirAliLogo from './NadirAliLogo'
import { MapPin, Phone, Mail, Clock, Award } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="flex flex-col items-center bg-[#fdfaf8] text-black pt-16">
      <div className="container flex w-full max-w-[1280px] flex-col gap-12 sm:gap-16 lg:gap-20 transition-all duration-275 pb-12">
        
        {/* Top Section with Logo and 4 Columns */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-20">
          
          {/* Logo Brand Mark & Info */}
          <div className="flex flex-col gap-4 max-w-[320px]">
            <Link to="/" className="inline-flex shrink-0 focus:outline-none">
              <NadirAliLogo />
            </Link>
            <p className="text-sm text-black/70 leading-relaxed mt-2">
              India’s premier and oldest manufacturer of brass wind instruments and band equipment since 1885. GI Tagged by the Government of India.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs font-mono text-[#371506]">
              <Award className="size-4 text-[#D4AF37]" />
              <span>Official GI Registry No. 2026-IN</span>
            </div>
          </div>

          {/* Links Grid */}
          <nav aria-label="Footer navigation" className="w-full lg:max-w-[840px]">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-10">
              
              {/* Instruments */}
              <div className="flex flex-col gap-4">
                <h3 className="font-serif text-lg font-medium text-[#371506]">Instruments</h3>
                <ul className="flex flex-col gap-2.5 text-sm text-black/75">
                  <li><Link to="/product-category/bugle/" className="hover:text-[#371506] transition-colors">Bugles (GI Tagged)</Link></li>
                  <li><Link to="/product-category/trumpet/" className="hover:text-[#371506] transition-colors">Trumpets & Cornets</Link></li>
                  <li><Link to="/product-category/clarinet/" className="hover:text-[#371506] transition-colors">Clarinets</Link></li>
                  <li><Link to="/product-category/euphonium/" className="hover:text-[#371506] transition-colors">Euphoniums</Link></li>
                  <li><Link to="/product-category/dhols/" className="hover:text-[#371506] transition-colors">Dhols & Percussion</Link></li>
                  <li><Link to="/product-category/bags/" className="hover:text-[#371506] transition-colors">Flight Bags & Cases</Link></li>
                </ul>
              </div>

              {/* Heritage */}
              <div className="flex flex-col gap-4">
                <h3 className="font-serif text-lg font-medium text-[#371506]">Our Heritage</h3>
                <ul className="flex flex-col gap-2.5 text-sm text-black/75">
                  <li><Link to="/nadir-ali-2/" className="hover:text-[#371506] transition-colors">140-Year History (1885)</Link></li>
                  <li><Link to="/about-us/" className="hover:text-[#371506] transition-colors">About Faez Aftab (M.D.)</Link></li>
                  <li><Link to="/nadir-ali-2/#jali-kothi" className="hover:text-[#371506] transition-colors">Jali Kothi Foundry</Link></li>
                  <li><Link to="/nadir-ali-2/#boosey" className="hover:text-[#371506] transition-colors">Boosey & Hawkes JV</Link></li>
                  <li><Link to="/news/" className="hover:text-[#371506] transition-colors">GI Tag Recognition</Link></li>
                </ul>
              </div>

              {/* News & Media */}
              <div className="flex flex-col gap-4">
                <h3 className="font-serif text-lg font-medium text-[#371506]">News & Media</h3>
                <ul className="flex flex-col gap-2.5 text-sm text-black/75">
                  <li><Link to="/news/" className="hover:text-[#371506] transition-colors">GI Tag Announcement</Link></li>
                  <li><Link to="/news/#counterfeit" className="hover:text-[#371506] transition-colors">Anti-Counterfeit Bust</Link></li>
                  <li><Link to="/media/" className="hover:text-[#371506] transition-colors">Classic FM Awards</Link></li>
                  <li><Link to="/media/#recordings" className="hover:text-[#371506] transition-colors">Performance Audio</Link></li>
                  <li><Link to="/contact-us/" className="hover:text-[#371506] transition-colors">Press Inquiries</Link></li>
                </ul>
              </div>

              {/* Workshop Contact */}
              <div className="flex flex-col gap-4">
                <h3 className="font-serif text-lg font-medium text-[#371506]">Workshop</h3>
                <div className="flex flex-col gap-3 text-xs text-black/75 leading-relaxed">
                  <div className="flex items-start gap-2">
                    <MapPin className="size-4 shrink-0 text-[#371506] mt-0.5" />
                    <span>Jali Kothi, Meerut – 250002, Uttar Pradesh, India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="size-4 shrink-0 text-[#371506]" />
                    <span>+91 121 251 1885</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="size-4 shrink-0 text-[#371506]" />
                    <span>info@nadiralico.in</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="size-4 shrink-0 text-[#371506]" />
                    <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>

            </div>
          </nav>

        </div>

        {/* Bottom Bar: Badges, Legal */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-black/10 pt-8">
          
          {/* Copyright & Legal */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-black/60">
            <span>© 1885 – {new Date().getFullYear()} Nadir Ali & Company. All rights reserved.</span>
            <Link to="/privacy-policy/" className="hover:underline">Privacy Policy</Link>
            <Link to="/terms-and-conditions/" className="hover:underline">Terms & Conditions</Link>
            <Link to="/returns/" className="hover:underline">Returns & Warranty</Link>
          </div>

          <div className="flex items-center gap-4 text-xs text-[#371506] font-mono">
            <span>Handmade with Pride in Meerut, India 🇮🇳</span>
          </div>

        </div>

      </div>

      {/* Footer Bottom Texture Mask */}
      <div className="w-full h-24 sm:h-32 relative overflow-hidden">
        <img
          src="/images/footer-mask.jpg"
          alt="Footer mask visual"
          className="w-full h-full object-cover opacity-80"
          loading="lazy"
        />
      </div>
    </footer>
  )
}
