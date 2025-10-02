import type { SVGProps } from 'react';

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <div className="flex items-center gap-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9.5 2.8c1.8-1 3.9-1 5.7 0" />
      <path d="M12 18.2c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5Z" />
      <path d="M12 21.2c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8Z" />
    </svg>
    <span className="font-headline text-lg font-bold text-foreground">
      MINT® Lift™
    </span>
  </div>
);

export default Logo;
