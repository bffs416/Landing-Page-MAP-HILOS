
import { Check, Shield, Activity, Target, AlertTriangle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Objectives = () => {
    const data = [
        {
            icon: <Target className="w-6 h-6 text-primary" />,
            title: 'Mejora de Forma y Posición Umbilical',
            description: 'Eleva y orienta verticalmente el ombligo, corrigiendo el "ombligo triste".',
        },
        {
            icon: <Activity className="w-6 h-6 text-primary" />,
            title: 'Tensado Abdominal',
            description: 'Tensa permanentemente el abdomen bajo para una apariencia más firme.',
        },
        {
            icon: <Shield className="w-6 h-6 text-primary" />,
            title: 'Definición de Contorno',
            description: 'Mejora la definición de los rectos abdominales y el contorno de la cintura.',
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
        { step: '1', focus: 'Evaluación y Planificación', description: 'Confirmar flacidez leve a moderada y, si es necesario, tratar la diástasis o realizar liposucción previa. Marcar los vectores de tracción deseados.' },
        { step: '2', focus: 'Asepsia y Anestesia Local', description: 'Limpiar rigurosamente la zona. Infiltrar anestesia local solo en los puntos de entrada.' },
        { step: '3', focus: 'Creación del Puerto de Entrada', description: 'Realizar una incisión (e.g., con aguja 16G) en el punto de anclaje superior medio o lateral.' },
        { step: '4', focus: 'Inserción de Hilos Fix (Tracción)', description: 'Insertar hilos espiculados bidireccionales en el plano subcutáneo (1.5-2 mm bajo la dermis).' },
        { step: '5', focus: 'Patrón de Tracción (Cinching)', description: 'Pasar el hilo en forma de U alrededor de la línea media para crear un efecto de "cinching" y elevación.' },
        { step: '6', focus: 'Inserción de Hilos Mono (Malla)', description: 'Insertar hilos monofilamento en patrón de malla en la capa subdérmica para bioestimulación.' },
        { step: '7', focus: 'Tracción y Ajuste', description: 'Retirar la cánula y tirar de los extremos de los hilos Fix para capturar el tejido y maximizar el cinching.' },
        { step: '8', focus: 'Anudado y Ocultamiento', description: 'Atar los extremos de los hilos y enterrar el nudo dentro del puerto de entrada.' },
        { step: '9', focus: 'Cuidado Inmediato', description: 'Limpiar, aplicar apósitos y un vendaje compresivo/faja con presión moderada.' },
        { step: '10', focus: 'Seguimiento y Mantenimiento', description: 'Realizar seguimientos a las 3 semanas, 3 meses y 12 meses. Repetir anualmente para mantener resultados.' },
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

const CoreDefineContent = () => {
    return (
        <div className="space-y-4 text-card-foreground">
            <div>
                <h3 className="font-headline text-2xl font-bold text-foreground">CoreDefine™: Marcación de Rectos Abdominales</h3>
                <p className="mt-2 text-base text-muted-foreground">
                    Protocolo avanzado para definir el contorno abdominal, levantar el ombligo y tensar la piel, a menudo como complemento de la liposucción de alta definición.
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
                                    <li><strong className="text-foreground">Compresión:</strong> Uso de faja compresiva 24h/día al inicio, reduciendo gradualmente.</li>
                                    <li><strong className="text-foreground">Actividad Física:</strong> Evitar ejercicio extenuante por al menos 8 días.</li>
                                    <li><strong className="text-foreground">Calor y Humedad:</strong> Evitar saunas, jacuzzis, etc., por 8 a 15 días.</li>
                                </ul>
                            </div>
                            <div className="bg-primary/10 p-6 rounded-lg border border-primary/30">
                                <h4 className="font-semibold text-foreground flex items-center gap-2">
                                    <AlertTriangle className="w-6 h-6 text-primary" />
                                    Sugerencia Estratégica
                                </h4>
                                <p className="mt-2 text-sm text-primary-foreground/80">
                                    La combinación de hilos espiculados (tracción) y monofilamento (redensificación) es clave. La planificación de un mantenimiento anual asegura la longevidad de los resultados.
                                </p>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default CoreDefineContent;
