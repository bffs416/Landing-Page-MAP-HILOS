
// En este archivo puedes centralizar las rutas de tus imágenes y videos.
// Simplemente sube tus archivos a la carpeta `public/images/` y luego
// actualiza las rutas aquí.
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string) => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  return image ? image.imageUrl : 'https://placehold.co/800x600';
};

const getImageHint = (id: string) => {
    const image = PlaceHolderImages.find((img) => img.id === id);
    return image ? image.imageHint : 'placeholder';
};


export const heroVideo = '/images/hero-background.mp4';

export const facialProtocols = [
  {
    name: 'VectorLift™ (Óvalo Facial)',
    description:
      'Redefine el contorno de tu mandíbula y recupera la firmeza del tercio inferior.',
    imageUrl: 'https://picsum.photos/seed/facial1/800/600',
    imageHint: 'woman jawline',
    beforeImageUrl: getImage('before-3'),
    beforeImageHint: getImageHint('before-3'),
    afterImageUrl: getImage('after-3'),
    afterImageHint: getImageHint('after-3'),
  },
  {
    name: 'ApexLift™ (Fox Eyes)',
    description:
      'Eleva y abre tu mirada para un efecto rejuvenecido y cautivador.',
    imageUrl: 'https://picsum.photos/seed/facial2/800/600',
    imageHint: 'woman eyes',
    beforeImageUrl: getImage('before-2'),
    beforeImageHint: getImageHint('before-2'),
    afterImageUrl: getImage('after-2'),
    afterImageHint: getImageHint('after-2'),
  },
  {
    name: 'RhinoStructure™ (Nariz)',
    description: 'Define y eleva tu nariz de forma sutil y segura, sin cirugía.',
    imageUrl: 'https://picsum.photos/seed/facial3/800/600',
    imageHint: 'woman nose',
    beforeImageUrl: getImage('before-1'),
    beforeImageHint: getImageHint('before-1'),
    afterImageUrl: getImage('after-1'),
    afterImageHint: getImageHint('after-1'),
  },
  {
    name: 'ContourNeck™ (Cuello y Papada)',
    description: 'Recupera un cuello estilizado y combate la flacidez.',
    imageUrl: 'https://picsum.photos/seed/facial4/800/600',
    imageHint: 'woman neck',
    beforeImageUrl: getImage('before-3'),
    beforeImageHint: getImageHint('before-3'),
    afterImageUrl: getImage('after-3'),
    afterImageHint: getImageHint('after-3'),
  },
];

export const corporalProtocols = [
  {
    name: 'CoreDefine™ (Abdomen)',
    description: 'Tonifica la piel de tu abdomen y corrige el "ombligo triste".',
    imageUrl: 'https://picsum.photos/seed/corporal1/800/600',
    imageHint: 'woman abdomen',
    beforeImageUrl: getImage('before-2'),
    beforeImageHint: getImageHint('before-2'),
    afterImageUrl: getImage('after-2'),
    afterImageHint: getImageHint('after-2'),
  },
  {
    name: 'ArmContour™ (Brazos)',
    description:
      'Combate la flacidez para unos brazos más firmes y definidos.',
    imageUrl: 'https://picsum.photos/seed/corporal2/800/600',
    imageHint: 'woman arms',
    beforeImageUrl: getImage('before-1'),
    beforeImageHint: getImageHint('before-1'),
    afterImageUrl: getImage('after-1'),
    afterImageHint: getImageHint('after-1'),
  },
  {
    name: 'GluteCurve™ (Glúteos)',
    description: 'Eleva y moldea tus glúteos para una silueta más armónica.',
    imageUrl: 'https://picsum.photos/seed/corporal3/800/600',
    imageHint: 'woman glutes',
    beforeImageUrl: getImage('before-3'),
    beforeImageHint: getImageHint('before-3'),
    afterImageUrl: getImage('after-3'),
    afterImageHint: getImageHint('after-3'),
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
  },
];

    