
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, XCircle, Award, ChevronsRight } from 'lucide-react';
import { triviaLevels } from '@/lib/trivia-questions';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Certificate from './certificate';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

type LevelId = 'beginner' | 'intermediate' | 'expert';

const certificateSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  phone: z.string().min(8, { message: "Ingresa un número de teléfono válido." }),
  city: z.string().min(3, { message: "La ciudad debe tener al menos 3 caracteres." }),
});

type CertificateFormData = z.infer<typeof certificateSchema>;

// Fisher-Yates shuffle algorithm
const shuffleArray = (array: any[]) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};


export default function TriviaPage() {
  const [currentLevel, setCurrentLevel] = useState<LevelId | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [showCertificateForm, setShowCertificateForm] = useState(false);
  const [certificateData, setCertificateData] = useState<{name: string, level: string} | null>(null);
  const [questions, setQuestions] = useState<any[]>([]);

  const levelData = currentLevel ? triviaLevels[currentLevel] : null;
  const currentQuestion = questions[currentQuestionIndex];
  
  const form = useForm<CertificateFormData>({
    resolver: zodResolver(certificateSchema),
    defaultValues: {
      name: "",
      phone: "",
      city: "",
    },
  });

  const handleSelectLevel = (levelId: LevelId) => {
    setCurrentLevel(levelId);
    setQuestions(shuffleArray(triviaLevels[levelId].questions));
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setShowResult(false);
    setShowCertificateForm(false);
    setCertificateData(null);
  };

  const handleAnswerChange = (questionIndex: number, answer: string) => {
    setUserAnswers(prev => ({ ...prev, [questionIndex]: answer }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };
  
  const calculateScore = () => {
    if (!levelData) return { correctCount: 0, total: 0, percentage: 0 };
    const correctCount = questions.reduce((acc, question, index) => {
      return userAnswers[index] === question.correctAnswer ? acc + 1 : acc;
    }, 0);
    const total = questions.length;
    const percentage = total > 0 ? (correctCount / total) * 100 : 0;
    return { correctCount, total, percentage };
  };
  
  const { correctCount, total, percentage } = showResult ? calculateScore() : { correctCount: 0, total: 0, percentage: 0 };

  const getResultMessage = () => {
    if (percentage >= 90) return { message: "¡Excelente! Eres un experto en hilos PDO.", icon: <Award className="w-16 h-16 text-yellow-500" /> };
    if (percentage >= 70) return { message: "¡Muy bien! Tienes un sólido conocimiento.", icon: <CheckCircle className="w-16 h-16 text-green-500" /> };
    return { message: "Sigue estudiando para mejorar tus conocimientos.", icon: <XCircle className="w-16 h-16 text-destructive" /> };
  };

  const onSubmit = (data: CertificateFormData) => {
    console.log("Form submitted for certificate:", data);
    if(levelData) {
      setCertificateData({ name: data.name, level: levelData.title });
    }
  };
  
  if (certificateData) {
    return <Certificate name={certificateData.name} level={certificateData.level} />;
  }

  if (showResult && levelData) {
    const { message, icon } = getResultMessage();
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-3xl text-center shadow-2xl">
          <CardHeader>
            <CardTitle className="text-3xl font-headline">Resultado del Nivel: {levelData.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {!showCertificateForm ? (
              <>
                <div className="flex justify-center">{icon}</div>
                <p className="text-xl font-semibold">{message}</p>
                <p className="text-5xl font-bold">{percentage.toFixed(0)}%</p>
                <p className="text-muted-foreground">Respondiste correctamente {correctCount} de {total} preguntas.</p>

                <div className="text-left space-y-4 max-h-60 overflow-y-auto p-4 border rounded-lg">
                  {questions.map((q, index) => (
                    <div key={index} className="p-2 border-b">
                      <p className="font-semibold">{index + 1}. {q.question}</p>
                      <p className={cn(
                        "text-sm",
                        userAnswers[index] === q.correctAnswer ? "text-green-600" : "text-destructive"
                      )}>
                        Tu respuesta: {userAnswers[index] ? q.options.find((opt: string) => opt.startsWith(userAnswers[index])) : 'No respondida'}
                      </p>
                      {userAnswers[index] !== q.correctAnswer && (
                        <p className="text-sm text-green-700">
                          Respuesta correcta: {q.options.find((opt: string) => opt.startsWith(q.correctAnswer))}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 justify-center">
                  <Button onClick={() => handleSelectLevel(currentLevel!)}>Intentar de Nuevo</Button>
                  <Button variant="outline" onClick={() => { setCurrentLevel(null); setQuestions([]); }}>Elegir otro Nivel</Button>
                   <Button onClick={() => setShowCertificateForm(true)}>
                    Generar Certificado <ChevronsRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </>
            ) : (
               <>
                <CardTitle className="text-2xl font-headline">Datos para el Certificado</CardTitle>
                <CardDescription>Completa el formulario para generar tu certificado de participación.</CardDescription>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 text-left">
                     <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre Completo</FormLabel>
                          <FormControl>
                            <Input placeholder="Dra. o Dr. Nombre Apellido" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                     <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Teléfono</FormLabel>
                          <FormControl>
                            <Input placeholder="Tu número de teléfono" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                     <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Ciudad</FormLabel>
                          <FormControl>
                            <Input placeholder="Ciudad de residencia" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex justify-end gap-2">
                        <Button type="button" variant="ghost" onClick={() => setShowCertificateForm(false)}>
                            Volver
                        </Button>
                        <Button type="submit">Generar mi Certificado</Button>
                    </div>
                  </form>
                </Form>
               </>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!currentLevel || !levelData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-lg text-center shadow-2xl">
          <CardHeader>
            <CardTitle className="text-4xl font-headline">Trivia de Hilos Tensores PDO</CardTitle>
            <CardDescription>Elige un nivel para comenzar y pon a prueba tus conocimientos.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {Object.keys(triviaLevels).map(levelKey => (
              <Button key={levelKey} className="w-full" size="lg" onClick={() => handleSelectLevel(levelKey as LevelId)}>
                {triviaLevels[levelKey as LevelId].title}
              </Button>
            ))}
             <Button asChild variant="secondary" className="w-full">
              <Link href="/">Volver al Inicio</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-3xl shadow-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-headline text-center mb-4">
            Nivel: {levelData.title}
          </CardTitle>
           <Progress value={((currentQuestionIndex + 1) / questions.length) * 100} className="w-full" />
           <p className="text-center text-sm text-muted-foreground mt-2">
            Pregunta {currentQuestionIndex + 1} de {questions.length}
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <p className="text-lg font-semibold text-center">{currentQuestion.question}</p>
            <RadioGroup
              value={userAnswers[currentQuestionIndex] || ''}
              onValueChange={(value) => handleAnswerChange(currentQuestionIndex, value)}
              className="space-y-3"
            >
              {currentQuestion.options.map((option, index) => (
                <Label
                  key={index}
                  className="flex items-center gap-4 p-4 border rounded-lg cursor-pointer hover:bg-muted/50 has-[input:checked]:bg-primary/10 has-[input:checked]:border-primary"
                >
                  <RadioGroupItem value={option.substring(0, 1)} id={`q${currentQuestionIndex}-o${index}`} />
                  <span>{option}</span>
                </Label>
              ))}
            </RadioGroup>
            <div className="flex justify-end">
              <Button onClick={handleNext} disabled={!userAnswers[currentQuestionIndex]}>
                {currentQuestionIndex < questions.length - 1 ? 'Siguiente' : 'Finalizar'}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
