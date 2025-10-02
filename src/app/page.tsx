'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Logo from '@/components/logo';

const facialProtocols = [
  {
    name: 'VectorLift™ (Óvalo Facial)',
    description: 'Redefine el contorno de tu mandíbula y recupera la firmeza del tercio inferior.',
  },
  {
    name: 'ApexLift™ (Fox Eyes)',
    description: 'Eleva y abre tu mirada para un efecto rejuvenecido y cautivador.',
  },
  {
    name: 'RhinoStructure™ (Nariz)',
    description: 'Define y eleva tu nariz de forma sutil y segura, sin cirugía.',
  },
  {
    name: 'ContourNeck™ (Cuello y Papada)',
    description: 'Recupera un cuello estilizado y combate la flacidez.',
  },
  {
    name: 'DermalGrid™ (Cicatrices)',
    description: 'Restaura la textura de tu piel y suaviza cicatrices de acné o quirúrgicas.',
  },
];

const corporalProtocols = [
  {
    name: 'CoreDefine™ (Abdomen)',
    description: 'Tonifica la piel de tu abdomen y corrige el "ombligo triste".',
  },
  {
    name: 'ArmContour™ (Brazos)',
    description: 'Combate la flacidez para unos brazos más firmes y definidos.',
  },
  {
    name: 'GluteCurve™ (Glúteos)',
    description: 'Eleva y moldea tus glúteos para una silueta más armónica.',
  },
];

const mapPillars = [
    { name: "Mapeo Preciso", description: "Un diagnóstico 100% personalizado para un plan a tu medida." },
    { name: "Aplicación Experta", description: "Una técnica segura y depurada para un resultado natural y armónico." },
    { name: "Potenciación Sinérgica", description: "Combinamos lo mejor para potenciar y prolongar la belleza de tu piel." },
];

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-secondary text-foreground p-4 sm:p-6 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Panel */}
        <Card className="lg:col-span-1 bg-background shadow-2xl">
          <CardHeader>
            <Logo className="text-primary" />
             <div className="pt-8">
                <h1 className="font-headline text-2xl md:text-3xl font-bold">
                    Más que un Lifting, una Obra de Arte.
                </h1>
                <p className="mt-4 text-muted-foreground">
                    El envejecimiento no es solo la caída del tejido. Es un cambio en la estructura y la calidad de la piel.
                </p>
                <p className="mt-4 text-muted-foreground">
                    Por eso, nuestro enfoque MINT® Architectural Lift™ no solo "levanta", sino que re-arquitecturiza tu belleza natural desde adentro hacia afuera.
                </p>
             </div>
          </CardHeader>
          <CardContent>
            <p className="font-semibold text-foreground mb-4">
                Combinamos la tecnología superior de los hilos tensores MINT® con nuestra metodología exclusiva M.A.P.® para garantizar un resultado excepcional:
            </p>
            <ul className="space-y-4">
              {mapPillars.map((pillar) => (
                <li key={pillar.name} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold">{pillar.name}</h3>
                    <p className="text-sm text-muted-foreground">{pillar.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Right Panels (Center and Right) */}
        <div className="lg:col-span-2 space-y-6">
            {/* Top Right Panel */}
            <Card className="bg-background shadow-2xl p-8 text-center">
                <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary">MINT® Architectural Lift™</h1>
                <p className="mt-2 text-lg sm:text-xl text-foreground font-medium">
                    Rediseña. Reposiciona. Rejuvenece.
                </p>
                <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                    Protocolos de lifting no quirúrgico para rostro y cuerpo. Una nueva era en la medicina estética.
                </p>
            </Card>

            {/* Bottom Right Panel */}
            <Card className="bg-background shadow-2xl">
              <CardHeader>
                <CardTitle className="font-headline text-2xl md:text-3xl">Descubre tu Protocolo Ideal</CardTitle>
                 <p className="text-muted-foreground pt-2">Cada zona de tu rostro y cuerpo merece una solución diseñada a la perfección.</p>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-headline text-xl font-semibold mb-4 border-b-2 border-primary pb-2">Arquitectura Facial</h3>
                  <ul className="space-y-3">
                    {facialProtocols.map((protocol) => (
                      <li key={protocol.name}>
                        <p className="font-semibold text-foreground">{protocol.name}</p>
                        <p className="text-sm text-muted-foreground">{protocol.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-headline text-xl font-semibold mb-4 border-b-2 border-primary pb-2">Arquitectura Corporal</h3>
                  <ul className="space-y-3">
                    {corporalProtocols.map((protocol) => (
                      <li key={protocol.name}>
                        <p className="font-semibold">{protocol.name}</p>
                        <p className="text-sm text-muted-foreground">{protocol.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
        </div>

      </div>
    </main>
  );
}
