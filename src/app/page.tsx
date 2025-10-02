'use client';

import Image from 'next/image';
import { Gem } from 'lucide-react';
import Logo from '@/components/logo';
import {
  facialProtocols,
  corporalProtocols,
  mapPillars,
} from '@/lib/assets';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import ICLCalculator from '@/components/icl-calculator';

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  return (
    <div className="bg-gradient-to-br from-secondary/50 via-primary/50 to-accent/50 text-foreground min-h-screen font-body">
      <header className="absolute top-0 left-0 w-full z-50 py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <Logo />
          </div>
        </div>
      </header>

      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center text-center px-4 pt-20">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover object-center absolute -z-10"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-black/50 -z-10" />
          <div className="max-w-4xl">
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-white">
              MINT® Architectural Lift™
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90">
              Rediseña. Reposiciona. Rejuvenece.
            </p>
            <p className="mt-2 text-md md:text-lg max-w-3xl mx-auto text-white/80">
              Protocolos de lifting no quirúrgico para rostro y cuerpo. Una nueva
              era en la medicina estética.
            </p>
          </div>
        </section>

        {/* ICL Calculator Section */}
        <section id="calculadora" className="py-24 bg-background/70">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-headline text-4xl md:text-5xl font-bold">
                Descubre tu Candidatura Ideal con ICL-MINT®
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Tu belleza, basada en datos. Nuestro Índice de Candidatura para
                Lifting (ICL) es una herramienta exclusiva que nos permite
                realizar un diagnóstico preciso y 100% personalizado. Evalúa los
                factores clave para asegurar que el tratamiento con hilos
                tensores MINT® sea la mejor opción para ti.
              </p>
            </div>
            <div className="mt-16">
              <ICLCalculator />
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section id="filosofia" className="py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-headline text-4xl md:text-5xl font-bold">
                Nuestra Filosofía M.A.P.®
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                El envejecimiento no es solo la caída del tejido. Es un cambio
                en la estructura y la calidad de la piel. Por eso, nuestro
                enfoque MINT® Architectural Lift™ no solo "levanta", sino que
                re-arquitecturiza tu belleza natural desde adentro hacia afuera,
                basado en 3 pilares fundamentales.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              {mapPillars.map(pillar => (
                <div key={pillar.name} className="flex flex-col items-center">
                  <div className="bg-primary/20 text-primary rounded-full p-3 mb-4">
                    <Gem className="w-7 h-7" />
                  </div>
                  <h3 className="font-headline text-2xl font-semibold">
                    {pillar.name}
                  </h3>
                  <p className="mt-2 text-muted-foreground max-w-xs mx-auto">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Protocols Section */}
        <section id="protocolos" className="py-24 bg-background/70">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">
              Descubre tu Protocolo Ideal
            </h2>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
              Cada zona de tu rostro y cuerpo merece una solución diseñada a la
              perfección.
            </p>
          </div>

          <div className="mt-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            <div>
              <h3 className="font-headline text-3xl font-bold mb-8 text-center md:text-left">
                Arquitectura Facial
              </h3>
              <div className="space-y-6">
                {facialProtocols.map(protocol => (
                  <div key={protocol.name}>
                    <h4 className="font-semibold text-lg text-primary">
                      {protocol.name}
                    </h4>
                    <p className="text-muted-foreground mt-1">
                      {protocol.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-headline text-3xl font-bold mb-8 text-center md:text-left">
                Arquitectura Corporal
              </h3>
              <div className="space-y-6">
                {corporalProtocols.map(protocol => (
                  <div key={protocol.name}>
                    <h4 className="font-semibold text-lg text-primary">
                      {protocol.name}
                    </h4>
                    <p className="text-muted-foreground mt-1">
                      {protocol.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-background/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
          <Logo />
          <p className="mt-4 text-sm">
            MINT® Architectural Lift™ &copy; {new Date().getFullYear()}. Todos
            los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
