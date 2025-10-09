import { Layers, Shield, Activity, Target, AlertTriangle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const ArmContourContent = () => {
    return (
        <div className="space-y-4 text-card-foreground">
            <div>
                <h3 className="font-headline text-3xl font-bold text-primary">ArmContour™: Brazos Firmes</h3>
                <p className="mt-2 text-base text-muted-foreground">
                    Manejo de la laxitud en la parte superior de los brazos (braquioplastia no quirúrgica).
                </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="font-headline text-xl">
                         <div className="flex items-center gap-2">
                            <Target className="w-5 h-5 text-primary" />
                            Objetivos
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-2">
                         <ul className="space-y-1.5 list-disc list-inside text-muted-foreground pl-2 text-sm">
                            <li>Mejora la textura y redensifica la piel.</li>
                            <li>Reduce la flacidez para un contorno más firme.</li>
                            <li>Logra un efecto de tensado general.</li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="font-headline text-xl">
                        <div className="flex items-center gap-2">
                           <Layers className="w-5 h-5 text-primary" />
                           Técnica
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-2">
                        <ul className="space-y-1.5 list-disc list-inside text-muted-foreground pl-2 text-sm">
                            <li>Se evalúa la laxitud y se marca el área.</li>
                            <li>Se insertan hilos monofilamento en patrón de malla para bioestimulación.</li>
                            <li>Se usa una alta densidad de hilos para maximizar la síntesis de colágeno.</li>
                            <li>Opcional: Se pueden añadir hilos espiculados para mayor tracción.</li>
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
                            <li>Evitar actividad física extenuante durante 3 días.</li>
                            <li>No aplicar cosméticos en la zona por 48 horas.</li>
                            <li>Evitar movimientos excesivos del brazo.</li>
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
                            La clave del éxito es la redensificación. Una alta densidad de hilos monofilamento en patrón de malla maximiza la bioestimulación. El mantenimiento con refuerzos es crucial.
                        </p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default ArmContourContent;
