'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Upload, Wand2 } from 'lucide-react';

export default function AiConsultation() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const placeholder = PlaceHolderImages.find((img) => img.id === 'ai-upload-placeholder');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setUploadedImage(URL.createObjectURL(file));
    }
  };

  return (
    <section id="ia-consulta" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Visualiza Tu Futuro Rostro
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Prueba nuestra herramienta de IA. Sube una foto y obtén una simulación de los posibles resultados con MINT Lift.
          </p>
        </div>
        <div className="mt-12">
          <Card className="max-w-4xl mx-auto shadow-xl">
            <div className="grid md:grid-cols-2">
              <div className="p-6 flex flex-col justify-center">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Consulta Virtual con IA</CardTitle>
                  <CardDescription>
                    Sube una foto de frente y sin maquillaje para obtener la mejor simulación.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                       <label htmlFor="picture-upload" className="sr-only">Subir foto</label>
                       <Input id="picture-upload" type="file" accept="image/*" onChange={handleFileChange} />
                    </div>
                    <Button className="w-full" disabled={!uploadedImage}>
                      <Wand2 className="mr-2" /> Analizar y Simular
                    </Button>
                  </div>
                </CardContent>
                <CardFooter>
                    <p className="text-xs text-muted-foreground">Esta herramienta es solo para fines ilustrativos. Los resultados reales pueden variar. Una consulta profesional es necesaria.</p>
                </CardFooter>
              </div>
              <div className="p-6 bg-secondary/50 rounded-r-lg flex items-center justify-center">
                <div className="relative w-full aspect-square max-w-sm">
                  <Image
                    src={uploadedImage || placeholder?.imageUrl || ''}
                    alt={uploadedImage ? "Foto subida por el usuario" : placeholder?.description || "Placeholder"}
                    fill
                    className="rounded-lg object-cover"
                    data-ai-hint={placeholder?.imageHint}
                  />
                  {!uploadedImage && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 rounded-lg text-white">
                        <Upload className="h-10 w-10"/>
                        <p className="mt-2 text-sm">Sube tu foto</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
