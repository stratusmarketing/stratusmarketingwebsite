
import React, { useState, useEffect, useRef } from 'react';
import { Page } from './types';
import RadarView from './components/RadarView';
import TacticalHUD from './components/TacticalHUD';
import PipelineSteps from './components/PipelineSteps';
import GeminiConsultant from './components/GeminiConsultant';
import AirTrafficFeed from './components/AirTrafficFeed';
import coreTestimonial1 from './videos/Core_Testimonial1.mp4';

const CALENDLY_LINK = "https://calendly.com/stratusmarketingllc/30min";
const LINKEDIN_URL = "https://www.linkedin.com/company/stratusmarketingllc/";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61578807435287";
const INSTAGRAM_URL = "https://www.instagram.com/stratus.marketing";

// Reusable CountUp Component for high-performance visual feedback
const CountUp: React.FC<{ value: string; duration?: number }> = ({ value, duration = 1500 }) => {
  const [displayValue, setDisplayValue] = useState('0');
  const countRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animate();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) observer.observe(countRef.current);

    const animate = () => {
      const numericPart = parseFloat(value.replace(/[^0-9.]/g, ''));
      const prefix = value.match(/^[^0-9.]+/)?.[0] || '';
      const suffix = value.match(/[^0-9.]+$/)?.[0] || '';
      const isDecimal = value.includes('.');

      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentCount = progress * numericPart;
        
        setDisplayValue(
          `${prefix}${isDecimal ? currentCount.toFixed(1) : Math.floor(currentCount)}${suffix}`
        );

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={countRef}>{displayValue}</span>;
};

// Simple fade-in animation component for text
const FadeInText: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: Page.HOME, label: 'Home' },
    { id: Page.SERVICES, label: 'Services' },
    { id: Page.RESULTS, label: 'Results' },
    { id: Page.ABOUT, label: 'About' },
    { id: Page.CONTACT, label: 'Contact' },
  ];

  const handleDispatch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const SectionCTA = () => (
    <section className="py-10 relative">
      <div className="container mx-auto px-6">
        <div className={`relative p-8 md:p-10 rounded-[2.5rem] border transition-all duration-1000 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 ${
          theme === 'dark' ? 'bg-slate-900/40 border-sky-500/10 shadow-2xl backdrop-blur-sm' : 'bg-white border-slate-200 shadow-xl'
        }`}>
          <div className={`absolute -right-20 -top-20 w-[300px] h-[300px] blur-[100px] rounded-full opacity-10 pointer-events-none ${theme === 'dark' ? 'bg-sky-500' : 'bg-sky-400'}`}></div>
          
          <div className="text-left space-y-3 relative z-10 max-w-xl">
            <h2 className={`text-3xl md:text-4xl font-black tracking-tighter ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Ready to Scale?</h2>
            <p className={`text-sm md:text-base font-medium leading-relaxed opacity-80 ${theme === 'dark' ? 'text-slate-200' : 'text-slate-600'}`}>Deploy a precision-engineered marketing system designed for operators who demand consistent utilization and growth.</p>
          </div>
          
          <div className="relative z-10 whitespace-nowrap">
             <a 
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-sky-600 hover:bg-sky-500 text-white font-black rounded-xl transition-all shadow-2xl text-lg flex items-center group/cta btn-book-glow relative"
              >
                <span>BOOK YOUR STRATEGY CALL</span>
                <svg className="w-5 h-5 ml-3 transform group-hover/cta:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
          </div>
        </div>
      </div>
    </section>
  );

  const renderSection = () => {
    switch (currentPage) {
      case Page.HOME:
        return (
          <>
            <section className="pt-24 pb-12 relative overflow-hidden min-h-[75vh] flex items-center">
              <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className={`relative p-6 md:p-10 rounded-[2.5rem] border transition-all duration-1000 glass-panel shadow-2xl ${
                  theme === 'dark' ? 'bg-slate-900/60 border-white/5' : 'bg-white/95 border-slate-200'
                }`}>
                  <div className="relative z-10 space-y-6">
                    <div className="inline-flex items-center space-x-3 bg-sky-500/10 border border-sky-500/20 px-4 py-1.5 rounded-full">
                      <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></span>
                      <span className="text-[9px] font-black text-sky-500 uppercase tracking-widest">Performance Systems Architecture</span>
                    </div>
                    <h1 className={`text-4xl md:text-6xl font-black leading-[1.0] tracking-tighter ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                      Fill your calendar <br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-500 to-indigo-500">with qualified bookings.</span>
                    </h1>
                    <p className={`text-base md:text-lg leading-relaxed font-medium ${theme === 'dark' ? 'text-slate-200' : 'text-slate-600'}`}>
                      We design and run Meta, Instagram, and Facebook ads, systems, and funnels so your calendar fills with the right calls and discovery flights—not just random clicks.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                      <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-sky-600 hover:bg-sky-500 text-white font-black rounded-xl transition-all shadow-2xl text-center text-lg btn-book-glow">
                        Book Now
                      </a>
                      <button onClick={() => setCurrentPage(Page.SERVICES)} className={`px-8 py-3.5 border font-black rounded-xl transition-all text-center text-lg ${theme === 'dark' ? 'bg-slate-950/20 border-white/10 text-white hover:bg-white/5' : 'bg-white border-slate-200 text-slate-900 hover:bg-slate-50'}`}>
                        How It Works
                      </button>
                    </div>
                  </div>
                </div>
                <div className="relative flex justify-center lg:justify-end scale-90 md:scale-100">
                  <RadarView />
                </div>
              </div>
            </section>

            <section className={`py-16 relative overflow-hidden`}>
               <div className="container mx-auto px-6">
                 <div className="text-center mb-10 space-y-2">
                    <h2 className={`text-3xl md:text-4xl font-black tracking-tighter ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Aviation first, but not aviation-only.</h2>
                    <p className={`${theme === 'dark' ? 'text-slate-300' : 'text-slate-500'} text-base font-medium max-w-2xl mx-auto opacity-80`}>
                      Stratus started inside a flight school and now works with operators and founders running serious service-based businesses.
                    </p>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { title: 'Flight Schools', desc: 'Intro flights, PPL, and advanced training pipelines that match your aircraft, instructors, and seasonality.', icon: '🛫' },
                      { title: 'High Ticket Services', desc: 'Consultants and service businesses that want booked, qualified calls, not just form fills.', icon: '💼' },
                      { title: 'Service-Based Businesses', desc: 'Growth-focused companies looking for predictable pipelines and scalable customer acquisition protocols.', icon: '🚀' }
                    ].map((item, i) => (
                      <div key={i} className={`p-8 rounded-[2rem] border transition-all duration-500 text-center flex flex-col items-center ${
                        theme === 'dark' ? 'bg-slate-900/30 border-white/5 hover:border-sky-500/20 shadow-sm' : 'bg-white border-slate-100 shadow-sm hover:border-sky-300'
                      }`}>
                        <div className="text-4xl mb-4 bg-sky-500/10 w-16 h-16 flex items-center justify-center rounded-2xl">{item.icon}</div>
                        <h3 className={`text-xl font-black mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>
                        <p className={`text-sm leading-relaxed font-medium opacity-70 ${theme === 'dark' ? 'text-slate-200' : 'text-slate-600'}`}>{item.desc}</p>
                      </div>
                    ))}
                 </div>
               </div>
            </section>

            <section className={`py-20 relative overflow-hidden ${theme === 'dark' ? 'bg-slate-900/10' : 'bg-slate-50/50'}`}>
              <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8">
                    <h2 className={`text-3xl md:text-4xl font-black tracking-tighter ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Pipeline Snapshot</h2>
                    <p className={`text-lg font-medium leading-relaxed opacity-80 ${theme === 'dark' ? 'text-slate-200' : 'text-slate-600'}`}>
                      In practice, our clients see a steady, predictable flow of qualified inquiries that turn into booked intro flights, discovery flights, and long-term students. Not one good month followed by silence.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch">
                      {[
                        { label: 'Lead Volume', value: '2.5x Increase', desc: 'Qualified inquiries.' },
                        { label: 'Booked Intros', value: '4 Weeks Ahead', desc: 'Calendars filled.' },
                        { label: 'Revenue Clarity', value: '100% Control', desc: 'Predictable planning.' }
                      ].map((stat, i) => (
                        <div key={i} className={`flex-1 p-5 rounded-3xl border flex flex-col justify-center transition-all ${theme === 'dark' ? 'bg-slate-950/50 border-white/5' : 'bg-white border-slate-100 shadow-sm'}`}>
                          <div className="text-[10px] font-black uppercase text-sky-500 tracking-widest mb-1">{stat.label}</div>
                          <div className={`text-xl font-black mb-1 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}><CountUp value={stat.value} /></div>
                          <div className={`text-[10px] font-medium opacity-60 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-500'}`}>{stat.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`p-8 md:p-10 rounded-[2.5rem] border transition-all duration-700 ${theme === 'dark' ? 'bg-slate-900/60 border-white/5' : 'bg-white border-slate-200 shadow-xl'}`}>
                    <div className="space-y-8 relative">
                      {[
                        { label: 'The Ad is Seen', color: 'bg-amber-500', glow: 'shadow-amber-500/20' },
                        { label: 'Lead is Captured', color: 'bg-sky-500', glow: 'shadow-sky-500/20' },
                        { label: 'High-Intent Follow-up', color: 'bg-indigo-500', glow: 'shadow-indigo-500/20' },
                        { label: 'Booked Intro Flight', color: 'bg-emerald-500', glow: 'shadow-emerald-500/40', active: true }
                      ].map((step, i, arr) => (
                        <div key={i} className="flex items-center group relative">
                          {i < arr.length - 1 && (
                            <div className={`absolute left-4 top-8 w-0.5 h-10 bg-gradient-to-b ${i === 0 ? 'from-amber-500 to-sky-500' : i === 1 ? 'from-sky-500 to-indigo-500' : 'from-indigo-500 to-emerald-500'} opacity-30`}></div>
                          )}
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 z-10 ${step.color} ${step.glow} shadow-lg transition-transform group-hover:scale-110`}>
                            {i === arr.length - 1 ? (
                              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                            ) : (
                              <span className="text-white text-[10px] font-black">{i + 1}</span>
                            )}
                          </div>
                          <div className={`ml-6 p-4 rounded-xl border w-full transition-all duration-500 ${step.active ? 'bg-emerald-500/10 border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.1)]' : (theme === 'dark' ? 'bg-slate-950/50 border-white/5' : 'bg-slate-50 border-slate-100')}`}>
                             <span className={`text-sm font-black uppercase tracking-widest ${step.active ? 'text-emerald-500' : (theme === 'dark' ? 'text-white' : 'text-slate-900')}`}>{step.label}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <SectionCTA />
          </>
        );
      case Page.SERVICES:
        return (
          <div className="space-y-0">
            {/* HERO MODULE */}
            <section className="pt-32 pb-16 relative overflow-hidden">
               <div className="container mx-auto px-6 relative z-10 text-center space-y-4">
                  <div className="inline-flex items-center space-x-3 bg-sky-500/10 border border-sky-500/20 px-5 py-2 rounded-full mb-2">
                     <span className="text-[10px] font-black text-sky-500 uppercase tracking-widest">Protocol Manifest</span>
                  </div>
                  <h2 className={`text-5xl md:text-6xl font-black tracking-tighter ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Scale Protocols.</h2>
                  <p className={`text-lg md:text-xl font-medium leading-relaxed opacity-70 max-w-2xl mx-auto ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                    High-integrity acquisition modules for aviation and high-ticket operators.
                  </p>
               </div>
            </section>

            {/* THE ENGINE SECTION */}
            <section className={`py-20 relative overflow-hidden ${theme === 'dark' ? 'bg-slate-950/60' : 'bg-slate-50'}`}>
              <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto space-y-12">
                  <div className="text-center space-y-3">
                    <h2 className={`text-3xl md:text-4xl font-black tracking-tighter ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>The Engine</h2>
                    <p className={`text-sm md:text-base font-medium opacity-60 max-w-xl mx-auto ${theme === 'dark' ? 'text-slate-300' : 'text-slate-500'}`}>
                      Our protocol for deploying and maintaining high-integrity acquisition systems.
                    </p>
                  </div>
                  <PipelineSteps theme={theme} />
                </div>
              </div>
            </section>

            {/* CAPABILITIES MATRIX */}
            <section className="py-20">
              <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { 
                        title: "Meta Acquisition Engine", 
                        highlight: "Facebook & Instagram Ads", 
                        desc: "Precision management of FB & IG campaigns designed to fill calendars by targeting high-intent aviation prospects.", 
                        bullets: ["Creative Hook Strategy", "Algorithm Audience Tuning", "Daily Bid Calibration"],
                        accent: "text-sky-500",
                        icon: "🎯"
                      },
                      { 
                        title: "Performance Systems", 
                        highlight: "Landing Pages & Funnels", 
                        desc: "Ultra-fast landing environments optimized for the specific decision-making behavior of high-ticket clients.", 
                        bullets: ["Frictionless Booking UX", "Deep Tracking Integration", "Operator CRM Sync"],
                        accent: "text-indigo-500",
                        icon: "⚡"
                      },
                      { 
                        title: "Operational Strategy", 
                        highlight: "Growth Systems Reset", 
                        desc: "For operators with existing infra who need a reset on unit economics, creative strategy, and backend follow-up.", 
                        bullets: ["Unit Economic Analysis", "Follow-up Protocol Design", "Asset Lifecycle Audit"],
                        accent: "text-emerald-500",
                        icon: "📊"
                      }
                    ].map((module, i) => (
                      <div key={i} className={`p-8 rounded-[2.5rem] border transition-all duration-700 flex flex-col group ${theme === 'dark' ? 'bg-slate-900/40 border-white/5 shadow-xl hover:border-sky-500/20' : 'bg-white border-slate-100 shadow-lg hover:border-sky-200'}`}>
                         <div className={`text-[9px] font-black uppercase tracking-[0.3em] mb-3 ${module.accent}`}>
                           {module.highlight}
                         </div>
                         <h3 className={`text-xl font-black mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{module.title}</h3>
                         <p className={`text-xs md:text-sm font-medium leading-relaxed mb-6 opacity-70 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                           {module.desc}
                         </p>
                         <ul className="space-y-2 mb-8 flex-grow">
                            {module.bullets.map((b, idx) => (
                              <li key={idx} className="flex items-start space-x-3">
                                 <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${module.accent.replace('text', 'bg')}`}></div>
                                 <span className={`text-[11px] font-bold leading-tight ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>{b}</span>
                              </li>
                            ))}
                         </ul>
                         <button onClick={() => setCurrentPage(Page.CONTACT)} className={`text-[9px] font-black uppercase tracking-widest flex items-center group/btn ${module.accent}`}>
                            <span>Request Briefing</span>
                            <span className="ml-2 transform group-hover/btn:translate-x-1 transition-transform">→</span>
                         </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
            
            <SectionCTA />
          </div>
        );
      case Page.RESULTS:
        return (
          <div className="space-y-0">
            <section className="pt-32 pb-16 container mx-auto px-6">
              <div className="max-w-6xl mx-auto space-y-16">
                 <div className="text-center space-y-4">
                    <div className="inline-flex items-center space-x-3 bg-sky-500/10 border border-sky-500/20 px-5 py-2 rounded-full mb-2">
                       <span className="text-[10px] font-black text-sky-500 uppercase tracking-widest">Sector Intelligence</span>
                    </div>
                    <h2 className={`text-4xl md:text-6xl font-black tracking-tighter ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Proof of Performance</h2>
                    <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
                      We track every dollar and every lead. Here is how our protocols perform in active service-based pipelines.
                    </p>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                      { category: "Aviation", client: "Regional Flight School", stat: "3.4x", label: "Booking Increase", challenge: "Inconsistent student flow and high seasonal churn.", impact: "Built a persistent lead engine that filled the instructor calendar weeks in advance." },
                      { category: "Services", client: "High-Ticket Consulting", stat: "42", label: "Monthly Booked Calls", challenge: "Spending too much time on manual outreach with low-quality leads.", impact: "Automated the qualification funnel, delivering 10+ high-value strategy sessions weekly." },
                      { category: "B2B", client: "Executive Aviation Group", stat: "510%", label: "Ad Spend ROI", challenge: "Struggling to reach ultra-high-net-worth individuals on social platforms.", impact: "Precision target logic and creative Hooks turned an 'unscalable' niche into a revenue driver." }
                    ].map((caseStudy, i) => (
                      <div key={i} className={`p-8 rounded-[2.5rem] border transition-all duration-700 flex flex-col hover:scale-[1.02] ${
                        theme === 'dark' ? 'bg-slate-900/60 border-white/5 shadow-2xl' : 'bg-white border-slate-200 shadow-xl'
                      }`}>
                        <div className="text-[10px] font-black text-sky-500 uppercase tracking-widest mb-4">{caseStudy.category}</div>
                        <h4 className={`text-xl font-black mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{caseStudy.client}</h4>
                        <div className="mb-8 py-6 border-y border-white/5 flex flex-col items-center justify-center">
                           <div className="text-5xl font-black text-sky-500 mb-1"><CountUp value={caseStudy.stat} /></div>
                           <FadeInText delay={200}><div className={`text-[10px] font-black uppercase tracking-widest opacity-60 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{caseStudy.label}</div></FadeInText>
                        </div>
                        <div className="space-y-4 flex-grow">
                           <FadeInText delay={300}><div className="text-[9px] font-black text-sky-500 uppercase tracking-widest mb-1">Challenge</div><p className={`text-xs md:text-sm font-medium leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>{caseStudy.challenge}</p></FadeInText>
                           <FadeInText delay={450}><div className="text-[9px] font-black text-sky-500 uppercase tracking-widest mb-1">Impact</div><p className={`text-xs md:text-sm font-medium leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>{caseStudy.impact}</p></FadeInText>
                        </div>
                      </div>
                    ))}
                 </div>

                 <div className="pt-24 space-y-12 pb-12">
                   <div className="text-center space-y-2">
                      <h3 className={`text-3xl md:text-4xl font-black tracking-tighter ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Direct from the Flight Deck</h3>
                      <p className={`text-base md:text-lg font-medium opacity-60 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-500'}`}>Real results shared by operators who scaled with Stratus.</p>
                   </div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {[
    { 
      caption: "Flight school owner on stabilizing demand", 
      video: coreTestimonial1, // Using the imported file
      gradient: "from-sky-500/20 to-sky-950/20", 
      icon: "🛫", 
      tag: "Stabilized Scale" 
    },
    { 
      caption: "Consultant on predictable scaling", 
      video: null, 
      gradient: "from-indigo-500/20 to-indigo-950/20", 
      icon: "💼", 
      tag: "High-Ticket Growth" 
    },
    { 
      caption: "CEO on achieving 5x ROI", 
      video: null, 
      gradient: "from-emerald-500/20 to-emerald-950/20", 
      icon: "🚀", 
      tag: "Precision Impact" 
    }
  ].map((v, i) => (
    <div key={i} className="flex flex-col space-y-6 group cursor-pointer">
       {/* 9:16 Vertical Container */}
       <div className={`aspect-[9/16] rounded-[3rem] bg-gradient-to-br ${v.gradient} border border-white/5 relative overflow-hidden flex items-center justify-center transition-all duration-1000 group-hover:scale-[1.03] group-hover:shadow-[0_0_50px_rgba(56,189,248,0.2)] shadow-2xl`}>
          
          {v.video ? (
            <video 
              className="absolute inset-0 w-full h-full object-cover"
              controls
              playsInline
              preload="auto"
            >
              <source src={v.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <>
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              <div className="bg-white/10 backdrop-blur-md w-20 h-20 rounded-full flex items-center justify-center border border-white/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-sky-600 group-hover:border-sky-500">
                 <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.841z"/></svg>
              </div>
            </>
          )}

          {/* The "Pill" Tag */}
          <div className="absolute top-8 left-8 z-20">
            <span className="bg-sky-500/20 border border-sky-500/30 text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-full text-sky-400 backdrop-blur-md">
              {v.tag}
            </span>
          </div>
          
          <div className="absolute bottom-8 right-8 text-5xl opacity-40 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
            {v.icon}
          </div>
       </div>

       <div className="px-2 space-y-2">
          <p className={`text-lg font-black leading-tight transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            {v.caption}
          </p>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Verified Client</span>
          </div>
       </div>
    </div>
  ))}
</div>
                 </div>
              </div>
            </section>
            
            <SectionCTA />
          </div>
        );
      case Page.ABOUT:
        return (
          <div className="space-y-0">
            {/* ENRICHED ABOUT HERO */}
            <section className="pt-32 pb-16 relative overflow-hidden">
              <div className="container mx-auto px-6 relative z-10 text-center space-y-6">
                <div className="inline-flex items-center space-x-3 bg-sky-500/10 border border-sky-500/20 px-5 py-2 rounded-full mb-2">
                  <span className="text-[10px] font-black text-sky-500 uppercase tracking-widest">Foundations & Intent</span>
                </div>
                <h2 className={`text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  Partnership <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-500 to-indigo-500">Built on Trust</span>.
                </h2>
                <div className="max-w-3xl mx-auto">
                   <p className={`text-lg md:text-2xl font-medium leading-relaxed opacity-70 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                     We aren't just an agency; we're your tactical acquisition department. We focus on long-term health, building relationships that turn data into confident decisions.
                   </p>
                </div>
              </div>
            </section>

            {/* THE LEADERSHIP - ISAAC & CRISTIAN */}
            <section className={`py-24 border-y ${theme === 'dark' ? 'bg-slate-900/40 border-white/5' : 'bg-slate-50 border-slate-100'}`}>
               <div className="container mx-auto px-6">
                 <div className="max-w-5xl mx-auto space-y-16">
                    <div className="text-center space-y-4">
                       <h3 className={`text-3xl md:text-4xl font-black tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>The Flight Crew</h3>
                       <p className={`text-base font-medium opacity-60 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>Stratus is led by operators who have been in the cockpit and on the hangar floor.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                       {[
                         { name: "Isaac", role: "Founder", focus: "Acquisition Architecture", bio: "With roots deep in aviation operations, Isaac founded Stratus to bring the same level of checklists and precision found in the flight deck to marketing systems." },
                         { name: "Cristian", role: "Partner", focus: "Operational Scaling", bio: "A strategic force in high-ticket service growth, Cristian ensures our internal protocols match the rapid scaling targets of our top-tier clients." }
                       ].map((member, i) => (
                         <div key={i} className={`group relative p-8 md:p-10 rounded-[3rem] border transition-all duration-700 hover:scale-[1.02] flex flex-col min-h-[340px] ${theme === 'dark' ? 'bg-slate-950 border-white/5 hover:border-sky-500/30 shadow-2xl' : 'bg-white border-slate-200 hover:border-sky-300 shadow-xl'}`}>
                            <div className="flex flex-col space-y-6 relative z-10 h-full">
                               <div className="flex items-center space-x-6">
                                  <div className={`w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-2xl flex items-center justify-center text-3xl font-black border transition-colors ${theme === 'dark' ? 'bg-slate-900 border-white/10 text-sky-500 group-hover:text-white group-hover:bg-sky-600' : 'bg-slate-50 border-slate-100 text-sky-600'}`}>
                                     {member.name[0]}
                                  </div>
                                  <div className="space-y-1 overflow-hidden">
                                     <h4 className={`text-xl md:text-2xl font-black truncate ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{member.name}</h4>
                                     <div className="text-[10px] font-black uppercase text-sky-500 tracking-widest">{member.role}</div>
                                  </div>
                               </div>
                               <div className="space-y-3 flex-grow overflow-hidden">
                                  <div className="text-[9px] font-black uppercase tracking-[0.3em] opacity-40 shrink-0">Operational Briefing</div>
                                  <p className={`text-sm md:text-base font-medium leading-relaxed opacity-70 ${theme === 'dark' ? 'text-slate-200' : 'text-slate-700'} line-clamp-6`}>{member.bio}</p>
                               </div>
                               <div className={`pt-4 border-t ${theme === 'dark' ? 'border-white/5' : 'border-slate-100'} flex items-center justify-between shrink-0`}>
                                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest opacity-50">Focus: {member.focus}</span>
                               </div>
                            </div>
                            <div className="absolute top-10 right-10 opacity-[0.03] text-6xl md:text-8xl font-black pointer-events-none group-hover:opacity-[0.06] transition-opacity uppercase select-none">{member.name}</div>
                         </div>
                       ))}
                    </div>
                 </div>
               </div>
            </section>

            {/* THE STRATUS STANDARD - CORE VALUES */}
            <section className="py-24 overflow-hidden">
               <div className="container mx-auto px-6">
                 <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-10">
                       <div className="space-y-4">
                          <h3 className={`text-4xl md:text-5xl font-black tracking-tighter ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>The Stratus Standard</h3>
                          <p className={`text-lg font-medium opacity-70 leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                             We emphasize building a healthy long-term relationship with our clients. We want to reach a point where we make confident decisions together and trust our collective judgment as marketing and advertising consultants.
                          </p>
                       </div>
                       
                       <div className="space-y-8">
                          {[
                            { title: "Deep Care for Operators", desc: "Your business isn't just a spreadsheet. We care about the instructors, the aircraft, and the students behind the clicks.", icon: "💙" },
                            { title: "Judgment You Can Trust", desc: "Our recommendations aren't based on guesses. They are derived from the same precision data pilots use to navigate.", icon: "⚖️" },
                            { title: "Collaborative Velocity", desc: "We build systems with you, not just for you. Confident decisions come from a shared cockpit vision.", icon: "⚡" }
                          ].map((value, i) => (
                            <div key={i} className="flex items-start space-x-6 group">
                               <div className="w-12 h-12 shrink-0 rounded-2xl bg-sky-500/10 flex items-center justify-center text-2xl transition-transform group-hover:scale-110">
                                  {value.icon}
                               </div>
                               <div className="space-y-1">
                                  <h4 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{value.title}</h4>
                                  <p className={`text-sm font-medium opacity-60 leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>{value.desc}</p>
                               </div>
                            </div>
                          ))}
                       </div>
                    </div>

                    <div className="relative">
                       <div className={`p-10 rounded-[4rem] border relative overflow-hidden flex items-center justify-center transition-all duration-1000 ${theme === 'dark' ? 'bg-slate-950/80 border-white/5 shadow-2xl' : 'bg-white border-slate-200 shadow-2xl'}`}>
                          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                          <TacticalHUD theme={theme} />
                       </div>
                    </div>
                 </div>
               </div>
            </section>

            <SectionCTA />
          </div>
        );
      case Page.CONTACT:
        return (
          <div className="space-y-0">
            {/* CONTACT HERO */}
            <section className="pt-32 pb-16 relative overflow-hidden">
              <div className="container mx-auto px-6 relative z-10 text-center space-y-8">
                <div className="inline-flex items-center space-x-3 bg-sky-500/10 border border-sky-500/20 px-5 py-2 rounded-full mb-2">
                  <span className="text-[10px] font-black text-sky-500 uppercase tracking-widest">Sector Briefing</span>
                </div>
                <h2 className={`text-5xl md:text-7xl font-black tracking-tighter ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Initiate Dispatch.</h2>
                <div className="max-w-2xl mx-auto">
                   <p className={`text-lg md:text-xl font-medium leading-relaxed opacity-70 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                     Ready to calibrate your acquisition system? Secure a strategy call with our operations lead to discuss your growth targets.
                   </p>
                </div>
              </div>
            </section>

            {/* CONTACT SPLIT SCREEN */}
            <section className="py-12 pb-24">
               <div className="container mx-auto px-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                     
                     {/* CONTACT MODULES */}
                     <div className="space-y-6">
                        <FadeInText delay={100}>
                           <div className={`p-8 md:p-10 rounded-[2.5rem] border transition-all duration-700 flex flex-col ${theme === 'dark' ? 'bg-slate-900/60 border-white/5 shadow-xl' : 'bg-white border-slate-100 shadow-lg'}`}>
                              <div className="text-[10px] font-black text-sky-500 uppercase tracking-widest mb-2">Direct Line</div>
                              <h3 className={`text-2xl font-black mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Tactical Support</h3>
                              <div className="space-y-4 mb-10">
                                 <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-500">
                                       <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    </div>
                                    <span className={`text-base font-bold ${theme === 'dark' ? 'text-slate-200' : 'text-slate-700'}`}>(305) 414-1772</span>
                                 </div>
                                 <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-500">
                                       <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    </div>
                                    <span className={`text-base font-bold ${theme === 'dark' ? 'text-slate-200' : 'text-slate-700'}`}>info@stratusmarketingllc.com</span>
                                 </div>
                              </div>

                              {/* Calendly CTA */}
                              <div className="mt-auto border-t border-sky-500/10 pt-8">
                                 <a 
                                    href={CALENDLY_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-4 bg-sky-600 hover:bg-sky-500 text-white font-black rounded-xl shadow-2xl transition-all btn-book-glow uppercase tracking-[0.2em] text-xs flex items-center justify-center group"
                                  >
                                    <span>Book on Calendly</span>
                                    <svg className="w-4 h-4 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                 </a>
                                 <p className="text-[9px] font-black uppercase text-center mt-3 opacity-40 tracking-widest">Instant Operations Sync</p>
                              </div>
                           </div>
                        </FadeInText>

                        <FadeInText delay={200}>
                           <div className={`p-8 rounded-[2.5rem] border transition-all duration-700 overflow-hidden relative group ${theme === 'dark' ? 'bg-slate-900/40 border-white/5' : 'bg-slate-50 border-slate-100'}`}>
                              <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>
                              <div className="relative z-10 space-y-4">
                                 <div className="text-[10px] font-black text-sky-500 uppercase tracking-widest">Operator Note</div>
                                 <p className={`text-sm md:text-base font-medium leading-relaxed italic opacity-80 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                                    "We don't do discovery calls—we do strategy briefings. Come prepared with your current utilization rates and instructor headcount."
                                 </p>
                              </div>
                           </div>
                        </FadeInText>
                     </div>

                     {/* FORM MODULE */}
                     <FadeInText delay={300}>
                        <div className={`p-8 md:p-12 rounded-[3rem] border shadow-2xl relative overflow-hidden ${theme === 'dark' ? 'bg-slate-950/80 border-white/5' : 'bg-white border-slate-200 shadow-xl'}`}>
                           <h3 className={`text-3xl font-black mb-8 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Mission Dispatch</h3>
                           
                           {isSubmitted ? (
                             <div className="py-20 text-center space-y-4 animate-in fade-in zoom-in duration-700">
                                <div className="w-20 h-20 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                   <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <h4 className="text-2xl font-black text-white">Transmission Received</h4>
                                <p className="text-slate-400 font-medium">Ops command will follow up on this frequency shortly.</p>
                             </div>
                           ) : (
                             <form onSubmit={handleDispatch} className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                   <div className="space-y-2">
                                      <label className="text-[10px] font-black text-sky-500 uppercase tracking-widest">Callsign (Name)</label>
                                      <input required type="text" placeholder="e.g. Maverick" className={`w-full px-5 py-4 rounded-xl border outline-none transition-all focus:ring-2 focus:ring-sky-500 ${theme === 'dark' ? 'bg-slate-900 border-white/5 text-white placeholder:text-slate-600' : 'bg-slate-50 border-slate-200 text-slate-900'}`} />
                                   </div>
                                   <div className="space-y-2">
                                      <label className="text-[10px] font-black text-sky-500 uppercase tracking-widest">Frequency (Email)</label>
                                      <input required type="email" placeholder="contact@ops.com" className={`w-full px-5 py-4 rounded-xl border outline-none transition-all focus:ring-2 focus:ring-sky-500 ${theme === 'dark' ? 'bg-slate-900 border-white/5 text-white placeholder:text-slate-600' : 'bg-slate-50 border-slate-200 text-slate-900'}`} />
                                   </div>
                                </div>
                                <div className="space-y-2">
                                   <label className="text-[10px] font-black text-sky-500 uppercase tracking-widest">Sector (Business Type)</label>
                                   <select className={`w-full px-5 py-4 rounded-xl border outline-none transition-all focus:ring-2 focus:ring-sky-500 ${theme === 'dark' ? 'bg-slate-900 border-white/5 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'}`}>
                                      <option>Flight School</option>
                                      <option>Charter Ops</option>
                                      <option>Consultancy</option>
                                      <option>Aviation Service</option>
                                   </select>
                                </div>
                                <div className="space-y-2">
                                   <label className="text-[10px] font-black text-sky-500 uppercase tracking-widest">Briefing (Message)</label>
                                   <textarea required rows={4} placeholder="Describe your scale targets..." className={`w-full px-5 py-4 rounded-xl border outline-none transition-all focus:ring-2 focus:ring-sky-500 ${theme === 'dark' ? 'bg-slate-900 border-white/5 text-white placeholder:text-slate-600' : 'bg-slate-50 border-slate-200 text-slate-900'}`}></textarea>
                                </div>
                                <button type="submit" className="w-full py-5 bg-sky-600 hover:bg-sky-500 text-white font-black rounded-xl shadow-2xl transition-all btn-book-glow uppercase tracking-[0.2em] text-sm flex items-center justify-center group">
                                   <span>Initiate Dispatch</span>
                                   <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </button>
                                <p className={`text-[9px] font-bold text-center uppercase tracking-widest mt-4 opacity-50 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>Secure Encryption Active // KFXE Protocol</p>
                             </form>
                           )}
                        </div>
                     </FadeInText>
                  </div>
               </div>
            </section>
          </div>
        );
      case Page.PRIVACY:
        return (
          <div className="pt-32 pb-24 container mx-auto px-6 max-w-4xl">
            <header className="mb-16 border-b border-sky-500/10 pb-8">
              <div className="text-sky-500 font-black text-xs uppercase tracking-[0.4em] mb-3">Operational Directive</div>
              <h2 className={`text-4xl md:text-5xl font-black tracking-tighter ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Privacy Protocol</h2>
              <p className={`mt-4 font-medium italic opacity-60 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>Last Calibration: January 2026</p>
            </header>

            <div className={`space-y-12 text-sm md:text-base leading-relaxed font-medium ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
              <section>
                <p>This Privacy Policy explains how Stratus Marketing LLC (“Stratus”, “we”, “our”, or “us”) collects, uses, and protects your information when you visit our website or use our services.</p>
              </section>

              <section className="space-y-4">
                <h3 className={`text-xl font-black flex items-center ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                   <span className="w-1.5 h-6 bg-sky-500 mr-4 rounded-full"></span>
                   Information We Collect
                </h3>
                <p>We collect information that you provide to us directly, such as when you fill out forms on our website, communicate with us, or use our services. This may include:</p>
                <ul className="list-disc ml-8 space-y-2 opacity-80">
                  <li>Personal identification information (Name, email address, phone number, etc.)</li>
                  <li>Business information (Company name, job title, etc.)</li>
                  <li>Payment information (for service purchases)</li>
                  <li>Any other information you choose to provide</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h3 className={`text-xl font-black flex items-center ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                   <span className="w-1.5 h-6 bg-sky-500 mr-4 rounded-full"></span>
                   How We Use Your Information
                </h3>
                <p>We use the information we collect for various purposes, including:</p>
                <ul className="list-disc ml-8 space-y-2 opacity-80">
                  <li>To provide and maintain our services</li>
                  <li>To notify you about changes to our services</li>
                  <li>To provide customer support</li>
                  <li>To gather analysis or valuable information so that we can improve our services</li>
                  <li>To monitor the usage of our services</li>
                  <li>To detect, prevent and address technical issues</li>
                </ul>
              </section>

              <section className={`p-8 rounded-[2.5rem] border ${theme === 'dark' ? 'bg-slate-900/40 border-white/5' : 'bg-slate-50 border-slate-200'}`}>
                <h3 className={`text-xl font-black flex items-center mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                   <span className="w-1.5 h-6 bg-sky-500 mr-4 rounded-full"></span>
                   Information Sharing and Disclosure
                </h3>
                <p className="mb-6">We do not share your personal information with third parties except as described in this policy. We may disclose your personal information:</p>
                <ul className="list-disc ml-8 space-y-2 opacity-80 mb-8">
                  <li>To service providers who perform services on our behalf</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect and defend our rights and property</li>
                  <li>To prevent or investigate possible wrongdoing in connection with our services</li>
                  <li>To protect the personal safety of users of our services or the public</li>
                </ul>
                <div className={`p-6 rounded-2xl border ${theme === 'dark' ? 'bg-sky-500/10 border-sky-500/20 text-sky-400' : 'bg-sky-50 border-sky-200 text-sky-600'} font-black italic`}>
                  No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All other categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
                </div>
              </section>

              <section className="space-y-4">
                <h3 className={`text-xl font-black flex items-center ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                   <span className="w-1.5 h-6 bg-sky-500 mr-4 rounded-full"></span>
                   Cookies and Tracking
                </h3>
                <p>We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
              </section>

              <section className="space-y-4">
                <h3 className={`text-xl font-black flex items-center ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                   <span className="w-1.5 h-6 bg-sky-500 mr-4 rounded-full"></span>
                   Contact Sector Base
                </h3>
                <p>If you have any questions about this Privacy Policy, contact us at:</p>
                <div className="flex flex-col space-y-1 font-black text-sky-500 uppercase tracking-widest mt-4">
                  <span>Email: info@stratusmarketingllc.com</span>
                  <span>Phone: (305) 414-1772</span>
                </div>
              </section>
            </div>
            
            <div className="mt-20 pt-10 text-center">
              <button 
                onClick={() => { setCurrentPage(Page.HOME); window.scrollTo(0,0); }} 
                className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 hover:text-sky-500 transition-colors"
              >
                ← Return to Sector Base
              </button>
            </div>
          </div>
        );
      default:
        return (
          <section className="pt-32 pb-16 container mx-auto px-6 text-center">
             <h2 className="text-3xl font-black text-slate-500 uppercase tracking-widest">Section under final calibration.</h2>
             <button onClick={() => setCurrentPage(Page.HOME)} className="mt-6 text-sky-500 font-bold hover:underline">Return to Sector Base</button>
          </section>
        );
    }
  };

  const currentThemeStyles = theme === 'dark' 
    ? 'bg-slate-950 text-white bg-grid-pattern text-slate-800/5' 
    : 'bg-white text-slate-900 bg-grid-pattern text-slate-100';

  return (
    <div className={`min-h-screen transition-all duration-1000 relative overflow-x-hidden ${currentThemeStyles}`}>
      
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
         <div className={`absolute top-[-10%] right-[-10%] w-[1000px] h-[1000px] blur-[200px] rounded-full animate-drift transition-colors duration-1000 ${theme === 'dark' ? 'bg-sky-900' : 'bg-sky-100'}`}></div>
         <div className={`absolute bottom-[-10%] left-[-10%] w-[1000px] h-[1000px] blur-[200px] rounded-full animate-drift transition-colors duration-1000 ${theme === 'dark' ? 'bg-indigo-950' : 'bg-indigo-50'}`}></div>
      </div>

      <div className="fixed top-0 w-full z-50">
        <AirTrafficFeed theme={theme} />
        <header className={`w-full transition-all duration-700 border-b ${isScrolled ? (theme === 'dark' ? 'bg-slate-950/80 backdrop-blur-3xl py-3 border-white/5 shadow-2xl' : 'bg-white/80 backdrop-blur-3xl py-3 border-slate-100 shadow-sm') : 'bg-transparent py-6 border-transparent'}`}>
          <div className="container mx-auto px-6 flex justify-between items-center">
            <button onClick={() => setCurrentPage(Page.HOME)} className="flex items-center space-x-0 group">
              <div className="text-left">
                <div className={`text-lg md:text-xl font-black tracking-tighter leading-none ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>STRATUS MARKETING</div>
                <div className={`text-[8px] font-bold tracking-[0.1em] uppercase leading-none mt-1 transition-colors ${theme === 'dark' ? 'text-sky-400' : 'text-sky-600'}`}>Aviation First Performance Marketing</div>
              </div>
            </button>

            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map(item => (
                <button key={item.id} onClick={() => { setCurrentPage(item.id); window.scrollTo(0,0); }} className={`text-[9px] font-black uppercase tracking-[0.25em] transition-all relative group ${currentPage === item.id ? 'text-sky-500' : (theme === 'dark' ? 'text-slate-200 hover:text-white' : 'text-slate-500 hover:text-slate-950')}`}>
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-sky-500 transition-all duration-500 ${currentPage === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </button>
              ))}
              
              <div className={`flex items-center space-x-6 border-l pl-6 ${theme === 'dark' ? 'border-white/10' : 'border-slate-200'}`}>
                <button onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} className={`p-2 rounded-full transition-all duration-500 group relative overflow-hidden shadow-2xl ${theme === 'dark' ? 'bg-slate-900 text-sky-400 ring-1 ring-white/10' : 'bg-white text-slate-800 ring-1 ring-slate-200'}`}>
                    <div className="relative z-10 transition-all duration-500 group-hover:rotate-180 group-hover:scale-110">
                      {theme === 'dark' ? <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg> : <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>}
                    </div>
                </button>
                <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="bg-sky-600 hover:bg-sky-500 px-6 py-2.5 rounded-lg font-black text-[9px] uppercase tracking-[0.2em] text-white shadow-2xl transition-all btn-book-glow">
                    Book Now
                </a>
              </div>
            </nav>

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`md:hidden p-2 rounded-xl ${theme === 'dark' ? 'text-white hover:bg-white/5' : 'text-slate-900 hover:bg-slate-100'}`}>
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            </button>
          </div>
        </header>
      </div>

      {isMobileMenuOpen && (
        <div className={`fixed inset-0 z-[100] p-12 flex flex-col justify-center transition-all duration-700 ${theme === 'dark' ? 'bg-slate-950' : 'bg-white'}`}>
           <button onClick={() => setIsMobileMenuOpen(false)} className={`absolute top-6 right-6 p-4 rounded-full ${theme === 'dark' ? 'text-white hover:bg-white/5' : 'text-slate-900 hover:bg-slate-100'}`}>
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
           </button>
           <div className="space-y-6">
             {navItems.map(item => (
                <button key={item.id} onClick={() => { setCurrentPage(item.id); setIsMobileMenuOpen(false); window.scrollTo(0,0); }} className={`text-4xl font-black block text-left transition-all hover:translate-x-4 uppercase tracking-tighter ${theme === 'dark' ? 'text-white hover:text-sky-500' : 'text-slate-900 hover:text-sky-500'}`}>
                  {item.label}
                </button>
              ))}
           </div>
        </div>
      )}

      <main className="relative z-10 pt-16">
        {renderSection()}
      </main>

      <footer className={`py-12 border-t mt-12 transition-all duration-1000 ${theme === 'dark' ? 'bg-slate-950/80 border-white/5 backdrop-blur-3xl' : 'bg-slate-50 border-slate-200'}`}>
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-6">
             <div>
                <div className={`text-lg font-black tracking-tighter leading-none ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>STRATUS MARKETING</div>
                <div className={`text-[8px] font-bold tracking-[0.2em] uppercase leading-none mt-1 transition-colors ${theme === 'dark' ? 'text-sky-400' : 'text-sky-600'}`}>Aviation First</div>
             </div>
             <p className={`text-xs md:text-sm font-medium leading-relaxed max-w-xs ${theme === 'dark' ? 'text-slate-100' : 'text-slate-600'}`}>Acquisition engine designed for operators running serious service-based businesses.</p>
             
             {/* Social Buttons */}
             <div className="flex items-center space-x-4">
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${theme === 'dark' ? 'bg-slate-900 border border-white/5 text-slate-400 hover:text-sky-400 hover:border-sky-500/30' : 'bg-white border border-slate-200 text-slate-500 hover:text-sky-600 hover:border-sky-200 shadow-sm'}`} title="LinkedIn">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${theme === 'dark' ? 'bg-slate-900 border border-white/5 text-slate-400 hover:text-sky-400 hover:border-sky-500/30' : 'bg-white border border-slate-200 text-slate-500 hover:text-sky-600 hover:border-sky-200 shadow-sm'}`} title="Facebook">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${theme === 'dark' ? 'bg-slate-900 border border-white/5 text-slate-400 hover:text-sky-400 hover:border-sky-500/30' : 'bg-white border border-slate-200 text-slate-500 hover:text-sky-600 hover:border-sky-200 shadow-sm'}`} title="Instagram">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
             </div>
          </div>
          <div className="space-y-3">
            <h5 className="font-black uppercase text-[10px] tracking-[0.3em] text-sky-500">Modules</h5>
            <ul className={`space-y-2 text-xs md:text-sm font-bold ${theme === 'dark' ? 'text-slate-100' : 'text-slate-500'}`}>
              <li><button onClick={() => { setCurrentPage(Page.SERVICES); window.scrollTo(0,0); }} className="hover:text-sky-500 transition-colors">The Protocol</button></li>
              <li><button onClick={() => { setCurrentPage(Page.RESULTS); window.scrollTo(0,0); }} className="hover:text-sky-500 transition-colors">Case Studies</button></li>
              <li>
                <button 
                  onClick={() => { setCurrentPage(Page.PRIVACY); window.scrollTo(0,0); }} 
                  className="hover:text-sky-500 transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h5 className="font-black uppercase text-[10px] tracking-[0.3em] text-sky-500">Dispatch</h5>
            <ul className={`space-y-2 text-xs md:text-sm font-bold ${theme === 'dark' ? 'text-slate-100' : 'text-slate-500'}`}>
              <li>(305) 414-1772</li>
              <li>info@stratusmarketingllc.com</li>
            </ul>
          </div>
          <div className="space-y-3">
             <h5 className="font-black uppercase text-[10px] tracking-[0.3em] text-sky-500">Briefing</h5>
             <div className="flex space-x-2">
                <input className={`px-4 py-2.5 rounded-lg text-[10px] outline-none flex-1 border transition-all focus:ring-2 focus:ring-sky-500 ${theme === 'dark' ? 'bg-slate-900 border-white/5 text-white placeholder:text-slate-500' : 'bg-white border-slate-200 shadow-sm'}`} placeholder="Join sector feed" />
                <button className="bg-sky-600 px-4 rounded-lg text-white shadow-2xl hover:bg-sky-500 transition-all">→</button>
             </div>
          </div>
        </div>
        <div className={`container mx-auto px-6 pt-6 mt-8 border-t border-sky-500/5 text-center text-[9px] font-black uppercase tracking-[0.5em] ${theme === 'dark' ? 'text-slate-300' : 'text-slate-400 opacity-80'}`}>
          © 2025 Stratus Marketing LLC
        </div>
      </footer>

      <GeminiConsultant />
    </div>
  );
};

export default App;
