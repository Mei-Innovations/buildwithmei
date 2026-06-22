import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Services } from '@/components/Services';
import { CTA, Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Services — AI, Automation, Web & Software Development',
  description: 'From a simple website to full AI automation infrastructure — MEI builds exactly what your business needs right now. No lock-in. No templates. Real custom software.',
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
          <div className="text-sm font-mono tracking-widest text-[#555] uppercase mb-4">Our Services</div>
          <h1 className="text-5xl md:text-6xl font-display font-medium text-white tracking-tight text-balance mb-5">
            Everything you need.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#6DB898] via-[#4D8B72] to-[#2A4F41]">Nothing you don't.</span>
          </h1>
          <p className="text-xl text-[#666] font-light max-w-2xl leading-relaxed">Whether you need a professional website or a fully automated business operating system — we start where you are and build what you actually need.</p>
        </div>
      </div>
      <Services />
      <CTA />
      <Footer />
    </main>
  );
}
