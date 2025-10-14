
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const galleryImages = [
  { id: 'gallery-1', rotation: 'rotate-6', src: '/gallery-1.jpg', hint: 'woman portrait' },
  { id: 'gallery-2', rotation: '-rotate-12', src: '/gallery-2.jpg', hint: 'woman jawline' },
  { id: 'gallery-3', rotation: 'rotate-6', src: '/gallery-3.jpg', hint: 'smooth skin' },
  { id: 'gallery-4', rotation: '-rotate-12', src: '/joven_relajado_sonriente.png', hint: 'woman profile' },
];

export default function AnimatedGallery() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center -space-x-4 sm:-space-x-8 md:-space-x-12">
      {galleryImages.map((galleryItem, index) => {
        return (
          <Link href="#" key={galleryItem.id}>
            <div className="w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 flex-shrink-0">
               <Image
                src={galleryItem.src}
                alt={galleryItem.hint}
                width={256}
                height={320}
                className={cn(
                    "rounded-xl duration-500 hover:rotate-0 hover:-translate-y-12 h-full w-full object-cover hover:scale-125 transform origin-bottom shadow-lg",
                    galleryItem.rotation
                )}
                data-ai-hint={galleryItem.hint}
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
