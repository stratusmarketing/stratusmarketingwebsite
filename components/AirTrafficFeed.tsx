
import React, { useState, useEffect } from 'react';

interface Alert {
  id: number;
  message: string;
  type: 'TARGET' | 'SECTOR' | 'DISPATCH' | 'SYNC';
}

const mockAlerts: Alert[] = [
  { id: 1, type: 'TARGET', message: "TARGET ACQUIRED: FLIGHT SCHOOL IN TEXAS BOOKED 4 DISCOVERY FLIGHTS" },
  { id: 2, type: 'SECTOR', message: "SECTOR SYNC: CALIFORNIA CHARTER OP DEPLOYED ACQUISITION ENGINE" },
  { id: 3, type: 'DISPATCH', message: "DISPATCH: FLORIDA HANGAR CONFIRMED +15 QUALIFIED LEADS" },
  { id: 4, type: 'SYNC', message: "GROWTH LOCKED: ARIZONA OPERATOR ACHIEVED 3.4X ROI" },
  { id: 5, type: 'TARGET', message: "TARGET ACQUIRED: NEW YORK CONSULTANCY FILLED CALENDAR 3 WEEKS AHEAD" },
  { id: 6, type: 'DISPATCH', message: "DISPATCH: MIDWEST FLIGHT ACADEMY INITIATED SCALE PROTOCOL" },
];

const AirTrafficFeed: React.FC<{ theme?: 'dark' | 'light' }> = ({ theme = 'dark' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % mockAlerts.length);
        setIsVisible(true);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentAlert = mockAlerts[currentIndex];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'TARGET': return '🎯';
      case 'SECTOR': return '📡';
      case 'DISPATCH': return '🚀';
      case 'SYNC': return '⚡';
      default: return '🛰️';
    }
  };

  return (
    <div className={`w-full py-2.5 px-6 border-b font-mono overflow-hidden transition-all duration-700 ${
      theme === 'dark' ? 'bg-slate-950 border-sky-500/10' : 'bg-slate-50 border-slate-200'
    }`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            <span className={`text-[9px] font-black uppercase tracking-[0.2em] ${theme === 'dark' ? 'text-sky-500' : 'text-sky-600'}`}>
              Live Air Traffic
            </span>
          </div>
          
          <div className={`h-4 w-[1px] ${theme === 'dark' ? 'bg-white/10' : 'bg-slate-200'}`}></div>

          <div className={`transition-all duration-500 flex items-center space-x-3 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
            <span className="text-sm shrink-0">{getTypeIcon(currentAlert.type)}</span>
            <span className={`text-[10px] md:text-xs font-black tracking-widest uppercase ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              {currentAlert.message}
            </span>
          </div>
        </div>

        <div className={`hidden md:block text-[9px] font-black uppercase tracking-widest ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>
          Sector: Global // Frequency: 121.5
        </div>
      </div>
    </div>
  );
};

export default AirTrafficFeed;
