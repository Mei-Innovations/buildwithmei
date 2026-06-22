import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { WorkflowBlueprint } from '@/components/WorkflowBlueprint';
import { OperatingModel } from '@/components/OperatingModel';
import { CTA, Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'How It Works — Our Process & Methodology',
  description: 'We start by understanding your business, then build exactly what eliminates your biggest operational bottleneck. No templates. No generic SaaS. Just custom systems that work.',
  alternates: { canonical: 'https://buildwithmei.com/how-it-works' },
  openGraph: {
    title: 'How MEI Works | Process & Methodology',
    description: 'Operations audit, custom build, automation integration, launch and support. A proven process refined since 2014.',
    url: 'https://buildwithmei.com/how-it-works',
  },
};

export default function HowItWorksPage() {
  return (
    <main className="bg-[#0B1020] text-white min-h-screen">
      <Navbar />
      <div className="pt-32 pb-0">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="text-sm font-mono tracking-widest text-[#555] uppercase mb-4">Our Process</div>
          <h1 className="text-5xl md:text-6xl font-display font-medium text-white tracking-tight text-balance mb-5">
            We build it right<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#6DB898] via-[#4D8B72] to-[#2A4F41]">the first time.</span>
          </h1>
          <p className="text-xl text-[#666] font-light max-w-2xl leading-relaxed">Every project starts with understanding — not assumptions. We map your operations before we write a single line of code.</p>
        </div>
      </div>
      <WorkflowBlueprint />
      <OperatingModel />
      <CTA />
      <Footer />
    </main>
  );
}
