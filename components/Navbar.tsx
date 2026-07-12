'use client';

import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Instagram, Facebook } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '@/components/Logo';

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) setHidden(true);
    else setHidden(false);
    setIsScrolled(latest > 20);
  });

  return (
    <>
      <motion.nav
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#0B1020]/92 backdrop-blur-md border-b border-white/5 shadow-2xl shadow-black/30" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 relative z-50">
            <div className="w-8 h-8 relative flex items-center justify-center group">
              <div className="absolute inset-0 bg-brand-emerald/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <Logo className="w-full h-full relative z-10 transition-transform duration-500 group-hover:scale-110" />
            </div>
            <span className="font-display font-medium text-lg tracking-tight text-white">MEI <span className="opacity-50 font-normal">Innovations</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-brand-silver">
            <Link href="/services" className="hover:text-white transition-colors duration-200">Solutions</Link>
            <Link href="/who-we-serve" className="hover:text-white transition-colors duration-200">Industries</Link>
            <Link href="/markets" className="hover:text-white transition-colors duration-200">Markets</Link>
            <Link href="/work" className="hover:text-white transition-colors duration-200">Work</Link>
            <Link href="/how-it-works" className="hover:text-white transition-colors duration-200">How It Works</Link>
            <Link href="/about" className="hover:text-white transition-colors duration-200">About</Link>
            <Link href="/contact" className="hover:text-white transition-colors duration-200">Contact</Link>
            <a href="https://calendly.com/mei-innovations/30min" target="_blank" rel="noopener noreferrer"
              className="h-9 px-4 rounded-md bg-brand-emerald text-white hover:bg-[#3d7260] transition-all duration-300 font-medium flex items-center gap-2 ml-1">
              Book Strategy Session
            </a>
          </div>

          <button className="md:hidden relative z-50 text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#0B1020]/98 backdrop-blur-xl pt-28 px-6 md:hidden flex flex-col gap-4 overflow-y-auto"
          >
            {[
              { label: "Solutions", href: "/services" },
              { label: "Industries", href: "/who-we-serve" },
              { label: "Markets", href: "/markets" },
              { label: "Work", href: "/work" },
              { label: "How It Works", href: "/how-it-works" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)}
                className="text-[#aaa] hover:text-white text-xl pb-4 border-b border-white/5 transition-colors">
                {item.label}
              </Link>
            ))}
            <a href="https://calendly.com/mei-innovations/30min" target="_blank" rel="noopener noreferrer"
              className="mt-4 h-14 w-full rounded-md bg-brand-emerald text-white font-semibold flex items-center justify-center gap-2 text-base">
              Book Strategy Session <ArrowRight size={18} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
