import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const procedureSteps = [
  {
    value: 'step-1',
    title: 'Preparación y Consulta Inicial',
    content: 'Tu viaje comienza con una consulta personalizada. Evaluamos tu piel, discutimos tus objetivos y diseñamos un plan de tratamiento a medida. Te proporcionaremos instrucciones claras sobre cómo prepararte para el día del procedimiento, incluyendo recomendaciones sobre medicamentos y cuidados de la piel.',
  },
  {
    value: 'step-2',
    title: 'El Procedimiento MINT Lift',
    content: 'El día del tratamiento, se aplica anestesia local para garantizar tu comodidad. Los hilos MINT se insertan cuidadosamente en las capas subcutáneas de la piel utilizando una fina cánula. Este proceso, que dura entre 30 y 60 minutos, crea una tensión que eleva y reposiciona los tejidos de forma inmediata.',
  },
  {
    value: 'step-3',
    title: 'Cuidados Posteriores y Recuperación',
    content: 'Después del procedimiento, puede haber una leve hinchazón o hematomas, que suelen desaparecer en pocos días. Te daremos pautas detalladas de cuidado posterior, como evitar expresiones faciales exageradas y masajes faciales durante un tiempo. Los resultados finales se aprecian completamente a las pocas semanas, a medida que la producción de colágeno se activa.',
  },
];

export default function ProcedureInfo() {
  return (
    <section id="procedimiento" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Tu Viaje Hacia el Rejuvenecimiento
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Entendemos que cada paso es importante. Aquí te detallamos el proceso MINT Lift.
          </p>
        </div>
        <div className="mt-12">
          <Accordion type="single" collapsible defaultValue="step-1" className="w-full">
            {procedureSteps.map((step) => (
              <AccordionItem key={step.value} value={step.value}>
                <AccordionTrigger className="text-left font-headline text-lg">
                  {step.title}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {step.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
