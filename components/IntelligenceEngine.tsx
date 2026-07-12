'use client';

import { Fragment } from 'react';
import { motion } from 'motion/react';
import { Radio, BrainCircuit, Zap, ArrowRight } from 'lucide-react';
import { SITE } from '@/lib/site';

/**
 * MEI Intelligence Engine™ — signature homepage moment.
 * Represents MEI's methodology: one intelligent layer connecting
 * business systems, people, data, automation, and technology.
 * Pure SVG + SMIL — zero additional bundle cost.
 */

const nodes = [
  { x: 180, y: 110, label: 'Customers', sub: 'PORTALS · CX' },
  { x: 680, y: 110, label: 'Teams', sub: 'HUMAN + AI WORKFORCE' },
  { x: 110, y: 260, label: 'Data', sub: 'ONE SOURCE OF TRUTH' },
  { x: 750, y: 260, label: 'Operations', sub: 'WORKFLOWS' },
  { x: 180, y: 410, label: 'Physical Environments', sub: 'VISION · IOT' },
  { x: 680, y: 410, label: 'Business Systems', sub: 'CRM · ERP · COMMERCE' },
];

const paths = [
  'M180,110 Q300,140 430,260',
  'M680,110 Q560,140 430,260',
  'M110,260 Q270,235 430,260',
  'M430,260 Q590,235 750,260',
  'M180,410 Q300,380 430,260',
  'M430,260 Q560,380 680,410',
];

const particles = [
  { path: paths[0], dur: '2.8s', begin: '0s', r: 3 },
  { path: paths[0], dur: '3.6s', begin: '1s', r: 2.2 },
  { path: paths[1], dur: '3.1s', begin: '0.4s', r: 3 },
  { path: paths[2], dur: '2.6s', begin: '0.8s', r: 3 },
  { path: paths[3], dur: '2.9s', begin: '0.2s', r: 3 },
  { path: paths[3], dur: '3.8s', begin: '1.4s', r: 2.2 },
  { path: paths[4], dur: '3.3s', begin: '0.6s', r: 3 },
  { path: paths[5], dur: '2.7s', begin: '1.1s', r: 3 },
];

const flow = [
  { icon: Radio, title: 'Signals', desc: 'Customers, systems, sensors, and spaces generate continuous signals.' },
  { icon: BrainCircuit, title: 'AI Processing', desc: 'The Engine interprets, decides, and routes — in real time.' },
  { icon: Zap, title: 'Business Action', desc: 'Workflows execute, teams are informed, customers are served.' },
];

export function IntelligenceEngine() {
  return (
    <section id="intelligence-engine" className="py-32 relative bg-[#0A0D1A] z-10 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(77,139,114,0.06),transparent_65%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto">
          <div className="text-sm font-mono tracking-widest text-brand-emerald uppercase mb-4">What MEI Means</div>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-6 tracking-tight text-balance">
            Connecting the systems<br/>behind modern businesses.
          </h2>
          <p className="text-lg text-[#B8C2CE] font-light leading-relaxed">
            Most businesses run on disconnected tools — one system for sales, another for operations, another
            for reporting, held together by manual work. MEI closes those gaps, connecting intelligent systems,
            operational infrastructure, and connected workflows into one digital foundation.
          </p>
        </motion.div>

        {/* Ecosystem diagram — full version, tablet and up (SVG text becomes illegible below ~640px) */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.15 }} className="max-w-4xl mx-auto mb-16 hidden sm:block">
          <svg viewBox="0 0 860 520" xmlns="http://www.w3.org/2000/svg" role="img" className="w-full h-auto"
            aria-label="Diagram of the MEI Intelligence Engine connecting customers, teams, data, operations, physical environments, and business systems">
            <defs>
              <radialGradient id="engineCore" cx="50%" cy="42%" r="65%">
                <stop offset="0%" stopColor="rgba(109,184,152,0.28)" />
                <stop offset="100%" stopColor="rgba(109,184,152,0)" />
              </radialGradient>
              <linearGradient id="engineCubeTop" x1="430" y1="204" x2="430" y2="240" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6DB898" />
                <stop offset="1" stopColor="#3d8a68" />
              </linearGradient>
              <linearGradient id="engineCubeLeft" x1="384" y1="219" x2="426" y2="292" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4D8B72" />
                <stop offset="1" stopColor="#2d5540" />
              </linearGradient>
              <linearGradient id="engineCubeRight" x1="432" y1="219" x2="474" y2="292" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3d8a68" />
                <stop offset="1" stopColor="#1f3b2c" />
              </linearGradient>
              <filter id="engineCubeGlow" x="-40%" y="-40%" width="180%" height="180%">
                <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#047857" floodOpacity="0.5" />
              </filter>
            </defs>

            {paths.map((d, i) => (
              <path key={i} d={d} fill="none" stroke="rgba(220,231,225,0.13)" strokeWidth="1.2" />
            ))}

            {particles.map((p, i) => (
              <circle key={i} r={p.r} fill={p.r === 3 ? '#6DB898' : '#8FD4B4'} opacity={p.r === 3 ? 0.9 : 0.7}>
                <animateMotion dur={p.dur} begin={p.begin} repeatCount="indefinite" path={p.path} />
              </circle>
            ))}

            {/* Core — energy field rings around the cube */}
            <circle cx="430" cy="260" r="98" fill="none" stroke="rgba(109,184,152,0.2)" strokeWidth="1">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="430" cy="260" r="80" fill="none" stroke="rgba(109,184,152,0.35)" strokeWidth="1" strokeDasharray="3 9">
              <animateTransform attributeName="transform" type="rotate" from="0 430 260" to="360 430 260" dur="26s" repeatCount="indefinite" />
            </circle>
            <circle cx="430" cy="260" r="86" fill="none" stroke="rgba(220,231,225,0.07)" strokeWidth="1" />
            <circle cx="430" cy="260" r="62" fill="url(#engineCore)" />

            {/* The actual MEI cube mark, at the center of the Engine */}
            <g filter="url(#engineCubeGlow)" transform="translate(430,260) scale(1.05)">
              <animateTransform attributeName="transform" type="scale" values="1.05;1.1;1.05" additive="sum"
                dur="3.4s" repeatCount="indefinite" />
              <g transform="translate(-50,-48)">
                <path d="M50 22 L65 30.66 L50 39.32 L35 30.66 Z" fill="url(#engineCubeTop)" />
                <path d="M50 4 L86 24.78 L71 33.44 L50 21.32 L29 33.44 L14 24.78 Z" fill="url(#engineCubeTop)" />
                <path d="M11 29 L47 49.78 L47 91.34 L31 82.1 L31 61 L27 58.7 L27 79.8 L11 70.56 Z" fill="url(#engineCubeLeft)" />
                <path d="M89 29 L53 49.78 L53 91.34 L69 82.1 L69 61 L73 58.7 L73 79.8 L89 70.56 Z" fill="url(#engineCubeRight)" />
              </g>
            </g>
            <text x="430" y="342" textAnchor="middle" fill="#DCE7E1" fontSize="11" fontWeight="600" fontFamily="inherit" letterSpacing="0.02em">MEI Intelligence Engine™</text>

            {/* Nodes */}
            {nodes.map((n, i) => (
              <g key={i}>
                <rect x={n.x - 70} y={n.y - 28} width="140" height="56" rx="12" fill="#12182B" stroke="rgba(220,231,225,0.14)" />
                <text x={n.x} y={n.y - 4} textAnchor="middle" fill="#DCE7E1" fontSize={n.label.length > 16 ? 11 : 13} fontWeight="600" fontFamily="inherit">{n.label}</text>
                <text x={n.x} y={n.y + 13} textAnchor="middle" fill="#8A94A5" fontSize="8.5" letterSpacing="0.08em" fontFamily="monospace">{n.sub}</text>
              </g>
            ))}
          </svg>
        </motion.div>

        {/* Mobile fallback — same cube, but sized and labeled with real HTML text
            instead of a scaled-down SVG (node/caption text becomes illegible below ~640px) */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.15 }} className="sm:hidden mb-14 flex flex-col items-center">
          <div className="relative w-40 h-40 mb-5">
            <div className="absolute inset-0 rounded-full" style={{ background: 'radial-gradient(circle, rgba(109,184,152,0.28) 0%, transparent 70%)' }} />
            <motion.div
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 drop-shadow-[0_4px_16px_rgba(4,120,87,0.5)]">
                <path d="M50 22 L65 30.66 L50 39.32 L35 30.66 Z" fill="#6DB898" />
                <path d="M50 4 L86 24.78 L71 33.44 L50 21.32 L29 33.44 L14 24.78 Z" fill="#6DB898" />
                <path d="M11 29 L47 49.78 L47 91.34 L31 82.1 L31 61 L27 58.7 L27 79.8 L11 70.56 Z" fill="#4D8B72" />
                <path d="M89 29 L53 49.78 L53 91.34 L69 82.1 L69 61 L73 58.7 L73 79.8 L89 70.56 Z" fill="#2A4F41" />
              </svg>
            </motion.div>
          </div>
          <div className="text-sm font-medium text-[#DCE7E1] tracking-tight mb-6">MEI Intelligence Engine™</div>
          <div className="flex flex-wrap justify-center gap-2 max-w-sm">
            {nodes.map((n, i) => (
              <span key={i} className="text-[11px] text-[#B8C2CE] font-mono px-3 py-1.5 rounded-full bg-[#12182B] border border-white/[0.08]">
                {n.label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Signals → AI Processing → Business Action */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-4 max-w-4xl mx-auto mb-14">
          {flow.map((f, i) => (
            <Fragment key={f.title}>
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.12 }}
                className="text-center p-6 rounded-xl bg-[#12182B]/70 border border-white/[0.05]">
                <div className="w-9 h-9 rounded-lg bg-brand-emerald/10 border border-brand-emerald/20 flex items-center justify-center mx-auto mb-3">
                  <f.icon size={17} className="text-brand-emerald" strokeWidth={1.5} />
                </div>
                <div className="text-xs font-mono text-brand-emerald uppercase tracking-widest mb-2">{f.title}</div>
                <p className="text-xs text-[#B8C2CE] font-light leading-relaxed">{f.desc}</p>
              </motion.div>
              {i < flow.length - 1 && (
                <div className="hidden md:flex items-center justify-center text-brand-emerald/50">
                  <ArrowRight size={18} />
                </div>
              )}
            </Fragment>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center">
          <p className="text-[#98A3B3] text-sm mb-5 font-light">Every MEI project — from a first platform to a full automation build — is built on this same connected foundation.</p>
          <a href={SITE.calendly} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-brand-emerald hover:text-white transition-colors font-medium">
            See what this could connect in your business <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
