
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, XCircle, Award, ChevronsRight, Info, Loader2, BookCopy } from 'lucide-react';
import { triviaLevels, type Question } from '@/lib/trivia-questions';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Certificate from './certificate';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { getSupabaseClient } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';
import { Textarea } from '@/components/ui/textarea';

type LevelId = 'beginner' | 'intermediate' | 'expert' | 'legendary';

const countryCodes = [
  { code: "+1", name: "USA/Canadá" },
  { code: "+52", name: "México" },
  { code: "+55", name: "Brasil" },
  { code: "+57", name: "Colombia" },
  { code: "+54", name: "Argentina" },
  { code: "+34", name: "España" },
  { code: "+51", name: "Perú" },
  { code: "+56", name: "Chile" },
  { code: "+593", name: "Ecuador" },
  { code: "+44", name: "Reino Unido" },
  { code: "+49", name: "Alemania" },
  { code: "+33", name: "Francia" },
  { code: "+39", name: "Italia" },
  { code: "+91", name: "India" },
  { code: "+86", name: "China" },
  { code: "+81", name: "Japón" },
  { code: "+7", name: "Rusia" },
  { code: "+61", name: "Australia" },
  { code: "+27", name: "Sudáfrica" },
  { code: "+82", name: "Corea del Sur" },
];

const certificateSchema = z.object({
  gender: z.enum(["male", "female"], {
    required_error: "Debes seleccionar un género.",
  }),
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  countryCode: z.string({ required_error: "Selecciona un prefijo." }),
  phone: z.string().min(7, { message: "Ingresa un número de teléfono válido." }),
  city: z.string().min(3, { message: "La ciudad debe tener al menos 3 caracteres." }),
  articles: z.string().optional(),
});

type CertificateFormData = z.infer<typeof certificateSchema>;

const passingScores: Record<LevelId, number> = {
  beginner: 90,
  intermediate: 75,
  expert: 60,
  legendary: 40,
};

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
  const { toast } = useToast();
  const [currentLevel, setCurrentLevel] = useState<LevelId | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [showCertificateForm, setShowCertificateForm] = useState(false);
  const [showArticleSubmission, setShowArticleSubmission] = useState(false);
  const [certificateData, setCertificateData] = useState<{fullName: string, nameOnly: string, level: string} | null>(null);
  const [legendaryPreSubmissionData, setLegendaryPreSubmissionData] = useState<Partial<CertificateFormData> | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const levelData = currentLevel ? triviaLevels[currentLevel] : null;
  const currentQuestion = questions[currentQuestionIndex];
  
  const form = useForm<CertificateFormData>({
    resolver: zodResolver(certificateSchema),
    defaultValues: {
      name: "",
      phone: "",
      city: "",
      countryCode: "+57",
      articles: "",
    },
  });

  const handleSelectLevel = (levelId: LevelId) => {
    if (levelId === 'legendary' && !legendaryPreSubmissionData) {
        setShowArticleSubmission(true);
        return;
    }
    setCurrentLevel(levelId);
    setQuestions(shuffleArray(triviaLevels[levelId].questions));
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setShowResult(false);
    setShowCertificateForm(false);
    setCertificateData(null);
  };
  
  const handleLegendaryPreSubmit = (data: CertificateFormData) => {
    setLegendaryPreSubmissionData(data);
    setShowArticleSubmission(false);
    handleSelectLevel('legendary');
  };

  const handleBackToLevelSelect = () => {
    setCurrentLevel(null);
    setQuestions([]);
    setShowArticleSubmission(false);
    setLegendaryPreSubmissionData(null);
  }

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
  const passingScore = currentLevel ? passingScores[currentLevel] : 100;
  const hasPassed = percentage >= passingScore;

  const getResultMessage = () => {
    if (hasPassed) return { message: "¡Excelente! Has aprobado el nivel.", icon: <Award className="w-16 h-16 text-yellow-500" /> };
    if (percentage >= passingScore - 20) return { message: "¡Casi lo logras! Tienes un sólido conocimiento.", icon: <CheckCircle className="w-16 h-16 text-green-500" /> };
    return { message: "Sigue estudiando para mejorar tus conocimientos.", icon: <XCircle className="w-16 h-16 text-destructive" /> };
  };

  const onSubmit = async (data: CertificateFormData) => {
    setIsSubmitting(true);
    const finalData = currentLevel === 'legendary' ? { ...legendaryPreSubmissionData, ...data } : data;
    const levelTitle = levelData!.title;
    const fullPhoneNumber = `${finalData.countryCode}${finalData.phone}`;

    try {
        const supabase = getSupabaseClient();
        const { error } = await supabase
            .from('certificates')
            .insert({ 
                name: finalData.name, 
                phone: fullPhoneNumber,
                city: finalData.city,
                level: levelTitle,
                score: percentage,
                articles: finalData.articles,
            });

        if (error) {
            throw error;
        }

        console.log("Form submitted successfully to Supabase:", finalData);
        const title = finalData.gender === 'male' ? 'Dr.' : 'Dra.';
        const fullName = `${title} ${finalData.name}`;
        setCertificateData({ fullName: fullName, nameOnly: finalData.name!, level: levelTitle });

    } catch (error) {
        console.error("Error submitting to Supabase:", error);
        toast({
          variant: "destructive",
          title: "Error al guardar",
          description: "No se pudo guardar la información del certificado. Por favor, intenta de nuevo.",
        });
    } finally {
        setIsSubmitting(false);
    }
  };
  
  if (certificateData) {
    return <Certificate fullName={certificateData.fullName} nameOnly={certificateData.nameOnly} level={certificateData.level} />;
  }

  if (showResult && levelData) {
    const { message, icon } = getResultMessage();
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
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
                <p className="text-muted-foreground">Respondiste correctamente {correctCount} de {total} preguntas. (Necesitas {passingScore}% para aprobar)</p>

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
                       <div className="mt-2 text-xs p-2 bg-muted/50 rounded-md flex items-start gap-2">
                          <Info className="w-4 h-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                          <span className="text-muted-foreground">{q.explanation}</span>
                       </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 justify-center">
                  <Button onClick={() => handleSelectLevel(currentLevel!)}>Intentar de Nuevo</Button>
                  <Button variant="outline" onClick={handleBackToLevelSelect}>Elegir otro Nivel</Button>
                   {hasPassed && (
                    <Button onClick={() => setShowCertificateForm(true)}>
                      Generar Certificado <ChevronsRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </div>
              </>
            ) : ( // showCertificateForm
               <>
                <CardTitle className="text-2xl font-headline">Datos para el Certificado</CardTitle>
                <CardDescription>Completa el formulario para generar tu certificado de participación.</CardDescription>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 text-left">
                     {currentLevel !== 'legendary' && (
                        <>
                         <FormField
                          control={form.control}
                          name="gender"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel>Título Profesional</FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  className="flex flex-col space-y-1"
                                >
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="female" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      Dra. (Femenino)
                                    </FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="male" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      Dr. (Masculino)
                                    </FormLabel>
                                  </FormItem>
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                         <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nombre Completo</FormLabel>
                              <FormControl>
                                <Input placeholder="Nombre Apellido" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormItem>
                          <FormLabel>Teléfono</FormLabel>
                          <div className="flex gap-2">
                            <FormField
                              control={form.control}
                              name="countryCode"
                              render={({ field }) => (
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger className="w-[120px]">
                                      <SelectValue placeholder="Prefijo" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {countryCodes.map(c => (
                                      <SelectItem key={c.code} value={c.code}>
                                        {c.name} ({c.code})
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="phone"
                              render={({ field }) => (
                                <FormControl>
                                  <Input type="tel" placeholder="Tu número" {...field} />
                                </FormControl>
                              )}
                            />
                          </div>
                          <FormMessage>{form.formState.errors.phone?.message}</FormMessage>
                        </FormItem>
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
                        </>
                     )}
                     {currentLevel === 'legendary' && (
                        <div className='text-center p-4 border rounded-md bg-muted/50'>
                            <p>Se usarán los datos que proporcionaste para iniciar la trivia.</p>
                            <p className='font-bold'>{legendaryPreSubmissionData?.name}</p>
                        </div>
                     )}

                    <div className="flex justify-end gap-2">
                        <Button type="button" variant="ghost" onClick={() => setShowCertificateForm(false)} disabled={isSubmitting}>
                            Volver
                        </Button>
                        <Button type="submit" disabled={isSubmitting}>
                          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                          Generar mi Certificado
                        </Button>
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

  if (showArticleSubmission) {
    return (
         <div className="min-h-screen flex items-center justify-center p-4">
            <Card className="w-full max-w-3xl text-center shadow-2xl">
                <CardHeader>
                    <CardTitle className="text-2xl font-headline">Certificación de Experto Legendario</CardTitle>
                    <CardDescription>Para acceder a la trivia de este nivel, por favor, completa tus datos y adjunta enlaces o resúmenes de artículos relevantes que respalden tu experiencia.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleLegendaryPreSubmit)} className="space-y-4 text-left">
                            <FormField
                                control={form.control}
                                name="gender"
                                render={({ field }) => (
                                <FormItem className="space-y-3">
                                    <FormLabel>Título Profesional</FormLabel>
                                    <FormControl>
                                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl><RadioGroupItem value="female" /></FormControl>
                                        <FormLabel className="font-normal">Dra. (Femenino)</FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl><RadioGroupItem value="male" /></FormControl>
                                        <FormLabel className="font-normal">Dr. (Masculino)</FormLabel>
                                        </FormItem>
                                    </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nombre Completo</FormLabel>
                                    <FormControl><Input placeholder="Nombre Apellido" {...field} /></FormControl>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />
                            <FormItem>
                                <FormLabel>Teléfono</FormLabel>
                                <div className="flex gap-2">
                                <FormField
                                    control={form.control}
                                    name="countryCode"
                                    render={({ field }) => (
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                        <SelectTrigger className="w-[120px]"><SelectValue placeholder="Prefijo" /></SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                        {countryCodes.map(c => (<SelectItem key={c.code} value={c.code}>{c.name} ({c.code})</SelectItem>))}
                                        </SelectContent>
                                    </Select>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (<FormControl><Input type="tel" placeholder="Tu número" {...field} /></FormControl>)}
                                />
                                </div>
                                <FormMessage>{form.formState.errors.phone?.message}</FormMessage>
                            </FormItem>
                            <FormField
                                control={form.control}
                                name="city"
                                render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Ciudad</FormLabel>
                                    <FormControl><Input placeholder="Ciudad de residencia" {...field} /></FormControl>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="articles"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Artículos o Evidencia</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Pega aquí los enlaces a tus artículos, publicaciones o un resumen de tu experiencia..."
                                                className="resize-y min-h-[150px]"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex justify-end gap-2">
                                <Button type="button" variant="ghost" onClick={handleBackToLevelSelect}>
                                    Volver
                                </Button>
                                <Button type="submit">
                                    Enviar y Comenzar Trivia
                                </Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
  }

  if (!currentLevel || !levelData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
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
    <div className="min-h-screen flex items-center justify-center p-4">
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
              {currentQuestion.options.map((option: string, index: number) => (
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
