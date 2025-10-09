import { Layers, ShieldCheck, GitMerge, AlertTriangle, UserCheck, Syringe, ClipboardList, CheckCircle, Info, Target, Users, ToyBrick, Puzzle, Milestone } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';
import { rhinoStructureSteps } from '@/lib/assets';

const RhinoStructureContent = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4 text-card-foreground">
                <div>
                    <h3 className="font-headline text-3xl font-bold text-primary">RhinoStructure™</h3>
                    <p className="mt-2 text-base text-muted-foreground">
                        Protocolo para esculpir y definir la nariz sin cirugía.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                     <AccordionItem value="item-1">
                        <AccordionTrigger className="font-headline text-lg flex items-center gap-2">
                           <Info className="w-5 h-5 text-primary flex-shrink-0" />
                           <span className="text-left">Fundamentos</span>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2 text-sm text-muted-foreground">
                            Crea un andamio estructural interno con hilos PDO para dar soporte, definición y elevación a la punta y el dorso nasal. Combina el soporte mecánico inmediato con la bioestimulación de colágeno a largo plazo.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="font-headline text-lg flex items-center gap-2">
                           <Target className="w-5 h-5 text-primary flex-shrink-0" />
                           <span className="text-left">Objetivos</span>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2">
                             <ul className="space-y-1.5 list-disc list-inside text-muted-foreground pl-2 text-sm">
                                <li>Elevar y rotar la punta nasal caída.</li>
                                <li>Rectificar y definir el dorso nasal.</li>
                                <li>Aumentar la proyección de la punta.</li>
                                <li>Corregir pequeñas asimetrías.</li>
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
                                <li>Pacientes que buscan correcciones sutiles y no desean cirugía.</li>
                                <li>Narices sin cirugía previa o con resultados post-quirúrgicos que necesiten refinamiento.</li>
                                <li>Piel de grosor adecuado (ni muy fina ni muy gruesa).</li>
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
                                <li><strong className="text-foreground">Punto de Entrada Único:</strong> Se crea un solo punto de acceso en la punta nasal para minimizar el trauma.</li>
                                <li><strong className="text-foreground">Soporte de la Columela:</strong> Se insertan hilos espiculados fuertes desde la punta hacia la base (subnasale) para actuar como una "viga" que proyecta y rota la punta.</li>
                                <li><strong className="text-foreground">Definición del Dorso:</strong> Se insertan hilos desde la punta hacia el radix (puente nasal) en el plano subcutáneo para crear un andamio que rectifica el dorso.</li>
                            </ol>
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-5">
                        <AccordionTrigger className="font-headline text-lg flex items-center gap-2">
                           <ToyBrick className="w-5 h-5 text-primary flex-shrink-0" />
                           <span className="text-left">Tipo de Hilos</span>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2 text-sm text-muted-foreground">
                            Se usan hilos espiculados de alta densidad para la columela (ej. MINT® TIP) y hilos más finos para el dorso (ej. MINT® UP) para combinar soporte y definición.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger className="font-headline text-lg flex items-center gap-2">
                           <Puzzle className="w-5 h-5 text-primary flex-shrink-0" />
                           <span className="text-left">Sinergia y Timing</span>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2">
                             <p className="text-sm text-muted-foreground">
                                La mejor estrategia combina hilos y rellenos. Los hilos se usan para el <strong className="text-foreground">soporte estructural</strong>, mientras que el Ácido Hialurónico (aplicado con mucho cuidado en el dorso, nunca en la punta) se usa para añadir <strong className="text-foreground">volumen sutil</strong>. Esto reduce el riesgo vascular comparado con usar solo rellenos.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger className="font-headline text-lg flex items-center gap-2">
                           <Milestone className="w-5 h-5 text-primary flex-shrink-0" />
                           <span className="text-left">Resultados</span>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2">
                             <ul className="space-y-1.5 list-disc list-inside text-muted-foreground pl-2 text-sm">
                                <li><strong className="text-foreground">Corto Plazo:</strong> Mejora estructural visible al instante. Hinchazón y hematomas leves son comunes.</li>
                                <li><strong className="text-foreground">Mediano Plazo (1-3 meses):</strong> El resultado se define a medida que baja la inflamación.</li>
                                <li><strong className="text-foreground">Largo Plazo (hasta 18 meses):</strong> El colágeno formado alrededor de los hilos mantiene el soporte estructural.</li>
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
                                <li>No manipular ni presionar la zona tratada.</li>
                                <li>Evitar el uso de gafas pesadas durante 2 semanas.</li>
                                <li>Dormir boca arriba para no aplicar presión sobre la nariz.</li>
                                <li>Se recomienda un masaje de autoestiramiento suave en la punta nasal.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-9">
                        <AccordionTrigger className="font-headline text-xl text-primary flex items-center gap-2">
                           <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                           <span className="text-left">Punto Clave</span>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2 text-sm text-muted-foreground">
                            La rinomodelación con hilos es más segura que con rellenos en términos de riesgo vascular, especialmente en la punta. La técnica ofrece una mejora estructural, no un cambio radical.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div>
                <Carousel className="w-full max-w-md mx-auto">
                    <CarouselContent>
                        {rhinoStructureSteps.map((step, index) => (
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

export default RhinoStructureContent;
