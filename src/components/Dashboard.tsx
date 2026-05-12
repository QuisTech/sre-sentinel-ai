import React, { useState, useEffect } from 'react';
import { Activity, AlertTriangle, ShieldCheck, Terminal, Server, Cpu, Zap, Search, Bell } from 'lucide-react';
import IncidentCard from './IncidentCard';

export default function Dashboard() {
  const [logs, setLogs] = useState([
    { time: '14:30:05', agent: 'Triage', msg: 'Analyzing high error rate in Checkout-API...', type: 'info' },
    { time: '14:30:12', agent: 'RCA', msg: 'Correlating logs with recent commit #420f1...', type: 'success' },
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      const agents = ['Triage', 'RCA', 'Safety', 'Infra'];
      const msgs = [
        'Detected 5xx spike in us-east-1 pod-78.',
        'Scaling replicas to handle unexpected traffic.',
        'Analyzing latency between Redis and Gateway.',
        'Applying firewall rules to mitigate burst traffic.',
        'Verifying health checks for secondary ingress.'
      ];
      const newLog = {
        time: new Date().toLocaleTimeString(),
        agent: agents[Math.floor(Math.random() * agents.length)],
        msg: msgs[Math.floor(Math.random() * msgs.length)],
        type: Math.random() > 0.8 ? 'warning' : 'info'
      };
      setLogs(prev => [...prev.slice(-10), newLog]);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-full bg-black text-slate-300 font-['Poppins']">
      {/* HUD Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8 bg-emerald-950/10 p-6 rounded-2xl border border-emerald-900/20 backdrop-blur-3xl">
        <div>
          <div className="flex items-center gap-2 mb-1">
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
             <h1 className="text-2xl font-black tracking-tight text-white uppercase">Operations Command</h1>
          </div>
          <p className="text-slate-500 text-xs font-mono uppercase tracking-widest">Real-Time Autonomous SRE Intelligence</p>
        </div>
        
        <div className="flex items-center gap-4 w-full lg:w-auto">
          <div className="relative flex-1 lg:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600" size={14} />
            <input className="w-full bg-black/40 border border-emerald-900/30 rounded-lg py-2 pl-10 pr-4 text-xs text-slate-300 focus:outline-none focus:border-emerald-500/50" placeholder="Search Telemetry..." />
          </div>
          <button className="relative p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20 text-emerald-400">
            <Bell size={18} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full animate-ping" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Main Incident Feed */}
        <div className="col-span-12 xl:col-span-8 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 text-white">
              <AlertTriangle className="text-red-500 w-4 h-4" /> 
              Mission Critical Alerts
            </h2>
            <span className="text-[10px] text-slate-500 font-mono">Last Update: JUST NOW</span>
          </div>
          
          <div className="grid gap-4">
             <IncidentCard incident={{
               id: '1', 
               title: 'Memory Leak: Database Proxy Cluster', 
               severity: 'critical', 
               status: 'investigating', 
               affectedSystems: ['Proxy-01', 'Auth-Svc'], 
               createdAt: new Date().toISOString()
             }} />
             <IncidentCard incident={{
               id: '2', 
               title: 'Inbound Gateway Latency (P99 Spike)', 
               severity: 'high', 
               status: 'active', 
               affectedSystems: ['Nginx-Ingress'], 
               createdAt: new Date(Date.now() - 1200000).toISOString()
             }} />
          </div>

          <div className="p-8 border-2 border-dashed border-emerald-900/20 rounded-2xl flex flex-col items-center justify-center text-center opacity-40">
             <Server className="w-12 h-12 text-emerald-900 mb-4" />
             <p className="text-sm font-medium">No further critical alerts detected in the last 6 hours.</p>
          </div>
        </div>
        
        {/* Side HUD */}
        <div className="col-span-12 xl:col-span-4 space-y-6">
          {/* Sentinel Agent Logs */}
          <section className="bg-black/40 border border-emerald-900/20 rounded-2xl overflow-hidden flex flex-col h-[400px]">
            <div className="p-4 border-b border-emerald-900/20 flex justify-between items-center bg-emerald-950/5">
              <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-2">
                <Terminal className="w-4 h-4" /> 
                Sentinel Intelligence
              </h3>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-3 font-mono text-[10px]">
              {logs.map((log, i) => (
                <div key={i} className="flex gap-3 group">
                  <span className="text-emerald-900/60 tabular-nums">[{log.time}]</span>
                  <div>
                    <span className={`font-bold mr-2 ${
                      log.agent === 'Triage' ? 'text-amber-500' : 
                      log.agent === 'RCA' ? 'text-emerald-400' : 'text-blue-400'
                    }`}>{log.agent}:</span>
                    <span className="text-slate-400 group-hover:text-slate-200 transition-colors">{log.msg}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-3 bg-emerald-950/5 border-t border-emerald-900/20 text-[9px] font-mono text-emerald-900 flex justify-between">
               <span>GEMINI_V2_CORE</span>
               <span>RT_TELEMETRY: ACTIVE</span>
            </div>
          </section>

          {/* Infrastructure Health */}
          <section className="bg-black/40 border border-emerald-900/20 rounded-2xl p-5 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white flex items-center gap-2">
              <Cpu className="w-4 h-4 text-blue-400" /> 
              Cluster Health Matrix
            </h3>
            <div className="space-y-4">
              <HealthBar label="Auth-Service" status="Operational" value={100} />
              <HealthBar label="Payment-Ingress" status="Degraded" value={65} color="bg-amber-500" />
              <HealthBar label="Search-Nodes" status="Operational" value={98} />
              <HealthBar label="Database-Cluster" status="Optimizing" value={82} color="bg-blue-500" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

const HealthBar = ({ label, status, value, color = 'bg-emerald-500' }: any) => (
  <div className="space-y-1.5">
    <div className="flex justify-between items-center text-[10px] font-bold">
      <span className="text-slate-200">{label}</span>
      <span className={status === 'Degraded' ? 'text-amber-400' : 'text-emerald-400 opacity-60'}>{status}</span>
    </div>
    <div className="h-1.5 w-full bg-emerald-900/20 rounded-full overflow-hidden">
      <div 
        className={`h-full rounded-full transition-all duration-1000 ${color}`} 
        style={{ width: `${value}%` }} 
      />
    </div>
  </div>
);