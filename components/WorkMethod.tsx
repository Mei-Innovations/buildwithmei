'use client';

import { Fragment } from 'react';
import { motion } from 'motion/react';
import { Search, PenTool, Hammer, Workflow, TrendingUp, ArrowRight, Globe, BrainCircuit, BarChart3, Sparkles, Radio } from 'lucide-react';

/** MEI Transformation Method — Discover → Design → Build → Automate → Scale */
const method = [
  { icon: Search, title: 'Discover', desc: 'We understand your operations before choosing any technology.' },
  { icon: PenTool, title: 'Design', desc: 'The ecosystem is architected around how your business actually works.' },
  { icon: Hammer, title: 'Build', desc: 'Platforms, portals, and systems — custom-built, never templated.' },
  { icon: Workflow, title: 'Automate', desc: 'Workflows, AI assistants, and integrations remove the manual layer.' },
  { icon: TrendingUp, title: 'Scale', desc: 'The ecosystem evolves with you — we stay after launch.' },
];

export function WorkMethod() {
  return (
    <section className="py-24 relative bg-[#0A0D1A] z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 max-w-3xl">
          <div className="text-sm font-mono tracking-widest text-[#98A3B3] uppercase mb-4">The MEI Transformation Method</div>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-5 tracking-tight text-balance">
            Operations first.<br/>Technology second.
          </h2>
          <p className="text-lg text-[#B8C2CE] font-light leading-relaxed">
            Every business starts differently. The method doesn't change: we understand the operation, then build the connected system that improves it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] items-stretch gap-3">
          {method.map((m, i) => (
            <Fragment key={m.title}>
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="p-6 rounded-xl bg-[#12182B] border border-white/5">
                <div className="w-9 h-9 rounded-lg bg-brand-emerald/10 border border-brand-emerald/20 flex items-center justify-center mb-4">
                  <m.icon size={16} className="text-brand-emerald" strokeWidth={1.5} />
                </div>
                <div className="text-[10px] font-mono text-brand-emerald tracking-widest mb-1.5">0{i + 1}</div>
                <div className="text-sm font-medium text-white mb-1.5">{m.title}</div>
                <p className="text-xs text-[#B8C2CE] font-light leading-relaxed">{m.desc}</p>
              </motion.div>
              {i < method.length - 1 && (
                <div className="hidden md:flex items-center justify-center text-brand-emerald/40">
                  <ArrowRight size={15} />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Ecosystem Capabilities Delivered */
const capabilities = [
  { icon: Globe, name: 'Digital Platforms', items: ['Websites', 'Ecommerce', 'Client portals', 'Applications'] },
  { icon: Workflow, name: 'Automation Systems', items: ['CRM workflows', 'AI assistants', 'Customer journeys', 'Process automation'] },
  { icon: BarChart3, name: 'Business Intelligence', items: ['Dashboards', 'Reporting', 'Data workflows'] },
  { icon: Sparkles, name: 'Experience Systems', items: ['Customer experience', 'Booking systems', 'Communication flows'] },
  { icon: Radio, name: 'Smart Systems', items: ['Computer vision concepts', 'IoT-ready environments', 'Connected operations'] },
];

export function WorkCapabilities() {
  return (
    <section className="py-24 relative bg-[#0B1020] z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 max-w-3xl">
          <div className="text-sm font-mono tracking-widest text-[#98A3B3] uppercase mb-4">Ecosystem Capabilities Delivered</div>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-5 tracking-tight text-balance">
            What MEI ecosystems<br/>are made of.
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {capabilities.map((cap, i) => (
            <motion.div key={cap.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.45, delay: (i % 5) * 0.07 }}
              className="p-6 rounded-xl bg-[#12182B] border border-white/5 hover:border-brand-emerald/20 transition-all duration-400">
              <div className="w-10 h-10 rounded-lg bg-[#0B1020] border border-white/8 flex items-center justify-center mb-5 text-brand-emerald">
                <cap.icon size={19} strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-medium text-white tracking-tight mb-4">{cap.name}</h3>
              <div className="flex flex-wrap gap-2">
                {cap.items.map(t => (
                  <span key={t} className="text-xs text-[#C0C9D3] px-3 py-1.5 rounded-full bg-[#0B1020] border border-white/8">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Historical digital ventures — MEI's journey, clearly framed as history. */
export function WorkVentures() {
  return (
    <section className="py-20 relative bg-[#0B1020] z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 max-w-3xl">
          <div className="text-sm font-mono tracking-widest text-[#98A3B3] uppercase mb-4">Where the Journey Began</div>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-4 tracking-tight text-balance">
            Historical digital ventures.
          </h2>
          <p className="text-base text-[#B8C2CE] font-light leading-relaxed">
            Before building ecosystems for clients, MEI built and operated its own — these ventures represent MEI's digital journey, and the operator's perspective behind every project since.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-xl bg-[#12182B]/60 border border-white/5 overflow-hidden">
            <div className="relative h-32 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1740805134242-876087bb56eb?auto=format&fit=crop&w=900&q=70" alt="Retail commerce environment" loading="lazy"
                className="w-full h-full object-cover opacity-95"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12182B] via-[#12182B]/15 to-transparent pointer-events-none" />
            </div>
            <div className="p-7 pt-5">
            <div className="text-[10px] font-mono tracking-widest text-[#98A3B3] uppercase mb-2">Historical Venture · Commerce</div>
            <h3 className="text-lg font-medium text-white tracking-tight mb-2">Greenleaf</h3>
            <p className="text-sm text-[#B8C2CE] font-light leading-relaxed">Online grocery and commerce ecosystem — hands-on experience connecting storefronts, inventory, fulfillment, and daily operations.</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.08 }} className="rounded-xl bg-[#12182B]/60 border border-white/5 overflow-hidden">
            <div className="relative h-32 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=900&q=70" alt="Modern healthcare clinic environment" loading="lazy"
                className="w-full h-full object-cover opacity-95"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12182B] via-[#12182B]/15 to-transparent pointer-events-none" />
            </div>
            <div className="p-7 pt-5">
            <div className="text-[10px] font-mono tracking-widest text-[#98A3B3] uppercase mb-2">Historical Venture · Healthcare</div>
            <h3 className="text-lg font-medium text-white tracking-tight mb-2">MyDoc</h3>
            <p className="text-sm text-[#B8C2CE] font-light leading-relaxed">Doctor appointment platform — early healthcare technology experience: patient journeys, scheduling systems, and clinic workflows.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
