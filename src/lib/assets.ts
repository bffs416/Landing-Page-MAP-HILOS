
import { PlaceHolderImages } from './placeholder-images';
import { GraduationCap, HeartPulse, Scissors, BrainCircuit, Stethoscope } from 'lucide-react';
import VectorLiftContent from '@/components/vector-lift-content';

const getImage = (id: string) => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  return image ? image.imageUrl : 'https://placehold.co/800x600';
};

const getImageHint = (id: string) => {
    const image = PlaceHolderImages.find((img) => img.id === id);
    return image ? image.imageHint : 'placeholder';
};

const procedureSteps = Array.from({ length: 10 }, (_, i) => ({
    title: `Paso ${i + 1}`,
    description: `Descripción detallada para el paso número ${i + 1} del procedimiento.`,
    imageUrl: getImage(`step-${i + 1}`),
    imageHint: getImageHint(`step-${i + 1}`),
}));


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
    steps: procedureSteps.map((step, i) => ({ ...step, title: `VectorLift™ - Paso ${i + 1}` })),
  },
  {
    name: 'ApexLift™ (Fox Eyes)',
    description:
      "Inspirado en la tendencia 'fox eyes', este tratamiento eleva la cola de la ceja para crear una mirada más abierta, rasgada y juvenil. Se utilizan hilos específicos para reposicionar sutilmente el tercio superior, aportando un efecto rejuvenecedor y sensual a los ojos.",
    fullDescription: 'Descripción completa y detallada del ApexLift™ (Fox Eyes). Aquí se explica el proceso en profundidad, los resultados esperados y los cuidados posteriores para el paciente. Ideal para quienes buscan una mirada más exótica y levantada.',
    imageUrl: 'https://picsum.photos/seed/facial2/800/600',
    imageHint: 'woman eyes',
    steps: procedureSteps.map((step, i) => ({ ...step, title: `ApexLift™ - Paso ${i + 1}` })),
  },
  {
    name: 'RhinoStructure™ (Nariz)',
    description: 'Este protocolo no quirúrgico permite modelar la nariz de forma segura y reversible. Se utilizan hilos para elevar la punta nasal, rectificar el dorso y mejorar la definición general, corrigiendo pequeñas irregularidades sin necesidad de cirugía invasiva.',
    fullDescription: 'Descripción completa y detallada del RhinoStructure™ (Nariz). Aquí se explica el proceso en profundidad, los resultados esperados y los cuidados posteriores para el paciente. La alternativa perfecta a una rinoplastia quirúrgica para ajustes sutiles.',
    imageUrl: 'https://picsum.photos/seed/facial3/800/600',
    imageHint: 'woman nose',
    steps: procedureSteps.map((step, i) => ({ ...step, title: `RhinoStructure™ - Paso ${i + 1}` })),
  },
  {
    name: 'ContourNeck™ (Cuello y Papada)',
    description: 'Diseñado para combatir la flacidez en la zona del cuello y la papada, este tratamiento utiliza hilos para crear una malla de soporte subdérmica. Esto tensa la piel, define el ángulo cervicofacial y reduce la apariencia de la papada, devolviendo un cuello más estilizado y joven.',
    fullDescription: 'Descripción completa y detallada del ContourNeck™ (Cuello y Papada). Aquí se explica el proceso en profundidad, los resultados esperados y los cuidados posteriores para el paciente. Combate eficazmente los signos de envejecimiento en el cuello.',
    imageUrl: 'https://picsum.photos/seed/facial4/800/600',
    imageHint: 'woman neck',
    steps: procedureSteps.map((step, i) => ({ ...step, title: `ContourNeck™ - Paso ${i + 1}` })),
  },
];

export const corporalProtocols = [
  {
    name: 'CoreDefine™ (Abdomen)',
    description: 'Este protocolo se enfoca en la flacidez abdominal postparto o por pérdida de peso. Los hilos MINT® se insertan para generar una tensión en la piel y estimular la producción de colágeno, mejorando la firmeza, tonificando el área y corrigiendo el "ombligo triste".',
    fullDescription: 'Descripción completa y detallada del CoreDefine™ (Abdomen). Aquí se explica el proceso en profundidad, los resultados esperados y los cuidados posteriores para el paciente. Ideal para recuperar la firmeza abdominal sin pasar por el quirófano.',
    imageUrl: 'https://picsum.photos/seed/corporal1/800/600',
    imageHint: 'woman abdomen',
    steps: procedureSteps.map((step, i) => ({ ...step, title: `CoreDefine™ - Paso ${i + 1}` })),
  },
  {
    name: 'ArmContour™ (Brazos)',
    description:
      'Ideal para tratar la piel laxa en la cara interna de los brazos, comúnmente conocida como "alas de murciélago". El protocolo crea una estructura de soporte con los hilos, tensando la piel y devolviendo un contorno más firme y definido a los brazos.',
    fullDescription: 'Descripción completa y detallada del ArmContour™ (Brazos). Aquí se explica el proceso en profundidad, los resultados esperados y los cuidados posteriores para el paciente. Despídete de la flacidez en los brazos.',
    imageUrl: 'https://picsum.photos/seed/corporal2/800/600',
    imageHint: 'woman arms',
    steps: procedureSteps.map((step, i) => ({ ...step, title: `ArmContour™ - Paso ${i + 1}` })),
  },
  {
    name: 'GluteCurve™ (Glúteos)',
    description: 'Este tratamiento está diseñado para elevar y remodelar los glúteos caídos. Se insertan hilos tensores para crear un efecto de "lifting" que reposiciona el tejido, mejora la forma y proporciona una apariencia más redondeada y tonificada, sin añadir volumen artificial.',
    fullDescription: 'Descripción completa y detallada del GluteCurve™ (Glúteos). Aquí se explica el proceso en profundidad, los resultados esperados y los cuidados posteriores para el paciente. Consigue unos glúteos más elevados y firmes de forma natural.',
    imageUrl: 'https://picsum.photos/seed/corporal3/800/600',
    imageHint: 'woman glutes',
    steps: procedureSteps.map((step, i) => ({ ...step, title: `GluteCurve™ - Paso ${i + 1}` })),
  },
  {
    name: 'TOP BEAUTY UP',
    description: 'Un protocolo integral para un lifting corporal completo. Combina diferentes técnicas para tratar la flacidez en múltiples zonas como abdomen, brazos y glúteos, logrando una silueta más estilizada y rejuvenecida.',
    fullDescription: 'Descripción completa y detallada del TOP BEAUTY UP. Este es nuestro tratamiento corporal estrella, diseñado para quienes buscan un rejuvenecimiento corporal global sin cirugía. Se abordan las áreas clave de flacidez para un resultado armónico y espectacular.',
    imageUrl: 'https://picsum.photos/seed/corporal4/800/600',
    imageHint: 'full body silhouette',
    steps: procedureSteps.map((step, i) => ({ ...step, title: `TOP BEAUTY UP - Paso ${i + 1}` })),
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
