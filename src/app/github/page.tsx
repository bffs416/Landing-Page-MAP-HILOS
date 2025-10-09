
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { GitCommit, Github, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const dynamic = 'force-dynamic';

interface GitHubCommit {
  sha: string;
  commit: {
    author: {
      name: string;
      date: string;
    };
    message: string;
  };
  author: {
    login: string;
  } | null;
}

async function getCommits(): Promise<GitHubCommit[] | null> {
  try {
    const res = await fetch('https://api.github.com/repos/bffs416/MINT-Architectural-Lift/commits');

    if (!res.ok) {
      console.error('Failed to fetch commits:', res.statusText);
      return null;
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching commits:', error);
    return null;
  }
}

export default async function GithubPage() {
  const commits = await getCommits();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-4xl mx-auto">
        <Card className="shadow-2xl">
          <CardHeader className="text-center">
            <div className="flex justify-center items-center gap-4 mb-4">
              <Github className="h-10 w-10 text-primary" />
              <CardTitle className="text-4xl font-headline">Historial de Commits</CardTitle>
            </div>
            <CardDescription>
              Mostrando los commits más recientes del repositorio{' '}
              <a 
                href="https://github.com/bffs416/MINT-Architectural-Lift" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:underline font-medium"
              >
                MINT-Architectural-Lift
              </a>.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {commits ? (
              <div className="border rounded-lg">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[120px]">Commit</TableHead>
                      <TableHead>Mensaje</TableHead>
                      <TableHead className="hidden sm:table-cell">Autor</TableHead>
                      <TableHead className="text-right">Fecha</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {commits.slice(0, 10).map((commit) => (
                      <TableRow key={commit.sha}>
                        <TableCell>
                          <Badge variant="outline" className="font-mono">
                            <GitCommit className="mr-2 h-3 w-3" />
                            {commit.sha.substring(0, 7)}
                          </Badge>
                        </TableCell>
                        <TableCell className="font-medium">{commit.commit.message.split('\n')[0]}</TableCell>
                        <TableCell className="hidden sm:table-cell">{commit.commit.author.name}</TableCell>
                        <TableCell className="text-right text-muted-foreground">
                          {new Date(commit.commit.author.date).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center p-8 border rounded-lg bg-muted/50">
                  <AlertTriangle className="h-12 w-12 text-destructive mb-4" />
                  <h3 className="text-xl font-semibold text-destructive">Error al Cargar Commits</h3>
                  <p className="text-muted-foreground mt-2">
                    No se pudo obtener el historial de commits desde GitHub en este momento.
                    Es posible que se haya alcanzado el límite de peticiones de la API.
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
