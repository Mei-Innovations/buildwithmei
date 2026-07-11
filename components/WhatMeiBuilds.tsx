'use client';

import { motion } from 'motion/react';
import { BrainCircuit, LayoutDashboard, Globe, TrendingUp } from 'lucide-react';

/**
 * "What MEI Builds" — homepage-only capability overview.
 * Distinct from the shared Services component (used on /services),
 * which keeps its own separate tier structure and copy untouched.
 *
 * Reframed as business outcome categories rather than a technology
 * directory — technology names appear only as small supporting tags.
 */
const capabilities = [
  {
    icon: BrainCircuit,
    title: 'Intelligent Operations',
    desc: 'AI automation, workflow systems, and process optimization that help businesses operate smarter.',
    tags: ['AI models', 'Automation', 'Workflow'],
  },
  {
    icon: LayoutDashboard,
    title: 'Business Infrastructure',
    desc: 'CRM systems, dashboards, internal platforms, and operational foundations.',
    tags: ['CRM', 'Dashboards', 'Cloud'],
  },
  {
    icon: Globe,
    title: 'Digital Experiences',
    desc: 'Web platforms, ecommerce experiences, and customer-facing systems.',
    tags: ['Web', 'Ecommerce', 'APIs'],
  },
  {
    icon: TrendingUp,
    title: 'Growth Systems',
    desc: 'Customer journeys, analytics, integrations, and scalable processes.',
    tags: ['Analytics', 'Integrations', 'Journeys'],
  },
];

export function WhatMeiBuilds() {
  return (
    <section id="what-mei-builds" className="py-32 relative bg-[#0B1020] z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-3xl">
          <div className="text-sm font-mono tracking-widest text-[#98A3B3] uppercase mb-4">What MEI Builds</div>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-5 tracking-tight text-balance">
            Connected systems,<br/>not individual tools.
          </h2>
          <p className="text-lg text-[#B8C2CE] font-light leading-relaxed">
            We look beyond individual tools — building connected systems that improve how businesses operate, grow, and serve their customers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
          {capabilities.map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.06 }}
              className="bg-[#12182B] p-8 hover:bg-[#151C33] transition-colors duration-300 flex flex-col">
              <div className="w-9 h-9 rounded-lg bg-[#0B1020] border border-white/8 flex items-center justify-center mb-5 text-brand-emerald">
                <c.icon size={18} strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-medium text-white tracking-tight mb-2">{c.title}</h3>
              <p className="text-sm text-[#B8C2CE] font-light leading-relaxed mb-5">{c.desc}</p>
              <div className="mt-auto flex flex-wrap gap-1.5">
                {c.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono tracking-wide text-[#8A97A8] border border-white/8 px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
