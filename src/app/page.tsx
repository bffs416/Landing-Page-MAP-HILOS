
'use client';

import Image from 'next/image';
import { Route, Milestone, Lightbulb, UserCheck, Search, Award, ChevronRight, User, GraduationCap, Medal, Briefcase, School, Waves } from 'lucide-react';
import Logo from '@/components/logo';
import {
  facialProtocols,
  corporalProtocols,
  mapPillars,
} from '@/lib/assets';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import ICLCalculator from '@/components/icl-calculator';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useState, useRef, useEffect } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { EffectCard } from '@/components/effect-card';
import InteractiveGrid from '@/components/interactive-grid';

const AnimatedTitle = ({ text }: { text: string }) => {
  return (
    <h1 className="font-headline text-5xl md:text-7xl font-bold text-white">
      {text.split('').map((letter, index) => (
        <span
          key={index}
          className="animated-title-letter"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </h1>
  );
};


export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');
  const [isCalculatorVisible, setIsCalculatorVisible] = useState(false);
  const calculatorRef = useRef<HTMLDivElement>(null);
  
  const [activeFacialProtocol, setActiveFacialProtocol] = useState(facialProtocols[0]);
  const [activeCorporalProtocol, setActiveCorporalProtocol] = useState(corporalProtocols[0]);


  useEffect(() => {
    if (isCalculatorVisible) {
      setTimeout(() => {
        calculatorRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }, 100); // Small delay to allow collapsible to start opening
    }
  }, [isCalculatorVisible]);

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
    <div className="bg-transparent text-foreground min-h-screen font-body">
      <header className="absolute top-0 left-0 w-full z-50 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Logo />
            <Button asChild variant="ghost" className="text-white hover:bg-white/10 hover:text-white">
              <Link href="/trivia">Trivia PDO</Link>
            </Button>
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
            <AnimatedTitle text="MINT® Architectural Lift™" />
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
            <div className="relative mt-20 max-w-lg mx-auto md:max-w-none lg:max-w-3xl">
              <div className="absolute top-0 h-full w-0.5 bg-border left-4 md:left-1/2 md:-translate-x-1/2"></div>
              {learningJourney.map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    "relative mb-12 flex items-start",
                    "animate-in fade-in slide-in-from-bottom-5 duration-700 md:items-center"
                  )}
                  style={{ animationDelay: `${300 + index * 150}ms` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-1/2 md:-translate-x-1/2 -ml-0.5">
                    <div className="bg-primary rounded-full p-2 ring-8 ring-background">
                      <item.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>
                  <div
                    className={cn(
                      "w-full flex pl-12 md:pl-0",
                      index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                    )}
                  >
                    <div
                      className={cn(
                        "w-full md:w-1/2",
                        index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                      )}
                    >
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

        {/* Creator Section */}
        <section id="creator" className="py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square max-w-md mx-auto">
                <InteractiveGrid />
                <div className="absolute inset-0 flex items-center justify-center p-8">
                   <Image
                    src="https://images.unsplash.com/photo-1580281657527-808a3e4b4523?q=80&w=1974&auto=format&fit=crop"
                    alt="Felipe Franco"
                    width={400}
                    height={400}
                    className="rounded-full object-cover aspect-square shadow-2xl"
                    data-ai-hint="man portrait"
                  />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h2 className="font-headline text-4xl md:text-5xl font-bold">
                  Conoce al Experto
                </h2>
                <p className="mt-4 text-2xl text-primary font-headline">Felipe Franco</p>
                <p className="mt-6 text-lg text-muted-foreground">
                  Director de Producto en Hansbiomed Colombia, Franco es un apasionado por la academia y un referente clave en el desarrollo y la aplicación de los hilos tensores MINT®. Su visión combina innovación, ciencia y educación para elevar los estándares de la medicina estética.
                </p>
                <div className="mt-8 flex gap-8 justify-center md:justify-start">
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-6 h-6 text-primary"/>
                    <span className="font-semibold">Dir. de Producto</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <School className="w-6 h-6 text-primary"/>
                    <span className="font-semibold">Académico</span>
                  </div>
                   <div className="flex items-center gap-3">
                    <Lightbulb className="w-6 h-6 text-primary"/>
                    <span className="font-semibold">Innovador</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Collapsible open={isCalculatorVisible} onOpenChange={setIsCalculatorVisible} className="bg-card transition-all duration-500">
          {/* Philosophy Section */}
          <section id="filosofia" className="py-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl mx-auto">
                <div className="space-y-12">
                  {mapPillars.map((pillar, index) => (
                    <div key={pillar.name} className="flex items-center gap-6 md:gap-8 animate-in fade-in slide-in-from-bottom-5 duration-700"
                      style={{ animationDelay: `${300 + index * 150}ms` }}>
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center shadow-inner">
                          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-md">
                            <span className="font-headline text-3xl font-bold text-primary-foreground">{pillar.name.charAt(0)}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                         <h3 className="font-headline text-2xl md:text-3xl font-bold">{pillar.name}</h3>
                        <p className="mt-2 text-muted-foreground">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                 <div className="text-center mt-16 animate-in fade-in slide-in-from-bottom-5 duration-700" style={{ animationDelay: '900ms' }}>
                    <div className="mb-4 inline-block bg-primary/10 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      Filosofía M.A.P.® y herramienta ICL-MINT® creadas por Felipe Franco
                    </div>
                   <CollapsibleTrigger asChild>
                     <Button
                       variant="default"
                       size="lg"
                       className="shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1 transition-all duration-300"
                     >
                       {isCalculatorVisible ? 'Ocultar herramienta' : 'Ver herramienta'}
                       <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-300 ${isCalculatorVisible ? 'rotate-180' : ''}`} />
                     </Button>
                  </CollapsibleTrigger>
                </div>
              </div>
            </div>
          </section>
          
          <CollapsibleContent className="transition-all duration-500 ease-in-out">
            {/* ICL Calculator Section */}
            <section id="calculadora" ref={calculatorRef} className="py-24 bg-background/70">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                  <h2 className="font-headline text-4xl md:text-5xl font-bold animate-in fade-in slide-in-from-bottom-5 duration-700">
                    ICL-MINT®
                  </h2>
                  <div className="mt-4 inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium animate-in fade-in slide-in-from-bottom-5 duration-700" style={{ animationDelay: '100ms' }}>
                    Creado por Felipe Franco
                  </div>
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
          </CollapsibleContent>
        </Collapsible>


        {/* Protocols Section */}
        <section id="protocolos" className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-headline text-4xl md:text-5xl font-bold animate-in fade-in slide-in-from-bottom-5 duration-700">
                Descubre tu Protocolo Ideal
              </h2>
              <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-5 duration-700" style={{ animationDelay: '200ms' }}>
                Cada zona de tu rostro y cuerpo merece una solución diseñada a la perfección. Selecciona un protocolo para ver los detalles.
              </p>
            </div>

            {/* Facial Protocols */}
            <div className="mb-24">
              <h3 className="font-headline text-3xl font-bold mb-8 text-center animate-in fade-in slide-in-from-bottom-5 duration-700" style={{ animationDelay: '300ms' }}>
                Arquitectura Facial
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-1 space-y-4">
                  {facialProtocols.map((protocol, index) => (
                    <button
                      key={protocol.name}
                      onClick={() => setActiveFacialProtocol(protocol)}
                      className={cn(
                        "w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center justify-between",
                        activeFacialProtocol?.name === protocol.name ? "bg-primary/20 shadow-lg" : "hover:bg-card/60"
                      )}
                    >
                      <div>
                        <h4 className="font-semibold text-lg text-foreground">{protocol.name}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{protocol.description}</p>
                      </div>
                      <ChevronRight className={cn("w-5 h-5 text-primary transition-transform", activeFacialProtocol?.name === protocol.name ? "translate-x-1" : "")}/>
                    </button>
                  ))}
                </div>
                <div className="md:col-span-2">
                  {activeFacialProtocol ? (
                    <Card className="shadow-xl bg-card/80 backdrop-blur-sm sticky top-24">
                      <CardContent className="p-6">
                        <p className="text-base font-headline mb-4">{activeFacialProtocol.fullDescription}</p>
                        <Carousel opts={{ align: "start" }} className="w-full">
                          <CarouselContent>
                            {activeFacialProtocol.steps.map((step, index) => (
                              <CarouselItem key={index}>
                                <div className="p-1">
                                    <EffectCard
                                      icon={<Waves size={24}/>}
                                      title={step.title}
                                      description={step.description}
                                    />
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious className="hidden sm:flex" />
                          <CarouselNext className="hidden sm:flex" />
                        </Carousel>
                      </CardContent>
                    </Card>
                  ) : (
                    <div className="flex items-center justify-center h-full min-h-[300px] bg-card/50 rounded-lg">
                      <p className="text-muted-foreground">Selecciona un protocolo para ver los detalles.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Corporal Protocols */}
            <div>
              <h3 className="font-headline text-3xl font-bold mb-8 text-center animate-in fade-in slide-in-from-bottom-5 duration-700" style={{ animationDelay: '400ms' }}>
                Arquitectura Corporal
              </h3>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-1 space-y-4">
                  {corporalProtocols.map((protocol, index) => (
                    <button
                      key={protocol.name}
                      onClick={() => setActiveCorporalProtocol(protocol)}
                      className={cn(
                        "w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center justify-between",
                        activeCorporalProtocol?.name === protocol.name ? "bg-primary/20 shadow-lg" : "hover:bg-card/60"
                      )}
                    >
                      <div>
                        <h4 className="font-semibold text-lg text-foreground">{protocol.name}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{protocol.description}</p>
                      </div>
                      <ChevronRight className={cn("w-5 h-5 text-primary transition-transform", activeCorporalProtocol?.name === protocol.name ? "translate-x-1" : "")}/>
                    </button>
                  ))}
                </div>
                <div className="md:col-span-2">
                  {activeCorporalProtocol ? (
                    <Card className="shadow-xl bg-card/80 backdrop-blur-sm sticky top-24">
                      <CardContent className="p-6">
                        <p className="text-base font-headline mb-4">{activeCorporalProtocol.fullDescription}</p>
                        <Carousel opts={{ align: "start" }} className="w-full">
                          <CarouselContent>
                            {activeCorporalProtocol.steps.map((step, index) => (
                              <CarouselItem key={index}>
                                <div className="p-1">
                                  <EffectCard
                                      icon={<Waves size={24}/>}
                                      title={step.title}
                                      description={step.description}
                                    />
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious className="hidden sm:flex" />
                          <CarouselNext className="hidden sm:flex" />
                        </Carousel>
                      </CardContent>
                    </Card>
                  ) : (
                    <div className="flex items-center justify-center h-full min-h-[300px] bg-card/50 rounded-lg">
                      <p className="text-muted-foreground">Selecciona un protocolo para ver los detalles.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-background/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground animate-in fade-in-25 duration-700">
          <div className="flex justify-center">
            <Logo />
          </div>
          <p className="mt-4 text-sm">
            MINT® Architectural Lift™ &copy; {new Date().getFullYear()}. Todos
            los derechos reservados.
          </p>
          <p className="mt-2 text-xs">
            Diseñado por{" "}
            <a
              href="https://www.nyvaragroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Nyvara Group
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
