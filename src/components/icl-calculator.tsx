'use client';

import { useState, useMemo } from 'react';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

const factors = [
  {
    id: 'skin',
    title: '1. Calidad y Grosor de la Piel',
    labels: [
      'Piel muy delgada, atrófica, frágil.',
      'Piel delgada, elasticidad reducida.',
      'Piel normal, elasticidad moderada.',
      'Piel de grosor y calidad óptimos.',
      'Piel ligeramente gruesa, buena estructura.',
    ],
  },
  {
    id: 'sagging',
    title: '2. Grado de Flacidez y Ptosis',
    labels: [
      'Flacidez severa. Candidato quirúrgico.',
      'Flacidez moderada-severa. Mejoría sutil.',
      'Flacidez moderada. Candidato ideal.',
      'Flacidez leve-moderada. Excelente candidato.',
      'Flacidez leve. Ideal para "refresh".',
    ],
  },
  {
    id: 'volume',
    title: '3. Volumen y Soporte Estructural',
    labels: [
      'Atrofia grasa/ósea severa. Requiere rellenos.',
      'Pérdida de volumen moderada.',
      'Leve pérdida de volumen.',
      'Volumen adecuado. Reposicionamiento eficaz.',
      'Volumen óptimo o rostro pesado.',
    ],
  },
  {
    id: 'expectations',
    title: '4. Adherencia y Expectativas',
    labels: [
      'Expectativas no realistas.',
      'Expectativas elevadas.',
      'Expectativas moderadas.',
      'Expectativas realistas.',
      'Paciente bien informado, alto compromiso.',
    ],
  },
];

const getResult = (score: number) => {
  if (score >= 16) {
    return {
      title: 'Candidato Ideal',
      description:
        'Presentas condiciones óptimas para un resultado excepcional y duradero. La estructura, piel y expectativas están perfectamente alineadas.',
      icon: <CheckCircle className="w-12 h-12 text-accent" />,
      titleColor: 'text-accent',
    };
  }
  if (score >= 11) {
    return {
      title: 'Buen Candidato (con posible combinación)',
      description:
        'Obtendrás un resultado muy satisfactorio. Puede que uno de los factores no sea "óptimo", pero es totalmente corregible, a menudo combinando con otras técnicas.',
      icon: <AlertTriangle className="w-12 h-12 text-primary" />,
      titleColor: 'text-primary',
    };
  }
  return {
    title: 'No Apto / Derivar',
    description:
      'Los hilos tensores podrían no ser la solución más adecuada en este momento. Es crucial una valoración profesional para explorar alternativas que se ajusten mejor a tus necesidades.',
    icon: <XCircle className="w-12 h-12 text-destructive" />,
    titleColor: 'text-destructive',
  };
};

const ICLCalculator = () => {
  const [scores, setScores] = useState({
    skin: 3,
    sagging: 3,
    volume: 3,
    expectations: 3,
  });

  const handleSliderChange = (id: string, value: number[]) => {
    setScores(prev => ({ ...prev, [id]: value[0] }));
  };

  const totalScore = useMemo(() => {
    return Object.values(scores).reduce((acc, score) => acc + score, 0);
  }, [scores]);

  const result = useMemo(() => getResult(totalScore), [totalScore]);

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-2xl overflow-hidden bg-card">
      <CardContent className="p-0 md:grid md:grid-cols-2">
        <div className="p-8 space-y-8">
          {factors.map(factor => (
            <div key={factor.id}>
              <h3 className="font-headline text-lg font-semibold mb-3 text-card-foreground">
                {factor.title}
              </h3>
              <Slider
                defaultValue={[3]}
                min={1}
                max={5}
                step={1}
                onValueChange={value => handleSliderChange(factor.id, value)}
              />
              <p className="text-sm text-muted-foreground mt-2 text-center">
                {factor.labels[scores[factor.id as keyof typeof scores] - 1]}
              </p>
            </div>
          ))}
        </div>
        <div
          className={`flex flex-col items-center justify-center p-8 text-center bg-background/50 border-l`}
        >
          <div className="mb-4">{result.icon}</div>
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Tu resultado
          </p>
          <p className="font-headline text-3xl font-bold my-2 text-card-foreground">{totalScore} / 20</p>
          <h3 className={`font-headline text-2xl font-bold ${result.titleColor}`}>
            {result.title}
          </h3>
          <p className="mt-4 text-muted-foreground">{result.description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ICLCalculator;
