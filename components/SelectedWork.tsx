'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

/**
 * Selected Work — homepage preview.
 * Exactly two case studies: QARM and H&A Nature's Best.
 * This is the only homepage section where these projects appear.
 */
const work = [
  {
    name: 'QARM',
    tag: 'QARM',
    position: 'From concept to international operating platform',
    desc: 'A CRM and operations platform built to run daily workflow across a growing international operation.',
    focus: ['CRM Workflows', 'Automation', 'Operational Infrastructure'],
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=75',
    imgAlt: 'Operations platform interface',
    href: '/work#case-studies',
  },
  {
    name: "H&A Nature's Best",
    tag: "H&A Nature's Best",
    position: 'Traditional brand transformed into premium digital commerce experience',
    desc: 'An established wellness brand transformed with a modern commerce foundation and premium digital experience.',
    focus: ['Brand Modernization', 'Ecommerce Foundation'],
    img: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=900&q=75',
    imgAlt: "H&A Nature's Best commerce platform",
    href: '/work#case-studies',
  },
];

export function SelectedWork() {
  return (
    <section id="selected-work" className="py-32 relative bg-[#0B1020] z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mb-16 max-w-3xl">
          <div className="text-sm font-mono tracking-widest text-[#98A3B3] uppercase mb-4">Selected Work</div>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-5 tracking-tight text-balance">
            Case studies,<br/>not portfolio filler.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {work.map((w, i) => (
            <motion.div key={w.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}>
              <Link href={w.href} className="group flex flex-col rounded-xl bg-[#12182B] border border-white/5 hover:border-brand-emerald/25 transition-all duration-400 overflow-hidden h-full">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <span className="absolute top-4 left-4 z-10 text-[11px] font-semibold tracking-wide uppercase text-brand-emerald bg-[#0B1020]/70 px-3 py-1.5 rounded-md border border-brand-emerald/25">
                    {w.tag}
                  </span>
                  <img src={w.img} alt={w.imgAlt} loading="lazy"
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12182B] via-[#12182B]/25 to-transparent pointer-events-none" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <p className="text-sm text-brand-emerald font-medium mb-3">{w.position}</p>
                  <h3 className="text-xl font-medium text-white tracking-tight mb-3">{w.name}</h3>
                  <p className="text-sm text-[#B8C2CE] font-light leading-relaxed mb-6">{w.desc}</p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {w.focus.map(f => (
                      <span key={f} className="text-xs text-[#B8C2CE] border border-white/10 px-3 py-1.5 rounded-full">{f}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-12 text-center">
          <Link href="/work" className="inline-flex items-center gap-2 text-sm text-brand-emerald hover:text-white transition-colors font-medium">
            See all our work <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
