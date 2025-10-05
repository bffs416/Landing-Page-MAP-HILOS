
import { Layers, ShieldCheck, GitMerge, AlertTriangle, UserCheck, Syringe, ClipboardList, CheckCircle, Activity, Droplets, Wind } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Objectives = () => {
    const data = [
        {
            icon: <Activity className="w-6 h-6 text-primary" />,
            title: 'Reposicionamiento y Sustentación',
            description: 'Corregir la ptosis leve a moderada, redefinir el contorno mandibular y mejorar el ángulo cervicomental mediante tracción mecánica de hilos espiculados.',
        },
        {
            icon: <Droplets className="w-6 h-6 text-primary" />,
            title: 'Redensificación y Calidad de Piel',
            description: 'Estimular la producción de colágeno y elastina (neocolagenogénesis) para aumentar la firmeza, tersura y elasticidad de la piel a largo plazo.',
        },
        {
            icon: <Wind className="w-6 h-6 text-primary" />,
            title: 'Manejo del Volumen y Dinámica',
            description: 'Complementar con reducción de grasa submentoniana (papada) y relajación del músculo platisma (con toxina botulínica) para optimizar el resultado.',
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.map((item, index) => (
                <div key={index} className="bg-muted/30 p-4 rounded-lg border border-border">
                    {item.icon}
                    <h4 className="font-semibold text-foreground mt-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                </div>
            ))}
        </div>
    );
};


const StepsTable = () => {
    const steps = [
        { step: '1', focus: 'Análisis de Flacidez y Grasa', description: 'Determinar si el paciente presenta ptosis leve a moderada y si tiene exceso de grasa submentoniana. Los pacientes con exceso de piel no son buenos candidatos para hilos solos.' },
        { step: '2', focus: 'Lipólisis Submentoniana (Opcional)', description: 'Si existe exceso de grasa, tratarla 4 a 12 semanas antes con criolipólisis o ácido desoxicólico para disminuir el peso del colgajo y hacer el lifting más efectivo.' },
        { step: '3', focus: 'Relajación Muscular (Opcional)', description: 'Aplicar Toxina Botulínica en el músculo platisma (patrón "Nefertiti") 15-20 días antes para reducir la resistencia muscular a la tracción del hilo.' },
        { step: '4', focus: 'Diseño de Vectores y Marcaje', description: 'Definir vectores de tracción opuestos a la caída del tejido, dirigidos craneal y posteriormente. El punto de anclaje se sitúa en la zona fija (fascia mastoidea/preauricular).' },
        { step: '5', focus: 'Asepsia y Anestesia Local', description: 'Realizar asepsia quirúrgica e inyectar anestesia local (ej. Lidocaína con Epinefrina) solo en los puntos de entrada y salida para no comprometer el plano de inserción.' },
        { step: '6', focus: 'Creación de Puntos de Entrada', description: 'Realizar una punción con aguja 18G en el punto de anclaje (fijo) y en la parte móvil. El hilo se colocará en el plano subcutáneo superficial (supra-SMAS).' },
        { step: '7', focus: 'Inserción de Hilos de Sustentación', description: 'Utilizar hilos espiculados bidireccionales (PDO cog) 21G o 23G. Insertar con cánula roma siguiendo los vectores diseñados hacia el punto de anclaje.' },
        { step: '8', focus: 'Tracción, Ajuste y Anclaje', description: 'Aplicar tracción anti-gravitacional para elevar el tejido. Anudar los extremos de los hilos entre sí en el punto de entrada y enterrar el nudo para evitar migración.' },
        { step: '9', focus: 'Manejo de Complicaciones', description: 'Si ocurren irregularidades o pliegues (dimpling), tratarlos inmediatamente con masaje suave o liberación de la espícula mediante subcisión con aguja 18G.' },
        { step: '10', focus: 'Cuidados Post-Procedimiento', description: 'Evitar movimientos faciales exagerados durante 2-3 semanas. Se recomienda el uso de una mentonera día y noche durante 15 días para sostener la tracción.' },
    ];

    return (
         <div className="overflow-x-auto rounded-lg border bg-card/50">
            <table className="min-w-full divide-y divide-border text-sm">
                <thead className="bg-muted/50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left font-semibold text-foreground tracking-wide w-16">Paso</th>
                        <th scope="col" className="px-6 py-3 text-left font-semibold text-foreground tracking-wide">Foco del Procedimiento</th>
                        <th scope="col" className="px-6 py-3 text-left font-semibold text-foreground tracking-wide">Descripción Detallada</th>
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
}


const ContourNeckContent = () => {
    return (
        <div className="space-y-4 text-card-foreground">
            <div>
                <h3 className="font-headline text-2xl font-bold text-foreground">ContourNeck™: Redefinición de Cuello y Papada</h3>
                <p className="mt-2 text-base text-muted-foreground">
                    Protocolo enfocado en corregir la flacidez, el exceso de grasa y la pérdida de definición del contorno mandibular y cervical.
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
                    <AccordionTrigger className="font-headline text-xl">Los 10 Pasos Clave del Procedimiento</AccordionTrigger>
                    <AccordionContent className="pt-4">
                        <StepsTable />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="font-headline text-xl">Mecanismo y Sugerencias</AccordionTrigger>
                    <AccordionContent className="pt-4">
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <h4 className="font-semibold text-foreground">Mecanismo de Acción y Duración</h4>
                                <ul className="space-y-2 list-disc list-inside text-muted-foreground pl-2 text-sm">
                                    <li><strong className="text-foreground">Doble Efecto:</strong> Lifting inmediato por tracción mecánica y rejuvenecimiento a largo plazo por neocolagenogénesis (colágeno tipo I y III).</li>
                                    <li><strong className="text-foreground">Duración:</strong> El hilo PDO se reabsorbe en 6 meses, pero el efecto de soporte y bioestimulación puede persistir de 12 a 18 meses.</li>
                                    <li><strong className="text-foreground">Refuerzo Estratégico:</strong> Se puede combinar con rellenos de AH o bioestimuladores para optimizar la calidad de la piel y el volumen.</li>
                                </ul>
                            </div>
                            <div className="bg-primary/10 p-6 rounded-lg border border-primary/30">
                                <h4 className="font-semibold text-foreground flex items-center gap-2">
                                    <AlertTriangle className="w-6 h-6 text-primary" />
                                    Sugerencia Estratégica
                                </h4>
                                <p className="mt-2 text-sm text-primary-foreground/80">
                                    El principal desafío es la durabilidad. Para gestionar expectativas y maximizar resultados, se debe planificar un protocolo de mantenimiento anual que combine hilos (cada 12-18 meses) con sesiones intermedias de HIFU o radiofrecuencia (cada 6-9 meses).
                                </p>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default ContourNeckContent;
