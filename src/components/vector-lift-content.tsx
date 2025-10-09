import { Target, Move, GitMerge, Puzzle, CheckCircle, AlertTriangle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';
import { vectorLiftSteps } from '@/lib/assets';

const VectorLiftContent = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4 text-card-foreground">
                <div>
                    <h3 className="font-headline text-3xl font-bold text-primary">VectorLift™: Arquitectura Facial</h3>
                    <p className="mt-2 text-base text-muted-foreground">
                        Un enfoque de ingeniería tisular para redefinir el contorno mandibular.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="font-headline text-xl">
                            <div className="flex items-center gap-2">
                            <Target className="w-5 h-5 text-primary" />
                            Fundamentos
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2">
                            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground pl-2 text-sm">
                                <li><strong className="text-foreground">Objetivo:</strong> Reposicionar tejidos, corregir *jowls* y restaurar el "triángulo de la juventud".</li>
                                <li><strong className="text-foreground">Mecanismo:</strong> Efecto lifting inmediato (tracción) y rejuvenecimiento a largo plazo (colágeno).</li>
                                <li><strong className="text-foreground">Herramienta:</strong> Hilos MINT® espiculados para máxima fuerza de anclaje.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="font-headline text-xl">
                            <div className="flex items-center gap-2">
                            <Move className="w-5 h-5 text-primary" />
                            Vectores y Anclaje
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2">
                            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground pl-2 text-sm">
                                <li><strong className="text-foreground">Técnica:</strong> Inserción distal y tracción póstero-superior para contrarrestar la gravedad.</li>
                                <li><strong className="text-foreground">Anclaje:</strong> Punto fijo en la región preauricular, anclando a la fascia temporal para máxima estabilidad.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="font-headline text-xl">
                            <div className="flex items-center gap-2">
                            <Puzzle className="w-5 h-5 text-primary" />
                            Sinergia y Timing
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2">
                            <p className="text-muted-foreground mb-2 text-sm">Un enfoque integral maximiza los resultados. El timing es clave:</p>
                            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground pl-2 text-sm">
                                <li><strong className="text-foreground">Toxina Botulínica:</strong> Aplicar 15-20 días antes para relajar músculos.</li>
                                <li><strong className="text-foreground">Rellenos / Bioestimuladores:</strong> Aplicar primero para restaurar soporte óseo.</li>
                                <li><strong className="text-foreground">Tecnologías de Energía:</strong> Realizar antes para maximizar la retracción de la piel.</li>
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
                                El lifting es visible al momento, pero el efecto a largo plazo del colágeno mantiene resultados hasta por 2 años. Se recomienda planificar un mantenimiento a los 12-18 meses.
                        </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div>
                <Carousel className="w-full max-w-md mx-auto">
                    <CarouselContent>
                        {vectorLiftSteps.map((step, index) => (
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

export default VectorLiftContent;