
import { Check, Shield, Activity, Target, AlertTriangle, ArrowUpCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Objectives = () => {
    const data = [
        {
            icon: <ArrowUpCircle className="w-6 h-6 text-primary" />,
            title: 'Corrección de Ptosis Glútea',
            description: 'Levanta el tejido caído para corregir la ptosis y restaurar una forma juvenil.',
        },
        {
            icon: <Target className="w-6 h-6 text-primary" />,
            title: 'Restauración de Volumen',
            description: 'Rellena zonas de depresión (ej. fosa trocantérica) para una silueta más suave.',
        },
        {
            icon: <Shield className="w-6 h-6 text-primary" />,
            title: 'Definición del Marco Glúteo',
            description: 'Define y proyecta el contorno para una apariencia más redonda y tonificada.',
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.map((item, index) => (
                <div key={index} className="bg-muted/30 p-4 rounded-lg border border-border">
                    <div className="flex items-center gap-3">
                        {item.icon}
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                </div>
            ))}
        </div>
    );
};

const StepsTable = () => {
    const steps = [
        { step: '1', focus: 'Evaluación y Marcaje Fijo', description: 'Clasificar forma y ptosis del glúteo. Marcar puntos de anclaje fijos sobre el sacro y la región trocantérica.' },
        { step: '2', focus: 'Asepsia y Anestesia Tumescente', description: 'Realizar asepsia e infiltrar anestesia tumescente (lidocaína + epinefrina diluida) para minimizar sangrado y dolor.' },
        { step: '3', focus: 'Creación de Puertos de Entrada', description: 'Realizar incisiones mínimas en la región sacra superior para el paso de la cánula.' },
        { step: '4', focus: 'Inserción de Hilos Fix (Sustentación)', description: 'Usar hilos espiculados (Fix/Cog) con agujas largas o trócares en el plano subcutáneo profundo/fascia superficial.' },
        { step: '5', focus: 'Diseño de Vectores Anti-Tosis', description: 'Trazar el hilo desde el punto fijo (sacro) hacia el glúteo inferior, haciendo un bucle o anclaje en el isquion.' },
        { step: '6', focus: 'Inserción de Hilos Mono (Volumen/Malla)', description: 'Insertar hilos monofilamento en patrón de malla en los cuadrantes superiores o donde se requiera volumen.' },
        { step: '7', focus: 'Entrecruzamiento (Opcional)', description: 'Utilizar hilos Fix o Mono en patrones cruzados (criss-cross) para incrementar la producción de colágeno.' },
        { step: '8', focus: 'Tracción y Anudamiento', description: 'Tensar los hilos Fix. Anudar la sutura a la fascia profunda o periostio si es necesario, enterrando el nudo.' },
        { step: '9', focus: 'Lipotransferencia/Relleno (Opcional)', description: 'Inyectar grasa o relleno lentamente con cánulas romas para añadir volumen, evitando inyecciones intramusculares.' },
        { step: '10', focus: 'Terapia de Mantenimiento', description: 'Recomendar sesiones de PDRN o mesoterapia y repetir la aplicación de hilos tensores anualmente.' },
    ];

    return (
         <div className="overflow-x-auto rounded-lg border bg-card/50">
            <table className="min-w-full divide-y divide-border text-sm">
                <thead className="bg-muted/50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left font-semibold text-foreground tracking-wide w-16">Paso</th>
                        <th scope="col" className="px-6 py-3 text-left font-semibold text-foreground tracking-wide">Acción Estratégica</th>
                        <th scope="col" className="px-6 py-3 text-left font-semibold text-foreground tracking-wide">Justificación Técnica</th>
                    </tr>
                </thead>
                <tbody className="bg-card divide-y divide-border">
                    {steps.map((item) => (
                        <tr key={item.step}>
                            <td className="px-6 py-4 font-bold text-primary text-lg align-top">{item.step}</td>
                            <td className="px-6 py-4 font-medium text-foreground align-top">{item.focus}</td>
                            <td className="px-6 py-4 text-muted-foreground align-top">{item.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const GluteCurveContent = () => {
    return (
        <div className="space-y-4 text-card-foreground">
            <div>
                <h3 className="font-headline text-2xl font-bold text-foreground">GluteCurve™: Contorno y Levantamiento de Glúteos</h3>
                <p className="mt-2 text-base text-muted-foreground">
                    Protocolo enfocado en el reposicionamiento, definición de la forma y aumento de volumen en los glúteos para un levantamiento sin cirugía.
                </p>
            </div>

             <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="font-headline text-xl">Objetivos Principales</AccordionTrigger>
                    <AccordionContent className="pt-4">
                        <Objectives />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="font-headline text-xl">Los 10 Pasos de la Técnica</AccordionTrigger>
                    <AccordionContent className="pt-4">
                        <StepsTable />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="font-headline text-xl">Cuidados y Sugerencias</AccordionTrigger>
                    <AccordionContent className="pt-4">
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <h4 className="font-semibold text-foreground">Cuidados Post-Procedimiento</h4>
                                <ul className="space-y-2 list-disc list-inside text-muted-foreground pl-2 text-sm">
                                    <li><strong className="text-foreground">Posición:</strong> Evitar sentarse sobre las suturas y dormir boca arriba.</li>
                                    <li><strong className="text-foreground">Actividad:</strong> No realizar actividad física intensa durante 3 días a 2 semanas.</li>
                                    <li><strong className="text-foreground">Manipulación:</strong> No frotar ni masajear la zona durante 2 semanas.</li>
                                </ul>
                            </div>
                            <div className="bg-primary/10 p-6 rounded-lg border border-primary/30">
                                <h4 className="font-semibold text-foreground flex items-center gap-2">
                                    <AlertTriangle className="w-6 h-6 text-primary" />
                                    Sugerencia Estratégica
                                </h4>
                                <p className="mt-2 text-sm text-primary-foreground/80">
                                    El anclaje robusto en puntos fijos (sacro, región trocantérica) es crucial debido a la alta movilidad de la nalga. Excluir a pacientes con biopolímeros para evitar la activación de reacciones inflamatorias.
                                </p>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default GluteCurveContent;
