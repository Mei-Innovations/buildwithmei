'use client';

import { motion } from 'motion/react';
import { Home, ShoppingBag, Briefcase, Activity, Building, Settings2 } from 'lucide-react';

const industries = [
  {
    title: "Mortgage Operations", icon: Home,
    pain: "Document collection via email. 14-day prep cycles. Team capacity capped by manual admin — not by deal flow or market conditions.",
    solution: "Automated client portals that collect, sort, and sync documents into your pipeline. Clear processing dashboards your team can act on in real time."
  },
  {
    title: "Ecommerce Brands", icon: ShoppingBag,
    pain: "Disconnected inventory, manual order management, and customer service teams buried in tickets that should never reach a human.",
    solution: "Custom storefronts, automated inventory and fulfillment workflows, and integrated support systems that scale with your order volume."
  },
  {
    title: "Healthcare & Clinics", icon: Activity,
    pain: "Paper-based intake, manual scheduling, and compliance workflows that haven't changed in a decade — costing staff hours every single day.",
    solution: "Secure digital intake forms, automated scheduling and reminders, and integrated patient data management built for regulatory environments."
  },
  {
    title: "Professional Services", icon: Briefcase,
    pain: "Leads in spreadsheets. Invoices in Word. Client comms across three inboxes. The ops team becomes a human integration layer for tools that should talk to each other.",
    solution: "A unified CRM, automated invoicing, and a central client hub — so your team manages relationships, not administrative chaos."
  },
  {
    title: "Real Estate Teams", icon: Building,
    pain: "Leads lost in email threads, manual property updates, and slow response times that cost you closings before a conversation even starts.",
    solution: "Automated lead routing and follow-up, centralized pipeline visibility, and property systems that keep your listings current without manual effort."
  },
  {
    title: "Growing SMEs", icon: Settings2,
    pain: "The business runs on spreadsheets and workarounds that made sense at 5 people and now actively hold you back at 25.",
    solution: "Custom operations software designed for exactly how your business works — not a generic SaaS platform you have to bend to fit."
  },
];

export function Industries() {
  return (
    <section id="industries" className="py-32 relative bg-[#0B1020] z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20 max-w-3xl">
          <div className="text-sm font-mono tracking-widest text-[#555] uppercase mb-4">Who We Serve</div>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-5 tracking-tight text-balance">
            We've solved this<br/>in your industry before.
          </h2>
          <p className="text-lg text-[#666] font-light leading-relaxed">
            We've worked with businesses worldwide across these verticals since 2014. We know the operational patterns — and we know exactly where technology changes the outcome.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-8 rounded-xl bg-[#12182B] border border-white/5 hover:border-brand-emerald/20 transition-all duration-400"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-lg bg-[#0B1020] border border-white/8 flex items-center justify-center mb-6 text-[#555] group-hover:text-brand-emerald transition-colors duration-300">
                  <ind.icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-medium text-white mb-4 tracking-tight">{ind.title}</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-[9px] text-[#444] font-mono tracking-widest mb-1.5 uppercase">The Problem</div>
                    <p className="text-sm text-[#666] font-light leading-relaxed">{ind.pain}</p>
                  </div>
                  <div className="h-px w-full bg-white/5" />
                  <div>
                    <div className="text-[9px] text-brand-emerald font-mono tracking-widest mb-1.5 uppercase">What We Build</div>
                    <p className="text-sm text-[#999] font-light leading-relaxed">{ind.solution}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-12 text-center">
          <p className="text-[#444] text-sm mb-4 font-light">Don't see your industry? We work across verticals.</p>
          <a href="mailto:info@buildwithmei.com" className="text-sm text-brand-emerald hover:text-white transition-colors font-mono">
            Tell us about your operations →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
