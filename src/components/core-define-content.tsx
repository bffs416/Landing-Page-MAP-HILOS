import { Check, Shield, Activity, Target, AlertTriangle, Layers } from 'lucide-react';
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
                        <AccordionTrigger className="font-headline text-xl">
                            <div className="flex items-center gap-2">
                                <Target className="w-5 h-5 text-primary" />
                                Objetivos
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2">
                            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground pl-2 text-sm">
                                <li>Eleva y orienta verticalmente el ombligo ("ombligo triste").</li>
                                <li>Tensa la piel del abdomen bajo.</li>
                                <li>Mejora la definición de los rectos abdominales.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="font-headline text-xl">
                            <div className="flex items-center gap-2">
                            <Layers className="w-5 h-5 text-primary" />
                            Técnica
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2">
                        <ul className="space-y-1.5 list-disc list-inside text-muted-foreground pl-2 text-sm">
                                <li>Se evalúa la flacidez y se marcan los vectores de tracción.</li>
                                <li>Se insertan hilos espiculados para tracción en el plano subcutáneo.</li>
                                <li>Se puede usar un patrón en "U" para un efecto de "cinching" (ceñido).</li>
                                <li>Se añaden hilos monofilamento en malla para bioestimulación.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="font-headline text-xl">
                            <div className="flex items-center gap-2">
                            <Shield className="w-5 h-5 text-primary" />
                            Cuidados
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2">
                            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground pl-2 text-sm">
                                <li>Uso de faja compresiva.</li>
                                <li>Evitar ejercicio extenuante por al menos 8 días.</li>
                                <li>Evitar saunas y jacuzzis por 8 a 15 días.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="font-headline text-xl text-primary">
                            <div className="flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5" />
                                Punto Clave
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2">
                            <p className="text-sm text-muted-foreground">
                                La combinación de hilos espiculados (tracción) y monofilamento (redensificación) es crucial. Un mantenimiento anual asegura la longevidad de los resultados.
                            </p>
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