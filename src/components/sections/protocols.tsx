'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';

const facialProtocols = [
  {
    id: 'vectorlift',
    name: 'VectorLift™ (Óvalo Facial)',
    description: 'Redefine el contorno mandibular y combate la flacidez para un óvalo facial más firme y juvenil.',
    candidate: 'Personas con pérdida de definición en la mandíbula, jowls incipientes o flacidez en el tercio inferior del rostro.',
    process: 'Tras un mapeo preciso, se insertan hilos espiculados que traccionan y reposicionan los tejidos, creando un efecto lifting inmediato.',
    recovery: 'Recuperación rápida con mínima inflamación. Los resultados mejoran progresivamente durante 3 meses gracias a la bioestimulación de colágeno.',
    images: [{ beforeId: 'before-1', afterId: 'after-1' }],
  },
  {
    id: 'rhinostructure',
    name: 'RhinoStructure™ (Nariz)',
    description: 'Eleva la punta nasal y estiliza el dorso sin cirugía, logrando una nariz más armónica con el rostro.',
    candidate: 'Ideal para corregir una punta nasal caída, irregularidades leves del dorso o para quienes desean un perfil más refinado sin rinoplastia.',
    process: 'Se insertan hilos de soporte en el tabique y la punta nasal para crear una estructura interna que eleva y define.',
    recovery: 'Puede haber una ligera sensibilidad. Se recomienda no usar gafas pesadas por unos días. Resultados visibles de inmediato.',
    images: [],
  },
  {
    id: 'apexlift',
    name: 'ApexLift™ (Fox Eyes)',
    description: 'Logra una mirada más abierta y rasgada, elevando la cola de la ceja para un efecto "foxy eyes" sutil y elegante.',
    candidate: 'Quienes buscan rejuvenecer la mirada, corregir cejas caídas o conseguir un look más almendrado en sus ojos.',
    process: 'Hilos tensores se anclan en la zona temporal para elevar el extremo exterior de la ceja de forma controlada.',
    recovery: 'Inflamación mínima. Se aconseja evitar gesticulación facial exagerada durante las primeras 48 horas.',
    images: [{ beforeId: 'before-2', afterId: 'after-2' }],
  },
  {
    id: 'contourneck',
    name: 'ContourNeck™ (Cuello y Papada)',
    description: 'Tensa la piel del cuello y reduce la apariencia de la papada, devolviendo un ángulo cervico-mandibular definido.',
    candidate: 'Personas con flacidez en el cuello, "bandas platismales" visibles o acumulación de grasa submentoniana (papada).',
    process: 'Se crea una malla de hilos monofilamento y espiculados para tensar la piel y compactar el tejido adiposo.',
    recovery: 'Posibles hematomas leves. Se recomienda dormir boca arriba los primeros días. La mejoría es notable y progresiva.',
    images: [{ beforeId: 'before-3', afterId: 'after-3' }],
  },
];

const corporalProtocols = [
    {
    id: 'coredefine',
    name: 'CoreDefine™ (Abdomen)',
    description: 'Mejora la flacidez abdominal post-parto o por pérdida de peso, reafirmando la piel y mejorando su textura.',
    candidate: 'Personas con laxitud cutánea en el abdomen que no desean o no necesitan una abdominoplastia.',
    process: 'Se diseña una red de hilos cruzados que actúan como un soporte interno, redensificando la piel.',
    recovery: 'Se puede requerir el uso de una faja de compresión suave. Actividad física intensa restringida por 2 semanas.',
    images: [],
  },
   {
    id: 'armcontour',
    name: 'ArmContour™ (Brazos)',
    description: 'Combate la flacidez en la cara interna de los brazos, conocida como "alas de murciélago", para unos brazos más tonificados.',
    candidate: 'Ideal para quienes notan piel laxa en los brazos al levantarlos, a pesar del ejercicio.',
    process: 'Se aplican hilos a lo largo del brazo para crear un efecto de tensado que recoge la piel sobrante.',
    recovery: 'Evitar levantar objetos pesados durante la primera semana. Los resultados son visibles al instante y mejoran con el tiempo.',
    images: [],
  },
   {
    id: 'glutecurve',
    name: 'GluteCurve™ (Glúteos)',
    description: 'Eleva y redefine la forma de los glúteos, corrigiendo la flacidez y aportando una apariencia más redondeada y firme.',
    candidate: 'Personas que han perdido volumen o notan caída en los glúteos por el paso del tiempo o cambios de peso.',
    process: 'Hilos de alta tracción se utilizan para elevar el surco subglúteo y reposicionar el tejido, creando un efecto "push-up".',
    recovery: 'Evitar sentarse directamente sobre la zona tratada por periodos prolongados durante los primeros días. Resultados espectaculares.',
    images: [],
  },
];

const getImage = (id: string) => PlaceHolderImages.find((img) => img.id === id);


function ProtocolDetails({ protocol }: { protocol: (typeof facialProtocols)[0] | (typeof corporalProtocols)[0] }) {
  return (
    <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>¿Qué es y qué corrige?</AccordionTrigger>
        <AccordionContent>{protocol.description}</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>El Candidato Ideal</AccordionTrigger>
        <AccordionContent>{protocol.candidate}</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>El Proceso Paso a Paso</AccordionTrigger>
        <AccordionContent>{protocol.process}</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Resultados y Recuperación</AccordionTrigger>
        <AccordionContent>{protocol.recovery}</AccordionContent>
      </AccordionItem>
       {protocol.images && protocol.images.length > 0 && (
        <AccordionItem value="item-5">
            <AccordionTrigger>Galería de Antes y Después</AccordionTrigger>
            <AccordionContent>
                <Carousel
                    opts={{
                        align: 'start',
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                    {protocol.images.map((result, index) => {
                        const beforeImage = getImage(result.beforeId);
                        const afterImage = getImage(result.afterId);

                        if (!beforeImage || !afterImage) return null;

                        return (
                        <CarouselItem key={index}>
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
            </AccordionContent>
        </AccordionItem>
       )}
    </Accordion>
  );
}


export default function Protocols() {
  return (
    <section id="protocolos" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Explora Nuestros Protocolos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Soluciones personalizadas para la arquitectura facial y corporal, diseñadas para resultados naturales y duraderos.
          </p>
        </div>
        <div className="mt-12">
          <Tabs defaultValue="facial" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-sm mx-auto">
              <TabsTrigger value="facial">Facial</TabsTrigger>
              <TabsTrigger value="corporal">Corporal</TabsTrigger>
            </TabsList>
            <TabsContent value="facial">
              <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto mt-8 space-y-4">
                {facialProtocols.map((protocol) => (
                  <AccordionItem value={protocol.id} key={protocol.id} className="border bg-card rounded-lg px-4">
                    <AccordionTrigger className="font-headline text-lg hover:no-underline">{protocol.name}</AccordionTrigger>
                    <AccordionContent className="pt-2">
                        <ProtocolDetails protocol={protocol} />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
            <TabsContent value="corporal">
                <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto mt-8 space-y-4">
                    {corporalProtocols.map((protocol) => (
                    <AccordionItem value={protocol.id} key={protocol.id} className="border bg-card rounded-lg px-4">
                        <AccordionTrigger className="font-headline text-lg hover:no-underline">{protocol.name}</AccordionTrigger>
                        <AccordionContent className="pt-2">
                            <ProtocolDetails protocol={protocol} />
                        </AccordionContent>
                    </AccordionItem>
                    ))}
                </Accordion>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
