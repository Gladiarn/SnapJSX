export interface ShowcaseProject {
  id: string;
  title: string;
  description: string;
  author: string;
  videoSrc: string;
  thumbnail: string;
  tags: string[];
  link?: string;
  github?: string;
  featured?: boolean;
}

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: "modern-portfolio",
    title: "Modern Developer Portfolio",
    description:
      "A high-performance personal website featuring smooth transitions, glassmorphism UI, and dark mode optimization.",
    author: "Ianne Carl",
    videoSrc: "/Showcase/Portfolio/Portfolio-Vid.mp4",
    thumbnail: "/Showcase/Portfolio/Portfolio-Pic.png",
    tags: ["React", "Framer Motion", "Tailwind CSS", "Next.js"],
    link: "https://portfolio.snapjsx.com",
    github: "https://github.com/Gladiarn",
    featured: true,
  },
  {
    id: "eco-track",
    title: "Eco-Track Dashboard",
    description:
      "Sustainability monitoring platform with real-time data visualization and complex JSX charts.",
    author: "SnapJSX Team",
    videoSrc: "/Showcase/Portfolio/Portfolio-Vid.mp4", // Temporary fallback
    thumbnail: "/Showcase/Portfolio/Portfolio-Pic.png", // Temporary fallback
    tags: ["Charts", "Dashboard", "Analytics"],
    link: "#",
  },
  {
    id: "quantum-ui",
    title: "Quantum UI System",
    description:
      "A dark-themed design system component library focused on high-speed user interactions.",
    author: "Design Lead",
    videoSrc: "/Showcase/Portfolio/Portfolio-Vid.mp4",
    thumbnail: "/Showcase/Portfolio/Portfolio-Pic.png",
    tags: ["Design System", "Gold Theme"],
    link: "#",
  },
  {
    id: "nexus-commerce",
    title: "Nexus E-Commerce",
    description:
      "Ultra-fast headless commerce template with high-fidelity component blocks.",
    author: "Web Elite",
    videoSrc: "/Showcase/Portfolio/Portfolio-Vid.mp4",
    thumbnail: "/Showcase/Portfolio/Portfolio-Pic.png",
    tags: ["E-commerce", "Performance"],
    link: "#",
  },
  {
    id: "pixel-blog",
    title: "Pixel Blog Engine",
    description:
      "A minimal, content-focused blogging platform built with core SnapJSX primitives.",
    author: "Open Source Contributor",
    videoSrc: "/Showcase/Portfolio/Portfolio-Vid.mp4",
    thumbnail: "/Showcase/Portfolio/Portfolio-Pic.png",
    tags: ["Blog", "Minimalism"],
    link: "#",
  },
];
