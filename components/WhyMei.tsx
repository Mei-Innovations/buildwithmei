'use client';

import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { FloatingOrbs, GridLines } from '@/components/AnimatedBackground';

const checks = [
  "Custom web & software development",
  "Business process automation",
  "Unified client portal environments",
  "CRM & external API integrations",
  "Enterprise-grade data security",
  "Dedicated ongoing support team",
];

const stats = [
  { val: "2014", sub: "Digital journey began — a decade of building real systems.", green: false, delay: 0 },
  { val: "Hours", sub: "Recovered weekly by clients who replace manual work with MEI systems.", green: true, delay: 0.1 },
  { val: "Scales", sub: "System architectures designed to grow as your transaction volume grows.", green: false, delay: 0.2 },
  { val: "Stays", sub: "We remain your technical partner after launch — not a vendor who disappears.", green: false, alt: true, delay: 0.3 },
];

export function WhyMei() {
  return (
    <section id="why-mei" className="py-32 relative bg-[#0B1020] z-10 border-t border-white/5 overflow-hidden">
      <FloatingOrbs count={2} />
      <GridLines />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-20 md:items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="md:w-1/2">
            <div className="text-sm font-mono tracking-widest text-brand-emerald uppercase mb-4">Why MEI</div>
            <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-6 tracking-tight text-balance">
              A decade of solving<br/>the right problems.
            </h2>
            <p className="text-lg text-[#B8C2CE] font-light leading-relaxed mb-8">
              MEI's digital journey started in 2014 through technology ventures. Not a trendy AI startup — an operational technology firm that evolved from building its own products into building intelligent ecosystems for others.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {checks.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 * i }}
                  className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-brand-emerald shrink-0 mt-0.5" />
                  <span className="text-sm text-[#B0BAC7] leading-snug">{item}</span>
                </motion.div>
              ))}
            </div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <a href="https://calendly.com/mei-innovations/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-brand-emerald text-white font-semibold hover:bg-[#3d7260] transition-all duration-300 text-sm shadow-[0_0_20px_rgba(77,139,114,0.2)]">
                Talk to us about your operations <ArrowRight size={14} />
              </a>
            </motion.div>
          </motion.div>

          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-brand-forest/8 blur-[100px] rounded-full pointer-events-none" />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-4 mt-8">
                {stats.slice(0,2).map((s,i)=>(
                  <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: s.delay }}
                    whileHover={{ scale: 1.02, borderColor: s.green ? 'rgba(77,139,114,0.4)' : 'rgba(255,255,255,0.12)' }}
                    className={`p-8 rounded-xl border transition-all duration-300 cursor-default ${s.green ? "bg-brand-emerald/5 border-brand-emerald/15" : "bg-[#12182B] border-white/5"}`}>
                    <div className={`text-4xl font-display font-medium mb-2 tracking-tight ${s.green ? "text-brand-emerald" : "text-white"}`}>{s.val}</div>
                    <div className="text-sm text-[#98A3B3] font-light leading-relaxed">{s.sub}</div>
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                {stats.slice(2).map((s,i)=>(
                  <motion.div key={i} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: s.delay }}
                    whileHover={{ scale: 1.02, borderColor: 'rgba(255,255,255,0.12)' }}
                    className={`p-8 rounded-xl border border-white/5 transition-all duration-300 cursor-default ${s.alt ? "bg-[#161D2B]" : "bg-[#12182B]"}`}>
                    <div className="text-4xl font-display font-medium text-white mb-2 tracking-tight">{s.val}</div>
                    <div className="text-sm text-[#98A3B3] font-light leading-relaxed">{s.sub}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
