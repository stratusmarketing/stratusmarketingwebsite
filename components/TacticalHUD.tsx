
import React, { useState, useEffect } from 'react';

const TacticalHUD: React.FC<{ theme?: 'dark' | 'light' }> = ({ theme = 'dark' }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset(prev => (prev + 0.5) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full aspect-square max-w-[400px] flex items-center justify-center font-mono overflow-hidden">
      {/* HUD Circle */}
      <div className={`absolute inset-4 rounded-full border-2 border-dashed ${theme === 'dark' ? 'border-sky-500/20' : 'border-sky-500/10'}`}></div>
      
      {/* Horizon Line */}
      <div className={`absolute w-full h-[1px] ${theme === 'dark' ? 'bg-sky-500/30' : 'bg-sky-500/20'}`}></div>
      
      {/* Vertical bars (Ladder) */}
      <div className="absolute flex flex-col items-center space-y-8 pointer-events-none opacity-40" style={{ transform: `translateY(${(offset % 40) - 20}px)` }}>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className={`w-20 h-[2px] ${theme === 'dark' ? 'bg-sky-400' : 'bg-sky-600'}`}></div>
            <div className={`text-[8px] font-black ${theme === 'dark' ? 'text-sky-400' : 'text-sky-600'} mt-1`}>{(i * 10) + 100}</div>
          </div>
        ))}
      </div>

      {/* Crosshair */}
      <div className="relative z-10 w-12 h-12 flex items-center justify-center">
        <div className={`absolute w-full h-[2px] ${theme === 'dark' ? 'bg-sky-500' : 'bg-sky-600'}`}></div>
        <div className={`absolute h-full w-[2px] ${theme === 'dark' ? 'bg-sky-500' : 'bg-sky-600'}`}></div>
        <div className={`w-4 h-4 rounded-full border-2 ${theme === 'dark' ? 'border-sky-500' : 'border-sky-600'} animate-ping`}></div>
      </div>

      {/* Integrated Protocol Status */}
      <div className="absolute top-[35%] left-1/2 -translate-x-1/2 text-center pointer-events-none z-20">
        <div className="text-[8px] font-black uppercase tracking-[0.4em] text-sky-500/80 mb-1">Protocol Status</div>
        <div className={`text-xs md:text-sm font-black tracking-widest animate-pulse ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
          PARTNERSHIP STABILIZED
        </div>
        <div className={`h-[1px] w-full mt-1 bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-40`}></div>
      </div>

      {/* Data Readouts */}
      <div className="absolute top-10 left-10 text-[9px] font-black space-y-1">
        <div className="text-sky-500">ALT: <span className="text-white">{(25000 + offset).toFixed(0)}</span></div>
        <div className="text-sky-500">SPD: <span className="text-white">{(450 + offset / 10).toFixed(1)}KTS</span></div>
      </div>

      <div className="absolute bottom-10 right-10 text-[9px] font-black space-y-1 text-right">
        <div className="text-indigo-500">TRK: <span className="text-white">045°</span></div>
        <div className="text-indigo-500">HGT: <span className="text-white">AGL 12.5k</span></div>
      </div>

      {/* Compass Ring */}
      <div className="absolute inset-0 border-[1px] border-sky-500/10 rounded-full flex items-center justify-center animate-spin-slow" style={{ animationDuration: '30s' }}>
        {['N', 'E', 'S', 'W'].map((dir, i) => (
          <div key={dir} className={`absolute font-black text-[10px] text-sky-500/40`} style={{ transform: `rotate(${i * 90}deg) translateY(-170px)` }}>{dir}</div>
        ))}
      </div>
    </div>
  );
};

export default TacticalHUD;
