'use client';

import { motion } from 'motion/react';
import { BrainCircuit, Cloud, Code2, Store, Workflow, Briefcase, BarChart3, Plug } from 'lucide-react';

/**
 * Technology Ecosystem — credibility, not a developer portfolio.
 * "Technologies we build with" — no partnership claims.
 */

const categories = [
  { icon: BrainCircuit, name: 'AI & Intelligence', items: ['OpenAI', 'Claude', 'Gemini', 'AI Agents'], accent: '#1FB5C9' },
  { icon: Code2, name: 'Software', items: ['React', 'Next.js', 'Node.js', 'Python'], accent: '#4D8B72' },
  { icon: Store, name: 'Commerce', items: ['Shopify', 'WooCommerce'], accent: '#E8745B' },
  { icon: Briefcase, name: 'Business Systems', items: ['CRM', 'GoHighLevel', 'HubSpot', 'Salesforce'], accent: '#D4A574' },
  { icon: Workflow, name: 'Automation', items: ['Zapier', 'Make', 'n8n'], accent: '#1FB5C9' },
  { icon: Cloud, name: 'Cloud', items: ['AWS', 'Google Cloud', 'Azure', 'Netlify'], accent: '#4D8B72' },
  { icon: BarChart3, name: 'Data & Intelligence', items: ['Analytics', 'Dashboards', 'Reporting', 'Insights'], accent: '#D4A574' },
  { icon: Plug, name: 'Integration', items: ['APIs', 'Connected platforms', 'Workflow connections'], accent: '#E8745B' },
];

/** Full ecosystem — /services page. */
export function TechEcosystem() {
  return (
    <section id="technology" className="py-28 relative bg-[#0A0D1A] z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 max-w-3xl">
          <div className="text-sm font-mono tracking-widest text-[#98A3B3] uppercase mb-4">Technology Ecosystem</div>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-5 tracking-tight text-balance">
            The technology behind<br/>intelligent ecosystems.
          </h2>
          <p className="text-lg text-[#B8C2CE] font-light leading-relaxed">
            We select the right tools for each ecosystem — modern, proven, and built to connect. Technologies we build with:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, i) => (
            <motion.div key={cat.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
              style={{ ['--accent' as string]: cat.accent }}
              className="p-7 rounded-xl bg-[#12182B] border border-white/5 hover:border-[var(--accent)]/30 transition-all duration-400">
              <div className="w-10 h-10 rounded-lg bg-[#0B1020] border border-white/8 flex items-center justify-center mb-5" style={{ color: cat.accent }}>
                <cat.icon size={19} strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-medium text-white tracking-tight mb-4">{cat.name}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map(t => (
                  <span key={t} className="text-xs text-[#C0C9D3] px-3 py-1.5 rounded-full bg-[#0B1020] border border-white/8">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="mt-10 text-xs text-[#8D98A8] font-mono">
          Technologies we build with — selected per project, never one-size-fits-all.
        </motion.p>
      </div>
    </section>
  );
}

/** Compact trust strip — homepage. */
export function TechEcosystemPreview() {
  const preview = ['OpenAI', 'Claude', 'AWS', 'Google Cloud', 'Next.js', 'Python', 'Shopify', 'HubSpot', 'Salesforce', 'Zapier', 'Make', 'n8n'];
  return (
    <section className="py-16 relative bg-[#0B1020] z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <div className="text-[10px] font-mono tracking-widest text-[#98A3B3] uppercase mb-6">Technologies we build with</div>
          <div className="flex flex-wrap justify-center gap-x-7 gap-y-3">
            {preview.map(t => (
              <span key={t} className="text-sm text-[#B8C2CE] font-light hover:text-brand-emerald transition-colors cursor-default">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
