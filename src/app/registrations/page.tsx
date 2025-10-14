
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { getSupabaseClient } from '@/lib/supabase';
import { AlertTriangle, Database } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const dynamic = 'force-dynamic';

interface CertificateRegistration {
  id: number;
  created_at: string;
  name: string;
  phone: string;
  city: string;
  level: string;
  score: number;
}

async function getRegistrations(): Promise<CertificateRegistration[] | null> {
  try {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from('certificates')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching registrations:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error in getRegistrations function:', error);
    return null;
  }
}

export default async function RegistrationsPage() {
  const registrations = await getRegistrations();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center p-4 sm:p-8">
      <div className="w-full max-w-6xl mx-auto">
        <Card className="shadow-2xl">
          <CardHeader className="text-center">
            <div className="flex justify-center items-center gap-4 mb-4">
              <Database className="h-10 w-10 text-primary" />
              <CardTitle className="text-4xl font-headline">Registros de Certificados</CardTitle>
            </div>
            <CardDescription>
              Mostrando los participantes que han completado la trivia y generado un certificado.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {registrations ? (
              <div className="border rounded-lg">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nombre</TableHead>
                      <TableHead>Teléfono</TableHead>
                      <TableHead className="hidden sm:table-cell">Ciudad</TableHead>
                      <TableHead>Nivel</TableHead>
                      <TableHead className="text-right">Puntuación</TableHead>
                      <TableHead className="text-right hidden md:table-cell">Fecha</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {registrations.map((reg) => (
                      <TableRow key={reg.id}>
                        <TableCell className="font-medium">{reg.name}</TableCell>
                        <TableCell>{reg.phone}</TableCell>
                        <TableCell className="hidden sm:table-cell">{reg.city}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{reg.level}</Badge>
                        </TableCell>
                        <TableCell className="text-right font-mono">{reg.score.toFixed(0)}%</TableCell>
                        <TableCell className="text-right text-muted-foreground hidden md:table-cell">
                          {new Date(reg.created_at).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center p-8 border rounded-lg bg-muted/50">
                  <AlertTriangle className="h-12 w-12 text-destructive mb-4" />
                  <h3 className="text-xl font-semibold text-destructive">Error al Cargar los Registros</h3>
                  <p className="text-muted-foreground mt-2">
                    No se pudo obtener la información desde Supabase en este momento.
                    Verifica la conexión o las credenciales de la base de datos.
                  </p>
              </div>
            )}
          </CardContent>
        </Card>
        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <Link href="/">Volver al Inicio</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
