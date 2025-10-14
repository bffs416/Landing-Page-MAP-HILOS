import { Target, Move, GitMerge, Puzzle, CheckCircle, AlertTriangle, Users, HeartPulse, ShieldCheck, Milestone, Info, ToyBrick } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';
import { vectorLiftSteps } from '@/lib/assets';

const VectorLiftContent = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4 text-card-foreground">
                <div>
                    <h3 className="font-headline text-3xl font-bold text-primary">VectorLift™</h3>
                    <p className="mt-2 text-base text-muted-foreground">
                        Un enfoque de ingeniería tisular para redefinir el contorno mandibular y el tercio medio facial.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="font-headline text-lg flex items-center gap-2">
                           <Info className="w-5 h-5 text-primary flex-shrink-0" />
                           <span className="text-left">Fundamentos</span>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2 text-sm text-muted-foreground">
                            Este protocolo utiliza la tracción mecánica de los hilos espiculados para reposicionar el tejido blando facial (SMAS y grasa subcutánea) en un vector antigravitatorio, y estimula la producción de colágeno para un soporte a largo plazo.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="font-headline text-lg flex items-center gap-2">
                           <Target className="w-5 h-5 text-primary flex-shrink-0" />
                           <span className="text-left">Objetivos</span>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2">
                             <ul className="space-y-1.5 list-disc list-inside text-muted-foreground pl-2 text-sm">
                                <li>Corregir la ptosis del tercio medio e inferior (jowls).</li>
                                <li>Redefinir y acentuar la línea mandibular.</li>
                                <li>Restaurar el "triángulo de la juventud".</li>
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
                                <li>Pacientes con flacidez leve a moderada.</li>
                                <li>Buena calidad de piel (grosor y elasticidad adecuados).</li>
                                <li>Estructura ósea de soporte adecuada (pómulos y mandíbula definidos).</li>
                                <li>Expectativas realistas sobre un resultado natural.</li>
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
                                <li><strong className="text-foreground">Marcaje:</strong> Se diseña un vector póstero-superior desde el tejido móvil (jowl, surco nasogeniano) hacia un punto de anclaje fijo en la región preauricular/temporal.</li>
                                <li><strong className="text-foreground">Inserción:</strong> A través de un único puerto de entrada, se introduce una cánula en el plano subcutáneo (supra-SMAS).</li>
                                <li><strong className="text-foreground">Anclaje:</strong> Se avanza la cánula hasta el final del vector, se retira y se aplica tracción manual para enganchar las espículas y elevar el tejido. El anclaje se realiza en la fascia temporal o tejido fibroso denso.</li>
                            </ol>
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-5">
                        <AccordionTrigger className="font-headline text-lg flex items-center gap-2">
                           <ToyBrick className="w-5 h-5 text-primary flex-shrink-0" />
                           <span className="text-left">Tipo de Hilos</span>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2 text-sm text-muted-foreground">
                            Se utilizan principalmente hilos MINT® espiculados (Cog) de PDO, como MINT® 17 o MINT® 43, que ofrecen una alta fuerza de tracción y anclaje gracias a sus espículas moldeadas en 360°.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger className="font-headline text-lg flex items-center gap-2">
                           <Puzzle className="w-5 h-5 text-primary flex-shrink-0" />
                           <span className="text-left">Sinergia y Timing</span>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2">
                            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground pl-2 text-sm">
                                <li><strong className="text-foreground">Toxina Botulínica:</strong> 15-20 días ANTES para relajar músculos depresores (platisma, DAO).</li>
                                <li><strong className="text-foreground">Rellenos de Soporte (Radiesse®, etc.):</strong> ANTES o en la misma sesión para restaurar volumen óseo en pómulos y mentón.</li>
                                <li><strong className="text-foreground">Tecnologías (HIFU, RF):</strong> 1-3 meses ANTES para tensar la piel y optimizar el tejido para el anclaje.</li>
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
                                <li><strong className="text-foreground">Corto Plazo:</strong> Efecto lifting mecánico visible inmediatamente. Puede haber inflamación y hematomas leves.</li>
                                <li><strong className="text-foreground">Mediano Plazo (1-3 meses):</strong> El resultado se asienta y se inicia la producción de colágeno. Máxima definición.</li>
                                <li><strong className="text-foreground">Largo Plazo (hasta 24 meses):</strong> El hilo se reabsorbe (6-8 meses), pero la estructura de colágeno formada mantiene el soporte y la firmeza.</li>
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
                                <li>Evitar gesticulación exagerada y alimentos duros (2-3 semanas).</li>
                                <li>Dormir boca arriba con la cabeza elevada.</li>
                                <li>No realizar masajes faciales ni tratamientos dentales (1 mes).</li>
                                <li>Evitar ejercicio de alto impacto (2 semanas).</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-9">
                        <AccordionTrigger className="font-headline text-xl text-primary flex items-center gap-2">
                           <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                           <span className="text-left">Punto Clave</span>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2 text-sm text-muted-foreground">
                            El éxito depende de un diagnóstico preciso (ICL-MINT®), un anclaje sólido en tejido fijo y una correcta selección del paciente. El mantenimiento a los 12-18 meses prolonga los resultados.
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
                                            placeholder="blur"
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
