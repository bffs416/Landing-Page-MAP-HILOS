"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "El nombre es demasiado corto"),
  email: z.string().email("El correo electrónico no es válido"),
  procedure: z.string().optional(),
  message: z.string().min(10, "El mensaje es demasiado corto"),
});

export type FormState = {
  message: string;
  success: boolean;
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    procedure: formData.get("procedure"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: "Error de validación. Por favor, revisa los campos.",
      success: false,
    };
  }

  // Here you would typically send an email or save to a database.
  // For this example, we'll just log the data to the console.
  console.log("Contact form submitted:", validatedFields.data);

  return {
    message: "¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.",
    success: true,
  };
}
