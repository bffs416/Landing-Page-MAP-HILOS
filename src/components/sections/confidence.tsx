import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, ShieldCheck, HeartPulse, Microscope } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type ConfidencePoint = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const points: ConfidencePoint[] = [
  {
    icon: Award,
    title: 'Experticia Médica Certificada',
    description: 'Dirigido por el Dr. [Tu Nombre], un referente en medicina estética con años de experiencia y formación continua en las técnicas más avanzadas.',
  },
  {
    icon: Microscope,
    title: 'Tecnología Superior MINT®',
    description: 'Utilizamos exclusivamente hilos MINT®, los únicos con aprobación de la FDA, conocidos por su diseño patentado que garantiza máxima tracción y durabilidad.',
  },
  {
    icon: ShieldCheck,
    title: 'Seguridad Primero: Planificación Ecográfica',
    description: 'Realizamos una ecografía facial previa para mapear las estructuras anatómicas, minimizando riesgos y asegurando una aplicación precisa y segura.',
  },
  {
    icon: HeartPulse,
    title: 'Resultados Naturales y Armónicos',
    description: 'Nuestra filosofía se basa en realzar tu belleza, no en transformarla. Buscamos resultados elegantes que respeten tu fisionomía natural.',
  },
];

export default function Confidence() {
  return (
    <section id="confianza" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Confianza y Seguridad: ¿Por qué elegirnos?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tu tranquilidad es nuestra prioridad. Descubre los pilares que hacen de nuestra clínica la elección más segura y confiable.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {points.map((point) => (
            <Card key={point.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <point.icon className="h-6 w-6" />
                </div>
                <CardTitle className="mt-4 font-headline text-lg">{point.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
