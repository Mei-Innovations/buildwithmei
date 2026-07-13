'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { SITE } from '@/lib/site';

/**
 * Global market positioning. Markets = focus areas and opportunities.
 * No physical office claims.
 */

export const markets = [
  {
    id: 'us',
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=70',
    imgAlt: 'US business team in a strategy meeting', flag: 'us', name: 'United States',
    focus: ['AI adoption', 'Healthcare technology', 'Real estate technology', 'Professional services'],
    note: 'The fastest-moving AI adoption market — where practices, brokerages, and service firms modernize first.',
    accent: '#1FB5C9',
  },
  {
    id: 'uk',
    img: 'https://images.unsplash.com/photo-1604352704611-cce8fe2a4e0d?auto=format&fit=crop&w=900&q=70',
    imgAlt: 'City of London financial district at dusk', flag: 'gb', name: 'United Kingdom',
    focus: ['Private healthcare', 'Dental', 'Aesthetic practices', 'Professional services'],
    note: 'Private healthcare and aesthetic practices where patient experience is the product.',
    accent: '#D4A574',
  },
  {
    id: 'eu',
    img: 'https://images.unsplash.com/photo-1543325042-c67825847491?auto=format&fit=crop&w=900&q=70',
    imgAlt: 'Elegant European hotel reception', flag: 'eu', name: 'Europe',
    focus: ['Hospitality', 'Tourism', 'Premium businesses', 'Digital transformation'],
    note: 'Hospitality and premium business transformation — grounded in hands-on Swiss hospitality experience.',
    accent: '#E8745B',
  },
  {
    id: 'uae',
    img: 'https://images.unsplash.com/photo-1651467606797-e1c660cf3fda?auto=format&fit=crop&w=900&q=70',
    imgAlt: 'Dubai skyline with iconic architecture', flag: 'ae', name: 'United Arab Emirates',
    focus: ['Real estate', 'Smart infrastructure', 'Luxury ecosystems', 'Hospitality'],
    note: 'Smart development at scale — where intelligent infrastructure is a mandate, not a differentiator.',
    accent: '#D4A574',
  },
  {
    id: 'ca',
    img: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=900&q=70',
    imgAlt: 'Professional services team in a modern office', flag: 'ca', name: 'Canada',
    focus: ['Professional services', 'Mortgage ecosystems', 'Business automation'],
    note: 'Deep mortgage-operations ecosystem knowledge, applied to professional service firms.',
    accent: '#4D8B72',
  },
  {
    id: 'sa',
    img: 'https://images.unsplash.com/photo-1714330629244-6e47157e210a?auto=format&fit=crop&w=900&q=70',
    imgAlt: 'Solar and wind energy infrastructure at sunset', flag: 'sa', name: 'Saudi Arabia',
    focus: ['Vision 2030', 'Smart transformation', 'Future opportunity'],
    note: 'Vision 2030 smart transformation programs — an emerging opportunity aligned with the Engine approach.',
    accent: '#1FB5C9',
  },
];

const marketTypes = [
  { name: 'Mature Markets', regions: 'US · Canada · Europe',
    desc: 'Helping established businesses modernize operations, automate workflows and integrate AI.', accent: '#4D8B72' },
  { name: 'Growth Markets', regions: 'Middle East · Asia',
    desc: 'Building scalable digital foundations for rapidly expanding businesses.', accent: '#1FB5C9' },
  { name: 'Premium Experience Markets', regions: 'Europe · incl. Switzerland',
    desc: 'Creating intelligent ecosystems for hospitality, healthcare, luxury and service industries.', accent: '#D4A574' },
];

export function Markets() {
  return (
    <section id="markets" className="py-24 relative bg-[#0B1020] z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* WHY before WHERE */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <h2 className="text-2xl md:text-3xl font-display font-medium text-white tracking-tight mb-8">
            Different markets. Different challenges. <span className="text-brand-emerald">One intelligent approach.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {marketTypes.map((t, i) => (
              <div key={t.name} className="p-6 rounded-xl bg-[#12182B] border border-white/5" style={{ borderTop: `2px solid ${t.accent}45` }}>
                <div className="text-[10px] font-mono tracking-widest uppercase mb-2" style={{ color: t.accent }}>{t.regions}</div>
                <div className="text-base font-medium text-white mb-2">{t.name}</div>
                <p className="text-sm text-[#B8C2CE] font-light leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {markets.map((m, i) => (
            <motion.div key={m.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              style={{ ['--accent' as string]: m.accent }}
              className="group rounded-xl bg-[#12182B] border border-white/5 hover:border-[var(--accent)]/30 transition-all duration-400 flex flex-col overflow-hidden">
              <div className="relative h-36 overflow-hidden">
                <img src={m.img} alt={m.imgAlt} loading="lazy"
                  className="w-full h-full object-cover opacity-95 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12182B] via-[#12182B]/12 to-transparent pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: m.accent }} />
                <span className={`fi fi-${m.flag} absolute bottom-4 left-6 rounded-[4px] shadow-[0_2px_10px_rgba(0,0,0,0.5)] md:hidden`}
                  style={{ width: '44px', height: '33px', backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} aria-hidden />
              </div>
              <div className="p-8 pt-5 flex flex-col flex-1">
              <h3 className="text-lg font-medium text-white tracking-tight mb-3">{m.name}</h3>
              <p className="text-sm text-[#B8C2CE] font-light leading-relaxed mb-6">{m.note}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {m.focus.map(f => (
                  <span key={f} className="text-xs text-[#C0C9D3] px-3 py-1.5 rounded-full bg-[#0B1020] border border-white/8">{f}</span>
                ))}
              </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="mt-14 text-center">
          <p className="text-[#B8C2CE] text-base font-light mb-6">Different markets. Different industries. <span className="text-brand-emerald">One MEI Intelligence Engine.</span></p>
          <a href={SITE.calendly} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-brand-emerald text-white font-semibold hover:bg-[#3d7260] transition-all duration-300 shadow-[0_0_30px_rgba(77,139,114,0.25)]">
            Book Strategy Session <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/** Compact homepage preview — horizontal scroll on mobile, grid on desktop. */
export function MarketsPreview() {
  return (
    <section id="markets-preview" className="py-28 relative bg-[#0A0D1A] z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 max-w-3xl">
          <div className="text-sm font-mono tracking-widest text-[#98A3B3] uppercase mb-4">Global Markets</div>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-5 tracking-tight text-balance">
            Different markets.<br/>One Intelligence Engine.
          </h2>
        </motion.div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 pb-4 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:overflow-visible md:pb-0 scrollbar-none">
          {markets.map((m, i) => (
            <motion.div key={m.id} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
              className="snap-start shrink-0 w-[240px] md:w-auto">
              <Link href={`/markets`}
                className="group flex items-center gap-4 p-5 rounded-xl bg-[#12182B] border border-white/5 hover:border-brand-emerald/25 transition-all duration-300 h-full">
                <span className={`fi fi-${m.flag} rounded-[3px] shrink-0`} style={{ width: '26px', height: '20px' }} aria-hidden />
                <div className="min-w-0">
                  <div className="text-sm font-medium text-white tracking-tight">{m.name}</div>
                  <div className="text-[10px] text-[#98A3B3] font-mono tracking-wider uppercase truncate">{m.focus[0]} · {m.focus[1] ?? ''}</div>
                </div>
                <ArrowRight size={14} className="ml-auto text-brand-emerald opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-10">
          <Link href="/markets" className="inline-flex items-center gap-2 text-sm text-brand-emerald hover:text-white transition-colors font-medium">
            Explore MEI&apos;s focus markets <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
