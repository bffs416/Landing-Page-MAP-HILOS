
'use client';

import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';

interface CertificateProps {
  name: string;
  level: string;
}

export default function Certificate({ name, level }: CertificateProps) {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col items-center justify-center p-4 print:justify-start print:bg-white">
      <style jsx global>{`
        @media print {
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .no-print {
            display: none;
          }
        }
      `}</style>
      <div className="w-full max-w-4xl mx-auto p-8 sm:p-16 border-4 border-primary rounded-lg bg-card shadow-2xl relative print:shadow-none print:border-8">
        <div className="absolute top-8 left-8">
          <Logo />
        </div>
        <div className="text-center space-y-8 mt-16">
          <h1 className="text-5xl font-headline text-primary">
            Certificado de Finalización
          </h1>
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
          <div className="border-t-2 border-muted w-1/2 mx-auto pt-8">
             <p className="text-sm text-muted-foreground">Emitido el {new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            <p className="mt-2 text-xs font-light">
              MINT® Architectural Lift™ Congress
            </p>
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
