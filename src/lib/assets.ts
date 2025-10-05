
import { PlaceHolderImages } from './placeholder-images';
import { GraduationCap, HeartPulse, Scissors, BrainCircuit, Stethoscope } from 'lucide-react';
import VectorLiftContent from '@/components/vector-lift-content';
import ApexLiftContent from '@/components/apex-lift-content';
import RhinoStructureContent from '@/components/rhino-structure-content';

const getImage = (id: string) => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  return image ? image.imageUrl : 'https://placehold.co/800x600';
};

const getImageHint = (id: string) => {
    const image = PlaceHolderImages.find((img) => img.id === id);
    return image ? image.imageHint : 'placeholder';
};

const vectorLiftSteps = [
    {
        title: `Paso 1: Evaluación y Marcación Preoperatoria`,
        description: `Evaluar la flacidez (ej. en sedestación) y marcar el punto de entrada (fijo) y los puntos de suspensión (móviles). El punto de entrada se sitúa en la región temporal/preauricular, cerca de la línea del cabello, 1 cm anterior y 1 cm superior al ápice del trago. Marcar vectores oblicuos hacia el SNL y la línea mandibular.`,
        imageUrl: getImage(`step-1`),
        imageHint: getImageHint(`step-1`),
    },
    {
        title: `Paso 2: Anestesia Local`,
        description: `Aplicar anestesia local (ej. Lidocaína 2% con epinefrina 1:100,000) mediante inyección en el punto de entrada y a lo largo del trayecto subcutáneo donde pasarán los hilos.`,
        imageUrl: getImage(`step-2`),
        imageHint: getImageHint(`step-2`),
    },
    {
        title: `Paso 3: Creación del Puerto de Entrada`,
        description: `Realizar una punción o pequeña incisión en el punto de entrada marcado, generalmente utilizando una aguja 18G.`,
        imageUrl: getImage(`step-3`),
        imageHint: getImageHint(`step-3`),
    },
    {
        title: `Paso 4: Inserción de la Cánula/Aguja`,
        description: `Introducir la cánula o aguja precargada (ej. 19G/21G) perpendicularmente a la piel y luego girarla inmediatamente para avanzar paralelamente en el plano subcutáneo (supra-SMAS).`,
        imageUrl: getImage(`step-4`),
        imageHint: getImageHint(`step-4`),
    },
    {
        title: `Paso 5: Túnel y Dirección del Vector`,
        description: `Deslizar la cánula a lo largo del vector pre-marcado, asegurando que se mantenga en el plano subcutáneo; la punta debe ser palpable bajo el tejido pero sin crear relieve visible. No cruzar el surco nasolabial, manteniendo el punto de salida al menos 0.5 cm lateralmente.`,
        imageUrl: getImage(`step-5`),
        imageHint: getImageHint(`step-5`),
    },
    {
        title: `Paso 6: Despliegue del Hilo`,
        description: `Una vez alcanzado el punto de suspensión (salida), detener la tracción para que las espículas del segmento distal del hilo se anclen en el tejido subcutáneo antes de retirar la cánula.`,
        imageUrl: getImage(`step-6`),
        imageHint: getImageHint(`step-6`),
    },
    {
        title: `Paso 7: Tracción y Levantamiento Mecánico`,
        description: `Aplicar una tracción manual suave en sentido póstero-superior (opuesto al vector de caída) a los cabos libres del hilo para enganchar las espículas MINT® en el tejido fibro-graso y reposicionar el tejido ptósico (efecto lifting inmediato).`,
        imageUrl: getImage(`step-7`),
        imageHint: getImageHint(`step-7`),
    },
    {
        title: `Paso 8: Anclaje y Nudado (Fijación)`,
        description: `Si el diseño de hilo lo permite, o si se usan hilos bidireccionales, anudar los cabos libres entre sí en el mismo punto de entrada antes de cortarlos. Esta maniobra aumenta la sustentación y ayuda a prevenir la migración.`,
        imageUrl: getImage(`step-8`),
        imageHint: getImageHint(`step-8`),
    },
    {
        title: `Paso 9: Corte y Enterramiento del Hilo`,
        description: `Cortar el exceso de sutura a un nivel profundo (subcutáneo) para asegurar que el extremo del hilo y el nudo (si se realizó) queden completamente enterrados bajo la piel y no sean visibles o palpables.`,
        imageUrl: getImage(`step-9`),
        imageHint: getImageHint(`step-9`),
    },
    {
        title: `Paso 10: Manejo Postoperatorio y Cuidados`,
        description: `Instruir al paciente a evitar la gesticulación exagerada, la masticación de alimentos duros y el ejercicio físico durante al menos 1-3 semanas. Se recomienda dormir boca arriba y considerar el uso de una mentonera/collarín para evitar la tracción descendente.`,
        imageUrl: getImage(`step-10`),
        imageHint: getImageHint(`step-10`),
    },
];

const apexLiftSteps = [
    {
        title: "Paso 1: Evaluación y Consenso de Expectativas",
        description: "Determinar si el paciente es el candidato ideal, que generalmente presenta ptosis de ceja leve a moderada y busca una apariencia más juvenil. Es crucial establecer expectativas realistas, ya que los efectos son temporales. La selección adecuada del paciente es esencial para el éxito y para evitar la insatisfacción. El procedimiento es ideal para corregir la caída leve a moderada, sin reemplazar la cirugía abierta.",
        imageUrl: getImage("step-1"),
        imageHint: getImageHint("step-1")
    },
    {
        title: "Paso 2: Marcaje Pre-Procedimiento",
        description: "Identificar la cola de la ceja y el vector de elevación deseado para lograr la forma de ceja adecuada, modificando el ángulo medial. El diseño preciso del vector de tracción es fundamental para el éxito estético. Los vectores deben ser oblicuos y cruzados (criss-cross) para sostener el ápice.",
        imageUrl: getImage("step-2"),
        imageHint: getImageHint("step-2")
    },
    {
        title: "Paso 3: Fase Opcional de Neurotoxina",
        description: "Aplicar Toxina Botulínica Tipo A selectivamente en la porción lateral del músculo orbicular del ojo (depresor) aproximadamente 15 a 20 días antes de la inserción de los hilos. Esto debilita los músculos que antagonizan la fuerza de elevación del hilo (depresores), optimizando el resultado del lifting.",
        imageUrl: getImage("step-3"),
        imageHint: getImageHint("step-3")
    },
    {
        title: "Paso 4: Preparación Aséptica y Anestesia Local",
        description: "Limpiar y desinfectar la zona de entrada (región temporal/línea del cabello) y a lo largo del trayecto planificado. Administrar anestesia local (p. ej., lidocaína con epinefrina) solo en los puntos de entrada. La asepsia es crítica para minimizar el riesgo de infección. La anestesia local en los puntos de entrada mejora el confort, ya que el paso del hilo puede ser molesto.",
        imageUrl: getImage("step-4"),
        imageHint: getImageHint("step-4")
    },
    {
        title: "Paso 5: Creación del Punto de Entrada",
        description: "Realizar una o varias punciones (1 a 3 puntos) en la línea del cabello de la región temporal, generalmente con una aguja de calibre 18G para facilitar el paso de la cánula o la aguja doble. El punto de entrada debe estar en una zona fija (fascia temporal) para un anclaje firme y para ocultar la pequeña herida.",
        imageUrl: getImage("step-5"),
        imageHint: getImageHint("step-5")
    },
    {
        title: "Paso 6: Inserción Estratégica del Hilo",
        description: "Utilizar hilos barbados bidireccionales fuertes (como MINT® EASY, USP 1 o 2-0). Insertar el hilo largo a través del plano subcutáneo (supra-SMAS) hacia la cola de la ceja, y utilizar hilos más cortos en vectores cruzados (criss-cross pattern) para crear un andamiaje fibroso robusto. El plano de inserción ideal es el subcutáneo (entre la dermis y el músculo frontal para el área de la frente/ceja). El patrón de entrecruzamiento (criss-cross) ha demostrado construir una arquitectura fibrosa más resistente para un efecto más duradero.",
        imageUrl: getImage("step-6"),
        imageHint: getImageHint("step-6")
    },
    {
        title: "Paso 7: Anclaje Profundo y Fijación de la Sutura",
        description: "Si se usa un hilo con anclaje, este se fija a la fascia temporal profunda o al periostio. Para hilos de auto-sustentación (bidireccionales sin nudos externos), la fijación se logra por las púas enganchadas al tejido adiposo circundante. El anclaje debe ser robusto ya que el área de la ceja es móvil, y el músculo frontal es potente.",
        imageUrl: getImage("step-7"),
        imageHint: getImageHint("step-7")
    },
    {
        title: "Paso 8: Tracción y Sobrecorrección Inicial",
        description: "Aplicar tracción suave en sentido opuesto a la ptosis (hacia arriba y atrás) para elevar la cola de la ceja. Se recomienda lograr una ligera sobrecorrección para compensar el descenso esperado en el postoperatorio. El efecto mecánico inicial se basa en esta tracción para reposicionar el tejido. La sobrecorrección es necesaria porque la relajación de los tejidos reducirá el efecto con el tiempo.",
        imageUrl: getImage("step-8"),
        imageHint: getImageHint("step-8")
    },
    {
        title: "Paso 9: Corte y Ocultamiento de los Hilos",
        description: "Cortar los extremos de los hilos de manera que queden completamente enterrados bajo la piel para evitar su exposición, palpación, o riesgo de infección. Se puede utilizar una maniobra de contra-tracción con tijera para asegurar que el hilo se profundice. Ocultar completamente los hilos previene la migración, la extrusión, la infección, y las posibles molestias o granulomas.",
        imageUrl: getImage("step-9"),
        imageHint: getImageHint("step-9")
    },
    {
        title: "Paso 10: Cuidados Post-Tratamiento",
        description: "Evitar movimientos faciales o gesticulación exagerada (reír, bostezar) y ejercicio intenso por 2 a 3 semanas. Aplicar compresas frías y dormir con la cabeza elevada. Es común el uso de una mentonera o un collarín cervical (barbicuello) si la tracción es extensa. El cumplimiento de los cuidados es fundamental para que las púas se integren en el tejido mediante fibrosis antes de que la tensión se pierda.",
        imageUrl: getImage("step-10"),
        imageHint: getImageHint("step-10")
    }
];

const rhinoStructureSteps = [
    {
        title: "Paso 1: Evaluación del Paciente y Objetivos",
        description: "Evaluar la estructura nasal, la calidad de la piel (espesor), y establecer expectativas realistas. Este procedimiento busca mejoras menores, como la elevación de la punta (rotación) y la rectificación del dorso, y no es un sustituto de la rinoplastia quirúrgica. Es crucial seleccionar pacientes adecuados (idealmente, con nariz flexible y sin rinoplastia previa) y asegurar que entiendan la naturaleza temporal y sutil de la corrección.",
        imageUrl: getImage("step-1"),
        imageHint: getImageHint("step-1")
    },
    {
        title: "Paso 2: Marcaje y Diseño del Vector",
        description: "Marcar el área a tratar (dorso y columela) y definir la dirección de elevación deseada (vector). El vector principal para la punta debe ser una proyección hacia adelante y un aumento del ángulo nasolabial. El diseño preciso del vector de tracción determina el resultado estético, especialmente para levantar la punta nasal.",
        imageUrl: getImage("step-2"),
        imageHint: getImageHint("step-2")
    },
    {
        title: "Paso 3: Preparación Aséptica y Anestesia",
        description: "Realizar asepsia rigurosa del campo. Aplicar anestesia local infiltrativa con lidocaína (a menudo con epinefrina) en la punta nasal y la subnasale. También puede incluir el bloqueo del nervio etmoidal anterior. Minimizar el dolor y garantizar un campo casi exangüe reduce el riesgo de hematomas y mejora la visibilidad del plano de inserción.",
        imageUrl: getImage("step-3"),
        imageHint: getImageHint("step-3")
    },
    {
        title: "Paso 4: Creación del Único Punto de Entrada",
        description: "Crear un punto de entrada (incisión de 18G) en la punta nasal (2–3 mm por debajo de la punta) o en la subnasale (1 mm por debajo de la base columelar). Un punto de entrada único simplifica el procedimiento y minimiza el trauma y las cicatrices.",
        imageUrl: getImage("step-4"),
        imageHint: getImageHint("step-4")
    },
    {
        title: "Paso 5: Inserción de Hilos para el Dorso (MINT UP)",
        description: "Insertar 3 a 5 hilos (PDO espiculados UP o lisos) a través de una cánula (ej. 18G/5 cm) desde la punta hasta el radix (puente nasal) a lo largo de la línea media en el plano subcutáneo. El objetivo es rectificar el dorso y actuar como andamio (scaffold) para la bioestimulación/volumen. Se debe evitar la colocación muy superficial donde la piel es delgada.",
        imageUrl: getImage("step-5"),
        imageHint: getImageHint("step-5")
    },
    {
        title: "Paso 6: Inserción de Hilos para la Columela (MINT TIP)",
        description: "Insertar 3 a 5 hilos espiculados (TIP) en una configuración plegada o rígida, desde la subnasale hasta la punta, dentro del plano suprapericóndrico/subcutáneo profundo. Estos hilos actúan como una 'viga' (strut) para levantar y proyectar la punta nasal hacia adelante, fortaleciendo la columela (se recomienda empujar la columela hacia atrás durante la inserción).",
        imageUrl: getImage("step-6"),
        imageHint: getImageHint("step-6")
    },
    {
        title: "Paso 7: Anclaje y Fijación de Hilos",
        description: "Los hilos espiculados multidireccionales se auto-anclan en el tejido fibrograso por la acción de sus púas. Si se requiere un soporte más fuerte, se puede realizar un anclaje al periostio o anudar los extremos para evitar la migración. Los hilos barbados tienen la función de sostener la tracción y prevenir el deslizamiento o migración, especialmente en el tejido nasal móvil.",
        imageUrl: getImage("step-7"),
        imageHint: getImageHint("step-7")
    },
    {
        title: "Paso 8: Modelado y Corte Final",
        description: "Aplicar tracción manual suave y movimientos de masaje para optimizar la posición de la punta. Recortar el exceso de material del hilo y empujar el extremo cortado por debajo de la superficie de la piel para asegurar que quede enterrado. Ocultar los extremos es fundamental para prevenir la extrusión, irritación o infección.",
        imageUrl: getImage("step-8"),
        imageHint: getImageHint("step-8")
    },
    {
        title: "Paso 9: Inyección Opcional de Rellenos",
        description: "Si se desea mayor volumen en el dorso (radix) o se combina la técnica, inyectar relleno (Ácido Hialurónico) en el plano supraperióstico del dorso. Esto no se recomienda para la punta nasal (columela) debido al alto riesgo vascular. La combinación de hilos (soporte) y rellenos (volumen) crea un efecto sinérgico, pero debe realizarse con precaución.",
        imageUrl: getImage("step-9"),
        imageHint: getImageHint("step-9")
    },
    {
        title: "Paso 10: Cuidados Post-Procedimiento",
        description: "Indicar al paciente no manipular ni presionar la zona nasal y evitar movimientos faciales bruscos durante al menos 10 a 15 días. Evitar el ejercicio físico intenso. Se puede aconsejar aplicar hielo para reducir la hinchazón. El cuidado post-tratamiento es crucial para la integración del hilo y la formación de fibrosis.",
        imageUrl: getImage("step-10"),
        imageHint: getImageHint("step-10")
    }
];

const genericSteps = [
    {
        title: `Paso 1: Consulta`,
        description: `Evaluación personalizada para determinar el protocolo ideal según las necesidades del paciente.`,
        imageUrl: getImage(`step-1`),
        imageHint: getImageHint(`step-1`),
    },
    {
        title: `Paso 2: Planificación`,
        description: `Marcaje preciso de los vectores de tracción para garantizar un resultado natural y simétrico.`,
        imageUrl: getImage(`step-2`),
        imageHint: getImageHint(`step-2`),
    },
    {
        title: `Paso 3: Procedimiento`,
        description: `Inserción de los hilos tensores MINT® mediante una técnica mínimamente invasiva bajo anestesia local.`,
        imageUrl: getImage(`step-5`),
        imageHint: getImageHint(`step-5`),
    },
    {
        title: `Paso 4: Resultados`,
        description: `Efecto lifting inmediato y mejora progresiva de la calidad de la piel gracias a la estimulación de colágeno.`,
        imageUrl: getImage(`step-10`),
        imageHint: getImageHint(`step-10`),
    },
];

export const heroVideo = '/images/hero-background.mp4';

export const facialProtocols = [
  {
    name: 'VectorLift™ (Óvalo Facial)',
    description:
      'Este protocolo está diseñado para tratar la flacidez del tercio inferior del rostro. A través de la inserción de hilos tensores MINT®, se crea un vector de tracción que redefine el contorno mandibular, eleva los tejidos caídos y restaura la definición del óvalo facial, logrando un efecto lifting natural y duradero.',
    fullDescription: 'Descripción completa y detallada del VectorLift™ (Óvalo Facial). Aquí se explica el proceso en profundidad, los resultados esperados y los cuidados posteriores para el paciente. Ideal para quienes buscan una solución efectiva a la flacidez sin cirugía.',
    contentComponent: VectorLiftContent,
    imageUrl: 'https://picsum.photos/seed/facial1/800/600',
    imageHint: 'woman jawline',
    steps: vectorLiftSteps,
  },
  {
    name: 'ApexLift™ (Fox Eyes)',
    description:
      "Inspirado en la tendencia 'fox eyes', este tratamiento eleva la cola de la ceja para crear una mirada más abierta, rasgada y juvenil. Se utilizan hilos específicos para reposicionar sutilmente el tercio superior, aportando un efecto rejuvenecedor y sensual a los ojos.",
    fullDescription: 'Descripción completa y detallada del ApexLift™ (Fox Eyes). Aquí se explica el proceso en profundidad, los resultados esperados y los cuidados posteriores para el paciente. Ideal para quienes buscan una mirada más exótica y levantada.',
    contentComponent: ApexLiftContent,
    imageUrl: 'https://picsum.photos/seed/facial2/800/600',
    imageHint: 'woman eyes',
    steps: apexLiftSteps,
  },
  {
    name: 'RhinoStructure™ (Nariz)',
    description: 'Este protocolo no quirúrgico permite modelar la nariz de forma segura y reversible. Se utilizan hilos para elevar la punta nasal, rectificar el dorso y mejorar la definición general, corrigiendo pequeñas irregularidades sin necesidad de cirugía invasiva.',
    fullDescription: 'Descripción completa y detallada del RhinoStructure™ (Nariz). Aquí se explica el proceso en profundidad, los resultados esperados y los cuidados posteriores para el paciente. La alternativa perfecta a una rinoplastia quirúrgica para ajustes sutiles.',
    contentComponent: RhinoStructureContent,
    imageUrl: 'https://picsum.photos/seed/facial3/800/600',
    imageHint: 'woman nose',
    steps: rhinoStructureSteps,
  },
  {
    name: 'ContourNeck™ (Cuello y Papada)',
    description: 'Diseñado para combatir la flacidez en la zona del cuello y la papada, este tratamiento utiliza hilos para crear una malla de soporte subdérmica. Esto tensa la piel, define el ángulo cervicofacial y reduce la apariencia de la papada, devolviendo un cuello más estilizado y joven.',
    fullDescription: 'Descripción completa y detallada del ContourNeck™ (Cuello y Papada). Aquí se explica el proceso en profundidad, los resultados esperados y los cuidados posteriores para el paciente. Combate eficazmente los signos de envejecimiento en el cuello.',
    imageUrl: 'https://picsum.photos/seed/facial4/800/600',
    imageHint: 'woman neck',
    steps: genericSteps,
  },
];

export const corporalProtocols = [
  {
    name: 'CoreDefine™ (Abdomen)',
    description: 'Este protocolo se enfoca en la flacidez abdominal postparto o por pérdida de peso. Los hilos MINT® se insertan para generar una tensión en la piel y estimular la producción de colágeno, mejorando la firmeza, tonificando el área y corrigiendo el "ombligo triste".',
    fullDescription: 'Descripción completa y detallada del CoreDefine™ (Abdomen). Aquí se explica el proceso en profundidad, los resultados esperados y los cuidados posteriores para el paciente. Ideal para recuperar la firmeza abdominal sin pasar por el quirófano.',
    imageUrl: 'https://picsum.photos/seed/corporal1/800/600',
    imageHint: 'woman abdomen',
    steps: genericSteps,
  },
  {
    name: 'ArmContour™ (Brazos)',
    description:
      'Ideal para tratar la piel laxa en la cara interna de los brazos, comúnmente conocida como "alas de murciélago". El protocolo crea una estructura de soporte con los hilos, tensando la piel y devolviendo un contorno más firme y definido a los brazos.',
    fullDescription: 'Descripción completa y detallada del ArmContour™ (Brazos). Aquí se explica el proceso en profundidad, los resultados esperados y los cuidados posteriores para el paciente. Despídete de la flacidez en los brazos.',
    imageUrl: 'https://picsum.photos/seed/corporal2/800/600',
    imageHint: 'woman arms',
    steps: genericSteps,
  },
  {
    name: 'GluteCurve™ (Glúteos)',
    description: 'Este tratamiento está diseñado para elevar y remodelar los glúteos caídos. Se insertan hilos tensores para crear un efecto de "lifting" que reposiciona el tejido, mejora la forma y proporciona una apariencia más redondeada y tonificada, sin añadir volumen artificial.',
    fullDescription: 'Descripción completa y detallada del GluteCurve™ (Glúteos). Aquí se explica el proceso en profundidad, los resultados esperados y los cuidados posteriores para el paciente. Consigue unos glúteos más elevados y firmes de forma natural.',
    imageUrl: 'https://picsum.photos/seed/corporal3/800/600',
    imageHint: 'woman glutes',
    steps: genericSteps,
  },
  {
    name: 'TOP BEAUTY UP',
    description: 'Un protocolo integral para un lifting corporal completo. Combina diferentes técnicas para tratar la flacidez en múltiples zonas como abdomen, brazos y glúteos, logrando una silueta más estilizada y rejuvenecida.',
    fullDescription: 'Descripción completa y detallada del TOP BEAUTY UP. Este es nuestro tratamiento corporal estrella, diseñado para quienes buscan un rejuvenecimiento corporal global sin cirugía. Se abordan las áreas clave de flacidez para un resultado armónico y espectacular.',
    imageUrl: 'https://picsum.photos/seed/corporal4/800/600',
    imageHint: 'full body silhouette',
    steps: genericSteps,
  },
];

export const mapPillars = [
  {
    name: 'Mapeo Preciso',
    description:
      'Se apoya en nuestra herramienta de diagnóstico ICL-MINT® para un plan 100% personalizado.',
    href: '#calculadora',
  },
  {
    name: 'Aplicación Experta',
    description:
      'Una técnica segura y depurada para un resultado natural y armónico.',
  },
  {
    name: 'Potenciación Sinérgica',
    description:
      'Combinamos lo mejor para potenciar y prolongar la belleza de tu piel.',
  }
];

export const speakers = [
  { name: 'Dr. Jhon Bareño', specialty: 'Oculoplástico', iconName: 'GraduationCap', imageUrl: getImage('speaker-bareno') },
  { name: 'Dra. Mercy', specialty: 'Ginecología', iconName: 'HeartPulse', imageUrl: getImage('speaker-mercy') },
  { name: 'Dr. Carlos Tellez', specialty: 'Cirugía Plástica', iconName: 'Scissors', imageUrl: getImage('speaker-tellez') },
  { name: 'Dr. Felipe Castro', specialty: 'Cirugía Plástica', iconName: 'Scissors', imageUrl: getImage('speaker-castro') },
  { name: 'Dr. Alfonso Carvajal', specialty: 'Dermatología', iconName: 'BrainCircuit', imageUrl: getImage('speaker-carvajal') },
  { name: 'Dra. Monica Jaimes', specialty: 'Medicina Estética', iconName: 'Stethoscope', imageUrl: getImage('speaker-jaimes') },
  { name: 'Dra. Liz Clavijo', specialty: 'Medicina Estética', iconName: 'Stethoscope', imageUrl: getImage('speaker-clavijo') },
  { name: 'Dra. Lina Rincon', specialty: 'Medicina Estética', iconName: 'Stethoscope', imageUrl: getImage('speaker-rincon') },
  { name: 'Dra. Karen Chaves', specialty: 'Medicina Estética', iconName: 'Stethoscope', imageUrl: getImage('speaker-chaves') },
  { name: 'Dra. Karen Quevedo', specialty: 'Medicina Estética', iconName: 'Stethoscope', imageUrl: getImage('speaker-quevedo') },
  { name: 'Dr. Alirio Pachon', specialty: 'Medicina Estética', iconName: 'Stethoscope', imageUrl: getImage('speaker-pachon') },
  { name: 'Dra. Virginia Escobar', specialty: 'Medicina Estética', iconName: 'Stethoscope', imageUrl: getImage('speaker-escobar') },
  { name: 'Dra. Claudia Garcia', specialty: 'Medicina Estética', iconName: 'Stethoscope', imageUrl: getImage('speaker-garcia') },
  { name: 'Dra. Candelaria Contreras', specialty: 'Medicina Estética', iconName: 'Stethoscope', imageUrl: getImage('speaker-contreras') }
];
