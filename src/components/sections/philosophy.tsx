import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Map, AppWindow, BarChart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Pillar = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const pillars: Pillar[] = [
  {
    icon: Map,
    title: 'Mapeo Facial 3D',
    description: 'Utilizamos tecnología de mapeo tridimensional para analizar la estructura facial única de cada paciente y planificar el tratamiento con precisión milimétrica.',
  },
  {
    icon: AppWindow,
    title: 'Aplicación Vectorial',
    description: 'La aplicación de los hilos sigue vectores de tensión específicos para lograr un lifting natural y armonioso, respetando la dinámica de tus expresiones.',
  },
  {
    icon: BarChart,
    title: 'Potenciación con Bioestimulación',
    description: 'Los hilos MINT® no solo tensan, sino que estimulan la producción de colágeno, mejorando la calidad de la piel desde adentro hacia afuera para resultados duraderos.',
  },
];

export default function Philosophy() {
  return (
    <section id="filosofia" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Nuestra Filosofía M.A.P.®
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tres pilares que garantizan seguridad, personalización y resultados superiores en cada procedimiento.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {pillars.map((pillar) => (
            <Card key={pillar.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-background">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <pillar.icon className="h-6 w-6" />
                </div>
                <CardTitle className="mt-4 font-headline text-xl">{pillar.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
