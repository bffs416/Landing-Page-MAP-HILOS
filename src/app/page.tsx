
'use client';

import Image from 'next/image';
import { Route, Milestone, Lightbulb, UserCheck, Search, Award, ChevronRight, User, GraduationCap, Medal, Briefcase, School, Waves, Stethoscope, Scissors, HeartPulse, BrainCircuit } from 'lucide-react';
import Logo from '@/components/logo';
import {
  facialProtocols,
  corporalProtocols,
  mapPillars,
} from '@/lib/assets';
import { heroVideo } from '@/lib/assets';
import ICLCalculator from '@/components/icl-calculator';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useState, useRef, useEffect } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { EffectCard } from '@/components/effect-card';
import InteractiveGrid from '@/components/interactive-grid';
import AnimatedGallery from '@/components/animated-gallery';
import SplitScreenSpeakers from '@/components/split-screen-speakers';
import { Separator } from '@/components/ui/separator';

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

const ProtocolsSection = () => {
  return (
      <div id="protocolos" className="py-16">
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
                  <Accordion type="single" collapsible className="w-full space-y-4">
                      {facialProtocols.map((protocol) => (
                          <AccordionItem key={protocol.name} value={protocol.name} className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg shadow-lg">
                              <AccordionTrigger className="p-6 text-left hover:no-underline">
                                  <div>
                                      <h4 className="font-semibold text-lg text-foreground">{protocol.name}</h4>
                                      <p className="text-sm text-muted-foreground mt-1">{protocol.description}</p>
                                  </div>
                              </AccordionTrigger>
                              <AccordionContent className="p-6 pt-0">
                                  {protocol.contentComponent ? (
                                      <protocol.contentComponent />
                                  ) : (
                                      <p className="text-base font-headline mb-4">{protocol.description}</p>
                                  )}
                                  <Carousel opts={{ align: "start" }} className="w-full mt-6">
                                      <CarouselContent>
                                          {protocol.steps.map((step, index) => (
                                              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                                  <div className="p-1 h-full">
                                                      <EffectCard
                                                          icon={<Waves size={24} />}
                                                          title={step.title}
                                                          description={step.description}
                                                          imageUrl={step.imageUrl}
                                                          imageHint={step.imageHint}
                                                      />
                                                  </div>
                                              </CarouselItem>
                                          ))}
                                      </CarouselContent>
                                      <CarouselPrevious className="hidden sm:flex" />
                                      <CarouselNext className="hidden sm:flex" />
                                  </Carousel>
                              </AccordionContent>
                          </AccordionItem>
                      ))}
                  </Accordion>
              </div>

              {/* Corporal Protocols */}
              <div>
                  <h3 className="font-headline text-3xl font-bold mb-8 text-center animate-in fade-in slide-in-from-bottom-5 duration-700" style={{ animationDelay: '400ms' }}>
                      Arquitectura Corporal
                  </h3>
                   <Accordion type="single" collapsible className="w-full space-y-4">
                      {corporalProtocols.map((protocol) => (
                          <AccordionItem key={protocol.name} value={protocol.name} className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg shadow-lg">
                              <AccordionTrigger className="p-6 text-left hover:no-underline">
                                  <div>
                                      <h4 className="font-semibold text-lg text-foreground">{protocol.name}</h4>
                                      <p className="text-sm text-muted-foreground mt-1">{protocol.description}</p>
                                  </div>
                              </AccordionTrigger>
                              <AccordionContent className="p-6 pt-0">
                                  {protocol.contentComponent ? (
                                      <protocol.contentComponent />
                                  ) : (
                                      <p className="text-base font-headline mb-4">{protocol.fullDescription}</p>
                                  )}
                                  {protocol.steps.length > 0 && (
                                      <Carousel opts={{ align: "start" }} className="w-full mt-6">
                                          <CarouselContent>
                                              {protocol.steps.map((step, index) => (
                                                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                                      <div className="p-1 h-full">
                                                          <EffectCard
                                                              icon={<Waves size={24} />}
                                                              title={step.title}
                                                              description={step.description}
                                                              imageUrl={step.imageUrl}
                                                              imageHint={step.imageHint}
                                                          />
                                                      </div>
                                                  </CarouselItem>
                                              ))}
                                          </CarouselContent>
                                          <CarouselPrevious className="hidden sm:flex" />
                                          <CarouselNext className="hidden sm:flex" />
                                      </Carousel>
                                  )}
                              </AccordionContent>
                          </AccordionItem>
                      ))}
                  </Accordion>
              </div>
          </div>
      </div>
  );
}


export default function Home() {
  const [activeJourneyStep, setActiveJourneyStep] = useState(0);

  const learningJourney = [
    {
      icon: Search,
      title: 'Punto de Partida: Búsqueda de Innovación',
      description: 'Estás buscando nuevas técnicas y una academia que te proporcione conocimiento y seguridad para ofrecer resultados superiores.',
      buttonText: 'Sí, ese soy yo',
    },
    {
      icon: Route,
      title: 'Conceptualización: La Filosofía M.A.P.®',
      description: 'Perfecto. Ahora aplica esta filosofía en tu consulta: Mapeo, Aplicación y Potenciación. Un sistema que redefine el lifting, pasando del simple tensado a una verdadera re-arquitectura facial.',
      buttonText: 'Entendido, ¿qué sigue?',
    },
    {
      icon: Lightbulb,
      title: 'Implementación: Herramienta de Diagnóstico ICL-MINT®',
      description: 'Ahora, cuando un paciente considere los hilos, implementa la herramienta ICL-MINT®. Te ayudará a objetivizar la selección del paciente y estandarizar tus criterios para el éxito.',
      buttonText: 'Lo usaré, ¿y después?',
    },
     {
      icon: UserCheck,
      title: 'Decisión Clínica: Selección Óptima del Paciente',
      description: 'Si el ICL-MINT® indica que el paciente es candidato ideal, estás listo para elegir la técnica. Si no, diseña un plan con complementos (bioestimuladores, energía) para prepararlo. Así aseguras el éxito futuro y gestionas expectativas.',
      buttonText: 'Comprendo la estrategia',
    },
    {
      icon: Award,
      title: 'Maestría: Dominio del Método',
      description: '¡Felicidades! Al integrar este viaje, logras resultados predecibles, naturales y reproducibles. Has elevado tu práctica, aumentando tu confianza y la de tus pacientes en la técnica MINT®.',
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
          <video
            src={heroVideo}
            autoPlay
            loop
            muted
            className="absolute -z-10 w-full h-full object-cover"
          />
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
            <div className="relative mt-20 max-w-5xl mx-auto">
              <div className="absolute top-0 h-full w-0.5 bg-border left-4 md:left-1/2 md:-translate-x-1/2"></div>
              {learningJourney.map((item, index) => (
                index <= activeJourneyStep && (
                  <div
                    key={index}
                    className={cn(
                      "relative mb-24 flex flex-col items-center",
                      "animate-in fade-in slide-in-from-bottom-5 duration-700"
                    )}
                    style={{ animationDelay: `${100 * index}ms` }}
                  >
                    <div className="flex w-full items-start md:items-center">
                        <div className="absolute top-0 md:top-1/2 md:-translate-y-1/2 left-4 md:left-1/2 md:-translate-x-1/2 -ml-0.5">
                            <div className="bg-primary rounded-full p-2 ring-8 ring-background">
                                <item.icon className="w-5 h-5 text-primary-foreground" />
                            </div>
                        </div>
                        <div
                        className={cn(
                            "w-full flex ml-12 md:ml-0",
                            index % 2 === 0 ? "md:pr-8 md:justify-start" : "md:pl-8 md:justify-end"
                        )}
                        >
                        <div className="w-full md:w-1/2">
                            <Card className="shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                            <CardHeader>
                                <CardTitle className="font-headline text-lg">{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-sm">{item.description}</p>
                                {index === activeJourneyStep && item.buttonText && (
                                <Button 
                                    className="mt-4"
                                    onClick={() => setActiveJourneyStep(step => step + 1)}
                                >
                                    {item.buttonText}
                                </Button>
                                )}
                            </CardContent>
                            </Card>
                        </div>
                        </div>
                    </div>

                    {(index < activeJourneyStep || index === learningJourney.length -1) && (
                       <div className="w-full mt-12">
                        {(index === 1 && activeJourneyStep >= 1) ||
                         (index === 2 && activeJourneyStep >= 2) ||
                         (index === 3 && activeJourneyStep >= 3) ? (
                          <Separator className="w-1/2 mx-auto" />
                        ) : null}
                      </div>
                    )}


                    <div className="w-full mt-12">
                      {/* Conditionally render M.A.P. pillars */}
                      {index === 1 && activeJourneyStep >= 1 && (
                         <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-500">
                           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {mapPillars.map((pillar, pillarIndex) => (
                              <Card key={pillar.name} className="bg-card/50 shadow-sm">
                                <CardContent className="p-4">
                                  <div className="flex flex-col items-center text-center">
                                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-3">
                                      <span className="font-headline text-2xl font-bold text-primary">{pillar.name.charAt(0)}</span>
                                    </div>
                                    <h3 className="font-headline text-md font-bold">{pillar.name}</h3>
                                    <p className="text-xs text-muted-foreground mt-1">{pillar.description}</p>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Conditionally render ICL Calculator */}
                      {index === 2 && activeJourneyStep >= 2 && (
                        <div className="animate-in fade-in slide-in-from-bottom-5 duration-500">
                          <ICLCalculator />
                        </div>
                      )}
                      
                      {/* Conditionally render Protocols Section */}
                      {index === 3 && activeJourneyStep >= 3 && (
                        <div className="animate-in fade-in slide-in-from-bottom-5 duration-500">
                          <ProtocolsSection />
                        </div>
                      )}
                    </div>
                  </div>
                )
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
                 <div className="text-center mt-16 animate-in fade-in slide-in-from-bottom-5 duration-700" style={{ animationDelay: '900ms' }}>
                    <div className="mb-4 inline-block bg-primary/10 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      Filosofía M.A.P.® y herramienta ICL-MINT® creadas por Felipe Franco
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Speakers Section */}
        <section id="speakers" className="relative bg-background overflow-hidden">
          <SplitScreenSpeakers />
        </section>
        
        {/* Gallery Section */}
        <section id="gallery" className="py-24 bg-card overflow-hidden">
          <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="font-headline text-4xl md:text-5xl font-bold">Resultados que Hablan por Sí Mismos</h2>
                <p className="mt-6 text-lg text-muted-foreground">
                  Observa la transformación. Nuestra galería de antes y después demuestra la eficacia de los hilos tensores MINT® para un rejuvenecimiento natural y visible.
                </p>
            </div>
            <AnimatedGallery />
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
