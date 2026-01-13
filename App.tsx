import React, { useState, useEffect, useRef } from 'react';
import { Page } from './types';
import RadarView from './components/RadarView';
import TacticalHUD from './components/TacticalHUD';
import PipelineSteps from './components/PipelineSteps';
import GeminiConsultant from './components/GeminiConsultant';
import AirTrafficFeed from './components/AirTrafficFeed';

// IMPORT YOUR VIDEO HERE
import coreTestimonial1 from './videos/Core_Testimonial1.mp4';

const CALENDLY_LINK = "https://calendly.com/stratusmarketingllc/30min";
const LINKEDIN_URL = "https://www.linkedin.com/company/stratusmarketingllc/";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61578807435287";
const INSTAGRAM_URL = "https://www.instagram.com/stratus.marketing";
const STRATUS_WEBSITES_URL = "http://stratuswebsites.com/";

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
        setDisplayValue(`${prefix}${isDecimal ? currentCount.toFixed(1) : Math.floor(currentCount)}${suffix}`);
        if (progress < 1) window.requestAnimationFrame(step);
      };
      window.requestAnimationFrame(step);
    };
    return () => observer.disconnect();
  }, [value, duration]);
  return <span ref={countRef}>{displayValue}</span>;
};

// FIXED VIDEO COMPONENT
const VideoTestimonial: React.FC<{ v: any; theme: string }> = ({ v, theme }) => {
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="flex flex-col space-y-4 md:space-y-6 group cursor-pointer">
      <div className={`aspect-[9/16] rounded-[2.5rem] bg-gradient-to-br ${v.gradient} border border-white/5 relative overflow-hidden flex items-center justify-center transition-all duration-1000 group-hover:scale-[1.03] group-hover:shadow-[0_0_50px_rgba(56,189,248,0.2)] shadow-2xl`}>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {v.videoSrc && !videoError && (
          <video 
            ref={videoRef}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
            src={v.videoSrc}
            playsInline
            muted
            loop
            preload="auto"
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setVideoError(true)}
            onMouseOver={(e) => videoLoaded && e.currentTarget.play()}
            onMouseOut={(e) => videoLoaded && e.currentTarget.pause()}
          />
        )}

        <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20">
          <span className="bg-sky-500/20 border border-sky-500/30 text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-full text-sky-400 backdrop-blur-md">{v.tag}</span>
        </div>
        
        <div className={`bg-white/10 backdrop-blur-md w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center border border-white/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-sky-600 group-hover:border-sky-500 z-10 ${videoLoaded ? 'group-hover:opacity-0' : 'opacity-100'}`}>
           <svg className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.841z"/></svg>
        </div>
      </div>
      <div className="px-2 space-y-2">
        <p className={`text-base md:text-lg font-black leading-tight transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{v.caption}</p>
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Verified Client</span>
        </div>
      </div>
    </div>
  );
};

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
    <div ref={ref} className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: `${delay}ms` }}>
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

  const handleDispatch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      sector: formData.get('sector'),
      message: formData.get('message'),
      source: 'Website Contact Form',
      timestamp: new Date().toISOString()
    };
    try {
      const response = await fetch("https://services.leadconnectorhq.com/hooks/5pnW5upmv0M0UTwGeHYN/webhook-trigger/f2b22e0e-1261-4dc2-bfd7-1042cff094e2", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  const SectionCTA = () => (
    <section className="py-8 md:py-16 relative">
      <div className="container mx-auto px-6">
        <div className={`relative p-8 md:p-12 rounded-[2.5rem] border transition-all duration-1000 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 ${
          theme === 'dark' ? 'bg-slate-900/40 border-sky-500/10 shadow-2xl backdrop-blur-sm' : 'bg-white border-slate-200 shadow-xl'
        }`}>
          <div className="text-center lg:text-left space-y-3 relative z-10 max-w-xl">
            <h2 className={`text-3xl md:text-5xl font-black tracking-tighter ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Ready to Scale?</h2>
            <p className="text-sm md:text-lg font-medium leading-relaxed opacity-80 opacity-80">Deploy a precision-engineered marketing system designed for operators who demand consistent utilization and growth.</p>
          </div>
          <div className="relative z-10 whitespace-nowrap w-full lg:w-auto">
             <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="px-6 py-4 md:px-10 md:py-5 bg-sky-600 hover:bg-sky-500 text-white font-black rounded-2xl transition-all shadow-2xl text-base md:text-xl flex items-center justify-center group/cta btn-book-glow relative">
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
            <section className="pt-20 pb-10 md:pt-32 md:pb-16 relative overflow-hidden min-h-[70vh] flex items-center">
              <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className={`relative p-6 md:p-12 rounded-[2.5rem] border transition-all duration-1000 glass-panel shadow-2xl ${theme === 'dark' ? 'bg-slate-900/60 border-white/5' : 'bg-white/95 border-slate-200'}`}>
                  <div className="relative z-10 space-y-4 md:space-y-8">
                    <div className="inline-flex items-center space-x-3 bg-sky-500/10 border border-sky-500/20 px-4 py-1.5 rounded-full">
                      <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></span>
                      <span className="text-[9px] font-black text-sky-500 uppercase tracking-widest">Performance Systems Architecture</span>
                    </div>
                    <h1 className={`text-4xl md:text-7xl font-black leading-[1.0] tracking-tighter ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Fill your calendar <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-500 to-indigo-500">with qualified bookings.</span></h1>
                    <p className="text-base md:text-xl leading-relaxed font-medium opacity-80">We design and run Meta, Instagram, and Facebook ads, systems, and funnels so your calendar fills with the right calls and discovery flights.</p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white font-black rounded-2xl transition-all shadow-2xl text-center text-lg btn-book-glow">Book Now</a>
                      <button onClick={() => setCurrentPage(Page.SERVICES)} className={`px-8 py-4 border font-black rounded-2xl transition-all text-center text-lg ${theme === 'dark' ? 'bg-slate-950/20 border-white/10 text-white hover:bg-white/5' : 'bg-white border-slate-200 text-slate-900 hover:bg-slate-50'}`}>How It Works</button>
                    </div>
                  </div>
                </div>
                <div className="relative flex justify-center lg:justify-end scale-90 md:scale-110"><RadarView /></div>
              </div>
            </section>
            <SectionCTA />
          </>
        );
      case Page.RESULTS:
        return (
          <div className="space-y-0">
            <section className="pt-24 pb-12 md:pt-40 md:pb-24 container mx-auto px-6">
              <div className="max-w-6xl mx-auto space-y-12 md:space-y-24">
                 <div className="text-center space-y-4 md:space-y-6">
                    <div className="inline-flex items-center space-x-3 bg-sky-500/10 border border-sky-500/20 px-5 py-2 rounded-full mb-2">
                       <span className="text-[10px] font-black text-sky-500 uppercase tracking-widest">Sector Intelligence</span>
                    </div>
                    <h2 className={`text-4xl md:text-7xl font-black tracking-tighter ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Proof of Performance</h2>
                 </div>

                 {/* VIDEO TESTIMONIALS SECTION */}
                 <div className="pt-24 space-y-12 pb-12">
                   <div className="text-center space-y-2">
                      <h3 className={`text-3xl md:text-4xl font-black tracking-tighter ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Direct from the Flight Deck</h3>
                      <p className="opacity-60 text-base md:text-lg">Real results shared by operators who scaled with Stratus.</p>
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {[
                        { caption: "Flight school owner on stabilizing demand", videoSrc: coreTestimonial1, gradient: "from-sky-500/20 to-sky-950/20", icon: "🛫", tag: "Stabilized Scale" },
                        { caption: "Consultant on predictable scaling", videoSrc: null, gradient: "from-indigo-500/20 to-indigo-950/20", icon: "💼", tag: "High-Ticket Growth" },
                        { caption: "CEO on achieving 5x ROI", videoSrc: null, gradient: "from-emerald-500/20 to-emerald-950/20", icon: "🚀", tag: "Precision Impact" }
                      ].map((v, i) => (
                        <VideoTestimonial key={i} v={v} theme={theme} />
                      ))}
                   </div>
                 </div>
              </div>
            </section>
            <SectionCTA />
          </div>
        );
      case Page.SERVICES:
        return (
            <div className="pt-24 pb-12 container mx-auto px-6 text-center">
              <h2 className="text-5xl font-black mb-10">Our Services</h2>
              <PipelineSteps theme={theme} />
              <SectionCTA />
            </div>
        );
      case Page.CONTACT:
        return (
          <div className="pt-24 pb-12 container mx-auto px-6">
            <h2 className="text-5xl font-black text-center mb-10">Contact Ops</h2>
            <form onSubmit={handleDispatch} className="max-w-xl mx-auto space-y-6">
               <input name="name" required placeholder="Name" className="w-full p-4 rounded-xl border bg-transparent" />
               <input name="email" required type="email" placeholder="Email" className="w-full p-4 rounded-xl border bg-transparent" />
               <button type="submit" className="w-full py-4 bg-sky-600 text-white font-black rounded-xl">Dispatch</button>
            </form>
          </div>
        );
      case Page.PRIVACY:
          return <div className="p-24 text-center">Privacy Policy Component</div>;
      default:
        return null;
    }
  };

  const currentThemeStyles = theme === 'dark' ? 'bg-slate-950 text-white bg-grid-pattern text-slate-800/5' : 'bg-white text-slate-900 bg-grid-pattern text-slate-100';

  return (
    <div className={`min-h-screen transition-all duration-1000 relative overflow-x-hidden ${currentThemeStyles}`}>
      <div className="fixed top-0 w-full z-50">
        <header className={`w-full transition-all duration-700 border-b ${isScrolled ? (theme === 'dark' ? 'bg-slate-950/80 backdrop-blur-3xl py-3 border-white/5' : 'bg-white/80 backdrop-blur-3xl py-3 border-slate-100') : 'bg-transparent py-4 border-transparent'}`}>
          <div className="container mx-auto px-6 flex justify-between items-center">
            <button onClick={() => setCurrentPage(Page.HOME)} className="font-black text-xl">STRATUS MARKETING</button>
            <nav className="hidden md:flex space-x-10">
              {navItems.map(item => (
                <button key={item.id} onClick={() => { setCurrentPage(item.id); window.scrollTo(0,0); }} className={`text-[10px] font-black uppercase tracking-[0.3em] ${currentPage === item.id ? 'text-sky-500' : ''}`}>{item.label}</button>
              ))}
              <button onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} className="p-2 border rounded-full">{theme === 'dark' ? '☀️' : '🌙'}</button>
            </nav>
          </div>
        </header>
      </div>
      <main className="relative z-10">{renderSection()}</main>
      <footer className="p-12 text-center border-t">© 2025 Stratus Marketing LLC</footer>
      <GeminiConsultant />
    </div>
  );
};
export default App;
