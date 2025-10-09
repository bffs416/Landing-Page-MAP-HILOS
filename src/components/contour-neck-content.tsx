import { Layers, ShieldCheck, Activity, AlertTriangle, UserCheck, Droplets, Wind, GitMerge } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';
import { contourNeckSteps } from '@/lib/assets';

const ContourNeckContent = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4 text-card-foreground">
                <div>
                    <h3 className="font-headline text-3xl font-bold text-primary">ContourNeck™: Cuello y Papada</h3>
                    <p className="mt-2 text-base text-muted-foreground">
                        Protocolo para corregir flacidez y redefinir el contorno mandibular y cervical.
                    </p>
                </div>
                
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="font-headline text-xl">
                            <div className="flex items-center gap-2">
                                <UserCheck className="w-5 h-5 text-primary" />
                                Objetivos
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2">
                            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground pl-2 text-sm">
                            <li><strong className="text-foreground">Reposicionar:</strong> Corregir la flacidez y redefinir el contorno mandibular.</li>
                            <li><strong className="text-foreground">Redensificar:</strong> Estimular colágeno y elastina para mayor firmeza.</li>
                            <li><strong className="text-foreground">Manejar Volumen:</strong> Se puede combinar con reducción de grasa (papada) y relajación del músculo platisma.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="font-headline text-xl">
                            <div className="flex items-center gap-2">
                            <GitMerge className="w-5 h-5 text-primary" />
                            Técnica
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2">
                        <ul className="space-y-1.5 list-disc list-inside text-muted-foreground pl-2 text-sm">
                            <li>Se definen vectores de tracción opuestos a la caída del tejido.</li>
                            <li>El punto de anclaje se sitúa en la zona fija preauricular.</li>
                            <li>Se insertan hilos espiculados en el plano subcutáneo superficial.</li>
                            <li>Se aplica tracción para elevar el tejido y se anclan los hilos.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="font-headline text-xl">
                            <div className="flex items-center gap-2">
                            <Activity className="w-5 h-5 text-primary" />
                            Mecanismo y Duración
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2">
                            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground pl-2 text-sm">
                                <li><strong className="text-foreground">Doble Efecto:</strong> Lifting inmediato (mecánico) y rejuvenecimiento a largo plazo (colágeno).</li>
                                <li><strong className="text-foreground">Duración:</strong> El hilo se reabsorbe en 6 meses, pero el efecto de soporte persiste de 12 a 18 meses.</li>
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
                            El principal desafío es la durabilidad. Para maximizar resultados, se debe planificar un mantenimiento anual que combine hilos con tecnologías como HIFU o radiofrecuencia.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div>
                <Carousel className="w-full max-w-md mx-auto">
                    <CarouselContent>
                        {contourNeckSteps.map((step, index) => (
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

export default ContourNeckContent;