import { BrainCircuit, Lightbulb, History, Terminal } from 'lucide-react';

export default function IncidentDetail({ params }: { params: { id: string } }) {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-start mb-8">
        <div>
          <p className="text-sm text-blue-500 font-mono mb-1">INC-{params.id.toUpperCase()}</p>
          <h1 className="text-3xl font-bold">High Error Rate in Checkout</h1>
        </div>
        <div className="px-4 py-2 bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-lg text-sm font-medium animate-pulse">
          Investigating Root Cause...
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-7 space-y-6">
          <section className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
             <div className="bg-slate-800/50 p-4 border-b border-slate-700 flex items-center gap-2 font-semibold">
               <BrainCircuit className="w-5 h-5 text-purple-400" /> RCA Card (Sentinel AI)
             </div>
             <div className="p-6 space-y-4">
               <p className="text-slate-300 leading-relaxed">
                 Based on correlation between <code className="text-blue-400">Checkout-API</code> logs and GitLab commit history, 
                 we found a potential memory leak introduced in <code className="text-pink-400">v2.1.4-rc</code>.
               </p>
               <div className="bg-black/40 p-4 rounded-lg">
                 <h4 className="text-sm font-semibold mb-2">Top Hypotheses:</h4>
                 <ul className="list-disc list-inside text-sm text-slate-400 space-y-1">
                   <li>Memory leak in checkout-session handler (92% confidence)</li>
                   <li>Redis eviction policy change (12% confidence)</li>
                 </ul>
               </div>
             </div>
          </section>

          <section className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
             <div className="bg-slate-800/50 p-4 border-b border-slate-700 flex items-center gap-2 font-semibold">
               <History className="w-5 h-5 text-blue-400" /> Interactive Timeline
             </div>
             <div className="p-6 space-y-6 relative">
               <div className="absolute left-8 top-10 bottom-10 w-px bg-slate-800"></div>
               {[ 
                 { time: '10:00', text: 'Alert Triggered: HTTP 5xx spikes > 5%', user: 'System' },
                 { time: '10:02', text: 'TriageAgent: Incident prioritized as Critical.', user: 'Agent' },
                 { time: '10:05', text: 'CorrelationAgent: Aggregated 2,500 logs.', user: 'Agent' }
               ].map((item, i) => (
                 <div key={i} className="flex gap-6 relative">
                   <div className="w-4 h-4 rounded-full bg-slate-700 border-2 border-slate-950 z-10"></div>
                   <div>
                     <p className="text-xs text-slate-500 font-mono">{item.time}</p>
                     <p className="text-sm">{item.text}</p>
                   </div>
                 </div>
               ))}
             </div>
          </section>
        </div>

        <div className="col-span-12 lg:col-span-5 space-y-6">
          <section className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
             <div className="bg-slate-800/50 p-4 border-b border-slate-700 flex items-center gap-2 font-semibold">
               <Lightbulb className="w-5 h-5 text-amber-400" /> Suggested Actions
             </div>
             <div className="p-6 space-y-3">
                <button className="w-full text-left p-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors text-sm font-medium flex justify-between">
                  Rollback to v2.1.3 <span>Runbook #12</span>
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors text-sm font-medium">
                  Purge Redis Cache (Checkout Prefixes)
                </button>
             </div>
          </section>

          <section className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
             <div className="bg-slate-800/50 p-4 border-b border-slate-700 flex items-center gap-2 font-semibold">
               <Terminal className="w-5 h-5 text-emerald-400" /> Raw Data Stream
             </div>
             <div className="p-4 bg-black font-mono text-[10px] text-emerald-500 h-64 overflow-y-auto space-y-1">
               <div>[10:04:22] WARN node_js_heap_limit exceeded in pid 44...</div>
               <div>[10:04:23] ERROR connection_reset by peer...</div>
               <div>[10:04:24] DEBUG fetch https://internal-api/v1/user...</div>
               <div>[10:04:25] DEBUG response time 1450ms...</div>
             </div>
          </section>
        </div>
      </div>
    </div>
  );
}