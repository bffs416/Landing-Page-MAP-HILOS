import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Stethoscope, Sparkles, UserCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Technique = {
  icon: LucideIcon;
  title: string;
  description: string;
  targetAreas: string;
};

const techniques: Technique[] = [
  {
    icon: Stethoscope,
    title: 'Lifting de Hilos PDO',
    description: 'La técnica más avanzada para un efecto lifting inmediato y una producción de colágeno a largo plazo.',
    targetAreas: 'Mejillas, mandíbula, cuello, cejas',
  },
  {
    icon: Sparkles,
    title: 'Hilos Monofilamento',
    description: 'Ideales para revitalizar la piel, mejorar la textura y reducir la flacidez leve en áreas delicadas.',
    targetAreas: 'Contorno de ojos, código de barras, frente',
  },
  {
    icon: UserCheck,
    title: 'Técnica de Malla',
    description: 'Una red de hilos que proporciona un soporte estructural, mejorando la firmeza y elasticidad de la piel.',
    targetAreas: 'Abdomen, brazos, muslos',
  },
];

export default function Techniques() {
  return (
    <section id="tecnicas" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Nuestras Técnicas de Lifting
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Procedimientos innovadores diseñados para realzar tu belleza natural con la máxima seguridad y eficacia.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {techniques.map((technique) => (
            <Card key={technique.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <technique.icon className="h-6 w-6" />
                </div>
                <CardTitle className="mt-4 font-headline text-xl">{technique.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{technique.description}</p>
                <p className="mt-4 text-sm font-semibold text-foreground">Áreas: <span className="font-normal">{technique.targetAreas}</span></p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
