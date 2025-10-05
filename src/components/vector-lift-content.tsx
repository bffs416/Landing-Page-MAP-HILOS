import { Target, Move, GitMerge, Puzzle, CheckCircle } from 'lucide-react';

const AdjuvantTable = () => {
    const data = [
      {
        problem: 'Flacidez Muscular (Dinámica)',
        solution: 'Toxina Botulínica: Aplicar 15-20 días antes en músculos depresores para optimizar el vector de levantamiento.',
      },
      {
        problem: 'Pérdida de Volumen (Estructural)',
        solution: 'Rellenos / Bioestimuladores: Aplicar primero para restaurar el soporte óseo y reducir la carga del hilo.',
      },
      {
        problem: 'Calidad de la Piel / Laxitud',
        solution: 'Tecnologías de Energía (MFU/RF): Realizar antes para maximizar la retracción tisular sin interferir con el anclaje del hilo.',
      },
      {
        problem: 'Cuidados Post-Tratamiento',
        solution: 'Inmovilización Relativa: Evitar movimientos faciales bruscos durante 2-4 semanas para asegurar el anclaje inicial de las espículas.',
      },
    ];
  
    return (
      <div className="overflow-x-auto rounded-lg border bg-card/50">
        <table className="min-w-full divide-y divide-border text-sm">
          <thead className="bg-muted/50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left font-semibold text-foreground tracking-wide">
                Problema a Optimizar
              </th>
              <th scope="col" className="px-6 py-3 text-left font-semibold text-foreground tracking-wide">
                Solución Sinergica (Timing)
              </th>
            </tr>
          </thead>
          <tbody className="bg-card divide-y divide-border">
            {data.map((item) => (
              <tr key={item.problem}>
                <td className="px-6 py-4 font-medium text-foreground">{item.problem}</td>
                <td className="px-6 py-4 text-muted-foreground">{item.solution}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

const VectorLiftContent = () => {
    return (
        <div className="space-y-8 text-card-foreground">
            <div>
                <h3 className="font-headline text-2xl font-bold text-foreground">VectorLift™: La Arquitectura del Óvalo Facial</h3>
                <p className="mt-2 text-base text-muted-foreground">
                    Un enfoque de ingeniería tisular para redefinir el contorno mandibular y revertir la ptosis del tercio inferior y medio.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-muted/30 p-4 rounded-lg border border-border">
                    <Target className="w-6 h-6 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground">Objetivo Principal</h4>
                    <p className="text-sm text-muted-foreground">Reposicionar los tejidos ptósicos, corregir los *jowls* y restaurar el "triángulo de la juventud".</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg border border-border">
                    <GitMerge className="w-6 h-6 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground">Mecanismo Dual</h4>
                    <p className="text-sm text-muted-foreground">Efecto lifting inmediato por tracción mecánica y rejuvenecimiento a largo plazo por neocolagenogénesis.</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg border border-border">
                    <Puzzle className="w-6 h-6 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground">Herramienta Clave</h4>
                    <p className="text-sm text-muted-foreground">Hilos MINT® espiculados y moldeados en 360° para máxima fuerza de anclaje.</p>
                </div>
            </div>

            <div>
                <h4 className="font-headline text-xl font-bold text-foreground mb-4">Vectores de Tracción y Anclaje</h4>
                <div className="space-y-4">
                    <div className="bg-card/80 p-4 rounded-lg border">
                        <p className="font-semibold text-foreground flex items-center gap-2"><Move className="w-5 h-5 text-primary" />Técnica Retrograda: Inserción distal y tracción póstero-superior para contrarrestar la gravedad.</p>
                    </div>
                    <div className="bg-card/80 p-4 rounded-lg border">
                         <p className="font-semibold text-foreground flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary" />Punto de Anclaje: Zona fija en la región temporal/preauricular, anclando a la fascia temporal profunda para máxima estabilidad.</p>
                    </div>
                </div>
            </div>

            <div>
                <h4 className="font-headline text-xl font-bold text-foreground mb-4">Consideraciones para la Excelencia Clínica</h4>
                <p className="text-muted-foreground mb-4 text-sm">Un enfoque integral maximiza y prolonga los resultados. El timing es clave.</p>
                <AdjuvantTable />
            </div>

            <div>
                <h4 className="font-headline text-xl font-bold text-foreground">Longevidad y Próximos Pasos</h4>
                <ul className="mt-2 space-y-2 text-muted-foreground list-disc list-inside">
                    <li className="text-sm"><strong className="text-foreground">Efecto Inmediato:</strong> El lifting es visible al momento, pero disminuye parcialmente a los 60 días.</li>
                    <li className="text-sm"><strong className="text-foreground">Efecto a Largo Plazo:</strong> La neocolagenogénesis mantiene resultados hasta por 2 años.</li>
                    <li className="text-sm"><strong className="text-foreground">Recomendación:</strong> Planificar un mantenimiento proactivo (reaplicación) a los 12-18 meses para correlacionar la durabilidad objetiva con la satisfacción del paciente.</li>
                </ul>
            </div>
        </div>
    );
};

export default VectorLiftContent;
