import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SRE Sentinel AI',
  description: 'AI-powered SRE Assistant',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}