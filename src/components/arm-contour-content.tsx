
import { Check, Shield, Activity, Target, AlertTriangle, Layers } from 'lucide-react';

const Objectives = () => {
    const data = [
        {
            icon: <Layers className="w-6 h-6 text-primary" />,
            title: 'Mejora de Textura y Calidad',
            description: 'Redensifica la piel de la cara interna de los brazos, mejorando su calidad y firmeza.',
        },
        {
            icon: <Activity className="w-6 h-6 text-primary" />,
            title: 'Reducción de Flacidez',
            description: 'Disminuye la laxitud cutánea para un contorno más firme.',
        },
        {
            icon: <Shield className="w-6 h-6 text-primary" />,
            title: 'Efecto de Tensado',
            description: 'Logra un efecto de tensado general en la zona tratada.',
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
        { step: '1', focus: 'Evaluación y Marcaje', description: 'Evaluar laxitud (Etapa 1 ideal). Marcar el área inferior al surco bicipital y dividirla en una cuadrícula.' },
        { step: '2', focus: 'Asepsia y Anestesia Local', description: 'Realizar asepsia y aplicar anestesia tópica o infiltrativa en la zona de tratamiento.' },
        { step: '3', focus: 'Inserción de Hilos Mono en Malla', description: 'Insertar hilos monofilamento (PDO doble screw 50mm) en patrón de malla en el plano dérmico profundo/hipodermis.' },
        { step: '4', focus: 'Alta Densidad de Hilos', description: 'Insertar una alta densidad de hilos (ej. 30 por brazo en un área de 10x2 cm) para maximizar la síntesis de colágeno.' },
        { step: '5', focus: 'Inserción de Hilos Fix (Opcional)', description: 'Para tracción adicional, colocar hilos espiculados a lo largo de vectores angulados contra la gravedad.' },
        { step: '6', focus: 'Terapia Combinada (Opcional, TBA)', description: 'Inyectar Toxina Botulínica intradérmicamente (ej. 20U por brazo) en la misma sesión para potenciar el tensado.' },
        { step: '7', focus: 'Ajuste y Reacomodo', description: 'Reacomodar el tejido y masajear suavemente (tensar ligeramente si se usaron hilos Cog).' },
        { step: '8', focus: 'Recorte y Terminación', description: 'Si se usaron hilos de tracción, cortar el excedente y enterrarlo bajo la piel.' },
        { step: '9', focus: 'Monitoreo del Colágeno', description: 'La mejoría por neocolagénesis y producción de elastina es visible a los 30 días.' },
        { step: '10', focus: 'Mantenimiento y Seguimiento', description: 'Repetir el procedimiento (ej. 2da sesión a los 14 días) para optimizar y mantener el resultado con bioestimulación constante.' },
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

const ArmContourContent = () => {
    return (
        <div className="space-y-8 text-card-foreground">
            <div>
                <h3 className="font-headline text-2xl font-bold text-foreground">ArmContour™: Contorno de Brazos</h3>
                <p className="mt-2 text-base text-muted-foreground">
                    Protocolo para el manejo de la laxitud y flacidez de la parte superior de los brazos (braquioplastia no quirúrgica), ideal para grados leves a moderados.
                </p>
            </div>

            <div>
                <h4 className="font-headline text-xl font-bold text-foreground mb-4">Objetivos Principales</h4>
                <Objectives />
            </div>

            <div>
                <h4 className="font-headline text-xl font-bold text-foreground mb-4">Los 10 Pasos de la Técnica ArmContour™</h4>
                <StepsTable />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <h4 className="font-headline text-xl font-bold text-foreground">Cuidados Post-Procedimiento</h4>
                    <ul className="space-y-2 list-disc list-inside text-muted-foreground pl-2 text-sm">
                        <li><strong className="text-foreground">Actividad:</strong> Evitar actividad física extenuante durante 3 días.</li>
                        <li><strong className="text-foreground">Manipulación:</strong> No aplicar cosméticos en la zona tratada durante 48 horas.</li>
                        <li><strong className="text-foreground">Movimiento:</strong> Evitar movimientos excesivos que puedan comprometer el anclaje de los hilos.</li>
                    </ul>
                </div>
                 <div className="bg-primary/10 p-6 rounded-lg border border-primary/30">
                    <h4 className="font-headline text-xl font-bold text-foreground flex items-center gap-2">
                        <AlertTriangle className="w-6 h-6 text-primary" />
                        Sugerencia Estratégica
                    </h4>
                    <p className="mt-2 text-sm text-primary-foreground/80">
                        La clave del éxito en brazos es la redensificación. Una alta densidad de hilos monofilamento en patrón de malla maximiza la bioestimulación. El mantenimiento con sesiones de refuerzo es crucial para prolongar los resultados.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ArmContourContent;
