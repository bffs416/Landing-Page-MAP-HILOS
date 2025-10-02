import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';

const results = [
  { beforeId: 'before-1', afterId: 'after-1' },
  { beforeId: 'before-2', afterId: 'after-2' },
  { beforeId: 'before-3', afterId: 'after-3' },
];

export default function BeforeAfter() {
  const getImage = (id: string) => PlaceHolderImages.find((img) => img.id === id);

  return (
    <section id="resultados" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Resultados Reales y Visibles
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Observa la transformación. Nuestros clientes disfrutan de un rejuvenecimiento notable y natural.
          </p>
        </div>
        <div className="mt-12">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {results.map((result, index) => {
                const beforeImage = getImage(result.beforeId);
                const afterImage = getImage(result.afterId);

                if (!beforeImage || !afterImage) return null;

                return (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="overflow-hidden shadow-lg">
                        <CardContent className="flex flex-col items-center justify-center p-0">
                          <div className="grid grid-cols-2 gap-0">
                            <div className="relative">
                              <Image
                                src={beforeImage.imageUrl}
                                alt={beforeImage.description}
                                width={400}
                                height={600}
                                className="aspect-[2/3] object-cover"
                                data-ai-hint={beforeImage.imageHint}
                              />
                              <Badge variant="secondary" className="absolute top-2 left-2">Antes</Badge>
                            </div>
                            <div className="relative">
                              <Image
                                src={afterImage.imageUrl}
                                alt={afterImage.description}
                                width={400}
                                height={600}
                                className="aspect-[2/3] object-cover"
                                data-ai-hint={afterImage.imageHint}
                              />
                              <Badge variant="default" className="absolute top-2 left-2 bg-primary/80 text-primary-foreground">Después</Badge>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="ml-12" />
            <CarouselNext className="mr-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
