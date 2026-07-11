'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

/**
 * Insights preview — thought leadership, not a blog feed.
 * No author avatars, no date-stamped list styling.
 */
const insights = [
  {
    tag: 'AI & Operations',
    title: 'How AI is changing everyday business operations',
    read: '6 min read',
    href: '/insights',
  },
  {
    tag: 'Hospitality',
    title: 'Why modern hospitality needs intelligent systems',
    read: '5 min read',
    href: '/insights',
  },
  {
    tag: 'Transformation',
    title: 'Systems before software: the future of business transformation',
    read: '7 min read',
    href: '/insights',
  },
];

export function InsightsPreview() {
  return (
    <section id="insights" className="py-32 relative bg-[#0B1020] z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mb-16 max-w-3xl">
          <div className="text-sm font-mono tracking-widest text-[#98A3B3] uppercase mb-4">Insights</div>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-5 tracking-tight text-balance">
            Thinking on operations,<br/>AI, and transformation.
          </h2>
          <p className="text-lg text-[#B8C2CE] font-light leading-relaxed">
            Perspective from the systems we build, not a marketing blog.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((post, i) => (
            <motion.div key={post.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <Link href={post.href}
                className="group flex flex-col h-full p-8 rounded-xl bg-[#12182B] border border-white/5 hover:border-brand-emerald/25 transition-all duration-400">
                <div className="text-xs font-mono tracking-widest text-brand-emerald uppercase mb-4">{post.tag}</div>
                <h3 className="text-lg font-medium text-white tracking-tight leading-snug mb-6">{post.title}</h3>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-xs text-[#8A97A8]">{post.read}</span>
                  <ArrowRight size={15} className="text-brand-emerald opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
