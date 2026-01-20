
import React from 'react';

interface FeatureShowcaseProps {
  setView: (view: 'home' | 'engine' | 'contact' | 'pricing') => void;
}

const FeatureShowcase: React.FC<FeatureShowcaseProps> = ({ setView }) => {
  const modules = [
    {
      id: "01",
      title: "Autopilot Visibility",
      desc: "Local search grid domination without manual outreach.",
      tag: "Foundational",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      id: "02",
      title: "Reputation Shield",
      desc: "Intercept negative feedback before it touches your public profile.",
      tag: "Protection",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: "03",
      title: "Pulse Response",
      desc: "Never lose a lead again. Instant SMS capture for missed calls.",
      tag: "Capture",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-32 bg-[#fafafa] dark:bg-[#030712] relative overflow-hidden">
      {/* Structural background lines */}
      <div className="absolute inset-0 radar-grid opacity-[0.05] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              <span className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-pulse"></span>
              Integrated Infrastructure
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter leading-none mb-8">
              A Business <br /><span className="text-sky-500">Built to Run.</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-xl">
              Websites are brochures. <span className="text-slate-900 dark:text-white font-black italic underline decoration-sky-500/30">The System</span> is a workforce. We deploy a unified protocol that handles your search presence, reputation management, and lead capture—automatically.
            </p>
          </div>

          <div className="relative">
            {/* Main Visual "System Dashboard" Teaser */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-[2.5rem] p-10 shadow-3xl relative z-10 overflow-hidden group">
               <div className="flex justify-between items-center mb-10">
                  <div className="flex gap-1.5">
                     <div className="w-2 h-2 rounded-full bg-red-400/50"></div>
                     <div className="w-2 h-2 rounded-full bg-yellow-400/50"></div>
                     <div className="w-2 h-2 rounded-full bg-green-400/50"></div>
                  </div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">System Health // 100%</div>
               </div>

               <div className="space-y-6">
                  <div className="h-12 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-white/5 flex items-center px-6 justify-between group-hover:border-sky-500/30 transition-all">
                     <div className="flex items-center gap-4">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                        <span className="text-[10px] font-black uppercase text-slate-500 dark:text-slate-400">GMB Visibility Node</span>
                     </div>
                     <span className="text-[10px] font-black text-emerald-500">ACTIVE</span>
                  </div>
                  <div className="h-12 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-white/5 flex items-center px-6 justify-between group-hover:border-sky-500/30 transition-all delay-75">
                     <div className="flex items-center gap-4">
                        <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                        <span className="text-[10px] font-black uppercase text-slate-500 dark:text-slate-400">Review Shield Filter</span>
                     </div>
                     <span className="text-[10px] font-black text-sky-500 italic">FILTERING</span>
                  </div>
                  <div className="h-12 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-white/5 flex items-center px-6 justify-between group-hover:border-sky-500/30 transition-all delay-150">
                     <div className="flex items-center gap-4">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                        <span className="text-[10px] font-black uppercase text-slate-500 dark:text-slate-400">SMS Pulse Relay</span>
                     </div>
                     <span className="text-[10px] font-black text-indigo-500">STANDBY</span>
                  </div>
               </div>

               <div className="mt-10 pt-10 border-t border-slate-100 dark:border-white/5 flex flex-col items-center">
                  <div className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Click to Initialize Deep Dive</div>
                  <button 
                    onClick={() => setView('engine')}
                    className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-10 py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.4em] hover:bg-sky-600 dark:hover:bg-sky-500 dark:hover:text-white transition-all shadow-xl"
                  >
                    Enter The System
                  </button>
               </div>
            </div>
            {/* Background decorative blob */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-sky-500/20 blur-[100px] rounded-full"></div>
          </div>
        </div>

        {/* Tactical Feature Row */}
        <div className="grid md:grid-cols-3 gap-12">
           {modules.map((m, i) => (
             <div key={i} className="group cursor-pointer" onClick={() => setView('engine')}>
                <div className="w-14 h-14 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl flex items-center justify-center text-sky-500 mb-8 shadow-sm group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                   {m.icon}
                </div>
                <div className="text-[9px] font-black text-sky-500 uppercase tracking-[0.3em] mb-4">Module {m.id} // {m.tag}</div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter mb-4 leading-none">
                  {m.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">
                  {m.desc}
                </p>
                <div className="mt-6 flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-sky-500 transition-colors">
                   View Specifications
                   <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
