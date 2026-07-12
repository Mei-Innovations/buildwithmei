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

      {/* Layer 2b — breathing intelligence-core glow (the "alive" signal) */}
      <motion.div
        className="absolute z-[1] rounded-full pointer-events-none"
        style={{
          top: '18%', right: '8%', width: 520, height: 520,
          background: 'radial-gradient(circle, rgba(77,139,114,0.35) 0%, rgba(31,181,201,0.14) 45%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.55, 0.85, 0.55] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Layer 3 — supporting node/data motif, now animated and spread across the full hero (energetic signal flow) */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" className="w-full h-full" style={{ opacity: 0.7 }}>
          <defs>
            <linearGradient id="heroLineFade" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#4D8B72" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#4D8B72" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g stroke="url(#heroLineFade)" strokeWidth="1.2" strokeDasharray="3 7" strokeLinecap="round">
            {[
              { x1: 620, y1: 90, x2: 780, y2: 160 },
              { x1: 780, y1: 160, x2: 860, y2: 140 },
              { x1: 860, y1: 140, x2: 1000, y2: 230 },
              { x1: 1000, y1: 230, x2: 1130, y2: 180 },
              { x1: 1000, y1: 230, x2: 1050, y2: 370 },
              { x1: 1050, y1: 370, x2: 930, y2: 440 },
              { x1: 930, y1: 440, x2: 1090, y2: 520 },
              { x1: 1050, y1: 370, x2: 1160, y2: 410 },
              { x1: 700, y1: 480, x2: 930, y2: 440 },
              { x1: 700, y1: 480, x2: 620, y2: 600 },
              { x1: 620, y1: 600, x2: 780, y2: 660 },
            ].map((l, i) => (
              <motion.line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
                animate={{ strokeDashoffset: [0, -40] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "linear", delay: i * 0.15 }} />
            ))}
          </g>
          <g>
            {[
              { cx: 620, cy: 90, r: 2, color: '#4D8B72' },
              { cx: 780, cy: 160, r: 2.5, color: '#D4A574' },
              { cx: 860, cy: 140, r: 2.5, color: '#4D8B72' },
              { cx: 1000, cy: 230, r: 4, color: '#1FB5C9' },
              { cx: 1130, cy: 180, r: 2, color: '#4D8B72' },
              { cx: 1050, cy: 370, r: 3, color: '#E8745B' },
              { cx: 930, cy: 440, r: 2.5, color: '#4D8B72' },
              { cx: 1090, cy: 520, r: 2.5, color: '#D4A574' },
              { cx: 1160, cy: 410, r: 2, color: '#4D8B72' },
              { cx: 700, cy: 480, r: 3, color: '#1FB5C9' },
              { cx: 620, cy: 600, r: 2, color: '#E8745B' },
              { cx: 780, cy: 660, r: 2.5, color: '#4D8B72' },
            ].map((n, i) => (
              <motion.circle key={i} cx={n.cx} cy={n.cy} r={n.r} fill={n.color}
                animate={{ opacity: [0.45, 1, 0.45], scale: [1, 1.5, 1] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.22 }} />
            ))}
          </g>
        </svg>
      </div>

      {/* Layer 3b — floating signal particles, spread across the full hero width, visible on all breakpoints */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
        {[
          { left: '46%', color: '#4D8B72', size: 4, duration: 6, delay: 0 },
          { left: '55%', color: '#D4A574', size: 3, duration: 7.2, delay: 1.6 },
          { left: '63%', color: '#1FB5C9', size: 4, duration: 6.6, delay: 0.8 },
          { left: '70%', color: '#4D8B72', size: 3, duration: 7, delay: 2.4 },
          { left: '77%', color: '#E8745B', size: 4, duration: 6.5, delay: 1.2 },
          { left: '84%', color: '#4D8B72', size: 3, duration: 8, delay: 0.4 },
          { left: '90%', color: '#1FB5C9', size: 3, duration: 7.5, delay: 3.1 },
          { left: '95%', color: '#D4A574', size: 4, duration: 6.8, delay: 2 },
        ].map((p, i) => (
          <motion.span key={i}
            className="absolute rounded-full"
            style={{ left: p.left, bottom: '-10px', width: p.size, height: p.size, background: p.color, boxShadow: `0 0 10px ${p.color}` }}
            animate={{ y: [0, -460], opacity: [0, 0.95, 0] }}
            transition={{ duration: p.duration, repeat: Infinity, ease: "easeOut", delay: p.delay }}
          />
        ))}
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
            MEI connects your CRM, automation, and customer-facing systems into one operational layer — built, integrated, and supported by one team.
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
