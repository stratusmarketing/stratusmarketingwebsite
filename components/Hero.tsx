
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-center lg:text-left z-10">
          <div className="inline-flex items-center gap-2 bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-10 border border-sky-200 dark:border-sky-800">
            🥇 #1 WEB DESIGNER FOR CONTRACTORS
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-[0.95] uppercase italic">
            Get Found.<br />
            <span className="text-sky-500">Get Leads.</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
            We provide functional websites for all businesses that ensure you get found online, showcase your best reviews, and capture leads in under 10 seconds.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-10">
            {/* Primary Action Button */}
            <div className="relative group w-full sm:w-auto">
              {/* Subtle outer constant glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full opacity-20 blur-lg animate-pulse pointer-events-none group-hover:opacity-40 transition-opacity"></div>
              
              {/* Rotating tactical border */}
              <div className="absolute inset-0 -m-1 rounded-full border border-sky-500/20 border-dashed animate-spin-slow pointer-events-none opacity-50"></div>
              
              <a 
                href="#signup" 
                className="relative w-full sm:w-auto overflow-hidden bg-sky-600 text-white px-16 py-7 rounded-full text-[11px] font-black uppercase tracking-[0.4em] hover:bg-sky-500 transition-all shadow-2xl shadow-sky-500/40 flex items-center justify-center gap-4 transform hover:scale-105 active:scale-95"
              >
                {/* Internal Shimmer Glimmer */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer pointer-events-none"></div>
                
                <span className="relative z-10">Initialize Launch</span>
                <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

            {/* Secondary Action Button */}
            <div className="relative group w-full sm:w-auto">
              <a 
                href="#engine" 
                className="relative w-full sm:w-auto overflow-hidden bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 text-slate-700 dark:text-slate-300 px-16 py-7 rounded-full text-[11px] font-black uppercase tracking-[0.4em] hover:bg-white/80 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-4 group shadow-xl hover:shadow-2xl"
              >
                {/* Continuous soft border glow */}
                <div className="absolute inset-0 rounded-full border border-white/20 dark:border-white/5 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                
                Our Capabilities
                {/* Live pulse indicator */}
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500"></span>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
          <div className="relative z-10 animate-float">
            <div className="bg-white dark:bg-slate-900/80 rounded-xl p-8 shadow-2xl border border-slate-200/50 dark:border-slate-800 transform lg:rotate-3 backdrop-blur-xl">
              <div className="flex items-center gap-2 mb-8 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                </div>
                <div className="bg-slate-100 dark:bg-slate-800/50 h-5 w-48 rounded-full ml-4"></div>
              </div>
              <div className="space-y-6">
                <div className="h-10 bg-sky-50 dark:bg-sky-900/20 rounded-md w-full border border-sky-100 dark:border-sky-900/40"></div>
                <div className="grid grid-cols-2 gap-6">
                   <div className="h-32 bg-slate-50 dark:bg-slate-800/30 rounded-lg border border-dashed border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center">
                      <div className="text-yellow-400 flex gap-0.5">★★★★★</div>
                      <div className="text-[8px] font-black uppercase text-slate-400 mt-2">Reputation Protected</div>
                   </div>
                   <div className="h-32 bg-slate-50 dark:bg-slate-800/30 rounded-lg border border-dashed border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center">
                      <div className="text-sky-500 font-black italic">SMS ALERTS</div>
                      <div className="text-[8px] font-black uppercase text-slate-400 mt-2">Instantly Armed</div>
                   </div>
                </div>
                <div className="h-14 bg-sky-600 rounded-md w-full shadow-lg shadow-sky-500/20"></div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-12 bg-white dark:bg-slate-800 p-5 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 flex items-center gap-5 transform -rotate-6 animate-breathe-glow">
              <div className="w-14 h-14 bg-sky-50 dark:bg-sky-900/30 text-sky-600 rounded-lg flex items-center justify-center border border-sky-100 dark:border-sky-800">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
              </div>
              <div>
                <div className="text-[10px] text-sky-500 font-black uppercase tracking-widest mb-1">Missed Call Pulse</div>
                <div className="text-sm font-black dark:text-white uppercase tracking-tight">Lead Capture Live</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
