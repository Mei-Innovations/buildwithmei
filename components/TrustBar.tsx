'use client';

import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Shield, Clock, Globe, Award, TrendingUp } from 'lucide-react';

function AnimatedNumber({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(false);
  return (
    <motion.span
      onViewportEnter={() => {
        if (ref.current) return;
        ref.current = true;
        let start = 0;
        const step = target / 40;
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setDisplay(target); clearInterval(timer); }
          else setDisplay(Math.floor(start));
        }, 40);
      }}
    >
      {display}{suffix}
    </motion.span>
  );
}

const stats = [
  { icon: Award, value: "2014", label: "Digital Journey Began", animated: false },
  { icon: Globe, value: "International", label: "Clients Across the Globe", animated: false },
  { icon: Clock, num: 40, suffix: "+ hrs/wk", label: "Avg Admin Time Saved", animated: true },
  { icon: Shield, value: "Zero", label: "Disruption During Deployment", animated: false },
  { icon: TrendingUp, num: 90, suffix: " days", label: "Typical ROI Timeline", animated: true },
];

export function TrustBar() {
  return (
    <section className="border-y border-white/5 bg-[#0A0D1A] py-10 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(77,139,114,0.03),transparent_70%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-wrap justify-between gap-8">
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-center gap-4">
              <motion.div whileHover={{ scale: 1.1, backgroundColor: 'rgba(77,139,114,0.2)' }}
                className="w-10 h-10 rounded-lg bg-brand-emerald/10 border border-brand-emerald/20 flex items-center justify-center shrink-0 transition-colors duration-300">
                <s.icon size={18} className="text-brand-emerald" strokeWidth={1.5} />
              </motion.div>
              <div>
                <div className="font-display font-semibold text-white text-lg leading-none mb-1">
                  {s.animated && s.num ? <AnimatedNumber target={s.num} suffix={s.suffix} /> : s.value}
                </div>
                <div className="text-xs text-[#B8C2CE] font-light">{s.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
