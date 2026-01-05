
import React, { useState, useEffect } from 'react';

const RadarView: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  const [hoveredBlip, setHoveredBlip] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.6) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const isScanned = (blipAngle: number) => {
    const diff = (rotation - blipAngle + 360) % 360;
    return diff < 60;
  };

  const blips = [
    { id: 1, x: 75, y: 25, angle: 45, label: "Market Intent Scan", color: "bg-sky-400" },
    { id: 2, x: 20, y: 60, angle: 210, label: "Acquisition Logic", color: "bg-indigo-500" },
    { id: 3, x: 50, y: 80, angle: 110, label: "Operational Throughput", color: "bg-sky-300" },
  ];

  return (
    <div className="relative w-full aspect-square max-w-[380px] mx-auto group transition-all duration-700">
      {/* Outer Glow Wrapper to allow blips to pop out */}
      <div className="absolute inset-0 bg-transparent rounded-full border-2 border-sky-500/30 p-8 shadow-[0_0_50px_rgba(56,189,248,0.1)]">
        {/* Overflow hidden container for internal effects only */}
        <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
          {/* Intense Glow Base */}
          <div className="absolute inset-0 bg-sky-500/10 blur-[60px] rounded-full"></div>
          
          {/* High Contrast Grid Lines */}
          <div className="absolute inset-0 flex items-center justify-center opacity-40">
            <div className="w-full h-[1.5px] bg-sky-400/60"></div>
            <div className="h-full w-[1.5px] bg-sky-400/60 absolute"></div>
            <div className="absolute w-3/4 h-3/4 border-2 border-sky-400/40 rounded-full"></div>
            <div className="absolute w-1/2 h-1/2 border-2 border-sky-400/40 rounded-full"></div>
            <div className="absolute w-1/4 h-1/4 border-2 border-sky-400/40 rounded-full"></div>
          </div>

          {/* Intense Conic Sweep */}
          <div 
            className="absolute inset-0 origin-center"
            style={{ 
              transform: `rotate(${rotation}deg)`,
              background: 'conic-gradient(from 0deg, transparent 0deg, rgba(56, 189, 248, 0.4) 45deg, transparent 120deg)'
            }}
          ></div>
        </div>
      </div>

      {/* Blips - Positioned outside the overflow-hidden container */}
      {blips.map((blip) => {
        const active = isScanned(blip.angle) || hoveredBlip === blip.id;
        return (
          <div 
            key={blip.id}
            className="absolute z-[100] cursor-crosshair"
            style={{ 
              left: `${blip.x}%`, 
              top: `${blip.y}%`,
            }}
            onMouseEnter={() => setHoveredBlip(blip.id)}
            onMouseLeave={() => setHoveredBlip(null)}
          >
            <div className={`w-4 h-4 ${blip.color} rounded-full shadow-[0_0_20px_rgba(56,189,248,1)] relative transition-all duration-1000 ${active ? 'scale-125 opacity-100 ring-2 ring-white/80' : 'scale-50 opacity-20'}`}>
               {active && (
                 <div className="absolute inset-[-200%] rounded-full border-2 border-sky-400/60 animate-ping"></div>
               )}
            </div>
            
            {/* Pop-out label with higher z-index and explicit positioning to avoid clipping */}
            <div className={`absolute top-full mt-4 left-1/2 -translate-x-1/2 transition-all duration-700 backdrop-blur-3xl border border-sky-500/40 px-4 py-2 rounded-xl text-[9px] font-black whitespace-nowrap z-[110] shadow-2xl tracking-[0.2em] uppercase ${active ? 'opacity-100 translate-y-0 text-white bg-sky-600 shadow-sky-500/30' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
              {blip.label}
            </div>
          </div>
        );
      })}

      {/* Scan Label */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <div className="text-[10px] uppercase tracking-[0.5em] text-sky-400/60 font-black animate-pulse">SYSTEM SCAN</div>
      </div>
    </div>
  );
};

export default RadarView;
