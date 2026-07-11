import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { IndustryEcosystems } from '@/components/IndustryEcosystems';
import { CaseStudies } from '@/components/CaseStudies';
import { CTA, Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Industry Ecosystems — AI & Automation for Your Industry',
  description: 'One Intelligence Engine adapted across specialized industries — hospitality, healthcare, commerce, real estate, industrial, agriculture, mobility, education, and professional services.',
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
          <div className="text-sm font-mono tracking-widest text-[#98A3B3] uppercase mb-4">Industry Intelligence Ecosystems</div>
          <h1 className="text-5xl md:text-6xl font-display font-medium text-white tracking-tight text-balance mb-5">
            One Intelligence Engine.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#6DB898] via-[#4D8B72] to-[#2A4F41]">Adapted to your industry.</span>
          </h1>
          <p className="text-xl text-[#B8C2CE] font-light max-w-2xl leading-relaxed">Day-one startup or decade-old operation — we shape the same intelligent approach around the operational patterns, customers, and workflows of your world.</p>
        </div>
      </div>
      <IndustryEcosystems />
      <CaseStudies />
      <CTA />
      <Footer />
    </main>
  );
}
