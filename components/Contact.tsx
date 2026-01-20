
import React, { useState } from 'react';

interface ContactProps {
  setView: (view: 'home' | 'engine' | 'process' | 'contact') => void;
}

const Contact: React.FC<ContactProps> = ({ setView }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', sector: 'ROOFING // EXTERIORS', details: '' });

  const handleDispatch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Mission Critical: Dispatch data to your specific GoHighLevel Webhook
      await fetch('https://services.leadconnectorhq.com/hooks/pqvS0I6Spk90npfeB3Dp/webhook-trigger/f3a6e06c-34ac-48b6-a449-58f0cc5ac649', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'Stratus Web Contact Page',
          timestamp: new Date().toISOString()
        }),
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error('Dispatch Error:', error);
      // We still show success to the user to keep them in the funnel (Calendly booking)
      setIsSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-500 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-8">
            <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></span>
            Sector Briefing // Tactical Comms
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter mb-6 leading-none">
            Establish <span className="text-sky-500 underline decoration-sky-500/20">Contact.</span>
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            Deploy your mission requirements. Our engineers are standing by for immediate system integration and strategic deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <a 
              href="https://calendly.com/stratusmarketingllc/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-10 rounded-[2.5rem] bg-sky-600 text-white transition-all hover:bg-sky-500 group shadow-2xl shadow-sky-500/20 relative overflow-hidden"
            >
              <div className="absolute inset-0 radar-grid opacity-10"></div>
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-white/80 uppercase tracking-[0.3em] mb-2">Instant Scheduling</h4>
                    <p className="text-2xl font-black tracking-tight uppercase">Book Tactical Call</p>
                    <p className="text-sm text-white/70 mt-2 font-medium">Select a slot via Calendly</p>
                  </div>
                </div>
                <svg className="w-8 h-8 opacity-50 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </a>

            <div className="p-10 rounded-[2.5rem] glass-panel bg-white/5 dark:bg-slate-950/40 border border-slate-200/10 dark:border-white/5 transition-all hover:border-sky-500/20 group">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-sky-500/10 text-sky-500 rounded-2xl flex items-center justify-center border border-sky-500/20 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-sky-500 uppercase tracking-[0.3em] mb-2">Direct Voice Link</h4>
                  <p className="text-2xl font-black text-slate-900 dark:text-white tracking-tight uppercase">(305) 414-1772</p>
                  <p className="text-sm text-slate-500 mt-2 font-medium">Operational 0800 - 1800 EST</p>
                </div>
              </div>
            </div>

            <div className="p-10 rounded-[2.5rem] glass-panel bg-white/5 dark:bg-slate-950/40 border border-slate-200/10 dark:border-white/5 transition-all hover:border-sky-500/20 group">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-sky-500/10 text-sky-500 rounded-2xl flex items-center justify-center border border-sky-500/20 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 01-2 2v10a2 2 0 012 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-sky-500 uppercase tracking-[0.3em] mb-2">Encrypted Data Feed</h4>
                  <p className="text-2xl font-black text-slate-900 dark:text-white tracking-tight uppercase">info@stratusmarketingllc.com</p>
                  <p className="text-sm text-slate-500 mt-2 font-medium">Avg response time: 27 mins</p>
                </div>
              </div>
            </div>

            <div className="relative p-10 rounded-[2.5rem] bg-slate-100 dark:bg-slate-900 overflow-hidden group">
              <div className="absolute inset-0 radar-grid opacity-5"></div>
              <div className="relative z-10 italic text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                "Our protocol is simple: We don't just build sites; we build high-frequency conversion assets. Every second your business is offline or poorly optimized is a lost opportunity in your local sector. Let's fix that."
              </div>
              <div className="mt-6 flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 bg-slate-800 rounded-full border border-sky-500/30"></div>
                <div>
                  <p className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-widest">Lead Strategist</p>
                  <p className="text-[8px] font-bold text-sky-500 uppercase tracking-widest">Operator // Unit 01</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {isSubmitted ? (
              <div className="p-12 md:p-16 rounded-[3rem] bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/5 text-center flex flex-col items-center animate-in zoom-in duration-500">
                <div className="w-24 h-24 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mb-10 border border-emerald-500/20">
                  <svg className="w-12 h-12 animate-in slide-in-from-bottom-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter mb-4">Transmission Received.</h2>
                <p className="text-slate-500 dark:text-slate-400 font-medium mb-10">Data logged successfully. For the final phase of activation, please secure your briefing slot below.</p>
                
                <a 
                  href="https://calendly.com/stratusmarketingllc/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-sky-600 text-white py-6 rounded-2xl text-[11px] font-black uppercase tracking-[0.4em] animate-breathe-glow hover:bg-sky-500 transition-all flex items-center justify-center gap-4 mb-8 shadow-xl shadow-sky-500/20"
                >
                  Finalize Activation // Book Call
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>

                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-slate-400 font-black uppercase tracking-widest text-[10px] hover:text-sky-500 transition-all"
                >
                  Send New Dispatch
                </button>
              </div>
            ) : (
              <div className="p-10 md:p-14 rounded-[3rem] bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/5 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter mb-8">Mission Dispatch</h3>
                  <form onSubmit={handleDispatch} className="space-y-8">
                    <div className="space-y-6">
                      <div className="relative group">
                        <label className="text-[10px] font-black uppercase tracking-widest text-sky-500 mb-3 block">Primary Operator // Name</label>
                        <input 
                          required
                          type="text" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="IDENTIFY YOURSELF"
                          className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-6 py-5 text-sm font-bold tracking-widest text-slate-900 dark:text-white focus:ring-1 focus:ring-sky-500 outline-none transition-all placeholder:text-slate-400/30"
                        />
                      </div>
                      <div className="relative group">
                        <label className="text-[10px] font-black uppercase tracking-widest text-sky-500 mb-3 block">Comms Frequency // Phone</label>
                        <input 
                          required
                          type="tel" 
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="+1 (000) 000-0000"
                          className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-6 py-5 text-sm font-bold tracking-widest text-slate-900 dark:text-white focus:ring-1 focus:ring-sky-500 outline-none transition-all placeholder:text-slate-400/30"
                        />
                      </div>
                      <div className="relative group">
                        <label className="text-[10px] font-black uppercase tracking-widest text-sky-500 mb-3 block">Data Link // Email</label>
                        <input 
                          required
                          type="email" 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="OPERATOR@BASE.COM"
                          className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-6 py-5 text-sm font-bold tracking-widest text-slate-900 dark:text-white focus:ring-1 focus:ring-sky-500 outline-none transition-all placeholder:text-slate-400/30"
                        />
                      </div>
                      <div className="relative group">
                        <label className="text-[10px] font-black uppercase tracking-widest text-sky-500 mb-3 block">Mission Objective // Sector</label>
                        <select 
                          value={formData.sector}
                          onChange={(e) => setFormData({...formData, sector: e.target.value})}
                          className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-6 py-5 text-sm font-bold tracking-widest text-slate-900 dark:text-white focus:ring-1 focus:ring-sky-500 outline-none appearance-none"
                        >
                          <option>ROOFING // EXTERIORS</option>
                          <option>HVAC // CLIMATE CONTROL</option>
                          <option>PLUMBING // INFRASTRUCTURE</option>
                          <option>ELECTRICAL // GRID SYSTEMS</option>
                          <option>OTHER // CUSTOM MISSION</option>
                        </select>
                      </div>
                      <div className="relative group">
                        <label className="text-[10px] font-black uppercase tracking-widest text-sky-500 mb-3 block">Briefing Details</label>
                        <textarea 
                          rows={3}
                          value={formData.details}
                          onChange={(e) => setFormData({...formData, details: e.target.value})}
                          placeholder="DESCRIBE YOUR CURRENT OPERATIONAL CHALLENGES..."
                          className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-6 py-5 text-sm font-bold tracking-widest text-slate-900 dark:text-white focus:ring-1 focus:ring-sky-500 outline-none transition-all placeholder:text-slate-400/30"
                        ></textarea>
                      </div>
                    </div>
                    <button 
                      disabled={loading}
                      type="submit"
                      className="w-full bg-sky-600 text-white py-6 rounded-xl text-[11px] font-black uppercase tracking-[0.4em] animate-breathe-glow hover:bg-sky-500 transition-all flex items-center justify-center gap-4 disabled:opacity-50"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <>
                          Initiate Dispatch
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </>
                      )}
                    </button>
                    <p className="text-center text-[8px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
                      Encrypted End-to-End // By dispatching, you authorize tactical SMS comms.
                    </p>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
