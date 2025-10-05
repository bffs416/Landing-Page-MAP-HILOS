import { UserCheck, Dna, Bot, ShieldCheck, FileText, BarChart, AlertTriangle } from 'lucide-react';

const ApexLiftContent = () => {
    return (
        <div className="space-y-8 text-card-foreground">
            <div>
                <h3 className="font-headline text-2xl font-bold text-foreground">ApexLift™: Rejuvenecimiento del Tercio Superior</h3>
                <p className="mt-2 text-base text-muted-foreground">
                    Protocolo avanzado para la elevación de la ceja y una mirada revitalizada, conocido como "Fox Eyes".
                </p>
            </div>

            <div className="space-y-6">
                <h4 className="font-headline text-xl font-bold text-foreground flex items-center gap-2">
                    <UserCheck className="w-6 h-6 text-primary" />
                    Candidato Ideal
                </h4>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground pl-2 text-sm">
                    <li>Pacientes con ptosis (caída) de la ceja de leve a moderada.</li>
                    <li>Buscan una mejora sutil y una apariencia menos "cansada" o "enojada".</li>
                    <li>Piel ni excesivamente delgada ni demasiado gruesa.</li>
                </ul>
            </div>
            
            <div className="space-y-6">
                <h4 className="font-headline text-xl font-bold text-foreground flex items-center gap-2">
                    <Dna className="w-6 h-6 text-primary" />
                    Procedimiento Detallado
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-muted/30 p-4 rounded-lg border">
                        <p className="font-semibold text-foreground mb-1">Fase 1: Relajación Muscular (Opcional)</p>
                        <p className="text-muted-foreground">Aplicación de Toxina Botulínica 15-20 días antes para debilitar los músculos depresores y optimizar el lifting.</p>
                    </div>
                    <div className="bg-muted/30 p-4 rounded-lg border">
                        <p className="font-semibold text-foreground mb-1">Fase 2: Elevación y Fijación</p>
                        <p className="text-muted-foreground">Inserción de hilos MINT® bajo anestesia local usando una técnica de entrecruzamiento (criss-cross) para crear un andamiaje de soporte.</p>
                    </div>
                </div>
                 <div className="bg-card/80 p-4 rounded-lg border">
                    <p className="font-semibold text-foreground flex items-center gap-2"><Bot className="w-5 h-5 text-primary" />Plano de Inserción: El objetivo es el plano subcutáneo, entre la dermis y el músculo frontal para el máximo efecto.</p>
                </div>
            </div>

            <div className="space-y-6">
                <h4 className="font-headline text-xl font-bold text-foreground flex items-center gap-2">
                    <BarChart className="w-6 h-6 text-primary" />
                    Resultados y Mecanismo
                </h4>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground pl-2 text-sm">
                    <li><strong className="text-foreground">Efecto Inmediato:</strong> Lifting mecánico visible al instante por la tracción de los hilos.</li>
                    <li><strong className="text-foreground">Efecto a Largo Plazo:</strong> Neocolagenogénesis que forma un andamio fibroso, manteniendo la sustentación por hasta 2 años.</li>
                    <li><strong className="text-foreground">Resultados Clínicos:</strong> Elevación promedio de 1.2-1.3 mm de la ceja.</li>
                </ul>
            </div>
            
            <div className="space-y-6">
                <h4 className="font-headline text-xl font-bold text-foreground flex items-center gap-2">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                    Cuidados Post-Tratamiento
                </h4>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground pl-2 text-sm">
                    <li>Evitar movimientos faciales exagerados y ejercicio intenso durante 3 semanas.</li>
                    <li>Dormir en posición supina con la cabeza elevada.</li>
                    <li>Aplicar compresas frías para reducir la inflamación.</li>
                    <li>Efectos secundarios como hinchazón, hematomas o pequeños hoyuelos son leves y transitorios.</li>
                </ul>
            </div>

            <div className="bg-primary/10 p-6 rounded-lg border border-primary/30">
                <h4 className="font-headline text-xl font-bold text-foreground flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6 text-primary" />
                    Recomendación Estratégica: Gestión de Expectativas
                </h4>
                <p className="mt-2 text-sm text-primary-foreground/80">
                    Es crucial comunicar al paciente que este es un procedimiento temporal para ptosis leves/moderadas, no un sustituto de la cirugía. La mejoría máxima se observará a los 2-3 meses. Un cronograma visual de recuperación puede reducir la ansiedad del paciente y asegurar el cumplimiento de los cuidados.
                </p>
            </div>
        </div>
    );
};

export default ApexLiftContent;

    