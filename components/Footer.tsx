'use client';

import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mail, MessageCircle, Instagram, Facebook, CalendarCheck } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '@/components/Logo';

const WA = "https://wa.me/41779513495?text=Hi%20MEI%20Innovations%2C%20I'd%20like%20to%20discuss%20a%20project.";
const IG = "https://www.instagram.com/mei.innovations/";
const FB = "https://www.facebook.com/meiinnovations";

export function CTA({
  heading = <>Ready to transform how<br/>your business operates?</>,
  subtitle = "Let's explore where AI, automation, and digital systems can create measurable improvements.",
}: {
  heading?: ReactNode;
  subtitle?: string;
}) {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-[#0B1020] border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(77,139,114,0.1),transparent_70%)] pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.025] pointer-events-none select-none">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[600px] h-[600px]">
          <path d="M50 22 L65 30.66 L50 39.32 L35 30.66 Z" fill="#4D8B72" />
          <path d="M50 4 L86 24.78 L71 33.44 L50 21.32 L29 33.44 L14 24.78 Z" fill="#4D8B72" />
          <path d="M11 29 L47 49.78 L47 91.34 L31 82.1 L31 61 L27 58.7 L27 79.8 L11 70.56 Z" fill="#4D8B72" />
          <path d="M89 29 L53 49.78 L53 91.34 L69 82.1 L69 61 L73 58.7 L73 79.8 L89 70.56 Z" fill="#4D8B72" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="text-[10px] font-mono tracking-widest text-[#98A3B3] uppercase mb-6">Start the conversation</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white mb-6 tracking-tight text-balance">
            {heading}
          </h2>
          <p className="text-lg text-[#B8C2CE] font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <a href="https://calendly.com/mei-innovations/30min" target="_blank" rel="noopener noreferrer" className="h-13 px-8 py-4 rounded-md bg-brand-emerald text-white font-semibold flex items-center justify-center gap-2 hover:bg-[#3d7260] transition-all shadow-[0_0_40px_rgba(77,139,114,0.3)] text-base">
                <CalendarCheck size={16} /> Start a Transformation <ArrowRight size={16} />
              </a>
            </motion.div>
            <motion.a href={WA} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className="h-13 px-8 py-4 rounded-md bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-semibold flex items-center justify-center gap-2 hover:bg-[#25D366] hover:text-white transition-all text-base">
              <MessageCircle size={16} /> Discuss Your Project
            </motion.a>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 text-xs text-[#8D98A8] font-mono">
            <span>✓ No commitment required</span>
            <span>✓ New business or established</span>
            <span>✓ International clients</span>
          </div>
          <div className="mt-8 flex items-center justify-center">
            <a href="mailto:info@buildwithmei.com" className="flex items-center gap-2 hover:text-brand-emerald transition-colors font-mono text-sm text-[#98A3B3]">
              <Mail size={13} /> info@buildwithmei.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#080B14] pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">

          {/* Brand col */}
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-3 mb-6 w-fit group">
              <div className="w-8 h-8 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-brand-emerald/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <Logo className="w-full h-full relative z-10" />
              </div>
              <span className="font-display font-medium text-xl tracking-tight text-white group-hover:text-brand-emerald transition-colors duration-300">
                MEI <span className="opacity-50 font-normal text-lg">Innovations</span>
              </span>
            </Link>
            <p className="text-sm text-[#B8C1CD] font-light leading-relaxed mb-1">Modern Ecosystem Intelligence.</p>
            <p className="text-xs text-[#B8C2CE] font-light mb-6">Serving businesses globally through AI, automation, and digital transformation.</p>

            {/* Email only — number hidden */}
            <a href="mailto:info@buildwithmei.com" className="flex items-center gap-2 text-sm text-[#B0BAC7] hover:text-brand-emerald transition-colors font-mono mb-4">
              <Mail size={13} /> info@buildwithmei.com
            </a>

            {/* Social icons row */}
            <div className="flex items-center gap-3">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#12182B] border border-white/5 flex items-center justify-center text-[#B0BAC7] hover:text-[#25D366] hover:border-[#25D366]/30 transition-all duration-300"
                aria-label="WhatsApp">
                <MessageCircle size={15} />
              </a>
              <a href={IG} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#12182B] border border-white/5 flex items-center justify-center text-[#B0BAC7] hover:text-[#E1306C] hover:border-[#E1306C]/30 transition-all duration-300"
                aria-label="Instagram">
                <Instagram size={15} />
              </a>
              <a href={FB} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#12182B] border border-white/5 flex items-center justify-center text-[#B0BAC7] hover:text-[#1877F2] hover:border-[#1877F2]/30 transition-all duration-300"
                aria-label="Facebook">
                <Facebook size={15} />
              </a>
            </div>
          </div>

          {/* Nav cols */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-20">
            <div>
              <h4 className="text-white font-medium mb-5 text-sm">
                <Link href="/services" className="hover:text-brand-emerald transition-colors">Services</Link>
              </h4>
              <ul className="space-y-3 text-sm text-[#B0BAC7] font-light">
                {["AI & Automation","Web Development","CRM & Business Systems","Ecommerce Development","Client Portals","Digital Transformation"].map(s => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-5 text-sm">Company</h4>
              <ul className="space-y-3 text-sm text-[#B0BAC7] font-light">
                {[
                  { label: "About", href: "/about" },
                  { label: "Solutions", href: "/services" },
                  { label: "Industries", href: "/who-we-serve" },
                  { label: "Markets", href: "/markets" },
                  { label: "Work", href: "/work" },
                  { label: "How It Works", href: "/how-it-works" },
                  { label: "Careers", href: "/careers" },
                  { label: "Contact", href: "/contact" },
                ].map(c => (
                  <li key={c.label}><Link href={c.href} className="hover:text-white transition-colors">{c.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className="hidden lg:block">
              <h4 className="text-white font-medium mb-5 text-sm">Get Started</h4>
              <p className="text-sm text-[#B8C2CE] font-light leading-relaxed mb-4">Free 30-minute strategy session. No commitment. We start where you are.</p>
              <a href="https://calendly.com/mei-innovations/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-brand-emerald hover:text-white transition-colors font-medium">
                Book Strategy Session <ArrowRight size={13} />
              </a>
              <div className="mt-4">
                <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-[#25D366] hover:text-white transition-colors">
                  <MessageCircle size={13} /> WhatsApp us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar — copyright removed, tagline only */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* Social mini-row repeated for mobile visibility */}
            <a href={IG} target="_blank" rel="noopener noreferrer" className="text-xs text-[#98A3B3] hover:text-[#E1306C] transition-colors font-mono">Instagram</a>
            <span className="text-[#333]">·</span>
            <a href={FB} target="_blank" rel="noopener noreferrer" className="text-xs text-[#98A3B3] hover:text-[#1877F2] transition-colors font-mono">Facebook</a>
          </div>
          <div className="text-xs text-[#8D98A8] font-mono tracking-widest uppercase">Innovate · Integrate · Elevate</div>
        </div>
      </div>
    </footer>
  );
}
