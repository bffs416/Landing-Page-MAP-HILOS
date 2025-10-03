import type { SVGProps } from 'react';

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <div className="flex items-center gap-2">
    <span className="font-headline text-lg font-bold text-foreground">
      MINT® Lift™
    </span>
  </div>
);

export default Logo;
