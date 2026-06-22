import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { ContactPage } from '@/components/ContactPage';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Contact MEI Innovations — Book a Free Strategy Call',
  description: 'Book a free 30-minute strategy call with MEI Innovations. We\'ll review your operations and show you exactly what\'s possible — no commitment, no sales pitch.',
  alternates: { canonical: 'https://buildwithmei.com/contact' },
  openGraph: {
    title: 'Contact MEI | Free Strategy Call',
    description: 'Chat with MEI via WhatsApp, email, or book a call. No commitment. Just a real conversation about your business.',
    url: 'https://buildwithmei.com/contact',
  },
};

export default function Contact() {
  return (
    <main className="bg-[#0B1020] text-white min-h-screen">
      <Navbar />
      <ContactPage />
      <Footer />
    </main>
  );
}
