
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { GraduationCap, HeartPulse, Scissors, BrainCircuit, Stethoscope, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

const speakers = [
  {
    specialty: 'Oculoplástico',
    icon: <GraduationCap />,
    names: ['Dr. Jhon Bareño']
  },
  {
    specialty: 'Ginecología',
    icon: <HeartPulse />,
    names: ['Dra. Mercy']
  },
  {
    specialty: 'Cirugía Plástica',
    icon: <Scissors />,
    names: ['Dr. Carlos Tellez', 'Dr. Felipe Castro']
  },
  {
    specialty: 'Dermatología',
    icon: <BrainCircuit />,
    names: ['Dr. Alfonso Carvajal']
  },
  {
    specialty: 'Medicina Estética',
    icon: <Stethoscope />,
    names: [
      'Dra. Monica Jaimes', 
      'Dra. Liz Clavijo', 
      'Dra. Lina Rincon', 
      'Dra. Karen Chaves', 
      'Dra. Karen Quevedo', 
      'Dr. Alirio Pachon', 
      'Dra. Virginia Escobar', 
      'Dra. Claudia Garcia', 
      'Dra. Candelaria Contreras'
    ]
  },
];

export default function SplitScreenSpeakers() {
  const [activeSpecialty, setActiveSpecialty] = useState(speakers[0].specialty);
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

  return (
    <div className="flex flex-col md:flex-row min-h-[80vh]">
      {/* Left Pane */}
      <div className={cn("relative text-white text-center transition-all duration-700 ease-in-out", left)}>
        {leftImage && (
          <Image 
            src={leftImage.imageUrl}
            alt={leftImage.description}
            layout="fill"
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
              <ChevronRight className="h-6 w-6"/>
            </Button>
        </div>
      </div>
      
      {/* Right Pane */}
      <div className={cn("relative text-foreground text-center transition-all duration-700 ease-in-out", right)}>
         {rightImage && (
          <Image 
            src={rightImage.imageUrl}
            alt={rightImage.description}
            layout="fill"
            className="object-cover opacity-10"
             data-ai-hint={rightImage.imageHint}
          />
        )}
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 md:p-12">
            <div className="w-full max-w-md">
                <div className="flex justify-center mb-8 space-x-2">
                    {speakers.map(s => (
                        <button
                            key={s.specialty}
                            onClick={() => setActiveSpecialty(s.specialty)}
                            className={cn(
                                "p-3 rounded-full transition-colors",
                                activeSpecialty === s.specialty ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted-foreground/20"
                            )}
                        >
                            {s.icon}
                        </button>
                    ))}
                </div>
                {speakers.map(s => (
                    activeSpecialty === s.specialty && (
                        <div key={s.specialty} className="text-center animate-in fade-in duration-500">
                            <h3 className="font-headline text-2xl font-bold text-primary">{s.specialty}</h3>
                            <ul className="mt-4 space-y-2">
                                {s.names.map(name => (
                                    <li key={name} className="text-lg text-muted-foreground">{name}</li>
                                ))}
                            </ul>
                        </div>
                    )
                ))}
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
              <ChevronLeft className="h-6 w-6"/>
            </Button>
        </div>
      </div>
    </div>
  );
}
