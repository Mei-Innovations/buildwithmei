'use client';

import { motion } from 'motion/react';
import { Network, MonitorSmartphone, Workflow, ShoppingCart, LayoutDashboard, Users, BrainCircuit, Globe, Smartphone } from 'lucide-react';
import Link from 'next/link';

const tiers = [
  {
    name: "Starter",
    label: "Just getting started",
    color: "from-[#4D8B72]/10 to-transparent",
    border: "border-brand-emerald/20",
    badge: "bg-brand-emerald/10 text-brand-emerald border-brand-emerald/20",
    services: [
      { icon: Globe, title: "Professional Website", desc: "A fast, modern website that represents your business and converts visitors. Built to rank on Google, load instantly, and look great on every device. Starting point for any business." },
      { icon: Smartphone, title: "Landing Pages & Funnels", desc: "Single-purpose pages designed to capture leads, sell products, or launch something new. Clear, fast, conversion-optimized." },
      { icon: MonitorSmartphone, title: "Branding & Digital Presence", desc: "Logo, brand identity, and digital setup — everything a new business needs to look credible and professional from day one." },
    ]
  },
  {
    name: "Growth",
    label: "Ready to systemize",
    color: "from-[#1a2540]/80 to-transparent",
    border: "border-white/8",
    badge: "bg-white/5 text-[#aaa] border-white/10",
    services: [
      { icon: ShoppingCart, title: "Ecommerce Development", desc: "Custom online stores built for conversion — with automated inventory, seamless payment integrations, and experiences your customers will remember." },
      { icon: Workflow, title: "CRM & Business Systems", desc: "Replace disconnected spreadsheets with a unified pipeline. Track leads, manage clients, and close deals from one system built for how you actually work." },
      { icon: Users, title: "Client Portals", desc: "Branded, secure environments where clients submit documents, track projects, and communicate — cutting out the endless email chains." },
    ]
  },
  {
    name: "Scale",
    label: "Automating operations",
    color: "from-[#12182B] to-transparent",
    border: "border-white/5",
    badge: "bg-[#12182B] text-[#888] border-white/8",
    services: [
      { icon: BrainCircuit, title: "AI & Business Automation", desc: "Eliminate manual data entry, document processing, and repetitive workflows with practical AI. Built into your existing systems — not bolted on top.", highlight: "Most clients see ROI within 90 days." },
      { icon: LayoutDashboard, title: "Operational Dashboards", desc: "Real-time command centers for your team — pipeline velocity, KPIs, system health — surfaced in one operational view your leadership can act on." },
      { icon: Network, title: "Digital Transformation", desc: "Migrate legacy operations to modern, scalable infrastructure. We handle strategy, build, and transition without disrupting your current operations." },
    ]
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 relative bg-[#0B1020] z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20 max-w-3xl">
          <div className="text-sm font-mono tracking-widest text-[#555] uppercase mb-4">What We Build</div>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-5 tracking-tight text-balance">
            From first website<br/>to full automation.
          </h2>
          <p className="text-lg text-[#666] font-light leading-relaxed">
            We work with businesses at every stage — from day-one startups who need a professional presence, to established companies ready to automate their entire operation. Pick your starting point.
          </p>
        </motion.div>

        <div className="space-y-6">
          {tiers.map((tier, ti) => (
            <motion.div key={ti} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: ti * 0.1 }}
              className={`rounded-2xl border ${tier.border} bg-gradient-to-b ${tier.color} p-8`}>
              <div className="flex items-center gap-3 mb-8">
                <span className={`text-xs font-mono px-3 py-1.5 rounded-full border uppercase tracking-widest ${tier.badge}`}>{tier.name}</span>
                <span className="text-sm text-[#555]">{tier.label}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {tier.services.map((svc, si) => (
                  <motion.div key={si} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: 0.05 + si * 0.08 }}
                    className="group relative p-6 rounded-xl bg-[#0B1020]/60 border border-white/[0.04] hover:border-brand-emerald/20 transition-all duration-400">
                    <div className="w-9 h-9 rounded-lg bg-[#12182B] border border-white/[0.05] flex items-center justify-center mb-4 text-[#555] group-hover:text-brand-emerald transition-colors duration-300">
                      <svc.icon size={18} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-base font-medium text-white mb-2 tracking-tight">{svc.title}</h3>
                    <p className="text-sm text-[#666] leading-relaxed font-light">{svc.desc}</p>
                    {svc.highlight && (
                      <div className="mt-3 text-[9px] font-mono text-brand-emerald uppercase tracking-widest flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald" />{svc.highlight}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 text-center">
          <p className="text-[#555] text-sm mb-5 font-light">Not sure where you fit? We'll figure it out together in a free 30-minute call.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-brand-emerald text-white font-semibold hover:bg-[#3d7260] transition-all duration-300 shadow-[0_0_30px_rgba(77,139,114,0.25)]">
              Book a Free Strategy Call →
            </Link>
            <a href="https://wa.me/923338944489?text=Hi%20MEI%2C%20I'd%20like%20to%20discuss%20services" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-medium hover:bg-[#25D366] hover:text-white transition-all duration-300">
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
