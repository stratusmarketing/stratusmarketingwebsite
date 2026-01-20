
import React from 'react';

interface HowItWorksProps {
  setView: (view: 'home' | 'engine' | 'contact' | 'pricing') => void;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ setView }) => {
  const steps = [
    {
      number: "01",
      title: "Demo Call",
      duration: "20 MIN",
      desc: "This is actually a sales call, but we didn't want to scare you. We'll show you live client accounts and answer all your questions."
    },
    {
      number: "02",
      title: "Build System",
      duration: "7-10 DAYS",
      desc: "After you fill out a basic onboarding form, our engineers get to work building your custom website and marketing engine."
    },
    {
      number: "03",
      title: "Launch Call",
      duration: "25 MIN",
      desc: "A final walkthrough where we show you how everything works. Spoiler: It really only involves pressing two buttons."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white dark:bg-slate-950 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
          <div className="max-w-2xl mx-auto md:mx-0">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 uppercase italic tracking-tighter">Operational Readiness.</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">Our three-stage protocol is designed for speed and tactical precision. From initial brief to live deployment.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group p-10 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 transition-all hover:-translate-y-2 overflow-hidden">
              <div className="text-6xl font-black text-sky-600/10 dark:text-sky-400/10 absolute top-4 right-4 group-hover:text-sky-600/20 transition-colors">
                {step.number}
              </div>
              <div className="inline-block bg-sky-500/10 text-sky-500 text-[8px] font-black px-2 py-1 rounded-md mb-4 tracking-widest uppercase">
                {step.duration}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 relative z-10 uppercase italic">{step.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed relative z-10 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button 
            onClick={() => setView('engine')}
            className="group flex items-center gap-6 px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-950 rounded-2xl text-[11px] font-black uppercase tracking-[0.4em] hover:bg-sky-600 dark:hover:bg-sky-500 dark:hover:text-white transition-all shadow-xl"
          >
            Would you like to see the process?
            <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
