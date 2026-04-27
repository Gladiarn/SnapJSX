import type React from "react";

// Official brand-appropriate icons
export const NextJsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="40"
    height="40"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    role="img"
    {...props}
  >
    <title>Next.js</title>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14l4 8h-4V6z" />
  </svg>
);

export const TailwindIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="40" height="40" role="img" {...props}>
    <title>Tailwind CSS</title>
    <path
      d="M12 2C9.25 2 7 4.25 7 7c0 2.75 2.25 5 5 5h2.5c2.75 0 5 2.25 5 5s-2.25 5-5 5-5-2.25-5-5H7c0 2.75 2.25 5 5 5s5-2.25 5-5V7c0-2.75-2.25-5-5-5z"
      fill="#38BDF8"
    />
  </svg>
);

export const ReactIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="40"
    height="40"
    fill="none"
    stroke="#61DAFB"
    strokeWidth="2"
    role="img"
    {...props}
  >
    <title>React</title>
    <circle cx="12" cy="12" r="2.5" />
    <path
      d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"
      opacity="0.5"
      transform="rotate(60 12 12)"
    />
    <path
      d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"
      opacity="0.5"
      transform="rotate(120 12 12)"
    />
  </svg>
);

export const TypeScriptIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="40" height="40" role="img" {...props}>
    <title>TypeScript</title>
    <path d="M24 0v24H0V0h24z" fill="#3178C6" />
    <path
      d="M16.32 17.53c.42.42.92.62 1.5.62.6 0 1.1-.2 1.5-.6.4-.4.6-.9.6-1.5 0-.6-.2-1.1-.6-1.5-.4-.4-.9-.6-1.5-.6h-1.2v-1.6h1.2c.6 0 1.1-.2 1.5-.6.4-.4.6-.9.6-1.5 0-.6-.2-1.1-.6-1.5-.4-.4-.9-.6-1.5-.6-.6 0-1.1.2-1.5.6-.4.4-.6.9-.6 1.5h-1.5c0-1 .3-1.8 1-2.5.7-.7 1.6-1 2.6-1s1.9.3 2.6 1c.7.7 1 1.6 1 2.5 0 .8-.2 1.5-.7 2.1-.5.6-1.1.9-1.9 1.1v.1c.9.2 1.6.6 2.1 1.2.5.6.8 1.4.8 2.3 0 1-.3 1.9-1 2.6-.7.7-1.6 1-2.6 1-1 0-1.9-.3-2.6-1-.7-.7-1-1.6-1-2.6h1.5c0 .6.2 1.1.6 1.5zM7.3 18.5H5.4V6.5h3.6c1.1 0 2 .3 2.6.9.6.6.9 1.4.9 2.5 0 .8-.2 1.5-.6 2.1s-1 1-1.8 1.2c1 .2 1.7.7 2.2 1.3s.7 1.4.7 2.3c0 1.1-.4 2-1.1 2.7-.8.7-1.8 1.1-3 1.1H7.3zm0-5.8h-1.9v5.8h1.9c.7 0 1.3-.2 1.7-.6.4-.4.6-.9.6-1.6 0-.7-.2-1.2-.6-1.6s-1.1-.6-1.7-.6zM7.3 8.3h-1.9V6.5h1.9c.7 0 1.2.2 1.5.5s.5.7.5 1.2c0 .5-.2.9-.5 1.2-.4.4-.9.5-1.5.5z"
      fill="#fff"
    />
  </svg>
);

export const VercelIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="40"
    height="40"
    fill="currentColor"
    role="img"
    {...props}
  >
    <title>Vercel</title>
    <path d="M12 0L24 20.784H0L12 0z" />
  </svg>
);

export const BiomeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="40"
    height="40"
    fill="currentColor"
    role="img"
    {...props}
  >
    <title>Biome</title>
    <path d="M12 2L2 22h20L12 2z" />
  </svg>
);
