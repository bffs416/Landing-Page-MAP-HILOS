'use client';

import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CheckCircle, Gem } from 'lucide-react';
import Logo from '@/components/logo';

const facialProtocols = [
  {
    name: 'VectorLift™ (Óvalo Facial)',
    description: 'Redefine el contorno de tu mandíbula y recupera la firmeza del tercio inferior.',
    imageUrl: "https://picsum.photos/seed/face1/800/600",
    imageHint: "woman jawline"
  },
  {
    name: 'ApexLift™ (Fox Eyes)',
    description: 'Eleva y abre tu mirada para un efecto rejuvenecido y cautivador.',
    imageUrl: "https://picsum.photos/seed/face2/800/600",
    imageHint: "woman eyes"
  },
  {
    name: 'RhinoStructure™ (Nariz)',
    description: 'Define y eleva tu nariz de forma sutil y segura, sin cirugía.',
    imageUrl: "https://picsum.photos/seed/face3/800/600",
    imageHint: "woman nose"
  },
  {
    name: 'ContourNeck™ (Cuello y Papada)',
    description: 'Recupera un cuello estilizado y combate la flacidez.',
    imageUrl: "https://picsum.photos/seed/face4/800/600",
    imageHint: "woman neck"
  },
  {
    name: 'DermalGrid™ (Cicatrices)',
    description: 'Restaura la textura de tu piel y suaviza cicatrices de acné o quirúrgicas.',
    imageUrl: "https://picsum.photos/seed/face5/800/600",
    imageHint: "skin texture"
  },
];

const corporalProtocols = [
  {
    name: 'CoreDefine™ (Abdomen)',
    description: 'Tonifica la piel de tu abdomen y corrige el "ombligo triste".',
    imageUrl: "https://picsum.photos/seed/body1/800/600",
    imageHint: "woman abdomen"
  },
  {
    name: 'ArmContour™ (Brazos)',
    description: 'Combate la flacidez para unos brazos más firmes y definidos.',
    imageUrl: "https://picsum.photos/seed/body2/800/600",
    imageHint: "woman arms"
  },
  {
    name: 'GluteCurve™ (Glúteos)',
    description: 'Eleva y moldea tus glúteos para una silueta más armónica.',
    imageUrl: "https://picsum.photos/seed/body3/800/600",
    imageHint: "woman glutes"
  },
];

const mapPillars = [
  { name: 'Mapeo Preciso', description: 'Un diagnóstico 100% personalizado para un plan a tu medida.' },
  { name: 'Aplicación Experta', description: 'Una técnica segura y depurada para un resultado natural y armónico.' },
  { name: 'Potenciación Sinérgica', description: 'Combinamos lo mejor para potenciar y prolongar la belleza de tu piel.' },
];

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-secondary via-primary to-accent text-foreground">
      <header className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-sm z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-20">
                  <Logo />
                  <nav className="hidden md:flex gap-8 items-center">
                    <a href="#filosofia" className="text-sm font-medium hover:text-primary transition-colors">Filosofía</a>
                    <a href="#protocolos" className="text-sm font-medium hover:text-primary transition-colors">Protocolos</a>
                    <a href="#contacto" className="text-sm font-medium hover:text-primary transition-colors">Contacto</a>
                  </nav>
              </div>
          </div>
      </header>
      
      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center text-center px-4">
           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-secondary/30 via-primary/30 to-accent/30 -z-10"></div>
          <div className="z-10">
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary-foreground">
              MINT® Architectural Lift™
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/90">
              La ciencia y el arte de rejuvenecer sin cirugía. Descubre cómo podemos re-arquitecturizar tu belleza natural.
            </p>
          </div>
        </section>

        {/* Philosophy Section */}
        <section id="filosofia" className="py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">
              Más que un Lifting, una Obra de Arte.
            </h2>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
              El envejecimiento no es solo la caída del tejido. Es un cambio en la estructura y la calidad de la piel. Por eso, nuestro enfoque no solo "levanta", sino que re-arquitecturiza tu belleza natural desde adentro hacia afuera.
            </p>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
              {mapPillars.map((pillar) => (
                <div key={pillar.name} className="flex flex-col items-center">
                  <div className="bg-primary/20 text-primary rounded-full p-4 mb-4">
                    <Gem className="w-8 h-8" />
                  </div>
                  <h3 className="font-headline text-2xl font-semibold">{pillar.name}</h3>
                  <p className="mt-2 text-muted-foreground">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Protocols Section */}
        <section id="protocolos" className="py-20 sm:py-32 bg-background/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Explora Nuestros Protocolos</h2>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
              Cada zona de tu rostro y cuerpo merece una solución diseñada a la perfección.
            </p>
          </div>
          
          <div className="mt-20 space-y-24">
            {[...facialProtocols, ...corporalProtocols].map((protocol, index) => (
              <div key={protocol.name} className="relative group overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="w-full md:w-1/2">
                      <h4 className="text-sm font-bold tracking-widest uppercase text-primary mb-2">
                        {index < facialProtocols.length ? 'Arquitectura Facial' : 'Arquitectura Corporal'}
                      </h4>
                      <h3 className="font-headline text-3xl md:text-4xl font-bold">{protocol.name}</h3>
                      <p className="mt-4 text-lg text-muted-foreground">{protocol.description}</p>
                    </div>
                    <div className="w-full md:w-1/2">
                       <div 
                        className="relative aspect-[4/3] [clip-path:polygon(0%_15%,_100%_0%,_100%_85%,_0%_100%)] transition-transform duration-500 ease-in-out group-hover:scale-105"
                       >
                         <Image
                          src={protocol.imageUrl}
                          alt={protocol.name}
                          fill
                          className="object-cover"
                          data-ai-hint={protocol.imageHint}
                        />
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
      </main>
    </div>
  );
}
