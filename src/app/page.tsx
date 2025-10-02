import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Techniques from '@/components/sections/techniques';
import BeforeAfter from '@/components/sections/before-after';
import ProcedureInfo from '@/components/sections/procedure-info';
import AiConsultation from '@/components/sections/ai-consultation';
import Testimonials from '@/components/sections/testimonials';
import ClinicLocator from '@/components/sections/clinic-locator';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Techniques />
        <BeforeAfter />
        <ProcedureInfo />
        <AiConsultation />
        <Testimonials />
        <ClinicLocator />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
