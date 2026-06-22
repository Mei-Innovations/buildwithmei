'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight, ChevronRight, Activity, Command, Layers, Database, Lock, ShieldAlert, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const WA = "https://wa.me/923338944489?text=Hi%20MEI%20Innovations%2C%20I'd%20like%20to%20discuss%20a%20project.";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100vh] flex flex-col items-center justify-center pt-28 pb-20 overflow-hidden bg-[#0B1020]">

      {/* Parallax background layer */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)'
        }} />
        {/* Slowly rotating MEI watermark */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
            className="w-[700px] h-[700px] opacity-[0.03]"
            animate={{ rotate: [0, 360] }} transition={{ duration: 120, repeat: Infinity, ease: "linear" }}>
            <path d="M50 22 L65 30.66 L50 39.32 L35 30.66 Z" fill="#4D8B72" />
            <path d="M50 4 L86 24.78 L71 33.44 L50 21.32 L29 33.44 L14 24.78 Z" fill="#4D8B72" />
            <path d="M11 29 L47 49.78 L47 91.34 L31 82.1 L31 61 L27 58.7 L27 79.8 L11 70.56 Z" fill="#4D8B72" />
            <path d="M89 29 L53 49.78 L53 91.34 L69 82.1 L69 61 L73 58.7 L73 79.8 L89 70.56 Z" fill="#4D8B72" />
          </motion.svg>
        </div>
        <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-[#4D8B72]/8 blur-[160px] rounded-full" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-[#4D8B72]/5 blur-[120px] rounded-full" />
        {/* Extra ambient particles */}
        <motion.div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-brand-emerald/40"
          animate={{ y: [-10, 10, -10], opacity: [0.4, 0.8, 0.4] }} transition={{ duration: 5, repeat: Infinity }} />
        <motion.div className="absolute top-1/3 left-1/5 w-1.5 h-1.5 rounded-full bg-brand-emerald/30"
          animate={{ y: [8, -8, 8], opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 7, repeat: Infinity, delay: 1 }} />
        <motion.div className="absolute bottom-1/3 right-1/5 w-1 h-1 rounded-full bg-brand-emerald/50"
          animate={{ y: [-6, 6, -6], opacity: [0.5, 1, 0.5] }} transition={{ duration: 4, repeat: Infinity, delay: 2 }} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center justify-center text-center">

        {/* Badge */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-brand-emerald/20 bg-brand-emerald/5 text-xs font-mono tracking-wide mb-10 cursor-default">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-emerald" />
          </span>
          <span className="text-brand-emerald uppercase tracking-widest">Trusted worldwide since 2014</span>
          <span className="w-[1px] h-3 bg-white/20" />
          <span className="text-[#888]">New business to full enterprise</span>
        </motion.div>

        {/* Headline */}
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-display font-medium tracking-tight text-white max-w-5xl leading-[1.04] text-balance mb-6">
          Technology for every<br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#6DB898] via-[#4D8B72] to-[#2A4F41]"> stage of business.</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-[#888] max-w-2xl mb-4 font-light leading-relaxed">
          From your first professional website to full AI automation — MEI builds the right technology for where your business is right now, and scales with you as it grows.
        </motion.p>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.35 }}
          className="text-sm text-[#555] font-mono mb-12">
          Est. 2014 · Clients worldwide · Custom-built, not templated
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mb-5">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link href="/contact" className="h-13 px-7 py-3.5 rounded-md bg-brand-emerald text-white font-semibold flex items-center justify-center gap-2 hover:bg-[#3d7260] transition-all shadow-[0_0_30px_rgba(77,139,114,0.3)] text-base w-full sm:w-auto">
              Book a Free Strategy Call <ArrowRight size={16} />
            </Link>
          </motion.div>
          <motion.a href={WA} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            className="h-13 px-7 py-3.5 rounded-md bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-semibold flex items-center justify-center gap-2 hover:bg-[#25D366] hover:text-white transition-all text-base w-full sm:w-auto">
            <MessageCircle size={16} /> Chat on WhatsApp
          </motion.a>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link href="/services" className="h-13 px-7 py-3.5 rounded-md border border-white/10 bg-[#12182B] text-[#ccc] font-medium flex items-center justify-center gap-2 hover:bg-[#1a2333] hover:text-white transition-all text-base w-full sm:w-auto">
              See What We Build <ChevronRight size={16} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          className="text-xs text-[#444] font-mono">
          No commitment · Free 30-min call · We start where you are
        </motion.p>

        {/* ─── ECOSYSTEM DIAGRAM (alignment fixed) ─── */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="w-full max-w-[1000px] mx-auto mt-20 relative hidden sm:block">

          <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand-emerald/30 to-transparent" />

          <div className="relative rounded-xl border border-white/[0.05] bg-[#0B1020]/80 shadow-[0_20px_60px_-20px_rgba(0,0,0,1)] p-2 md:p-3 overflow-hidden">
            <div className="rounded-lg border border-white/[0.04] bg-[#0B1020] overflow-hidden">

              {/* Title bar */}
              <div className="h-12 border-b border-white/[0.04] flex items-center justify-between px-5 bg-[#12182B]">
                <div className="flex items-center gap-4">
                  <div className="flex gap-1.5 opacity-40">{[0,1,2].map(i=><div key={i} className="w-2.5 h-2.5 rounded-full bg-white/20"/>)}</div>
                  <span className="text-[10px] uppercase font-mono text-[#555] tracking-widest">MEI Operational Ecosystem</span>
                </div>
                <span className="text-[10px] font-mono text-brand-emerald uppercase tracking-widest flex items-center gap-2 bg-brand-emerald/10 px-2.5 py-1 rounded-sm border border-brand-emerald/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse"/> Live
                </span>
              </div>

              {/* Diagram body */}
              <div className="relative flex items-center justify-between px-10 py-12 gap-6 overflow-hidden" style={{minHeight:'340px'}}>

                <style dangerouslySetInnerHTML={{__html:`
                  @keyframes eco-flow{from{stroke-dashoffset:120}to{stroke-dashoffset:0}}
                  .dp{stroke-dasharray:5 7;animation:eco-flow 2.5s linear infinite}
                  .dp2{stroke-dasharray:5 7;animation:eco-flow 2.5s 1.2s linear infinite}
                  @keyframes fnode{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
                  .fn1{animation:fnode 4s ease-in-out infinite}
                  .fn2{animation:fnode 4s 1.3s ease-in-out infinite}
                  .fn3{animation:fnode 4s 2.6s ease-in-out infinite}
                `}}/>

                {/* LEFT COLUMN — fixed width so all boxes are identical size */}
                <div className="flex flex-col gap-4 z-10" style={{width:'190px', flexShrink:0}}>
                  {[
                    {name:"Client Portals",    icon:Lock,      c:"fn1"},
                    {name:"Ecommerce Data",    icon:Activity,  c:"fn2"},
                    {name:"Business CRM",      icon:Database,  c:"fn3"},
                  ].map((n,i)=>(
                    <div key={i} className={`${n.c} flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-[#12182B] to-[#0B1020] border border-white/[0.05] rounded-lg hover:border-brand-emerald/25 transition-colors duration-500 group w-full`}>
                      <div className="w-8 h-8 rounded border border-white/[0.05] bg-[#0B1020] flex items-center justify-center shrink-0">
                        <n.icon size={14} className="text-[#555] group-hover:text-brand-emerald transition-colors duration-300"/>
                      </div>
                      <span className="text-[11px] text-[#777] font-mono group-hover:text-white transition-colors duration-300">{n.name}</span>
                    </div>
                  ))}
                </div>

                {/* CENTER — engine with orbiting rings */}
                <div className="relative flex items-center justify-center z-10 flex-shrink-0" style={{width:'180px',height:'180px'}}>
                  <motion.div animate={{rotate:360}} transition={{duration:40,repeat:Infinity,ease:"linear"}}
                    className="absolute w-[240px] h-[240px] rounded-full border border-dashed border-white/[0.04]"/>
                  <motion.div animate={{rotate:-360}} transition={{duration:65,repeat:Infinity,ease:"linear"}}
                    className="absolute w-[300px] h-[300px] rounded-full border border-white/[0.02]"/>
                  {/* Orbit dot */}
                  <motion.div
                    className="absolute w-2 h-2 rounded-full bg-brand-emerald/60 shadow-[0_0_6px_rgba(77,139,114,0.8)]"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: '0 -120px', top: '50%', left: '50%', marginTop: '-4px', marginLeft: '-4px' }}
                  />
                  <motion.div
                    className="w-28 h-28 rounded-2xl bg-gradient-to-br from-[#12182B] to-[#0B1020] border border-white/[0.05] flex flex-col items-center justify-center"
                    animate={{boxShadow:["0 0 20px -8px rgba(77,139,114,0.15)","0 0 55px -8px rgba(77,139,114,0.4)","0 0 20px -8px rgba(77,139,114,0.15)"]}}
                    transition={{duration:3,repeat:Infinity}}>
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 mb-2 drop-shadow-[0_0_8px_rgba(77,139,114,0.5)]">
                      <path d="M50 22 L65 30.66 L50 39.32 L35 30.66 Z" fill="#34D399"/>
                      <path d="M50 4 L86 24.78 L71 33.44 L50 21.32 L29 33.44 L14 24.78 Z" fill="#34D399"/>
                      <path d="M11 29 L47 49.78 L47 91.34 L31 82.1 L31 61 L27 58.7 L27 79.8 L11 70.56 Z" fill="#10B981"/>
                      <path d="M89 29 L53 49.78 L53 91.34 L69 82.1 L69 61 L73 58.7 L73 79.8 L89 70.56 Z" fill="#064E3B"/>
                    </svg>
                    <span className="text-[8px] font-mono tracking-widest text-[#666]">MEI ENGINE</span>
                  </motion.div>
                </div>

                {/* RIGHT COLUMN — same fixed width */}
                <div className="flex flex-col gap-4 z-10" style={{width:'190px', flexShrink:0}}>
                  {[
                    {name:"Financial Dashboards", icon:Command,    c:"fn3"},
                    {name:"Operational Reports",  icon:ShieldAlert, c:"fn1"},
                    {name:"Custom Applications",  icon:Layers,     c:"fn2"},
                  ].map((n,i)=>(
                    <div key={i} className={`${n.c} flex flex-row-reverse items-center gap-3 px-4 py-3 bg-gradient-to-l from-[#12182B] to-[#0B1020] border border-white/[0.05] rounded-lg hover:border-brand-emerald/25 transition-colors duration-500 group w-full`}>
                      <div className="w-8 h-8 rounded border border-white/[0.05] bg-[#0B1020] flex items-center justify-center shrink-0">
                        <n.icon size={14} className="text-[#555] group-hover:text-brand-emerald transition-colors duration-300"/>
                      </div>
                      <span className="text-[11px] text-[#777] font-mono group-hover:text-white transition-colors duration-300 text-right">{n.name}</span>
                    </div>
                  ))}
                </div>

                {/* SVG connection lines — coordinates matched to fixed-width layout */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 900 340" preserveAspectRatio="none">
                  {/* Left nodes → center (x=190 → x=360) */}
                  <path d="M 195 85  C 290 85,  310 170, 360 170" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1.5"/>
                  <path d="M 195 85  C 290 85,  310 170, 360 170" fill="none" stroke="#4D8B72" strokeWidth="1" className="dp"/>

                  <path d="M 195 170 L 360 170" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1.5"/>
                  <path d="M 195 170 L 360 170" fill="none" stroke="#4D8B72" strokeWidth="1" className="dp2"/>

                  <path d="M 195 255 C 290 255, 310 170, 360 170" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1.5"/>
                  <path d="M 195 255 C 290 255, 310 170, 360 170" fill="none" stroke="#4D8B72" strokeWidth="1" className="dp"/>

                  {/* Center → right nodes (x=540 → x=705) */}
                  <path d="M 540 170 C 590 170, 610 85,  705 85" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1.5"/>
                  <path d="M 540 170 C 590 170, 610 85,  705 85" fill="none" stroke="#4D8B72" strokeWidth="1" className="dp2"/>

                  <path d="M 540 170 L 705 170" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1.5"/>
                  <path d="M 540 170 L 705 170" fill="none" stroke="#4D8B72" strokeWidth="1" className="dp"/>

                  <path d="M 540 170 C 590 170, 610 255, 705 255" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1.5"/>
                  <path d="M 540 170 C 590 170, 610 255, 705 255" fill="none" stroke="#4D8B72" strokeWidth="1" className="dp2"/>
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
