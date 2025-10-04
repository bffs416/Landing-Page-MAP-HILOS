
'use client';

import { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Button } from '@/components/ui/button';

interface CertificateProps {
  name: string;
  level: string;
}

export default function Certificate({ name, level }: CertificateProps) {
  const certificateRef = useRef<HTMLDivElement>(null);

  const handleDownloadPdf = async () => {
    const element = certificateRef.current;
    if (!element) return;

    // We make the component visible temporarily to take the screenshot, even if it's off-screen for printing.
    const originalDisplay = element.style.display;
    element.style.display = 'block';

    const canvas = await html2canvas(element, {
      scale: 2, // Higher scale for better quality
      useCORS: true,
      backgroundColor: null, // Use transparent background
    });
    
    element.style.display = originalDisplay;

    const imgData = canvas.toDataURL('image/png');
    
    // A4 dimensions in mm: 297 x 210
    const pdf = new jsPDF('l', 'mm', 'a4'); 
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;

    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);

    const imgX = (pdfWidth - imgWidth * ratio) / 2;
    const imgY = (pdfHeight - imgHeight * ratio) / 2;

    pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
    pdf.save(`Certificado-${name.replace(/ /g, '_')}.pdf`);
  };

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col items-center justify-center p-4">
      {/* This is the element that will be rendered to PDF. We hide it visually but keep it in the DOM for html2canvas */}
      <div className="fixed -left-[9999px] -top-[9999px]">
        <div ref={certificateRef} className="w-[297mm] h-[210mm] p-12 border-8 border-primary bg-card relative overflow-hidden flex flex-col justify-center">
            {/* Decorative background shapes */}
            <div className="absolute -top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-50"></div>
            <div className="absolute -bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl opacity-40"></div>
            
            <div className="relative z-10 text-center">
            <div className="mb-4">
                <h1 className="text-6xl font-headline text-foreground">
                    MINT® Lift™
                </h1>
            </div>
            <div className="space-y-6">
                <h2 className="text-4xl font-headline text-primary">
                Certificado de Finalización
                </h2>
                <p className="text-lg text-muted-foreground">
                Se otorga este certificado a
                </p>
                <p className="text-4xl font-bold font-headline text-foreground tracking-wider">
                {name}
                </p>
                <p className="text-lg text-muted-foreground">
                por haber completado exitosamente la trivia de Hilos Tensores PDO en el nivel:
                </p>
                <p className="text-3xl font-semibold text-primary">
                {level}
                </p>
                <div className="border-t-2 border-muted w-1/2 mx-auto pt-6 mt-6">
                <p className="text-sm text-muted-foreground">Emitido el {new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                <p className="mt-2 text-xs font-light tracking-widest uppercase">
                    Congreso AMWC
                </p>
                </div>
            </div>
            </div>
        </div>
      </div>

       {/* This is the visible component for the user on the screen */}
       <div className="w-full max-w-4xl mx-auto p-8 sm:p-12 border-4 border-primary rounded-lg bg-card shadow-2xl relative overflow-hidden">
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
               <p className="text-sm text-muted-foreground">Emitido el {new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
              <p className="mt-2 text-xs font-light tracking-widest uppercase">
                Congreso AMWC
              </p>
            </div>
          </div>
        </div>
      </div>
       <div className="mt-8 text-center">
        <Button onClick={handleDownloadPdf}>
          Guardar como PDF
        </Button>
        <p className="text-xs text-muted-foreground mt-2">
            El certificado se descargará directamente a tu dispositivo.
        </p>
      </div>
    </div>
  );
}
