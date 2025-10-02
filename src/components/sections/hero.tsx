import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  return (
    <section id="home" className="relative h-[calc(100vh-4rem)] w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container max-w-7xl text-center text-foreground">
          <div className="bg-background/80 backdrop-blur-sm rounded-xl p-8 md:p-12 inline-block">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Redefine Tu Belleza Natural
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 md:text-xl">
              Descubre el poder rejuvenecedor de los hilos tensores MINT. Un lifting sin cirugía para resultados elegantes y duraderos.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="#contacto">
                  Agendar una Consulta <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <Link href="#tecnicas">
                  Saber Más
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
