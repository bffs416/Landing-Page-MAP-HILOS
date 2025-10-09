import { ArrowUpCircle, Shield, Activity, Target, AlertTriangle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const GluteCurveContent = () => {
    return (
        <div className="space-y-4 text-card-foreground">
            <div>
                <h3 className="font-headline text-3xl font-bold text-primary">GluteCurve™: Levantamiento de Glúteos</h3>
                <p className="mt-2 text-base text-muted-foreground">
                    Protocolo para reposicionar, definir y dar contorno a los glúteos sin cirugía.
                </p>
            </div>

             <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="font-headline text-xl">
                        <div className="flex items-center gap-2">
                           <Target className="w-5 h-5 text-primary" />
                           Objetivos
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-2">
                        <ul className="space-y-1.5 list-disc list-inside text-muted-foreground pl-2 text-sm">
                            <li>Levanta el tejido caído para corregir la ptosis glútea.</li>
                            <li>Rellena zonas de depresión para una silueta más suave.</li>
                            <li>Define y proyecta el contorno para una apariencia más tonificada.</li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="font-headline text-xl">
                        <div className="flex items-center gap-2">
                           <ArrowUpCircle className="w-5 h-5 text-primary" />
                           Técnica
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-2">
                        <ul className="space-y-1.5 list-disc list-inside text-muted-foreground pl-2 text-sm">
                            <li>Se marcan puntos de anclaje fijos sobre el sacro y la región trocantérica.</li>
                            <li>Se usan hilos espiculados en el plano subcutáneo profundo para sustentación.</li>
                            <li>Se trazan vectores desde el sacro hacia el glúteo inferior.</li>
                             <li>Opcional: Se combina con lipotransferencia o rellenos para añadir volumen.</li>
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
                            <li>Evitar sentarse sobre la zona tratada y dormir boca arriba.</li>
                            <li>No realizar actividad física intensa durante 2 semanas.</li>
                            <li>No frotar ni masajear la zona durante 2 semanas.</li>
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
                           El anclaje robusto en puntos fijos (sacro, trocánter) es crucial. Excluir a pacientes con biopolímeros para evitar la activación de reacciones inflamatorias.
                        </p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default GluteCurveContent;
