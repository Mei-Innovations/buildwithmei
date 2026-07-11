import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Markets } from '@/components/Markets';
import { CTA, Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Markets — Global Focus, One Intelligence Engine',
  description: 'MEI serves international clients with focused expertise across the United States, United Kingdom, Europe, UAE, Canada, and Saudi Arabia — different markets, different industries, one Intelligence Engine.',
  alternates: { canonical: 'https://buildwithmei.com/markets' },
  openGraph: {
    title: 'MEI Markets | Global Focus, One Intelligence Engine',
    description: 'Focused market expertise across the US, UK, Europe, UAE, Canada, and Saudi Arabia.',
    url: 'https://buildwithmei.com/markets',
  },
};

export default function MarketsPage() {
  return (
    <main className="bg-[#0B1020] text-white min-h-screen">
      <Navbar />
      <div className="pt-32 pb-0">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="text-sm font-mono tracking-widest text-[#98A3B3] uppercase mb-4">Global Markets</div>
          <h1 className="text-5xl md:text-6xl font-display font-medium text-white tracking-tight text-balance mb-5">
            Different markets.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#6DB898] via-[#4D8B72] to-[#2A4F41]">One Intelligence Engine.</span>
          </h1>
          <p className="text-xl text-[#B8C2CE] font-light max-w-2xl leading-relaxed">Markets represent MEI's expertise, focus, and opportunities — we work remotely with international clients, shaped by deep experience in each region's industries.</p>
        </div>
      </div>
      <Markets />
      <CTA />
      <Footer />
    </main>
  );
}
