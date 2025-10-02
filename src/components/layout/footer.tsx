import Link from 'next/link';
import { Facebook, Instagram, Twitter, MessageSquare } from 'lucide-react';
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center">
            <Logo className="text-primary" />
          </div>
          <nav className="flex gap-4">
             <Button variant="ghost" size="icon" asChild>
              <Link href="#" aria-label="WhatsApp">
                <MessageSquare className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
            </Button>
          </nav>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MINT® Architectural Lift™. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
