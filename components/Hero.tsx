'use client';

import { motion } from 'motion/react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';

/**
 * Homepage Hero — layered visual system:
 * L1: atmospheric infrastructure/automation photograph
 * L2: dark navy/black gradient overlay + emerald glow
 * L3: subtle node/data motif (supporting detail, not primary visual)
 * No floating image cards, no boxed screenshots.
 */
export function Hero() {
  return (
    <section className="relative min-h-[90vh] min-h-[90dvh] flex items-center overflow-hidden bg-[#0B1020] border-b border-white/[0.06] pt-32 pb-16">

      {/* Layer 1 — atmospheric background photograph */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=75"
          alt=""
          aria-hidden
          className="w-full h-full object-cover"
          style={{ filter: 'saturate(0.7) brightness(0.5) contrast(1.08)' }}
          loading="eager"
        />
      </div>

      {/* Layer 2 — gradient overlay + emerald glow */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: `
            linear-gradient(100deg, rgba(11,16,32,0.97) 0%, rgba(11,16,32,0.90) 34%, rgba(11,16,32,0.58) 64%, rgba(11,16,32,0.78) 100%),
            linear-gradient(0deg, rgba(11,16,32,1) 0%, rgba(11,16,32,0.15) 42%, rgba(11,16,32,0.45) 100%),
            radial-gradient(ellipse 820px 520px at 78% 32%, rgba(77,139,114,0.14), transparent 65%)
          `
        }}
      />

      {/* Layer 3 — supporting node/data motif */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" className="w-full h-full" style={{ opacity: 0.38 }}>
          <defs>
            <linearGradient id="heroLineFade" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#4D8B72" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#4D8B72" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g stroke="url(#heroLineFade)" strokeWidth="1">
            <line x1="860" y1="140" x2="1000" y2="230" />
            <line x1="1000" y1="230" x2="1130" y2="180" />
            <line x1="1000" y1="230" x2="1050" y2="370" />
            <line x1="1050" y1="370" x2="930" y2="440" />
            <line x1="930" y1="440" x2="1090" y2="520" />
            <line x1="1050" y1="370" x2="1160" y2="410" />
          </g>
          <g fill="#6BAF91" opacity="0.6">
            <circle cx="860" cy="140" r="2.5" />
            <circle cx="1000" cy="230" r="3.5" />
            <circle cx="1130" cy="180" r="2" />
            <circle cx="1050" cy="370" r="3" />
            <circle cx="930" cy="440" r="2.5" />
            <circle cx="1090" cy="520" r="2.5" />
            <circle cx="1160" cy="410" r="2" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 text-xs font-mono tracking-widest uppercase text-brand-emerald mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald" style={{ boxShadow: '0 0 0 3px rgba(107,175,145,0.15)' }} />
            Modern Ecosystem Intelligence
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-[3.6rem] font-display font-medium tracking-tight text-white leading-[1.1] mb-6 text-balance">
            Building the intelligence layer<br />
            behind <span className="text-brand-emerald">modern businesses</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-[#B0BAC7] max-w-xl mb-10 font-light leading-relaxed">
            MEI helps ambitious companies transform operations through AI, automation, digital platforms, and intelligent business systems.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-13">
            <a href="https://calendly.com/mei-innovations/30min" target="_blank" rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-md bg-brand-emerald text-white font-semibold flex items-center justify-center gap-2 hover:bg-[#3d7260] transition-all text-[15px]">
              Start a Transformation <ArrowRight size={16} />
            </a>
            <Link href="/services"
              className="px-7 py-3.5 rounded-md border border-white/10 text-[#ccc] font-medium flex items-center justify-center gap-2 hover:border-brand-emerald/40 hover:text-white transition-all text-[15px]">
              Explore Solutions <ChevronRight size={16} />
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center gap-x-7 gap-y-3 pt-7 border-t border-white/[0.08]">
            {['AI Systems', 'Automation', 'Digital Infrastructure', 'Operational Intelligence'].map((label) => (
              <div key={label} className="flex items-center gap-2 text-[13px] text-[#8A97A8]">
                <span className="w-1 h-1 rounded-full bg-brand-emerald/70" />
                {label}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
