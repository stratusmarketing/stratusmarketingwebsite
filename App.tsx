
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import FeatureShowcase from './components/FeatureShowcase';
import HowItWorks from './components/HowItWorks';
import SignupForm from './components/SignupForm';
import Footer from './components/Footer';
import BackgroundSystem from './components/BackgroundSystem';
import Contact from './components/Contact';
import Pricing from './components/Pricing';

type View = 'home' | 'engine' | 'contact' | 'pricing';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');

  // Scroll to top when changing views
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const renderContent = () => {
    switch (view) {
      case 'pricing':
        return <Pricing setView={setView} />;
      case 'contact':
        return <Contact setView={setView} />;
      case 'engine':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <section className="pt-24 px-8 max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block bg-sky-500/10 border border-sky-500/20 text-sky-500 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                  Proprietary Growth Infrastructure
                </div>
                <h1 className="text-6xl md:text-9xl font-black text-slate-900 dark:text-white mb-12 uppercase italic tracking-tighter leading-none">
                  The <span className="text-sky-500">System.</span>
                </h1>
                <p className="text-2xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
                  Go inside the operational architecture that powers the number one performance platform for contractors. We don't just build sites; we deploy business-scaling systems.
                </p>
              </div>
            </section>
            
            <Features />

            <section className="pb-24 px-8 max-w-7xl mx-auto">
              {/* The Process Timeline */}
              <div className="py-24 border-t border-slate-200 dark:border-white/5">
                <div className="inline-block bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                  Deployment Protocol
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-16 uppercase italic tracking-tighter">
                  The <span className="text-indigo-500">Timeline.</span>
                </h2>
                <div className="space-y-12">
                  {[
                    { 
                      step: "01 Intelligence", 
                      title: "Discovery Call", 
                      duration: "20 Minutes",
                      desc: "We analyze your current digital footprint and local market competitors. We'll show you exactly how our system integrates with your specific sector." 
                    },
                    { 
                      step: "02 Construction", 
                      title: "Infrastructure Build", 
                      duration: "7 to 10 Days",
                      desc: "Our engineers build your high-performance website and activate the reputation shield. We handle all the heavy lifting." 
                    },
                    { 
                      step: "03 Deployment", 
                      title: "Launch & Training", 
                      duration: "25 Minutes",
                      desc: "We flip the switch and show you the dashboard. You'll see how to monitor leads and broadcast campaigns with zero technical friction." 
                    }
                  ].map((s, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-8 border-l-2 border-slate-200 dark:border-slate-800 pl-8 py-4 group hover:border-indigo-500 transition-colors">
                      <div className="shrink-0 w-40">
                        <span className="text-indigo-500 font-black text-xs uppercase tracking-[0.3em] block mb-1">{s.step}</span>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{s.duration}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase mb-4 italic group-hover:text-indigo-400 transition-colors">{s.title}</h3>
                        <p className="text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ready to Initialize Call to Action */}
              <div className="mt-20 pt-20 border-t border-slate-200 dark:border-white/5 flex flex-col items-center">
                <h4 className="text-2xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter mb-8">Ready to Scale?</h4>
                <button onClick={() => setView('pricing')} className="bg-sky-600 text-white px-16 py-6 rounded-2xl text-[12px] font-black uppercase tracking-[0.4em] animate-breathe-glow hover:bg-sky-500 transition-all shadow-2xl shadow-sky-500/20">
                   View Activation Pricing
                </button>
                <button onClick={() => setView('home')} className="mt-12 text-slate-400 font-black uppercase tracking-widest text-[9px] flex items-center gap-2 hover:text-sky-500 transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
                  Return to Base
                </button>
              </div>
            </section>
          </div>
        );
      default:
        return (
          <>
            <Hero />
            <section className="bg-slate-50/50 dark:bg-slate-900/40 py-12 border-y border-slate-200/10 dark:border-white/5">
              <div className="max-w-6xl mx-auto px-6 overflow-hidden text-center">
                <p className="text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] mb-10 opacity-80">Trusted by Market Leaders Nationwide</p>
                <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20">
                  {[
                    "ELITE SERVICES",
                    "CONSTRUCTION PROS",
                    "MARKET LEADERS",
                    "CONTRACTOR HUB"
                  ].map((business, i) => (
                    <span 
                      key={i} 
                      className="text-xl lg:text-2xl font-black italic tracking-[0.2em] uppercase text-slate-400/60 dark:text-slate-500/60 hover:text-sky-500 dark:hover:text-sky-400 transition-all duration-300 cursor-default"
                    >
                      {business}
                    </span>
                  ))}
                </div>
              </div>
            </section>
            <FeatureShowcase setView={setView} />
            <HowItWorks setView={setView} />
            <SignupForm />
          </>
        );
    }
  };

  return (
    <BackgroundSystem>
      <Navbar setView={setView} currentView={view} />
      <main>
        {renderContent()}
      </main>
      <Footer setView={setView} />
    </BackgroundSystem>
  );
};

export default App;
