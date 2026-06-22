import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Industries } from '@/components/Industries';
import { CaseStudies } from '@/components/CaseStudies';
import { CTA, Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Who We Serve — Startups, SMEs & Growing Businesses',
  description: 'MEI works with businesses at every stage — from new ventures needing their first website to established companies ready to automate. Worldwide clients, custom solutions.',
  alternates: { canonical: 'https://buildwithmei.com/who-we-serve' },
  openGraph: {
    title: 'Who MEI Serves | Startups to Enterprise',
    description: 'Whether you\'re launching your first product or scaling an established operation — MEI has built the right solution for businesses like yours.',
    url: 'https://buildwithmei.com/who-we-serve',
  },
};

export default function WhoWeServePage() {
  return (
    <main className="bg-[#0B1020] text-white min-h-screen">
      <Navbar />
      <div className="pt-32 pb-0">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="text-sm font-mono tracking-widest text-[#555] uppercase mb-4">Who We Work With</div>
          <h1 className="text-5xl md:text-6xl font-display font-medium text-white tracking-tight text-balance mb-5">
            Day one startup or<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#6DB898] via-[#4D8B72] to-[#2A4F41]">decade-old operation.</span>
          </h1>
          <p className="text-xl text-[#666] font-light max-w-2xl leading-relaxed">We work with businesses at every stage worldwide — because the right technology looks different depending on where you are in your journey.</p>
        </div>
      </div>
      <Industries />
      <CaseStudies />
      <CTA />
      <Footer />
    </main>
  );
}
