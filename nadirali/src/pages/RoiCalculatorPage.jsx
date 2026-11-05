import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calculator, DollarSign, TrendingUp, Clock, CheckCircle2, ArrowRight } from 'lucide-react'

export default function RoiCalculatorPage({ onRequestDemo }) {
  const [claimVolume, setClaimVolume] = useState(3000)
  const [avgClaimValue, setAvgClaimValue] = useState(480)
  const [denialRate, setDenialRate] = useState(12)
  const [currentRecoveryRate, setCurrentRecoveryRate] = useState(42)

  // Calculations
  const annualTotalBilled = claimVolume * 12 * avgClaimValue
  const annualDenialsCount = claimVolume * 12 * (denialRate / 100)
  const annualDenialDollars = annualDenialsCount * avgClaimValue
  
  // Amperos benchmark: boosts denial recovery to 78%
  const amperosRecoveryRate = 78
  const currentRecovered = annualDenialDollars * (currentRecoveryRate / 100)
  const amperosRecovered = annualDenialDollars * (amperosRecoveryRate / 100)
  const netNewRevenue = Math.max(0, amperosRecovered - currentRecovered)
  
  // Labor savings: approx $45/claim in manual staff rework saved
  const staffHoursSaved = Math.round(annualDenialsCount * 1.8)
  const staffCostSaved = Math.round(annualDenialsCount * 38)
  const totalValueCreated = netNewRevenue + staffCostSaved

  return (
    <div className="w-full min-h-screen bg-[#0c0a09] text-white pt-28 pb-20">
      <div className="container max-w-5xl flex flex-col gap-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#a39893]">
            Interactive Financial Model
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif text-[#fcf7f4]">
            Calculate Your Practice's Recoverable Revenue
          </h1>
          <p className="text-base sm:text-lg text-white/70">
            See the projected impact of automating first-touch denials and accelerating collections with Amperos agentic AI.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Box */}
          <div className="lg:col-span-6 rounded-2xl bg-[#141210] border border-white/10 p-6 sm:p-8 flex flex-col gap-6 shadow-xl">
            <div className="flex items-center gap-2 border-b border-white/10 pb-4">
              <Calculator className="size-5 text-amber-200" />
              <h2 className="text-lg font-medium text-white">Your Organization Metrics</h2>
            </div>

            {/* Slider 1: Monthly Claims */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-sm">
                <span className="text-white/70">Monthly Claim Volume</span>
                <span className="font-mono text-emerald-400 font-semibold">{claimVolume.toLocaleString()} claims</span>
              </div>
              <input
                type="range"
                min="500"
                max="25000"
                step="250"
                value={claimVolume}
                onChange={(e) => setClaimVolume(Number(e.target.value))}
                className="w-full accent-emerald-400 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-white/40">
                <span>500</span>
                <span>10,000</span>
                <span>25,000+</span>
              </div>
            </div>

            {/* Slider 2: Average Claim Value */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-sm">
                <span className="text-white/70">Average Claim Value</span>
                <span className="font-mono text-emerald-400 font-semibold">${avgClaimValue}</span>
              </div>
              <input
                type="range"
                min="100"
                max="3000"
                step="50"
                value={avgClaimValue}
                onChange={(e) => setAvgClaimValue(Number(e.target.value))}
                className="w-full accent-emerald-400 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-white/40">
                <span>$100</span>
                <span>$1,500</span>
                <span>$3,000+</span>
              </div>
            </div>

            {/* Slider 3: Denial Rate */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-sm">
                <span className="text-white/70">Initial Payor Denial Rate</span>
                <span className="font-mono text-amber-400 font-semibold">{denialRate}%</span>
              </div>
              <input
                type="range"
                min="3"
                max="30"
                step="1"
                value={denialRate}
                onChange={(e) => setDenialRate(Number(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-white/40">
                <span>3% (Top tier)</span>
                <span>12% (Average)</span>
                <span>30%</span>
              </div>
            </div>

            {/* Slider 4: Current Recovery Rate */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-sm">
                <span className="text-white/70">Current In-House Denial Recovery Rate</span>
                <span className="font-mono text-white font-semibold">{currentRecoveryRate}%</span>
              </div>
              <input
                type="range"
                min="15"
                max="75"
                step="1"
                value={currentRecoveryRate}
                onChange={(e) => setCurrentRecoveryRate(Number(e.target.value))}
                className="w-full accent-white cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-white/40">
                <span>15%</span>
                <span>45% (Typical)</span>
                <span>75%</span>
              </div>
            </div>

            <div className="rounded-lg bg-white/5 p-4 text-xs text-white/60 leading-relaxed border border-white/5">
              💡 Benchmarks based on aggregated outcomes across Amperos specialty medical practices and automated clearinghouse reconciliation.
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Primary Net New Card */}
            <div className="rounded-2xl bg-gradient-to-br from-[#371506] via-[#1c1410] to-[#141210] border border-[#a39893]/30 p-8 shadow-2xl relative overflow-hidden">
              <div className="flex flex-col gap-2">
                <span className="text-xs uppercase font-mono tracking-wider text-amber-200">
                  Projected Annual Net New Revenue
                </span>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#fcf7f4] font-semibold tabular-nums mt-1">
                  ${Math.round(netNewRevenue).toLocaleString()}
                </div>
                <p className="text-sm text-stone-300 mt-1">
                  Additional collected cash that would otherwise remain written off or expired in AR backlogs.
                </p>
              </div>

              {/* Sub metrics */}
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/10">
                <div>
                  <span className="text-xs text-white/50 block">Annual Staff Hours Saved</span>
                  <span className="text-xl sm:text-2xl font-mono font-semibold text-emerald-400 mt-0.5 block">
                    {staffHoursSaved.toLocaleString()} hrs
                  </span>
                </div>
                <div>
                  <span className="text-xs text-white/50 block">Operational RCM Cost Saved</span>
                  <span className="text-xl sm:text-2xl font-mono font-semibold text-emerald-400 mt-0.5 block">
                    ${staffCostSaved.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-3">
                <div className="flex justify-between text-xs text-white/70">
                  <span>Current Annual Denied Volume:</span>
                  <span className="font-mono">${Math.round(annualDenialDollars).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xs text-white/70">
                  <span>Amperos Target Recovery:</span>
                  <span className="font-mono text-emerald-400">78% ({Math.round(amperosRecovered).toLocaleString()})</span>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="rounded-2xl bg-[#141210] border border-white/10 p-6 sm:p-8 flex flex-col gap-4">
              <h3 className="text-xl font-serif text-white">
                Get a custom audit for your EHR and payer mix
              </h3>
              <p className="text-sm text-white/70">
                Share an anonymized 835 remittance file or schedule a brief consultation to uncover your practice's specific collection upside.
              </p>
              <button
                onClick={() => onRequestDemo ? onRequestDemo() : (window.location.href = '/request-a-demo')}
                className="rounded-lg bg-[#fff5f0] hover:bg-[#ffe8dc] py-3 text-center text-sm font-semibold text-black transition-colors flex items-center justify-center gap-2"
              >
                <span>Request Custom Practice ROI Audit</span>
                <ArrowRight className="size-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

