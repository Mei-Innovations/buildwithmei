import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { TrustBar } from '@/components/TrustBar';
import { Services } from '@/components/Services';
import { WorkflowBlueprint } from '@/components/WorkflowBlueprint';
import { Infrastructure } from '@/components/Infrastructure';
import { Industries } from '@/components/Industries';
import { CaseStudies } from '@/components/CaseStudies';
import { OperatingModel } from '@/components/OperatingModel';
import { WhyMei } from '@/components/WhyMei';
import { Careers } from '@/components/Careers';
import { CTA, Footer } from '@/components/Footer';
import { PageLoader } from '@/components/PageLoader';

export default function Home() {
  return (
    <main className="bg-[#0B1020] text-white min-h-screen">
      <PageLoader />
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <WorkflowBlueprint />
      <Infrastructure />
      <Industries />
      <CaseStudies />
      <OperatingModel />
      <WhyMei />
      <Careers />
      <CTA />
      <Footer />
    </main>
  );
}
