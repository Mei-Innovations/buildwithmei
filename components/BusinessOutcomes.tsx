'use client';

import { motion } from 'motion/react';
import { Clock, Sparkles, Network, TrendingUp } from 'lucide-react';

/** Business value before technology — executives understand outcomes first. */
const outcomes = [
  { icon: Clock, title: 'Save Time',
    desc: 'Automate repetitive workflows and free teams for meaningful decisions.',
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=70',
    alt: 'Business team collaborating in a modern office' },
  { icon: Sparkles, title: 'Improve Customer Experience',
    desc: 'Create faster, smarter journeys across every customer touchpoint.',
    img: 'https://images.unsplash.com/photo-1543325042-c67825847491?auto=format&fit=crop&w=800&q=70',
    alt: 'Elegant customer reception environment' },
  { icon: Network, title: 'Connect Operations',
    desc: 'Bring tools, teams, data and workflows into one ecosystem.',
    img: 'https://images.unsplash.com/photo-1762846700143-4f3a47400986?auto=format&fit=crop&w=800&q=70',
    alt: 'Operational data displayed on connected screens' },
  { icon: TrendingUp, title: 'Scale Smarter',
    desc: 'Build technology foundations designed to grow with your business.',
    img: 'https://images.unsplash.com/photo-1554793000-245d3a3c2a51?auto=format&fit=crop&w=800&q=70',
    alt: 'Modern architecture representing business growth' },
];

export function BusinessOutcomes() {
  return (
    <section id="outcomes" className="py-28 relative bg-[#0B1020] z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 max-w-3xl">
          <div className="text-sm font-mono tracking-widest text-[#98A3B3] uppercase mb-4">Business Outcomes</div>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-5 tracking-tight text-balance">
            What intelligence creates<br/>for your business.
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {outcomes.map((o, i) => (
            <motion.div key={o.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.45, delay: (i % 4) * 0.07 }}
              className="group relative flex flex-col rounded-xl bg-[#12182B] border border-white/5 hover:border-brand-emerald/25 transition-all duration-400 overflow-hidden">
              <div className="relative h-32 overflow-hidden">
                <img src={o.img} alt={o.alt} loading="lazy"
                  className="w-full h-full object-cover opacity-95 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12182B] via-[#12182B]/15 to-transparent pointer-events-none" />
              </div>
              <div className="p-6 pt-4 flex flex-col flex-1">
                <div className="w-9 h-9 rounded-lg bg-brand-emerald/10 border border-brand-emerald/25 flex items-center justify-center mb-4 -mt-9 relative z-10 bg-[#12182B]">
                  <o.icon size={16} className="text-brand-emerald" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-medium text-white tracking-tight mb-2">{o.title}</h3>
                <p className="text-sm text-[#B8C2CE] font-light leading-relaxed">{o.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
