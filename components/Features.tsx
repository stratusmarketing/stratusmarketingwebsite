
import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="engine" className="py-24 bg-slate-50 dark:bg-slate-900/50 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-32">
        
        {/* Module 1: Functional Foundation */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-block bg-sky-500/10 text-sky-500 text-[10px] font-black px-4 py-1 rounded-full tracking-[0.3em] uppercase mb-6">Module 01 // Visibility</div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 italic uppercase tracking-tighter leading-none">
              Get <span className="text-sky-500">Found.</span> <br />Showcase Success.
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-medium">
              We provide a functional website that ensures your business is visible exactly where it matters. 
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "10 to 20 High-Converting Pages",
                "Optimized for Local Google Search",
                "Full Mobile-Responsive Design",
                "Real-Time Project Showcasing"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 bg-sky-500 rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="aspect-video bg-slate-200 dark:bg-slate-800 rounded-2xl border border-slate-300 dark:border-slate-700 overflow-hidden shadow-2xl relative">
                <div className="absolute inset-0 radar-grid opacity-10"></div>
                <div className="absolute inset-x-0 top-0 h-6 bg-slate-300 dark:bg-slate-700 flex items-center px-4 gap-1.5">
                   <div className="w-2 h-2 rounded-full bg-red-400"></div>
                   <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                   <div className="w-2 h-2 rounded-full bg-green-400"></div>
                </div>
                <div className="p-8 pt-12">
                   <div className="h-4 bg-sky-500/20 w-32 rounded mb-4"></div>
                   <div className="h-8 bg-sky-500 w-full rounded mb-6"></div>
                   <div className="grid grid-cols-3 gap-4">
                      <div className="h-20 bg-slate-400/20 rounded"></div>
                      <div className="h-20 bg-slate-400/20 rounded"></div>
                      <div className="h-20 bg-slate-400/20 rounded"></div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Module 2: Operational Shield // Review Matrix (Refined Logic) */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 text-indigo-500 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-indigo-500/20">
              Module 02 // Reputation Shield
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 italic uppercase tracking-tighter leading-none">
              The End of <br /><span className="text-indigo-500 text-5xl md:text-8xl">Bad Reviews.</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-10">
              Our custom code acts as a tactical filter. Only 5-star reviews are permitted to reach your public profile. Any feedback with 3 stars or lower is instantly intercepted and sent directly to you as a private resolution alert.
            </p>

            <div className="grid gap-4">
              {[
                { title: "5-Star Only Protocol", desc: "Automated routing for perfect public ratings." },
                { title: "Private Interception", desc: "Negative feedback stays private, sent straight to your CRM." },
                { title: "GMB Growth Engine", desc: "Scale your local SEO with a flawless public track record." }
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/5 shadow-md">
                  <div className="w-8 h-8 rounded bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-widest">{feature.title}</h4>
                    <p className="text-[11px] text-slate-500">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
             <div className="bg-white dark:bg-[#070b14] rounded-[2.5rem] border border-slate-200 dark:border-white/10 shadow-3xl overflow-hidden p-8 flex flex-col gap-8">
                {/* Visualizing the Filter Flow */}
                
                {/* 5-STAR PASS (GREEN) */}
                <div className="relative">
                  <div className="flex items-center justify-between mb-3">
                     <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">GMB Public Profile // PASS</span>
                     <div className="px-2 py-0.5 bg-emerald-500/10 rounded text-emerald-500 text-[8px] font-black uppercase tracking-widest border border-emerald-500/20 animate-pulse">Routing 5-Stars</div>
                  </div>
                  <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6 flex items-center justify-between shadow-lg shadow-emerald-500/10 animate-in slide-in-from-right-8 duration-700">
                     <div className="space-y-2">
                        <div className="text-emerald-500 text-xl font-bold flex gap-1">★★★★★</div>
                        <div className="h-1.5 w-32 bg-emerald-500/20 rounded-full"></div>
                     </div>
                     <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                     </div>
                  </div>
                </div>

                {/* THE SHIELD NODE */}
                <div className="relative py-2 flex justify-center">
                   <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
                   <div className="relative bg-indigo-600 px-6 py-2 rounded-full border border-indigo-400 shadow-xl flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
                      <span className="text-[9px] font-black text-white uppercase tracking-[0.4em]">Review Filter Active</span>
                   </div>
                </div>

                {/* INTERCEPTION NODE (RED) */}
                <div className="relative">
                  <div className="flex items-center justify-between mb-3">
                     <div className="px-2 py-0.5 bg-red-500/10 rounded text-red-500 text-[8px] font-black uppercase tracking-widest border border-red-500/20">Intercepting 1-3 Stars</div>
                     <span className="text-[9px] font-black text-red-500 uppercase tracking-widest">Private Terminal // BLOCKED</span>
                  </div>
                  <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6 flex items-center justify-between opacity-80 backdrop-blur-sm animate-in slide-in-from-left-8 duration-700 delay-200">
                     <div className="space-y-2">
                        <div className="text-red-500 text-xl font-bold flex gap-1">★<span className="opacity-20">★★★★</span></div>
                        <div className="h-1.5 w-48 bg-red-500/20 rounded-full"></div>
                     </div>
                     <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"/></svg>
                     </div>
                  </div>
                  <div className="mt-3 text-center">
                     <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Routed to Private Business Owner Message Node</p>
                  </div>
                </div>
             </div>
          </div>
        </div>

        {/* Module 3: Missed Call Text Back */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-block bg-emerald-500/10 text-emerald-500 text-[10px] font-black px-4 py-1 rounded-full tracking-[0.3em] uppercase mb-6">Module 03 // Connectivity</div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 italic uppercase tracking-tighter leading-none">
              Missed Call <br /><span className="text-emerald-500 text-6xl md:text-8xl">Text Back.</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-medium">
              No more lost leads. Show customers you care and stand out from your competition by being available 24/7.
            </p>
            <div className="grid grid-cols-2 gap-4">
               {[
                 { label: "Lost Leads", value: "0%" },
                 { label: "Response Time", value: "<10s" },
                 { label: "Availability", value: "24/7" },
                 { label: "Conversion Lift", value: "40%+" }
               ].map((stat, i) => (
                 <div key={i} className="p-4 border-l-2 border-emerald-500/30 bg-white dark:bg-slate-950/50">
                    <div className="text-xs font-black text-emerald-500 uppercase tracking-widest">{stat.label}</div>
                    <div className="text-xl font-black text-slate-900 dark:text-white italic">{stat.value}</div>
                 </div>
               ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative p-8">
             <div className="bg-slate-950 rounded-[2.5rem] p-10 border border-white/10 shadow-3xl transform -rotate-1 relative group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full"></div>
                <div className="space-y-6">
                   <div className="flex justify-end">
                      <div className="bg-slate-800 text-white p-4 rounded-2xl rounded-tr-none text-xs font-medium max-w-[80%]">
                         "Hey, I'm looking for a quote on a new roof. Can you help?"
                      </div>
                   </div>
                   <div className="flex justify-start">
                      <div className="bg-emerald-600 text-white p-4 rounded-2xl rounded-tl-none text-xs font-black uppercase tracking-widest max-w-[80%] animate-in slide-in-from-left-4 duration-1000">
                         "STRATUS AUTO-REPLY: Sorry we missed your call! How can we assist you today? 🛠️"
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Module 4: Custom CRM // One-Click Campaigns */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-block bg-sky-500/10 text-sky-500 text-[10px] font-black px-4 py-1 rounded-full tracking-[0.3em] uppercase mb-6">Module 04 // Operational CRM</div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 italic uppercase tracking-tighter leading-none">One-Click <br /><span className="text-sky-500 text-6xl md:text-8xl">Campaigns.</span></h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-medium">
              We build you a custom CRM of every lead ever captured. Leverage your customer list with zero effort. Send professional promotions, seasonal offers, or text blasts in a single click.
            </p>
            <div className="grid grid-cols-1 gap-4">
              {[
                { title: "One-Click SMS Blast", desc: "Text your list: 'We're running a special promotion this month!'" },
                { title: "One-Click Email Blast", desc: "Send professional email promotions to your entire database instantly." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm">
                   <div className="w-10 h-10 bg-sky-500 text-white rounded-lg flex items-center justify-center shrink-0 shadow-lg shadow-sky-500/20">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                   </div>
                   <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest mb-1">{item.title}</h4>
                      <p className="text-[11px] text-slate-500 font-medium">{item.desc}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="bg-slate-950 rounded-[2.5rem] border border-white/10 p-10 overflow-hidden relative shadow-3xl min-h-[400px]">
                <div className="absolute inset-0 radar-grid opacity-5"></div>
                
                {/* CRM Interface Mockup */}
                <div className="mb-8 space-y-3 opacity-30">
                   {[1,2,3].map(i => (
                     <div key={i} className="h-8 bg-white/5 rounded-lg flex items-center px-4 justify-between border border-white/5">
                        <div className="flex gap-2 items-center">
                           <div className="w-2 h-2 rounded-full bg-sky-500"></div>
                           <div className="w-20 h-2 bg-white/20 rounded"></div>
                        </div>
                        <div className="w-12 h-2 bg-white/10 rounded"></div>
                     </div>
                   ))}
                </div>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md relative z-10 animate-in slide-in-from-bottom-8 duration-700">
                   <div className="flex justify-between items-center mb-6">
                      <div className="text-[10px] font-black text-sky-500 uppercase tracking-[0.2em]">Campaign Dispatch</div>
                      <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest">1,240 Contacts</div>
                   </div>
                   
                   <div className="bg-sky-600 p-4 rounded-xl text-white text-xs font-black italic mb-6 shadow-xl shadow-sky-500/20">
                      "We're running this promotion this month, feel free to reach out to grab it!"
                   </div>

                   <button className="w-full bg-white text-slate-900 py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.4em] shadow-lg hover:scale-[1.02] transition-transform">
                      Send to All Contacts
                   </button>
                </div>
             </div>
          </div>
        </div>

        {/* Module 5: Growth Metrics // Velocity Scaling - REDESIGNED ILLUSTRATION */}
        <div className="p-16 rounded-[3rem] bg-slate-950 text-white relative overflow-hidden border border-white/10 group">
           <div className="absolute inset-0 radar-grid opacity-5"></div>
           
           <div className="relative z-10 flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2">
                 <div className="inline-block bg-sky-500/10 text-sky-500 px-4 py-1 rounded-full text-[10px] font-black tracking-widest mb-6 border border-sky-500/20 uppercase">Module 05 // Velocity Growth</div>
                 <h2 className="text-4xl md:text-5xl font-black mb-6 italic uppercase tracking-tighter leading-none">Market <br /><span className="text-sky-500">Domination.</span></h2>
                 <p className="text-lg text-slate-400 mb-8 font-medium leading-relaxed">
                    Once your system is built, we scale it. Our partner, <span className="text-white italic">Stratus Marketing</span>, activates the high-velocity engine: Meta and Google Ads optimized for explosive ROI.
                 </p>
                 
                 <div className="grid grid-cols-2 gap-4 mb-10">
                    <div className="p-5 bg-white/5 border border-white/10 rounded-2xl">
                       <div className="text-sky-500 font-black text-[10px] uppercase tracking-widest mb-1">Google Ads</div>
                       <div className="text-lg font-black italic">INTENT READY</div>
                    </div>
                    <div className="p-5 bg-white/5 border border-white/10 rounded-2xl">
                       <div className="text-sky-500 font-black text-[10px] uppercase tracking-widest mb-1">Meta Ads</div>
                       <div className="text-lg font-black italic">MASS REACH</div>
                    </div>
                 </div>

                 <a 
                   href="https://stratusmarketingllc.com" 
                   target="_blank" 
                   className="inline-flex items-center gap-5 px-10 py-5 bg-white text-slate-950 rounded-2xl text-[11px] font-black uppercase tracking-[0.4em] hover:bg-sky-500 hover:text-white transition-all shadow-2xl shadow-sky-500/20"
                 >
                    Scale Using Stratus Marketing
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                 </a>
              </div>

              <div className="lg:w-1/2 relative w-full aspect-square md:aspect-video lg:aspect-square">
                 {/* High-Fidelity Growth Dashboard Illustration */}
                 <div className="relative w-full h-full bg-slate-900/60 rounded-[3rem] border border-white/10 shadow-3xl p-10 flex flex-col overflow-hidden">
                    <div className="absolute inset-0 radar-grid opacity-10"></div>
                    
                    {/* Header Section */}
                    <div className="flex justify-between items-center mb-10 relative z-10">
                       <div>
                          <div className="text-[10px] font-black text-sky-500 uppercase tracking-[0.2em] mb-1">Operational Velocity</div>
                          <div className="text-2xl font-black italic text-white tracking-tighter">PHASE 05 ACTIVE</div>
                       </div>
                       <div className="flex gap-1.5">
                          {[...Array(3)].map((_, i) => (
                             <div key={i} className="w-2 h-2 bg-sky-500 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                          ))}
                       </div>
                    </div>

                    {/* Main Growth Graph */}
                    <div className="flex-1 relative mb-6">
                       <svg viewBox="0 0 400 200" className="w-full h-full drop-shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                          {/* Grid Lines */}
                          <line x1="0" y1="180" x2="400" y2="180" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                          <line x1="0" y1="120" x2="400" y2="120" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                          <line x1="0" y1="60" x2="400" y2="60" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                          
                          {/* The Scaling Curve */}
                          <path 
                             d="M0 180 Q 80 170, 150 140 T 300 60 T 400 20" 
                             fill="none" 
                             stroke="#0ea5e9" 
                             strokeWidth="6" 
                             strokeLinecap="round"
                             className="animate-draw-graph"
                          />
                          
                          {/* Animated Nodes on Curve */}
                          <circle cx="150" cy="140" r="5" fill="#0ea5e9" className="animate-pulse shadow-glow" />
                          <circle cx="300" cy="60" r="5" fill="#0ea5e9" className="animate-pulse shadow-glow" />
                          <circle cx="380" cy="28" r="8" fill="#0ea5e9" className="animate-bounce shadow-glow" />
                       </svg>

                       {/* Labels Overlay */}
                       <div className="absolute top-0 right-0 bg-sky-500 text-slate-950 text-[10px] font-black px-3 py-1 rounded-lg italic shadow-lg animate-bounce">
                          +840% REACH
                       </div>
                       <div className="absolute bottom-20 left-10 bg-white/10 backdrop-blur-md border border-white/10 p-3 rounded-xl">
                          <div className="text-[8px] font-black text-sky-400 uppercase tracking-widest mb-1">Ad deployment</div>
                          <div className="text-xs font-black italic">VERIFIED ROI</div>
                       </div>
                    </div>

                    {/* Footer Stats */}
                    <div className="flex justify-around items-center pt-8 border-t border-white/5 relative z-10">
                       <div className="text-center">
                          <div className="text-2xl font-black italic text-white leading-none">12.4k</div>
                          <div className="text-[8px] font-black text-slate-500 uppercase tracking-widest mt-2">Daily Imps</div>
                       </div>
                       <div className="w-px h-8 bg-white/10"></div>
                       <div className="text-center">
                          <div className="text-2xl font-black italic text-sky-500 leading-none">5X</div>
                          <div className="text-[8px] font-black text-slate-500 uppercase tracking-widest mt-2">Conversion</div>
                       </div>
                       <div className="w-px h-8 bg-white/10"></div>
                       <div className="text-center">
                          <div className="text-2xl font-black italic text-emerald-500 leading-none">$0.00</div>
                          <div className="text-[8px] font-black text-slate-500 uppercase tracking-widest mt-2">Waste spend</div>
                       </div>
                    </div>
                 </div>

                 <style dangerouslySetInnerHTML={{ __html: `
                    @keyframes draw-graph {
                       from { stroke-dasharray: 1000; stroke-dashoffset: 1000; }
                       to { stroke-dasharray: 1000; stroke-dashoffset: 0; }
                    }
                    .animate-draw-graph {
                       animation: draw-graph 3s ease-out forwards;
                    }
                    .shadow-glow {
                       filter: drop-shadow(0 0 8px #0ea5e9);
                    }
                 `}} />
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
