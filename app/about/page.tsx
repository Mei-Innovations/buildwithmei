import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { WhyMei } from '@/components/WhyMei';
import { OperatingModel } from '@/components/OperatingModel';
import { CTA, Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About MEI Innovations — Est. 2014',
  description: 'MEI Innovations has been building custom software, automation systems, and digital solutions for businesses worldwide since 2014. Learn about who we are and how we work.',
  alternates: { canonical: 'https://buildwithmei.com/about' },
  openGraph: {
    title: 'About MEI Innovations | Est. 2014',
    description: 'A decade of helping businesses replace manual work with systems that scale. Learn about MEI\'s approach, history, and what makes us different.',
    url: 'https://buildwithmei.com/about',
  },
};

export default function AboutPage() {
  return (
    <main className="bg-[#0B1020] text-white min-h-screen">
      <Navbar />
      <div className="pt-32 pb-0">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="text-sm font-mono tracking-widest text-[#555] uppercase mb-4">About MEI</div>
          <h1 className="text-5xl md:text-6xl font-display font-medium text-white tracking-tight text-balance mb-5">
            Built on a decade<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#6DB898] via-[#4D8B72] to-[#2A4F41]">of solving real problems.</span>
          </h1>
          <p className="text-xl text-[#666] font-light max-w-2xl leading-relaxed">Since 2014, MEI has helped businesses around the world replace manual work with technology that actually runs their operations.</p>
        </div>
      </div>
      <WhyMei />
      <OperatingModel />
      <CTA />
      <Footer />
    </main>
  );
}
