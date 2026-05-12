import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-slate-950 text-slate-50`}>
        <nav className="border-b border-slate-800 p-4 flex justify-between items-center bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-mono">S</div>
            SRE Sentinel AI
          </div>
          <div className="flex gap-4 text-sm text-slate-400">
            <span>System Health: <span className="text-emerald-400">Stable</span></span>
            <span>Active Alerts: <span className="text-amber-400">3</span></span>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}