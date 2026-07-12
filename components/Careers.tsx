'use client';

import { motion } from 'motion/react';
import { ArrowRight, MapPin, Briefcase, Code, BarChart2, Headphones, Upload, CheckCircle2 } from 'lucide-react';

const roles = [
  {
    title: "Full-Stack Developer",
    icon: Code,
    type: "Full-Time",
    location: "Remote · Worldwide",
    desc: "Build custom web applications, automation systems, and client portals. You'll work across the full stack — Next.js, Node.js, databases, integrations — on projects that ship fast and matter.",
    skills: ["Next.js / React", "Node.js", "PostgreSQL / Supabase", "REST & Webhook integrations"],
    accent: "#1FB5C9",
  },
  {
    title: "Automation & Systems Engineer",
    icon: BarChart2,
    type: "Full-Time",
    location: "Remote · Worldwide",
    desc: "Design and implement intelligent workflow automation for real clients. If you think in systems and love connecting tools that weren't designed to talk to each other, this is for you.",
    skills: ["Make / Zapier / custom automation", "API integration", "CRM configuration", "Process mapping"],
    accent: "#4D8B72",
  },
  {
    title: "Client Solutions Manager",
    icon: Headphones,
    type: "Full-Time",
    location: "Remote · Worldwide",
    desc: "Own client relationships post-build. Monitor system performance, identify opportunities, and ensure every client gets the outcome they were promised.",
    skills: ["Client communication", "Project management", "Tech fluency", "Problem solving"],
    accent: "#E8745B",
  },
  {
    title: "Operations & Strategy Analyst",
    icon: Briefcase,
    type: "Part-Time / Contract",
    location: "Remote · Worldwide",
    desc: "Help clients map their workflows and identify where automation delivers the highest ROI. Business analysis meets technology.",
    skills: ["Business process analysis", "Documentation", "Written communication", "Interest in tech"],
    accent: "#D4A574",
  },
];

export function Careers() {
  const WA = "https://wa.me/41779513495?text=Hi%20MEI%2C%20I'd%20like%20to%20apply%20for%20a%20role.%20Here's%20my%20background:";
  return (
    <section id="careers" className="py-32 relative bg-[#0A0D1A] z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col lg:flex-row gap-20 mb-20">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl">
            <div className="text-sm font-mono tracking-widest text-[#98A3B3] uppercase mb-4">Join MEI</div>
            <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-6 tracking-tight text-balance">
              Work that ships.<br/>Teams that care.
            </h2>
            <p className="text-lg text-[#B8C2CE] font-light leading-relaxed mb-4">
              MEI is a global remote team building real software for real businesses since our digital journey began in 2014. We ship fast, we care about quality, and we hire people who want ownership over their work.
            </p>
            <p className="text-base text-[#98A3B3] font-light leading-relaxed">
              We&apos;re not a big agency. Everyone works on things that matter. You&apos;ll see your output in production quickly, work directly with clients, and have a real say in how we build.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="flex-1">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Remote-first", desc: "Work from anywhere, worldwide. Async-friendly culture." },
                { label: "Ship fast", desc: "No bureaucracy. Your work goes live, fast." },
                { label: "Small team", desc: "Ownership and visibility from day one." },
                { label: "Growing fast", desc: "Digital journey since 2014 — entering aggressive growth phase." },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.08 }}
                  className="p-6 rounded-xl bg-[#12182B] border border-white/5 hover:border-brand-emerald/20 transition-colors duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 size={14} className="text-brand-emerald" />
                    <div className="text-white font-medium text-sm">{item.label}</div>
                  </div>
                  <div className="text-xs text-[#98A3B3] leading-relaxed font-light">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CV submission CTA — prominent */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mb-12 p-8 md:p-12 rounded-2xl bg-brand-emerald/5 border border-brand-emerald/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(77,139,114,0.08),transparent_60%)]" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Upload size={20} className="text-brand-emerald" />
                <h3 className="text-xl font-display font-medium text-white">Send Us Your CV</h3>
              </div>
              <p className="text-[#B8C2CE] font-light text-sm leading-relaxed max-w-xl">
                Don&apos;t see the right role? Send your CV directly — we review every application. Include what you do best, a link to your work, and what kind of role you&apos;re looking for.
              </p>
              <p className="text-brand-emerald font-mono text-sm mt-3">📧 info@buildwithmei.com</p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <a href="mailto:info@buildwithmei.com?subject=CV%20Submission%20—%20MEI%20Innovations&body=Hi%20MEI%20team%2C%0A%0AI'd%20like%20to%20be%20considered%20for%20a%20role%20at%20MEI.%0A%0AAbout%20me%3A%0A%0ASkills%20%2F%20experience%3A%0A%0APortfolio%20%2F%20LinkedIn%3A%0A%0ARole%20I'm%20interested%20in%3A%0A%0AAttached%3A%20[my CV]"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-brand-emerald text-white font-semibold hover:bg-[#3d7260] transition-all duration-300 whitespace-nowrap">
                <Upload size={15} /> Email Your CV →
              </a>
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-medium hover:bg-[#25D366] hover:text-white transition-all duration-300 whitespace-nowrap text-sm">
                WhatsApp Your CV
              </a>
            </div>
          </div>
        </motion.div>

        {/* Open roles */}
        <h3 className="text-sm font-mono tracking-widest text-[#98A3B3] uppercase mb-6 pb-4 border-b border-white/5">Open Roles</h3>
        <div className="space-y-4">
          {roles.map((role, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              style={{ ['--accent' as string]: role.accent }}
              className="group relative rounded-xl border border-white/[0.04] bg-[#12182B] p-8 hover:border-[var(--accent)]/30 transition-all duration-400 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(77,139,114,0.03),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10 flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-[#0B1020] border border-white/[0.05] flex items-center justify-center transition-colors duration-300" style={{ color: role.accent }}>
                      <role.icon size={17} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-medium text-white tracking-tight">{role.title}</h3>
                    <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded border" style={{ color: role.accent, background: `${role.accent}1a`, borderColor: `${role.accent}33` }}>{role.type}</span>
                  </div>
                  <div className="flex items-center gap-1.5 mb-4 text-xs text-[#98A3B3] font-mono">
                    <MapPin size={10} />{role.location}
                  </div>
                  <p className="text-sm text-[#B8C2CE] font-light leading-relaxed mb-4 max-w-2xl">{role.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {role.skills.map((s, j) => <span key={j} className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#0B1020] border border-white/[0.04] text-[#B8C2CE]">{s}</span>)}
                  </div>
                </div>
                <div className="shrink-0 flex flex-col gap-2">
                  <a href={`mailto:info@buildwithmei.com?subject=Application%3A%20${encodeURIComponent(role.title)}&body=Hi%20MEI%20team%2C%0A%0AI'm%20applying%20for%20the%20${encodeURIComponent(role.title)}%20role.%0A%0AAbout%20me%3A%0A%0ARelevant%20experience%3A%0A%0APortfolio%20%2F%20LinkedIn%3A%0A%0AAttached%3A%20[my CV]`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-brand-emerald text-white font-medium text-sm hover:bg-[#3d7260] transition-all duration-300 whitespace-nowrap">
                    Apply + Send CV <ArrowRight size={14} />
                  </a>
                  <a href={`https://wa.me/41779513495?text=Hi%20MEI%2C%20I'd%20like%20to%20apply%20for%20the%20${encodeURIComponent(role.title)}%20role.%20Here's%20a%20bit%20about%20me%3A`}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-medium text-sm hover:bg-[#25D366] hover:text-white transition-all duration-300 whitespace-nowrap">
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
