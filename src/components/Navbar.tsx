import React from 'react';
import { Shield, Zap, Terminal, Activity } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-emerald-900/30">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-emerald-600 rounded-lg">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-white">
            SRE Sentinel AI
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-emerald-400/60">
          <a href="#" className="hover:text-emerald-400 transition-colors">Alerts</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Root Cause</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Nodes</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Logs</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="px-4 py-2 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-500 rounded-md transition-all shadow-lg shadow-emerald-900/20 flex items-center gap-2">
            <Zap className="w-4 h-4" /> Resolve Now
          </button>
        </div>
      </div>
    </nav>
  );
};
