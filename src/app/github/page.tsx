
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { GitCommit, Github } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const commits = [
  {
    sha: 'a1b2c3d',
    author: 'Gemini',
    date: '2024-07-25',
    message: 'feat: Add GitHub commit history page',
  },
  {
    sha: 'e4f5g6h',
    author: 'Gemini',
    date: '2024-07-24',
    message: 'fix: Adjust font size on timeline cards',
  },
  {
    sha: 'i7j8k9l',
    author: 'Gemini',
    date: '2024-07-24',
    message: 'style: Increase global font size for better readability',
  },
  {
    sha: 'm0n1p2q',
    author: 'Gemini',
    date: '2024-07-24',
    message: 'fix: Stabilize accordion icon on expand/collapse',
  },
  {
    sha: 'r3s4t5u',
    author: 'Gemini',
    date: '2024-07-23',
    message: 'refactor: Standardize protocol information sections',
  },
  {
    sha: 'v6w7x8y',
    author: 'Gemini',
    date: '2024-07-23',
    message: 'style: Enhance protocol buttons with animations',
  },
  {
    sha: 'z9a8b7c',
    author: 'Gemini',
    date: '2024-07-22',
    message: 'feat: Implement hide/show logic for protocol cards',
  },
];

export default function GithubPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-4xl mx-auto">
        <Card className="shadow-2xl">
          <CardHeader className="text-center">
            <div className="flex justify-center items-center gap-4 mb-4">
              <Github className="h-10 w-10 text-primary" />
              <CardTitle className="text-4xl font-headline">Historial de Commits</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
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
                  {commits.map((commit) => (
                    <TableRow key={commit.sha}>
                      <TableCell>
                        <Badge variant="outline" className="font-mono">
                          <GitCommit className="mr-2 h-3 w-3" />
                          {commit.sha.substring(0, 7)}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-medium">{commit.message}</TableCell>
                      <TableCell className="hidden sm:table-cell">{commit.author}</TableCell>
                      <TableCell className="text-right text-muted-foreground">{commit.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
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

    