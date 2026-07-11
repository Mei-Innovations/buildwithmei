'use client';

import { motion } from 'motion/react';
import { Database, FileDigit, Cpu, Workflow, ShieldCheck, BringToFront } from 'lucide-react';
import { FloatingOrbs, GridLines } from '@/components/AnimatedBackground';

export function WorkflowBlueprint() {
  return (
    <section id="workflow" className="py-32 relative bg-[#0B1020] z-10 border-t border-white/5 overflow-hidden">
      <FloatingOrbs count={1} />
      <GridLines />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(77,139,114,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-20 max-w-3xl mx-auto">
          <div className="text-sm font-mono tracking-widest text-[#98A3B3] uppercase mb-4">How It Works</div>
          <h2 className="text-4xl font-display font-medium text-white mb-6 tracking-tight">
            From raw data to business outcomes — automatically.
          </h2>
          <p className="text-lg text-[#B8C2CE] font-light leading-relaxed">
            We replace manual processes with reliable software systems. Every workflow follows the same pattern: capture, process, act — without your team in the middle of every step.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="relative w-full max-w-5xl mx-auto rounded-xl border border-white/[0.04] bg-[#0B1020] p-1 shadow-[0_20px_40px_-20px_rgba(0,0,0,1)]">

          <div className="relative rounded-lg bg-[#12182B] border border-white/[0.03] p-8 md:p-12 overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]"
              style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="relative flex flex-col md:flex-row items-stretch justify-between gap-8 min-h-[400px]">

              {/* 01 DATA CAPTURE */}
              <div className="flex-1 flex flex-col justify-center relative">
                <div className="text-[10px] text-[#98A3B3] font-mono tracking-widest mb-4">01 DATA CAPTURE</div>
                <div className="space-y-3 relative z-10">
                  {[
                    { label: "Client Forms",     icon: Database },
                    { label: "Email Parsing",    icon: FileDigit },
                    { label: "API Integrations", icon: BringToFront },
                  ].map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.08 }}
                      className="flex items-center gap-3 p-3 bg-gradient-to-r from-[#1a2540] to-[#12182B] border border-white/[0.04] rounded-lg text-xs text-[#aaa] hover:border-brand-emerald/20 hover:text-white transition-colors">
                      <item.icon size={14} className="text-brand-emerald/70" />
                      {item.label}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Arrow 1 */}
              <div className="hidden md:flex flex-col justify-center w-16">
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent relative">
                  <motion.div
                    className="absolute top-1/2 -ml-1 w-2 h-2 rounded-full bg-brand-emerald transform -translate-y-1/2 shadow-[0_0_8px_rgba(77,139,114,0.8)]"
                    animate={{ left: ["0%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </div>

              {/* 02 MEI AUTOMATION ENGINE */}
              <div className="flex-[1.4] flex flex-col justify-center relative border border-brand-emerald/20 bg-gradient-to-b from-brand-emerald/[0.03] to-transparent rounded-xl p-6">
                <div className="absolute -top-3 left-6 px-2 bg-[#12182B] text-[10px] text-brand-emerald font-mono tracking-widest">
                  02 MEI AUTOMATION ENGINE
                </div>
                <motion.div
                  className="w-12 h-12 rounded-lg bg-[#0B1020] border border-white/[0.05] flex items-center justify-center mb-6"
                  animate={{ boxShadow: ["0 0 10px -4px rgba(77,139,114,0.2)", "0 0 25px -4px rgba(77,139,114,0.5)", "0 0 10px -4px rgba(77,139,114,0.2)"] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
                    <path d="M50 22 L65 30.66 L50 39.32 L35 30.66 Z" fill="#34D399" />
                    <path d="M50 4 L86 24.78 L71 33.44 L50 21.32 L29 33.44 L14 24.78 Z" fill="#34D399" />
                    <path d="M11 29 L47 49.78 L47 91.34 L31 82.1 L31 61 L27 58.7 L27 79.8 L11 70.56 Z" fill="#10B981" />
                    <path d="M89 29 L53 49.78 L53 91.34 L69 82.1 L69 61 L73 58.7 L73 79.8 L89 70.56 Z" fill="#064E3B" />
                  </svg>
                </motion.div>
                <h4 className="text-white font-medium mb-2 tracking-tight">Intelligent Processing</h4>
                <p className="text-xs text-[#B8C2CE] font-light leading-relaxed mb-6">
                  Data is validated, structured, and securely logged. Custom business rules handle compliance and routing, while integrated AI models extract key information instantly.
                </p>
                <div className="grid grid-cols-2 gap-2 mt-auto">
                  <div className="p-2 border border-white/[0.04] bg-[#0B1020] rounded flex items-center gap-2 text-[10px] text-[#aaa]">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse" /> Rule Engine
                  </div>
                  <div className="p-2 border border-white/[0.04] bg-[#0B1020] rounded flex items-center gap-2 text-[10px] text-[#aaa]">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" /> AI Router
                  </div>
                </div>
              </div>

              {/* Arrow 2 */}
              <div className="hidden md:flex flex-col justify-center w-16">
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent relative">
                  <motion.div
                    className="absolute top-1/2 -ml-1 w-2 h-2 rounded-full bg-blue-500 transform -translate-y-1/2 shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                    animate={{ left: ["0%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.75 }}
                  />
                </div>
              </div>

              {/* 03 BUSINESS OUTCOMES */}
              <div className="flex-1 flex flex-col justify-center relative">
                <div className="text-[10px] text-[#98A3B3] font-mono tracking-widest mb-4">03 BUSINESS OUTCOMES</div>
                <div className="space-y-3 relative z-10">
                  {[
                    { label: "Update CRM",        icon: ShieldCheck },
                    { label: "Notify Teams",      icon: Workflow },
                    { label: "Generate Reports",  icon: Cpu },
                  ].map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.08 }}
                      className="flex items-center gap-3 p-3 bg-gradient-to-r from-[#1a2540] to-[#12182B] border border-white/[0.04] rounded-lg text-xs text-[#aaa] hover:border-brand-emerald/20 hover:text-white transition-colors">
                      <item.icon size={14} className="text-[#B8C2CE]" />
                      {item.label}
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
