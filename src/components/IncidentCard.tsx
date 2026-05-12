import React from 'react';
import { Incident } from '@/types/index';
import { ChevronRight, Clock, ShieldAlert, Activity, Globe } from 'lucide-react';
import Link from 'next/link';

export default function IncidentCard({ incident }: { incident: Incident }) {
  const severityColors = {
    critical: 'bg-red-500/10 text-red-500 border-red-500/20',
    high: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
    medium: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    low: 'bg-slate-500/10 text-slate-400 border-slate-500/20',
  };

  return (
    <div className="block group cursor-pointer">
      <div className="bg-slate-900/40 border border-emerald-900/10 hover:border-emerald-500/40 transition-all p-6 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 backdrop-blur-sm relative overflow-hidden">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        
        <div className="flex-1 space-y-3 relative z-10">
          <div className="flex flex-wrap items-center gap-3">
             <span className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase border tracking-widest ${severityColors[incident.severity]}`}>
               {incident.severity}
             </span>
             <h3 className="font-bold text-slate-100 group-hover:text-emerald-400 transition-colors tracking-tight text-lg">
               {incident.title}
             </h3>
          </div>
          
          <div className="flex flex-wrap gap-6 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-emerald-900" /> {new Date(incident.createdAt).toLocaleTimeString()}</span>
            <span className="flex items-center gap-1.5"><Activity className="w-3.5 h-3.5 text-emerald-900" /> Systems: {incident.affectedSystems.join(', ')}</span>
            <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-emerald-900" /> Global Region: US-EAST-1</span>
          </div>
        </div>

        <div className="flex items-center gap-4 relative z-10 w-full md:w-auto justify-between md:justify-end">
          <div className="flex -space-x-2">
             {[1,2].map(i => (
               <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-emerald-900/40 flex items-center justify-center text-[8px] font-bold text-emerald-400">
                 A{i}
               </div>
             ))}
             <div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-[8px] font-bold text-slate-500">
               +1
             </div>
          </div>
          <div className="p-2 bg-emerald-500/5 rounded-full group-hover:bg-emerald-500/10 transition-all">
            <ChevronRight className="text-slate-700 group-hover:text-emerald-400 w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}