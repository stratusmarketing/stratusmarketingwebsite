
import React, { useState } from 'react';

interface PricingProps {
  setView: (view: 'home' | 'engine' | 'contact' | 'pricing') => void;
}

const Pricing: React.FC<PricingProps> = ({ setView }) => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [showFunnel, setShowFunnel] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', sector: 'ROOFING // EXTERIORS' });

  // MISSION CRITICAL: Stripe Activation Links
  const STRIPE_MONTHLY_URL = "https://buy.stripe.com/bJe8wR9gO2Cn5oKdKYfEk00";
  const STRIPE_ANNUAL_URL = "https://buy.stripe.com/cNi6oJ64C2CncRc36kfEk01";

  const features = [
    "Functional Website (10 to 20 Pages)",
    "Automated Lead Follow-up System",
    "Missed Call Text Back Technology",
    "Five-Star Magic Review Funnel",
    "One-Click Marketing Campaigns",
    "On-Site SEO Optimization",
    "Local Lead Generation Ready",
    "High-Performance Hosting Infrastructure"
  ];

  const handleAuthorizedActivation = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Determine the tactical target based on plan selection
    const targetUrl = isAnnual ? STRIPE_ANNUAL_URL : STRIPE_MONTHLY_URL;
    
    try {
      // PHASE 01: Capture Lead Data (High-Priority Dispatch)
      // We log the lead before the handoff to ensure follow-up capability
      await fetch('https://services.leadconnectorhq.com/hooks/pqvS0I6Spk90npfeB3Dp/webhook-trigger/f3a6e06c-34ac-48b6-a449-58f0cc5ac649', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          plan_type: isAnnual ? 'Annual' : 'Monthly',
          investment_amount: isAnnual ? '$2,970' : '$297',
          source: 'Stratus Web Pricing Funnel',
          status: 'Phase 01 Complete // Stripe Handoff Initiated',
          timestamp: new Date().toISOString()
        }),
      });

      // PHASE 02: Tactical Handoff to Stripe
      // We simulate an encrypted handoff for 800ms for brand feel
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 800);

    } catch (error) {
      console.error('System Routing Error:', error);
      // Fail-safe: Always attempt payment redirect
      window.location.href = targetUrl;
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-500 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-8">
            Capital Allocation // Mission Costs
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter mb-6 leading-none text-center">
            Investment <span className="text-sky-500 underline decoration-sky-500/20">Matrix.</span>
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium text-center">
            Transparent, performance-driven pricing for businesses that demand elite reliability.
          </p>
        </div>

        {!showFunnel ? (
          <>
            <div className="flex items-center justify-center gap-6 mb-16">
              <span className={`text-[10px] font-black uppercase tracking-widest transition-colors ${!isAnnual ? 'text-sky-500' : 'text-slate-400'}`}>Monthly</span>
              <button 
                onClick={() => setIsAnnual(!isAnnual)}
                className="w-16 h-8 bg-slate-200 dark:bg-slate-800 rounded-full relative p-1 transition-colors"
              >
                <div className={`w-6 h-6 bg-sky-600 rounded-full transition-transform duration-300 ${isAnnual ? 'translate-x-8' : 'translate-x-0'}`}></div>
              </button>
              <div className="flex items-center gap-3">
                <span className={`text-[10px] font-black uppercase tracking-widest transition-colors ${isAnnual ? 'text-sky-500' : 'text-slate-400'}`}>Annually</span>
                <span className="bg-emerald-500/10 text-emerald-500 text-[8px] font-black px-2 py-1 rounded-full uppercase tracking-widest animate-pulse border border-emerald-500/20">
                  Save $600
                </span>
              </div>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="relative group p-1 rounded-[3rem] bg-gradient-to-b from-sky-500/20 to-transparent">
                <div className="bg-white dark:bg-slate-950 rounded-[2.9rem] p-12 md:p-16 border border-slate-200/50 dark:border-white/5 relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 radar-grid opacity-5 pointer-events-none"></div>
                  
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="text-center mb-12">
                      <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter mb-4">Elite Operational Plan</h3>
                      <div className="flex items-baseline justify-center gap-2">
                        <span className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter italic">
                          ${isAnnual ? '2,970' : '297'}
                        </span>
                        <span className="text-slate-400 font-black uppercase tracking-widest text-xs">
                          / {isAnnual ? 'Year' : 'Month'}
                        </span>
                      </div>
                      {isAnnual && (
                        <p className="mt-4 text-emerald-500 text-xs font-black uppercase tracking-widest italic">
                          (Billed annually - includes $600 discount)
                        </p>
                      )}
                    </div>

                    <div className="w-full h-px bg-slate-200 dark:bg-slate-800/50 mb-12"></div>

                    <div className="w-full grid md:grid-cols-2 gap-y-6 gap-x-12 mb-16">
                      {features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-5 h-5 bg-sky-500/10 text-sky-500 rounded-md flex items-center justify-center border border-sky-500/20">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button 
                      onClick={() => setShowFunnel(true)}
                      className="w-full bg-sky-600 text-white py-6 rounded-2xl text-[11px] font-black uppercase tracking-[0.4em] animate-breathe-glow hover:bg-sky-500 transition-all flex items-center justify-center gap-4 group"
                    >
                      Authorize System Activation
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                    
                    <p className="mt-6 text-[8px] font-bold text-slate-400 uppercase tracking-widest text-center">
                      No Hidden Extraction Fees // Cancel Protocol Anytime
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="max-w-xl mx-auto animate-in zoom-in duration-500">
            <div className="bg-white dark:bg-slate-950 p-10 md:p-14 rounded-[3rem] border border-slate-200/50 dark:border-white/5 shadow-3xl relative overflow-hidden">
              <div className="absolute inset-0 radar-grid opacity-5 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter">System Activation</h3>
                    <p className="text-[10px] font-black text-sky-500 uppercase tracking-widest mt-1">Plan: {isAnnual ? 'Elite Annual' : 'Elite Monthly'}</p>
                  </div>
                  <button onClick={() => setShowFunnel(false)} className="text-[9px] font-black text-slate-400 uppercase tracking-widest hover:text-red-500 transition-colors">Cancel</button>
                </div>
                
                <div className="mb-10 flex items-center gap-4 p-4 bg-sky-500/5 border border-sky-500/10 rounded-2xl">
                   <div className="w-8 h-8 bg-sky-500/20 text-sky-500 rounded-full flex items-center justify-center text-xs font-black">1</div>
                   <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Step 01: Deploy Operational Details</p>
                </div>

                <form onSubmit={handleAuthorizedActivation} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-[9px] font-black text-sky-500 uppercase tracking-[0.3em] mb-3 block">Primary Operator // Name</label>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="IDENTIFY YOURSELF"
                        className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200/10 dark:border-white/5 rounded-xl px-6 py-5 text-sm font-bold tracking-widest text-slate-900 dark:text-white focus:ring-1 focus:ring-sky-500 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-[9px] font-black text-sky-500 uppercase tracking-[0.3em] mb-3 block">Comms Frequency // Phone</label>
                      <input 
                        required
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+1 (000) 000-0000"
                        className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200/10 dark:border-white/5 rounded-xl px-6 py-5 text-sm font-bold tracking-widest text-slate-900 dark:text-white focus:ring-1 focus:ring-sky-500 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-[9px] font-black text-sky-500 uppercase tracking-[0.3em] mb-3 block">Email Data Link</label>
                      <input 
                        required
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="OPERATOR@SECTOR.COM"
                        className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200/10 dark:border-white/5 rounded-xl px-6 py-5 text-sm font-bold tracking-widest text-slate-900 dark:text-white focus:ring-1 focus:ring-sky-500 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-[9px] font-black text-sky-500 uppercase tracking-[0.3em] mb-3 block">Operational Sector</label>
                      <select 
                        value={formData.sector}
                        onChange={(e) => setFormData({...formData, sector: e.target.value})}
                        className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200/10 dark:border-white/5 rounded-xl px-6 py-5 text-sm font-bold tracking-widest text-slate-900 dark:text-white focus:ring-1 focus:ring-sky-500 outline-none appearance-none cursor-pointer"
                      >
                        <option>ROOFING // EXTERIORS</option>
                        <option>HVAC // CLIMATE</option>
                        <option>PLUMBING // INFRA</option>
                        <option>ELECTRICAL // GRID</option>
                        <option>OTHER // CUSTOM</option>
                      </select>
                    </div>
                  </div>

                  <button 
                    disabled={loading}
                    type="submit"
                    className="w-full bg-sky-600 text-white py-6 rounded-2xl text-[11px] font-black uppercase tracking-[0.4em] animate-breathe-glow hover:bg-sky-500 transition-all flex items-center justify-center gap-4 disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Encrypting Phase 02...
                      </>
                    ) : (
                      <>
                        Handoff to Secure Stripe Portal
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 15v2m0 0v3m0-3h3m-3 0H9m12-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </>
                    )}
                  </button>
                  <div className="flex items-center justify-center gap-3 mt-4">
                     <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                     <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">
                       Secure Stripe Link Active // 256-bit AES Encryption
                     </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-center mt-16">
          <button 
            onClick={() => setView('home')} 
            className="text-slate-400 hover:text-sky-500 font-black uppercase tracking-widest text-[9px] flex items-center gap-2 transition-all"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            Abort to Base
          </button>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
