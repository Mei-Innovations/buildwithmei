import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Careers } from '@/components/Careers';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Careers at MEI Innovations — Join Our Global Team',
  description: 'Join MEI Innovations — a remote-first technology team building real software for real businesses worldwide. Apply now and send your CV to info@buildwithmei.com.',
  alternates: { canonical: 'https://buildwithmei.com/careers' },
  openGraph: {
    title: 'Careers at MEI Innovations',
    description: 'Remote-first roles in software development, automation, and client solutions. Join a team that ships things that matter.',
    url: 'https://buildwithmei.com/careers',
  },
};

export default function CareersPage() {
  return (
    <main className="bg-[#0B1020] text-white min-h-screen">
      <Navbar />
      <div className="pt-32 pb-0">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="text-sm font-mono tracking-widest text-[#555] uppercase mb-4">Join MEI</div>
          <h1 className="text-5xl md:text-6xl font-display font-medium text-white tracking-tight text-balance mb-5">
            Work that ships.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#6DB898] via-[#4D8B72] to-[#2A4F41]">Teams that care.</span>
          </h1>
          <p className="text-xl text-[#666] font-light max-w-2xl leading-relaxed">We're a global remote team building real software for real businesses. Apply below or send your CV directly to <a href="mailto:info@buildwithmei.com" className="text-brand-emerald hover:text-white transition-colors">info@buildwithmei.com</a>.</p>
        </div>
      </div>
      <Careers />
      <Footer />
    </main>
  );
}
