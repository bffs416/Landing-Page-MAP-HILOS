
"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "El nombre es demasiado corto"),
  email: z.string().email("El correo electrónico no es válido"),
  procedure: z.string().optional(),
  message: z.string().min(10, "El mensaje es demasiado corto"),
});

const certificateSchema = z.object({
  name: z.string().min(2, { message: "El nombre es requerido." }),
  phone: z.string().min(8, { message: "El teléfono es requerido." }),
  city: z.string().min(3, { message: "La ciudad es requerida." }),
});

export type FormState = {
  message: string;
  success: boolean;
};

export type CertificateFormState = {
  message: string;
  success: boolean;
  name?: string;
}

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

  console.log("Contact form submitted:", validatedFields.data);

  return {
    message: "¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.",
    success: true,
  };
}

export async function submitCertificateForm(
  prevState: CertificateFormState,
  formData: FormData
): Promise<CertificateFormState> {
  const validatedFields = certificateSchema.safeParse({
    name: formData.get("name"),
    phone: formData.get("phone"),
    city: formData.get("city"),
  });

  if (!validatedFields.success) {
    return {
      message: "Error de validación. Por favor, revisa los campos.",
      success: false,
    };
  }

  console.log("Certificate form submitted:", validatedFields.data);

  return {
    message: "¡Datos recibidos! Generando tu certificado...",
    success: true,
    name: validatedFields.data.name,
  };
}
