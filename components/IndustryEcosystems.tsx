'use client';

import { motion } from 'motion/react';
import {
  Hotel, HeartPulse, ShoppingBag, Building2, Factory, Sprout, Truck, GraduationCap, Briefcase, Leaf, ArrowRight,
} from 'lucide-react';
import { SITE } from '@/lib/site';

/**
 * Industry Intelligence Ecosystems — /who-we-serve.
 * One Intelligence Engine, adapted into specialized ecosystems.
 * Structure per ecosystem: Challenge → MEI Intelligence Layer → Business Outcome.
 */

export const ecosystems = [
  {
    id: 'hospitality',
    img: 'https://images.unsplash.com/photo-1543325042-c67825847491?auto=format&fit=crop&w=1200&q=70',
    imgAlt: 'Elegant hotel reception with warm wooden interior', icon: Hotel,
    title: 'Hospitality Intelligence',
    audience: 'Hotels · Restaurants · Tourism · Guest Experiences',
    challenge: 'Guest questions around the clock, bookings across disconnected channels, and operations that depend on whoever is on shift.',
    layer: ['AI concierge', 'Guest journey automation', 'Booking intelligence', 'Smart operations', 'Reputation systems'],
    outcome: 'Guests get answers instantly, bookings never sleep, and staff focus on hospitality — not admin.',
    cta: 'Transform Your Guest Experience',
  },
  {
    id: 'healthcare',
    img: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=70',
    imgAlt: 'Modern dental clinic treatment room', icon: HeartPulse,
    title: 'Healthcare Intelligence',
    audience: 'Dental · Aesthetic Clinics · Private Healthcare · Wellness',
    challenge: 'Missed calls are lost patients. Admin eats clinical time. Follow-ups, reminders, and reviews depend on busy front-desk staff.',
    layer: ['AI reception', 'Appointment automation', 'Patient journey workflows', 'Patient CRM', 'Administrative automation'],
    outcome: 'Every inquiry answered, every patient journey coordinated — clinical time back where it belongs.',
    cta: 'Modernize Your Practice',
  },
  {
    id: 'commerce',
    img: 'https://images.unsplash.com/photo-1740805134242-876087bb56eb?auto=format&fit=crop&w=1200&q=70',
    imgAlt: 'Premium beauty retail store display', icon: ShoppingBag,
    title: 'Commerce Intelligence',
    audience: 'Retail · Fashion · Beauty · FMCG · Ecommerce',
    challenge: 'Disconnected inventory, manual order handling, and customer data scattered across tools that never talk to each other.',
    layer: ['Ecommerce ecosystems', 'Customer intelligence', 'Inventory systems', 'Growth automation', 'AI personalization'],
    outcome: 'One connected commerce operation that scales with orders — not headcount.',
    cta: 'Scale Your Digital Operations',
  },
  {
    id: 'real-estate',
    img: 'https://images.unsplash.com/photo-1554793000-245d3a3c2a51?auto=format&fit=crop&w=1200&q=70',
    imgAlt: 'Modern architecture at dusk with warm lighting', icon: Building2,
    title: 'Real Estate Intelligence',
    audience: 'Developers · Construction · Smart Communities',
    challenge: 'Modern developments demand intelligent infrastructure — but buildings, security, facilities, and resident services run on separate systems.',
    layer: ['Smart buildings', 'Digital twins', 'Facility intelligence', 'Resident platforms', 'AI security intelligence'],
    outcome: 'Developments that operate intelligently from day one — visible, efficient, and resident-ready.',
    cta: 'Plan Your Smart Ecosystem',
  },
  {
    id: 'industrial',
    img: 'https://images.unsplash.com/photo-1717386255773-1e3037c81788?auto=format&fit=crop&w=1200&q=70',
    imgAlt: 'Factory floor with workers in safety equipment', icon: Factory,
    title: 'Industrial Intelligence',
    audience: 'Factories · Warehouses · Manufacturing',
    challenge: 'Safety, quality, and throughput monitored by walking the floor — while the data that could prevent problems goes uncaptured.',
    layer: ['AI vision systems', 'Operations intelligence', 'Safety monitoring', 'Production analytics'],
    outcome: 'Safer floors, higher throughput, and problems caught before they cost you.',
    cta: 'Modernize Your Operations',
  },
  {
    id: 'agriculture',
    img: 'https://images.unsplash.com/photo-1535379453347-1ffd615e2e08?auto=format&fit=crop&w=1200&q=70',
    imgAlt: 'Aerial view of lush green farmland', icon: Sprout,
    title: 'Agriculture Intelligence',
    audience: 'Farming · Livestock · Food Systems',
    challenge: 'Crop health, irrigation, and animal welfare managed by routine and instinct — without the continuous signal that sensors and vision provide.',
    layer: ['Crop & field monitoring', 'Sensor networks', 'Livestock monitoring', 'Farm intelligence dashboards'],
    outcome: 'Continuous visibility across fields and livestock — decisions from data, not guesswork.',
    cta: 'Bring Intelligence to Your Farm',
  },
  {
    id: 'mobility',
    img: 'https://images.unsplash.com/photo-1636070762406-4262052fa6ef?auto=format&fit=crop&w=1200&q=70',
    imgAlt: 'Freight truck on a highway', icon: Truck,
    title: 'Mobility Intelligence',
    audience: 'Automotive · Fleet · Transport · Logistics',
    challenge: 'Vehicles, drivers, and routes generating data nobody uses — while maintenance surprises and inefficient routing quietly drain margin.',
    layer: ['Fleet intelligence', 'Connected vehicle systems', 'Predictive maintenance', 'Route optimization'],
    outcome: 'Fleets that plan themselves — fewer surprises, lower cost per mile.',
    cta: 'Connect Your Fleet',
  },
  {
    id: 'education',
    img: 'https://images.unsplash.com/photo-1721702754494-fdd7189f946c?auto=format&fit=crop&w=1200&q=70',
    imgAlt: 'Modern university library', icon: GraduationCap,
    title: 'Education Intelligence',
    audience: 'Schools · Universities · Training Providers',
    challenge: 'Admissions, communication, and student management running on paperwork and patience instead of systems.',
    layer: ['Learning platforms', 'Admission automation', 'Student systems', 'Parent & student communication'],
    outcome: 'Admissions, communication, and student support that run on systems — not paperwork.',
    cta: 'Modernize Your Institution',
  },
  {
    id: 'professional',
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=70',
    imgAlt: 'Professional team in a boardroom meeting', icon: Briefcase,
    title: 'Professional Intelligence',
    audience: 'Mortgage · Finance · Consultants · Service Businesses',
    challenge: 'Leads in spreadsheets, documents in inboxes, and expert time spent on admin instead of clients.',
    layer: ['CRM ecosystems', 'Client workflows', 'Document intelligence', 'Operational automation'],
    outcome: 'Expert time back on clients — the operation scales without new headcount.',
    cta: 'Automate Your Workflow',
  },
  {
    id: 'energy',
    img: 'https://images.unsplash.com/photo-1714330629244-6e47157e210a?auto=format&fit=crop&w=1200&q=70',
    imgAlt: 'Solar panels with wind turbines at sunset', icon: Leaf,
    title: 'Energy & Sustainability Intelligence',
    audience: 'Energy Optimization · Smart Utilities · Sustainable Operations',
    challenge: 'Energy costs and sustainability targets managed with spreadsheets and estimates — while buildings and operations waste what sensors could save.',
    layer: ['Energy optimization', 'Smart utility systems', 'Environmental monitoring', 'Sustainability dashboards'],
    outcome: 'Lower consumption, measurable sustainability progress, and operations that optimize themselves.',
    cta: 'Optimize Your Operations',
  },
];

export function IndustryEcosystems() {
  return (
    <section id="ecosystems" className="py-24 relative bg-[#0B1020] z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {ecosystems.map((eco, i) => (
            <motion.div key={eco.id} id={eco.id}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              className="group relative p-8 rounded-xl bg-[#12182B] border border-white/5 hover:border-brand-emerald/20 transition-all duration-400 flex flex-col scroll-mt-28">
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />
              <eco.icon className="absolute -right-8 -top-8 w-36 h-36 text-brand-emerald/[0.05] group-hover:text-brand-emerald/[0.09] transition-colors duration-700 pointer-events-none" strokeWidth={1} />
              <div className="relative z-10 flex flex-col h-full">
                {/* Industry environment — photography with dark overlay */}
                <div className="relative h-36 -mx-8 -mt-8 mb-7 overflow-hidden rounded-t-xl">
                  <img src={eco.img} alt={eco.imgAlt} loading="lazy"
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12182B] via-[#12182B]/12 to-transparent pointer-events-none" />
                </div>
                <div className="flex items-start justify-between mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#0B1020] border border-white/8 flex items-center justify-center text-[#98A3B3] group-hover:text-brand-emerald transition-colors duration-300">
                    <eco.icon size={20} strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-white mb-1.5 tracking-tight">{eco.title}</h3>
                <div className="text-[10px] text-brand-emerald/80 font-mono tracking-widest uppercase mb-6">{eco.audience}</div>

                <div className="mb-5">
                  <div className="text-[10px] text-[#98A3B3] font-mono tracking-widest mb-1.5 uppercase">The Challenge</div>
                  <p className="text-sm text-[#B8C2CE] font-light leading-relaxed">{eco.challenge}</p>
                </div>
                <div className="mb-5">
                  <div className="text-[10px] text-brand-emerald font-mono tracking-widest mb-2.5 uppercase">MEI Intelligence Layer</div>
                  <div className="flex flex-wrap gap-2">
                    {eco.layer.map(s => (
                      <span key={s} className="text-xs text-[#C0C9D3] px-3 py-1.5 rounded-full bg-[#0B1020] border border-white/8">{s}</span>
                    ))}
                  </div>
                </div>
                <div className="mb-7">
                  <div className="text-[10px] text-[#DCE7E1] font-mono tracking-widest mb-1.5 uppercase">Business Outcome</div>
                  <p className="text-sm text-white font-light leading-relaxed">{eco.outcome}</p>
                </div>

                <div className="mt-auto pt-4 border-t border-white/5">
                  <a href={SITE.calendly} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-brand-emerald hover:text-white transition-colors font-medium">
                    {eco.cta} <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-14 text-center">
          <p className="text-[#8D98A8] text-sm mb-4 font-light">Don't see your industry? The Intelligence Engine adapts to any operational pattern.</p>
          <a href={`mailto:${SITE.email}`} className="text-sm text-brand-emerald hover:text-white transition-colors font-mono">
            Tell us about your operations →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
