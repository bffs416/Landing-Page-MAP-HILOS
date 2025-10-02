import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const clinics = [
  {
    name: 'MINT Clinic Polanco',
    address: 'Av. Pdte. Masaryk 123, Polanco, CDMX',
    phone: '+52 55 1234 5678',
  },
  {
    name: 'MINT Clinic Condesa',
    address: 'Av. Amsterdam 456, Condesa, CDMX',
    phone: '+52 55 8765 4321',
  },
  {
    name: 'MINT Clinic Santa Fe',
    address: 'Vasco de Quiroga 789, Santa Fe, CDMX',
    phone: '+52 55 5555 8888',
  },
];

export default function ClinicLocator() {
  const mapImage = PlaceHolderImages.find((img) => img.id === 'clinic-map');

  return (
    <section id="clinicas" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Encuentra tu Clínica MINT
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Nuestros especialistas certificados están listos para atenderte en nuestras ubicaciones premium.
          </p>
        </div>
        <div className="mt-12">
          <Card className="shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-3">
              <div className="lg:col-span-1 p-6">
                <h3 className="font-headline text-2xl mb-4">Nuestras Clínicas</h3>
                <div className="space-y-6">
                  {clinics.map((clinic, index) => (
                    <div key={index}>
                      <p className="font-semibold text-foreground">{clinic.name}</p>
                      <div className="flex items-start gap-2 mt-1 text-muted-foreground">
                        <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                        <span>{clinic.address}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1 text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        <span>{clinic.phone}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-2 relative min-h-[300px] lg:min-h-0">
                {mapImage && (
                  <Image
                    src={mapImage.imageUrl}
                    alt={mapImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={mapImage.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-primary/10"></div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
