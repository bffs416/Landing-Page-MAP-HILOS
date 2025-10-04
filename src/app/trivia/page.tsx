'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, XCircle, Award } from 'lucide-react';
import { triviaLevels } from '@/lib/trivia-questions';
import Link from 'next/link';

type LevelId = 'beginner' | 'intermediate' | 'expert';

export default function TriviaPage() {
  const [currentLevel, setCurrentLevel] = useState<LevelId | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);
  
  const levelData = currentLevel ? triviaLevels[currentLevel] : null;
  const questions = levelData?.questions ?? [];
  const currentQuestion = questions[currentQuestionIndex];

  const handleSelectLevel = (levelId: LevelId) => {
    setCurrentLevel(levelId);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setShowResult(false);
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

  if (showResult && levelData) {
    const { message, icon } = getResultMessage();
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl text-center shadow-2xl">
          <CardHeader>
            <CardTitle className="text-3xl font-headline">Resultado del Nivel: {levelData.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex justify-center">{icon}</div>
            <p className="text-xl font-semibold">{message}</p>
            <p className="text-5xl font-bold">{percentage.toFixed(0)}%</p>
            <p className="text-muted-foreground">Respondiste correctamente {correctCount} de {total} preguntas.</p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => handleSelectLevel(currentLevel!)}>Intentar de Nuevo</Button>
              <Button variant="outline" onClick={() => setCurrentLevel(null)}>Elegir otro Nivel</Button>
               <Button asChild variant="secondary">
                <Link href="/">Volver al Inicio</Link>
              </Button>
            </div>
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
