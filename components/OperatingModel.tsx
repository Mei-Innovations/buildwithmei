'use client';

import { motion } from 'motion/react';
import { Network, ShieldCheck, GitMerge, Users2 } from 'lucide-react';

const steps = [
  { icon: Network, num: "01", title: "Operations Audit", desc: "We map where your business is actually losing time and money — reviewing current tools, handoffs, and workflows before a single line of code is written. Most clients are surprised by what we find." },
  { icon: GitMerge, num: "02", title: "Custom Build", desc: "No templates. No off-the-shelf platforms bent to fit. We build exactly what your operations need — dashboards, portals, automation layers — designed for how your team works today." },
  { icon: Users2, num: "03", title: "Automation Integration", desc: "We connect your CRM, communication channels, and data sources into a single reliable workflow engine. Repetitive tasks stop being your team's problem." },
  { icon: ShieldCheck, num: "04", title: "Launch & Ongoing Support", desc: "We deploy without disrupting your current operations. Post-launch, we stay in the room — monitoring, refining, and scaling as your business grows." },
];

export function OperatingModel() {
  return (
    <section id="operating-model" className="py-32 relative bg-[#0B1020] z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20 max-w-3xl">
          <div className="text-sm font-mono tracking-widest text-[#98A3B3] uppercase mb-4">Our Process</div>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-5 tracking-tight text-balance">How we work with you.</h2>
          <p className="text-lg text-[#B8C2CE] font-light leading-relaxed">We don't hand off code and disappear. We act as your operational technology partner — from the first conversation through to long-term system growth.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-8 rounded-xl bg-[#12182B] border border-white/5 hover:border-brand-emerald/20 transition-all duration-400"
            >
              <div className="absolute top-6 right-6 font-mono text-[#1a2535] text-4xl font-bold select-none">{step.num}</div>
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-lg bg-[#0B1020] border border-white/8 flex items-center justify-center text-[#98A3B3] group-hover:text-brand-emerald transition-colors duration-300 shrink-0">
                  <step.icon size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2 tracking-tight">{step.title}</h3>
                  <p className="text-sm text-[#B8C2CE] font-light leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Founder note */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-xl border border-white/5 bg-[#12182B] p-10 md:p-14 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(77,139,114,0.06),transparent_60%)]" />
          <div className="absolute right-8 bottom-8 opacity-[0.04] pointer-events-none">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-40 h-40">
              <path d="M50 22 L65 30.66 L50 39.32 L35 30.66 Z" fill="#4D8B72" />
              <path d="M50 4 L86 24.78 L71 33.44 L50 21.32 L29 33.44 L14 24.78 Z" fill="#4D8B72" />
              <path d="M11 29 L47 49.78 L47 91.34 L31 82.1 L31 61 L27 58.7 L27 79.8 L11 70.56 Z" fill="#4D8B72" />
              <path d="M89 29 L53 49.78 L53 91.34 L69 82.1 L69 61 L73 58.7 L73 79.8 L89 70.56 Z" fill="#4D8B72" />
            </svg>
          </div>
          <div className="relative z-10 max-w-3xl">
            <div className="text-[10px] font-mono tracking-widest text-[#8D98A8] uppercase mb-6">Our Approach</div>
            <p className="text-xl md:text-2xl text-white font-light leading-relaxed mb-8 tracking-tight">
              We believe technology works best when it solves real operational problems. MEI combines business understanding with modern digital systems to create solutions that teams actually use.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-[#0B1020] border border-brand-emerald/30 flex items-center justify-center">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                  <path d="M50 22 L65 30.66 L50 39.32 L35 30.66 Z" fill="#34D399" />
                  <path d="M50 4 L86 24.78 L71 33.44 L50 21.32 L29 33.44 L14 24.78 Z" fill="#34D399" />
                  <path d="M11 29 L47 49.78 L47 91.34 L31 82.1 L31 61 L27 58.7 L27 79.8 L11 70.56 Z" fill="#10B981" />
                  <path d="M89 29 L53 49.78 L53 91.34 L69 82.1 L69 61 L73 58.7 L73 79.8 L89 70.56 Z" fill="#064E3B" />
                </svg>
              </div>
              <div>
                <div className="text-white font-medium text-sm">MEI Innovations</div>
                <div className="text-[11px] text-brand-emerald font-mono mt-0.5 tracking-wide">Digital journey since 2014</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
