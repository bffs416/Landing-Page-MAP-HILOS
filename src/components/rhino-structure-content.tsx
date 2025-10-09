import { Layers, ShieldCheck, GitMerge, AlertTriangle, UserCheck, Syringe, ClipboardList, CheckCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const RhinoStructureContent = () => {
    return (
        <div className="space-y-4 text-card-foreground">
            <div>
                <h3 className="font-headline text-3xl font-bold text-primary">RhinoStructure™: Rinomodelación</h3>
                <p className="mt-2 text-base text-muted-foreground">
                    Protocolo para esculpir y definir la nariz sin cirugía.
                </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="font-headline text-xl">
                        <div className="flex items-center gap-2">
                           <UserCheck className="w-5 h-5 text-primary" />
                           Fundamentos
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-2">
                        <ul className="space-y-1.5 list-disc list-inside text-muted-foreground pl-2 text-sm">
                            <li><strong className="text-foreground">Objetivo:</strong> Corregir punta caída, definir el dorso y mejorar la rotación de la punta.</li>
                            <li><strong className="text-foreground">Candidato Ideal:</strong> Pacientes que buscan cambios menores y no tienen cirugía previa.</li>
                            <li><strong className="text-foreground">Mecanismo:</strong> Soporte estructural inmediato (hilos) y bioestimulación a largo plazo (colágeno).</li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="font-headline text-xl">
                        <div className="flex items-center gap-2">
                           <GitMerge className="w-5 h-5 text-primary" />
                           Técnica de Inserción
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-2">
                        <ul className="space-y-1.5 list-disc list-inside text-muted-foreground pl-2 text-sm">
                           <li><strong className="text-foreground">Columela y Punta:</strong> Se usan hilos espiculados fuertes para proyectar y rotar la punta, actuando como una "viga" de soporte.</li>
                           <li><strong className="text-foreground">Dorso Nasal:</strong> Se usan hilos más finos para rectificar y definir el dorso, creando un andamiaje.</li>
                           <li><strong className="text-foreground">Punto de Entrada Único:</strong> Se crea un solo punto de acceso en la punta nasal para todos los hilos.</li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="item-3">
                    <AccordionTrigger className="font-headline text-xl">
                        <div className="flex items-center gap-2">
                           <ShieldCheck className="w-5 h-5 text-primary" />
                           Seguridad y Sinergia
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-2">
                        <p className="text-sm text-muted-foreground">
                           La rinomodelación con hilos tiene un <strong className="text-foreground">menor riesgo vascular</strong> que los rellenos solos. La mejor estrategia combina hilos para el <strong className="text-foreground">soporte estructural</strong> y rellenos para el <strong className="text-foreground">volumen sutil</strong>.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="item-4">
                    <AccordionTrigger className="font-headline text-xl">
                        <div className="flex items-center gap-2">
                           <ClipboardList className="w-5 h-5 text-primary" />
                           Cuidados y Resultados
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-2">
                         <ul className="space-y-1.5 list-disc list-inside text-muted-foreground pl-2 text-sm">
                            <li>Hematomas e hinchazón leves son transitorios (1-2 semanas).</li>
                            <li>Se recomienda un masaje de autoestiramiento suave en la punta nasal.</li>
                            <li>Resultados satisfactorios a los 6 meses, con beneficios a más largo plazo por el colágeno.</li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default RhinoStructureContent;
