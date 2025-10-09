import { Layers, ShieldCheck, Activity, AlertTriangle, UserCheck, Droplets, Wind, GitMerge, Info, Target, Users, ToyBrick, Puzzle, Milestone } from 'lucide-react';
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
                        <AccordionTrigger className="font-headline text-lg"><div className="flex items-center gap-2"><Info className="w-5 h-5 text-primary" />Fundamentos</div></AccordionTrigger>
                        <AccordionContent className="pt-2 text-sm text-muted-foreground">
                            Combina la tracción mecánica de los hilos espiculados para un lifting inmediato con la bioestimulación de hilos lisos para redensificar la piel, mejorando la firmeza y textura del cuello y la papada a largo plazo.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="font-headline text-lg"><div className="flex items-center gap-2"><Target className="w-5 h-5 text-primary" />Objetivos</div></AccordionTrigger>
                        <AccordionContent className="pt-2">
                             <ul className="space-y-1.5 list-disc list-inside text-muted-foreground pl-2 text-sm">
                                <li>Redefinir el contorno mandibular y el ángulo cervicofacial.</li>
                                <li>Tensar la piel laxa del cuello (bandas platismales y "cuello de pavo").</li>
                                <li>Reducir la apariencia de la papada por flacidez.</li>
                                <li>Mejorar la calidad general de la piel (firmeza y elasticidad).</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="font-headline text-lg"><div className="flex items-center gap-2"><Users className="w-5 h-5 text-primary" />Candidato Ideal</div></AccordionTrigger>
                        <AccordionContent className="pt-2">
                            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground pl-2 text-sm">
                                <li>Pacientes con laxitud de piel leve a moderada en cuello y papada.</li>
                                <li>Poco o moderado exceso de grasa submentoniana.</li>
                                <li>Pacientes que no desean o no son candidatos para un lifting quirúrgico.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="font-headline text-lg"><div className="flex items-center gap-2"><GitMerge className="w-5 h-5 text-primary" />Procedimiento y Técnica de Inserción</div></AccordionTrigger>
                        <AccordionContent className="pt-2">
                        <ol className="space-y-1.5 list-decimal list-inside text-muted-foreground pl-2 text-sm">
                            <li><strong className="text-foreground">Vectores de Tracción:</strong> Se diseñan vectores opuestos a la caída del tejido, desde la zona submentoniana y a lo largo de la mandíbula hacia un punto de anclaje fijo en la zona preauricular/mastoidea.</li>
                            <li><strong className="text-foreground">Inserción de Hilos Espiculados:</strong> Se insertan en el plano subcutáneo superficial para elevar el tejido.</li>
                             <li><strong className="text-foreground">Malla de Redensificación:</strong> Se puede añadir una malla de hilos monofilamento en la zona de la papada para estimular colágeno y tensar la piel.</li>
                            </ol>
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-5">
                        <AccordionTrigger className="font-headline text-lg"><div className="flex items-center gap-2"><ToyBrick className="w-5 h-5 text-primary" />Tipo de Hilos</div></AccordionTrigger>
                        <AccordionContent className="pt-2 text-sm text-muted-foreground">
                            Se combinan hilos espiculados (Cog) para la tracción y hilos monofilamento (lisos) o screw para la bioestimulación y redensificación.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger className="font-headline text-lg"><div className="flex items-center gap-2"><Puzzle className="w-5 h-5 text-primary" />Sinergia y Timing</div></AccordionTrigger>
                        <AccordionContent className="pt-2">
                            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground pl-2 text-sm">
                                <li><strong className="text-foreground">Reductores de Grasa (Ác. Desoxicólico):</strong> 4-6 semanas ANTES si hay papada adiposa.</li>
                                <li><strong className="text-foreground">Toxina Botulínica (Nefertiti Lift):</strong> 15-20 días ANTES para relajar las bandas platismales.</li>
                                <li><strong className="text-foreground">Bioestimuladores (Radiesse®, Sculptra®):</strong> 1-2 meses ANTES para mejorar la calidad de la piel.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger className="font-headline text-lg"><div className="flex items-center gap-2"><Milestone className="w-5 h-5 text-primary" />Resultados</div></AccordionTrigger>
                        <AccordionContent className="pt-2">
                             <ul className="space-y-1.5 list-disc list-inside text-muted-foreground pl-2 text-sm">
                                <li><strong className="text-foreground">Corto Plazo:</strong> Efecto tensor inmediato con mejora del ángulo del cuello.</li>
                                <li><strong className="text-foreground">Mediano Plazo (2-3 meses):</strong> Máxima firmeza y redensificación de la piel por la neocolagenogénesis.</li>
                                <li><strong className="text-foreground">Largo Plazo (12-18 meses):</strong> El soporte de colágeno mantiene el resultado a pesar de la reabsorción del hilo.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-8">
                        <AccordionTrigger className="font-headline text-lg"><div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" />Cuidados Post-Tratamiento</div></AccordionTrigger>
                        <AccordionContent className="pt-2">
                            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground pl-2 text-sm">
                                <li>Uso de mentonera o vendaje compresivo, especialmente por la noche.</li>
                                <li>Evitar flexión excesiva del cuello.</li>
                                <li>Dormir con la cabeza elevada.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-9">
                        <AccordionTrigger className="font-headline text-xl text-primary"><div className="flex items-center gap-2"><AlertTriangle className="w-5 h-5" />Punto Clave</div></AccordionTrigger>
                        <AccordionContent className="pt-2 text-sm text-muted-foreground">
                            El principal desafío en el cuello es la durabilidad debido al movimiento constante. La combinación de técnicas y un plan de mantenimiento anual son cruciales para resultados sostenibles.
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
