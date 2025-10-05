
'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import html2canvas from 'html2canvas';

const confettiColors = ['#e6c3a5', '#d4a37b', '#a57d54', '#8c6b4a', '#e1ad83'];
const confettiCount = 100;

const Confetti = () => {
  const [pieces, setPieces] = useState<any[]>([]);

  useEffect(() => {
    const newPieces = Array.from({ length: confettiCount }).map((_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 100}%`,
        backgroundColor: confettiColors[Math.floor(Math.random() * confettiColors.length)],
        animationDelay: `${Math.random() * 3}s`,
        transform: `rotate(${Math.random() * 360}deg)`,
        width: `${Math.floor(Math.random() * 8) + 8}px`,
        height: `${Math.floor(Math.random() * 15) + 8}px`,
      },
    }));
    setPieces(newPieces);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-20 no-print">
      {pieces.map(p => (
        <div key={p.id} className="confetti" style={p.style} />
      ))}
    </div>
  );
};


interface CertificateProps {
  name: string;
  level: string;
}

export default function Certificate({ name, level }: CertificateProps) {
  const [currentDate, setCurrentDate] = useState('');
  const certificateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }));
  }, []);

  const handlePrint = () => {
    window.print();
  };
  
  const handleDownloadImage = async () => {
    const element = certificateRef.current;
    if (!element) return;
  
    // A5 dimensions in pixels at 300 DPI
    const a5Width = 2480;
    const a5Height = 1748;
  
    const sourceCanvas = await html2canvas(element, {
      backgroundColor: null, // Transparent background
      scale: 4, // Capture at higher resolution initially for better text quality
    });
  
    // Create a new canvas with A5 dimensions
    const targetCanvas = document.createElement('canvas');
    targetCanvas.width = a5Width;
    targetCanvas.height = a5Height;
    const ctx = targetCanvas.getContext('2d');
  
    if (ctx) {
      // Draw the captured canvas onto the new canvas, scaling it to fit
      ctx.drawImage(sourceCanvas, 0, 0, a5Width, a5Height);
      
      const data = targetCanvas.toDataURL('image/png');
      const link = document.createElement('a');
  
      link.href = data;
      link.download = 'certificado-mint-lift-A5.png';
  
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };


  if (!currentDate) {
    return (
        <div className="bg-background text-foreground min-h-screen flex flex-col items-center justify-center p-4">
            <p>Generando certificado...</p>
        </div>
    );
  }

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
       <Confetti />
       <div ref={certificateRef} id="certificate" className="printable-area w-full max-w-4xl mx-auto p-8 sm:p-12 border-4 border-primary rounded-lg bg-card shadow-2xl relative overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute -top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl opacity-50 animation-delay-4000 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl opacity-40 animation-delay-2000 animate-pulse"></div>
        
        <div className="relative z-10 text-center">
          <div className="mb-4">
             <h1 className="text-5xl sm:text-6xl font-headline text-foreground">
                MINT® Lift™
              </h1>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-headline text-primary">
              Certificado de Finalización
            </h2>
            <p className="text-lg text-muted-foreground">
              Se otorga este certificado a
            </p>
            <p className="text-3xl sm:text-4xl font-bold font-headline text-foreground tracking-wider">
              {name}
            </p>
            <p className="text-lg text-muted-foreground">
              por haber completado exitosamente la trivia de Hilos Tensores PDO en el nivel:
            </p>
            <p className="text-2xl sm:text-3xl font-semibold text-primary">
              {level}
            </p>
            <div className="border-t-2 border-muted w-1/2 mx-auto pt-6 mt-6">
               <p className="text-sm text-muted-foreground">Emitido el {currentDate}</p>
              <p className="mt-2 text-xs font-light tracking-widest uppercase">
                Congreso AMWC
              </p>
            </div>
          </div>
        </div>
      </div>
       <div className="mt-8 text-center no-print relative z-10 flex gap-4">
        <Button onClick={handlePrint}>
          Imprimir Certificado
        </Button>
         <Button onClick={handleDownloadImage} variant="outline">
          Descargar PNG
        </Button>
      </div>
      <p className="text-xs text-muted-foreground mt-2 text-center no-print relative z-10">
          Puedes imprimirlo o guardarlo como PNG con fondo transparente.
      </p>
    </div>
  );
}
