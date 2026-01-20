
import React from 'react';

const BackgroundSystem: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Layers */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 radar-grid text-slate-200 dark:text-slate-800/30 opacity-40"></div>
        
        {/* Animated Glow Drifts */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-drift-1 animate-slow-drift blur-[80px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-drift-2 animate-slow-drift blur-[80px]" style={{ animationDelay: '-5s' }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundSystem;
