import { Layers, Shield, Activity, Target, AlertTriangle, Info, Users, GitMerge, ToyBrick, Puzzle, Milestone, ShieldCheck } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';
import { armContourSteps } from '@/lib/assets';

const ArmContourContent = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4 text-card-foreground">
                <div>
                    <h3 className="font-headline text-3xl font-bold text-primary">ArmContour™: Brazos Firmes</h3>
                    <p className="mt-2 text-base text-muted-foreground">
                        Manejo de la laxitud en la parte superior de los brazos (braquioplastia no quirúrgica).
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="font-headline text-lg"><div className="flex items-center gap-2"><Info className="w-5 h-5 text-primary" />Fundamentos</div></AccordionTrigger>
                        <AccordionContent className="pt-2 text-sm text-muted-foreground">
                           El protocolo se basa en la creación de una malla densa de hilos monofilamento para inducir una fibrosis controlada y una producción masiva de colágeno, lo que resulta en la redensificación y tensado de la piel laxa.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="font-headline text-lg"><div className="flex items-center gap-2"><Target className="w-5 h-5 text-primary" />Objetivos</div></AccordionTrigger>
                        <AccordionContent className="pt-2">
                             <ul className="space-y-1.5 list-disc list-inside text-muted-foreground pl-2 text-sm">
                                <li>Mejorar la textura y firmeza de la piel.</li>
                                <li>Reducir la flacidez de la cara interna de los brazos ("alas de murciélago").</li>
                                <li>Lograr un efecto de tensado general y un contorno más definido.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="font-headline text-lg"><div className="flex items-center gap-2"><Users className="w-5 h-5 text-primary" />Candidato Ideal</div></AccordionTrigger>
                        <AccordionContent className="pt-2">
                            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground pl-2 text-sm">
                                <li>Pacientes con laxitud de piel leve a moderada.</li>
                                <li>Poco o nulo exceso de grasa en la zona.</li>
                                <li>Piel que aún conserva cierta capacidad de retracción.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="font-headline text-lg"><div className="flex items-center gap-2"><GitMerge className="w-5 h-5 text-primary" />Procedimiento y Técnica de Inserción</div></AccordionTrigger>
                        <AccordionContent className="pt-2">
                        <ol className="space-y-1.5 list-decimal list-inside text-muted-foreground pl-2 text-sm">
                            <li><strong className="text-foreground">Diseño en Malla:</strong> Se marca el área a tratar y se diseña una cuadrícula.</li>
                            <li><strong className="text-foreground">Inserción Densa:</strong> Se insertan hilos monofilamento en un patrón de malla muy denso en el plano dérmico profundo para maximizar la bioestimulación.</li>
                            <li><strong className="text-foreground">Tracción Opcional:</strong> Si se requiere un ligero efecto lifting, se pueden añadir hilos espiculados en vectores ascendentes.</li>
                            </ol>
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-5">
                        <AccordionTrigger className="font-headline text-lg"><div className="flex items-center gap-2"><ToyBrick className="w-5 h-5 text-primary" />Tipo de Hilos</div></AccordionTrigger>
                        <AccordionContent className="pt-2 text-sm text-muted-foreground">
                            Principalmente hilos monofilamento (Fine) o screw para bioestimulación. Opcionalmente, hilos espiculados (Cog) para un componente de tracción.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger className="font-headline text-lg"><div className="flex items-center gap-2"><Puzzle className="w-5 h-5 text-primary" />Sinergia y Timing</div></AccordionTrigger>
                        <AccordionContent className="pt-2">
                            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground pl-2 text-sm">
                                <li><strong className="text-foreground">Bioestimuladores (Radiesse®, Sculptra®):</strong> Aplicar 1-2 meses ANTES o DESPUÉS para potenciar la producción de colágeno.</li>
                                <li><strong className="text-foreground">Tecnologías (Radiofrecuencia):</strong> Sesiones DESPUÉS del tratamiento con hilos para mantener y mejorar la firmeza.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger className="font-headline text-lg"><div className="flex items-center gap-2"><Milestone className="w-5 h-5 text-primary" />Resultados</div></AccordionTrigger>
                        <AccordionContent className="pt-2">
                             <ul className="space-y-1.5 list-disc list-inside text-muted-foreground pl-2 text-sm">
                                <li><strong className="text-foreground">Corto Plazo:</strong> Ligera mejoría por el edema inicial y el soporte de la malla.</li>
                                <li><strong className="text-foreground">Mediano Plazo (3-6 meses):</strong> El resultado principal aparece a medida que se forma el nuevo colágeno, tensando la piel.</li>
                                <li><strong className="text-foreground">Largo Plazo (hasta 18 meses):</strong> Se mantiene la firmeza gracias a la nueva estructura de colágeno.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-8">
                        <AccordionTrigger className="font-headline text-lg"><div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" />Cuidados Post-Tratamiento</div></AccordionTrigger>
                        <AccordionContent className="pt-2">
                            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground pl-2 text-sm">
                                <li>Evitar actividad física extenuante (especialmente de brazos) durante 1-2 semanas.</li>
                                <li>No aplicar cosméticos en la zona por 48 horas.</li>
                                <li>Evitar masajes o tratamientos agresivos en la zona.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-9">
                        <AccordionTrigger className="font-headline text-xl text-primary"><div className="flex items-center gap-2"><AlertTriangle className="w-5 h-5" />Punto Clave</div></AccordionTrigger>
                        <AccordionContent className="pt-2 text-sm text-muted-foreground">
                            La clave del éxito es la redensificación. Una alta densidad de hilos monofilamento en patrón de malla maximiza la bioestimulación. El mantenimiento con refuerzos y otras tecnologías es crucial para resultados duraderos.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div>
                <Carousel className="w-full max-w-md mx-auto">
                    <CarouselContent>
                        {armContourSteps.map((step, index) => (
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

export default ArmContourContent;
