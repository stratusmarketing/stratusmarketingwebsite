
import React from 'react';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  setView: (view: 'home' | 'engine' | 'contact' | 'pricing') => void;
  currentView: string;
}

const Navbar: React.FC<NavbarProps> = ({ setView, currentView }) => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/10 glass-panel px-8 py-4 flex items-center justify-between bg-white/70 dark:bg-[#020617]/70">
      <div className="flex flex-col cursor-pointer" onClick={() => setView('home')}>
        <div className="flex items-center gap-2">
          <span className="text-xl font-black tracking-tighter text-slate-900 dark:text-white uppercase leading-none">
            Stratus <span className="text-sky-500">Websites</span>
          </span>
        </div>
        <span className="text-[8px] font-bold text-sky-400 dark:text-sky-400 uppercase tracking-widest mt-1 opacity-80">
          Elite Performance Marketing
        </span>
      </div>

      <div className="hidden lg:flex items-center gap-10 text-[9px] font-black text-slate-600 dark:text-slate-300 tracking-[0.25em] uppercase">
        <button 
          onClick={() => setView('home')} 
          className={`nav-link transition-all ${currentView === 'home' ? 'text-sky-500' : 'hover:text-sky-500'}`}
        >
          Home
        </button>
        <button 
          onClick={() => setView('engine')} 
          className={`nav-link transition-all ${currentView === 'engine' ? 'text-sky-500' : 'hover:text-sky-500'}`}
        >
          The System
        </button>
        <button 
          onClick={() => setView('pricing')} 
          className={`nav-link transition-all ${currentView === 'pricing' ? 'text-sky-500' : 'hover:text-sky-500'}`}
        >
          Pricing
        </button>
        <button 
          onClick={() => setView('contact')} 
          className={`nav-link transition-all ${currentView === 'contact' ? 'text-sky-500' : 'hover:text-sky-500'}`}
        >
          Contact
        </button>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <div className="hidden sm:flex items-center gap-3">
          <a 
            href="https://stratusmarketingllc.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-md text-[10px] font-black uppercase tracking-widest border border-slate-200/10 dark:border-sky-500/30 text-sky-600 dark:text-sky-400 hover:bg-sky-500/5 transition-all"
          >
            Marketing
          </a>
          <a 
            href="https://calendly.com/stratusmarketingllc/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sky-600 text-white px-8 py-3 rounded-md text-[10px] font-black uppercase tracking-widest animate-breathe-glow hover:bg-sky-500 transition-all shadow-lg flex items-center justify-center"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
