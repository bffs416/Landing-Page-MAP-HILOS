
'use client';

import { useState, type ElementType } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { speakers } from '@/lib/assets';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { GraduationCap, HeartPulse, Scissors, BrainCircuit, Stethoscope, ChevronLeft, ChevronRight } from 'lucide-react';

const iconMap: { [key: string]: ElementType } = {
  GraduationCap,
  HeartPulse,
  Scissors,
  BrainCircuit,
  Stethoscope,
};


// Get unique specialties and their icons
const specialties = Array.from(new Set(speakers.map(s => s.specialty)))
  .map(specialty => {
    const speaker = speakers.find(s => s.specialty === specialty);
    return {
      specialty: specialty,
      iconName: speaker!.iconName
    };
  });

export default function SplitScreenSpeakers() {
  const [activeSpecialty, setActiveSpecialty] = useState(specialties[0].specialty);
  const [paneState, setPaneState] = useState<'left' | 'right' | 'center'>('center');
  
  const leftImage = PlaceHolderImages.find(img => img.id === 'speakers-left');
  const rightImage = PlaceHolderImages.find(img => img.id === 'speakers-right');

  const handlePane = (direction: 'left' | 'right') => {
    if (paneState === 'center') {
      setPaneState(direction);
    } else {
      setPaneState('center');
    }
  };

  const getWidths = () => {
    switch (paneState) {
      case 'left': return { left: 'w-full md:w-[75%]', right: 'w-full md:w-[25%]' };
      case 'right': return { left: 'w-full md:w-[25%]', right: 'w-full md:w-[75%]' };
      case 'center':
      default: return { left: 'w-full md:w-1/2', right: 'w-full md:w-1/2' };
    }
  };
  
  const { left, right } = getWidths();

  const filteredSpeakers = speakers.filter(s => s.specialty === activeSpecialty);

  return (
    <div className="flex flex-col md:flex-row min-h-[80vh] relative">
      {/* Left Pane */}
      <div className={cn("relative text-white text-center transition-all duration-700 ease-in-out", left)}>
        {leftImage && (
          <Image 
            src={leftImage.imageUrl}
            alt={leftImage.description}
            fill
            className="object-cover"
            data-ai-hint={leftImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 md:p-12">
            <h2 className="font-headline text-5xl md:text-7xl font-bold">Speakers</h2>
            <p className="mt-4 text-xl text-white/80">Nacionales</p>
        </div>
      </div>
      
      {/* Divider and Controls */}
      <div className="absolute z-20 inset-y-0 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center justify-center gap-2">
          <div className="h-full w-0.5 bg-white/20"></div>
          <div className="absolute top-1/2 -translate-y-1/2 flex flex-col gap-2">
            <Button
              onClick={() => handlePane('left')}
              size="icon"
              variant="secondary"
              className="h-12 w-12 rounded-full"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
             <Button
              onClick={() => handlePane('right')}
              size="icon"
              variant="secondary"
              className="h-12 w-12 rounded-full"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
      </div>
      
      {/* Right Pane */}
      <div className={cn("relative text-foreground text-center transition-all duration-700 ease-in-out py-16", right)}>
         {rightImage && (
          <Image 
            src={rightImage.imageUrl}
            alt={rightImage.description}
            fill
            className="object-cover opacity-10"
             data-ai-hint={rightImage.imageHint}
          />
        )}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 md:px-8">
            <div className="w-full max-w-lg mx-auto">
                <div className="flex justify-center mb-10 space-x-2 flex-wrap gap-2">
                    {specialties.map(s => {
                      const Icon = iconMap[s.iconName];
                      return (
                        <button
                            key={s.specialty}
                            onClick={() => setActiveSpecialty(s.specialty)}
                            className={cn(
                                "p-3 rounded-full transition-colors",
                                activeSpecialty === s.specialty ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted-foreground/20"
                            )}
                            title={s.specialty}
                        >
                            {Icon && <Icon />}
                        </button>
                      )
                    })}
                </div>

                <Carousel
                  opts={{
                    align: "start",
                    loop: filteredSpeakers.length > 1,
                  }}
                  className="w-full"
                >
                  <CarouselContent>
                    {filteredSpeakers.map((speaker, index) => (
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/1">
                        <div className="p-1">
                          <Card className="overflow-hidden shadow-lg hover:shadow-primary/20 transition-shadow">
                            <CardContent className="flex flex-col items-center justify-center p-6 text-center aspect-[3/4]">
                               <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden ring-4 ring-primary/20">
                                <Image
                                  src={speaker.imageUrl}
                                  alt={speaker.name}
                                  fill
                                  className="object-cover"
                                  data-ai-hint="portrait person"
                                />
                               </div>
                              <h4 className="font-headline text-xl font-bold">{speaker.name}</h4>
                              <p className="text-sm text-primary">{speaker.specialty}</p>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-[-20px] top-1/2 -translate-y-1/2" />
                  <CarouselNext className="absolute right-[-20px] top-1/2 -translate-y-1/2" />
                </Carousel>
                
            </div>
        </div>
      </div>
    </div>
  );
}
