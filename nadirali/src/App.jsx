import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import InquireModal from './components/InquireModal'

// Pages
import HomePage from './pages/HomePage'
import AboutUsPage from './pages/AboutUsPage'
import ContactUsPage from './pages/ContactUsPage'
import MediaPage from './pages/MediaPage'
import News from './pages/News'
import PrivacyPolicy from './pages/PrivacyPolicy'
import ReturnsPage from './pages/ReturnsPage'
import TermsAndConditionsPage from './pages/TermsAndConditionsPage'

// Product Category Pages
import BagsPage from './pages/product-pages/BagsPage'
import BuglePage from './pages/product-pages/BuglePage'
import ClarinetPage from './pages/product-pages/ClarinetPage'
import DholsPage from './pages/product-pages/DholsPage'
import EuphoniumPage from './pages/product-pages/EuphoniumPage'
import OthersPage from './pages/product-pages/OthersPage'
import TrumpetPage from './pages/product-pages/TrumpetPage'

// Scroll to top helper
function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

function AppLayout() {
  const [catalogModalOpen, setCatalogModalOpen] = useState(false)

  const handleOpenCatalog = () => setCatalogModalOpen(true)
  const handleCloseCatalog = () => setCatalogModalOpen(false)

  return (
    <div className="flex min-h-screen flex-col bg-[#0c0a09] text-white selection:bg-[#371506] selection:text-[#D4AF37]">
      <ScrollToTop />
      
      {/* Global Amperos-Style Fixed Header */}
      <Header onRequestCatalog={handleOpenCatalog} />

      {/* Main Content Area */}
      <main className="site-main flex-1">
        <Routes>
          <Route path="/" element={<HomePage onRequestCatalog={handleOpenCatalog} />} />
          <Route path="/nadir-ali-2/" element={<AboutUsPage onRequestCatalog={handleOpenCatalog} />} />
          <Route path="/about-us/" element={<AboutUsPage onRequestCatalog={handleOpenCatalog} />} />
          
          {/* Product Categories */}
          <Route path="/product-category/bags/" element={<BagsPage />} />
          <Route path="/product-category/bugle/" element={<BuglePage />} />
          <Route path="/product-category/clarinet/" element={<ClarinetPage />} />
          <Route path="/product-category/dhols/" element={<DholsPage />} />
          <Route path="/product-category/euphonium/" element={<EuphoniumPage />} />
          <Route path="/product-category/trumpet/" element={<TrumpetPage />} />
          <Route path="/product-category/others/" element={<OthersPage />} />

          {/* Media & News */}
          <Route path="/media/" element={<MediaPage />} />
          <Route path="/news/" element={<News />} />
          <Route path="/contact-us/" element={<ContactUsPage />} />

          {/* Legal */}
          <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
          <Route path="/returns/" element={<ReturnsPage />} />
          <Route path="/terms-and-conditions/" element={<TermsAndConditionsPage />} />

          {/* Fallback */}
          <Route path="*" element={<HomePage onRequestCatalog={handleOpenCatalog} />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Catalog & Inquire Modal */}
      <InquireModal isOpen={catalogModalOpen} onClose={handleCloseCatalog} />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}
