import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Philosophy from '@/components/sections/philosophy';
import Protocols from '@/components/sections/protocols';
import Confidence from '@/components/sections/confidence';
import Faq from '@/components/sections/faq';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Philosophy />
        <Protocols />
        <Confidence />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
