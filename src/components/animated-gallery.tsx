
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

const galleryImages = [
  { id: 'gallery-1', rotation: 'rotate-6' },
  { id: 'gallery-2', rotation: '-rotate-12' },
  { id: 'gallery-3', rotation: 'rotate-6' },
  { id: 'gallery-4', rotation: '-rotate-12' },
];

export default function AnimatedGallery() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center -space-x-4 sm:-space-x-8 md:-space-x-12">
      {galleryImages.map((galleryItem, index) => {
        const imageData = PlaceHolderImages.find(img => img.id === galleryItem.id);
        if (!imageData) return null;

        return (
          <Link href="#" key={imageData.id}>
            <div className="w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 flex-shrink-0">
               <Image
                src={imageData.imageUrl}
                alt={imageData.description}
                width={400}
                height={600}
                className={cn(
                    "rounded-xl duration-500 hover:rotate-0 hover:-translate-y-12 h-full w-full object-cover hover:scale-125 transform origin-bottom shadow-lg",
                    galleryItem.rotation
                )}
                data-ai-hint={imageData.imageHint}
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
