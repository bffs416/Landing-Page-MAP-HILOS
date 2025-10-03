
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
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useState, useRef, useEffect } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';


export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');
  const [isCalculatorVisible, setIsCalculatorVisible] = useState(false);
  const calculatorRef = useRef<HTMLDivElement>(null);

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
              <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-1/2"></div>
              {learningJourney.map((item, index) => (
                 <div
                  key={index}
                  className="relative pl-12 mb-12 flex items-center md:pl-0 animate-in fade-in slide-in-from-bottom-5 duration-700"
                  style={{ animationDelay: `${300 + index * 150}ms` }}
                >
                  <div className={`flex items-start md:items-center w-full ${index % 2 === 0 ? 'md:flex-row md:justify-start' : 'md:flex-row-reverse md:justify-start'}`}>
                     <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-1/2 md:-translate-x-1/2">
                       <div className="bg-primary rounded-full p-2 ring-8 ring-background">
                        <item.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 md:px-8">
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
                  <Dialog key={protocol.name}>
                    <DialogTrigger asChild>
                      <div className="animate-in fade-in slide-in-from-bottom-5 duration-500" style={{ animationDelay: `${400 + index * 100}ms`, animationFillMode: 'backwards' }}>
                        <Card className="h-full bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 overflow-hidden text-left cursor-pointer flex flex-col">
                          <Image
                            src={protocol.imageUrl}
                            alt={protocol.name}
                            width={400}
                            height={300}
                            className="w-full h-40 object-cover"
                            data-ai-hint={protocol.imageHint}
                          />
                          <CardHeader className="p-4 flex-grow">
                             <CardTitle className="font-semibold text-lg text-foreground">
                              {protocol.name}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="p-4 pt-0">
                            <CardDescription className="text-muted-foreground mt-1 text-sm line-clamp-3">
                              {protocol.description}
                            </CardDescription>
                          </CardContent>
                        </Card>
                      </div>
                    </DialogTrigger>
                     <DialogContent className="max-w-lg md:max-w-3xl">
                      <DialogHeader>
                        <DialogTitle className="font-headline text-2xl">{protocol.name}</DialogTitle>
                         <DialogDescription className="text-muted-foreground pt-2">
                           {protocol.fullDescription}
                         </DialogDescription>
                      </DialogHeader>
                        <Carousel
                          opts={{
                            align: "start",
                            loop: true,
                          }}
                          className="w-full mt-4"
                        >
                          <CarouselContent>
                            {protocol.steps.map((step, index) => (
                              <CarouselItem key={index}>
                                <div>
                                  <Card>
                                    <CardContent className="p-4 flex flex-col items-center text-center gap-4">
                                       <Image
                                        src={step.imageUrl}
                                        alt={step.title}
                                        width={400}
                                        height={300}
                                        className="rounded-lg object-cover w-full h-60"
                                        data-ai-hint={step.imageHint}
                                      />
                                      <div className="space-y-1">
                                        <h4 className="font-headline text-md font-semibold">{step.title}</h4>
                                        <p className="text-xs text-muted-foreground">{step.description}</p>
                                      </div>
                                    </CardContent>
                                  </Card>
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious className="hidden sm:flex" />
                          <CarouselNext className="hidden sm:flex" />
                        </Carousel>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </div>
             <div>
              <h3 className="font-headline text-3xl font-bold mb-8 text-center animate-in fade-in slide-in-from-bottom-5 duration-700" style={{ animationDelay: '400ms' }}>
                Arquitectura Corporal
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {corporalProtocols.map((protocol, index) => (
                   <Dialog key={protocol.name}>
                    <DialogTrigger asChild>
                      <div className="animate-in fade-in slide-in-from-bottom-5 duration-500" style={{ animationDelay: `${500 + index * 100}ms`, animationFillMode: 'backwards' }}>
                        <Card className="h-full bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 overflow-hidden text-left cursor-pointer flex flex-col">
                            <Image
                              src={protocol.imageUrl}
                              alt={protocol.name}
                              width={400}
                              height={300}
                              className="w-full h-40 object-cover"
                              data-ai-hint={protocol.imageHint}
                            />
                          <CardHeader className="p-4 flex-grow">
                             <CardTitle className="font-semibold text-lg text-foreground">
                              {protocol.name}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="p-4 pt-0">
                            <CardDescription className="text-muted-foreground mt-1 text-sm line-clamp-3">
                              {protocol.description}
                            </CardDescription>
                          </CardContent>
                        </Card>
                      </div>
                    </DialogTrigger>
                     <DialogContent className="max-w-lg md:max-w-3xl">
                      <DialogHeader>
                        <DialogTitle className="font-headline text-2xl">{protocol.name}</DialogTitle>
                         <DialogDescription className="text-muted-foreground pt-2">
                           {protocol.fullDescription}
                         </DialogDescription>
                      </DialogHeader>
                       <Carousel
                          opts={{
                            align: "start",
                            loop: true,
                          }}
                          className="w-full mt-4"
                        >
                          <CarouselContent>
                            {protocol.steps.map((step, index) => (
                              <CarouselItem key={index}>
                                <div>
                                  <Card>
                                    <CardContent className="p-4 flex flex-col items-center text-center gap-4">
                                       <Image
                                        src={step.imageUrl}
                                        alt={step.title}
                                        width={400}
                                        height={300}
                                        className="rounded-lg object-cover w-full h-60"
                                        data-ai-hint={step.imageHint}
                                      />
                                      <div className="space-y-1">
                                        <h4 className="font-headline text-md font-semibold">{step.title}</h4>
                                        <p className="text-xs text-muted-foreground">{step.description}</p>
                                      </div>
                                    </CardContent>
                                  </Card>
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious className="hidden sm:flex" />
                          <CarouselNext className="hidden sm:flex" />
                        </Carousel>
                    </DialogContent>
                  </Dialog>
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
