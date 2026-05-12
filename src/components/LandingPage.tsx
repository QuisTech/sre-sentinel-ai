import React, { useEffect, useRef } from 'react';
import { Shield, Zap, Terminal, Activity, Server, Database, Globe, Play } from 'lucide-react';

export const LandingPage = ({ onLaunch }: { onLaunch: () => void }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const BLOBS = [
      { x: 0.14, y: 0.18, r: 0.28, color: [16, 185, 129], speed: 0.00018, phase: 0 },
      { x: 0.83, y: 0.14, r: 0.22, color: [5, 150, 105], speed: 0.00014, phase: 1.8 },
      { x: 0.50, y: 0.46, r: 0.30, color: [0, 0, 0], speed: 0.00010, phase: 1.2 },
    ];

    let W: number, H: number;
    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, W, H);
      BLOBS.forEach(b => {
        const ox = Math.sin(t * b.speed + b.phase) * 0.07 * W;
        const oy = Math.cos(t * b.speed * 0.7 + b.phase) * 0.07 * H;
        const cx = b.x * W + ox, cy = b.y * H + oy;
        const r = b.r * Math.min(W, H);
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        g.addColorStop(0, `rgba(${b.color.join(',')}, 0.15)`);
        g.addColorStop(1, `rgba(${b.color.join(',')}, 0)`);
        ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fillStyle = g; ctx.fill();
      });
      requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    requestAnimationFrame(draw);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-emerald-50 font-['Poppins'] overflow-hidden">
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded bg-emerald-500/10 border border-emerald-500/20 mb-8">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase text-emerald-400">Google Gemini Live AI Competition</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-white">
            SRE SENTINEL
          </h1>
          
          <p className="text-xl text-emerald-900/60 max-w-2xl mb-10 leading-relaxed font-light">
            Autonomous Incident Response and <span className="text-emerald-400 font-medium font-mono">MTTR Elimination</span> for modern distributed systems.
          </p>

          <div className="flex gap-4">
            <button 
              id="hero-launch-btn"
              onClick={onLaunch}
              className="flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded font-bold transition-all hover:translate-y-[-2px] shadow-2xl shadow-emerald-500/20 uppercase tracking-widest text-sm"
            >
              <Terminal className="w-4 h-4" />
              Enter Command Center
            </button>
          </div>
        </div>
      </section>

      {/* Specialty Agents */}
      <section id="agents-section" className="relative z-10 py-24 px-6 border-y border-emerald-900/20 bg-emerald-950/20 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight">The Sentinel Network</h2>
            <p className="text-emerald-900/40 text-sm mt-2">Specialized Gemini agents working in parallel to maintain 99.9% uptime.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <SpecialistCard 
              id="agent-triage"
              icon={<Zap className="w-5 h-5 text-amber-400" />}
              title="Triage Agent"
              desc="Instant alert prioritization and noise suppression."
            />
            <SpecialistCard 
              id="agent-rca"
              icon={<Activity className="w-5 h-5 text-emerald-400" />}
              title="RCA Agent"
              desc="Deep correlation of logs, traces, and commits."
            />
            <SpecialistCard 
              id="agent-infra"
              icon={<Server className="w-5 h-5 text-blue-400" />}
              title="Infra Agent"
              desc="K8s and Cloud-native resource optimization."
            />
            <SpecialistCard 
              id="agent-safety"
              icon={<Shield className="w-5 h-5 text-red-400" />}
              title="Safety Agent"
              desc="Automated remediation validation and rollbacks."
            />
          </div>
        </div>
      </section>

      <footer className="relative z-10 py-12 px-6 text-center opacity-30 text-xs tracking-widest font-mono">
        SYSTEM_STATUS: OPERATIONAL // DATA_LINK: ENCRYPTED // AI_CORE: GEMINI_LATEST
      </footer>
    </div>
  );
};

const SpecialistCard = ({ id, icon, title, desc }: any) => (
  <div id={id} className="p-6 rounded border border-emerald-900/30 bg-black/40 hover:border-emerald-400/50 transition-all cursor-default group">
    <div className="mb-4">{icon}</div>
    <h3 className="text-sm font-bold text-emerald-200 mb-2 uppercase tracking-wide">{title}</h3>
    <p className="text-xs text-emerald-900/60 leading-relaxed">{desc}</p>
  </div>
);
