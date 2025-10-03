'use client';

import Image from 'next/image';
import { Gem, Route, Milestone, Lightbulb, UserCheck, Search, Award } from 'lucide-react';
import Logo from '@/components/logo';
import {
  facialProtocols,
  corporalProtocols,
  mapPillars,
} from '@/lib/assets';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import ICLCalculator from '@/components/icl-calculator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';


export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  const learningJourney = [
    {
      icon: Search,
      title: 'Punto de Partida: Búsqueda de Innovación',
      description:
        'El médico experto busca técnicas avanzadas que ofrezcan resultados superiores y seguros más allá de los métodos tradicionales.',
    },
    {
      icon: Route,
      title: 'Conceptualización: La Filosofía M.A.P.®',
      description:
        'Descubre un sistema tridimensional (Mapeo, Aplicación, Potenciación) que redefine el lifting no quirúrgico, pasando de un simple tensado a una verdadera re-arquitectura facial.',
    },
    {
      icon: Award,
      title: 'Validación Clínica: Dominio del Método',
      description:
        'El médico integra el M.A.P.® en su práctica, logrando resultados predecibles, naturales y reproducibles, lo que aumenta la confianza en la técnica.',
    },
    {
      icon: Lightbulb,
      title: 'Herramienta de Diagnóstico: El ICL-MINT®',
      description:
        'Utiliza la calculadora como una herramienta de screening para objetivizar la selección de pacientes, estandarizando criterios clave para el éxito del tratamiento.',
    },
    {
      icon: UserCheck,
      title: 'Precisión Diagnóstica: Selección Óptima del Paciente',
      description:
        'El médico se siente empoderado para identificar al candidato ideal, gestionar expectativas y diseñar planes de tratamiento con mayor precisión y seguridad.',
    },
  ];

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
        <section className="relative h-[60vh] flex items-center justify-center text-center px-4 pt-20">
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

        {/* Learning Journey Section */}
        <section id="viaje-aprendizaje" className="py-24 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-headline text-4xl md:text-5xl font-bold animate-in fade-in slide-in-from-bottom-5 duration-700">
                El Viaje del Experto con MINT®
              </h2>
              <p className="mt-6 text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-5 duration-700" style={{ animationDelay: '200ms' }}>
                Una metodología diseñada para potenciar la práctica clínica y elevar los resultados en medicina estética.
              </p>
            </div>
            <div className="relative mt-20 max-w-3xl mx-auto">
              <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-0.5 bg-border"></div>
              {learningJourney.map((item, index) => (
                <div key={index} className="relative mb-12 animate-in fade-in slide-in-from-bottom-5 duration-700" style={{ animationDelay: `${300 + index * 150}ms` }}>
                  <div className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                       <div className={`absolute top-1/2 -translate-y-1/2 ${index % 2 === 0 ? 'right-1/2 translate-x-1/2' : 'left-1/2 -translate-x-1/2'}`}>
                          <div className="bg-primary rounded-full p-2 ring-8 ring-background">
                            <item.icon className="w-5 h-5 text-primary-foreground" />
                          </div>
                        </div>
                        <Card className="shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                          <CardHeader>
                            <CardTitle className="font-headline text-lg">{item.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground text-sm">{item.description}</p>
                          </CardContent>
                        </Card>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <div className="bg-card">
          <section id="filosofia" className="py-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                 <h2 className="font-headline text-4xl md:text-5xl font-bold animate-in fade-in slide-in-from-bottom-5 duration-700">
                    M.A.P.®
                 </h2>
              </div>
              <div className="max-w-2xl mx-auto space-y-12">
                {mapPillars.map((pillar, index) => (
                  <div key={pillar.name} className="flex items-start gap-6 md:gap-8 animate-in fade-in slide-in-from-bottom-5 duration-700"
                    style={{ animationDelay: `${300 + index * 150}ms` }}>
                    <div className="font-headline text-5xl md:text-7xl font-bold text-primary/50 w-12 text-center">
                      {pillar.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                       {pillar.href ? (
                        <a href={pillar.href} className="font-headline text-2xl md:text-3xl font-bold hover:text-primary transition-colors">
                          {pillar.name}
                        </a>
                      ) : (
                        <h3 className="font-headline text-2xl md:text-3xl font-bold">{pillar.name}</h3>
                      )}
                      <p className="mt-2 text-muted-foreground">
                        {pillar.description}
                         {pillar.creator && (
                          <span className="block text-sm text-muted-foreground/80 mt-1">
                           {pillar.creator}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* ICL Calculator Section */}
        <section id="calculadora" className="py-24 bg-background/70">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-headline text-4xl md:text-5xl font-bold animate-in fade-in slide-in-from-bottom-5 duration-700">
                ICL-MINT®
              </h2>
              <p className="mt-4 text-sm text-muted-foreground animate-in fade-in slide-in-from-bottom-5 duration-700" style={{ animationDelay: '100ms' }}>
                Creado por Felipe Franco
              </p>
              <p className="mt-6 text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-5 duration-700" style={{ animationDelay: '200ms' }}>
                Tu belleza, basada en datos. Nuestro Índice de Candidatura para
                Lifting (ICL) es una herramienta exclusiva que nos permite
                realizar un diagnóstico preciso y 100% personalizado. Evalúa los
                factores clave para asegurar que el tratamiento con hilos
                tensores MINT® sea la mejor opción para ti.
              </p>
            </div>
            <div className="mt-16 animate-in fade-in slide-in-from-bottom-5 duration-700" style={{ animationDelay: '300ms' }}>
              <ICLCalculator />
            </div>
          </div>
        </section>

        {/* Protocols Section */}
        <section id="protocolos" className="py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-headline text-4xl md:text-5xl font-bold animate-in fade-in slide-in-from-bottom-5 duration-700">
              Descubre tu Protocolo Ideal
            </h2>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-5 duration-700" style={{ animationDelay: '200ms' }}>
              Cada zona de tu rostro y cuerpo merece una solución diseñada a la
              perfección.
            </p>
          </div>

          <div className="mt-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h3 className="font-headline text-3xl font-bold mb-8 text-center animate-in fade-in slide-in-from-bottom-5 duration-700" style={{ animationDelay: '300ms' }}>
                Arquitectura Facial
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {facialProtocols.map((protocol, index) => (
                   <div key={protocol.name} className="animate-in fade-in slide-in-from-bottom-5 duration-500" style={{ animationDelay: `${400 + index * 100}ms`, animationFillMode: 'backwards' }}>
                     <Card className="h-full bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 overflow-hidden text-left">
                        <Image
                          src={protocol.imageUrl}
                          alt={protocol.name}
                          width={400}
                          height={300}
                          className="w-full h-40 object-cover"
                          data-ai-hint={protocol.imageHint}
                        />
                       <CardContent className="p-4">
                         <h4 className="font-semibold text-lg text-foreground">
                           {protocol.name}
                         </h4>
                         <p className="text-muted-foreground mt-1 text-sm">
                           {protocol.description}
                         </p>
                       </CardContent>
                     </Card>
                   </div>
                ))}
              </div>
            </div>
             <div>
              <h3 className="font-headline text-3xl font-bold mb-8 text-center animate-in fade-in slide-in-from-bottom-5 duration-700" style={{ animationDelay: '400ms' }}>
                Arquitectura Corporal
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {corporalProtocols.map((protocol, index) => (
                  <div key={protocol.name} className="animate-in fade-in slide-in-from-bottom-5 duration-500" style={{ animationDelay: `${500 + index * 100}ms`, animationFillMode: 'backwards' }}>
                    <Card className="h-full bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 overflow-hidden text-left">
                        <Image
                          src={protocol.imageUrl}
                          alt={protocol.name}
                          width={400}
                          height={300}
                          className="w-full h-40 object-cover"
                          data-ai-hint={protocol.imageHint}
                        />
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-lg text-foreground">
                          {protocol.name}
                        </h4>
                        <p className="text-muted-foreground mt-1 text-sm">
                          {protocol.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="py-12 bg-background/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground animate-in fade-in-25 duration-700">
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
