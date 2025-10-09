import { ArrowUpCircle, Shield, Activity, Target, AlertTriangle, Info, Users, GitMerge, ToyBrick, Puzzle, Milestone, ShieldCheck } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';
import { gluteCurveSteps } from '@/lib/assets';

const GluteCurveContent = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4 text-card-foreground">
                <div>
                    <h3 className="font-headline text-3xl font-bold text-primary">GluteCurve™: Levantamiento de Glúteos</h3>
                    <p className="mt-2 text-base text-muted-foreground">
                        Protocolo para reposicionar, definir y dar contorno a los glúteos sin cirugía.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="font-headline text-lg flex items-center gap-2">
                           <Info className="w-5 h-5 text-primary flex-shrink-0" />
                           <span className="text-left">Fundamentos</span>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2 text-sm text-muted-foreground">
                            Este protocolo crea una "hamaca" de soporte subdérmica utilizando hilos de tracción anclados a puntos fijos (fascia sacra), levantando el tejido glúteo caído (ptosis) y estimulando colágeno para dar firmeza.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="font-headline text-lg flex items-center gap-2">
                           <Target className="w-5 h-5 text-primary flex-shrink-0" />
                           <span className="text-left">Objetivos</span>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2">
                             <ul className="space-y-1.5 list-disc list-inside text-muted-foreground pl-2 text-sm">
                                <li>Levantar y reposicionar el tejido glúteo.</li>
                                <li>Redondear y mejorar la proyección del glúteo.</li>
                                <li>Mejorar la apariencia del pliegue subglúteo.</li>
                                <li>Redensificar la piel y mejorar su calidad.</li>
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
                                <li>Pacientes con ptosis glútea leve a moderada.</li>
                                <li>Buena calidad de piel sin exceso significativo de grasa.</li>
                                <li>Personas que desean una mejora en la forma más que en el volumen.</li>
                                <li>Contraindicado en pacientes con biopolímeros.</li>
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
                            <li><strong className="text-foreground">Anclaje Fijo:</strong> Se marcan puntos de anclaje en la fascia sobre el sacro.</li>
                            <li><strong className="text-foreground">Vectores de Tracción:</strong> Se diseñan vectores que van desde el punto de anclaje sacro, rodean el glúteo y tiran del tejido en sentido ascendente.</li>
                            <li><strong className="text-foreground">Inserción Profunda:</strong> Los hilos de tracción se insertan en el plano subcutáneo profundo para un anclaje robusto.</li>
                            <li><strong className="text-foreground">Malla de Soporte:</strong> Se puede añadir una malla de hilos monofilamento para mejorar la calidad de la piel y dar soporte adicional.</li>
                            </ol>
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-5">
                        <AccordionTrigger className="font-headline text-lg flex items-center gap-2">
                           <ToyBrick className="w-5 h-5 text-primary flex-shrink-0" />
                           <span className="text-left">Tipo de Hilos</span>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2 text-sm text-muted-foreground">
                            Se usan hilos espiculados largos y resistentes para la tracción. Se pueden complementar con hilos monofilamento para la bioestimulación.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger className="font-headline text-lg flex items-center gap-2">
                           <Puzzle className="w-5 h-5 text-primary flex-shrink-0" />
                           <span className="text-left">Sinergia y Timing</span>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2">
                            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground pl-2 text-sm">
                                <li><strong className="text-foreground">Bioestimuladores (Sculptra®, Radiesse®):</strong> Ideales para aplicar 1-3 meses ANTES o DESPUÉS para añadir volumen y potenciar la producción de colágeno.</li>
                                <li><strong className="text-foreground">Lipotransferencia:</strong> Se puede realizar en la misma sesión para aportar volumen mientras los hilos aportan sustentación.</li>
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
                                <li><strong className="text-foreground">Corto Plazo:</strong> Efecto de levantamiento inmediato.</li>
                                <li><strong className="text-foreground">Mediano Plazo (3-6 meses):</strong> El contorno se define y la piel se reafirma.</li>
                                <li><strong className="text-foreground">Largo Plazo (hasta 2 años):</strong> El andamio de colágeno mantiene el efecto lifting.</li>
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
                                <li>Evitar sentarse directamente sobre la zona o dormir boca arriba por 1-2 semanas.</li>
                                <li>No realizar ejercicio físico intenso (especialmente sentadillas o lunges) durante 3-4 semanas.</li>
                                <li>No frotar ni masajear la zona.</li>
                                <li>Uso de prenda compresiva puede ser recomendado.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-9">
                        <AccordionTrigger className="font-headline text-xl text-primary flex items-center gap-2">
                           <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                           <span className="text-left">Punto Clave</span>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2 text-sm text-muted-foreground">
                            El anclaje robusto en puntos fijos (fascia sacra) es el secreto para un resultado duradero. Es fundamental excluir a pacientes con biopolímeros para evitar la activación de reacciones inflamatorias severas.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div>
                <Carousel className="w-full max-w-md mx-auto">
                    <CarouselContent>
                        {gluteCurveSteps.map((step, index) => (
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

export default GluteCurveContent;
