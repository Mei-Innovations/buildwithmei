import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { CaseStudies } from '@/components/CaseStudies';
import { WorkMethod, WorkCapabilities, WorkVentures } from '@/components/WorkMethod';
import { TechEcosystem } from '@/components/TechEcosystem';
import { CTA, Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Work — How MEI Builds Intelligent Ecosystems',
  description: 'Selected MEI transformations: QARM mortgage operations ecosystem, H&A Nature\'s Best digital commerce ecosystem, and representative client outcomes across industries.',
  alternates: { canonical: 'https://buildwithmei.com/work' },
  openGraph: {
    title: 'MEI Work | Ecosystem Transformations',
    description: 'Real outcomes and ecosystem transformations — QARM, H&A Nature\'s Best, and more.',
    url: 'https://buildwithmei.com/work',
  },
};

export default function WorkPage() {
  return (
    <main className="bg-[#0B1020] text-white min-h-screen">
      <Navbar />
      <div className="pt-32 pb-0">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="text-sm font-mono tracking-widest text-[#98A3B3] uppercase mb-4">Our Work</div>
          <h1 className="text-5xl md:text-6xl font-display font-medium text-white tracking-tight text-balance mb-5">
            Ecosystems designed,<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#6DB898] via-[#4D8B72] to-[#2A4F41]">built, and evolved.</span>
          </h1>
          <p className="text-xl text-[#B8C2CE] font-light max-w-2xl leading-relaxed">Every business starts differently. MEI creates connected systems that improve operations — the same method, adapted to each world.</p>
        </div>
      </div>
      <WorkMethod />
      <WorkCapabilities />
      <TechEcosystem />
      <CaseStudies />
      <WorkVentures />
      <CTA heading={<>See what&apos;s possible<br/>with intelligent execution.</>} />
      <Footer />
    </main>
  );
}
