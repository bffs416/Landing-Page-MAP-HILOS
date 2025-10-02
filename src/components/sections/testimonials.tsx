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
import { Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    id: 'testimonial-1',
    name: 'Ana García',
    quote: '¡El resultado superó mis expectativas! Me veo y me siento 10 años más joven. El procedimiento fue rápido y la recuperación muy sencilla. ¡Lo recomiendo totalmente!',
    rating: 5,
  },
  {
    id: 'testimonial-2',
    name: 'Carlos Martínez',
    quote: 'Estaba un poco nervioso, pero el equipo de MINT me hizo sentir muy cómodo. Los resultados son muy naturales, justo lo que buscaba. Mi mandíbula está mucho más definida.',
    rating: 5,
  },
  {
    id: 'testimonial-3',
    name: 'Laura Fernández',
    quote: 'Después de mi embarazo, noté mucha flacidez. Los hilos tensores fueron la solución perfecta. Recuperé la firmeza de mi piel sin necesidad de cirugía. ¡Estoy encantada!',
    rating: 5,
  },
];

export default function Testimonials() {
  const getImage = (id: string) => PlaceHolderImages.find((img) => img.id === id);

  return (
    <section id="testimonios" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            La Confianza de Nuestros Clientes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Historias reales de personas reales que han transformado su confianza con MINT Lift.
          </p>
        </div>
        <div className="mt-12">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => {
                const avatarImage = getImage(testimonial.id);
                return (
                  <CarouselItem key={testimonial.id}>
                    <div className="p-4">
                      <Card className="shadow-lg">
                        <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                          <Avatar className="w-20 h-20 mb-4">
                            {avatarImage && (
                              <AvatarImage src={avatarImage.imageUrl} alt={testimonial.name} data-ai-hint={avatarImage.imageHint} />
                            )}
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <p className="text-lg italic text-foreground">"{testimonial.quote}"</p>
                          <div className="flex justify-center my-4">
                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <p className="font-bold font-headline">{testimonial.name}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
