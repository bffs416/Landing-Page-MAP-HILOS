'use client';
import { useRef, useEffect, type ReactNode } from 'react';
import Image from 'next/image';

type EffectCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export function EffectCard({ icon, title, description, imageUrl, imageHint }: EffectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--x', `${x}px`);
      card.style.setProperty('--y', `${y}px`);
    };

    card.addEventListener('mousemove', handleMouseMove);
    return () => card.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={cardRef} className="effect-card h-full">
       <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          data-ai-hint={imageHint}
        />
      </div>
      <span className="icon">{icon}</span>
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="shine" />
      <div className="background">
        <div className="tiles">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="tile" />
          ))}
        </div>
        <div className="line line-1" />
        <div className="line line-2" />
        <div className="line line-3" />
      </div>
      <svg
          className="effect-card__wave"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="M1440,100H0V64.2C120,42.8,240,21.3,360,21.3s240,21.5,360,21.5s240-21.5,360-21.5S1320,42.8,1440,64.2V100z"
          />
      </svg>
    </div>
  );
}
