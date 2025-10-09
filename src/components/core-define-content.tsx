import { Check, Shield, Activity, Target, AlertTriangle, Layers, Info, Users, GitMerge, ToyBrick, Puzzle, Milestone, ShieldCheck } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';
import { coreDefineSteps } from '@/lib/assets';

const CoreDefineContent = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4 text-card-foreground">
                <div>
                    <h3 className="font-headline text-3xl font-bold text-primary">CoreDefine™: Marcación Abdominal</h3>
                    <p className="mt-2 text-base text-muted-foreground">
                        Protocolo para definir el contorno abdominal, levantar el ombligo y tensar la piel.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="font-headline text-lg flex items-center gap-2">
                           <Info className="w-5 h-5 text-primary flex-shrink-0" />
                           <span className="text-left">Fundamentos</span>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2 text-sm text-muted-foreground">
                            Utiliza una combinación de hilos de tracción para crear un efecto de "ceñido" (cinching) y hilos de bioestimulación para mejorar la calidad y firmeza de la piel abdominal.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="font-headline text-lg flex items-center gap-2">
                           <Target className="w-5 h-5 text-primary flex-shrink-0" />
                           <span className="text-left">Objetivos</span>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2">
                             <ul className="space-y-1.5 list-disc list-inside text-muted-foreground pl-2 text-sm">
                                <li>Elevar el ombligo caído ("ombligo triste").</li>
                                <li>Tensar la piel del abdomen bajo y supraumbilical.</li>
                                <li>Mejorar la definición de la línea alba y los rectos abdominales.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="font-headline text-lg flex items-center gap-2">
                           <Users className="w-5 h-5 text-primary flex-shrink-0" />
                           <span className="text-left">Candidato Ideal</span>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2">
                            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground pl-2 text-sm">
                                <li>Pacientes con flacidez de piel leve a moderada.</li>
                                <li>Mínima cantidad de grasa abdominal.</li>
                                <li>Ideal para postparto o después de una pérdida de peso moderada.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="font-headline text-lg flex items-center gap-2">
                           <GitMerge className="w-5 h-5 text-primary flex-shrink-0" />
                           <span className="text-left">Procedimiento y Técnica de Inserción</span>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2">
                        <ol className="space-y-1.5 list-decimal list-inside text-muted-foreground pl-2 text-sm">
                            <li><strong className="text-foreground">Tracción (Cinching):</strong> Se insertan hilos espiculados largos en un patrón en "U" o radial desde los flancos hacia la línea media para tensar el tejido horizontalmente.</li>
                            <li><strong className="text-foreground">Elevación del Ombligo:</strong> Se colocan vectores de tracción desde la parte superior del abdomen hacia el ombligo para elevarlo.</li>
                            <li><strong className="text-foreground">Bioestimulación:</strong> Se crea una malla densa de hilos monofilamento en toda el área para redensificar la piel.</li>
                            </ol>
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-5">
                        <AccordionTrigger className="font-headline text-lg flex items-center gap-2">
                           <ToyBrick className="w-5 h-5 text-primary flex-shrink-0" />
                           <span className="text-left">Tipo de Hilos</span>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2 text-sm text-muted-foreground">
                            Combinación de hilos espiculados (Cog) para tracción y hilos monofilamento o screw (Fine) para redensificación.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger className="font-headline text-lg flex items-center gap-2">
                           <Puzzle className="w-5 h-5 text-primary flex-shrink-0" />
                           <span className="text-left">Sinergia y Timing</span>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2">
                            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground pl-2 text-sm">
                                <li><strong className="text-foreground">Tecnologías (HIFU, RF):</strong> 1-2 meses ANTES para preparar la piel y mejorar la retracción.</li>
                                <li><strong className="text-foreground">Bioestimuladores (Radiesse®, Sculptra®):</strong> Pueden aplicarse DESPUÉS (1-2 meses) para potenciar la calidad de la piel.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger className="font-headline text-lg flex items-center gap-2">
                           <Milestone className="w-5 h-5 text-primary flex-shrink-0" />
                           <span className="text-left">Resultados</span>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2">
                             <ul className="space-y-1.5 list-disc list-inside text-muted-foreground pl-2 text-sm">
                                <li><strong className="text-foreground">Corto Plazo:</strong> Efecto de tensado y elevación del ombligo visible inmediatamente.</li>
                                <li><strong className="text-foreground">Mediano Plazo (3-6 meses):</strong> Máxima firmeza de la piel gracias a la formación de colágeno.</li>
                                <li><strong className="text-foreground">Largo Plazo (hasta 18 meses):</strong> El colágeno inducido mantiene la firmeza.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-8">
                        <AccordionTrigger className="font-headline text-lg flex items-center gap-2">
                           <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0" />
                           <span className="text-left">Cuidados Post-Tratamiento</span>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2">
                            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground pl-2 text-sm">
                                <li>Uso de faja compresiva durante 1-2 semanas.</li>
                                <li>Evitar ejercicio extenuante (especialmente abdominal) por 2-3 semanas.</li>
                                <li>Evitar saunas y jacuzzis por 8 a 15 días.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-9">
                        <AccordionTrigger className="font-headline text-xl text-primary flex items-center gap-2">
                           <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                           <span className="text-left">Punto Clave</span>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2 text-sm text-muted-foreground">
                            No es un tratamiento para perder peso. La selección del paciente es crucial: funciona mejor en pieles con flacidez pero sin un panículo adiposo grueso. La combinación de hilos de tracción y de bioestimulación es esencial.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div>
                <Carousel className="w-full max-w-md mx-auto">
                    <CarouselContent>
                        {coreDefineSteps.map((step, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                    <h4 className="font-headline text-lg text-center mb-2">{step.title}</h4>
                                    <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                                        <Image
                                            src={step.imageUrl}
                                            alt={step.title}
                                            fill
                                            className="object-cover"
                                            data-ai-hint={step.imageHint}
                                        />
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-2 text-center">{step.description}</p>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-[-20px] top-1/2 -translate-y-1/2" />
                    <CarouselNext className="absolute right-[-20px] top-1/2 -translate-y-1/2" />
                </Carousel>
            </div>
        </div>
    );
};

export default CoreDefineContent;
