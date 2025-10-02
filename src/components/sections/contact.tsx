"use client";

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from "react-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from 'next/image';

import { submitContactForm } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Send, MessageSquare } from "lucide-react";
import { PlaceHolderImages } from '@/lib/placeholder-images';

const contactSchema = z.object({
  name: z.string().min(2, { message: "El nombre es demasiado corto." }),
  email: z.string().email({ message: "Por favor, introduce un correo válido." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? "Enviando..." : <>Quiero mi Valoración Ahora <Send className="ml-2" /></>}
    </Button>
  );
}

export default function Contact() {
  const [state, formAction] = useActionState(submitContactForm, { message: "", success: false });
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const mapImage = PlaceHolderImages.find((img) => img.id === 'clinic-map');

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "¡Éxito!",
          description: state.message,
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: state.message,
          variant: "destructive",
        });
      }
    }
  }, [state, toast, form]);

  return (
    <section id="contacto" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Agenda tu Cita</CardTitle>
                <CardDescription>Completa el formulario para dar el primer paso.</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    ref={formRef}
                    action={formAction}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre Completo</FormLabel>
                          <FormControl>
                            <Input placeholder="Tu nombre" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Correo Electrónico</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="tu@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mensaje</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="¿Qué área te gustaría mejorar?"
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <SubmitButton />
                  </form>
                </Form>
              </CardContent>
            </Card>
             <Button variant="outline" className="w-full mt-4">
                <MessageSquare className="mr-2"/> Chatea con nosotros en WhatsApp
            </Button>
          </div>
          <div className="relative min-h-[400px] lg:min-h-full rounded-lg overflow-hidden">
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
            <div className="absolute bottom-4 left-4 bg-background/80 p-4 rounded-md">
                <p className="font-bold text-foreground">Clínica Bogotá</p>
                <p className="text-sm text-muted-foreground">Carrera 123 #45-67, Bogotá, Colombia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
