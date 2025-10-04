
'use client';

import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';

interface CertificateProps {
  name: string;
  level: string;
}

export default function Certificate({ name, level }: CertificateProps) {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col items-center justify-center p-4 print:p-0 print:justify-start print:bg-white">
      <style jsx global>{`
        @media print {
          @page {
            size: A4 landscape;
            margin: 0;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .no-print {
            display: none;
          }
        }
      `}</style>
      <div className="w-full max-w-4xl mx-auto p-8 sm:p-12 border-4 border-primary rounded-lg bg-card shadow-2xl relative overflow-hidden print:shadow-none print:border-8 print:rounded-none print:h-screen print:flex print:flex-col print:justify-center">
        {/* Decorative background shapes */}
        <div className="absolute -top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl opacity-50 animation-delay-4000 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl opacity-40 animation-delay-2000 animate-pulse"></div>
        
        <div className="relative z-10">
          <div className="absolute top-0 left-0">
            <Logo />
          </div>
          <div className="text-center space-y-6 mt-12 sm:mt-16">
            <h1 className="text-4xl sm:text-5xl font-headline text-primary">
              Certificado de Finalización
            </h1>
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
       <div className="mt-8 text-center no-print">
        <Button onClick={() => window.print()}>
          Imprimir o Guardar como PDF
        </Button>
        <p className="text-xs text-muted-foreground mt-2">
            Puedes usar la función de "Imprimir" de tu navegador para guardar el certificado como un archivo PDF.
        </p>
      </div>
    </div>
  );
}
