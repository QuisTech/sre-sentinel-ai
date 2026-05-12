import Dashboard from '@/components/Dashboard';

export default function Home() {
  return (
    <div className="p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Operations Command Center</h1>
        <p className="text-slate-400">Real-time incident monitoring and AI-driven resolution.</p>
      </header>
      <Dashboard />
    </div>
  );
}