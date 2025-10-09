
export type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
};

export type TriviaLevel = {
  title: string;
  questions: Question[];
};

export const triviaLevels: Record<string, TriviaLevel> = {
  beginner: {
    title: 'Principiante',
    questions: [
      {
        question: '¿Cuál es el polímero sintético absorbible principal del que están hechos los hilos PDO?',
        options: [
          'A. Poliláctico',
          'B. Polidioxanona (PDO)',
          'C. Polipropileno',
          'D. Policaprolactona',
        ],
        correctAnswer: 'B',
      },
      {
        question: '¿Cuál es el principal mecanismo de acción de los hilos PDO que proporciona un efecto a largo plazo?',
        options: [
          'A. Hidratación tisular inmediata',
          'B. Lisis de adipocitos',
          'C. Estimulación de la neocolagenogénesis',
          'D. Bloqueo muscular',
        ],
        correctAnswer: 'C',
      },
      {
        question: '¿Cuál es el tiempo promedio de reabsorción completa de los hilos de Polidioxanona (PDO) en el cuerpo?',
        options: [
          'A. 1 a 3 meses',
          'B. 12 a 18 meses',
          'C. 4 a 8 meses',
          'D. Más de 2 años',
        ],
        correctAnswer: 'C',
      },
      {
        question: 'Los hilos diseñados con Espículas que se enganchan en el tejido para levantar y suspender se conocen como:',
        options: [
          'A. Hilos Mono',
          'B. Hilos FIX MINI',
          'C. Hilos Cog/Barbados',
          'D. Hilos Líquidos',
        ],
        correctAnswer: 'C',
      },
      {
        question: '¿Cuál es el plano de tejido ideal para la inserción de hilos PDO Espiculados (Cog) para lograr un lifting efectivo?',
        options: [
          'A. Dermis superficial',
          'B. Tejido celular subcutáneo (Hipodermis o plano supra-SMAS)',
          'C. Músculo Frontal',
          'D. Plano subperióstico',
        ],
        correctAnswer: 'B',
      },
      {
        question: 'Los hilos FIX MINI (Screw/Tornado), que tienen forma de hilos simples entrelazados alrededor de la aguja, se utilizan principalmente para:',
        options: [
          'A. Proporcionar una tracción potente',
          'B. Dar volumen a las zonas hundidas de la piel',
          'C. Corregir arrugas dinámicas',
          'D. Anclarse a estructuras óseas',
        ],
        correctAnswer: 'B',
      },
      {
        question: '¿Cuál es el principal efecto de los hilos monofilamento (mono) lisos?',
        options: [
          'A. Un levantamiento significativo (lifting)',
          'B. Tensar la piel y estimular colágeno (rejuvenecimiento)',
          'C. Reducir la grasa profunda',
          'D. Corregir asimetrías severas',
        ],
        correctAnswer: 'B',
      },
      {
        question: '¿Cuál es la complicación transitoria más frecuente inmediatamente después de la colocación de hilos PDO?',
        options: [
          'A. Infección',
          'B. Lesión nerviosa',
          'C. Equimosis (moretones) e hinchazón',
          'D. Migración del hilo',
        ],
        correctAnswer: 'C',
      },
      {
        question: 'El nervio y la arteria que pasan cerca del área temporal que deben evitarse durante la colocación de hilos son:',
        options: [
          'A. Arteria y Nervio Facial',
          'B. Arteria Temporal Superficial y Nervio Facial (rama frontal)',
          'C. Arteria infraorbitaria',
          'D. Nervio trigémino',
        ],
        correctAnswer: 'B',
      },
      {
        question: 'Los hilos de polidioxanona (PDO) son monofilamento, lo que se traduce en una menor probabilidad de albergar bacterias en comparación con las suturas trenzadas.',
        options: [
          'A. Verdadero',
          'B. Falso',
        ],
        correctAnswer: 'A',
      },
      {
        question: '¿Cuánto tiempo se espera que persista el efecto de rejuvenecimiento (por neocolagenogénesis) después de la absorción del hilo PDO?',
        options: [
          'A. 3 a 6 meses',
          'B. 6 a 8 meses (duración del hilo)',
          'C. 12 a 24 meses',
          'D. 5 años o más',
        ],
        correctAnswer: 'C',
      },
      {
        question: 'Aparte de PDO, ¿qué otros dos materiales biodegradables se utilizan comúnmente en hilos tensores absorbibles?',
        options: [
          'A. Nylon y Polipropileno',
          'B. PLLA (Ácido Poli-L-Láctico) y PCL (Policaprolactona)',
          'C. Gore-Tex y Seda',
          'D. Metacrilato y Silicona',
        ],
        correctAnswer: 'B',
      },
      {
        question: '¿Cómo se degrada el polímero de Polidioxanona (PDO) en el organismo?',
        options: [
          'A. Digestión enzimática',
          'B. Hidrólisis',
          'C. Radiación UV',
          'D. Lisis celular',
        ],
        correctAnswer: 'B',
      },
      {
        question: 'El lifting con hilos PDO está más indicado para:',
        options: [
          'A. Pacientes con flacidez severa y exceso de piel',
          'B. Pacientes jóvenes con laxitud leve a moderada',
          'C. Pacientes con sobrepeso y tejido subcutáneo abundante',
          'D. Pacientes con reabsorción ósea marcada',
        ],
        correctAnswer: 'B',
      },
      {
        question: 'La principal diferencia entre los hilos Mono (lisos) y los hilos FIX MINI (Screw/Tornado) es que los FIX MINI están diseñados para:',
        options: [
          'A. Tracción y anclaje',
          'B. Absorción más rápida',
          'C. Restaurar volumen y dar un efecto más tenso',
          'D. Evitar la formación de equimosis',
        ],
        correctAnswer: 'C',
      },
      {
        question: 'En los hilos Mint, la tecnología patentada por moldeo para crear las Espículas tiene la ventaja de:',
        options: [
          'A. Hacer el hilo más elástico',
          'B. Acelerar la reabsorción',
          'C. Aumentar la fuerza de anclaje sin debilitar el núcleo del hilo',
          'D. Reducir la necesidad de anestesia',
        ],
        correctAnswer: 'C',
      },
      {
        question: '¿Qué actividad se recomienda evitar durante las primeras semanas después de la inserción de hilos tensores para asegurar su fijación?',
        options: [
          'A. Aplicar compresas frías',
          'B. Gesticulación exagerada o comer alimentos duros',
          'C. Utilizar protector solar',
          'D. Masajear suavemente el área tratada',
        ],
        correctAnswer: 'B',
      },
      {
        question: 'Para evitar la compresión vascular en la frente, los rellenos inyectables suelen aplicarse en el plano:',
        options: [
          'A. Subcutáneo',
          'B. Supraperióstico',
          'C. Intramuscular',
          'D. Dermis profunda',
        ],
        correctAnswer: 'B',
      },
      {
        question: 'El término \'Cog\' en los hilos PDO se refiere a:',
        options: [
          'A. Un material no absorbible',
          'B. Un hilo mono sin Espículas',
          'C. Las Espículas que anclan y levantan el tejido',
          'D. La aguja de inserción',
        ],
        correctAnswer: 'C',
      },
      {
        question: 'La inserción de un hilo PDO precargado en una aguja o cánula, deja el hilo en el tejido cuando:',
        options: [
          'A. Se retira la Espícula',
          'B. Se retira la aguja o cánula sola',
          'C. Se anuda el hilo a la fascia',
          'D. Se corta el hilo en el punto medio',
        ],
        correctAnswer: 'B',
      },
    ],
  },
  intermediate: {
    title: 'Intermedio',
    questions: [
        {
          question: 'En comparación con los hilos PDO (6-8 meses), ¿cuál es la duración promedio de absorción de los hilos de Policaprolactona (PCL)?',
          options: [
              'A. Menos de 4 meses',
              'B. 6 meses',
              'C. 12 meses',
              'D. 12 a más de 24 meses (1.5 a 2+ años)',
          ],
          correctAnswer: 'D',
        },
        {
          question: 'Un estudio biomecánico demostró que la combinación de hilos bidireccionales con multidireccionales mejora la fuerza de fijación en un 10% respecto a los bidireccionales solos. ¿Qué sugiere este hallazgo clínicamente?',
          options: [
              'A. Que los hilos multidireccionales no son necesarios',
              'B. Que la combinación aumenta el riesgo de hematomas',
              'C. Que la combinación optimiza la capacidad de levantamiento y la estabilidad tisular',
              'D. Que se debe usar solo un hilo para obtener los mejores resultados',
          ],
          correctAnswer: 'C',
        },
        {
          question: '¿Cuál es la complicación más frecuente si los hilos Espiculados se colocan demasiado superficialmente en el plano dérmico?',
          options: [
              'A. Infección grave',
              'B. Parálisis facial',
              'C. Formación de hoyuelos (dimpling) o visibilidad del hilo',
              'D. Hipoestesia',
          ],
          correctAnswer: 'C',
        },
        {
          question: 'Si se produce un hoyuelo o depresión (dimple) en la piel inmediatamente después de la colocación del hilo, ¿cuál es el manejo inicial recomendado?',
          options: [
              'A. Retirar quirúrgicamente el hilo',
              'B. Masajear suavemente el área o hacer subcisión con aguja',
              'C. Aplicar láser ablativo',
              'D. Inyectar un relleno de alto G\'',
          ],
          correctAnswer: 'B',
        },
        {
          question: 'Los estudios histológicos comparativos en modelos animales muestran que el hilo PDO produce una inflamación tisular y una irritación en la piel que son:',
          options: [
              'A. Más fuertes y rápidas que el PLLA o PCL',
              'B. Más leves y estables que el PLLA o PCL',
              'C. Más propensas a la infección',
              'D. Inexistentes',
          ],
          correctAnswer: 'B',
        },
        {
          question: 'La ventaja principal de utilizar cánulas de punta roma (en lugar de agujas afiladas) para la inserción de hilos es:',
          options: [
              'A. Permite la inserción más superficial',
              'B. Es más económico',
              'C. Minimiza el riesgo de daño vascular y nervioso, y reduce los hematomas',
              'D. Facilita la fijación al periostio',
          ],
          correctAnswer: 'C',
        },
        {
          question: '¿Qué mecanismo garantiza que el efecto de levantamiento por hilos PDO continúe después de que el material se haya absorbido?',
          options: [
              'A. La permanencia de la anestesia local',
              'B. El volumen del hilo',
              'C. La formación de una cápsula fibrosa y colágeno nuevo (andamiaje)',
              'D. La retracción del músculo frontalis',
          ],
          correctAnswer: 'C',
        },
        {
          question: '¿Cuál es una zona facial donde el uso de hilos Espiculados se utiliza para el reposicionamiento, en combinación con rellenos o grasa, pero donde el relleno líquido por sí solo tiene limitaciones?',
          options: [
              'A. Líneas de marioneta',
              'B. Arco cigomático',
              'C. Punta nasal (Rinoplastia no quirúrgica)',
              'D. Pliegue glabelar',
          ],
          correctAnswer: 'C',
        },
        {
          question: '¿Qué arteria facial principal corre riesgo de punción cerca de la comisura oral o pliegue nasolabial?',
          options: [
              'A. Arteria Temporal Superficial',
              'B. Arteria Facial',
              'C. Arteria Oclusal',
              'D. Arteria Cigomático-orbital',
          ],
          correctAnswer: 'B',
        },
        {
          question: 'En el tratamiento de la asimetría por parálisis facial, ¿por qué los hilos PDO tienden a durar más en el lado paralizado que en un rostro no paralizado?',
          options: [
              'A. La parálisis aumenta la neocolagenogénesis',
              'B. El movimiento muscular es limitado, reduciendo la fuerza que rompe los hilos',
              'C. Los hilos son más fáciles de anclar al hueso',
              'D. Se utiliza una mayor cantidad de hilos en ese lado',
          ],
          correctAnswer: 'B',
        },
        {
          question: 'Si se planea usar láser fraccional ablativo (que causa edema) y hilos Cog, ¿cuál es la secuencia correcta y el tiempo de espera recomendado?',
          options: [
              'A. Hilos primero, láser después, inmediatamente',
              'B. Láser y hilos al mismo tiempo',
              'C. Láser ablativo primero, esperar 5-7 días, luego hilos Cog (o hilos primero, esperar 15 días)',
              'D. Hilos primero, láser ablativo después, esperar 30 días',
          ],
          correctAnswer: 'C',
        },
        {
          question: 'La infección posterior a la inserción de hilos PDO es una causa frecuente de remoción de los hilos, y es más común en pacientes:',
          options: [
              'A. Menores de 30 años',
              'B. Con bajo IMC',
              'C. Con VIH',
              'D. Mayores de 50 años',
          ],
          correctAnswer: 'D',
        },
        {
          question: 'Para el tratamiento de la flacidez en el abdomen con hilos tensores, el plano de inserción es:',
          options: [
              'A. Dermis profunda',
              'B. Dermis e hipodermis superficial / tejido celular subcutáneo',
              'C. Músculo recto abdominal',
              'D. Plano subfascial',
          ],
          correctAnswer: 'B',
        },
        {
          question: 'La principal diferencia entre los hilos Aptos originales (bidireccionales flotantes) y los hilos Contour (unidireccionales) era que los Contour requerían:',
          options: [
              'A. Ser reabsorbibles',
              'B. Un anclaje proximal a una estructura fija (fascia temporal o mastoides)',
              'C. Una inserción sin aguja',
              'D. Ser más delgados',
          ],
          correctAnswer: 'B',
        },
        {
          question: '¿Por qué los hilos FIX MINI (Mono) o rellenos bioestimuladores no deben usarse en el párpado o labio?',
          options: [
              'A. Riesgo de migración a la córnea',
              'B. Riesgo de daño al nervio óptico',
              'C. Ausencia de grasa subcutánea en esa zona, lo que aumenta el riesgo de nódulos/palpación',
              'D. La estimulación de colágeno no es efectiva',
          ],
          correctAnswer: 'C',
        },
        {
          question: '¿Qué técnica se ha reportado como efectiva para prevenir la migración o desplazamiento de los hilos Espiculados?',
          options: [
              'A. Cortar el hilo muy superficialmente',
              'B. Anudar los hilos entre sí en el mismo punto de entrada',
              'C. Masajear la zona vigorosamente',
              'D. Usar anestesia tumescente',
          ],
          correctAnswer: 'B',
        },
        {
          question: 'Se recomienda a los pacientes evitar medicamentos como la Aspirina y los AINEs antes de la inserción de hilos para reducir el riesgo de:',
          options: [
              'A. Infección',
              'B. Hematomas y sangrado',
              'C. Migración del hilo',
              'D. Reacciones alérgicas',
          ],
          correctAnswer: 'B',
        },
        {
          question: 'En el tratamiento de cicatrices atróficas, ¿cómo ayudan los hilos mono PDO antes de un tratamiento con láser CO2?',
          options: [
              'A. Neutralizan el ácido del láser',
              'B. Proporcionan soporte mecánico para elevar la cicatriz, reduciendo la profundidad de penetración del láser',
              'C. Aumentan la pigmentación',
              'D. Aceleran la degradación del colágeno',
          ],
          correctAnswer: 'B',
        },
        {
          question: 'El proceso de fabricación de Espículas por moldeo (press cog type o MINT) es una ventaja porque:',
          options: [
              'A. Utiliza láser para cortes precisos',
              'B. Crea una base de Espícula más ancha y resistente, sin debilitar el núcleo del hilo',
              'C. Permite usar hilos más delgados',
              'D. Genera un efecto lifting inmediato sin bioestimulación',
          ],
          correctAnswer: 'B',
        },
        {
          question: 'Cuando se utilizan cánulas precargadas para hilos (como Mint Fine) se recomienda hacer un puerto de entrada primero con:',
          options: [
              'A. Tijeras',
              'B. Aguja de un calibre mayor (ej. 18G) o un trocar',
              'C. El dedo del cirujano',
              'D. La cánula misma',
          ],
          correctAnswer: 'B',
        },
    ],
  },
  expert: {
    title: 'Experto',
    questions: [
      {
        question: 'Se está planificando un lifting de tercio inferior y línea mandibular en un paciente de 58 años. La complicación nerviosa más grave, la paresia del Nervio Marginal Mandibular (NMM), se puede evitar al recordar que el NMM cruza la Arteria Facial (AF) en un punto crítico situado a:',
        options: [
          'A. 9.7 mm superior al Ligamento Osocutáneo Mandibular (MOCL)',
          'B. 3.1 mm superior al ángulo gonial y 23.1 mm desde este (en el área donde el nervio pasa de plano profundo a sub-SMAS)',
          'C. 1 cm por debajo del borde de la mandíbula',
          'D. 5 mm por encima del borde inferior de la mandíbula',
        ],
        correctAnswer: 'B',
      },
      {
        question: 'Una paciente con un fotoenvejecimiento Glogau Tipo III (arrugas en reposo) y laxitud cutánea moderada solicita un lifting con hilos PDO espiculados. El cirujano plástico utiliza la técnica de inserción de 18G en la sien. ¿Cuál es el plano de inserción ideal para el hilo cog en el tercio medio facial, y qué plano se debe evitar?',
        options: [
          'A. Inserción en la dermis profunda para bioestimulación; evitar el subcutáneo para prevenir la migración',
          'B. Inserción en el plano sub-SMAS para anclarse directamente al músculo; evitar el plano subperióstico',
          'C. Inserción en el tejido subcutáneo (supra-SMAS); evitar la dermis (para prevenir hoyuelos/visibilidad) y el plano sub-SMAS (para prevenir daño nervioso/vascular)',
          'D. Inserción en la fascia temporal superficial; evitar la fascia temporal profunda',
        ],
        correctAnswer: 'C',
      },
      {
        question: 'Un cirujano desea maximizar el efecto de sustentación a largo plazo de los hilos PDO y decide realizar un patrón crisscross (entrecruzado) con hilos espiculados monodireccionales. El mecanismo histológico que asegura la longevidad del lifting más allá de la absorción del hilo (6 meses) es:',
        options: [
          'A. La contracción miocárdica que se extiende a los miofibroblastos del SMAS',
          'B. La acumulación de colágeno Tipo III y la persistencia de células gigantes multinucleadas hasta los 18 meses',
          'C. La formación de "tejido fibroso de puente" (fibrous bridging effect) y la producción continua de colágeno Tipo I y TGF-β1, evidente hasta 7 meses y que persiste más allá de 48 semanas',
          'D. La mineralización de los fragmentos de PDO remanentes en el tejido adiposo',
        ],
        correctAnswer: 'C',
      },
      {
        question: 'En un estudio ex vivo que comparó la fuerza de fijación, se encontró que la combinación de hilos bidireccionales + multidireccionales (diseño híbrido) era un 10% más fuerte que usar doble bidireccionales únicamente. ¿Cuál es la principal ventaja clínica de esta combinación de diseños sobre la técnica bidireccional simple?',
        options: [
          'A. El diseño bidireccional puro reduce el riesgo de extrusión a largo plazo',
          'B. El diseño multidireccional garantiza que el hilo se ancle al periostio automáticamente',
          'C. El patrón multidireccional distribuye los puntos de fijación de manera más uniforme, optimizando la estabilidad tisular y reduciendo el efecto de "amontonamiento" (bunching o dimpling) asociado a la tensión concentrada del hilo bidireccional',
          'D. La fuerza adicional se debe a la mayor rigidez del hilo bidireccional, no al patrón de espículas',
        ],
        correctAnswer: 'C',
      },
      {
        question: 'Se está tratando un surco nasogeniano (SNL) y un área malar con hilos PDO espiculados. El estudio cuantitativo 3D objetivó un desplazamiento horizontal medio de 2.80 mm en el tercio medio. Además, se observó un aumento paradójico en el volumen del SNL en un 41.6% de los pacientes. ¿A qué se atribuyó más probablemente este aumento de volumen y cuál es la recomendación de manejo?',
        options: [
          'A. A la neocolagenogénesis prematura inducida por la fricción del hilo',
          'B. Al edema post-tratamiento debido a la proximidad a la arteria facial, y se recomienda mantener una distancia mínima de 0.5 cm del pliegue nasolabial',
          'C. A la migración distal de la púa del hilo',
          'D. Al uso concurrente de HA que causó hipercicatrización',
        ],
        correctAnswer: 'B',
      },
      {
        question: 'Para un paciente con una cicatriz atrófica facial por inyección de corticosteroide (atrofia inducida por esteroides, SIAS), se utiliza una estrategia combinada. ¿Cuál es el propósito fundamental de insertar hilos PDO mono en la dermis, como paso preparatorio antes de un tratamiento con láser CO2 fraccional?',
        options: [
          'A. Activar la hialuronidasa para limpiar el tejido',
          'B. Sostener la pared vascular contra la hipertermia del láser',
          'C. Proveer soporte mecánico inmediato para elevar la depresión de la cicatriz, reduciendo así la profundidad de penetración requerida por la energía láser (CO2 fraccional)',
          'D. Reducir la pigmentación residual de la cicatriz antes del láser',
        ],
        correctAnswer: 'C',
      },
      {
        question: 'Una paciente de 40 años, con un IMC normal, presenta una flacidez incipiente del tercio inferior y desea una corrección duradera. Si comparamos PDO (6 meses de absorción) con PCL (18-24+ meses de absorción), ¿cuál de las siguientes afirmaciones sobre la estimulación de colágeno a las 8 semanas es correcta en un modelo in vivo (ratones)?',
        options: [
          'A. Los hilos PDO y PLLA producen significativamente más colágeno Tipo I (maduro) que PCL',
          'B. El hilo de PCL (nuevo y preexistente) mostró un aumento significativo de aproximadamente 50% más colágeno joven (Tipo III) en la dermis en comparación con PDO o PLLA',
          'C. El PDO genera una reacción inflamatoria inicial más intensa y prolongada, crucial para la neocolagenogénesis',
          'D. El PCL no tiene un efecto significativo sobre el factor de crecimiento TGF-β en las primeras 8 semanas',
        ],
        correctAnswer: 'B',
      },
      {
        question: 'Si en un procedimiento de lifting facial se combinan hilos PDO espiculados con ultrasonido microfocalizado (MFU/HIFU), ¿cuál es el protocolo de tiempo de espera más seguro si se realizan los hilos primero, y por qué?',
        options: [
          'A. El MFU debe realizarse inmediatamente, ya que el PDO tiene un punto de fusión bajo (110-115°C) y el MFU trabaja a 60-70°C',
          'B. El MFU debe realizarse a los 5-7 días, para aprovechar la inflamación temprana',
          'C. Se deben esperar 15 días después de los hilos PDO, para permitir que se forme suficiente colágeno alrededor de las espículas, asegurando que el tejido sostenga la tracción contra el edema y la contracción inducida por el calor del MFU',
          'D. No hay que esperar, ya que el PDO, al estar en el plano subcutáneo, está más profundo que el MFU (1.5 - 4.5 mm)',
        ],
        correctAnswer: 'C',
      },
      {
        question: 'Una complicación grave y rara con los hilos no absorbibles (Polipropileno tipo APTOS) es la lesión del Conducto de Stensen. ¿Cuál fue el hallazgo clínico inicial que llevó al diagnóstico de la laceración del ducto en el caso reportado, y qué técnica se utilizó para confirmar la lesión?',
        options: [
          'A. Parálisis del nervio facial temporal en el lado afectado',
          'B. Hinchazón notable, hematomas localizados y derrame de contraste en la evaluación ecográfica/sialograma',
          'C. Extrusión del hilo en la comisura oral',
          'D. Fiebre alta y granuloma crónico después de 6 meses',
        ],
        correctAnswer: 'B',
      },
      {
        question: 'Un paciente presenta flacidez de la línea mandibular (mofetes). Los estudios sugieren que el lifting con hilos PDO funciona mejor en pacientes con ciertas características anatómicas ideales. ¿Cuál de las siguientes condiciones anatómicas es más favorable para un resultado óptimo con hilos PDO en el tercio inferior?',
        options: [
          'A. Obesidad con tejido blando grueso',
          'B. Presencia de biopolímeros en el área facial',
          'C. Bajo IMC, volumen de tejido blando mínimo, buena calidad de piel y proyecciones óseas fuertes para dar soporte',
          'D. Flacidez severa que requiere resección de piel',
        ],
        correctAnswer: 'C',
      },
      {
        question: 'Se ha demostrado que el grosor del hilo PDO influye en la respuesta biológica. En estudios comparativos, se observó que la máxima producción de colágeno Tipo I (maduro) se alcanza a las 12 semanas. Sin embargo, en el mismo punto de tiempo (12 semanas), las configuraciones de hilos Cog (4 hebras) versus Mono (1 hebra) indujeron:',
        options: [
          'A. Mayor inflamación, pero menor producción de colágeno total',
          'B. El mismo nivel de colágeno que los hilos mono, pero con un mayor riesgo de infección',
          'C. Mayor acumulación de células gigantes multinucleadas e histiocitos (a las 12 semanas) y una cápsula circundante más grande que los hilos simples (mono/doble), lo que sugiere una respuesta a cuerpo extraño más pronunciada',
          'D. Menor inflamación y una cápsula fibrosa más pequeña',
        ],
        correctAnswer: 'C',
      },
      {
        question: 'Un paciente presenta un edema persistente y un tono azulado en el área infraorbitaria 3 semanas después de inyecciones de HA, lo que sugiere un efecto Tyndall por inyección superficial. Para gestionar esta complicación con hialuronidasa (si estuviera aprobada), ¿cuál es el plano de inyección preferido para el AH y por qué se aplica HA o subcisión para corregir la extrusión o visibilidad de los hilos PDO?',
        options: [
          'A. Inyección de AH en la dermis profunda, y subcisión para romper las espículas',
          'B. Inyección de AH en el plano supraperióstico (profundo); y subcisión o inyección de HA alrededor de los hilos superficiales para ayudar a la disolución del hilo PDO',
          'C. Inyección de AH en el plano submuscular; subcisión para liberar la dermis',
          'D. Inyección de HA en el plano subcutáneo; subcisión para prevenir el riesgo vascular',
        ],
        correctAnswer: 'B',
      },
      {
        question: 'Una paciente presenta una protuberancia palpable en el área temporal después de un lifting fijo. Se sospecha una migración de la púa del hilo bidireccional. ¿Cuál de las siguientes técnicas post-inserción se ha demostrado clínicamente que es efectiva para prevenir la migración del hilo Cog en el punto de entrada?',
        options: [
          'A. Utilizar una cánula de punta roma de 18G en lugar de aguja afilada',
          'B. Colocar el hilo muy superficialmente en la dermis',
          'C. Aplicar masajes en el sentido de la tracción',
          'D. Anudar los hilos entre sí en el mismo punto de entrada antes de enterrar los extremos',
        ],
        correctAnswer: 'D',
      },
      {
        question: 'El hilo Mint Lift® (PDO) se fabrica por un proceso de moldeo (prensa) en 360° en lugar de corte láser. ¿Cuál de los siguientes es un beneficio clave de esta arquitectura patentada a nivel biomecánico?',
        options: [
          'A. Mayor flexibilidad que el polipropileno',
          'B. Un hilo más delgado para una inserción más fácil',
          'C. Mayor fuerza de anclaje/tracción porque la base de la espícula es más ancha y resistente, sin debilitar el núcleo central del hilo (que sí ocurre con el corte láser)',
          'D. Degradación más lenta que el PLLA',
        ],
        correctAnswer: 'C',
      },
      {
        question: 'Se está planificando un tratamiento de lifting abdominal después de una liposucción de alta definición, utilizando hilos PDO. ¿Cuál es el principal mecanismo de acción a largo plazo post-absorción de los hilos para el tensado y la elevación permanente del ombligo, especialmente en pacientes con paridad?',
        options: [
          'A. La contracción del músculo recto abdominal inducida por las espículas',
          'B. El hilo facilita la curación de los tejidos elevados en la nueva posición y la posterior encapsulación fibrosa (cicatricial) mantiene el efecto de la tracción inicial (efecto restauración)',
          'C. La degradación completa del PDO libera CO2 y agua que reafirman la pared abdominal',
          'D. La inyección de anestesia tumescente acelera la absorción del hilo',
        ],
        correctAnswer: 'B',
      },
      {
        question: 'Una paciente solicita que su rostro sea tratado con hilos PDO lisos y Ácido Hialurónico (AH) no reticulado en la misma sesión para bioestimulación. La evidencia in vitro indica que el AH no reticulado acelera la degradación del PDO. Sin embargo, ¿qué sugiere un estudio retrospectivo sobre la combinación, y qué implicación clínica tiene este hallazgo?',
        options: [
          'A. La duración se acorta significativamente, lo que sugiere que la combinación es ineficaz',
          'B. El HA actúa como andamio y protege al hilo del hidrólisis',
          'C. No se encontraron incompatibilidades o efectos secundarios, y la duración de los efectos se prolongó, lo que apoya la hipótesis de que el AH no acelera la hidrólisis del PDO en un entorno in vivo (o la enlentece)',
          'D. El AH provoca una reacción inflamatoria que hace que el hilo PDO sea visible',
        ],
        correctAnswer: 'C',
      },
      {
        question: 'Si se inserta un hilo espiculado en el plano subcutáneo y se produce un "abultamiento" o "pliegue" (dimpling), este ocurre con mayor probabilidad en el tercio inferior de la cara porque:',
        options: [
          'A. La densidad de fibroblastos en el cuello es mayor',
          'B. El SMAS Tipo II (denso) presiona contra el SMAS Tipo I (laxo) debido a la concentración del tejido traccionado',
          'C. El anclaje se produce en la unión del SMAS Tipo II denso con la parte más laxa del SMAS Tipo I, empujando la dermis y creando un hoyuelo, una complicación frecuente pero temporal',
          'D. El plano subcutáneo en el tercio inferior es más grueso, lo que hace visible la púa',
        ],
        correctAnswer: 'C',
      },
      {
        question: 'Para un paciente que busca mejorar una nariz "caída" (ángulo nasolabial bajo) y aumentar la proyección de la punta, ¿cuál es el tipo de hilo PDO recomendado para la punta, y qué plano de inserción se utiliza para los hilos PDO en el dorso nasal?',
        options: [
          'A. Hilos mono en la punta; plano subperióstico en el dorso',
          'B. Hilos espiculados (barbed threads) en la punta para rotación y proyección; hilos lisos (smooth threads) en el dorso, insertados en la capa grasa superficial/subcutánea, actuando como andamio',
          'C. Hilos FIX MINI en la punta para volumen; plano intramuscular en el dorso',
          'D. Hilos APTOS fijos al periostio en la punta; hilos mono en la dermis profunda del dorso',
        ],
        correctAnswer: 'B',
      },
      {
        question: 'Un paciente de 44 años con un biotipo facial Clase II (según Legan/Ricketts), que presenta un perfil convexo (protrusión maxilar) y flacidez leve, solicita rellenos de HA y posterior lifting con hilos. ¿Cuál es el riesgo anatómico principal en el área perioral (labios y nasolabial) que se debe evitar rigurosamente con los rellenos, y que los hilos PDO ayudan a prevenir si se usan como complemento?',
        options: [
          'A. Lesión del nervio bucal',
          'B. Compromiso vascular/oclusión de la Arteria Facial o Arteria Angular, que puede llevar a necrosis cutánea, una complicación que se evita al usar hilos PDO para reposicionar en lugar de inyectar HA directamente en el SNL',
          'C. Lesión de la glándula parótida',
          'D. Inyección profunda en el músculo orbicular, lo que causa parálisis de la sonrisa',
        ],
        correctAnswer: 'B',
      },
      {
        question: 'De acuerdo con el estudio de espesor de tejido por ultrasonido en la frente, ¿cuál es el plano de inserción ideal para los hilos PDO en la frente, y cuál es la profundidad promedio de esta capa?',
        options: [
          'A. Inyección profunda en el plano supraperióstico (4.18 mm)',
          'B. Inyección intramuscular, dentro del músculo Frontalis (3.24 mm)',
          'C. Inserción en el plano subcutáneo, entre la dermis y el músculo Frontalis, apuntando a una profundidad promedio de 1.84 ± 0.4 mm desde la superficie de la piel',
          'D. Inserción subdérmica superficial (menos de 1 mm) para el efecto de brillo',
        ],
        correctAnswer: 'C',
      },
    ]
  },
  legendary: {
    title: 'Experto Legendario',
    questions: [
      {
        question: 'Una paciente de 45 años se somete a un lifting facial utilizando hilos tensores fijos anclados en la fascia temporal profunda. Para minimizar el riesgo de sangrado en la región temporal, el médico utiliza ultrasonido Doppler para trazar la FBrSTA. ¿Dónde debe hacerse la incisión para asegurar un anclaje firme evitando la arteria?',
        options: [
            'A. Anterior a la vía de la FBrSTA, en el plano subcutáneo',
            'B. Directamente sobre la FBrSTA, pero en la fascia temporal profunda',
            'C. Lateral a la línea vertical desde el reborde orbitario lateral, profundo al SMAS',
            'D. Posterior a la vía de la FBrSTA, anclado a la fascia temporal profunda',
        ],
        correctAnswer: 'D',
    },
    {
        question: 'Un médico elige hilos para el lifting de la línea mandibular en una paciente de 48 años con flacidez leve y busca el efecto clínico más prolongado. Sabiendo que el PDO proporciona sustento mecánico durante 6 meses, mientras que el PCL dura 18-24+ meses, ¿cuál afirmación sobre el efecto biológico a largo plazo (neocolagenogénesis) es más precisa según estudios in vivo?',
        options: [
            'A. El PDO produce más colágeno Tipo I total debido a su tasa de degradación más rápida',
            'B. El PCL produce 50% más colágeno nuevo a las 8 semanas en comparación con los hilos PDO y PLLA en modelos animales',
            'C. Los hilos PCL inducen una fuerte reacción inflamatoria temprana (antes de 4 semanas) que compromete la producción de colágeno a largo plazo',
            'D. El PLLA es superior al PCL en la estimulación de colágeno porque dura más de 2 años',
        ],
        correctAnswer: 'B',
    },
    {
        question: 'Una paciente de 50 años recibió tratamiento con láser fraccional ablativo (que induce edema moderado) en el tercio medio. Para potenciar el tensado, busca la colocación de hilos PDO Cog. Si el láser se realizó hace 2 días, ¿cuándo debe colocar los hilos?',
        options: [
            'A. Inmediatamente después del láser, ya que el PDO se derrite por encima de la temperatura del láser',
            'B. 5-7 días después del láser, una vez que el edema inicial haya disminuido',
            'C. Inmediatamente después del láser, ya que el edema ayuda a estirar los tejidos para un mejor anclaje',
            'D. 15 días después del láser, para garantizar que el hilo PDO no interfiera con la cicatrización de la herida',
        ],
        correctAnswer: 'B',
    },
    {
        question: 'Un paciente desarrolla pliegues (dimpling) persistentes superficiales al surco nasolabial después de la colocación de hilos Cog bidireccionales. ¿Cuál es la causa principal de esta complicación en esta zona específica?',
        options: [
            'A. Colocación de las espículas demasiado profundas, anclándose al SMAS subyacente',
            'B. Inyección accidental en la arteria facial debido a la proximidad al pliegue nasolabial',
            'C. Sobretensado de los hilos, causando que el SMAS Tipo II denso presione contra el SMAS Tipo I más laxo en la etapa de agarre del tejido',
            'D. La migración de la espícula hacia la capa dérmica debido a un anclaje débil',
        ],
        correctAnswer: 'C',
    },
    {
        question: '¿Cuál afirmación describe mejor la diferencia fundamental en el mecanismo de estabilidad entre los hilos APTOS bidireccionales flotantes de primera generación y los hilos fijos unidireccionales modernos?',
        options: [
            'A. Los hilos bidireccionales se anclan mecánicamente en ambos extremos, mientras que los unidireccionales se basan únicamente en la neocolagenogénesis',
            'B. Los hilos bidireccionales son auto-anclables al juntar el tejido hacia el punto medio del hilo sin una fijación externa',
            'C. Los hilos fijos son solo para áreas móviles, mientras que los hilos flotantes son para áreas laterales fijas',
            'D. Los hilos bidireccionales utilizan espículas moldeadas, mientras que los unidireccionales utilizan espículas cortadas para una fuerza tensil superior',
        ],
        correctAnswer: 'B',
    },
    {
        question: 'Una paciente de 55 años con flacidez facial severa (FLR Grado 8 en el tercio inferior) y antecedentes conocidos de relleno permanente con silicona hace 10 años solicita un lifting con hilos para un "levantamiento completo". ¿Cuál es la principal contraindicación que obliga a rechazar el procedimiento o a ajustar drásticamente las expectativas?',
        options: [
            'A. Edad superior a 55 años, ya que la respuesta inmunitaria y la neocolagenogénesis disminuyen',
            'B. Flacidez severa/exceso de piel, ya que los hilos por sí solos no pueden resecar el exceso de piel',
            'C. Antecedentes de biopolímeros (silicona), que pueden reactivar la inflamación crónica o la formación de granulomas',
            'D. La naturaleza transitoria del efecto (menos de 1 año) es incompatible con la corrección de ptosis severa',
        ],
        correctAnswer: 'C',
    },
    {
        question: 'Al colocar un hilo PDO Cog en el tercio medio con el objetivo de levantar el paquete graso medial profundo, ¿cuál es el plano de inserción ideal para la mayor parte del hilo, maximizando el levantamiento y minimizando el riesgo de irregularidades?',
        options: [
            'A. Plano subdérmico, por encima de la grasa superficial',
            'B. Plano intramuscular (capa SMAS) para maximizar la tracción',
            'C. Plano subcutáneo profundo (supra-SMAS) y capa grasa superficial, evitando la dermis',
            'D. Plano subperióstico, anclando directamente al arco cigomático',
        ],
        correctAnswer: 'C',
    },
    {
        question: 'Un paciente necesita un lifting cervical que involucre el anclaje a la fascia mastoidea y el paso a la línea media del cuello. Si el médico utiliza un trócar epidural Tuohy (14 cm) para la inserción, ¿cuál es una razón de seguridad clave para infiltrar 20 cc de solución tumescente antes de la inserción del trócar?',
        options: [
            'A. La solución tumescente actúa como un antibiótico local profiláctico',
            'B. La vasoconstricción de la epinefrina es esencial para lograr el levantamiento mecánico inmediato',
            'C. Facilita el paso del trócar en el plano subcutáneo, disminuyendo el riesgo de pinchar la dermis o el platisma',
            'D. Reduce la concentración del hilo PDO en el tejido, lo que aumenta el tiempo de absorción a más de 12 meses',
        ],
        correctAnswer: 'C',
    },
    {
        question: 'Un médico decide asociar hilos PDO con relleno de ácido hialurónico no reticulado para biorevitalización. Según estudios ultramicroscópicos, ¿cuál interacción química es la más probable que ocurra en el corto plazo?',
        options: [
            'A. El HA inhibe la respuesta inflamatoria inducida por el PDO, evitando la neocolagenogénesis',
            'B. El HA no reticulado acelera la degradación hidrolítica del hilo PDO, comenzando casi de inmediato',
            'C. El hilo PDO actúa como un escudo térmico, protegiendo el HA de la degradación inmediata por el calor corporal',
            'D. El hilo PDO crea un andamio estable, protegiendo químicamente el HA de la acción de la hialuronidasa',
        ],
        correctAnswer: 'B',
    },
    {
        question: 'Una paciente de 72 años desarrolla una infección localizada en el ángulo mandibular 1 mes después de la inserción de hilo PDO espiculado. El médico opta por un protocolo mínimamente invasivo. ¿Cuál de los siguientes cursos terapéuticos está respaldado por evidencia clínica reciente?',
        options: [
            'A. Aplicar inmediatamente láser fraccional de CO2 para vaporizar la zona infectada',
            'B. Remoción quirúrgica del hilo, ya que la infección es la causa más frecuente de extracción de hilos',
            'C. Drenaje local seguido de Terapia Fotodinámica Antimicrobiana (aPDT) con láser de baja potencia y azul de metileno',
            'D. Inyección de relleno de HA para acelerar la degradación del hilo sPDO',
        ],
        correctAnswer: 'C',
    },
    {
        question: 'Un paciente asiático con flacidez media leve solicita un lifting con hilos, pero desea evitar específicamente la acentuación de los pómulos. ¿Cuál técnica debería priorizar el médico para satisfacer esta expectativa, basándose en diferencias étnicas en la estética facial?',
        options: [
            'A. La técnica de lifting oblicuo convencional dirigida hacia la sien',
            'B. Una técnica de vector horizontal utilizando hilos APTOS para el aumento de la mejilla',
            'C. La técnica de lifting vertical utilizando hilos PDO cortos (6 cm) insertados hacia abajo en las zonas malar y submalar anterior, evitando la eminencia malar',
            'D. Combinar el lift con una inyección de filler en el plano subperióstico para aumentar la proyección malar',
        ],
        correctAnswer: 'C',
    },
    {
        question: 'Un estudio histológico de hilos PDO monofilamento en un modelo porcino mostró que el hilo fue completamente invisible a las 48 semanas, pero los efectos clínicos persisten hasta 1.5-2 años. ¿Cuál es el principal fenómeno histológico que respalda esta persistencia clínica a largo plazo?',
        options: [
            'A. La presencia continua de eosinófilos en la dermis suprimiendo la relajación muscular',
            'B. La fuerte respuesta inflamatoria temprana (similar a PGLA) seguida de una curación tisular estable',
            'C. La formación de "tejido fibroso de puente" obvio y el engrosamiento de la capa fascial superficial a lo largo del trayecto del hilo',
            'D. La migración tardía de fragmentos de polímero no absorbidos hacia la dermis profunda',
        ],
        correctAnswer: 'C',
    },
    {
        question: 'Un paciente solicita la corrección de la columela y la proyección de la punta nasal con hilos PDO y filler dérmico. ¿Qué estructura anatómica es particularmente vulnerable a la lesión durante la inyección de filler, con potencial riesgo de compromiso visual, en esta región?',
        options: [
            'A. La rama frontal de la Arteria Temporal Superficial (FBrSTA)',
            'B. El nervio infraorbitario al salir del maxilar',
            'C. La Arteria Angular (rama de la arteria facial), que es superficial y puede anastomosarse con la Arteria Nasal Dorsal',
            'D. La rama bucal del nervio facial que discurre profunda al SMAS',
        ],
        correctAnswer: 'C',
    },
    {
        question: 'Los hilos Silhouette Soft (filamento de PLLA con conos de PLGA) proporcionan reposicionamiento y estimulación de colágeno. ¿Cuál es el elemento crucial que proporciona anclaje a largo plazo, visible hasta 24 meses, según estudios histológicos?',
        options: [
            'A. La sutura permanente de PLLA que actúa como punto de suspensión fijo',
            'B. El encapsulamiento de los conos por colágeno Tipo I y Tipo III, duplicando eficazmente el diámetro de la sutura',
            'C. La migración de los conos al periostio temporal',
            'D. La rápida absorción de los conos de PLGA que desencadena inmediatamente una respuesta inflamatoria máxima',
        ],
        correctAnswer: 'B',
    },
    {
        question: 'Al evaluar a un paciente para el tratamiento mínimamente invasivo de un cuello sin definición, ¿cuál es el principio clave que debe guiar la secuencia del tratamiento combinado (ej. criolipólisis seguida de hilos)?',
        options: [
            'A. Aumentar el tamaño del músculo Platisma con fijación PDO',
            'B. Priorizar la eliminación de grasa y la reposición ósea (rellenos) antes de usar los hilos para levantar la piel',
            'C. Anclar el hilo a la fascia cervical profunda para prevenir la migración',
            'D. Utilizar hilo no absorbible en la zona submental debido a la alta actividad muscular',
        ],
        correctAnswer: 'B',
    },
    {
        question: 'Un médico teme la migración del hilo después de un lifting con Cog bidireccional. ¿Cuál es la maniobra técnica específica demostrada para prevenir significativamente la migración, incluso en hilos flotantes?',
        options: [
            'A. Colocar el hilo ligeramente superficial a la dermis para una fricción máxima',
            'B. Cortar los extremos del hilo 1-2 mm de profundidad en la piel para permitir la retracción',
            'C. Aplicar maniobras de masaje manual perpendicular al trayecto de inserción del hilo',
            'D. Atar los extremos de los hilos en el mismo punto de entrada en un nudo antes de enterrarlos',
        ],
        correctAnswer: 'D',
    },
    {
        question: 'Un ensayo clínico aleatorizado utilizó la técnica "1 Punto, 2 Objetivos, 12 Hilos" con hilos PDO bidireccionales y midió objetivamente la eficacia. ¿Cuál fue el valor promedio objetivo aproximado de la reducción de volumen en el surco nasolabial (SNL) inmediatamente después del procedimiento?',
        options: [
            'A. -0.09 cc',
            'B. -0.36 cc',
            'C. +1.34 cc',
            'D. -1.17 mm',
        ],
        correctAnswer: 'B',
    },
    {
        question: 'Si la prioridad es maximizar la producción de colágeno a las 12 semanas post-inserción, ¿qué material monofilamento demostró el mejor rendimiento en la generación de colágeno nuevo en estudios comparativos con modelos animales?',
        options: [
            'A. PDO monofilamento',
            'B. PGLA monofilamento',
            'C. PLA monofilamento (de una sola hebra)',
            'D. PDO tipo spring',
        ],
        correctAnswer: 'B',
    },
    {
        question: 'Al aplicar hilos en la línea mandibular para tratar los mofetes (jowls), el Nervio Marginal Mandibular (NMM) y la Arteria Facial (AF) son estructuras con riesgo de lesión. ¿Dónde se encuentra el NMM más vulnerable a la lesión durante la disección subcutánea en esta zona?',
        options: [
            'A. Cerca de la comisura oral, donde la AF es más superficial',
            'B. Donde el NMM sale de la glándula parótida y cruza la AF, 3.1 mm superior al ángulo gonial',
            'C. Profundo al SMAS, 9.7 ± 1.2 mm superior al Ligamento Osocutáneo Mandibular (MOCL)',
            'D. En el borde anterior del masetero, donde perfora el compartimento graso bucal',
        ],
        correctAnswer: 'B',
    },
    {
        question: 'Los hilos MINT PDO utilizan una tecnología patentada de espículas moldeadas a presión. ¿Qué beneficio principal confiere este método de fabricación al rendimiento del hilo en comparación con los hilos cortados?',
        options: [
            'A. El diámetro reducido hace que el hilo sea más fácil de insertar con menos dolor',
            'B. El proceso de moldeo aumenta la flexibilidad y disminuye la memoria del hilo',
            'C. La espícula es más gruesa y está integrada helicoidalmente a 360°, aumentando la fuerza de anclaje sin comprometer el núcleo del hilo',
            'D. Asegura una absorción más rápida (menos de 4 meses) y minimiza el riesgo de infección',
        ],
        correctAnswer: 'C',
    }
    ]
  }
};
