import { Layers, ShieldCheck, GitMerge, AlertTriangle } from 'lucide-react';

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
        <div className="space-y-8 text-card-foreground">
            <div>
                <h3 className="font-headline text-2xl font-bold text-foreground">RhinoStructure™: Rinomodelación no Quirúrgica</h3>
                <p className="mt-2 text-base text-muted-foreground">
                    Técnica avanzada para esculpir y definir la nariz mediante la inserción estratégica de hilos bioabsorbibles.
                </p>
            </div>

            <div className="space-y-6">
                <h4 className="font-headline text-xl font-bold text-foreground flex items-center gap-2">
                    <Layers className="w-6 h-6 text-primary" />
                    I. Fundamento y Materiales de Sustentación
                </h4>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground pl-2 text-sm">
                    <li><strong className="text-foreground">Sustentación y Anclaje:</strong> Se emplean hilos espiculados (cog/barbed) para un anclaje fuerte en un área móvil con soporte cartilaginoso.</li>
                    <li><strong className="text-foreground">Prevención de Migración:</strong> Hilos bidireccionales o multidireccionales distribuyen la tensión y evitan el deslizamiento.</li>
                    <li><strong className="text-foreground">Materiales Bioabsorbibles:</strong> PDO es común (reabsorción en ~6 meses), mientras que PLLA y PCL ofrecen resultados más duraderos (hasta 2+ años) al regenerar colágeno por más tiempo.</li>
                </ul>
            </div>
            
            <div className="space-y-6">
                <h4 className="font-headline text-xl font-bold text-foreground flex items-center gap-2">
                    <GitMerge className="w-6 h-6 text-primary" />
                    II. Aplicación por Zona: Dorso (UP) y Columela (TIP)
                </h4>
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
            </div>

            <div className="bg-primary/10 p-6 rounded-lg border border-primary/30">
                <h4 className="font-headline text-xl font-bold text-foreground flex items-center gap-2">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                    III. Seguridad y Enfoque Combinado
                </h4>
                <p className="mt-4 text-sm text-primary-foreground/80">
                    La rinomodelación con hilos es una alternativa de <strong className="font-semibold">menor riesgo vascular</strong> que los rellenos solos en zonas críticas como la punta y el dorso.
                </p>
                 <p className="mt-2 text-sm text-primary-foreground/80">
                    <strong className="font-semibold">Sinergia Óptima:</strong> La mejor estrategia combina hilos para el <strong className="font-semibold">soporte estructural</strong> y rellenos para el <strong className="font-semibold">volumen</strong>. El hilo guía al relleno, manteniendo una forma longitudinal y definida.
                </p>
            </div>
        </div>
    );
};

export default RhinoStructureContent;
