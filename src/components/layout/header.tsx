import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Logo from '@/components/logo';

const navLinks = [
  { href: '#tecnicas', label: 'Técnicas' },
  { href: '#resultados', label: 'Resultados' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#clinicas', label: 'Clínicas' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo className="text-primary" />
          </Link>
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button asChild>
            <Link href="#contacto">Agendar Consulta</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
