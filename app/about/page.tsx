import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { WhyMei } from '@/components/WhyMei';
import { OperatingModel } from '@/components/OperatingModel';
import { CTA, Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About MEI Innovations — A Digital Journey Since 2014',
  description: "MEI's digital journey started in 2014 through technology ventures — Greenleaf and MyDoc — and evolved into building intelligent ecosystems for international businesses. Learn about who we are and how we work.",
  alternates: { canonical: 'https://buildwithmei.com/about' },
  openGraph: {
    title: 'About MEI Innovations | Digital Journey Since 2014',
    description: 'A decade of helping businesses replace manual work with systems that scale. Learn about MEI\'s approach, history, and what makes us different.',
    url: 'https://buildwithmei.com/about',
  },
};


function Journey() {
  const steps = [
    { year: '2014', title: 'Digital Foundations Begin', desc: 'Started building digital products, platforms and operational systems.' },
    { year: 'Greenleaf', title: 'Commerce Technology Experience', desc: 'Built ecommerce workflows connecting customers, inventory and operations.' },
    { year: 'MyDoc', title: 'Healthcare Technology Experience', desc: 'Explored digital healthcare access, appointment systems and patient journeys.' },
    { year: 'Today', title: 'Modern Ecosystem Intelligence', desc: 'Combining software, AI, automation and operational experience into connected business solutions.' },
  ];
  return (
    <section className="py-24 relative bg-[#0A0D1A] z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14 max-w-3xl">
          <div className="text-sm font-mono tracking-widest text-[#98A3B3] uppercase mb-4">The MEI Journey</div>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-5 tracking-tight text-balance">
            From digital ventures<br/>to intelligent ecosystems.
          </h2>
          <p className="text-lg text-[#B8C2CE] font-light leading-relaxed">
            MEI&rsquo;s journey began in 2014 through hands-on technology ventures. Before building intelligent systems for others, we experienced the same operational challenges businesses face: connecting customers, teams, workflows, and data. Today, that experience shapes how MEI designs intelligent business systems.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((st, i) => (
            <div key={i} className="p-6 rounded-xl bg-[#12182B] border border-white/5">
              <div className="text-xs font-mono text-brand-emerald tracking-widest mb-3 uppercase">{st.year}</div>
              <div className="text-base font-medium text-white mb-2">{st.title}</div>
              <p className="text-sm text-[#B8C2CE] font-light leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className="bg-[#0B1020] text-white min-h-screen">
      <Navbar />
      <div className="pt-32 pb-0">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="text-sm font-mono tracking-widest text-[#98A3B3] uppercase mb-4">About MEI</div>
          <h1 className="text-5xl md:text-6xl font-display font-medium text-white tracking-tight text-balance mb-5">
            A decade of building digital<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#6DB898] via-[#4D8B72] to-[#2A4F41]">solutions for real businesses.</span>
          </h1>
          <p className="text-xl text-[#B8C2CE] font-light max-w-2xl leading-relaxed">MEI's digital journey started in 2014 through technology ventures — and evolved into helping international businesses replace manual work with intelligent, connected systems.</p>
        </div>
      </div>
      <Journey />
      <WhyMei />
      <OperatingModel />
      <CTA />
      <Footer />
    </main>
  );
}
