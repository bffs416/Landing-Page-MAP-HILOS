
'use client';

import Image from 'next/image';
import { Route, Milestone, Lightbulb, UserCheck, Search, Award, ChevronRight, User, GraduationCap, Medal, Briefcase, School, Waves, Stethoscope, Scissors, HeartPulse, BrainCircuit, Github } from 'lucide-react';
import Logo from '@/components/logo';
import {
  facialProtocols,
  corporalProtocols,
  mapPillars,
  heroVideo,
} from '@/lib/assets';
import ICLCalculator from '@/components/icl-calculator';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useState, useRef, useEffect } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { EffectCard } from '@/components/effect-card';
import dynamic from 'next/dynamic';
import AnimatedGallery from '@/components/animated-gallery';
import { Separator } from '@/components/ui/separator';
import VectorLiftContent from '@/components/vector-lift-content';
import ApexLiftContent from '@/components/apex-lift-content';
import RhinoStructureContent from '@/components/rhino-structure-content';
import ContourNeckContent from '@/components/contour-neck-content';
import CoreDefineContent from '@/components/core-define-content';
import ArmContourContent from '@/components/arm-contour-content';
import GluteCurveContent from '@/components/glute-curve-content';

const InteractiveArc = dynamic(() => import('@/components/interactive-arc'), {
  ssr: false,
});


const AnimatedTitle = ({ text }: { text: string }) => {
  return (
    <h1 className="font-headline text-5xl md:text-7xl font-bold text-white">
      {text.split('').map((letter, index) => (
        <span
          key={index}
          className="animated-title-letter"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {letter === ' ' ? ' ' : letter}
        </span>
      ))}
    </h1>
  );
};

const DynamicCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    const cardRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const card = cardRef.current;
      if (!card) return;
  
      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
      };
  
      card.addEventListener('mousemove', handleMouseMove);
      return () => card.removeEventListener('mousemove', handleMouseMove);
    }, []);
  
    return (
      <div ref={cardRef} className={cn("dynamic-card", className)}>
        {children}
        <div className="shine" />
        <div className="background">
          <div className="tiles" />
          <div className="line line-1" />
          <div className="line line-2" />
          <div className="line line-3" />
        </div>
      </div>
    );
  };

const ProtocolsSection = () => {
    const [activeFacialTab, setActiveFacialTab] = useState<string | undefined>(undefined);
    const [activeCorporalTab, setActiveCorporalTab] = useState<string | undefined>(undefined);

    const handleFacialTabChange = (value: string) => {
        setActiveFacialTab(prev => (prev === value ? undefined : value));
    };

    const handleCorporalTabChange = (value: string) => {
        setActiveCorporalTab(prev => (prev === value ? undefined : value));
    };

  return (
      <div id="protocolos" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <DynamicCard className="mb-16 text-center">
                  <h2 className="font-headline text-4xl md:text-5xl font-bold">
                      Descubre tu Protocolo Ideal
                  </h2>
                  <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
                      Cada zona de tu rostro y cuerpo merece una solución diseñada a la perfección. Selecciona un protocolo para ver los detalles.
                  </p>
              </DynamicCard>

              {/* Facial Protocols */}
              <div className="mb-24">
                  <DynamicCard className="mb-8">
                    <h3 className="font-headline text-3xl font-bold text-center">
                        Arquitectura Facial
                    </h3>
                  </DynamicCard>
                   <Tabs
                        value={activeFacialTab}
                        onValueChange={handleFacialTabChange}
                        className="w-full"
                    >
                      <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto gap-4 bg-transparent p-0">
                         {facialProtocols.map((protocol) => (
                            <TabsTrigger key={protocol.name} value={protocol.name} className="protocol-trigger whitespace-normal text-xs md:text-sm">
                               {protocol.name}
                            </TabsTrigger>
                         ))}
                      </TabsList>
                      {facialProtocols.map((protocol) => (
                          <TabsContent key={protocol.name} value={protocol.name} className="mt-8">
                             {activeFacialTab === protocol.name && (
                                <Card className="bg-card/80 backdrop-blur-sm border-border/50 rounded-lg shadow-lg">
                                    <CardContent className="p-6">
                                      {protocol.contentComponent ? (
                                          <protocol.contentComponent />
                                      ) : (
                                          <p className="text-base font-headline mb-4">{protocol.description}</p>
                                      )}
                                    </CardContent>
                                </Card>
                            )}
                          </TabsContent>
                      ))}
                  </Tabs>
              </div>

              {/* Corporal Protocols */}
              <div>
                  <DynamicCard className="mb-8">
                    <h3 className="font-headline text-3xl font-bold text-center">
                        Arquitectura Corporal
                    </h3>
                  </DynamicCard>
                    <Tabs
                        value={activeCorporalTab}
                        onValueChange={handleCorporalTabChange}
                        className="w-full"
                    >
                      <TabsList className="grid w-full grid-cols-3 h-auto gap-4 bg-transparent p-0">
                         {corporalProtocols.map((protocol) => (
                            <TabsTrigger key={protocol.name} value={protocol.name} className="protocol-trigger whitespace-normal text-xs md:text-sm">
                               {protocol.name}
                            </TabsTrigger>
                         ))}
                      </TabsList>
                      {corporalProtocols.map((protocol) => (
                          <TabsContent key={protocol.name} value={protocol.name} className="mt-8">
                            {activeCorporalTab === protocol.name && (
                                <Card className="bg-card/80 backdrop-blur-sm border-border/50 rounded-lg shadow-lg">
                                    <CardContent className="p-6">
                                      {protocol.contentComponent ? (
                                          <protocol.contentComponent />
                                      ) : (
                                          <p className="text-base font-headline mb-4">{protocol.fullDescription}</p>
                                      )}
                                    </CardContent>
                                </Card>
                            )}
                          </TabsContent>
                      ))}
                  </Tabs>
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
      title: 'Decisión Clínica: Paciente Ideal',
      description: 'Si el ICL-MINT® indica que el paciente es candidato ideal, estás listo para elegir y aplicar la técnica de lifting con hilos MINT® más adecuada para sus necesidades.',
      buttonText: 'Paciente ideal, ¡procedamos!',
    },
    {
      icon: Milestone,
      title: 'Decisión Clínica: Plan B Estratégico',
      description: (
        <span>
          Si el ICL-MINT® sugiere que el paciente no es el candidato ideal,{' '}
          <strong>¡no es un 'no', es un 'todavía no'!</strong> Este es el momento
          de <strong>brillar como estratega</strong>. Diseña un plan de
          preparación con bioestimuladores, tecnologías basadas en energía o
          enzimas para optimizar la piel y el tejido. Esto no solo gestiona las
          expectativas, sino que <strong>construye una relación de confianza y
          asegura el éxito futuro</strong> del tratamiento con hilos MINT®.
        </span>
      ),
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
            <div className="flex items-center gap-2">
              <Button asChild variant="ghost" className="text-white hover:bg-white/10 hover:text-white">
                <Link href="/trivia">Trivia PDO</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
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
            <p className="mt-4 text-xl md:text-xl max-w-3xl mx-auto text-white/90">
              Rediseña. Reposiciona. Rejuvenece.
            </p>
            <p className="mt-2 text-lg md:text-lg max-w-3xl mx-auto text-white/80">
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
                El Viaje del Maestro con MINT®
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
                                <p className="text-muted-foreground text-base">{item.description}</p>
                                {item.buttonText && (
                                <Button
                                    className="mt-4 glowing-button"
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
                         <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-500">
                           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {mapPillars.map((pillar) => (
                              <EffectCard
                                key={pillar.name}
                                icon={<div className="font-headline text-3xl font-bold text-primary">{pillar.name.charAt(0)}</div>}
                                title={pillar.name}
                                description={pillar.description}
                                imageUrl={pillar.imageUrl}
                                imageHint={pillar.imageHint}
                              />
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
              <div className="relative aspect-square max-w-md mx-auto flex items-center justify-center">
                <InteractiveArc />
                <Image
                  src="/creator.png"
                  alt="Felipe Franco"
                  width={320}
                  height={320}
                  className="absolute rounded-full object-cover aspect-square shadow-2xl z-10"
                  data-ai-hint="man portrait"
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="font-headline text-4xl md:text-5xl font-bold">
                  Conoce al Arquitecto
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
                    <div className="mb-4 inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                      Filosofía M.A.P.® y herramienta ICL-MINT® creadas por Felipe Franco
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Felipe's Challenge Section */}
        <section className="py-12 animate-in fade-in slide-in-from-bottom-10 duration-700">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <DynamicCard className="text-center">
                    <h3 className="font-headline text-3xl font-bold">¿Crees que puedes completar la trivia y certificarte?</h3>
                    <p className="mt-2 text-lg text-muted-foreground">Reto de Felipe.</p>
                    <Button asChild size="lg" className="mt-6">
                        <Link href="/trivia">Acepto el Reto</Link>
                    </Button>
                </DynamicCard>
            </div>
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
      </main>
    </div>
  );
}
