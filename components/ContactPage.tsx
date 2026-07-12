'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Mail, MessageCircle, CalendarCheck, Globe, ArrowRight, Instagram, Facebook } from 'lucide-react';
import { SITE } from '@/lib/site';

export function ContactPage() {
  return (
    <section className="pt-32 pb-24 relative bg-[#0B1020] min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <div className="text-sm font-mono tracking-widest text-[#98A3B3] uppercase mb-4">Get In Touch</div>
          <h1 className="text-5xl md:text-6xl font-display font-medium text-white tracking-tight text-balance mb-5">
            Let&apos;s build your<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#6DB898] via-[#4D8B72] to-[#2A4F41]">intelligent ecosystem.</span>
          </h1>
          <p className="text-xl text-[#B8C2CE] font-light max-w-2xl leading-relaxed">
            No sales pitch. No commitment. A real conversation about where your business is — and what intelligent technology can do for it.
          </p>
        </motion.div>

        {/* How a session works */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {[
            { n: '01', t: 'Understand your business', d: 'Where you are, how you operate, what holds you back.' },
            { n: '02', t: 'Identify opportunities', d: 'Where intelligence and automation change your outcome fastest.' },
            { n: '03', t: 'Design technology roadmap', d: 'A clear, staged plan — start small, scale intelligently.' },
          ].map(step => (
            <div key={step.n} className="p-6 rounded-xl bg-[#12182B] border border-white/5">
              <div className="text-[10px] font-mono text-brand-emerald tracking-widest mb-3">{step.n}</div>
              <div className="text-sm font-medium text-white mb-1.5">{step.t}</div>
              <p className="text-xs text-[#B8C2CE] font-light leading-relaxed">{step.d}</p>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Strategy Session — primary */}
          <motion.a href={SITE.calendly} target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            className="group relative flex flex-col p-8 rounded-2xl bg-brand-emerald/8 border border-brand-emerald/25 hover:bg-brand-emerald/15 hover:border-brand-emerald/50 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(77,139,114,0.08),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-brand-emerald/15 flex items-center justify-center mb-5">
                <CalendarCheck size={24} className="text-brand-emerald" />
              </div>
              <div className="text-xs font-mono text-brand-emerald uppercase tracking-widest mb-2">Recommended · Book instantly</div>
              <h3 className="text-xl font-display font-medium text-white mb-2">MEI Innovation Strategy Session</h3>
              <p className="text-sm text-[#B8C2CE] font-light mb-5 leading-relaxed">A focused 30-minute session. We review your operations, identify where intelligent technology changes the outcome, and give you a clear recommendation — no fluff.</p>
              <div className="flex items-center gap-2 text-brand-emerald font-medium text-sm">
                Book your session <ArrowRight size={14} />
              </div>
            </div>
          </motion.a>

          {/* WhatsApp — quick contact */}
          <motion.a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            className="group relative flex flex-col p-8 rounded-2xl bg-[#25D366]/8 border border-[#25D366]/25 hover:bg-[#25D366]/15 hover:border-[#25D366]/50 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,211,102,0.06),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 flex items-center justify-center mb-5">
                <MessageCircle size={24} className="text-[#25D366]" />
              </div>
              <div className="text-xs font-mono text-[#25D366] uppercase tracking-widest mb-2">Quick Questions</div>
              <h3 className="text-xl font-display font-medium text-white mb-2">Chat on WhatsApp</h3>
              <p className="text-sm text-[#B8C2CE] font-light mb-5 leading-relaxed">Message us directly. We typically respond within a few hours. Great for quick questions or to start a conversation about a project.</p>
              <div className="flex items-center gap-2 text-[#25D366] font-medium text-sm">
                Message us directly <ArrowRight size={14} />
              </div>
            </div>
          </motion.a>

          {/* Email */}
          <motion.a href={`mailto:${SITE.email}?subject=Project%20Enquiry%20—%20MEI%20Innovations&body=Hi%20MEI%20team%2C%0A%0AI'd%20like%20to%20discuss%20a%20project.%0A%0AAbout%20my%20business%3A%0A%0AWhat%20I%20need%20help%20with%3A%0A%0AMy%20budget%20range%3A%0A%0ATimeline%3A`}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            className="group relative flex flex-col p-8 rounded-2xl bg-[#12182B] border border-white/5 hover:border-brand-emerald/20 transition-all duration-300">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-brand-emerald/10 border border-brand-emerald/20 flex items-center justify-center mb-5">
                <Mail size={24} className="text-brand-emerald" />
              </div>
              <h3 className="text-xl font-display font-medium text-white mb-2">Send an Email</h3>
              <p className="text-sm text-[#B8C2CE] font-light mb-5 leading-relaxed">Tell us about your project. We&apos;ll review it carefully and come back with thoughts, ideas, and an honest assessment of how we can help.</p>
              <div className="flex items-center gap-2 text-brand-emerald font-medium text-sm font-mono">
                {SITE.email} <ArrowRight size={14} />
              </div>
            </div>
          </motion.a>

        </div>

        {/* Inquiry form */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mb-12 p-8 rounded-2xl bg-[#12182B] border border-white/5">
          <h2 className="text-xl font-display font-medium text-white mb-1.5">Tell us about your project</h2>
          <p className="text-sm text-[#B8C2CE] font-light mb-7">Prefer writing it out? Send us the essentials — we reply to every inquiry.</p>
          <InquiryForm />
        </motion.div>

        {/* Social channels */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex items-center gap-4 mb-6">
          <span className="text-xs text-[#8D98A8] font-mono uppercase tracking-widest">Follow us</span>
          <div className="flex gap-3">
            {[
              { href: SITE.instagram, icon: Instagram, label: "Instagram", color: "hover:text-[#E1306C] hover:border-[#E1306C]/30" },
              { href: SITE.facebook, icon: Facebook, label: "Facebook", color: "hover:text-[#1877F2] hover:border-[#1877F2]/30" },
              { href: SITE.whatsappBare, icon: MessageCircle, label: "WhatsApp", color: "hover:text-[#25D366] hover:border-[#25D366]/30" },
            ].map((s,i) => (
              <motion.a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                className={`w-10 h-10 rounded-lg bg-[#12182B] border border-white/5 flex items-center justify-center text-[#B0BAC7] transition-all duration-300 ${s.color}`}
                aria-label={s.label}>
                <s.icon size={16} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Global presence note */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="flex items-start gap-4 p-6 rounded-xl bg-[#12182B] border border-white/5 mb-6">
          <Globe size={20} className="text-brand-emerald shrink-0 mt-0.5" />
          <div>
            <div className="text-white font-medium text-sm mb-1">Working with international clients</div>
            <p className="text-xs text-[#98A3B3] font-light leading-relaxed">
              MEI has served businesses across the globe since 2014. We work async-first and accommodate clients across all major time zones. Wherever you are, we can work together.
            </p>
          </div>
        </motion.div>

        {/* Build the future with MEI — small careers teaser, not competing with main nav */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-xl bg-gradient-to-r from-[#12182B] to-[#0B1020] border border-white/5">
          <div>
            <div className="text-white font-medium text-sm mb-1">Build the future with MEI.</div>
            <p className="text-xs text-[#98A3B3] font-light leading-relaxed max-w-md">
              We collaborate with developers, designers, automation specialists and AI builders creating intelligent systems for real businesses.
            </p>
          </div>
          <Link href="/careers"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-emerald hover:text-white transition-colors uppercase tracking-widest whitespace-nowrap shrink-0">
            Explore Careers <ArrowRight size={13} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}


function InquiryForm() {
  const [form, setForm] = useState({ name: '', company: '', email: '', industry: '', stage: 'Launch' });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nIndustry: ${form.industry}\nProject stage: ${form.stage}\n\nAbout the project:\n`
    );
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent('Project Inquiry — ' + (form.company || form.name))}&body=${body}`;
  };

  const input = "w-full h-12 px-4 rounded-lg bg-[#0B1020] border border-white/10 text-sm text-white placeholder-[#7C8797] focus:border-brand-emerald/50 focus:outline-none transition-colors";

  return (
    <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label htmlFor="inq-name" className="block text-xs text-[#B8C2CE] font-mono uppercase tracking-widest mb-2">Name</label>
        <input id="inq-name" required value={form.name} onChange={set('name')} className={input} placeholder="Your name" />
      </div>
      <div>
        <label htmlFor="inq-company" className="block text-xs text-[#B8C2CE] font-mono uppercase tracking-widest mb-2">Company</label>
        <input id="inq-company" value={form.company} onChange={set('company')} className={input} placeholder="Company name" />
      </div>
      <div>
        <label htmlFor="inq-email" className="block text-xs text-[#B8C2CE] font-mono uppercase tracking-widest mb-2">Email</label>
        <input id="inq-email" type="email" required value={form.email} onChange={set('email')} className={input} placeholder="you@company.com" />
      </div>
      <div>
        <label htmlFor="inq-industry" className="block text-xs text-[#B8C2CE] font-mono uppercase tracking-widest mb-2">Industry</label>
        <input id="inq-industry" value={form.industry} onChange={set('industry')} className={input} placeholder="e.g. Healthcare, Ecommerce, Real Estate" />
      </div>
      <div className="md:col-span-2">
        <label className="block text-xs text-[#B8C2CE] font-mono uppercase tracking-widest mb-2">Project stage</label>
        <div className="grid grid-cols-3 gap-3" role="radiogroup" aria-label="Project stage">
          {['Launch', 'Automate', 'Transform'].map(st => (
            <button type="button" key={st} onClick={() => setForm({ ...form, stage: st })}
              aria-pressed={form.stage === st}
              className={`h-12 rounded-lg border text-sm font-medium transition-all ${
                form.stage === st
                  ? 'bg-brand-emerald/15 border-brand-emerald/50 text-brand-emerald'
                  : 'bg-[#0B1020] border-white/10 text-[#B8C2CE] hover:border-white/25'
              }`}>
              {st}
            </button>
          ))}
        </div>
      </div>
      <div className="md:col-span-2">
        <button type="submit"
          className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md bg-brand-emerald text-white font-semibold hover:bg-[#3d7260] transition-all duration-300 shadow-[0_0_30px_rgba(77,139,114,0.25)]">
          Send Inquiry <ArrowRight size={16} />
        </button>
        <p className="text-[11px] text-[#8D98A8] font-light mt-3">Opens your email app with the details filled in — or book a session above for the fastest path.</p>
      </div>
    </form>
  );
}
