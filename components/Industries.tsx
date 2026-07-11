'use client';

import { motion } from 'motion/react';
import { ArrowRight, Hotel, HeartPulse, ShoppingBag, Briefcase, Factory } from 'lucide-react';
import Link from 'next/link';

/**
 * Lightweight industry preview — homepage only.
 * Mirrors the real industry ecosystem structure at /who-we-serve
 * (no standalone categories without a corresponding dedicated page).
 */
const previewIndustries = [
  { id: 'hospitality', icon: Hotel, title: 'Hospitality Intelligence', audience: 'Hotels · Restaurants · Tourism' },
  { id: 'healthcare', icon: HeartPulse, title: 'Healthcare Intelligence', audience: 'Clinics · Wellness · Patient Experience' },
  { id: 'commerce', icon: ShoppingBag, title: 'Retail & Commerce Intelligence', audience: 'Ecommerce · Customer Experience · Operations' },
  { id: 'professional', icon: Briefcase, title: 'Professional Services Intelligence', audience: 'Mortgage · Finance · Consultants · Service Businesses' },
  { id: 'industrial', icon: Factory, title: 'Industrial Intelligence', audience: 'Manufacturing · Operations · Process Systems' },
];

export function Industries() {
  return (
    <section id="industries" className="py-32 relative bg-[#0B1020] z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-3xl">
          <div className="text-sm font-mono tracking-widest text-[#98A3B3] uppercase mb-4">Industries</div>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-5 tracking-tight text-balance">
            Built around how each<br/>industry actually operates.
          </h2>
          <p className="text-lg text-[#B8C2CE] font-light leading-relaxed">
            A short preview — full industry pages go deeper into each.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {previewIndustries.map((ind, i) => (
            <motion.div key={ind.id}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.06 }}>
              <Link href={`/who-we-serve#${ind.id}`}
                className="group relative p-6 rounded-xl bg-[#12182B] border border-white/5 hover:border-brand-emerald/25 transition-all duration-400 flex flex-col gap-4 h-full min-h-[150px] justify-end">
                <div className="w-10 h-10 shrink-0 rounded-lg bg-[#0B1020] border border-white/8 flex items-center justify-center text-[#98A3B3] group-hover:text-brand-emerald transition-colors duration-300">
                  <ind.icon size={19} strokeWidth={1.5} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-medium text-white tracking-tight mb-1 flex items-center gap-2">
                    {ind.title}
                    <ArrowRight size={13} className="text-brand-emerald opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0" />
                  </h3>
                  <p className="text-[11px] text-[#98A3B3] font-mono tracking-wider uppercase leading-relaxed">{ind.audience}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-12 text-center">
          <Link href="/who-we-serve" className="inline-flex items-center gap-2 text-sm text-brand-emerald hover:text-white transition-colors font-medium">
            Explore every industry <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
