
import React, { useState, useEffect } from 'react';

const steps = [
  { id: 1, label: "Market Audit", desc: "Analyzing unit economics, operational bandwidth, and sector geography to set clear scale targets." },
  { id: 2, label: "System Design", desc: "Engineering high-intent creative assets and performance funnels designed for complex decision cycles." },
  { id: 3, label: "Deployment", desc: "Activating the acquisition engine and tuning lead quality to match your specific conversion capacity." },
  { id: 4, label: "Precision Scale", desc: "Methodically increasing volume based on high-integrity data points and operational throughput." },
];

const PipelineSteps: React.FC<{ theme?: 'dark' | 'light' }> = ({ theme = 'dark' }) => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-12 max-w-full">
      <div className="flex justify-between items-center relative py-8 px-6">
        {/* Connection Line */}
        <div className={`absolute top-1/2 left-10 right-10 h-[1px] -translate-y-1/2 ${theme === 'dark' ? 'bg-slate-800' : 'bg-slate-200'}`}></div>
        <div 
          className="absolute top-1/2 left-10 h-[1px] bg-sky-500/50 -translate-y-1/2 transition-all duration-1000 origin-left"
          style={{ width: `calc(${ (activeStep / (steps.length - 1)) * 100}% - 20px)` }}
        ></div>

        {steps.map((step, idx) => (
          <div key={step.id} className="relative z-10 flex flex-col items-center">
            <button 
              onClick={() => setActiveStep(idx)}
              className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-500 hover:scale-110 ${
                idx <= activeStep 
                  ? 'bg-sky-600 border-sky-500 text-white shadow-lg' 
                  : (theme === 'dark' ? 'bg-slate-950 border-slate-800 text-slate-500' : 'bg-white border-slate-200 text-slate-300')
              }`}
            >
              <span className="text-xs font-black">{step.id}</span>
            </button>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, idx) => (
          <div 
            key={step.id} 
            className={`p-10 rounded-[2.5rem] border transition-all duration-1000 ${
              idx === activeStep 
                ? (theme === 'dark' ? 'bg-slate-900/80 border-sky-500/30 shadow-2xl' : 'bg-white border-sky-400 shadow-xl')
                : (theme === 'dark' ? 'bg-transparent border-transparent opacity-30 grayscale' : 'bg-transparent border-transparent opacity-40 grayscale')
            }`}
          >
            <div className="text-[9px] font-black text-sky-500 uppercase tracking-[0.3em] mb-4">Module 0{step.id}</div>
            <h4 className={`text-xl font-black mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{step.label}</h4>
            <p className={`text-sm leading-relaxed font-medium ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PipelineSteps;
