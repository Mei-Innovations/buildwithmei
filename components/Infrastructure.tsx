'use client';

import { motion } from 'motion/react';
import { Database, Lock, Cpu } from 'lucide-react';

export function Infrastructure() {
  return (
    <section id="systems" className="py-32 relative bg-[#0B1020] z-10 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="flex-1">
            <div className="text-sm font-mono tracking-widest text-[#98A3B3] uppercase mb-4">Systems Engineering</div>
            <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-6 tracking-tight text-balance">
              Systems that run<br/>while you sleep.
            </h2>
            <p className="text-lg text-[#B8C2CE] font-light leading-relaxed mb-10">
              Every system we build is designed to handle your volume reliably — without your team having to intervene every time something unusual happens.
            </p>
            <div className="space-y-8">
              {[
                { icon: Database, title: "Centralized Business Knowledge", desc: "A connected data architecture that eliminates silos — every team working from the same source of truth, updated in real time." },
                { icon: Lock, title: "Enterprise-Grade Security", desc: "Built-in access controls, encrypted data handling, and audit trails. Your client data is protected at every layer." },
                { icon: Cpu, title: "Reliable Automation", desc: "Workflow systems that handle high volumes predictably — without manual intervention, without failure points, without your team babysitting them." },
              ].map((feat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.12 }}
                  className="flex items-start gap-5 group"
                >
                  <div className="w-10 h-10 rounded-md bg-[#12182B] border border-white/8 flex items-center justify-center text-[#98A3B3] group-hover:text-brand-emerald transition-colors duration-300 mt-1 shrink-0">
                    <feat.icon size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1 tracking-tight">{feat.title}</h4>
                    <p className="text-sm text-[#98A3B3] font-light leading-relaxed">{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="flex-1 w-full relative">
            <div className="relative rounded-xl border border-white/[0.05] bg-[#0B1020] p-2 overflow-hidden shadow-[0_20px_40px_-20px_rgba(0,0,0,1)]">
              <div className="rounded-lg overflow-hidden bg-[#0D111A] border border-white/[0.04]">
                <div className="h-14 border-b border-white/[0.04] flex items-center px-5 justify-between bg-[#12182B]">
                  <div className="flex items-center gap-4">
                    <div className="flex gap-1.5 opacity-40">
                      {[0,1,2].map(i => <div key={i} className="w-2.5 h-2.5 rounded-full bg-white/20" />)}
                    </div>
                    <div className="text-[10px] font-mono tracking-widest text-[#8D98A8]">operations_dashboard.tsx</div>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-brand-emerald font-mono bg-brand-emerald/10 px-2 py-1 rounded border border-brand-emerald/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse" /> Active
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      { label: "TIME SAVED THIS WEEK", val: "34.5", unit: "hrs", badge: "↑ vs last week" },
                      { label: "ACTIVE AUTOMATIONS", val: "12", unit: null, badge: null, chart: true },
                    ].map((m, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="border border-white/[0.03] rounded-lg p-5 bg-gradient-to-b from-[#12182B] to-[#0D111A]"
                      >
                        <div className="text-[10px] text-[#8D98A8] font-mono tracking-widest mb-3">{m.label}</div>
                        <div className="flex justify-between items-end">
                          <span className="text-3xl font-light text-white tracking-tight">{m.val}{m.unit && <span className="text-sm text-[#333] ml-1">{m.unit}</span>}</span>
                          {m.badge && <span className="text-[10px] font-mono text-brand-emerald bg-brand-emerald/10 px-1.5 py-0.5 rounded border border-brand-emerald/20">{m.badge}</span>}
                          {m.chart && (
                            <svg width="52" height="18" viewBox="0 0 60 20" fill="none" className="opacity-60">
                              <path d="M0 15L10 10L20 18L30 5L40 12L50 2L60 8" stroke="#4D8B72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="border border-white/[0.03] rounded-lg overflow-hidden bg-[#0B1020]">
                    <div className="px-5 py-2.5 bg-[#0D111A] border-b border-white/[0.03] text-[10px] text-[#8D98A8] font-mono flex justify-between tracking-widest uppercase">
                      <span>Process</span><span>Status</span>
                    </div>
                    <div className="p-5 space-y-4 font-mono text-xs">
                      {[
                        { name: "process_mortgage_applications.ts", status: "Automated", icon: "✓", color: "text-brand-emerald" },
                        { name: "sync_sales_crm.ts", status: "Automated", icon: "✓", color: "text-brand-emerald" },
                        { name: "analyze_client_pipeline.ts", status: "running", icon: "⟲", color: "text-blue-500", spin: true, pulse: true },
                        { name: "generate_compliance_report.ts", status: "queued", icon: "—", color: "text-[#333]", dim: true },
                      ].map((row, i) => (
                        <div key={i} className={`flex justify-between items-center ${row.dim ? "opacity-40" : "group"}`}>
                          <span className={`flex items-center gap-3 text-[#B0BAC7] ${!row.dim ? "group-hover:text-white" : ""} transition-colors`}>
                            <span className={`${row.color} ${row.spin ? "animate-spin inline-block" : ""}`}>{row.icon}</span>
                            {row.name}
                          </span>
                          <span className={`${row.dim ? "text-[#333]" : "text-[#8D98A8]"} ${row.pulse ? "animate-pulse" : ""}`}>{row.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
