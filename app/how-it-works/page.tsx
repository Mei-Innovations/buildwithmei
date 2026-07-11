import type { Metadata } from 'next';
import { Radio, Link2, Zap, TrendingUp } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { EcosystemDiagram } from '@/components/EcosystemDiagram';
import { WorkflowBlueprint } from '@/components/WorkflowBlueprint';
import { OperatingModel } from '@/components/OperatingModel';
import { CTA, Footer } from '@/components/Footer';

const stages = [
  { icon: Radio, title: 'Discover', desc: 'We map your current operations — the tools, data, and manual work already in play.' },
  { icon: Link2, title: 'Connect', desc: 'Disconnected systems — portals, CRM, ecommerce, reporting — are brought into one operational layer.' },
  { icon: Zap, title: 'Automate', desc: 'Repetitive workflows are handed to automation and AI, freeing your team for judgment work.' },
  { icon: TrendingUp, title: 'Improve', desc: 'The system is monitored, refined, and scaled as the business grows.' },
];

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
          <div className="text-sm font-mono tracking-widest text-[#98A3B3] uppercase mb-4">Our Process</div>
          <h1 className="text-5xl md:text-6xl font-display font-medium text-white tracking-tight text-balance mb-5">
            We build it right<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#6DB898] via-[#4D8B72] to-[#2A4F41]">the first time.</span>
          </h1>
          <p className="text-xl text-[#B8C2CE] font-light max-w-2xl leading-relaxed">Every project starts with understanding — not assumptions. We map your operations before we write a single line of code.</p>
        </div>
      </div>

      {/* From disconnected operations to intelligent systems — moved from homepage hero */}
      <section className="py-24 relative bg-[#0A0D1A] z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14 max-w-2xl">
            <div className="text-sm font-mono tracking-widest text-brand-emerald uppercase mb-4">Execution, Not Theory</div>
            <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-5 tracking-tight text-balance">
              From disconnected operations<br/>to intelligent systems.
            </h2>
            <p className="text-lg text-[#B8C2CE] font-light leading-relaxed">
              This is what actually happens behind the scenes — the portals, data, and reporting tools your business already runs on, brought into one operational layer.
            </p>
          </div>

          <div className="mb-16">
            <EcosystemDiagram />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stages.map((s, i) => (
              <div key={s.title} className="p-6 rounded-xl bg-[#12182B] border border-white/5">
                <div className="w-9 h-9 rounded-lg bg-brand-emerald/10 border border-brand-emerald/20 flex items-center justify-center mb-4">
                  <s.icon size={17} className="text-brand-emerald" strokeWidth={1.5} />
                </div>
                <div className="text-xs font-mono text-[#98A3B3] uppercase tracking-widest mb-2">{String(i + 1).padStart(2, '0')} — {s.title}</div>
                <p className="text-sm text-[#B0BAC7] font-light leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WorkflowBlueprint />
      <OperatingModel />
      <CTA />
      <Footer />
    </main>
  );
}
