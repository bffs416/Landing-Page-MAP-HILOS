import { Layers, ShieldCheck, GitMerge, AlertTriangle, UserCheck, Syringe, ClipboardList, CheckCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const RhinoStructureContent = () => {
    const applicationData = [
        {
            zone: 'Columela y Punta Nasal (TIP)',
            objective: 'Proyección y Rotación de la Punta. Se usan hilos espiculados fuertes, a menudo doblados (folded) para maximizar el soporte y actuar como una "viga" (strut).',
            technique: 'Se insertan 3 a 5 hilos desde un punto de entrada en la punta o subnasale, dirigiéndose al plano subcutáneo / suprapericóndrico para anclar la punta y proyectarla hacia adelante.',
            safety: 'El soporte estructural es clave para aumentar el ángulo nasolabial. El hilo debe ser fuerte para resistir la dinámica facial.'
        },
        {
            zone: 'Dorso Nasal (UP)',
            objective: 'Rectificación y Definición. Se usan hilos espiculados o, a veces, monofilamentos/lisos para crear andamiaje y volumen.',
            technique: 'Se insertan a lo largo de la línea media en el plano subcutáneo desde el radix hasta la punta.',
            safety: 'La piel es más delgada en el rhinion (puente nasal) (~0.6 mm). Los hilos gruesos en esta área son más propensos a ser visibles o palpables.'
        }
    ];

    return (
        <div className="space-y-4 text-card-foreground">
            <div>
                <h3 className="font-headline text-2xl font-bold text-foreground">RhinoStructure™: Rinomodelación no Quirúrgica</h3>
                <p className="mt-2 text-base text-muted-foreground">
                    Protocolo avanzado para esculpir y definir la nariz mediante la inserción estratégica de hilos bioabsorbibles y la posible combinación con rellenos para resultados óptimos.
                </p>
            </div>

            <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="font-headline text-xl">
                        <div className="flex items-center gap-2">
                           <UserCheck className="w-6 h-6 text-primary" />
                           Fundamentos y Selección
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                        <ul className="space-y-2 list-disc list-inside text-muted-foreground pl-2 text-sm">
                            <li><strong className="text-foreground">Objetivos Estéticos:</strong> Corregir punta nasal poco proyectada, caballete nasal poco definido y baja rotación de la punta.</li>
                            <li><strong className="text-foreground">Candidato Ideal:</strong> Pacientes que buscan cambios menores, especialmente en la rotación de la punta, con una nariz flexible y sin rinoplastia quirúrgica previa.</li>
                            <li><strong className="text-foreground">Mecanismo Clave:</strong> Soporte estructural inmediato por hilos espiculados y bioestimulación a largo plazo (neocolagénesis) que mantiene el efecto.</li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="font-headline text-xl">
                        <div className="flex items-center gap-2">
                           <Syringe className="w-6 h-6 text-primary" />
                           Materiales y Preparación
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                        <ul className="space-y-2 list-disc list-inside text-muted-foreground pl-2 text-sm">
                            <li><strong className="text-foreground">Hilos para Punta (TIP):</strong> Se usan hilos espiculados de tracción (MINT TIP), a menudo plegados, para crear un soporte rígido.</li>
                            <li><strong className="text-foreground">Hilos para Dorso (UP):</strong> Hilos espiculados delgados o lisos para andamiaje y volumen sutil, evitando visibilidad en piel delgada.</li>
                            <li><strong className="text-foreground">Anestesia:</strong> Anestesia local en el punto de entrada y bloqueo de nervios clave (infratroclear, nasal interno) para confort.</li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="font-headline text-xl">
                        <div className="flex items-center gap-2">
                           <GitMerge className="w-6 h-6 text-primary" />
                           Técnica de Inserción
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                        <div className="overflow-x-auto rounded-lg border bg-card/50">
                            <table className="min-w-full divide-y divide-border text-sm">
                                <thead className="bg-muted/50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left font-semibold text-foreground tracking-wide">Zona Anatómica</th>
                                        <th scope="col" className="px-6 py-3 text-left font-semibold text-foreground tracking-wide">Objetivo y Hilo</th>
                                        <th scope="col" className="px-6 py-3 text-left font-semibold text-foreground tracking-wide">Técnica y Plano</th>
                                        <th scope="col" className="px-6 py-3 text-left font-semibold text-foreground tracking-wide">Consideraciones</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-card divide-y divide-border">
                                    {applicationData.map((item) => (
                                        <tr key={item.zone}>
                                            <td className="px-6 py-4 font-medium text-foreground align-top">{item.zone}</td>
                                            <td className="px-6 py-4 text-muted-foreground align-top">{item.objective}</td>
                                            <td className="px-6 py-4 text-muted-foreground align-top">{item.technique}</td>
                                            <td className="px-6 py-4 text-muted-foreground align-top">{item.safety}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="bg-card/80 p-4 rounded-lg border mt-4">
                            <p className="font-semibold text-foreground flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary" />Punto de Entrada Único: Se crea un solo punto de acceso (aguja 18-G) en la punta nasal o subnasale para todos los hilos.</p>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="item-4">
                    <AccordionTrigger className="font-headline text-xl">
                        <div className="flex items-center gap-2">
                           <ShieldCheck className="w-6 h-6 text-primary" />
                           Combinación y Seguridad
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                        <p className="text-sm text-primary-foreground/80">
                           La rinomodelación con hilos es una alternativa de <strong className="font-semibold">menor riesgo vascular</strong> que los rellenos solos, especialmente en zonas críticas como la punta y el dorso.
                        </p>
                        <p className="mt-2 text-sm text-primary-foreground/80">
                            <strong className="font-semibold">Sinergia Óptima:</strong> La mejor estrategia combina hilos para el <strong className="font-semibold">soporte estructural</strong> ("armadura") y rellenos para el <strong className="font-semibold">volumen</strong> ("hormigón"). El hilo guía al relleno, manteniendo una forma longitudinal y definida.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="item-5">
                    <AccordionTrigger className="font-headline text-xl">
                        <div className="flex items-center gap-2">
                           <ClipboardList className="w-6 h-6 text-primary" />
                           Cuidados y Resultados
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                         <ul className="space-y-2 list-disc list-inside text-muted-foreground pl-2 text-sm">
                            <li><strong className="text-foreground">Efectos Comunes:</strong> Hematomas leves, hinchazón y enrojecimiento son transitorios (1-2 semanas).</li>
                            <li><strong className="text-foreground">Autocuidado:</strong> A partir de una semana, se recomienda al paciente un masaje de autoestiramiento suave en la punta nasal para mantener la posición.</li>
                            <li><strong className="text-foreground">Duración:</strong> Resultados satisfactorios a los 6 meses, con el beneficio de la neocolagénesis persistiendo a más largo plazo.</li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default RhinoStructureContent;
