'use client';

import { motion } from 'motion/react';
import { Hotel, HeartPulse, Building2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

/**
 * Industry transformation stories — replaces the duplicate process animation
 * on the homepage with concrete industry → intelligence → outcome storytelling.
 */

const stories = [
  {
    icon: Hotel, industry: 'Hospitality Intelligence', tint: 'from-[#4D8B72]/15',
    img: 'https://images.unsplash.com/photo-1543325042-c67825847491?auto=format&fit=crop&w=800&q=70', imgAlt: 'Elegant hotel reception with warm wooden interior',
    steps: ['Guest request', 'AI workflow', 'Better experience'],
    desc: 'A guest messages at midnight. The AI concierge answers, books, and updates operations — the morning team just sees a happy guest.',
    href: '/who-we-serve#hospitality',
  },
  {
    icon: HeartPulse, industry: 'Healthcare Intelligence', tint: 'from-[#4D8B72]/10',
    img: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=70', imgAlt: 'Modern dental clinic treatment room',
    steps: ['Patient inquiry', 'AI automation', 'Appointment'],
    desc: 'A patient calls after hours. AI reception answers, qualifies, and books — the calendar fills while the clinic sleeps.',
    href: '/who-we-serve#healthcare',
  },
  {
    icon: Building2, industry: 'Real Estate Intelligence', tint: 'from-[#4D8B72]/10',
    img: 'https://images.unsplash.com/photo-1554793000-245d3a3c2a51?auto=format&fit=crop&w=800&q=70', imgAlt: 'Modern architecture at dusk with warm lighting',
    steps: ['Lead', 'Intelligence', 'Sales workflow'],
    desc: 'A lead lands from a listing. The Engine qualifies, routes, and follows up — your agents step in exactly when it matters.',
    href: '/who-we-serve#real-estate',
  },
];

export function TransformationStories() {
  return (
    <section id="transformations" className="py-28 relative bg-[#0B1020] z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 max-w-3xl">
          <div className="text-sm font-mono tracking-widest text-[#98A3B3] uppercase mb-4">How Intelligence Works For You</div>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-5 tracking-tight text-balance">
            Real businesses.<br/>Intelligent outcomes.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {stories.map((s, i) => (
            <motion.div key={s.industry} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <Link href={s.href}
                className="group relative flex flex-col p-8 rounded-xl bg-[#12182B] border border-white/5 hover:border-brand-emerald/25 transition-all duration-400 overflow-hidden h-full">
                {/* environment photography + tint + watermark */}
                <div className="absolute inset-0 pointer-events-none">
                  <img src={s.img} alt="" aria-hidden loading="lazy"
                    className="w-full h-full object-cover opacity-[0.30] group-hover:opacity-40 transition-opacity duration-700"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12182B] via-[#12182B]/35 to-[#12182B]/15" />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-b ${s.tint} to-transparent opacity-60 pointer-events-none`} />
                <s.icon className="absolute -right-6 -top-6 w-32 h-32 text-brand-emerald/[0.06] group-hover:text-brand-emerald/10 transition-colors duration-700 pointer-events-none" strokeWidth={1} />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-10 h-10 rounded-lg bg-[#0B1020] border border-white/8 flex items-center justify-center mb-6 text-brand-emerald">
                    <s.icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-medium text-white tracking-tight mb-4">{s.industry}</h3>
                  <div className="flex items-center flex-wrap gap-2 mb-5">
                    {s.steps.map((st, j) => (
                      <span key={st} className="flex items-center gap-2">
                        <span className={`text-[11px] font-mono tracking-wide px-2.5 py-1 rounded-full border ${j === s.steps.length - 1 ? 'text-brand-emerald border-brand-emerald/30 bg-brand-emerald/10' : 'text-[#B8C1CD] border-white/10 bg-[#0B1020]'}`}>{st}</span>
                        {j < s.steps.length - 1 && <ArrowRight size={11} className="text-brand-emerald/60" />}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-[#B8C2CE] font-light leading-relaxed mb-6">{s.desc}</p>
                  <span className="mt-auto inline-flex items-center gap-2 text-sm text-brand-emerald group-hover:text-white transition-colors font-medium">
                    Explore this ecosystem <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
