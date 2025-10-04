'use client';
import { useRef, useEffect, type ReactNode } from 'react';

type EffectCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export function EffectCard({ icon, title, description }: EffectCardProps) {
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
    </div>
  );
}
