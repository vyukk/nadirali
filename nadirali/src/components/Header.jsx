import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import NadirAliLogo from './NadirAliLogo'
import NavBar from './NavBar'
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  Award, 
  Sparkles, 
  ShieldCheck, 
  Music, 
  FileText, 
  PhoneCall, 
  Layers,
  History,
  Building
} from 'lucide-react'

export default function Header({ onRequestCatalog }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null) // 'instruments' | 'heritage'
  const location = useLocation()
  const headerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [location.pathname])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setActiveDropdown(null)
      }
    }
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null)
        setMobileMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const instrumentCategories = [
    {
      title: 'Bugles (GI Tagged)',
      desc: 'India’s official Geographical Indication certified copper & brass bugles.',
      path: '/product-category/bugle/',
      badge: 'GI Tagged'
    },
    {
      title: 'Trumpets & Cornets',
      desc: 'Nickel sterling big bell, water key, and pocket cornets for concert & marching.',
      path: '/product-category/trumpet/',
      badge: 'Concert Pitch'
    },
    {
      title: 'Clarinets',
      desc: 'Eb/Bb clarinets with Rico 3.5 & Vandoren reeds for soloists & symphony bands.',
      path: '/product-category/clarinet/',
      badge: 'Woodwind'
    },
    {
      title: 'Euphoniums & French Horns',
      desc: 'Rich low brass resonators built with compensating valves.',
      path: '/product-category/euphonium/',
      badge: 'Heavy Brass'
    },
    {
      title: 'Dhols & Percussion',
      desc: 'P.T. Dhols, 17″ & 12″ Thap Dhols, and marching snares.',
      path: '/product-category/dhols/',
      badge: 'Marching'
    },
    {
      title: 'Bags & Flight Cases',
      desc: 'Custom padded protection bags for euphoniums, trombones, and trumpets.',
      path: '/product-category/bags/',
      badge: 'Accessories'
    }
  ]

  const heritageLinks = [
    {
      title: 'Our 140-Year History (1885)',
      desc: 'From Ali & Imam Baksh in the British Army to Jali Kothi in 1911.',
      path: '/nadir-ali-2/'
    },
    {
      title: 'Faez Aftab (Managing Director)',
      desc: 'Modern executive leadership expanding into 150 export countries.',
      path: '/about-us/'
    },
    {
      title: 'Official GI Tag Recognition',
      desc: 'Government of India certification of the authentic Meerut Bugle.',
      path: '/news/'
    },
    {
      title: 'Royal & Armed Forces Ensembles',
      desc: 'Supplying the American President’s Band, Buckingham Palace & Indian Army.',
      path: '/media/'
    }
  ]

  return (
    <header 
      ref={headerRef}
      className="site-header fixed inset-x-0 top-0 z-50 text-white transition-all duration-300"
    >
      <div className={`relative w-full transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-[#0c0a09] backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.5)]' 
          : 'py-5 lg:py-6 bg-[#0c0a09] border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.35)]'
      }`}>
        <div className="container flex w-full items-center justify-between gap-6">
          
          {/* Nadir Ali Logo */}
          <Link
            to="/"
            className="inline-flex shrink-0 items-center focus:outline-none"
            aria-label="Nadir Ali & Co. Home"
          >
            <NadirAliLogo />
          </Link>

          {/* Desktop Navigation */}
          <NavBar
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
            onRequestCatalog={onRequestCatalog}
          />
          <div className="hidden">
            
            {/* 1. Instruments Megamenu Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('instruments')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'instruments' ? null : 'instruments')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-[14px] font-medium transition-colors cursor-pointer ${
                  activeDropdown === 'instruments' ? 'text-[#D4AF37] bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
                aria-expanded={activeDropdown === 'instruments'}
              >
                <span>Instruments</span>
                <ChevronDown className={`size-3.5 transition-transform duration-200 ${activeDropdown === 'instruments' ? 'rotate-180 text-[#D4AF37]' : 'text-white/60'}`} />
              </button>

              {/* Instruments Panel */}
              <div className={`absolute top-full -left-20 pt-2 w-[560px] transition-all duration-200 ${
                activeDropdown === 'instruments' ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'
              }`}>
                <div className="rounded-2xl border border-white/10 bg-[#0c0a09] p-5 shadow-2xl">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#D4AF37]">
                      Handcrafted Master Instruments
                    </span>
                    <Link to="/product-category/others/" className="text-xs text-white/60 hover:text-white flex items-center gap-1">
                      <span>Full Range</span>
                      <ArrowRight className="size-3" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    {instrumentCategories.map((item) => (
                      <Link
                        key={item.title}
                        to={item.path}
                        className="group flex flex-col rounded-xl p-2.5 transition-colors hover:bg-white/5"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-white group-hover:text-[#D4AF37] transition-colors">
                            {item.title}
                          </span>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-amber-200/80 bg-amber-200/10 px-1.5 py-0.5 rounded">
                            {item.badge}
                          </span>
                        </div>
                        <p className="text-xs text-white/60 mt-0.5 leading-relaxed line-clamp-1">
                          {item.desc}
                        </p>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
                    <span className="flex items-center gap-1.5 text-amber-200">
                      <Award className="size-3.5" />
                      <span>Govt. of India Geographical Indication (GI) Protected</span>
                    </span>
                    <button
                      onClick={() => {
                        setActiveDropdown(null)
                        if (onRequestCatalog) onRequestCatalog()
                      }}
                      className="text-[#D4AF37] hover:underline"
                    >
                      Request Specs PDF
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Heritage Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('heritage')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'heritage' ? null : 'heritage')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-[14px] font-medium transition-colors cursor-pointer ${
                  activeDropdown === 'heritage' ? 'text-[#D4AF37] bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
                aria-expanded={activeDropdown === 'heritage'}
              >
                <span>Heritage & Story</span>
                <ChevronDown className={`size-3.5 transition-transform duration-200 ${activeDropdown === 'heritage' ? 'rotate-180 text-[#D4AF37]' : 'text-white/60'}`} />
              </button>

              <div className={`absolute top-full -left-10 pt-2 w-[440px] transition-all duration-200 ${
                activeDropdown === 'heritage' ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'
              }`}>
                <div className="rounded-2xl border border-white/10 bg-[#0c0a09] p-4 shadow-2xl">
                  <div className="grid grid-cols-1 gap-1.5">
                    {heritageLinks.map((item) => (
                      <Link
                        key={item.title}
                        to={item.path}
                        className="group flex flex-col rounded-xl p-3 transition-colors hover:bg-white/5"
                      >
                        <span className="text-sm font-medium text-white group-hover:text-[#D4AF37] transition-colors">
                          {item.title}
                        </span>
                        <p className="text-xs text-white/60 mt-0.5 leading-relaxed">
                          {item.desc}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Media & News */}
            <Link
              to="/news/"
              className="px-3.5 py-2 rounded-lg text-[14px] font-medium text-white/80 hover:text-white hover:bg-white/5 transition-colors"
            >
              News & Events
            </Link>

            <Link
              to="/media/"
              className="px-3.5 py-2 rounded-lg text-[14px] font-medium text-white/80 hover:text-white hover:bg-white/5 transition-colors"
            >
              Media
            </Link>

            <Link
              to="/contact-us/"
              className="px-3.5 py-2 rounded-lg text-[14px] font-medium text-white/80 hover:text-white hover:bg-white/5 transition-colors"
            >
              Contact Us
            </Link>

          </div>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="hidden xl:flex items-center gap-1.5 rounded-full border border-[#D4AF37]/30 bg-[#371506]/30 px-3 py-1 text-xs text-[#D4AF37]">
              <Award className="size-3.5" />
              <span>GI Tag Tagged</span>
            </div>

            <button
              onClick={() => onRequestCatalog ? onRequestCatalog() : (window.location.href = '/contact-us/')}
              className="catalog-button group relative inline-flex items-center gap-2 justify-center cursor-pointer appearance-none overflow-hidden rounded-lg py-2.5 px-4 text-center whitespace-nowrap select-none transition-all duration-200 bg-[#D4AF37] hover:bg-[#c49f27] active:scale-[0.98] text-black font-semibold text-[14px] shadow-lg shadow-[#D4AF37]/10"
            >
              <span>Request Catalog</span>
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => onRequestCatalog ? onRequestCatalog() : (window.location.href = '/contact-us/')}
              className="catalog-button rounded-lg bg-[#D4AF37] px-3 py-1.5 text-xs font-semibold text-black hover:bg-[#c49f27]"
            >
              Catalog
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] z-40 bg-[#0c0a09] lg:hidden overflow-y-auto px-6 py-6 animate-fadeIn border-t border-white/10 flex flex-col justify-between">
          <div className="space-y-6">
            
            {/* Quick Categories */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#D4AF37]">
                Instrument Categories
              </span>
              <div className="grid grid-cols-2 gap-2 pt-1">
                {instrumentCategories.map((item) => (
                  <Link
                    key={item.title}
                    to={item.path}
                    className="rounded-lg bg-white/5 p-2.5 text-xs text-white/90 hover:text-[#D4AF37] hover:bg-white/10"
                  >
                    <span className="font-medium block">{item.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Navigation links */}
            <div className="space-y-1 border-t border-white/10 pt-4">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#a39893]">
                Heritage & Company
              </span>
              <div className="flex flex-col space-y-1 pt-1">
                <Link to="/nadir-ali-2/" className="text-sm text-white/90 py-2 hover:text-[#D4AF37]">
                  Our 140-Year History
                </Link>
                <Link to="/about-us/" className="text-sm text-white/90 py-2 hover:text-[#D4AF37]">
                  About Faez Aftab (M.D.)
                </Link>
                <Link to="/news/" className="text-sm text-white/90 py-2 hover:text-[#D4AF37]">
                  News & Events
                </Link>
                <Link to="/media/" className="text-sm text-white/90 py-2 hover:text-[#D4AF37]">
                  Media & Performances
                </Link>
                <Link to="/contact-us/" className="text-sm text-white/90 py-2 hover:text-[#D4AF37]">
                  Contact & Meerut Workshop
                </Link>
              </div>
            </div>

          </div>

          <div className="pt-6 border-t border-white/10 mt-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                if (onRequestCatalog) onRequestCatalog()
                else window.location.href = '/contact-us/'
              }}
              className="w-full rounded-lg bg-[#D4AF37] py-3 text-center text-sm font-semibold text-black"
            >
              Request Official Instrument Catalog
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
