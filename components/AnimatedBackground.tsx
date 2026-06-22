'use client';
// Reusable animated background elements — import into any section
import { motion } from 'motion/react';

export function FloatingOrbs({ count = 3, className = "" }: { count?: number; className?: string }) {
  const orbs = [
    { size: 300, x: '10%', y: '20%', delay: 0, duration: 18, opacity: 0.04 },
    { size: 200, x: '75%', y: '60%', delay: 3, duration: 14, opacity: 0.03 },
    { size: 150, x: '45%', y: '80%', delay: 6, duration: 22, opacity: 0.05 },
  ].slice(0, count);
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {orbs.map((orb, i) => (
        <motion.div key={i}
          className="absolute rounded-full bg-brand-emerald"
          style={{ width: orb.size, height: orb.size, left: orb.x, top: orb.y, opacity: orb.opacity, filter: 'blur(80px)' }}
          animate={{ x: [0, 30, -20, 0], y: [0, -20, 15, 0] }}
          transition={{ duration: orb.duration, repeat: Infinity, delay: orb.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export function GridLines({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `linear-gradient(to right, rgba(77,139,114,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(77,139,114,0.04) 1px, transparent 1px)`,
        backgroundSize: '64px 64px',
        maskImage: 'radial-gradient(ellipse at center, black 10%, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 10%, transparent 70%)',
      }}
    />
  );
}

export function CountUp({ end, suffix = '', duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.span
        initial={{ innerText: 0 } as any}
        whileInView={{ innerText: end } as any}
        viewport={{ once: true }}
        transition={{ duration, ease: "easeOut" }}
        onUpdate={(latest: any) => {}}
      >
        {end}
      </motion.span>{suffix}
    </motion.span>
  );
}

export function PulsingDot({ className = "" }: { className?: string }) {
  return (
    <span className={`relative flex h-2.5 w-2.5 ${className}`}>
      <motion.span className="absolute inline-flex h-full w-full rounded-full bg-brand-emerald"
        animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }} transition={{ duration: 2, repeat: Infinity }} />
      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-emerald" />
    </span>
  );
}

export function AnimatedBorder({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <motion.div className="absolute inset-0 rounded-xl"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(77,139,114,0.3), transparent)' }}
        animate={{ x: ['-100%', '200%'] }} transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
      />
      {children}
    </div>
  );
}

export function StaggerChildren({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div className={className}
      initial="hidden" whileInView="visible" viewport={{ once: true }}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
      {children}
    </motion.div>
  );
}

export function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div className={className}
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </motion.div>
  );
}

export function SlideIn({ children, direction = 'left', delay = 0, className = "" }: {
  children: React.ReactNode; direction?: 'left' | 'right'; delay?: number; className?: string
}) {
  return (
    <motion.div className={className}
      initial={{ opacity: 0, x: direction === 'left' ? -32 : 32 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </motion.div>
  );
}
