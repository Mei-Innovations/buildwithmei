import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { IntelligenceEngine } from '@/components/IntelligenceEngine';
import { WhatMeiBuilds } from '@/components/WhatMeiBuilds';
import { Industries } from '@/components/Industries';
import { SelectedWork } from '@/components/SelectedWork';
import { InsightsPreview } from '@/components/InsightsPreview';
import { CTA, Footer } from '@/components/Footer';
import { PageLoader } from '@/components/PageLoader';

export default function Home() {
  return (
    <main className="bg-[#0B1020] text-white min-h-screen">
      <PageLoader />
      <Navbar />
      <Hero />
      <IntelligenceEngine />
      <WhatMeiBuilds />
      <Industries />
      <SelectedWork />
      <InsightsPreview />
      <CTA />
      <Footer />
    </main>
  );
}
