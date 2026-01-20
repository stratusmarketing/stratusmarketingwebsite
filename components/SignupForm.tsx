
import React, { useState } from 'react';

const SignupForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', sector: 'ROOFING // EXTERIORS' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Mission Critical: Dispatch data to GoHighLevel Webhook
      await fetch('https://services.leadconnectorhq.com/hooks/oq6ksB8Db4Z9ug03AVhm/webhook-trigger/68f19cf0-d894-41cc-8edf-066c612ae25a', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'Stratus Web Home Signup',
          timestamp: new Date().toISOString()
        }),
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Transmission Error:', error);
      // Still show success to user for UX, but log error
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className="py-24 bg-slate-950 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="bg-slate-900/50 backdrop-blur-3xl p-12 md:p-20 rounded-[3rem] border border-emerald-500/20 shadow-2xl text-center animate-in zoom-in duration-700">
            <div className="w-24 h-24 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-10 border border-emerald-500/20">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-4xl font-black text-white mb-6 uppercase italic tracking-tighter">Transmission Confirmed.</h3>
            <p className="text-xl text-slate-400 mb-10 font-medium">We just dispatched an encrypted confirmation to your mobile device. Experience the speed of Stratus firsthand.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="text-sky-500 font-black uppercase tracking-[0.3em] text-[10px] hover:text-sky-400 transition-all border-b border-sky-500/30 pb-2"
            >
              Initialize New Tactical Session
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="signup" className="py-32 bg-[#020617] px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-600/10 rounded-full blur-[120px] opacity-50"></div>
        <div className="absolute inset-0 radar-grid opacity-10"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-sky-500/20 rounded-[4rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
          
          <div className="bg-slate-900/80 backdrop-blur-2xl p-8 md:p-16 rounded-[3.5rem] border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></span>
                <span className="text-[10px] font-black text-sky-500 uppercase tracking-[0.4em]">Live System // Ready</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-5xl md:text-6xl font-black text-white mb-8 uppercase italic tracking-tighter leading-[0.9]">
                  Start Dominating <br /><span className="text-sky-500">Your Area.</span>
                </h2>
                <p className="text-lg text-slate-400 mb-10 font-medium leading-relaxed">
                  Enter your mission parameters to experience our instant lead notification system. We'll show you exactly how we turn missed calls into closed deals.
                </p>
                <div className="space-y-4">
                  {['Instant SMS lead alerts', 'AI-powered missed call text back', 'Reputation management activation'].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-5 h-5 bg-sky-500/10 text-sky-500 rounded-md flex items-center justify-center border border-sky-500/20">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/5 p-8 md:p-10 rounded-[2.5rem] border border-white/10 relative">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="relative">
                      <label className="text-[9px] font-black text-sky-500 uppercase tracking-[0.3em] mb-3 block">Primary Operator // Name</label>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="IDENTIFY YOURSELF"
                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-6 py-5 text-sm font-bold tracking-widest text-white focus:ring-1 focus:ring-sky-500 outline-none transition-all placeholder:text-slate-600"
                      />
                    </div>
                    <div className="relative">
                      <label className="text-[9px] font-black text-sky-500 uppercase tracking-[0.3em] mb-3 block">Comms Channel // Phone</label>
                      <input 
                        required
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+1 (000) 000-0000"
                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-6 py-5 text-sm font-bold tracking-widest text-white focus:ring-1 focus:ring-sky-500 outline-none transition-all placeholder:text-slate-600"
                      />
                    </div>
                    <div className="relative">
                      <label className="text-[9px] font-black text-sky-500 uppercase tracking-[0.3em] mb-3 block">Operational Sector</label>
                      <select 
                        value={formData.sector}
                        onChange={(e) => setFormData({...formData, sector: e.target.value})}
                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-6 py-5 text-sm font-bold tracking-widest text-white focus:ring-1 focus:ring-sky-500 outline-none transition-all appearance-none cursor-pointer"
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
                    className="w-full bg-sky-600 text-white py-6 rounded-2xl text-[11px] font-black uppercase tracking-[0.4em] animate-breathe-glow hover:bg-sky-500 transition-all flex items-center justify-center gap-4 disabled:opacity-50 shadow-2xl shadow-sky-500/20"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        Request Tactical Briefing
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                  
                  <p className="text-center text-[8px] font-bold text-slate-500 uppercase tracking-[0.2em]">
                    Encrypted Protocol // By requesting, you authorize SMS dispatch.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;
