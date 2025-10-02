import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
  {
    value: 'faq-1',
    question: '¿El procedimiento es doloroso?',
    answer: 'El procedimiento se realiza con anestesia local para minimizar cualquier molestia. La mayoría de los pacientes reportan sentir una leve presión, pero no dolor. Nuestro equipo se asegura de tu máximo confort durante todo el proceso.',
  },
  {
    value: 'faq-2',
    question: '¿Cuánto tiempo dura el resultado?',
    answer: 'Los resultados del lifting son inmediatos, pero el efecto completo se aprecia a los 3 meses, una vez que se ha estimulado la producción de colágeno. La duración puede variar entre 12 y 18 meses, dependiendo del tipo de hilo, la edad y el estilo de vida del paciente.',
  },
  {
    value: 'faq-3',
    question: '¿Cuál es el tiempo de recuperación?',
    answer: 'La recuperación es muy rápida. Puedes retomar la mayoría de tus actividades diarias inmediatamente. Se puede presentar una leve inflamación o algún hematoma que suelen desaparecer en pocos días. Te daremos pautas detalladas de cuidado post-procedimiento.',
  },
  {
      value: 'faq-4',
      question: '¿Soy un buen candidato/a para los hilos tensores?',
      answer: 'Los candidatos ideales son hombres y mujeres, generalmente entre 35 y 65 años, que presentan flacidez de leve a moderada y desean un rejuvenecimiento facial sin cirugía. Una consulta de valoración es esencial para determinar si este es el tratamiento adecuado para ti.',
  },
  {
      value: 'faq-5',
      question: '¿Cuál es el rango de precios?',
      answer: 'El costo del tratamiento es personalizado y varía según las áreas a tratar y la cantidad de hilos necesarios. En tu consulta de valoración, te proporcionaremos un presupuesto detallado y transparente sin ningún compromiso.',
  }
];

export default function Faq() {
  return (
    <section id="faq" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Preguntas Frecuentes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Resolvemos tus dudas más comunes sobre el MINT® Architectural Lift™.
          </p>
        </div>
        <div className="mt-12">
          <Accordion type="single" collapsible defaultValue="faq-1" className="w-full">
            {faqItems.map((item) => (
              <AccordionItem key={item.value} value={item.value} className="bg-background/50 border rounded-lg px-4 mb-2 shadow-sm">
                <AccordionTrigger className="text-left font-headline text-lg hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
