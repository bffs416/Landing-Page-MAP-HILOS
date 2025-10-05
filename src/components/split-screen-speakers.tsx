
'use client';

import { useState, type ElementType } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { speakers } from '@/lib/assets';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { GraduationCap, HeartPulse, Scissors, BrainCircuit, Stethoscope } from 'lucide-react';

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
    if (direction === 'left' && paneState === 'right') {
        setPaneState('center');
    } else if (direction === 'left' && paneState === 'center') {
        setPaneState('left');
    } else if (direction === 'right' && paneState === 'left') {
        setPaneState('center');
    } else if (direction === 'right' && paneState === 'center') {
        setPaneState('right');
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
    <div className="flex flex-col md:flex-row min-h-[80vh]">
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
        <div className="absolute inset-y-0 right-0 hidden md:flex items-center">
            <Button
              onClick={() => handlePane('left')}
              size="icon"
              variant="secondary"
              className={cn(
                "h-24 w-12 rounded-l-full rounded-r-none transition-transform",
                paneState === 'left' && 'translate-x-12'
              )}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="m9 18 6-6-6-6"/></svg>
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
         <div className="absolute inset-y-0 left-0 hidden md:flex items-center">
            <Button
              onClick={() => handlePane('right')}
              size="icon"
              variant="secondary"
               className={cn(
                "h-24 w-12 rounded-r-full rounded-l-none transition-transform",
                paneState === 'right' && '-translate-x-12'
              )}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="m15 18-6-6 6-6"/></svg>
            </Button>
        </div>
      </div>
    </div>
  );
}
