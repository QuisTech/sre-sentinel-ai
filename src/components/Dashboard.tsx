import { Activity, AlertTriangle, ShieldCheck } from 'lucide-react';
import IncidentCard from './IncidentCard';

const mockIncidents = [
  { id: '1', title: 'High Error Rate in Checkout', severity: 'critical', status: 'investigating', affectedSystems: ['Checkout-API'], createdAt: '2023-10-27T10:00:00Z' },
  { id: '2', title: 'Latency Spike: US-East-1', severity: 'high', status: 'active', affectedSystems: ['Gateway', 'Redis'], createdAt: '2023-10-27T11:20:00Z' }
];

export default function Dashboard() {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 lg:col-span-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <AlertTriangle className="text-amber-500" /> Active Incidents
        </h2>
        <div className="space-y-4">
          {mockIncidents.map(inc => (
            <IncidentCard key={inc.id} incident={inc as any} />
          ))}
        </div>
      </div>
      
      <div className="col-span-12 lg:col-span-4 space-y-6">
        <section className="bg-slate-900 border border-slate-800 rounded-xl p-4">
          <h3 className="font-medium mb-3 flex items-center gap-2 text-slate-300">
            <Activity className="w-4 h-4" /> Agent Activity Log
          </h3>
          <div className="space-y-3 text-xs font-mono">
            <div className="text-emerald-400">[12:01:45] TriageAgent: Identified severity 'high' for pod-32 restart loop.</div>
            <div className="text-blue-400">[12:02:10] CorrelationAgent: Querying GitLab for recent commits...</div>
            <div className="text-purple-400">[12:02:15] RcaAgent (Gemini): Analyzing logs vs Runbook #42...</div>
          </div>
        </section>

        <section className="bg-slate-900 border border-slate-800 rounded-xl p-4">
          <h3 className="font-medium mb-3 flex items-center gap-2 text-slate-300">
            <ShieldCheck className="w-4 h-4" /> System Health
          </h3>
          <div className="space-y-2">
            {['Auth-Service', 'Payment-Worker', 'Search-Index'].map(svc => (
              <div key={svc} className="flex justify-between items-center text-sm">
                <span>{svc}</span>
                <span className="h-2 w-12 bg-emerald-500/20 rounded-full overflow-hidden">
                  <span className="block h-full w-full bg-emerald-500"></span>
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}