import React from 'react';
import { Terminal, ShieldAlert, Cpu } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-emerald-900/20 py-12 px-4 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-emerald-500/80">
        <div className="space-y-4">
          <span className="text-xl font-bold text-emerald-400">SRE Sentinel</span>
          <p className="text-sm text-emerald-900 max-w-xs">
            Intelligent system oversight and automated incident resolution for mission-critical infrastructure.
          </p>
        </div>
        
        <div>
          <h4 className="text-emerald-300 font-semibold mb-4 text-sm uppercase tracking-wider">Metrics</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Uptime Logs</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Latency Analysis</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Error Budget</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-emerald-300 font-semibold mb-4 text-sm uppercase tracking-wider">Infrastructure</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-emerald-400 transition-colors">K8s Clusters</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Edge Nodes</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">API Gateways</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-emerald-300 font-semibold mb-4 text-sm uppercase tracking-wider">Status</h4>
          <div className="flex items-center gap-2 text-xs bg-emerald-950/50 p-3 rounded border border-emerald-900/30">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            All Systems Operational
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-emerald-900/10 text-center">
        <p className="text-xs text-emerald-900/60">
          © 2026 SRE Sentinel AI. Powered by Gemini Core Reasoning.
        </p>
      </div>
    </footer>
  );
};
