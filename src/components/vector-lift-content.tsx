const AdjuvantTable = () => {
    const data = [
      {
        problem: 'Flacidez Muscular (Dinámica)',
        solution: 'Toxina Botulínica: Aplicar 15-20 días antes de los hilos en músculos depresores (DAO, Platisma) para relajar la tracción antagonista y optimizar el vector de levantamiento.',
      },
      {
        problem: 'Pérdida de Volumen (Estructura Ósea)',
        solution: 'Rellenos de AH/Bioestimuladores: Inyectar primero (o inmediatamente antes de los hilos en planos separados) para restaurar el soporte óseo profundo (p. ej., arco cigomático) y compensar el volumen perdido. Recomendación: Se recomienda que los rellenos se realicen primero, ya que el lifting reduce el peso del colgajo que el hilo debe soportar.',
      },
      {
        problem: 'Calidad de la Piel/Luminosidad',
        solution: 'Técnicas de Calor (MFU/RF): Es ideal realizar tratamientos de ultrasonido microfocalizado (MFU) o radiofrecuencia (RF) antes de la colocación de hilos espiculados para maximizar la retracción tisular y evitar interferencias con la fijación del hilo.',
      },
      {
        problem: 'Cuidado Post-Tratamiento',
        solution: 'Inmovilización: Dormir en posición supina y evitar movimientos faciales bruscos (como masticar duro o abrir la boca en exceso) durante las primeras 2 a 4 semanas es fundamental para asegurar el anclaje inicial de las espículas.',
      },
    ];
  
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-border text-sm">
          <thead className="bg-muted/50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left font-medium text-foreground tracking-wider">
                Problema de Envejecimiento
              </th>
              <th scope="col" className="px-6 py-3 text-left font-medium text-foreground tracking-wider">
                Solución Recomendada (Timing)
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
        <div className="prose prose-sm max-w-none text-card-foreground prose-headings:font-headline prose-headings:text-foreground prose-strong:text-foreground">
            <p className="lead">
                La meta de lograr un óvalo facial bien definido y un contorno juvenil es un objetivo central en el rejuvenecimiento facial mínimamente invasivo. Para conseguir este efecto y contrarrestar el descenso de los tejidos (ptosis), especialmente en el tercio inferior y medio de la cara, es necesario aplicar un enfoque de elevación (lifting) y reposicionamiento de volumen.
            </p>
            <p>
                A continuación, se detalla cómo lograr un óvalo facial definido, centrándose en los vectores y las técnicas retrogradas, según la evidencia disponible:
            </p>

            <h3>1. Principios para la Restauración del Óvalo Facial</h3>
            <p>
                El envejecimiento provoca que el rostro pierda su forma de "triángulo de la juventud" (base superior) y adquiera una forma más ancha e invertida (base inferior), debido a la flacidez y el descenso de los tejidos blandos. El objetivo del tratamiento es reposicionar los tejidos ptósicos y la grasa desplazada, redefiniendo la línea mandibular y corrigiendo los mofetes (jowls).
            </p>
            <p>
                Los hilos tensores de Polidioxanona (PDO), especialmente los espiculados (cog) o barbados, son una herramienta ideal para este propósito, ya que proporcionan un efecto tensor inmediato junto con la estimulación de neocolagenogénesis (producción de colágeno nuevo) a largo plazo.
            </p>

            <h3>2. Vectores Retrogrados para el Tercio Medio e Inferior (Técnica de Reposicionamiento)</h3>
            <p>
                Los vectores de elevación deben ser opuestos a la dirección de la caída gravitacional. En el tercio inferior y medio, el vector deseado es generalmente póstero-superior y vertical.
            </p>
            <p>
                La técnica de inserción retrograda (usando cánulas o agujas largas) implica que el hilo se inserta hasta el punto de anclaje distal y luego se aplica la tracción al retirar el instrumento o al mover manualmente los tejidos, anclando las espículas en la dirección deseada.
            </p>

            <h4>A. Vectores Clave y Puntos de Suspensión</h4>
            <p>
                Para redefinir el óvalo facial, el enfoque se centra en dos áreas principales que requieren tracción hacia la zona fija lateral (área temporal/preauricular):
            </p>
            <ol>
                <li>
                    <strong>Vector de la Línea Mandibular (Jowl):</strong>
                    <ul>
                        <li><strong>Objetivo:</strong> Corregir el descenso de los mofetes y redefinir el contorno de la mandíbula.</li>
                        <li><strong>Vector:</strong> Oblicuo ascendente (póstero-superior) a lo largo del borde mandibular.</li>
                        <li><strong>Puntos de Suspensión (Salida del hilo):</strong> Cerca de la línea mandibular y la almohadilla de grasa mandibular. Un estudio objetivo demostró que el reposicionamiento mediante esta técnica produjo una reducción de volumen de -0.36 ± 0.43 cc en la mandíbula inmediatamente después del tratamiento.</li>
                    </ul>
                </li>
                <li>
                    <strong>Vector del Tercio Medio/Surco Nasogeniano (SNL):</strong>
                    <ul>
                        <li><strong>Objetivo:</strong> Reposicionar la almohadilla de grasa malar caída y suavizar el SNL.</li>
                        <li><strong>Vector:</strong> Oblicuo superior, dirigido hacia el arco cigomático o el punto de anclaje en el área temporal.</li>
                        <li><strong>Puntos de Suspensión:</strong> Puntos laterales al surco nasogeniano. Es vital no cruzar el SNL directamente, y se recomienda mantener una distancia mínima de 0.5 cm del pliegue para evitar hematomas debido a la proximidad de la arteria facial. El reposicionamiento en el tercio medio puede resultar en un reposicionamiento de volumen promedio de 1.34 ± 0.79 cc en los compartimentos grasos superficiales.</li>
                    </ul>
                </li>
            </ol>

            <h4>B. Punto de Anclaje (Fijación Proximal)</h4>
            <p>
                El punto de anclaje (donde el hilo ingresa y se fija) debe estar en el área lateral fija del rostro, generalmente en la región temporal o preauricular:
            </p>
            <ul>
                <li><strong>Ubicación Común:</strong> Cerca de la línea del cabello, 1 cm anterior y 1 cm superior al ápice del trago.</li>
                <li><strong>Plano de Anclaje:</strong> Los hilos que no son flotantes se anclan a estructuras fijas como la fascia temporal profunda o el periostio del arco cigomático.</li>
                <li><strong>Seguridad:</strong> El uso de ultrasonido Doppler en esta región es vital para localizar la rama frontal de la Arteria Temporal Superficial (FBrSTA) y evitar complicaciones vasculares durante la inserción de los hilos de anclaje.</li>
            </ul>
            
            <h3>3. Técnicas de Hilos Espiculados (Cog) y de Refuerzo</h3>
            <p>Para lograr un lifting efectivo y duradero, se utilizan hilos espiculados (Cog) y se pueden complementar con hilos mono (lisos) o FIX MINI (Screw/Tornado).</p>
            <ul>
                <li><strong>Hilos Espiculados (Cog):</strong> Utilizados para la tracción y el levantamiento. Los hilos bidireccionales se consideran auto-anclables al tejido subcutáneo. Los hilos moldeados helicoidalmente (360°), como MINT, ofrecen mayor fuerza de anclaje y distribución uniforme de la tensión.</li>
                <li><strong>Técnica de Cruce (Criss-Cross):</strong> El entrecruzamiento de hilos espiculados puede utilizarse para crear una fibro-arquitectura más intensa, lo que se ha demostrado histológicamente que produce una producción de colágeno mucho mayor, con el fin de extender la duración del resultado. Esta técnica es un patrón de implantación que refuerza el andamiaje fibroso.</li>
                <li><strong>Técnica de Nudo:</strong> Anudar los hilos bidireccionales entre sí en el mismo punto de entrada se considera una técnica efectiva para prevenir la migración y aumentar la eficacia de sustentación.</li>
            </ul>

            <h3>4. Consideraciones Adyuvantes para Optimizar el Resultado</h3>
            <p>Un enfoque integral (full-face) o de combinación es crucial, ya que los hilos no actúan sobre todos los signos del envejecimiento.</p>
            <AdjuvantTable />
            
            <h3>Próximo Paso Recomendado</h3>
            <p>La evidencia objetiva (mediciones 3D) de la técnica de vectores sugiere que el efecto de levantamiento inmediato de los hilos PDO disminuye notablemente después de los 60 días, pero el efecto a largo plazo se mantiene hasta por 2 años debido a la neocolagenogénesis.</p>
            <p>Por lo tanto, propongo un análisis de longevidad centrado en la tasa de re-consulta y repetición del tratamiento para pacientes con MINT® VectorLift™ (hilos moldeados). Esto permitirá correlacionar la durabilidad objetiva del hilo con la satisfacción subjetiva del paciente y planificar un protocolo de mantenimiento proactivo (reaplicaciones) a los 12-18 meses.</p>
        </div>
    );
};

export default VectorLiftContent;
