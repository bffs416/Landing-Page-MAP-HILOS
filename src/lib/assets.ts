
import { PlaceHolderImages } from './placeholder-images';
import { GraduationCap, HeartPulse, Scissors, BrainCircuit, Stethoscope } from 'lucide-react';
import VectorLiftContent from '@/components/vector-lift-content';
import ApexLiftContent from '@/components/apex-lift-content';

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
        description: `Si el diseño de hilo lo permite, o si se usan hilos bidireccionales, anudar los cabos libres entre sí en el punto de entrada antes de cortarlos. Esta maniobra aumenta la sustentación y ayuda a prevenir la migración.`,
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
        description: "Determinar si el paciente es el candidato ideal, que generalmente presenta ptosis de ceja leve a moderada y busca una apariencia más juvenil. Es crucial establecer expectativas realistas, ya que los efectos son temporales.",
        imageUrl: getImage("step-1"),
        imageHint: getImageHint("step-1")
    },
    {
        title: "Paso 2: Marcaje Pre-Procedimiento",
        description: "Identificar la cola de la ceja y el vector de elevación deseado para lograr la forma de ceja adecuada, modificando el ángulo medial.",
        imageUrl: getImage("step-2"),
        imageHint: getImageHint("step-2")
    },
    {
        title: "Paso 3: Fase Opcional de Neurotoxina",
        description: "Aplicar Toxina Botulínica Tipo A selectivamente en la porción lateral del músculo orbicular del ojo (depresor) aproximadamente 15 a 20 días antes de la inserción de los hilos.",
        imageUrl: getImage("step-3"),
        imageHint: getImageHint("step-3")
    },
    {
        title: "Paso 4: Preparación Aséptica y Anestesia Local",
        description: "Limpiar y desinfectar la zona de entrada (región temporal/línea del cabello) y a lo largo del trayecto planificado. Administrar anestesia local (p. ej., lidocaína con epinefrina) solo en los puntos de entrada.",
        imageUrl: getImage("step-4"),
        imageHint: getImageHint("step-4")
    },
    {
        title: "Paso 5: Creación del Punto de Entrada",
        description: "Realizar una o varias punciones (1 a 3 puntos) en la línea del cabello de la región temporal, generalmente con una aguja de calibre 18G para facilitar el paso de la cánula o la aguja doble.",
        imageUrl: getImage("step-5"),
        imageHint: getImageHint("step-5")
    },
    {
        title: "Paso 6: Inserción Estratégica del Hilo",
        description: "Utilizar hilos barbados bidireccionales fuertes (como MINT® EASY, USP 1 o 2-0). Insertar el hilo largo a través del plano subcutáneo (supra-SMAS) hacia la cola de la ceja, y utilizar hilos más cortos en vectores cruzados (criss-cross pattern) para crear un andamiaje fibroso robusto.",
        imageUrl: getImage("step-6"),
        imageHint: getImageHint("step-6")
    },
    {
        title: "Paso 7: Anclaje Profundo y Fijación de la Sutura",
        description: "Si se usa un hilo con anclaje, este se fija a la fascia temporal profunda o al periostio. Para hilos de auto-sustentación (bidireccionales sin nudos externos), la fijación se logra por las púas enganchadas al tejido adiposo circundante.",
        imageUrl: getImage("step-7"),
        imageHint: getImageHint("step-7")
    },
    {
        title: "Paso 8: Tracción y Sobrecorrección Inicial",
        description: "Aplicar tracción suave en sentido opuesto a la ptosis (hacia arriba y atrás) para elevar la cola de la ceja. Se recomienda lograr una ligera sobrecorrección para compensar el descenso esperado en el postoperatorio.",
        imageUrl: getImage("step-8"),
        imageHint: getImageHint("step-8")
    },
    {
        title: "Paso 9: Corte y Ocultamiento de los Hilos",
        description: "Cortar los extremos de los hilos de manera que queden completamente enterrados bajo la piel para evitar su exposición, palpación, o riesgo de infección. Se puede utilizar una maniobra de contra-tracción con tijera para asegurar que el hilo se profundice.",
        imageUrl: getImage("step-9"),
        imageHint: getImageHint("step-9")
    },
    {
        title: "Paso 10: Cuidados Post-Tratamiento",
        description: "Evitar movimientos faciales o gesticulación exagerada (reír, bostezar) y ejercicio intenso por 2 a 3 semanas. Aplicar compresas frías y dormir con la cabeza elevada.",
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
    imageUrl: 'https://picsum.photos/seed/facial3/800/600',
    imageHint: 'woman nose',
    steps: genericSteps,
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
