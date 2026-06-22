'use client';

import { motion } from 'motion/react';
import { BarChart3, Clock, Database, Users, ArrowRight, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { FloatingOrbs } from '@/components/AnimatedBackground';

const studies = [
  {
    vertical: "Mortgage Operations", client: "Regional Mortgage Brokerage",
    metrics: [
      { label: "Reduction in prep time", value: "–85%", icon: Clock },
      { label: "Monthly file capacity", value: "3.5×", icon: BarChart3 },
    ],
    situation: "The team was manually chasing documents via email — a 14-day prep cycle per underwriting file, with monthly volume capped at 120 files because there weren't enough hours.",
    built: "A client-facing document portal that automatically requests, collects, and categorizes files, then syncs directly into their pipeline. No manual entry. No chasing.",
    result: "File prep dropped from two weeks to under 48 hours. The team now processes 400+ files per month — same headcount, dramatically higher output.",
    quote: "We went from constantly firefighting to actually running the business."
  },
  {
    vertical: "Professional Services", client: "Mid-Market Professional Services Firm",
    metrics: [
      { label: "Hours/week reclaimed", value: "40 hrs", icon: Users },
      { label: "Faster payment cycle", value: "–12 days", icon: Database },
    ],
    situation: "Leads in spreadsheets. Invoices in Word. Client communications across three inboxes. The operations team was a human integration layer between tools that should've talked to each other.",
    built: "A centralized CRM connected to an automated invoicing system with a unified client communication layer. One dashboard. Every client. Every status.",
    result: "40 hours of admin work reclaimed per week. Invoices paid 12 days faster. Leadership now has real-time visibility into pipeline health for the first time.",
    quote: "This paid for itself within the first billing cycle."
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-32 relative bg-[#0A0D1A] z-10 border-t border-white/5 overflow-hidden">
      <FloatingOrbs count={2} />
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-12 md:items-end justify-between mb-20">
          <div className="max-w-2xl">
            <div className="text-sm font-mono tracking-widest text-[#555] uppercase mb-4">Real Outcomes</div>
            <h2 className="text-4xl md:text-5xl font-display font-medium text-white tracking-tight text-balance">
              Results clients<br/>actually talk about.
            </h2>
          </div>
          <div className="max-w-xs text-sm text-[#555] font-light leading-relaxed">
            Representative outcomes from real MEI projects. Every engagement is custom.
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {studies.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="group flex flex-col p-8 md:p-10 rounded-xl bg-gradient-to-b from-[#12182B] to-[#0A0D1A] border border-white/[0.04] hover:border-brand-emerald/20 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(77,139,114,0.05),transparent_55%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Animated shimmer on hover */}
              <motion.div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-emerald/40 to-transparent"
                initial={{ x: '-100%', opacity: 0 }}
                whileHover={{ x: '100%', opacity: 1 }}
                transition={{ duration: 0.8 }}
              />

              <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start gap-6 mb-8 pb-8 border-b border-white/[0.04]">
                <div>
                  <div className="text-[10px] font-mono tracking-widest text-brand-emerald uppercase mb-2">{s.vertical}</div>
                  <h3 className="text-xl font-medium text-white tracking-tight">{s.client}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {s.metrics.map((m, j) => (
                    <motion.div key={j} whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-end p-3 rounded-lg border border-white/[0.04] bg-[#0B1020] cursor-default">
                      <div className="text-2xl font-display text-brand-emerald tracking-tight">{m.value}</div>
                      <div className="text-[9px] uppercase font-mono text-[#555] tracking-widest flex items-center gap-1.5 mt-1">
                        <m.icon size={9}/>{m.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 flex-1 space-y-7">
                {[
                  { dot: "bg-[#1D263A]", label: "The Situation", text: s.situation, color: "text-[#777]" },
                  { dot: "bg-brand-emerald/50", label: "What We Built", text: s.built, color: "text-white" },
                  { dot: "bg-brand-emerald shadow-[0_0_8px_rgba(77,139,114,0.5)]", label: "The Result", text: s.result, color: "text-[#aaa]" },
                ].map((b, j) => (
                  <div key={j}>
                    <div className="text-[9px] text-[#555] font-mono tracking-widest mb-2 uppercase flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${b.dot}`}/>{b.label}
                    </div>
                    <p className={`text-sm ${b.color} font-light leading-relaxed`}>{b.text}</p>
                  </div>
                ))}
                <motion.div whileHover={{ borderColor: 'rgba(77,139,114,0.3)' }}
                  className="mt-6 p-4 rounded-lg bg-brand-emerald/5 border border-brand-emerald/15 transition-colors duration-300">
                  <p className="text-sm text-brand-emerald font-light italic">"{s.quote}"</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 text-center">
          <p className="text-[#555] text-sm mb-5 font-light">Ready to see what this looks like for your business?</p>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-brand-emerald/30 bg-brand-emerald/10 text-brand-emerald font-medium hover:bg-brand-emerald hover:text-white transition-all duration-300 text-sm">
              Get a Free Operations Review <ArrowRight size={14} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
