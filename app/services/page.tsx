import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Services } from '@/components/Services';
import { TechEcosystem } from '@/components/TechEcosystem';
import { WorkflowBlueprint } from '@/components/WorkflowBlueprint';
import { CTA, Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Services — AI, Automation, Web & Software Development',
  description: 'The right technology, at the right stage — MEI builds exactly what your business needs right now, from a first professional website to full AI automation infrastructure. No lock-in. No templates.',
  alternates: { canonical: 'https://buildwithmei.com/services' },
  openGraph: {
    title: 'MEI Services | AI, Automation, Web & Software Development',
    description: 'Custom web development, AI automation, CRM systems, ecommerce, and client portals — built for businesses at every stage of growth.',
    url: 'https://buildwithmei.com/services',
  },
};

export default function ServicesPage() {
  return (
    <main className="bg-[#0B1020] text-white min-h-screen">
      <Navbar />
      <div className="pt-32 pb-0">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="text-sm font-mono tracking-widest text-[#98A3B3] uppercase mb-4">Our Approach</div>
          <h1 className="text-5xl md:text-6xl font-display font-medium text-white tracking-tight text-balance mb-5">
            The right technology.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#6DB898] via-[#4D8B72] to-[#2A4F41]">At the right stage.</span>
          </h1>
          <p className="text-xl text-[#B8C2CE] font-light max-w-2xl leading-relaxed">From your first professional system to a fully automated operation — MEI builds what your business needs right now, not what a template says you need.</p>
        </div>
      </div>
      <Services />
      <WorkflowBlueprint />
      <TechEcosystem />
      <CTA heading={<>Build the systems<br/>your business needs next.</>} />
      <Footer />
    </main>
  );
}
