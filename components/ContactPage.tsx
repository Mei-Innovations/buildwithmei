'use client';

import { motion } from 'motion/react';
import { Mail, MessageCircle, Phone, Clock, Globe, ArrowRight, Instagram, Facebook, Linkedin } from 'lucide-react';

const WA = "https://wa.me/923338944489?text=Hi%20MEI%20Innovations%2C%20I'd%20like%20to%20discuss%20a%20project.";
const WA_CALL = "tel:+923338944489";

export function ContactPage() {
  return (
    <section className="pt-32 pb-24 relative bg-[#0B1020] min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <div className="text-sm font-mono tracking-widest text-[#555] uppercase mb-4">Get In Touch</div>
          <h1 className="text-5xl md:text-6xl font-display font-medium text-white tracking-tight text-balance mb-5">
            Let's talk about<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#6DB898] via-[#4D8B72] to-[#2A4F41]">your business.</span>
          </h1>
          <p className="text-xl text-[#666] font-light max-w-2xl leading-relaxed">
            No sales pitch. No commitment. Just a real conversation about what you're building and whether we can help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* WhatsApp — primary */}
          <motion.a href={WA} target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            className="group relative flex flex-col p-8 rounded-2xl bg-[#25D366]/8 border border-[#25D366]/25 hover:bg-[#25D366]/15 hover:border-[#25D366]/50 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,211,102,0.06),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 flex items-center justify-center mb-5">
                <MessageCircle size={24} className="text-[#25D366]" />
              </div>
              <div className="text-xs font-mono text-[#25D366] uppercase tracking-widest mb-2">Fastest Response</div>
              <h3 className="text-xl font-display font-medium text-white mb-2">Chat on WhatsApp</h3>
              <p className="text-sm text-[#666] font-light mb-5 leading-relaxed">Message us directly. We typically respond within a few hours. Great for quick questions or to start a conversation about a project.</p>
              <div className="flex items-center gap-2 text-[#25D366] font-medium text-sm">
                Message us directly <ArrowRight size={14} />
              </div>
            </div>
          </motion.a>

          {/* Call */}
          <motion.a href={WA_CALL}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            className="group relative flex flex-col p-8 rounded-2xl bg-[#12182B] border border-white/5 hover:border-brand-emerald/20 transition-all duration-300 overflow-hidden">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-brand-emerald/10 border border-brand-emerald/20 flex items-center justify-center mb-5">
                <Phone size={24} className="text-brand-emerald" />
              </div>
              <h3 className="text-xl font-display font-medium text-white mb-2">Call Us Directly</h3>
              <p className="text-sm text-[#666] font-light mb-5 leading-relaxed">Prefer a phone call? Reach us directly. We're available for calls during business hours across time zones.</p>
              <div className="flex items-center gap-2 text-brand-emerald font-medium text-sm">
                Available for direct calls <ArrowRight size={14} />
              </div>
            </div>
          </motion.a>

          {/* Email */}
          <motion.a href="mailto:info@buildwithmei.com?subject=Project%20Enquiry%20—%20MEI%20Innovations&body=Hi%20MEI%20team%2C%0A%0AI'd%20like%20to%20discuss%20a%20project.%0A%0AAbout%20my%20business%3A%0A%0AWhat%20I%20need%20help%20with%3A%0A%0AMy%20budget%20range%3A%0A%0ATimeline%3A"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            className="group relative flex flex-col p-8 rounded-2xl bg-[#12182B] border border-white/5 hover:border-brand-emerald/20 transition-all duration-300">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-brand-emerald/10 border border-brand-emerald/20 flex items-center justify-center mb-5">
                <Mail size={24} className="text-brand-emerald" />
              </div>
              <h3 className="text-xl font-display font-medium text-white mb-2">Send an Email</h3>
              <p className="text-sm text-[#666] font-light mb-5 leading-relaxed">Tell us about your project. We'll review it carefully and come back with thoughts, ideas, and an honest assessment of how we can help.</p>
              <div className="flex items-center gap-2 text-brand-emerald font-medium text-sm font-mono">
                info@buildwithmei.com <ArrowRight size={14} />
              </div>
            </div>
          </motion.a>

          {/* Book strategy call */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
            className="group relative flex flex-col p-8 rounded-2xl bg-brand-emerald/8 border border-brand-emerald/20 hover:bg-brand-emerald/12 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(77,139,114,0.08),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-brand-emerald/15 flex items-center justify-center mb-5">
                <Clock size={24} className="text-brand-emerald" />
              </div>
              <div className="text-xs font-mono text-brand-emerald uppercase tracking-widest mb-2">Free · No commitment</div>
              <h3 className="text-xl font-display font-medium text-white mb-2">30-Minute Strategy Call</h3>
              <p className="text-sm text-[#666] font-light mb-5 leading-relaxed">The most effective way to get started. We'll review your operations, identify what technology can fix, and give you a clear recommendation — no fluff.</p>
              <a href="mailto:info@buildwithmei.com?subject=Strategy%20Call%20Request&body=Hi%20MEI%2C%0A%0AI'd%20like%20to%20book%20a%20free%20strategy%20call.%0A%0AMy%20business%3A%0A%0AWhat%20I'm%20trying%20to%20solve%3A%0A%0ABest%20time%20to%20call%3A"
                className="inline-flex items-center gap-2 text-brand-emerald font-medium text-sm hover:text-white transition-colors">
                Request a call slot → info@buildwithmei.com
              </a>
            </div>
          </motion.div>
        </div>


        {/* Social channels */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex items-center gap-4 mb-6">
          <span className="text-xs text-[#444] font-mono uppercase tracking-widest">Follow us</span>
          <div className="flex gap-3">
            {[
              { href: "https://www.instagram.com/mei.innovations/", icon: Instagram, label: "Instagram", color: "hover:text-[#E1306C] hover:border-[#E1306C]/30" },
              { href: "https://www.facebook.com/meiinnovations", icon: Facebook, label: "Facebook", color: "hover:text-[#1877F2] hover:border-[#1877F2]/30" },
              { href: "https://linkedin.com/company/mei-innovations", icon: Linkedin, label: "LinkedIn", color: "hover:text-[#0A66C2] hover:border-[#0A66C2]/30" },
              { href: "https://wa.me/923338944489", icon: MessageCircle, label: "WhatsApp", color: "hover:text-[#25D366] hover:border-[#25D366]/30" },
            ].map((s,i) => (
              <motion.a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                className={`w-10 h-10 rounded-lg bg-[#12182B] border border-white/5 flex items-center justify-center text-[#888] transition-all duration-300 ${s.color}`}
                aria-label={s.label}>
                <s.icon size={16} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Global presence note */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="flex items-start gap-4 p-6 rounded-xl bg-[#12182B] border border-white/5">
          <Globe size={20} className="text-brand-emerald shrink-0 mt-0.5" />
          <div>
            <div className="text-white font-medium text-sm mb-1">Working with clients worldwide</div>
            <p className="text-xs text-[#555] font-light leading-relaxed">
              MEI has served businesses across the globe since 2014. We work async-first and accommodate clients across all major time zones. Wherever you are, we can work together.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
