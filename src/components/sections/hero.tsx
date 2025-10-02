import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  return (
    <section id="home" className="relative h-screen w-full">
      <div className="absolute inset-0 z-0">
        {heroImage && (
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src="https://storage.googleapis.com/builder-prod.appspot.com/unsafe/https://firebasestorage.googleapis.com/v0/b/firebase-rules-prototyper.appspot.com/o/misc%2F1722444654_elegant-video.mp4?alt=media&token=c2d8c3f7-9a00-4f51-b847-f58c213459c5" type="video/mp4" />
            </video>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container max-w-7xl text-center text-foreground">
          <div className="bg-background/80 backdrop-blur-sm rounded-xl p-8 md:p-12 inline-block">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              MINT® Architectural Lift™
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 md:text-xl">
              La ciencia y el arte de rejuvenecer sin cirugía. Descubre cómo podemos re-arquitecturizar tu belleza natural.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="#contacto">
                  Agendar mi Consulta de Valoración <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
