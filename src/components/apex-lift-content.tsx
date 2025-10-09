import { UserCheck, Dna, Bot, ShieldCheck, BarChart, AlertTriangle, Target, Users, GitMerge, ToyBrick, Puzzle, Milestone, Info } from 'lucide-react';
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
                        <AccordionTrigger className="font-headline text-lg flex items-center gap-2">
                           <Info className="w-5 h-5 text-primary flex-shrink-0" />
                           <span className="text-left">Fundamentos</span>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2 text-sm text-muted-foreground">
                            Utiliza hilos tensores para elevar la cola de la ceja, contrarrestando la acción de los músculos depresores y creando una apariencia más elevada y abierta en la mirada.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                         <AccordionTrigger className="font-headline text-lg flex items-center gap-2">
                           <Target className="w-5 h-5 text-primary flex-shrink-0" />
                           <span className="text-left">Objetivos</span>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2">
                            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground pl-2 text-sm">
                                <li>Elevar la cola de la ceja (lifting lateral).</li>
                                <li>Crear una forma de ceja más arqueada y estilizada.</li>
                                <li>Reducir la apariencia de "mirada cansada" o "triste".</li>
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
                                <li>Pacientes con ptosis (caída) de ceja leve a moderada.</li>
                                <li>Personas que buscan el efecto estético "fox eyes".</li>
                                <li>Piel con grosor y elasticidad adecuados en la zona temporal.</li>
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
                                <li><strong className="text-foreground">Anclaje:</strong> El punto de entrada se sitúa en la región temporal, oculto en la línea del cabello.</li>
                                <li><strong className="text-foreground">Inserción:</strong> Se introduce una cánula en el plano subcutáneo, dirigiéndose hacia la cola de la ceja.</li>
                                <li><strong className="text-foreground">Tracción:</strong> Se despliega el hilo y se aplica una tracción póstero-superior para elevar la ceja. Se puede usar un patrón de entrecruzamiento (criss-cross) para crear un andamio de soporte más fuerte.</li>
                            </ol>
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-5">
                        <AccordionTrigger className="font-headline text-lg flex items-center gap-2">
                           <ToyBrick className="w-5 h-5 text-primary flex-shrink-0" />
                           <span className="text-left">Tipo de Hilos</span>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2 text-sm text-muted-foreground">
                            Se usan hilos MINT® espiculados y largos (ej. MINT® 17) para una tracción eficaz y un anclaje seguro en la fascia temporal.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger className="font-headline text-lg flex items-center gap-2">
                           <Puzzle className="w-5 h-5 text-primary flex-shrink-0" />
                           <span className="text-left">Sinergia y Timing</span>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2">
                            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground pl-2 text-sm">
                                <li><strong className="text-foreground">Toxina Botulínica:</strong> Es casi mandatorio. Aplicar 15-20 días ANTES en el músculo orbicular (patas de gallo) para relajar los músculos que tiran de la ceja hacia abajo.</li>
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
                                <li><strong className="text-foreground">Corto Plazo:</strong> Elevación visible de forma inmediata. Se busca una ligera sobrecorrección.</li>
                                <li><strong className="text-foreground">Mediano Plazo (1-2 meses):</strong> El resultado se naturaliza a medida que la inflamación disminuye.</li>
                                <li><strong className="text-foreground">Largo Plazo (hasta 18 meses):</strong> La neocolagenogénesis proporciona un soporte duradero. La elevación promedio es de 1.2 a 1.3 mm.</li>
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
                                <li>Evitar movimientos faciales exagerados durante 3 semanas.</li>
                                <li>Dormir boca arriba.</li>
                                <li>Aplicar compresas frías para reducir la inflamación.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-9">
                        <AccordionTrigger className="font-headline text-xl text-primary flex items-center gap-2">
                           <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                           <span className="text-left">Punto Clave</span>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2 text-sm text-muted-foreground">
                            No es un sustituto de la cirugía de blefaroplastia para ptosis severa. La combinación con toxina botulínica es fundamental para maximizar y prolongar los resultados.
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
