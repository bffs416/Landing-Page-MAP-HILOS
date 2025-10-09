import { UserCheck, Dna, Bot, ShieldCheck, BarChart, AlertTriangle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';
import { apexLiftSteps } from '@/lib/assets';

const ApexLiftContent = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4 text-card-foreground">
                <div>
                    <h3 className="font-headline text-3xl font-bold text-primary">ApexLift™: Mirada "Fox Eyes"</h3>
                    <p className="mt-2 text-base text-muted-foreground">
                        Protocolo avanzado para la elevación de la ceja y una mirada revitalizada.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="font-headline text-xl">
                            <div className="flex items-center gap-2">
                            <UserCheck className="w-5 h-5 text-primary" />
                            Candidato Ideal
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2">
                            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground pl-2 text-sm">
                                <li>Pacientes con caída de ceja (ptosis) leve a moderada.</li>
                                <li>Buscan una apariencia menos "cansada" o "enojada".</li>
                                <li>Piel con grosor y elasticidad adecuados.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="font-headline text-xl">
                            <div className="flex items-center gap-2">
                            <Dna className="w-5 h-5 text-primary" />
                            Procedimiento
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2">
                            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground pl-2 text-sm">
                                <li><strong className="text-foreground">Fase 1 (Opcional):</strong> Se aplica Toxina Botulínica 15-20 días antes para relajar músculos depresores.</li>
                                <li><strong className="text-foreground">Fase 2:</strong> Se insertan hilos MINT® con una técnica de entrecruzamiento para crear un andamio de soporte.</li>
                                <li><strong className="text-foreground">Plano de Inserción:</strong> Subcutáneo, para maximizar el efecto lifting.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="font-headline text-xl">
                            <div className="flex items-center gap-2">
                                <BarChart className="w-5 h-5 text-primary" />
                                Resultados
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2">
                            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground pl-2 text-sm">
                                <li><strong className="text-foreground">Inmediato:</strong> Lifting mecánico visible al instante.</li>
                                <li><strong className="text-foreground">A Largo Plazo:</strong> Formación de colágeno que mantiene la sustentación hasta por 2 años.</li>
                                <li><strong className="text-foreground">Efectividad:</strong> Elevación promedio de 1.2 a 1.3 mm de la ceja.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="font-headline text-xl">
                            <div className="flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-primary" />
                            Cuidados Post-Tratamiento
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2">
                            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground pl-2 text-sm">
                                <li>Evitar movimientos faciales exagerados por 3 semanas.</li>
                                <li>Dormir boca arriba con la cabeza elevada.</li>
                                <li>Aplicar compresas frías para reducir inflamación.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger className="font-headline text-xl text-primary">
                            <div className="flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5" />
                                Punto Clave
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2">
                            <p className="text-sm text-muted-foreground">
                                Es un procedimiento para ptosis leves/moderadas, no un sustituto de la cirugía. La mejoría máxima se observa a los 2-3 meses.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div>
                <Carousel className="w-full max-w-md mx-auto">
                    <CarouselContent>
                        {apexLiftSteps.map((step, index) => (
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

export default ApexLiftContent;