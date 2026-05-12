import { Incident } from '@/types';
import { ChevronRight, Clock } from 'lucide-react';
import Link from 'next/link';

export default function IncidentCard({ incident }: { incident: Incident }) {
  const severityColors = {
    critical: 'bg-red-500/10 text-red-500 border-red-500/20',
    high: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
    medium: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    low: 'bg-slate-500/10 text-slate-400 border-slate-500/20',
  };

  return (
    <Link href={`/incident/${incident.id}`} className="block group">
      <div className="bg-slate-900/40 border border-slate-800 hover:border-slate-600 transition-all p-5 rounded-xl flex items-center justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
             <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${severityColors[incident.severity]}`}>
               {incident.severity}
             </span>
             <h3 className="font-medium text-slate-100 group-hover:text-white transition-colors">{incident.title}</h3>
          </div>
          <div className="flex gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {new Date(incident.createdAt).toLocaleTimeString()}</span>
            <span>Systems: {incident.affectedSystems.join(', ')}</span>
          </div>
        </div>
        <ChevronRight className="text-slate-600 group-hover:text-slate-300" />
      </div>
    </Link>
  );
}