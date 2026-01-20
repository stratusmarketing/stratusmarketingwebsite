
import React from 'react';

interface FooterProps {
  setView: (view: 'home' | 'engine' | 'contact' | 'pricing') => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  const socialLinks = {
    facebook: 'https://www.facebook.com/profile.php?id=61586524191553',
    instagram: 'https://www.instagram.com/stratuswebsites/',
    linkedin: 'https://www.linkedin.com/company/stratus-websites/'
  };

  return (
    <footer className="bg-slate-50 dark:bg-[#020617] border-t border-slate-200/10 py-20 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        {/* Column 1: Brand & Social */}
        <div className="space-y-8">
          <div className="cursor-pointer" onClick={() => setView('home')}>
            <span className="text-xl font-black tracking-tighter text-slate-900 dark:text-white uppercase">
              Stratus <span className="text-sky-500">Websites</span>
            </span>
            <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mt-4 max-w-xs">
              Next-generation web systems designed for elite performance and uncompromising conversion rates.
            </p>
          </div>
          <div className="flex gap-4">
            <a 
              href={socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:border-sky-500/30 transition-all text-slate-600 dark:text-slate-400 hover:text-sky-500"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a 
              href={socialLinks.facebook} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:border-sky-500/30 transition-all text-slate-600 dark:text-slate-400 hover:text-sky-500"
            >
              <span className="sr-only">Facebook</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a 
              href={socialLinks.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:border-sky-500/30 transition-all text-slate-600 dark:text-slate-400 hover:text-sky-500"
            >
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
        </div>

        {/* Column 2: System */}
        <div>
          <h4 className="text-[10px] font-black text-sky-500 uppercase tracking-[0.3em] mb-8">The System</h4>
          <ul className="space-y-4 text-[10px] font-bold text-slate-600 dark:text-slate-400 tracking-widest uppercase">
            <li><button onClick={() => setView('engine')} className="hover:text-sky-500 transition-colors">Core Engine</button></li>
            <li><button onClick={() => setView('engine')} className="hover:text-sky-500 transition-colors">Review Shield</button></li>
            <li><button onClick={() => setView('engine')} className="hover:text-sky-500 transition-colors">SMS Relay</button></li>
          </ul>
        </div>

        {/* Column 3: Network */}
        <div>
          <h4 className="text-[10px] font-black text-sky-500 uppercase tracking-[0.3em] mb-8">Network</h4>
          <ul className="space-y-4 text-[10px] font-bold text-slate-600 dark:text-slate-400 tracking-widest uppercase">
            <li><a href="https://stratusmarketingllc.com" target="_blank" className="hover:text-sky-500 transition-colors">Marketing Agency</a></li>
            <li><button onClick={() => setView('pricing')} className="hover:text-sky-500 transition-colors">Pricing Plans</button></li>
            <li><button onClick={() => setView('contact')} className="hover:text-sky-500 transition-colors">Support Desk</button></li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h4 className="text-[10px] font-black text-sky-500 uppercase tracking-[0.3em] mb-8">Dispatch</h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">Receive priority intelligence on web performance.</p>
          <div className="relative group">
            <input 
              type="email" 
              placeholder="EMAIL ADDRESS"
              className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-md px-4 py-4 text-[10px] font-bold tracking-widest focus:ring-1 focus:ring-sky-500 outline-none transition-all placeholder:text-slate-400"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-sky-500 hover:translate-x-1 transition-transform">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-12 border-t border-slate-200/10 flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-3">
           <p className="text-[9px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-[0.5em] opacity-80 mb-1">
            A Division of
          </p>
          <a 
            href="https://stratusmarketingllc.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center group transition-all"
          >
            <div className="flex items-center gap-1 text-3xl font-black tracking-tighter text-slate-900 dark:text-white uppercase transition-colors group-hover:text-sky-500">
              STRATUS <span className="text-sky-500">MARKETING</span>
            </div>
            <div className="h-0.5 w-12 bg-sky-500 mt-2 group-hover:w-full transition-all duration-700"></div>
          </a>
          <a 
            href="https://stratusmarketingllc.com" 
            target="_blank" 
            className="mt-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400 hover:text-sky-500 transition-colors"
          >
            Visit Agency HQ
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6">
          <p className="text-[10px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-[0.5em] opacity-60">
            © {new Date().getFullYear()} STRATUS WEBSITES // ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
