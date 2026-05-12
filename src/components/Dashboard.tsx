import React from 'react';
import { Activity, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

export const Dashboard = () => {
  return (
    <div className="p-6 space-y-6 bg-slate-950 text-white min-h-screen">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-400 font-mono">SRE Sentinel AI // Dashboard</h1>
        <div className="flex gap-4">
          <span className="flex items-center gap-2 px-3 py-1 bg-green-900/30 text-green-400 border border-green-500/50 rounded-full text-xs uppercase tracking-wider">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> Agent System: Online
          </span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[ 
          { label: 'Active Incidents', value: '3', icon: AlertTriangle, color: 'text-red-400' },
          { label: 'Avg MTTR', value: '14m', icon: Clock, color: 'text-blue-400' },
          { label: 'Health Score', value: '98.2%', icon: Activity, color: 'text-green-400' },
          { label: 'Resolved Today', value: '12', icon: CheckCircle, color: 'text-purple-400' }
        ].map((stat, i) => (
          <div key={i} className="bg-slate-900 border border-slate-800 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-slate-400 text-sm">{stat.label}</span>
              <stat.icon size={18} className={stat.color} />
            </div>
            <div className="text-2xl font-semibold mt-2">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-lg overflow-hidden">
          <div className="p-4 border-b border-slate-800 bg-slate-900/50 flex justify-between">
            <h2 className="font-semibold">Active Incidents</h2>
          </div>
          <div className="divide-y divide-slate-800">
            {[1, 2, 3].map((inc) => (
              <div key={inc} className="p-4 hover:bg-slate-800/50 cursor-pointer transition-colors">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-sm font-mono text-red-400 uppercase">INC-120{inc} // CRITICAL</div>
                    <div className="mt-1 text-slate-200">AuthService latency spike in US-EAST-1</div>
                  </div>
                  <button className="px-3 py-1 bg-blue-600 hover:bg-blue-500 text-xs rounded transition-colors">Investigate</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
          <h2 className="font-semibold mb-4">Agent Activity Log</h2>
          <div className="space-y-4 text-xs font-mono">
             <div className="text-slate-400">[12:45:01] <span className="text-blue-400">TriageAgent:</span> Analysis started for INC-1203</div>
             <div className="text-slate-400">[12:45:05] <span className="text-green-400">CorrelationAgent:</span> Fetched 125 logs from Elastic</div>
             <div className="text-slate-400">[12:45:12] <span className="text-purple-400">RCAAgent:</span> Gemini-1.5-Pro identified Root Cause</div>
          </div>
        </div>
      </div>
    </div>
  );
};