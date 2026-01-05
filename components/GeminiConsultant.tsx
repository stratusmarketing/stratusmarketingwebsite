
import React, { useState } from 'react';
import { gemini } from '../services/geminiService';

const CALENDLY_LINK = "https://calendly.com/stratusmarketingllc/30min";

const GeminiConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    type: 'Flight School',
    currentLeads: '',
    targetGrowth: '',
    painPoint: ''
  });
  const [plan, setPlan] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const result = await gemini.generateFlightPlan(formData);
      setPlan(result);
      setStep(3);
    } catch (e) {
      alert("Error generating plan. Check API Key.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-sky-600 hover:bg-sky-500 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 z-50 flex items-center space-x-2 btn-book-glow"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        <span className="font-bold text-sm">How we fit for you</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <header className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                  <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></span>
                  <span>AI Strategy Co-Pilot</span>
                </h3>
                <p className="text-xs text-slate-500">Analyze your marketing flight plan in seconds.</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </header>

            <div className="p-8 overflow-y-auto">
              {step === 1 && (
                <div className="space-y-4">
                  <h4 className="font-bold text-lg text-white">Input Flight Parameters</h4>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Business Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:ring-1 focus:ring-sky-500 outline-none" 
                      placeholder="e.g. Blue Sky Aviation"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Business Type</label>
                    <select 
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:ring-1 focus:ring-sky-500 outline-none"
                      value={formData.type}
                      onChange={e => setFormData({...formData, type: e.target.value})}
                    >
                      <option>Flight School</option>
                      <option>Charter Op</option>
                      <option>Aviation Service</option>
                      <option>High-Ticket Consultant</option>
                    </select>
                  </div>
                  <button 
                    disabled={!formData.name}
                    onClick={() => setStep(2)}
                    className="w-full py-4 bg-sky-600 hover:bg-sky-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-all"
                  >
                    Next Station
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Primary Pain Point</label>
                    <textarea 
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white h-24 focus:ring-1 focus:ring-sky-500 outline-none" 
                      placeholder="e.g. Inconsistent lead volume..."
                      value={formData.painPoint}
                      onChange={e => setFormData({...formData, painPoint: e.target.value})}
                    ></textarea>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Target Growth (%)</label>
                      <input 
                        type="number" 
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white outline-none" 
                        placeholder="20"
                        value={formData.targetGrowth}
                        onChange={e => setFormData({...formData, targetGrowth: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Current Leads/Mo</label>
                      <input 
                        type="number" 
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white outline-none" 
                        placeholder="10"
                        value={formData.currentLeads}
                        onChange={e => setFormData({...formData, currentLeads: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <button onClick={() => setStep(1)} className="flex-1 py-4 border border-slate-800 text-slate-400 font-bold rounded-lg">Back</button>
                    <button 
                      onClick={handleGenerate}
                      className="flex-[2] py-4 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-lg flex items-center justify-center"
                    >
                      {loading ? (
                        <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                      ) : "Generate Flight Plan"}
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && plan && (
                <div className="space-y-6">
                  <div className="p-4 bg-sky-500/10 border border-sky-500/30 rounded-xl">
                    <h5 className="text-sky-500 font-bold uppercase text-xs mb-1">Proposed Strategy</h5>
                    <p className="text-xl font-bold text-white">{plan.strategyName}</p>
                  </div>
                  
                  <div>
                    <h5 className="text-slate-500 font-bold uppercase text-xs mb-3">Focus Channels</h5>
                    <div className="flex flex-wrap gap-2">
                      {plan.focusChannels.map((c: string, idx: number) => (
                        <span key={idx} className="bg-slate-800 text-slate-300 px-3 py-1 rounded-full text-xs border border-slate-700">{c}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="text-slate-500 font-bold uppercase text-xs mb-3">Tactical Steps</h5>
                    <ul className="space-y-3">
                      {plan.tacticalSteps.map((s: string, idx: number) => (
                        <li key={idx} className="flex items-start space-x-3 text-sm text-slate-300">
                          <span className="text-sky-500 mt-1">✓</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl">
                    <h5 className="text-amber-500 font-bold uppercase text-xs mb-1">Operator's Pro-Tip</h5>
                    <p className="text-sm italic text-slate-400">"{plan.operatorAdvice}"</p>
                  </div>

                  <div className="flex flex-col space-y-3">
                    <a 
                      href={CALENDLY_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-lg transition-all btn-book-glow uppercase tracking-widest text-sm text-center"
                    >
                      Book Now
                    </a>
                    <a 
                      href={CALENDLY_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 border border-slate-800 text-slate-500 text-xs font-bold rounded-lg hover:bg-slate-800 transition-colors uppercase tracking-widest text-center"
                    >
                      Confirm Schedule
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GeminiConsultant;
